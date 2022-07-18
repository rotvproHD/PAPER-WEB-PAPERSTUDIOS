// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppsvgIcon(props: AppsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 16 16"}
      preserveAspectRatio={"xMidYMid meet"}
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

      <path
        d={
          "M0 .6c0 .4.7 1.2 1.7 1.9s1.7 2.7 1.7 5.1l.2 3.9 5.2.3c3.2.2 5.2-.1 5.2-.7s-2.1-1.2-4.7-1.2l-4.8-.2 3.9-.6c3.1-.5 4.4-1.3 5.9-3.9L16.2 2H9.6C5.9 2 3 1.6 3 1s-.7-1-1.5-1S0 .3 0 .6zm3.2 13.6c.6 1.8 2.8 2.1 2.8.4 0-.9-.7-1.6-1.6-1.6-.9 0-1.4.5-1.2 1.2zm8-.1c.5 1.4 2.1 1.4 2.6 0 .2-.6-.4-1.1-1.3-1.1s-1.5.5-1.3 1.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppsvgIcon;
/* prettier-ignore-end */
