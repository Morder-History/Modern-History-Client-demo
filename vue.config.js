import path from "path";

module.exports = {
  transpileDependencies: true,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.join(__dirname, "src", "assets", "styles", "mixin.scss"),
        path.join(__dirname, "src", "assets", "styles", "variables.scss"),
      ],
    },
  },
};
