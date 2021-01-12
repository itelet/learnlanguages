export const signin = (cred) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERR', err})
        });
    }
}

export const signout = () => {
    return (dispatch, getState, {getFirebase})=> {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signup = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(firebase);
        console.log(newUser)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(function(data){
            console.log('uid',data.user.uid)
            /*firestore.collection('users').doc(data.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })*/
        }).then(()=>{
            console.log("success")
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERR', err})
        })
    }
}