import React, { useState } from 'react';
import {
  MdHome,
  MdShoppingCart,
  MdVpnKey,
  MdBusinessCenter
} from 'react-icons/md';

export default function Services() {
  const [services] = useState([
    {
      icon: <MdHome />,
      title: 'BUY',
      desc:
        'You wish to buy ? Let us find you the right property. We propose a selection of prestigious apartments, homes and villas.'
    },
    {
      icon: <MdShoppingCart />,
      title: 'SALE',
      desc:
        'Owners, you are selling? We offer you a dedicated website to your property.'
    },
    {
      icon: <MdVpnKey />,
      title: 'RENT',
      desc:
        ' We have regular advertisements in rental of flats and houses. Our real estate listings are updated daily.'
    },
    {
      icon: <MdBusinessCenter />,
      title: 'MANAGE',
      desc:
        'We provide comprehensive management services, ensuring the smooth running of all administrative procedures.'
    }
  ]);
  return (
    <section className='services'>
      <h2>We help you with</h2>
      <div className='services-center'>
        {services.map((item, index) => {
          return (
            <article key={index} className='service'>
              <span>{item.icon} </span>
              <h6>{item.title} </h6>
              <p>{item.desc} </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
