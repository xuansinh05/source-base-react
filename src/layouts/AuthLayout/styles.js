import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background-color: rgb(35, 39, 65);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

const Circles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > li {
    position: absolute;
    display: block;
    list-style: none;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.2);
    animation: ${animate} 25s linear infinite;
    animation-duration: 20s;
    top: -100px;
  }
  li:nth-child(1) {
    left: 2%;
    animation-delay: 0s;
    background: red;
  }
  li:nth-child(2) {
    left: 4%;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  li:nth-child(3) {
    left: 6%;
    animation-delay: 4s;
  }
  li:nth-child(4) {
    left: 10%;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  li:nth-child(5) {
    left: 12%;
    animation-delay: 0s;
  }
  li:nth-child(6) {
    left: 16%;
    animation-delay: 3s;
  }
  li:nth-child(7) {
    left: 18%;
    animation-delay: 7s;
    animation-duration: 12s;
  }
  li:nth-child(8) {
    left: 22%;
    animation-delay: 15s;
    animation-duration: 45s;
  }
  li:nth-child(9) {
    left: 26%;
    animation-delay: 2s;
    animation-duration: 35s;
  }
  li:nth-child(10) {
    left: 28%;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  li:nth-child(11) {
    left: 31%;
    animation-delay: 2s;
    animation-duration: 9s;
  }
  li:nth-child(12) {
    left: 35%;
    animation-delay: 3s;
    animation-duration: 11s;
  }
  li:nth-child(13) {
    left: 37%;
    animation-delay: 4s;
    animation-duration: 15s;
  }
  li:nth-child(14) {
    left: 39%;
    animation-delay: 1s;
    animation-duration: 6s;
  }
  li:nth-child(15) {
    left: 45%;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  li:nth-child(16) {
    left: 41%;
    animation-delay: 2s;
    animation-duration: 9s;
  }
  li:nth-child(17) {
    left: 52%;
    animation-delay: 3s;
    animation-duration: 11s;
  }
  li:nth-child(18) {
    left: 56%;
    animation-delay: 4s;
    animation-duration: 12s;
  }
  li:nth-child(19) {
    left: 60%;
    animation-delay: 1s;
    animation-duration: 6s;
  }
  li:nth-child(20) {
    left: 58%;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  li:nth-child(21) {
    left: 62%;
    animation-delay: 2s;
    animation-duration: 9s;
  }
  li:nth-child(22) {
    left: 66%;
    animation-delay: 3s;
    animation-duration: 11s;
  }
  li:nth-child(23) {
    left: 70%;
    animation-delay: 4s;
    animation-duration: 15s;
  }
  li:nth-child(24) {
    left: 74%;
    animation-delay: 2s;
    animation-duration: 16s;
  }
  li:nth-child(25) {
    left: 72%;
    animation-delay: 4s;
    animation-duration: 15s;
  }
  li:nth-child(26) {
    left: 76%;
    animation-delay: 3s;
    animation-duration: 16s;
  }
  li:nth-child(27) {
    left: 80%;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  li:nth-child(28) {
    left: 78%;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  li:nth-child(29) {
    left: 82%;
    animation-delay: 2s;
    animation-duration: 18s;
  }
  li:nth-child(30) {
    left: 85%;
    animation-delay: 3s;
    animation-duration: 28s;
  }
  li:nth-child(31) {
    left: 90%;
    animation-delay: 4s;
    animation-duration: 35s;
  }
  li:nth-child(32) {
    left: 87%;
    animation-delay: 1s;
    animation-duration: 14s;
  }
  li:nth-child(33) {
    left: 8%;
    animation-delay: 0s;
    animation-duration: 23s;
  }
  li:nth-child(34) {
    left: 16%;
    animation-delay: 2s;
    animation-duration: 15s;
  }
  li:nth-child(35) {
    left: 32%;
    animation-delay: 3s;
    animation-duration: 11s;
  }
  li:nth-child(36) {
    left: 42%;
    animation-delay: 4s;
    animation-duration: 25s;
  }
  li:nth-child(37) {
    left: 16%;
    animation-delay: 2s;
    animation-duration: 19s;
  }
  li:nth-child(38) {
    left: 32%;
    animation-delay: 3s;
    animation-duration: 14s;
  }
  li:nth-child(39) {
    left: 42%;
    animation-delay: 4s;
    animation-duration: 25s;
  }
  li:nth-child(40) {
    left: 42%;
    animation-delay: 4s;
    animation-duration: 34s;
  }
  li:nth-child(41) {
    left: 85%;
    animation-delay: 3s;
    animation-duration: 19s;
  }
  li:nth-child(42) {
    left: 90%;
    animation-delay: 4s;
    animation-duration: 25s;
  }
  li:nth-child(43) {
    left: 95%;
    animation-delay: 1s;
    animation-duration: 16s;
  }
  li:nth-child(44) {
    left: 8%;
    animation-delay: 0s;
    animation-duration: 17s;
  }
  li:nth-child(45) {
    left: 16%;
    animation-delay: 2s;
    animation-duration: 30s;
  }
  li:nth-child(46) {
    left: 32%;
    animation-delay: 3s;
    animation-duration: 11s;
  }
  li:nth-child(47) {
    left: 42%;
    animation-delay: 4s;
    animation-duration: 25s;
  }
  li:nth-child(48) {
    left: 16%;
    animation-delay: 2s;
    animation-duration: 9s;
  }
  li:nth-child(49) {
    left: 32%;
    animation-delay: 3s;
    animation-duration: 17s;
  }
  li:nth-child(50) {
    left: 42%;
    animation-delay: 4s;
    animation-duration: 18s;
  }
  li:nth-child(40) {
    left: 42%;
    animation-delay: 4s;
    animation-duration: 21s;
  }
`;

export { Container, Circles };
