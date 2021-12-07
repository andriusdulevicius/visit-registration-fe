import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './BookingScreen.module.css';
import AnimatedCard from './AnimatedCard';
import { RiUser3Fill, RiUser3Line, RiUserVoiceFill } from 'react-icons/ri';

const dummyPeopleInLine = 0;
const availableConsultants = 2;

const BookingScreen = () => {
  const navigate = useNavigate();

  function handleCancelation() {
    console.log('canceling appointment');
    navigate('/');
  }

  return (
    <div className='container'>
      <h3 className={css.main}>
        Thank you for booking through our system. This helps everyone to be more aware of live waiting line progress.
      </h3>
      <div className={css.visualisation}>
        <AnimatedCard color='green'>
          <RiUser3Fill size={50} />
        </AnimatedCard>
        {dummyPeopleInLine > 0 &&
          [...Array(dummyPeopleInLine)].map((_, index) => (
            <AnimatedCard color='gray' key={index}>
              <RiUser3Line size={50} />
            </AnimatedCard>
          ))}
        <AnimatedCard color='yellow'>
          <RiUserVoiceFill size={50} />
          <RiUser3Fill size={50} />
        </AnimatedCard>
      </div>
      <h4 className={css.info}>
        You have {dummyPeopleInLine} {dummyPeopleInLine !== 1 ? 'people' : 'person'} in front of you. The waiting time
        is approximately{' '}
        {availableConsultants > dummyPeopleInLine ? 0 : Math.round((dummyPeopleInLine / availableConsultants) * 5)}{' '}
        minutes at the moment. You will be invited to your appointment shortly...
      </h4>
      <h4 className={css.reference}>
        Your booking reference number is <strong>xxx</strong>
      </h4>
      <button className={css.cancel} onClick={handleCancelation}>
        Cancel your booking
      </button>
    </div>
  );
};

export default BookingScreen;
