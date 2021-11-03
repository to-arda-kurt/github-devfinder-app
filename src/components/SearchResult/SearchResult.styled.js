import styled from 'styled-components';

export const ResultWrapper = styled.div`
  position: relative;
  height: 517px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.body2};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 32px 24px;
  z-index: 99;
  font-family: Space Mono;
  font-style: normal;
  font-weight: normal;

  @media screen and (min-width: 768px) {
    padding: 48px;
    height: 444px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    padding: 48px;
    height: 481px;
  } ;
`;

export const ResultImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    height: 117px;
    width: 117px;
    margin-right: 37px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    height: 117px;
    width: 117px;
    margin-right: 41px;
  } ;
`;

export const ResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
`;

export const ResultInfoDesktop = styled.div``;

export const ResultHeaderName = styled.h2`
  color: ${(props) => props.theme.font};
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 40px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 26px;
    line-height: 40px;
  } ;
`;

export const ResultHeaderUser = styled.p`
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => props.theme.carret};
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 16px;
    line-height: 23px;
  } ;
`;

export const ResultHeaderDate = styled.div`
  font-size: 13px;
  line-height: 19px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    position: absolute;
    top: 48px;
    right: 48px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 15px;
    line-height: 22px;
  } ;
`;

export const ResultBio = styled.p`
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 23px;

  @media screen and (min-width: 768px) {
    margin-left: 154px;
    position: absolute;
    top: 130px;
    margin-bottom: 32px;
    margin-right: 48px;
    font-size: 15px;
    line-height: 25px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 15px;
    line-height: 25px;
  } ;
`;

export const ResultInfo = styled.div`
  height: 85px;
  border-radius: 10px;
  background: ${(props) => props.theme.body};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 19px 14px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 154px;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 13px;
    line-height: 19px;
    justify-content: space-around;
  } ;
`;

export const ResultInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${(props) => props.theme.font};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      font-size: 22px;
      line-height: 33px;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    p {
      font-size: 22px;
      line-height: 33px;
    }
  } ;
`;

export const ResultInfoHeader = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 19px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    font-size: 13px;
    line-height: 19px;
  } ;
`;

export const ResultFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    margin-left: 154px;
    display: flex;
    flex-direction: row;
    gap: 62px;
    padding-top: 37px;
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    display: flex;
    flex-direction: row;
    gap: 62px;
    padding-top: 37px;
  } ;
`;

export const ResultFooterCol = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    /* DESKTOP */
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    /* TABLET */
  } ;
`;

export const ResultFooterItem = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => (props.status === 'active' ? '' : props.theme.toggle)};
  opacity: ${(props) => (props.status === 'active' ? '' : '0.5')};

  svg path {
    fill: ${(props) => props.theme.toggle};
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    padding-left: 13px;
    text-decoration: none;
  }

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    padding-left: 13px;
    text-decoration: none;
    color: ${(props) => props.theme.toggle};

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 15px;
      line-height: 22px;
    }
    a {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 768px) and (min-width: 574px) {
    /* TABLET */
  } ;
`;
