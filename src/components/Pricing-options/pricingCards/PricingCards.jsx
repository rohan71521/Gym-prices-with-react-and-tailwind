import PropTypes from 'prop-types';
import { MdVerified } from 'react-icons/md';
const PricingCards = ({packages}) => {
    const {packagee, price, features} = packages
    return (
        <div className='bg-gray-800 p-5 lg:p-10 rounded-2xl flex flex-col'> 
            <h1 className='text-center'> <span  className='text-4xl md:text-4xl lg:text-7xl '>{price}</span><small className='text-2xl'>/mon</small> </h1>
            <h1 className='text-center text-3xl md:text-4xl'>{packagee} </h1>
            <div className='pt-10 flex-grow'>
                {
                    features.map((fea,id)=> <p className='
                    flex items-center gap-5'  key={id}><MdVerified className='text-blue-400'></MdVerified> {fea}</p>)
                }

            </div>
            <button className='w-full p-2 mt-10 hover:bg-gray-500 
            bg-blue-400 rounded-lg'>Purchase Now</button>

        </div>
    );
};


PricingCards.propTypes = {
    packages : PropTypes.object
}
export default PricingCards;