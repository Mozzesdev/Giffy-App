import styled from "styled-components";

const Spinner = ({minHeight, d = "15px"}) => {
  return (
    <SpinnerContainer minHeight={minHeight}>
      <SpinnerDiv index={2} d={d} />
      <SpinnerDiv index={3} d={d} />
      <SpinnerDiv index={4} d={d} />
      <SpinnerDiv index={1} d={d} />
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  min-height: ${props => props.minHeight ? `${props.minHeight}` : '100vh'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerDiv = styled.div`
  width: ${props => props.d};
  border-radius: 2px;
  height: ${props => props.d};
  background-color: ${(props) => `var(--brand-color_${props.index})`};
  margin: 0 6px;
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
