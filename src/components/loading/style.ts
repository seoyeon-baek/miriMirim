import styled from "@emotion/styled";

export const Spinner = styled.div`
  margin-left: 45%;
  margin-top: 18%;
  /* 
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1.2px solid #37876d;
  border-top: 0.2px solid white;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes ldio-0rfo58buqexg {
    0% {
      transform: translate(18.63px, 89.00999999999999px) scale(0);
    }
    25% {
      transform: translate(18.63px, 89.00999999999999px) scale(0);
    }
    50% {
      transform: translate(18.63px, 89.00999999999999px) scale(1);
    }
    75% {
      transform: translate(89.00999999999999px, 89.00999999999999px) scale(1);
    }
    100% {
      transform: translate(159.39px, 89.00999999999999px) scale(1);
    }
  }

  @keyframes ldio-0rfo58buqexg-r {
    0% {
      transform: translate(159.39px, 89.00999999999999px) scale(1);
    }
    100% {
      transform: translate(159.39px, 89.00999999999999px) scale(0);
    }
  }

  @keyframes ldio-0rfo58buqexg-c {
    0% {
      background: #ff515a;
    }
    25% {
      background: #61ba46;
    }
    50% {
      background: #37876d;
    }
    75% {
      background: #ffc509;
    }
    100% {
      background: #ff515a;
    }
  }

  .ldio-0rfo58buqexg div {
    position: absolute;
    width: 22.979999999999997px;
    height: 22.979999999999997px;
    border-radius: 50%;
    transform: translate(69.00999999999999px, 69.00999999999999px) scale(1);
    background-color: #ffffff;
    animation: ldio-0rfo58buqexg 2.7027027027027026s infinite
      cubic-bezier(0, 0.5, 0.5, 1);
  }

  .ldio-0rfo58buqexg div:nth-child(1) {
    background: #ffc509;
    transform: translate(159.39px, 89.00999999999999px) scale(1);
    animation: ldio-0rfo58buqexg-r 0.6756756756756757s infinite
        cubic-bezier(0, 0.5, 0.5, 1),
      ldio-0rfo58buqexg-c 2.7027027027027026s infinite step-start;
  }
  .ldio-0rfo58buqexg div:nth-child(2) {
    animation-delay: -0.6756756756756757s;
    background: #ff515a;
  }
  .ldio-0rfo58buqexg div:nth-child(3) {
    animation-delay: -1.3513513513513513s;
    background: #ffc509;
  }
  .ldio-0rfo58buqexg div:nth-child(4) {
    animation-delay: -2.027027027027027s;
    background: #37876d;
  }
  .ldio-0rfo58buqexg div:nth-child(5) {
    animation-delay: -2.7027027027027026s;
    background: #61ba46;
  }

  .loadingio-spinner-ellipsis-vo5mlyom6lp {
    width: 207px;
    height: 207px;
    display: inline-block;
    overflow: hidden;
    background-color: #ffffff;
  }

  .ldio-0rfo58buqexg {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }

  .geeks {
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(30%);
  }

  .geeks span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: green;
    display: inline-block;
    transition: all 0.5s;
    animation: animate 2s infinite;
  }
  .geeks span:nth-child(1) {
    animation-delay: 0.1s;
  }
  .geeks span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .geeks span:nth-child(3) {
    animation-delay: 0.3s;
  }
  .geeks span:nth-child(4) {
    animation-delay: 0.4s;
  }
  .geeks span:nth-child(5) {
    animation-delay: 0.5s;
  }
  .geeks span:nth-child(6) {
    animation-delay: 0.6s;
  }
  .geeks span:nth-child(7) {
    animation-delay: 0.7s;
  }
  .geeks span:nth-child(8) {
    animation-delay: 0.8s;
  }
  .geeks span:nth-child(9) {
    animation-delay: 0.9s;
  }
  .geeks span:nth-child(10) {
    animation-delay: 1s;
  }
  .geeks span:nth-child(11) {
    animation-delay: 1.1s;
  }
  .geeks span:nth-child(12) {
    animation-delay: 1.2s;
  }
  .geeks span:nth-child(13) {
    animation-delay: 1.3s;
  }

  @keyframes animate {
    0% {
      color: #ff515a;
      transform: translateY(0);
      margin-left: 0;
    }
    25% {
      color: #ffc509;
      transform: translateY(-10px);
      margin-left: 10px;
    }
    /* 50% {
      color: #ffc509;
      transform: translateY(-15px);
      transform: translateY(0);
      margin-left: 0;
    } */
    100% {
      color: #61ba46;
      transform: translateY(0);
      margin-left: 0;
    }
  }
`;
