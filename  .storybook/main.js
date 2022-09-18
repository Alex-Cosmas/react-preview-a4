// .storybook/main.js

module.exports = {
  addons: ["@storybook/addon-essentials"],
  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(tsx|js|mdx)"],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};

// const path = require("path");

// module.exports = {
//   framework: "@storybook/react",
//   stories: ["../src/**/**.stories.tsx"],
//   addons: ["@storybook/preset-create-react-app"],
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ["style-loader", "css-loader", "sass-loader"],
//       include: path.resolve(__dirname, "../"),
//     });

//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       loader: require.resolve("babel-loader"),
//       options: {
//         presets: [["react-app", { flow: false, typescript: true }]],
//       },
//     });
//     config.resolve.extensions.push(".js", ".ts", ".tsx");

//     return config;
//   },
// };
