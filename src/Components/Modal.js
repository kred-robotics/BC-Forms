import { 
    BackDrop,
    BackDropBlur,
    ModalContent
 } from "../Forms/style";

const Modal = (props) => {
    return(
        <BackDrop>
            <BackDropBlur onClick={props.state}/>
            <ModalContent>
                {props.children}
            </ModalContent>
        </BackDrop>
    )
}

export default Modal