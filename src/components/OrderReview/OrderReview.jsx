import IMG_1 from '../../assets/small-card.png';
import IMG_2 from '../../assets/Group 5.png';
import './OrderReview.css'

const OrderReview = () => {
    return (
        <>
        <div className='order container'>
            <div className="order_review">
                <div className="order_review-left">
                    <div className='img'>
                        <img src={IMG_1} alt="..." />
                    </div>
                    <div className='img'>
                        <img src={IMG_1} alt="..." />
                    </div>
                    <div className='img'>
                        <img src={IMG_1} alt="..." />
                    </div>
                    <div className='img'>
                        <img src={IMG_1} alt="..." />
                    </div>
                    <div className='img'>
                        <img src={IMG_1} alt="..." />
                    </div>
                    <div className='img'>
                        <img src={IMG_1} alt="..." />
                    </div>
                </div>
                <div className="order_review-right">
                    <img src={IMG_2} alt="..." />
                </div>
            </div>
        </div>
            
        </>
    );
};

export default OrderReview;