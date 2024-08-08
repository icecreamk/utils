export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kxiner/Documents/curLearn/utils/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/array/convertListToTree.html", { loader: () => import(/* webpackChunkName: "array_convertListToTree.html" */"/Users/kxiner/Documents/curLearn/utils/docs/.vuepress/.temp/pages/array/convertListToTree.html.js"), meta: {"title":""} }],
  ["/array/sum.html", { loader: () => import(/* webpackChunkName: "array_sum.html" */"/Users/kxiner/Documents/curLearn/utils/docs/.vuepress/.temp/pages/array/sum.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kxiner/Documents/curLearn/utils/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
