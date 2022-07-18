// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: DTJ6W9SecA
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantstMxE3T6K3HVTc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tMxE3T6K3hVTc/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_paperstudios.module.css"; // plasmic-import: kNn551YTznMMb4YQ5Km9SL/projectcss
import sty from "./PlasmicZimmerSchildDone.module.css"; // plasmic-import: DTJ6W9SecA/css

export type PlasmicZimmerSchildDone__VariantMembers = {};

export type PlasmicZimmerSchildDone__VariantsArgs = {};
type VariantPropType = keyof PlasmicZimmerSchildDone__VariantsArgs;
export const PlasmicZimmerSchildDone__VariantProps =
  new Array<VariantPropType>();

export type PlasmicZimmerSchildDone__ArgsType = {};
type ArgPropType = keyof PlasmicZimmerSchildDone__ArgsType;
export const PlasmicZimmerSchildDone__ArgProps = new Array<ArgPropType>();

export type PlasmicZimmerSchildDone__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  titletext3?: p.Flex<"h1">;
  titletext2?: p.Flex<"h1">;
};

export interface DefaultZimmerSchildDoneProps {}

function PlasmicZimmerSchildDone__RenderFunc(props: {
  variants: PlasmicZimmerSchildDone__VariantsArgs;
  args: PlasmicZimmerSchildDone__ArgsType;
  overrides: PlasmicZimmerSchildDone__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstMxE3T6K3HVTc()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />

        <title key="title">{"FERTIG"}</title>

        <meta key="og:title" property="og:title" content={"FERTIG"} />

        <meta key="twitter:title" name="twitter:title" content={"FERTIG"} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2__liPh3
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 600 }}
                  >
                    {"ANFRAGE GESENDET"}
                  </span>
                  <React.Fragment>
                    {"\n\nWARTE BIS ER JA ODER NEIN RUFT"}
                  </React.Fragment>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 600 }}
                  >
                    {"ANFRAGE GESENDET, WARTE BIS ER JA ODER NEIN RUFT"}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              )}
            </h2>

            {true ? (
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__hkn5F
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 600 }}
                    >
                      {"ROBERTS ZIMMER"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 600 }}
                    >
                      {"ROBERTS ZIMMER"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                )}
              </h2>
            ) : null}
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.PlasmicLink
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("/" as const)
                  : ("/" as const)
              }
              platform={"nextjs"}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <h1
                  data-plasmic-name={"titletext3"}
                  data-plasmic-override={overrides.titletext3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.titletext3
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "PAPERSTUDIOS"
                    : "PAPERSTUDIOS"}
                </h1>
              ) : null}

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <h1
                  data-plasmic-name={"titletext2"}
                  data-plasmic-override={overrides.titletext2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.titletext2
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "PAPERSTUDIOS"
                    : "PAPERSTUDIOS"}
                </h1>
              ) : null}
            </p.PlasmicLink>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "link", "titletext3", "titletext2"],
  freeBox: ["freeBox"],
  link: ["link", "titletext3", "titletext2"],
  titletext3: ["titletext3"],
  titletext2: ["titletext2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  link: "a";
  titletext3: "h1";
  titletext2: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicZimmerSchildDone__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicZimmerSchildDone__VariantsArgs;
    args?: PlasmicZimmerSchildDone__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicZimmerSchildDone__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicZimmerSchildDone__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicZimmerSchildDone__ArgProps,
          internalVariantPropNames: PlasmicZimmerSchildDone__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicZimmerSchildDone__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicZimmerSchildDone";
  } else {
    func.displayName = `PlasmicZimmerSchildDone.${nodeName}`;
  }
  return func;
}

export const PlasmicZimmerSchildDone = Object.assign(
  // Top-level PlasmicZimmerSchildDone renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    link: makeNodeComponent("link"),
    titletext3: makeNodeComponent("titletext3"),
    titletext2: makeNodeComponent("titletext2"),

    // Metadata about props expected for PlasmicZimmerSchildDone
    internalVariantProps: PlasmicZimmerSchildDone__VariantProps,
    internalArgProps: PlasmicZimmerSchildDone__ArgProps
  }
);

export default PlasmicZimmerSchildDone;
/* prettier-ignore-end */
