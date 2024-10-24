import chefsImageA from './assets/Mario and Adrian A.jpg';
import chefsImageB from './assets/Mario and Adrian b.jpg';



function AboutSection(){
    return(
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <img src={chefsImageA} alt="Restaurant chefs" style={{ maxHeight: '30vh' }}></img>
            <img src={chefsImageB} alt="Restaurant chefs" style={{ maxHeight: '30vh' }}></img>
        </section>
    );
};
export default AboutSection;