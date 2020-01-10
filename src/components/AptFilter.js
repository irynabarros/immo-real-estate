import React, { useContext } from 'react';
import { AptContext } from '../context';

const getUniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function AptFilter({ apts }) {
  const context = useContext(AptContext);
  const {
    handleChange,
    type,
    deal,
    rooms,
    bathroom,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    elevator,
    balcony,
    doorman,
    cave,
    parking
  } = context;

  let types = getUniqueValues(apts, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let deals = getUniqueValues(apts, 'deal');
  deals = ['all', ...deals];
  deals = deals.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let guests = getUniqueValues(apts, 'rooms');
  
  guests = guests.sort((a, b) => a - b);
  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let bath = getUniqueValues(apts, 'bathroom');
  bath = bath.sort((a, b) => a - b);
  bath = bath.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <h2>search properties</h2>
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>property type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}>
            {types}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='deal'>Rent or Sale</label>
          <select
            name='deal'
            id='deal'
            value={deal}
            className='form-control'
            onChange={handleChange}>
            {deals}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='rooms'>Minimum Rooms</label>
          <select
            name='rooms'
            id='rooms'
            value={rooms}
            className='form-control'
            onChange={handleChange}>
            {guests}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='bathroom'>Minimum Baths</label>
          <select
            name='bathroom'
            id='bathroom'
            value={bathroom}
            className='form-control'
            onChange={handleChange}>
            {bath}
          </select>
        </div>
        
        <div className='form-group'>
          <label htmlFor='size'>size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              className='size-input'
              onChange={handleChange}
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              className='size-input'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='price'>price</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minPrice'
              id='price'
              value={minPrice}
              className='size-input'
              onChange={handleChange}
            />
            <input
              type='number'
              name='maxPrice'
              id='price'
              value={maxPrice}
              className='size-input'
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='checkbox'
            name='elevator'
            id='elevator'
            checked={elevator}
            onChange={handleChange}
          />
          <label htmlFor='elevator' className='checkbox-label'>
            elevator
          </label>
        </div>
        <div className='form-group'>
          <input
            type='checkbox'
            name='balcony'
            checked={balcony}
            onChange={handleChange}
          />
          <label htmlFor='balcony' className='checkbox-label'>
            balcony
          </label>
        </div>

        <div className='form-group'>
          <input
            type='checkbox'
            name='parking'
            checked={parking}
            onChange={handleChange}
          />
          <label htmlFor='parking' className='checkbox-label'>
            parking
          </label>
        </div>
        <div className='form-group'>
          <input
            type='checkbox'
            name='doorman'
            checked={doorman}
            onChange={handleChange}
          />
          <label htmlFor='doorman' className='checkbox-label'>
            doorman
          </label>
        </div>
        <div className='form-group'>
          <input
            type='checkbox'
            name='cave'
            checked={cave}
            onChange={handleChange}
          />
          <label htmlFor='cave' className='checkbox-label'>
            Cellar
          </label>
        </div>
      </form>
    </section>
  );
}
