import offer1 from '../../assets/images/offer-1.jpg'
import offer2 from '../../assets/images/offer-2.jpg'
export const Special = () =>{

    return <div>
          <div className='back-img' style={{ backgroundImage: `url(${offer1})`, }}>
                    <p>SAVE 20%</p>
                    <b>Special Offer</b>
                    <button>Shop Now</button>
                </div>
                <div className='back-img' style={{ backgroundImage: `url(${offer2})`, }}>
                    <p>SAVE 20%</p>
                    <b>Special Offer</b>
                    <button>Shop Now</button>
                </div>
    </div>
}