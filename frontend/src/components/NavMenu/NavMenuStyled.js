import styled from 'styled-components';
import { BiListPlus, BiExit } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

export const StyledTitle = styled.h1`
  font-family: "Carter One", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
  color: hotpink;
  text-shadow: 2px 2px 0 indianred;
  text-align: center;
  margin-left: 100px;
`;

export const Icon = styled(BiListPlus)`
  font-size: 30px;
`;

export const ExitIcon = styled(BiExit)`
  font-size: 30px;
`;

export const Button = styled.button`
  background-color: ${({ color }) => {
    switch (color) {
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      default:
        return 'hotpink';
    }
  }};
  color: white;
  border: 5px solid white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 110px;
  right: 10px;
  background-color: hotpink;
  color: white; 
  border: 5px solid white;
  border-radius: 20px;
  padding: 20px;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); 
  font-family: "Montserrat", sans-serif; 
  font-weight: 700; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 10px;
  border-color: white;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;