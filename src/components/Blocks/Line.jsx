import styled, { css } from "styled-components";

export const Line = styled.hr`
    ${(props) => {
        if (props.center) {
            return css`
                border-radius: 8px;
                color: var(--color-grey);
                margin: 0 25%;
                background-color: var(--color-grey);
            `;
        } else {
            return css`
                border-radius: 8px;
                color: var(--color-grey);
                background-color: var(--color-grey);
            `;
        }
    }}
`;
