import './HeroSection.css'
import Button from './Button'
import foodImage from './assets/restauranfood.jpg';

function HeroSection(){
    return(
        <section className="HeroSection">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <h3>We are a familly owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
            <Button>Reserve a table</Button>
            <img src={foodImage} alt="Restaurant food" style={{ maxHeight: '30vh' }}></img>
        </section>
    );
};
export default HeroSection;