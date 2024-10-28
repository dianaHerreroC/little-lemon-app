import './TestimonialsSection.css'
import Testimonial from './Testimonial';
import userPhoto from './assets/user photo.png'

function TestimonialsSection(){
    return(
        <section className='TestimonialsSection'>
            <h1>Testimonials</h1>
            <span className='Testimonials'>
                <Testimonial
                    rating='4'
                    userName='Diana'
                    userImage={userPhoto}
                    review='On your website it gives the impression that the food it top notch, 
                    But with this visit and the previous visits the food does not match the description 
                    on your webpage. The food is bland and lacks a lot of flavor. The main course of 
                    fish was overcooked and had absolutely 0 taste.'
                ></Testimonial>
                <Testimonial
                    rating='5'
                    userName='Diana'
                    userImage={userPhoto}
                    review='On your website it gives the impression that the food it top notch, 
                    But with this visit and the previous visits the food does not match the description 
                    on your webpage.'
                ></Testimonial>
                <Testimonial
                    rating='4'
                    userName='Diana'
                    userImage={userPhoto}
                    review='On your website it gives the impression that the food it top notch, 
                    But with this visit and the previous visits the food does not match the description 
                    on your webpage. The food is bland and lacks a lot of flavor. The main course of 
                    fish was overcooked and had absolutely 0 taste. On your website it gives the impression 
                    that the food it top notch, But with this visit and the previous visits the food does 
                    not match the description on your webpage. The food is bland and lacks a lot of flavor. 
                    The main course of fish was overcooked and had absolutely 0 taste.'
                ></Testimonial>
                <Testimonial
                    rating='4'
                    userName='Diana'
                    userImage={userPhoto}
                    review='On your website it gives the impression that the food it top notch.'
                ></Testimonial>
            </span>
        </section>
    );
};
export default TestimonialsSection;