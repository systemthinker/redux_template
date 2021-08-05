let initialState = '';
/* eslint-disable import/no-anonymous-default-export */
export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_STRINGS':
            console.log('reducer was called')
            return action.payload;
        default:
            return state;
    }
}