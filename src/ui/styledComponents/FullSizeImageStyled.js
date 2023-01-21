import styled from "styled-components";

export const FullSizeImageContainerS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-color: ${({ theme }) => theme.shadowLayer};
`

export const FullSizeImageS = styled.img`
    max-height: 95%;
`