import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { AptContext } from '../context';

const SingleApt = props => {
  const [id] = useState(props.match.params.id);

  const context = useContext(AptContext);
  const { getApt } = context;
  const apt = getApt(id);

  if (!apt) {
    return (
      <div className='error'>
        <h3>property not found</h3>
        <Link to='/apts' className='btn-primary'>
          back to properties
        </Link>
      </div>
    );
  }
  const {
    name,
    reference,
    description,
    type,
    deal,
    rooms,
    floor,
    bathroom,
    size,
    price,
    elevator,
    balcony,
    doorman,
    cave,
    parking,
    images
  } = apt;

  return (
    <>
      <section className='single-room'>
        <h2>{name} </h2>
        <div className='single-room-images'>
          {images.map((item, index) => {
            return <img key={index} src={item} alt='' />;
          })}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>details</h3>
            <p>{description} </p>
          </article>
          <article className='info'>
            <h3>Info</h3>
            <div className='info-both'>
              <div className='info-one'>
                <h6>
                  {type} for {deal}
                </h6>
                <h6>
                  <span> reference : </span> {reference}
                </h6>
                <h6>
                  <span> price : </span> € {price}
                </h6>
                <h6>
                  <span>size : </span>
                  {size} SQM
                </h6>
                <h6>
                  <span>Floor :</span> {floor}
                </h6>
                <h6>
                  <span>Rooms :</span> {rooms}
                </h6>
                <h6>
                  <span>Bathrooms : </span> {bathroom}
                </h6>
              </div>
              <div className='info-two'>
                <h6>{balcony && 'Balcony'} </h6>
                <h6>{elevator && 'elevator'} </h6>
                <h6>{doorman && 'Doorman'} </h6>
                <h6>{parking && 'parking'} </h6>
                <h6>{cave && 'Cellar'} </h6>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleApt;
