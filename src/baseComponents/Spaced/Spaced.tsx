import React from "react";
import styled from "styled-components";
import cx from "classnames";
const spaceSizes = [
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
type Spacing = typeof spaceSizes[number];

interface SpacedProps {
  all?: Spacing;
  bottom?: Spacing;
  children: React.ReactNode;
  left?: Spacing;
  horizontal?: Spacing;
  right?: Spacing;
  top?: Spacing;
  vertical?: Spacing;
}

function Spaced({
  all,
  bottom,
  children,
  left,
  horizontal,
  right,
  top,
  vertical,
}: SpacedProps) {
  return (
    <StyledSpaced
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
    </StyledSpaced>
  );
}

const StyledSpaced = styled.div.attrs(
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
    margin: ${(props) => `${props.all}px`};
  }

  &.bottom {
    margin-bottom: ${(props) => `${props.bottom}px`};
  }

  &.left {
    margin-left: ${(props) => `${props.left}px`};
  }

  &.horizontal {
    margin-left: ${(props) => `${props.horizontal}px`};
    margin-right: ${(props) => `${props.horizontal}px`};
  }

  &.right {
    margin-right: ${(props) => `${props.right}px`};
  }

  &.top {
    margin-top: ${(props) => `${props.top}px`};
  }

  &.vertical {
    margin-top: ${(props) => `${props.vertical}px`};
    margin-bottom: ${(props) => `${props.vertical}px`};
  }
`;

export default Spaced;
