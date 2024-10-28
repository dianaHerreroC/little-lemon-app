import './Testimonial.css'

function Testimonial(props){
    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating); // 5 es el total de estrellas
    };
    return(
        <article className='Testimonial'>
            <h3 className='Rating'>{renderStars(props.rating)}</h3>
            <span className='User'>
                <img src={props.userImage} alt="User photo"></img>
                <h3>{props.userName}</h3>
            </span>
            <p>{props.review}</p>
        </article>
    );
};
export default Testimonial;