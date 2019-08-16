import styled from "styled-components";



export const Image = styled.img`
  max-width: 90vw;
  border: 10px solid pink;
`;

export const Button = styled.button`
    ${props => (props.type === 'primary' ? `background: blue;` : null)}
    
    font-size: 1em;
    margin: 1em;
    margin-top: 0em;
    padding: 1em 5em;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    width: 90vw;
    border: none;
`;