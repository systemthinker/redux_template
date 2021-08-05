import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { fetchProducts } from '../src/store/test/actions'
import { testSelector } from '../src/store/test/selectors'



function App() {

  const dispatch = useDispatch();
  const names = useSelector(testSelector);
  console.log(names);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
