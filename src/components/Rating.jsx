import "./Rating.css"
import starIcon from '../assets/images/icon-star.svg'
import Card from "./Card"
import { useState } from "react"
const ratingsArr = [1, 2, 3, 4, 5]
const Rating = ({ setRating, setShowThankYou }) => {
    const [ratings, setRatings] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false })
    const handleClick = (e) => {
        setRating(parseInt(e.target.textContent))
        setRatings(() => ({ 1: 1 == e.target.textContent, 2: 2 == e.target.textContent, 3: 3 == e.target.textContent, 4: 4 == e.target.textContent, 5: 5 == e.target.textContent }))
    }

    const handleSubmit = (e) => {
        setShowThankYou(true)
    }
    return (
        <Card>
            <div className="star_container">
                <img src={starIcon} alt="" />
            </div>
            <h2 className="title">How did we do?</h2>
            <p>Please let us know how did we do with your support request. All the feedback is appreciated to help us improve our offering!</p>
            <div className="rating_container">
                {ratingsArr.map((val, ind) => (
                    <span key={ind} onClick={handleClick} className={`rating ${ratings[val] ? 'active' : ''}`}>{val}</span>
                ))}
            </div>
            <button onClick={handleSubmit} type="button">SUBMIT</button>
        </Card>
    )
}
export default Rating