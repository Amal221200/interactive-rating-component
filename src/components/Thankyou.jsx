import './Thankyou.css'
import Card from "./Card"
import ThankYouImg from '../assets/images/illustration-thank-you.svg'

const Thankyou = ({ rating }) => {
    return (
        <Card>
            <div className="img_container">
                <img src={ThankYouImg} alt="" />
            </div>

            <h3 className="selected">You selected {rating} out of 5</h3>

            <h1 className='title'>Thank you!</h1>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </Card>
    )
}
export default Thankyou