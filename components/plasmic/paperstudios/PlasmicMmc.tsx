// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: pw-TYySpclB
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
import sty from "./PlasmicMmc.module.css"; // plasmic-import: pw-TYySpclB/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iG22nYJYy3C/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 45mhSrhfGtS/icon
import DownloadIcon143099SvgIcon from "./icons/PlasmicIcon__DownloadIcon143099Svg"; // plasmic-import: -1dlLAmHP/icon

export type PlasmicMmc__VariantMembers = {};

export type PlasmicMmc__VariantsArgs = {};
type VariantPropType = keyof PlasmicMmc__VariantsArgs;
export const PlasmicMmc__VariantProps = new Array<VariantPropType>();

export type PlasmicMmc__ArgsType = {};
type ArgPropType = keyof PlasmicMmc__ArgsType;
export const PlasmicMmc__ArgProps = new Array<ArgPropType>();

export type PlasmicMmc__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultMmcProps {}

function PlasmicMmc__RenderFunc(props: {
  variants: PlasmicMmc__VariantsArgs;
  args: PlasmicMmc__ArgsType;
  overrides: PlasmicMmc__OverridesType;

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

        <title key="title">{"MMC"}</title>

        <meta key="og:title" property="og:title" content={"MMC"} />

        <meta key="twitter:title" name="twitter:title" content={"MMC"} />
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
            className={classNames("__wab_instance", sty.reveal__qerBn)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__p4DAk)}
              color={"blue" as const}
              link={"/" as const}
              shape={"rounded" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vMj0K
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
                  sty.text__im8Ie
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "MMC\nSPIEL [CATRO]"
                  : "MMC\nSPIEL [CATRO]"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__ca09)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__cOsXp)}
              color={"blue" as const}
              link={
                "https://www.dropbox.com/s/xno9rfb9ny91swq/e983f830-07d5-483d-9650-8d5ef35d90dd.catrobat?dl=1" as const
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
                  sty.text__vGGcN
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "DOWNLOAD"
                  : "DOWNLOAD"}
              </div>
            </Button>
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__xGeVh)}
            triggerOnce={true}
          >
            <Button
              className={classNames("__wab_instance", sty.button__vgpwg)}
              color={"blue" as const}
              shape={"rounded" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__elSdg
                )}
              >
                {"4.8 MB"}
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
  PlasmicMmc__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMmc__VariantsArgs;
    args?: PlasmicMmc__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMmc__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMmc__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMmc__ArgProps,
          internalVariantPropNames: PlasmicMmc__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMmc__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMmc";
  } else {
    func.displayName = `PlasmicMmc.${nodeName}`;
  }
  return func;
}

export const PlasmicMmc = Object.assign(
  // Top-level PlasmicMmc renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicMmc
    internalVariantProps: PlasmicMmc__VariantProps,
    internalArgProps: PlasmicMmc__ArgProps
  }
);

export default PlasmicMmc;
/* prettier-ignore-end */
