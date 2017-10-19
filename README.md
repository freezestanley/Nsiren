# nsiren

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8100
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run createEntry
npm run createEntry target
require target enter name

# run mdev    run dev & mock
npm run mdev

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


localhost:8100  dev 网址
localhost:8101  mock 网址

service   mock service
mock 用来放本地mock数据
snap 快照保存跨域请求的数据 
  快照 interface path/月日时分秒.json  ex: /jdt-web/wx/configdata.do/10091233233.json

=============================================================================================
src/api

  export function 用来 toggle cross/local
  toggle default false cross 跨域
                 true  local 本地json数据


多页多入口
application
  |-main
  |-share               

