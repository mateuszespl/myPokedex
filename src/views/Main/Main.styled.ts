import styled from "styled-components";

export const StyledMain = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .displaySection {
    padding: 80px 40px;
    background: ${({ theme }) => theme.colors.darkWhite};
    position: relative;

    ${({ theme }) => theme.media.tablet} {
      width: 600px;
    }

    ${({ theme }) => theme.media.smallTablet} {
      width: 470px;
    }

    ${({ theme }) => theme.media.largeMobile} {
      width: 360px;
      padding: 15px 20px;
    }

    ${({ theme }) => theme.media.mobile} {
      width: 300px;
      padding: 10px 15px;
    }
  }
`;
