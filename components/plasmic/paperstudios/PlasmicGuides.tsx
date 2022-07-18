// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: OFTsaRuYseL
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
import sty from "./PlasmicGuides.module.css"; // plasmic-import: OFTsaRuYseL/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iG22nYJYy3C/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 45mhSrhfGtS/icon
import DownloadIcon143099SvgIcon from "./icons/PlasmicIcon__DownloadIcon143099Svg"; // plasmic-import: -1dlLAmHP/icon

export type PlasmicGuides__VariantMembers = {};

export type PlasmicGuides__VariantsArgs = {};
type VariantPropType = keyof PlasmicGuides__VariantsArgs;
export const PlasmicGuides__VariantProps = new Array<VariantPropType>();

export type PlasmicGuides__ArgsType = {};
type ArgPropType = keyof PlasmicGuides__ArgsType;
export const PlasmicGuides__ArgProps = new Array<ArgPropType>();

export type PlasmicGuides__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultGuidesProps {}

function PlasmicGuides__RenderFunc(props: {
  variants: PlasmicGuides__VariantsArgs;
  args: PlasmicGuides__ArgsType;
  overrides: PlasmicGuides__OverridesType;

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

        <title key="title">{"GUIDES"}</title>

        <meta key="og:title" property="og:title" content={"GUIDES"} />

        <meta key="twitter:title" name="twitter:title" content={"GUIDES"} />

        <meta
          key="og:image"
          property="og:image"
          content={
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Home-icon.svg"
          }
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Home-icon.svg"
          }
        />
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
          <Reveal
            className={classNames("__wab_instance", sty.reveal__pfqAc)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__jlWr2)}
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
                  sty.text__qlZw
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PAPERSTUDIOS"
                  : "PAPERSTUDIOS"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__yxuoE)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button___9CACi)}
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
                  sty.text__ypa8O
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "BESTE MC\nSERVER JAR"
                  : "BESTE MINECRAFT\nSERVER SOFTWARES"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal___84Cvd)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__ygOg)}
              color={"blue" as const}
              link={"/serversoftware" as const}
              shape={"rounded" as const}
              startIcon={
                <DownloadIcon143099SvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aQpH
                )}
              >
                {"ANSCHAUEN"}
              </div>
            </Button>
          </Reveal>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGuides__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGuides__VariantsArgs;
    args?: PlasmicGuides__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGuides__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGuides__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicGuides__ArgProps,
          internalVariantPropNames: PlasmicGuides__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGuides__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGuides";
  } else {
    func.displayName = `PlasmicGuides.${nodeName}`;
  }
  return func;
}

export const PlasmicGuides = Object.assign(
  // Top-level PlasmicGuides renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicGuides
    internalVariantProps: PlasmicGuides__VariantProps,
    internalArgProps: PlasmicGuides__ArgProps
  }
);

export default PlasmicGuides;
/* prettier-ignore-end */
