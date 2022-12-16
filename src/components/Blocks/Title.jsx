import styled, { css } from 'styled-components';

export const Title = styled.h2`
    ${(props) => {
        if (props.center) {
            return css`
                font-size: 1.87rem;
                font-weight: 500;
                color: var(--color-white);
                font-family: var(--montserrat);
                text-align: center;
                margin: 50px;
            `;
        } else {
            return css`
                font-size: 1.3rem;
                font-weight: 500;
                color: var(--color-white);
                font-family: var(--montserrat);
                margin: 0;
            `;
        }
    }}
`;
