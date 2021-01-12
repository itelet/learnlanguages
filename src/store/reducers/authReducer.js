const initState = {
    authErr: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERR':
            console.log('Login Failed')
            return {
                ...state,
                authErr: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                authErr: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout Success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success');
            return {
                ...state,
                authErr: null
            }
            case 'SIGNUP_ERR':
                console.log('Signup Failed');
                return {
                    ...state,
                    authErr: action.err.message
                }
        default:
            return state;
    }
}

export default authReducer;