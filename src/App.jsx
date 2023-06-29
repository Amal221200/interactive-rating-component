import { useState } from 'react';
import './App.css';
import Rating from './components/Rating';
import Thankyou from './components/Thankyou';


function App() {
  const [rating, setRating] = useState(0)
  const [showThankYou, setShowThankYou] = useState(false)
  return (<>
    {!showThankYou ? <Rating setRating={setRating} setShowThankYou={setShowThankYou} /> : <Thankyou rating={rating} />
    }
  </>
  )
}

export default App
