import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm"],
  outExtension: () => ({ js: ".js" }),
  outDir: "dist",
  target: "node20",
  platform: "node",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false,
  noExternal: ["@beakcrypt/shared", "@beakcrypt/crypto"],
  banner: {
    js: "#!/usr/bin/env node",
  },
});
