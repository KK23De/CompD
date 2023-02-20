// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2xsWMbGxJMd5f6YcntvxRn
// Component: 8kMpOb3aq0L9
import * as React from "react";

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
import SelectCard from "../../SelectCard"; // plasmic-import: Dm5PcuUjjAz/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 2xsWMbGxJMd5f6YcntvxRn/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 8kMpOb3aq0L9/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  goalFrame?: p.Flex<"div">;
  selectCard?: p.Flex<typeof SelectCard>;
  rectangle1?: p.Flex<"div">;
  selectAtLeast4GoalsToContinue2?: p.Flex<"div">;
  rectangle10?: p.Flex<"div">;
  rectangle11?: p.Flex<"div">;
  rectangle12?: p.Flex<"div">;
  rectangle13?: p.Flex<"div">;
  rectangle14?: p.Flex<"div">;
  rectangle15?: p.Flex<"div">;
  rectangle16?: p.Flex<"div">;
  rectangle17?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      {}

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
          <div
            data-plasmic-name={"goalFrame"}
            data-plasmic-override={overrides.goalFrame}
            className={classNames(projectcss.all, sty.goalFrame)}
          >
            <SelectCard
              data-plasmic-name={"selectCard"}
              data-plasmic-override={overrides.selectCard}
              className={classNames("__wab_instance", sty.selectCard)}
            />

            <div
              data-plasmic-name={"rectangle1"}
              data-plasmic-override={overrides.rectangle1}
              className={classNames(projectcss.all, sty.rectangle1)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__csl49
              )}
            >
              {"Select Goals"}
            </div>

            <div
              data-plasmic-name={"selectAtLeast4GoalsToContinue2"}
              data-plasmic-override={overrides.selectAtLeast4GoalsToContinue2}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.selectAtLeast4GoalsToContinue2
              )}
            >
              {"select at least 4 goals to continue "}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4JIOx
              )}
            >
              {"Product Betterment"}
            </div>

            <div
              data-plasmic-name={"rectangle10"}
              data-plasmic-override={overrides.rectangle10}
              className={classNames(projectcss.all, sty.rectangle10)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3NbW1
              )}
            >
              {"Product Documentation"}
            </div>

            <div
              data-plasmic-name={"rectangle11"}
              data-plasmic-override={overrides.rectangle11}
              className={classNames(projectcss.all, sty.rectangle11)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wUz4M
              )}
            >
              {"OKR"}
            </div>

            <div
              data-plasmic-name={"rectangle12"}
              data-plasmic-override={overrides.rectangle12}
              className={classNames(projectcss.all, sty.rectangle12)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__o45Tx
              )}
            >
              {"Marketing Automation"}
            </div>

            <div
              data-plasmic-name={"rectangle13"}
              data-plasmic-override={overrides.rectangle13}
              className={classNames(projectcss.all, sty.rectangle13)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kyQHa
              )}
            >
              {"Product Optimization"}
            </div>

            <div
              data-plasmic-name={"rectangle14"}
              data-plasmic-override={overrides.rectangle14}
              className={classNames(projectcss.all, sty.rectangle14)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3TFgw
              )}
            >
              {"Project Management"}
            </div>

            <div
              data-plasmic-name={"rectangle15"}
              data-plasmic-override={overrides.rectangle15}
              className={classNames(projectcss.all, sty.rectangle15)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__dksoz
              )}
            >
              {"Process Automation"}
            </div>

            <div
              data-plasmic-name={"rectangle16"}
              data-plasmic-override={overrides.rectangle16}
              className={classNames(projectcss.all, sty.rectangle16)}
            />

            <div
              data-plasmic-name={"rectangle17"}
              data-plasmic-override={overrides.rectangle17}
              className={classNames(projectcss.all, sty.rectangle17)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xDd4V
              )}
            >
              {"Submit"}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "goalFrame",
    "selectCard",
    "rectangle1",
    "selectAtLeast4GoalsToContinue2",
    "rectangle10",
    "rectangle11",
    "rectangle12",
    "rectangle13",
    "rectangle14",
    "rectangle15",
    "rectangle16",
    "rectangle17"
  ],
  goalFrame: [
    "goalFrame",
    "selectCard",
    "rectangle1",
    "selectAtLeast4GoalsToContinue2",
    "rectangle10",
    "rectangle11",
    "rectangle12",
    "rectangle13",
    "rectangle14",
    "rectangle15",
    "rectangle16",
    "rectangle17"
  ],
  selectCard: ["selectCard"],
  rectangle1: ["rectangle1"],
  selectAtLeast4GoalsToContinue2: ["selectAtLeast4GoalsToContinue2"],
  rectangle10: ["rectangle10"],
  rectangle11: ["rectangle11"],
  rectangle12: ["rectangle12"],
  rectangle13: ["rectangle13"],
  rectangle14: ["rectangle14"],
  rectangle15: ["rectangle15"],
  rectangle16: ["rectangle16"],
  rectangle17: ["rectangle17"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  goalFrame: "div";
  selectCard: typeof SelectCard;
  rectangle1: "div";
  selectAtLeast4GoalsToContinue2: "div";
  rectangle10: "div";
  rectangle11: "div";
  rectangle12: "div";
  rectangle13: "div";
  rectangle14: "div";
  rectangle15: "div";
  rectangle16: "div";
  rectangle17: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    goalFrame: makeNodeComponent("goalFrame"),
    selectCard: makeNodeComponent("selectCard"),
    rectangle1: makeNodeComponent("rectangle1"),
    selectAtLeast4GoalsToContinue2: makeNodeComponent(
      "selectAtLeast4GoalsToContinue2"
    ),
    rectangle10: makeNodeComponent("rectangle10"),
    rectangle11: makeNodeComponent("rectangle11"),
    rectangle12: makeNodeComponent("rectangle12"),
    rectangle13: makeNodeComponent("rectangle13"),
    rectangle14: makeNodeComponent("rectangle14"),
    rectangle15: makeNodeComponent("rectangle15"),
    rectangle16: makeNodeComponent("rectangle16"),
    rectangle17: makeNodeComponent("rectangle17"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
