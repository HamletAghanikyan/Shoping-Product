import backgraudfoto from '../../assets/images/carousel-1.jpg'
import { Categories } from '../../components/categories'
import { Special } from '../../components/special'
import './style.scss'

export const Home = () => {
    return <div className='container'>
        <div className='offers'>
            <div className='background' style={{ backgroundImage: `url(${backgraudfoto})`, }}>
                <h3>Mens Fashion</h3>
                <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                <button>Shop Now</button>
            </div>
            <div>
              <Special/>
            </div>
        </div>
        <div className='icons-info'>
            <div className='icons-down'>
                <span className='icon-checkmark'></span>
                <p>Quality Product</p>
            </div>
            <div className='icons-down'>
                <span className='icon-truck'></span>
                <p>Free Shipping</p>
            </div>
            <div className='icons-down'>
                <span className='icon-tab'></span>
                <p>14-Day Return</p>
            </div>
            <div className='icons-down'>
                <span className='icon-phone'></span>
                <p>24/7 Support</p>
            </div>
        </div>
        <Categories></Categories>
    </div>
}