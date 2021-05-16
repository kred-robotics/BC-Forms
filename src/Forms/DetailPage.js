import { Fragment } from "react"
import { useHistory } from 'react-router-dom';
import { 
    NavigationContainer, 
    NavItems, 
    NavItemsContainer, 
    NavTitle, 
    NavTitleContainer 
} from "./style"

const DetailPage = () => {

    const history = useHistory()
    const userName = history?.location?.pathname.slice(1)
    const HandleSignout = () => {
        history.push('/')
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
    </Fragment>)
}
 export default DetailPage