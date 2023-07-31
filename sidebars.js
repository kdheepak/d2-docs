const sidebars = {
  tourSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "tour/intro" },
      items: [
        "tour/intro",
        "tour/experience",
        "tour/design",
        "tour/community",
        "tour/future",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      link: { type: "doc", id: "tour/install" },
      items: [
        "tour/install",
        "tour/hello-world",
        "tour/shapes",
        "tour/connections",
        "tour/containers",
      ],
    },
    {
      type: "category",
      label: "Special Objects",
      link: { type: "doc", id: "tour/text" },
      items: [
        "tour/text",
        "tour/icons",
        "tour/sql-tables",
        "tour/uml-classes",
        "tour/sequence-diagrams",
        "tour/grid-diagrams",
      ],
    },
    {
      type: "category",
      label: "Customization",
      link: { type: "doc", id: "tour/themes" },
      items: [
        "tour/themes",
        "tour/style",
        "tour/classes",
        "tour/dimensions",
        "tour/positions",
        "tour/sketch",
        "tour/interactive",
        "tour/fonts",
      ],
    },
    {
      type: "category",
      label: "Layouts",
      link: { type: "doc", id: "tour/layouts" },
      items: [
        "tour/layouts",
        {
          type: "category",
          label: "Layout engines",
          link: { type: "doc", id: "tour/dagre" },
          items: ["tour/dagre", "tour/elk", "tour/tala"],
        },
      ],
    },
    {
      type: "category",
      label: "In Depth",
      link: { type: "doc", id: "tour/strings" },
      items: [
        "tour/strings",
        "tour/vars",
        "tour/globs",
        "tour/comments",
        "tour/overrides",
        "tour/auto-formatter",
      ],
    },
    {
      type: "category",
      label: "Composition",
      link: { type: "doc", id: "tour/composition" },
      items: [
        "tour/composition",
        {
          type: "category",
          label: "Board types",
          link: { type: "doc", id: "tour/layers" },
          items: ["tour/layers", "tour/scenarios", "tour/steps"],
        },
        "tour/linking",
        "tour/composition-formats",
      ],
    },
    {
      type: "category",
      label: "Imports",
      link: { type: "doc", id: "tour/imports" },
      items: [
        "tour/imports",
        {
          type: "category",
          label: "Use cases",
          link: { type: "doc", id: "tour/imports-use-cases" },
          items: [
            "tour/imports-use-cases",
            {
              type: "category",
              label: "Patterns",
              link: { type: "doc", id: "tour/model-view" },
              items: [
                "tour/model-view",
                "tour/modular-classes",
                "tour/nested-composition",
              ],
            },
            {
              type: "category",
              label: "More examples",
              link: { type: "doc", id: "tour/version-visualization" },
              items: ["tour/version-visualization", "tour/imported-template"],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Extensions",
      link: { type: "doc", id: "tour/extensions" },
      items: [
        "tour/extensions",
        {
          type: "category",
          label: "Official",
          link: { type: "doc", id: "tour/vscode" },
          items: [
            "tour/vscode",
            "tour/vim",
            "tour/obsidian",
            "tour/slack",
            "tour/discord",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API",
      link: { type: "doc", id: "tour/api" },
      items: ["tour/api"],
    },
    "tour/studio",
    "tour/exports",
    "tour/cheat-sheet",
    "tour/faq",
    "tour/troubleshoot",
    "tour/help",
  ],
  releasesSidebar: [
    {
      type: "category",
      label: "Releases",
      link: { type: "doc", id: "releases/intro" },
      items: [
        "releases/intro",
        "releases/0.6.0",
        "releases/0.5.1",
        "releases/0.5.0",
        "releases/0.4.2",
        "releases/0.4.1",
        "releases/0.4.0",
        "releases/0.3.0",
        "releases/0.2.6",
        "releases/0.2.5",
        "releases/0.2.4",
        "releases/0.2.3",
        "releases/0.2.2",
        "releases/0.2.1",
        "releases/0.2.0",
        "releases/0.1.6",
        "releases/0.1.5",
        "releases/0.1.4",
        "releases/0.1.3",
        "releases/0.1.2",
        "releases/0.1.1",
        "releases/0.1.0",
        "releases/0.0.13",
      ],
    },
  ],
};

module.exports = sidebars;
