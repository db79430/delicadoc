import {SET_AUTHENTICATED_USER, SET_INFO_PROMO, SET_REGISTRATION_USER} from "../constant/constant";


export const initialState = {
    promoUsers: [],
    user: {},
    data: {}
}
export const infoPromoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_PROMO:
            return {
                ...state,
                promoUsers: action.promoUsers
            };
        case SET_REGISTRATION_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_AUTHENTICATED_USER:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;

    }

}