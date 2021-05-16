import { Fragment, useState } from "react";
import Modal from "../Components/Modal";
import useInput from "./hooks/use-input";
import UserIcon from "../icons/user.svg";
import LockIcon from "../icons/lock.svg";
import eyeVisible from "../icons/eyeVisible.png";
import eyeInVisible from "../icons/eyeInVisible.png";
import { 
    InputCover, 
    InputImg, 
    SignupHeadder, 
    SingleCTA, 
    SingleCTAContainer, 
    TestInput
} from "./style";

const SignUp = (props) => {

    const [passwordStatus, setPasswordStatus] = useState({
        key:'visible',
        type:'password',
        value: eyeVisible
    })
    const validateUser =  (value) => {
        return (value === '' ) ? true : false 
    }
    const validatePass =  (value) => {
        return (value === '') ? true : false 
    }
    const {
        value : enteredDetail,
        showError: showDetailError,
        handleOnChange :handleOnChangeDetail,
        handleOnBlur: handleOnBlurDetail,
        resetValue: resetDetail
      } = useInput(validateUser, '')
    const {
        value : enteredPass,
        showError: showPassError,
        handleOnChange :handleOnChangePass,
        handleOnBlur: handleOnBlurPass,
        resetValue: resetPass
      } = useInput(validatePass, '')

    const HandlePassWordDisplay = () => {
        let {key,type, value} = ''
        passwordStatus.key === 'visible'
        ?  (() => {key = 'invisible'
         type = 'text'
         value = eyeInVisible})()
        :  (() => {
            key = 'visible'
            type = 'password'
            value = eyeVisible
        })()
        setPasswordStatus({key,type,value})
    }

    const ResetInputs = () => {
        resetDetail()
        resetPass()
    }
    const HandleSubmit = () => {
        props.ForwardFunction(enteredDetail, enteredPass)
        ResetInputs()
    }

    return(
        <Fragment>
            <Modal state={props.modalState}>
                <SignupHeadder>{props.title}</SignupHeadder>
                <InputCover error={showDetailError}>
                    <InputImg src={UserIcon} alt='UserIcon'/>
                    <TestInput 
                        type='text' 
                        placeholder='Enter Email / Hash '
                        value={enteredDetail}
                        onChange={handleOnChangeDetail}
                        onBlur={handleOnBlurDetail} />
                </InputCover>
                <InputCover error={showPassError}>
                    <InputImg src={LockIcon} alt='LockIcon'/>
                    <TestInput
                        type={passwordStatus.type} 
                        placeholder='Enter Password '
                        value={enteredPass}
                        onChange={handleOnChangePass}
                        onBlur={handleOnBlurPass} />
                    <InputImg src={passwordStatus.value} alt='LockIcon' onClick={HandlePassWordDisplay}/>
                </InputCover>
                <SingleCTAContainer>
                    <SingleCTA onClick={HandleSubmit}>{props.cta}</SingleCTA>
                </SingleCTAContainer>
            </Modal>
        </Fragment>
    )
}
export default SignUp