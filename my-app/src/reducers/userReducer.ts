import { reducerActionType } from '../types/reducerActionType'

export type UserType = {
    userId: string;
    passwordIUser: string;
}

export const userInitialState: UserType = {
    userId: '',
    passwordIUser: '',
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    
    switch(action.type){
        case 'CHANGE_USER':
            return{...state, userId: action.payload.userId };
        break
        case 'CHANGE_PASS':
            return{...state, passwordIUser: action.payload.passwordIUser };
        break
    }

    return state
}