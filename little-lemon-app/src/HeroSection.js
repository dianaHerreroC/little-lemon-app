import './HeroSection.css'
import Button from './Button'
import foodImage from './assets/restauranfood.jpg';

function HeroSection(){
    return(
        <section className="HeroSection">
            <div className="LeftSection">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a familly owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Button>Reserve a table</Button>
            </div>
            <div className="RightSection">
                <img src={foodImage} alt="Restaurant food"></img>
            </div>
        </section>
    );
};
export default HeroSection;