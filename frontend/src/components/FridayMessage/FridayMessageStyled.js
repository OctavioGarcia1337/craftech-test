import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
export const CountdownContainer = styled.div`
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;

export const CountdownBox = styled.div`
  display: inline-block;
  background-color: silver;
  padding: 10px 20px;
  border: 1px solid rgba(0,0,0, 30%);
  border-radius: 10px;
`;

export const SorryMessage = styled.p`
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
`;

export const Button = styled.button`
  background-color: hotpink;
  color: white;
  border: 5px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  padding: 10px 10px;
`;
