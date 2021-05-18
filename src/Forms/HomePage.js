import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import PopUpPage from "./SandLPop";
import firebase from "../firebase";
import { 
    NavigationContainer, 
    NavItems,
    NavItemsContainer,
    NavTitle,
    NavTitleContainer
 } from "./style";

 const HomePage = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()

    const[SignupModal, setSignupModal] = useState(false)
    const[LoginModal, setLoginModal] = useState(false)
    const[userData, setUserData] = useState(null)
    const[userIDlist, setUserIDlist] = useState([])

    useEffect(() => {
        const userDataRef = firebase.database().ref(`Users`);
        userDataRef.on('value', (snapshot) => {
            const newData = snapshot.val()
            setUserData(newData)
        })
    }, [])
    useEffect(() => {
        if (userData) {
            const data = Object.entries(userData).map((d) => {
                return d[1]
            })
        setUserIDlist(data)
        }
    }, [userData])

    const HandleSignupState = () => setSignupModal(cur => !cur)
    const HandleLoginState = () => setLoginModal(cur => !cur)

    const HandleNewSignUP = (userDetail, Password) => {
        const newSignUP = firebase.database().ref('Users');
        const Data = {
            userID : userDetail,
            password: Password
        }
        let flag = true
        userIDlist.map(d => {
            if(d.userID === Data.userID) flag = false
            return true
        })
        flag ? newSignUP.push(Data) : alert('UserID already Exists!')
    }
    const HandleUserLogin = (userDetail, Password) => {
        let flag = false
        userIDlist.map(d => {
            if((d.userID === userDetail) && (d.password === Password)) flag = true
            return true
        })
        flag 
        ? (() => {
            dispatch({type: 'TOGGLE_LOGIN'})
            history.push(`/${userDetail}`)
        })() 
        : alert('INVALID CREDENTIALS!')
    }

    return(
        <Fragment>
            <NavigationContainer>
                <NavTitleContainer>
                    <NavTitle>Welcome to KRED Robotics</NavTitle>
                </NavTitleContainer>
                <NavItemsContainer>
                    <NavItems onClick={HandleSignupState}>Signup</NavItems>
                    <NavItems onClick={HandleLoginState}>Login</NavItems>
                </NavItemsContainer>
            </NavigationContainer>
            {SignupModal && 
            <PopUpPage 
                title={'Enter Details'} 
                cta={'SignUp'} 
                modalState={HandleSignupState}
                ForwardFunction={HandleNewSignUP} />}
            {LoginModal && 
            <PopUpPage 
                title={'Enter Login Credentials'} 
                cta={'LogIn'} 
                modalState= {HandleLoginState} 
                ForwardFunction={HandleUserLogin} />}
        </Fragment>
    )
 }

export default HomePage