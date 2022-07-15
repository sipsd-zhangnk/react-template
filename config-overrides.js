const { override, addLessLoader, addWebpackAlias } = require("customize-cra");

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = override(
  // 使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" },
  }),

  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
  })
);
