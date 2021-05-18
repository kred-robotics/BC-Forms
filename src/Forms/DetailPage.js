import { Fragment, useState } from "react"
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {Questions, Answers} from "./QuizData/data";
import { 
    NavigationContainer, 
    NavItems, 
    NavItemsContainer, 
    NavTitle, 
    NavTitleContainer,
    UserInputWrapper,
    PreviewInputImg,
    InputContainer,
    QuizContainer,
    QuizQuestion,
    QuizAnswersOption,
    QuizButtonContainer,
    QuizButtons
} from "./style"

const DetailPage = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const userName = history?.location?.pathname.slice(1)

    const[previeImg, setPrevieImg] = useState({
        image : null,
        type: null
    })
    const [quesCounter, setQuesCounter] = useState(0)
    const [radioValue, setRadioValue] = useState('')
    const [ansArray, setAnsArray] = useState([])
    const [onSubmit, setOnSubmit] = useState(false)
    const [results, setResult] = useState(0)

    const HandleSignout = () => {
        dispatch({type: 'TOGGLE_LOGIN'})
        history.push('/')
    }
    const onChangeHandler = (e) => {
        setPrevieImg({
            image:URL.createObjectURL(e?.target?.files[0]),
            type: e?.target?.files[0].type
        })
    }
    const handleRadio = (e) => {
        console.log((e.target.value));
        setRadioValue(e.target.value)
    }
    const HandleNextClick = () => {
        setAnsArray([...ansArray,radioValue])
        setRadioValue('')
        setQuesCounter(curr => curr +1)
    }
    const checkAnswer = () => {
        let count = 0
        for (let index = 0; index < ansArray.length; index++) {
            if (ansArray[index] === Answers[index]) count ++
            console.log(ansArray[index]);
        }
        return count
    }
    const HandleSubmit = () => {
        console.log(radioValue);
        setAnsArray(ansArray.push(radioValue))
        if(ansArray.length === Answers.length){
            const result = checkAnswer()
            setOnSubmit(true)
            setResult(result)
        }
    }

    return (<Fragment>
        <NavigationContainer>
            <NavTitleContainer>
                <NavTitle>Welcome {userName}</NavTitle>
            </NavTitleContainer>
            <NavItemsContainer>
                <NavItems onClick={HandleSignout}>Logout</NavItems>
            </NavItemsContainer>
        </NavigationContainer>
        <UserInputWrapper>
            <InputContainer>
                <input type="file" name="file" onChange={onChangeHandler}/>
            </InputContainer>
            {previeImg.image && previeImg.type.includes('image') && <PreviewInputImg src={previeImg.image} alt='' />}
        </UserInputWrapper>
        {!onSubmit && <QuizContainer>
            <QuizQuestion>{Questions[quesCounter].question}</QuizQuestion>
                <QuizAnswersOption>
                    <label>
                    <input 
                        readOnly
                        type='radio' 
                        checked={radioValue === Questions[quesCounter].ansOption[0]} 
                        value={Questions[quesCounter].ansOption[0]} 
                        onClick={handleRadio} />
                    {Questions[quesCounter].ansOption[0]}
                    </label>
                </QuizAnswersOption>
                <QuizAnswersOption>
                    <label>
                    <input 
                        readOnly
                        type='radio' 
                        checked={radioValue === Questions[quesCounter].ansOption[1]} 
                        value={Questions[quesCounter].ansOption[1]} 
                        onClick={handleRadio} />
                    {Questions[quesCounter].ansOption[1]}
                    </label>
                </QuizAnswersOption>
                <QuizAnswersOption>
                    <label>
                    <input 
                        readOnly
                        type='radio' 
                        checked={radioValue === Questions[quesCounter].ansOption[2]} 
                        value={Questions[quesCounter].ansOption[2]} 
                        onClick={handleRadio} />
                    {Questions[quesCounter].ansOption[2]}
                    </label>
                </QuizAnswersOption>
                <QuizAnswersOption>
                    <label>
                    <input 
                        readOnly
                        type='radio' 
                        checked={radioValue === Questions[quesCounter].ansOption[3]} 
                        value={Questions[quesCounter].ansOption[3]} 
                        onClick={handleRadio} />
                    {Questions[quesCounter].ansOption[3]}
                    </label>
                </QuizAnswersOption>
                <QuizButtonContainer>
                    {(quesCounter < (Questions.length -1) && radioValue !=='') && <QuizButtons onClick={HandleNextClick}>Next</QuizButtons>}
                    {(quesCounter === (Questions.length -1) && radioValue !=='') && <QuizButtons onClick={HandleSubmit}>Submit</QuizButtons>}
                </QuizButtonContainer>
        </QuizContainer>}
        {onSubmit && 
            <QuizContainer>
                You Scored {results} points!
            </QuizContainer>}
    </Fragment>)
}
 export default DetailPage