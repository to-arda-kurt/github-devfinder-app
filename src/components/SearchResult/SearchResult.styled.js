import styled from 'styled-components';

export const ResultWrapper = styled.div`
  position: relative;
  height: 517px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.toggle};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 32px 24px;
  z-index: 99;
  font-family: Space Mono;
  font-style: normal;
  font-weight: normal;
`;

export const ResultImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const ResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
`;

export const ResultHeaderName = styled.h2`
  color: ${(props) => props.theme.font};
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const ResultHeaderUser = styled.p`
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => props.theme.carret};
`;

export const ResultHeaderDate = styled.div`
  font-size: 13px;
  line-height: 19px;
`;

export const ResultBio = styled.p`
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 23px;
`;

export const ResultInfo = styled.div`
  height: 85px;
  border-radius: 10px;
  background: #f6f8ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 19px 14px;
`;

export const ResultInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultInfoHeader = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
`;
