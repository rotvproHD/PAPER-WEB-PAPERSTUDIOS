// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RegistriereNsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RegistriereNsvgIcon(props: RegistriereNsvgIconProps) {
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

      <path
        d={
          "M0 92C0 41.19 41.19 0 92 0h1561c50.81 0 92 41.19 92 92s-41.19 92-92 92H92c-50.81 0-92-41.19-92-92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RegistriereNsvgIcon;
/* prettier-ignore-end */
