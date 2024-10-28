import './SpecialsSection.css'

import Button from './Button'
import SpecialsCard from './SpecialsCard';

import greekSaladImage from './assets/greek salad.jpg';
import bruchettaImage from './assets/Bruchetta.png';
import lemonDessertImage from './assets/lemon dessert.jpg';

function SpecialsSection(){
    return(
        <section className='SpecialsSection'>
            <span className='Heading'>
                <h1>This week specials!</h1>
                <Button>Online Menu</Button>
            </span>
            <span className='SpecialsCards'>
                <SpecialsCard
                    name='Greek Salad'
                    price='$12.99'
                    description='The famous greek salad of crispy lettuce, 
                    peppers, olives and our Chicago style feta cheese, garnished
                     with crunchy garlic and rosemary croutons.'
                    image={greekSaladImage}
                ></SpecialsCard>
                <SpecialsCard
                    name='Bruchetta'
                    price='$5.99'
                    description='Our Bruschetta is made from grilled bread that has
                     been smeared with garlic and seasoned with salt and olive oil.'
                    image={bruchettaImage}
                ></SpecialsCard>
                <SpecialsCard
                    name='Lemon Dessert'
                    price='$5.00'
                    description='This comes straight from grandma’s recipe book, every 
                    last ingredient has been sourced and is as authentic as can be imagined.'
                    image={lemonDessertImage}
                ></SpecialsCard>
            </span>
        </section>
    );
};
export default SpecialsSection;