import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { CountdownBox, CountdownContainer, CenteredContainer, SorryMessage, Button, Container } from './FridayMessageStyled';

const FridayMessage = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isFriday, setIsFriday] = useState(false);
  const [itFeelsLikeIsFriday, setItFeelsLikeIsFriday] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setIsFriday(today.getDay() === 5);
      const dayOfWeek = today.getDay();
      const daysUntilFriday = (5 + 7 - dayOfWeek) % 7;
      const nextFriday = new Date(today);
      nextFriday.setDate(today.getDate() + daysUntilFriday);
      nextFriday.setHours(0, 0, 0, 0);
      
      const difference = nextFriday - today;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days} día/s ${hours} hora/s ${minutes} minuto/s ${seconds} segundo/s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setItFeelsLikeIsFriday(true);
  };

  const onReady = (event) => {
    if (isFriday || itFeelsLikeIsFriday) {
      event.target.playVideo();
    }
  };

  const onStateChange = (event) => {
    if (event.data === 1) {
      document.getElementById('message').innerText = 'Vamos que hoy es VIERNES!!!';
    } else {
      document.getElementById('message').innerText = 'Lo sentimos, aún no es viernes, falta/n';
    }
  };

  return (
    <CenteredContainer>
      <CountdownContainer>
        <SorryMessage id="message">{isFriday || itFeelsLikeIsFriday ? 'Vamos que hoy es VIERNES!!!' : 'Lo sentimos, aún no es viernes, falta/n'}</SorryMessage>
        { isFriday || itFeelsLikeIsFriday ? <></> : <CountdownBox>{timeLeft}</CountdownBox>}
        {(isFriday || itFeelsLikeIsFriday) && (
          <Container>
            <YouTube
              videoId="XMpYGx8xBl0"
              opts={{ playerVars: { autoplay: 1 } }}
              onReady={onReady}
              onStateChange={onStateChange}
            />
          </Container>
        )}
        {!isFriday && (
          <Container>
            <Button onClick={handleClick}>Hoy se siente como un viernes</Button>
          </Container>
        )}
      </CountdownContainer>
    </CenteredContainer>
  );
};

export default FridayMessage;
