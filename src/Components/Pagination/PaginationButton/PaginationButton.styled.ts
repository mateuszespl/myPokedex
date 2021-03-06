import styled from "styled-components";

export const StyledPaginationButton = styled.a<{
  previous: boolean;
  disabled: boolean;
}>`
  padding: ${({ previous }) =>
    previous ? "10px 20px 10px 50px" : "10px 50px 10px 20px"};
  margin: 0 10px;
  width: 200px;
  height: 40px;
  white-space: nowrap;
  text-align: center;
  border: none;
  background: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fonts.m};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.lightBlack};
  cursor: ${({ disabled, previous }) =>
    disabled && previous ? "not-allowed" : "pointer"};
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.lightBlack};
  font-weight: 800;
  position: relative;
  outline: none;
  text-decoration: none;
  opacity: ${({ disabled, previous }) => disabled && previous && 0.3};

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    left: ${({ previous }) => (previous ? "-5px" : "unset")};
    right: ${({ previous }) => (!previous ? "-5px" : "unset")};
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.s};
  }

  ${({ theme }) => theme.media.largeMobile} {
    width: 120px;
    padding: 5px 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: none;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    width: 110px;
    height: 30px;
    margin: 0 5px;
  }
`;
