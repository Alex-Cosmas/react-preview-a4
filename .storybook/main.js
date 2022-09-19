const path = require("path");

const stories = ["../src/**/**.stories.@(ts|js)"];
const addons = ["@storybook/preset-create-react-app"];

module.exports = {
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  stories: stories,
  addons: addons,
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".js", ".ts", ".tsx");

    return config;
  },
};
