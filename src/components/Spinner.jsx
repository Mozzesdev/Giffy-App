import styled from "styled-components";

const Spinner = ({minHeight}) => {
  return (
    <SpinnerContainer minHeight={minHeight}>
      <SpinnerDiv index={2} />
      <SpinnerDiv index={3} />
      <SpinnerDiv index={4} />
      <SpinnerDiv index={1} />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  min-height: ${props => props.minHeight ? `${props.minHeight}` : '100vh'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0 0 0;
`;

const SpinnerDiv = styled.div`
  width: 15px;
  border-radius: 2px;
  height: 15px;
  background-color: ${(props) => `var(--brand-color_${props.index})`};
  margin: 0 7px ${props => props.minHeight ? '300px' : '0'} 7px;
  animation: ${(props) => {
    const index = props.index;
    if (index === 2) {
      return `loadAnimate cubic-bezier(.455,.03,.515,.955) 0.7s calc(0s + (.1s * 1)) infinite alternate`;
    } else if (index === 3) {
      return `loadAnimate cubic-bezier(.455,.03,.515,.955) 0.7s calc(0s + (.1s * 2)) infinite alternate`;
    } else if(index == 4) {
      return `loadAnimate cubic-bezier(.455,.03,.515,.955) 0.7s calc(0s + (.1s * 3)) infinite alternate`;
    } else{
      return `loadAnimate cubic-bezier(.455,.03,.515,.955) 0.7s calc(0s + (.1s * 4)) infinite alternate`;
    }
  }};
  @keyframes loadAnimate {
    100%{
      transform: translateY(-20px) scale(1.2);
    }
  }
`;
