import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size: 1.2rem;
padding: 0.2rem;
margin: 0.5rem;
border-radius: 0.5rem;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
  background: var(--lightRed);
}
&:focus{
  outline: none;
}
`; 