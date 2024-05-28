import {SET_AUTHENTICATED_USER, SET_INFO_PROMO, SET_REGISTRATION_USER} from "../constant/constant";
import {userAuthenticated} from "../function/function-service";

export const setInfoPromo = promoUsers => ({
    type: SET_INFO_PROMO,
    promoUsers
});

export const setRegistrationUser = user => ({
    type: SET_REGISTRATION_USER,
    user

})

export const setUserAuthenticated = data => ({
    type: SET_AUTHENTICATED_USER,
    data

})