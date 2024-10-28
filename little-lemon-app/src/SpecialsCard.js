import './SpecialsCard.css'
import { ReactComponent as MotoIcon } from './assets/motorcycle-icon.svg'

function SpecialsCard(props){
    return(
        <article className='SpecialsCard'>
            <img src={props.image} alt="Dish image"></img>
            <span className='NameAndPriceRow'>
                <h3>{props.name}</h3>
                <h3 className='Price'>{props.price}</h3>
            </span>
            <p>{props.description}</p>
            <span className='OrderDeliveryButton'>
                <h3>Order a delivery</h3>
                <MotoIcon></MotoIcon>
            </span>
        </article>
    );
};
export default SpecialsCard;