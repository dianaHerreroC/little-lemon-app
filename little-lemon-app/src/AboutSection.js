import './AboutSection.css'
import chefsImageA from './assets/Mario and Adrian A.jpg';
import chefsImageB from './assets/Mario and Adrian b.jpg';

function AboutSection(){
    return(
        <section className='AboutSection'>
            <span className='TextContainer'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </span>
            <span className='ImageContainer'>
                <img src={chefsImageA} alt="Restaurant chefs"></img>
                <img src={chefsImageB} alt="Restaurant chefs"></img>
            </span>
        </section>
    );
};
export default AboutSection;