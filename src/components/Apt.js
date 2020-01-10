import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../images/room-1.jpeg';
import PropTypes from 'prop-types';


export default function Apt({ apt }) {
 
  const { name, id, images } = apt;
  return (
    <article className='room'>
      <Link to={`/apts/${id}`} >
      <div className='img-container'>
      <img src={images[0] || defaultImage} alt='' />
      </div>
      <p className='room-info'>{name} </p>
      </Link>
    </article>
  );
}

Apt.propTypes = {
  apt: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
