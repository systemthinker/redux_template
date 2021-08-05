

export const fetchStringAction = (names) =>
{
    return {
        type: 'ADD_STRINGS',
        payload: names
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
      console.log('action was called')
        
        
         dispatch(fetchStringAction('Monika and Robbert'));
      
    };
  };