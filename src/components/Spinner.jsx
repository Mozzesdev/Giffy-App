import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerDiv />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

const SpinnerDiv = styled.div`
  border: 4px solid #4e4e4e22;
  border-left-color: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-left-color: #741dd1;
  margin: 0 auto;
  margin-bottom: 300px;

  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
