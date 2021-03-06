// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: i9_r5y-8v00
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
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import Button from "../../Button"; // plasmic-import: 7xNG3XR7jCb/component

import { useScreenVariants as useScreenVariantstMxE3T6K3HVTc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tMxE3T6K3hVTc/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_paperstudios.module.css"; // plasmic-import: kNn551YTznMMb4YQ5Km9SL/projectcss
import sty from "./PlasmicProjekteProgrammePc.module.css"; // plasmic-import: i9_r5y-8v00/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iG22nYJYy3C/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 45mhSrhfGtS/icon

export type PlasmicProjekteProgrammePc__VariantMembers = {};

export type PlasmicProjekteProgrammePc__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjekteProgrammePc__VariantsArgs;
export const PlasmicProjekteProgrammePc__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProjekteProgrammePc__ArgsType = {};
type ArgPropType = keyof PlasmicProjekteProgrammePc__ArgsType;
export const PlasmicProjekteProgrammePc__ArgProps = new Array<ArgPropType>();

export type PlasmicProjekteProgrammePc__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultProjekteProgrammePcProps {}

function PlasmicProjekteProgrammePc__RenderFunc(props: {
  variants: PlasmicProjekteProgrammePc__VariantsArgs;
  args: PlasmicProjekteProgrammePc__ArgsType;
  overrides: PlasmicProjekteProgrammePc__OverridesType;

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
        <meta name="twitter:card" content="summary_large_image" />

        <title key="title">{"PROGRAMME"}</title>

        <meta key="og:title" property="og:title" content={"PROGRAMME"} />

        <meta key="twitter:title" name="twitter:title" content={"PROGRAMME"} />

        <meta
          key="og:image"
          property="og:image"
          content={
            "https://site-assets.plasmic.app/19f123fbbe57c71668b4e38fd642f865.png"
          }
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={
            "https://site-assets.plasmic.app/19f123fbbe57c71668b4e38fd642f865.png"
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <Reveal
            className={classNames("__wab_instance", sty.reveal__lsymB)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__oGiNz)}
              color={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("blue" as const)
                  : ("blue" as const)
              }
              link={"/" as const}
              shape={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("rounded" as const)
                  : ("rounded" as const)
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pgQ8J
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PAPERSTUDIOS"
                  : "PAPERSTUDIOS"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__hJnu)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__xoedm)}
              color={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("green" as const)
                  : ("green" as const)
              }
              link={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("" as const)
                  : ("" as const)
              }
              shape={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("rounded" as const)
                  : ("rounded" as const)
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z3Jry
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PAM [UPAI]\nPRGRM [EXE]"
                  : "PAM [UPAI]\nPROGRAMM [EXE]"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__uSa7E)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__bho1D)}
              color={"blue" as const}
              link={"/pam" as const}
              shape={"rounded" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oj8Pa
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "ANSCHAUEN"
                  : "ANSCHAUEN"}
              </div>
            </Button>
          </Reveal>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjekteProgrammePc__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjekteProgrammePc__VariantsArgs;
    args?: PlasmicProjekteProgrammePc__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjekteProgrammePc__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProjekteProgrammePc__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicProjekteProgrammePc__ArgProps,
          internalVariantPropNames: PlasmicProjekteProgrammePc__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProjekteProgrammePc__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjekteProgrammePc";
  } else {
    func.displayName = `PlasmicProjekteProgrammePc.${nodeName}`;
  }
  return func;
}

export const PlasmicProjekteProgrammePc = Object.assign(
  // Top-level PlasmicProjekteProgrammePc renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProjekteProgrammePc
    internalVariantProps: PlasmicProjekteProgrammePc__VariantProps,
    internalArgProps: PlasmicProjekteProgrammePc__ArgProps
  }
);

export default PlasmicProjekteProgrammePc;
/* prettier-ignore-end */
