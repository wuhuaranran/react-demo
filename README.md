# react Demo
### src/hooks.js：Hooks useState useEffect
### eslint自动修改格式：eslint.autoFix:true
### 自定义全局样式：
1. /theme/index.js: 
const theme{//样式} module.exports = theme;
2. webpack.config.js: 
- const theme = require('./theme');
- npm 安装这些loader
- css loader:options: {... modifyVars: theme}
### 路由
- App.js引入页面，入口页面index.js配置
- store.js统一管理所有redux store