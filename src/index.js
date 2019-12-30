import { declare } from "@babel/helper-plugin-utils";
import transformReactJSX from "@babel/plugin-transform-react-jsx";
import transformModulesCommonJS from "@babel/plugin-transform-modules-commonjs";
import addModuleExports from "babel-plugin-add-module-exports";

export default declare((api, opts) => {
  api.assertVersion(7);

  const pragma = opts.pragma || "JSXCAD.createElement";
  const pragmaFrag = opts.pragmaFrag || "JSXCAD.Fragment";
  const useBuiltIns = !!opts.useBuiltIns;
  const { useSpread } = opts;

  return {
    plugins: [
      [transformReactJSX, { pragma, pragmaFrag, useBuiltIns, useSpread }],
      transformModulesCommonJS,
      addModuleExports
    ].filter(Boolean)
  };
});
