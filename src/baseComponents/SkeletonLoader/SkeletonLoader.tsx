import styled from "styled-components";

export function SkeletonLoader() {
  return (
    <SkeletonContainer
      aria-label="skeleton-loader"
      data-alt="Skeleton Loader"
    />
  );
}

const SkeletonContainer = styled.div`
  animation: shimmer 1.4s linear infinite;
  background-color: #e0e0e0;
  border-radius: 6px;
  height: 24px;
  position: relative;
  width: 100%;

  ::before {
    animation-delay: 0.3s;
    animation: shimmer 1.4s linear infinite;
    background-image: linear-gradient(
      to right,
      #e0e0e0 0%,
      #fff 40%,
      #e0e0e0 80%,
      #e0e0e0 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    border-radius: 6px;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: -650px 0px;
    }
    100% {
      background-position: 650px 0px;
    }
  }
`;

export default SkeletonLoader;
