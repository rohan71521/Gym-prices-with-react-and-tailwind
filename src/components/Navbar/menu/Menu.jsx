import PropTypes from 'prop-types';
const Menu = ({router}) => {
    return (
        
        <div className='md:hover:border hover:bg-black rounded px-2 py-1'>
                <a className="mr-5" href={router.url}>{router.name}</a>
        </div>
        
    );
};

Menu.propTypes = {
    router : PropTypes.object
}

export default Menu;