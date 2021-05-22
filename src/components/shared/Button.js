import { connect } from 'react-redux';
import styled from 'styled-components'

const accentColor = '#ffeb3c'
const secondaryColor = '#c8b902'

const Button = styled.button`
    align-items: center;
    border-radius: 100px;
    border-width: 1px;
    border-color: ${accentColor};
    justify-content: center;
    /* min-width: 4.5rem; */
    /* outline-width: 0; */
    padding: .5rem 1rem;
    text-decoration: none;
    transition: background-color 0.25s;
    cursor: pointer;
    background-color: ${props => props.variant === 'primary' ? 'white' : accentColor };
    /* font-weight: bold; */
    white-space: nowrap;

    &:hover {
        background-color: ${props =>
            props.variant === 'primary' ?
            accentColor : 'rgba(255, 255, 100, .9)'
        }
    }

    &:focus {
        outline: none;
    }
`;

export default Button;
