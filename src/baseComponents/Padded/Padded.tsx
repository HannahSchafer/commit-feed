import React, { useEffect } from "react";
import styled from "styled-components";
import cx from "classnames";
const paddingSizes = [
  "4",
  "8",
  "12",
  "16",
  "24",
  "32",
  "48",
  "56",
  "64",
] as const;
type Padding = typeof paddingSizes[number];

interface PaddedProps {
  all?: Padding;
  bottom?: Padding;
  children: React.ReactNode;
  left?: Padding;
  horizontal?: Padding;
  right?: Padding;
  top?: Padding;
  vertical?: Padding;
}

function Padded({
  all,
  bottom,
  children,
  left,
  horizontal,
  right,
  top,
  vertical,
}: PaddedProps) {
  return (
    <StyledPadded
      all={all}
      bottom={bottom}
      left={left}
      horizontal={horizontal}
      right={right}
      top={top}
      vertical={vertical}
      className={cx("spaced", {
        all: all,
        bottom: bottom,
        left: left,
        horizontal: horizontal,
        right: right,
        top: top,
        vertical: vertical,
      })}
      aria-label="spaced"
    >
      {children}
    </StyledPadded>
  );
}

const StyledPadded = styled.div.attrs(
  (props: {
    all: string;
    bottom: string;
    left: string;
    horizontal: string;
    right: string;
    top: string;
    vertical: string;
  }) => props
)`
  &.all {
    padding: ${(props) => `${props.all}px`};
  }

  &.bottom {
    padding-bottom: ${(props) => `${props.bottom}px`};
  }

  &.left {
    padding-left: ${(props) => `${props.left}px`};
  }

  &.horizontal {
    padding-left: ${(props) => `${props.horizontal}px`};
    padding-right: ${(props) => `${props.horizontal}px`};
  }

  &.right {
    padding-right: ${(props) => `${props.right}px`};
  }

  &.top {
    padding-top: ${(props) => `${props.top}px`};
  }

  &.vertical {
    padding-top: ${(props) => `${props.vertical}px`};
    padding-bottom: ${(props) => `${props.vertical}px`};
  }
`;

export default Padded;
