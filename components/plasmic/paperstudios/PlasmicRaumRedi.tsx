// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kNn551YTznMMb4YQ5Km9SL
// Component: gH3EV4Ctbq
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
import Button from "../../Button"; // plasmic-import: 7xNG3XR7jCb/component

import { useScreenVariants as useScreenVariantstMxE3T6K3HVTc } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: tMxE3T6K3hVTc/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_paperstudios.module.css"; // plasmic-import: kNn551YTznMMb4YQ5Km9SL/projectcss
import sty from "./PlasmicRaumRedi.module.css"; // plasmic-import: gH3EV4Ctbq/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iG22nYJYy3C/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 45mhSrhfGtS/icon

export type PlasmicRaumRedi__VariantMembers = {};

export type PlasmicRaumRedi__VariantsArgs = {};
type VariantPropType = keyof PlasmicRaumRedi__VariantsArgs;
export const PlasmicRaumRedi__VariantProps = new Array<VariantPropType>();

export type PlasmicRaumRedi__ArgsType = {};
type ArgPropType = keyof PlasmicRaumRedi__ArgsType;
export const PlasmicRaumRedi__ArgProps = new Array<ArgPropType>();

export type PlasmicRaumRedi__OverridesType = {
  root?: p.Flex<"div">;
  googleDrive?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  titletext3?: p.Flex<"h1">;
  titletext2?: p.Flex<"h1">;
};

export interface DefaultRaumRediProps {}

function PlasmicRaumRedi__RenderFunc(props: {
  variants: PlasmicRaumRedi__VariantsArgs;
  args: PlasmicRaumRedi__ArgsType;
  overrides: PlasmicRaumRedi__OverridesType;

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

        <title key="title">{"DER RAUM"}</title>

        <meta key="og:title" property="og:title" content={"DER RAUM"} />

        <meta key="twitter:title" name="twitter:title" content={"DER RAUM"} />
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
          <Button
            data-plasmic-name={"googleDrive"}
            data-plasmic-override={overrides.googleDrive}
            className={classNames("__wab_instance", sty.googleDrive)}
            link={
              "https://drive.google.com/drive/folders/1rW40SuNMPoPcFEZtXiS9tWLAitIBXoms?usp=sharing" as const
            }
            shape={"rounded" as const}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__jvcOg
                    )}
                  >
                    {"GOOGLE DRIVE"}
                  </h2>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </Button>

          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__hH9Sv
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly") ? (
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 600 }}
                >
                  {
                    "Betrete den RAUM, hier kannst du Dateien für alle im RAUM Freigeben!"
                  }
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
                  {
                    "Betrete den RAUM, hier kannst du Dateien für alle im RAUM Freigeben!"
                  }
                </span>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            )}
          </h2>

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
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "googleDrive", "text", "link", "titletext3", "titletext2"],
  googleDrive: ["googleDrive", "text"],
  text: ["text"],
  link: ["link", "titletext3", "titletext2"],
  titletext3: ["titletext3"],
  titletext2: ["titletext2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  googleDrive: typeof Button;
  text: "div";
  link: "a";
  titletext3: "h1";
  titletext2: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRaumRedi__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRaumRedi__VariantsArgs;
    args?: PlasmicRaumRedi__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRaumRedi__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRaumRedi__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRaumRedi__ArgProps,
          internalVariantPropNames: PlasmicRaumRedi__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRaumRedi__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRaumRedi";
  } else {
    func.displayName = `PlasmicRaumRedi.${nodeName}`;
  }
  return func;
}

export const PlasmicRaumRedi = Object.assign(
  // Top-level PlasmicRaumRedi renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    googleDrive: makeNodeComponent("googleDrive"),
    text: makeNodeComponent("text"),
    link: makeNodeComponent("link"),
    titletext3: makeNodeComponent("titletext3"),
    titletext2: makeNodeComponent("titletext2"),

    // Metadata about props expected for PlasmicRaumRedi
    internalVariantProps: PlasmicRaumRedi__VariantProps,
    internalArgProps: PlasmicRaumRedi__ArgProps
  }
);

export default PlasmicRaumRedi;
/* prettier-ignore-end */
