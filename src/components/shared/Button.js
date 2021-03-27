import styled from 'styled-components'

const accentColor = 'rgb(240, 219, 79)'

const Button = styled.button`
    align-items: center;
    border-radius: 100px;
    border-width: 1px;
    /* border-color: ${accentColor}; */
    justify-content: center;
    min-width: 4.5rem;
    outline-width: 0;
    padding: .3rem 2rem;
    text-decoration: none;
    transition: background-color 0.25s;
    cursor: pointer;
    background-color: ${props => props.variant ? 'primary' : 'accentColor: white'};

    &:hover {
        background-color: ${props =>
            props.variant == 'primary' ?
            'rgb(240, 219, 79)' : 'rgba(240, 219, 79, .1)'
        }
    }
`;

export default Button