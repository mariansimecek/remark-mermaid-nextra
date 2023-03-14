import { defineConfig, Options } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  format: "esm",
    dts: true, 
  target: tsconfig.compilerOptions.target as Options["target"],
  entry: {
    index: "src/index.ts",
  },
});
