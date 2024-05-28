import {getInfoGiftPromo, postRegistrationUser, postUserAuthenticated} from "../../api/Api";
import {setInfoPromo, setRegistrationUser, setUserAuthenticated} from "../action/action";


export const getInfoPromoUsers = () => {
    return (dispatch) => {
        getInfoGiftPromo().then(data => {
            dispatch(setInfoPromo(data))
        })
    }
}

export const registrationUser = () => {
    return (dispatch) => {
        postRegistrationUser().then(data => {
            dispatch(setRegistrationUser(data))
        })
    }
}

export const userAuthenticated = () => {
    return (dispatch) => {
        postUserAuthenticated().then(data => {
            dispatch(setUserAuthenticated(data))
        })
    }
}