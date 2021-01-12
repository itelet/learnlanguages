export const createProject = (project) => {
    return(dispatch, getState ,{getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('words').doc('First').get().then(function(doc){
            if(doc.exists){
                console.log(doc.data())
            }
            else{
                console.log("This document doesnt exists")
            }
        }).then(() => {
            dispatch({type: 'GET_WORDS', project});
        }).catch((err)=>{
            dispatch({type: 'GET_WORDS_ERROR', err});
        })
    }
};