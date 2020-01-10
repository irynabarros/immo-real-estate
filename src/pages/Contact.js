import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ref, setRef] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setRef('');
    setSent(true);
  };
  return (
    <div className='contact'>
      <h2>Contact Us</h2>
       {sent && <h3>Thank you for your message!</h3>} 
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name*</label>
        <input
          type='text'
          id='name'
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor='email'>Email*</label>
        <input
          type='email'
          id='email'
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor='ref'>Property reference</label>
        <input
          type='text'
          id='ref'
          value={ref}
          onChange={e => setRef(e.target.value)}
        />

        <label htmlFor='message'>Message*</label>
        <textarea
          required
          name='message'
          id='message'
          cols='30'
          rows='10'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input type='submit' value='Submit' className='btn-primary' />
      </form>
    </div>
  );
};

export default Contact;
