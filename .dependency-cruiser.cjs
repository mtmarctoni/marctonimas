module.exports = {
  forbidden: [
    {
      name: "no-circular-dependencies",
      severity: "warn",
      from: {},
      to: { circular: true },
    },
    {
      name: "components-must-not-import-pages",
      severity: "error",
      from: { path: "^src/components/" },
      to: { path: "^src/pages/" },
    },
    {
      name: "utils-must-not-import-components",
      severity: "error",
      from: { path: "^src/utils/" },
      to: { path: "^src/components/" },
    },
    {
      name: "utils-must-not-import-pages",
      severity: "error",
      from: { path: "^src/utils/" },
      to: { path: "^src/pages/" },
    },
    {
      name: "layouts-must-not-import-pages",
      severity: "error",
      from: { path: "^src/layouts/" },
      to: { path: "^src/pages/" },
    },
  ],
  options: {
    doNotFollow: { path: "node_modules" },
    tsConfig: { fileName: "tsconfig.json" },
  },
};