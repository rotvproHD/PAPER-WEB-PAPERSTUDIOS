// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: XeBU58o0EdW
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
import sty from "./PlasmicTyberTycoon.module.css"; // plasmic-import: XeBU58o0EdW/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iG22nYJYy3C/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 45mhSrhfGtS/icon
import DownloadIcon143099SvgIcon from "./icons/PlasmicIcon__DownloadIcon143099Svg"; // plasmic-import: -1dlLAmHP/icon

export type PlasmicTyberTycoon__VariantMembers = {};

export type PlasmicTyberTycoon__VariantsArgs = {};
type VariantPropType = keyof PlasmicTyberTycoon__VariantsArgs;
export const PlasmicTyberTycoon__VariantProps = new Array<VariantPropType>();

export type PlasmicTyberTycoon__ArgsType = {};
type ArgPropType = keyof PlasmicTyberTycoon__ArgsType;
export const PlasmicTyberTycoon__ArgProps = new Array<ArgPropType>();

export type PlasmicTyberTycoon__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultTyberTycoonProps {}

function PlasmicTyberTycoon__RenderFunc(props: {
  variants: PlasmicTyberTycoon__VariantsArgs;
  args: PlasmicTyberTycoon__ArgsType;
  overrides: PlasmicTyberTycoon__OverridesType;

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

        <title key="title">{"YOUTUBER TYCOON"}</title>

        <meta key="og:title" property="og:title" content={"YOUTUBER TYCOON"} />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={"YOUTUBER TYCOON"}
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
            className={classNames("__wab_instance", sty.reveal__kMVn)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__v6CnI)}
              color={"blue" as const}
              link={"/" as const}
              shape={"rounded" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cQgQe
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "PAPERSTUDIOS"
                  : "PAPERSTUDIOS"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__fjmjM)}
              color={"green" as const}
              link={"" as const}
              shape={"rounded" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jrJhJ
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "YTBER SIM\nSPIEL [APK]"
                  : "YOUTUBER TYCOON\nSPIEL [APK V.0.2]"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__yo5I6)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__oG00E)}
              color={"blue" as const}
              link={
                "https://www.dropbox.com/s/hbhyzh6wqz92wpv/YOUTUBER%20TYCOON.APK?dl=1" as const
              }
              shape={"rounded" as const}
              showStartIcon={true}
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
                  sty.text__pEmJ
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "DOWNLOAD"
                  : "DOWNLOAD"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__fzAyV)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__lrsA7)}
              color={"blue" as const}
              shape={"rounded" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hxBxt
                )}
              >
                {"28.6 MB"}
              </div>
            </Button>
          </Reveal>
        </div>
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
  PlasmicTyberTycoon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTyberTycoon__VariantsArgs;
    args?: PlasmicTyberTycoon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTyberTycoon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTyberTycoon__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTyberTycoon__ArgProps,
          internalVariantPropNames: PlasmicTyberTycoon__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTyberTycoon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTyberTycoon";
  } else {
    func.displayName = `PlasmicTyberTycoon.${nodeName}`;
  }
  return func;
}

export const PlasmicTyberTycoon = Object.assign(
  // Top-level PlasmicTyberTycoon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTyberTycoon
    internalVariantProps: PlasmicTyberTycoon__VariantProps,
    internalArgProps: PlasmicTyberTycoon__ArgProps
  }
);

export default PlasmicTyberTycoon;
/* prettier-ignore-end */