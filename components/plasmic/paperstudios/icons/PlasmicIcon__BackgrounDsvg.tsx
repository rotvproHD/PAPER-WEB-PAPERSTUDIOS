// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgrounDsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgrounDsvgIcon(props: BackgrounDsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1920 1080"}
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

      <path fill={"currentColor"} d={"M0 0h1920v1080H0z"}></path>
    </svg>
  );
}

export default BackgrounDsvgIcon;
/* prettier-ignore-end */
