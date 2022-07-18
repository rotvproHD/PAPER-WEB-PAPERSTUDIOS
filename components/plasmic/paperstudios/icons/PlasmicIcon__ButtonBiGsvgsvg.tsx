// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ButtonBiGsvgsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ButtonBiGsvgsvgIcon(props: ButtonBiGsvgsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1745 184"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"1745"}
        height={"184"}
        rx={"92"}
        fill={"currentColor"}
      ></rect>
    </svg>
  );
}

export default ButtonBiGsvgsvgIcon;
/* prettier-ignore-end */
