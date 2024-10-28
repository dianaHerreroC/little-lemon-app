import './HeroSection.css'
import Button from './Button'
import foodImage from './assets/restauranfood.jpg';

function HeroSection(){
    return(
        <section className="HeroSection">
            <span className="LeftSection">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a familly owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button>Reserve a table</Button>
            </span>
            <span className="RightSection">
                <img src={foodImage} alt="Restaurant food"></img>
            </span>
        </section>
    );
};
export default HeroSection;