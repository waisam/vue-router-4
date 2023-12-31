# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Init this template

```shell
# generate project by npm
npm init vite

# into project directory and resolve dependencies
cd vue-router4
npm install vue-router@4
npm install
```

## About Web Hash History

请记住，我们制作的是一个单页面应用程序，具体来说，这是一个只有一个页面或文件的应用程序，而且导航的工作方式与传统的服务器端应用程序不同。

为了让 HTML5 模式正常工作，我们需要对服务器进行配置，将所有路径发送到唯一的入口点。需要在服务器上添加一个简单的回退路由，当 URL 不匹配
任何静态资源，它应提供与你的应用程序中的 `index.html` 相同的页面。

例如，如果我们提供一个路径，如 `/brands/nike/shoes`，传统的做法是，在名为 `shoe` 的目录下会有一个 `index.html` 文件，在名为`nike` 的目录
下会有一个 `index.html` 文件，在名为`brands` 的目录下会有一个 `index.html` 文件。但在 HTML5 模式下，为了与单页面应用程序配合使用，我们希
望流量全部进入服务器上的一个入口点，而不是查找嵌套在这些目录中的文件。

哈希模式在内部传递实际 URL 之前使用一个哈希字符(`#`), 效果是其后面的 URL 部分不会被发送到服务器，这使得请求始终发送到服务器上的同一个入口,
所以使用哈希模式不需要在服务器层面上进行任何特殊处理。不过哈希模式也有缺点。最明显的是，它有点难看。更重要的是，它会影响搜索引擎优化(SEO)。

## About Lazy Loading Routes

在之前，我们在进入页面时，就通过 import 直接加载路由组件，所有组件在同一时间被载入，
而我们的代码编译的结果是这样的:

```
[MacBook-Pro:~/Nodeprojects/vue-router4] waisam % npm run build

> vue-router4@0.0.0 build
> vue-tsc && vite build

vite v4.5.0 building for production...
✓ 37 modules transformed.
dist/index.html                 0.42 kB │ gzip:  0.30 kB
dist/assets/index-004e8a7e.js  94.09 kB │ gzip: 31.72 kB
✓ built in 1.86s
```

所有的组件被编译成一个文件，因此也会一起被加载，当应用中存在大量组件时，这无疑是一种负担。
因此，如果路由能够对组件进行懒加载设置，将大大提高页面加载的效率。正好 vue-router 也为我们
提供了这样的功能。

路由组件进行懒加载设置后的编译结果如下:

```
[MacBook-Pro:~/Nodeprojects/vue-router4] waisam % npm run build

> vue-router4@0.0.0 build
> vue-tsc && vite build

vite v4.5.0 building for production...
✓ 38 modules transformed.
dist/index.html                   0.42 kB │ gzip:  0.30 kB
dist/assets/Jamaica-99a66b50.js   0.17 kB │ gzip:  0.16 kB
dist/assets/Brazil-9f73810c.js    0.17 kB │ gzip:  0.16 kB
dist/assets/Panama-9151b416.js    0.17 kB │ gzip:  0.16 kB
dist/assets/Hawaii-8a1526ad.js    0.17 kB │ gzip:  0.16 kB
dist/assets/About-9f8d7a3a.js     0.25 kB │ gzip:  0.21 kB
dist/assets/Home-0983d685.js      0.49 kB │ gzip:  0.35 kB
dist/assets/index-012e154b.js    94.39 kB │ gzip: 32.00 kB
✓ built in 2.01s
```

可以看到每一个组件都被编译成单独的文件。

## About Navigation Component

将 App.vue 中的链接提取到自己专用的、具有语义名称的组件文件中。遵循了 Vue.js 样式指南，将其命名为 TheNavigation。

## About Router Link Active Class

用 RouterOptions 的 linkActiveClass 属性, 为当前活动路由链接指定自定义样式

## About Dynamic Routes

① 使用冒号`:`表示路径参数，当路径参数匹配时，展示相应的内容  
② 路径参数保存在`this.$route.params`中，组合式风格的 API 无法直接访问，需要使用`useRoute()`函数获取`route`对象，才能进行访问

## About Named Routes

① 在路由对象中指定 `name` 属性的值，作为路由的名称  
② 将 route-link 标签 `to` 属性的值设为路由的名称，表示该路由链接映射到指定的路由  
③ 使用路由名称作为映射关系后，可根据路径展示需求，随意变更路由对象中 `path` 属性的值

## About Clean Up

① 清理不需要的旧页面  
② 导航组件路由链接使用路由名称映射

## About Reacting to Route Param Changes

① 前提: 复用同一组件实例展示相同逻辑的数据  
② 因为组件只有在创建实例时，才会触发生命周期钩子函数, 当组件实例被复用, 因为不需要重新创建组件实例，因此不会触发该组件的生命周期钩子函数  
③ 路由参数不属于组件的属性和状态, 因此组件实例并不能直接感知它的变化, 进而触发重新渲染  
④ 通过使用 `watch` 函数, 在路由参数发生变化时, 触发回调函数更新组件实例的状态, 触发重新渲染(re-render)机制

## About Route Props

① 在组件中调用路由对象，会让组件与路由对象产生紧耦合, 这会限制组件的灵活性，导致组件只能用在具体的 URL 上  
② 使用路由对象的 props 属性来传递参数, 可以将路由对象和组件解耦, 以增强组件的灵活性  
③ 路由 props 的不同模式:

- 布尔模式
  > 路由对象的 props 设置为 true, `$route.params` 会直接映射到组件的 props, 因此组件 props 的属性必须与路由参数保持一致
- 对象模式
  > 当路由对象的 props 是一个对象时, 组件 props 和路由对象的 props 保持一致即可
- 函数模式
  > 路由对象的 props 是一个返回 json 对象的函数, 返回的 json 对象须与组件 props 保持一致

## About Experience Cards

Vue 2 中组件只能存在一个根元素，Vue 3 没有这种限制

## About Nested Routes

① 在路由中配置 `children` 属性, 将映射到指定组件的路由设置为 `children` 的元素  
② 在父路由映射的组件中嵌套 `<router-view>` 让子路由映射的组件显示在指定位置  
③ 子路由 `path` 的值若以 `/` 开头, 即表示根路径; 若不以 `/` 开头, 则子路由的实际路径为 "父路由 path`/`子路由 path", 如: 父路由 path 为 `/destination/:name`, 子路由 path 为 `:slug`, 子路由的完整路径为 `/destination/:name/:slug` 。  
④ 以 ③ 中的例子为例, 如果将所有的路由传递给父路由组件的 props, 会因为父路由组件 props 中, 没有设置用来接收传递给子路由组件的参数 `slug`, 而产生告警。解决的办法是只传递父路由组件需要的参数给它即可。传递无关的额外参数, 组件会因为 props 无法完全接收而告警。

## About Go Back

使用路由器对象`$router`的`back()`函数或`go(-1)`函数实现浏览器的历史回退功能
