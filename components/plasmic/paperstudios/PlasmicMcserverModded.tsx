// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: m_r1hJJL7_i
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
import sty from "./PlasmicMcserverModded.module.css"; // plasmic-import: m_r1hJJL7_i/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iG22nYJYy3C/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 45mhSrhfGtS/icon
import DownloadIcon143099SvgIcon from "./icons/PlasmicIcon__DownloadIcon143099Svg"; // plasmic-import: -1dlLAmHP/icon

export type PlasmicMcserverModded__VariantMembers = {};

export type PlasmicMcserverModded__VariantsArgs = {};
type VariantPropType = keyof PlasmicMcserverModded__VariantsArgs;
export const PlasmicMcserverModded__VariantProps = new Array<VariantPropType>();

export type PlasmicMcserverModded__ArgsType = {};
type ArgPropType = keyof PlasmicMcserverModded__ArgsType;
export const PlasmicMcserverModded__ArgProps = new Array<ArgPropType>();

export type PlasmicMcserverModded__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultMcserverModdedProps {}

function PlasmicMcserverModded__RenderFunc(props: {
  variants: PlasmicMcserverModded__VariantsArgs;
  args: PlasmicMcserverModded__ArgsType;
  overrides: PlasmicMcserverModded__OverridesType;

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

        <title key="title">{"MODDED SERVER"}</title>

        <meta key="og:title" property="og:title" content={"MODDED SERVER"} />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={"MODDED SERVER"}
        />

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
            className={classNames("__wab_instance", sty.reveal___6WnDf)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__pjjyz)}
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
                  sty.text__p7Ua1
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PAPERSTUDIOS"
                  : "PAPERSTUDIOS"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__okd2K)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button___62J5)}
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
                  sty.text__nkVE
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PLATZ 1\nFORGE"
                  : "PLATZ 1\nFORGE"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__vWiDt)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__vA8M5)}
              color={"blue" as const}
              link={
                "https://files.minecraftforge.net/net/minecraftforge/forge/" as const
              }
              shape={"rounded" as const}
              showStartIcon={true}
              startIcon={
                <DownloadIcon143099SvgIcon
                  className={classNames(projectcss.all, sty.svg__pE1Hq)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0QCvx
                )}
              >
                {"DOWNLOADEN"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___7Iea2)}
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
                  sty.text__nqP39
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PLATZ 2\nFABRIC"
                  : "PLATZ 2\nFABRIC"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__aHuMb)}
              color={"blue" as const}
              link={"https://fabricmc.net/use/server/" as const}
              shape={"rounded" as const}
              showStartIcon={true}
              startIcon={
                <DownloadIcon143099SvgIcon
                  className={classNames(projectcss.all, sty.svg___1GuVu)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fsVnH
                )}
              >
                {"DOWNLOADEN"}
              </div>
            </Button>
          </Reveal>
        </p.Stack>
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
  PlasmicMcserverModded__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMcserverModded__VariantsArgs;
    args?: PlasmicMcserverModded__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMcserverModded__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMcserverModded__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMcserverModded__ArgProps,
          internalVariantPropNames: PlasmicMcserverModded__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMcserverModded__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMcserverModded";
  } else {
    func.displayName = `PlasmicMcserverModded.${nodeName}`;
  }
  return func;
}

export const PlasmicMcserverModded = Object.assign(
  // Top-level PlasmicMcserverModded renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMcserverModded
    internalVariantProps: PlasmicMcserverModded__VariantProps,
    internalArgProps: PlasmicMcserverModded__ArgProps
  }
);

export default PlasmicMcserverModded;
/* prettier-ignore-end */