(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(t,s,a){t.exports=a.p+"assets/img/1560069280016.59f04551.png"},384:function(t,s,a){"use strict";a.r(s);var r=a(42),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"第4章-jquery选择器-重点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第4章-jquery选择器-重点"}},[t._v("#")]),t._v(" 第4章 jQuery选择器（重点）")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("jQuery最牛的地方就是其强大的选择器，使用其选择器基本可以快速轻松的找到页面的任意节点")])]),t._v(" "),r("li",[r("p",[t._v("jQuery的选择器分类")]),t._v(" "),r("ul",[r("li",[t._v("基本选择器")]),t._v(" "),r("li",[t._v("层级选择器（或层次选择器）")]),t._v(" "),r("li",[t._v("过滤选择器\n"),r("ul",[r("li",[t._v("基本")]),t._v(" "),r("li",[t._v("内容")]),t._v(" "),r("li",[t._v("可见性")]),t._v(" "),r("li",[t._v("属性")]),t._v(" "),r("li",[t._v("子元素")]),t._v(" "),r("li",[t._v("表单")]),t._v(" "),r("li",[t._v("表单对象属性")])])])])])]),t._v(" "),r("p",[t._v("见文档：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(367),alt:"1560069280016"}})]),t._v(" "),r("h2",{attrs:{id:"_4-1-基本选择器-重点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-基本选择器-重点"}},[t._v("#")]),t._v(" 4.1 基本选择器 (重点)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("基本选择器是jquery中最简单，也是最常用的选择器")])]),t._v(" "),r("li",[r("p",[t._v("它通过标签名,id属性,class属性来查找匹配的DOM元素")])])]),t._v(" "),r("h3",{attrs:{id:"_1-id选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-id选择器"}},[t._v("#")]),t._v(" 1）  id选择器")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("用法： $('#id')")])])]),t._v(" "),r("li",[r("p",[t._v("返回值：根据id属性匹配一个标签， 封装成jQuery对象")])]),t._v(" "),r("li",[r("p",[t._v("举例")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//HTML代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notMe"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notMe"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jQuery代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#myDiv"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"_2-标签选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-标签选择器"}},[t._v("#")]),t._v(" 2）  标签选择器")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("用法:  $(‘tagName’)")])])]),t._v(" "),r("li",[r("p",[t._v("返回值：根据标签名匹配的一个或多个标签，封装成jQuery对象")])]),t._v(" "),r("li",[r("p",[t._v("举例")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//HTML代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPAN")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jQuery代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"_3-class选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-class选择器"}},[t._v("#")]),t._v(" 3）  class选择器")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("用法:  $(‘.class’)")])])]),t._v(" "),r("li",[r("p",[t._v("返回值：根据class属性值匹配一个或多个标签, 封装成jQuery对象")])]),t._v(" "),r("li",[r("p",[t._v("举例：")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//HTML代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notMe"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notMe"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("span "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jQuery代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('".myClass"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("span "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"_4-全局选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-全局选择器"}},[t._v("#")]),t._v(" 4）  全局选择器")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("用法:  $(*)")])])]),t._v(" "),r("li",[r("p",[t._v("返回值: 匹配所有标签， 封装成jQuery对象")])]),t._v(" "),r("li",[r("p",[t._v("举例")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//HTML代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPAN")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jQuery代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SPAN")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"_5-组合选择器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-组合选择器"}},[t._v("#")]),t._v(" 5） 组合选择器")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("用法:  $(”div,span,.myClass”)")])])]),t._v(" "),r("li",[r("p",[t._v("返回值: 所有匹配选择器的标签, 封装成jQuery对象")])]),t._v(" "),r("li",[r("p",[t._v("举例：")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//HTML代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notMyClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notMyClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//jQuery代码：")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div,span,p.myClass"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//p.myClass：表示查找的标签名必须是p标签，并且class属性要是myclass")]),t._v("\n\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//结果：结果数据的顺序与要查询的元素先后顺序不一致，与HTML中元素声明的先后顺序一致。")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("p "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClass"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),r("h2",{attrs:{id:"_4-2-层级选择器-重点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-层级选择器-重点"}},[t._v("#")]),t._v(" 4.2 层级选择器 (重点)")]),t._v(" "),r("ul",[r("li",[t._v("如果想通过DOM元素之间的层级关系来获取特定元素。例如后代元素、子元素、兄弟元素等。则需要通过层级选择器（或层次选择器）。")])]),t._v(" "),r("h3",{attrs:{id:"_1-ancestor-descendant"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-ancestor-descendant"}},[t._v("#")]),t._v(" 1）  ancestor descendant")]),t._v(" "),r("ul",[r("li",[t._v("后代选择器")]),t._v(" "),r("li",[t._v("用法:$(”form input”)**")]),t._v(" "),r("li",[t._v("说明:在给定的祖先元素下匹配所有后代元素（包括子元素的子元素，...）")])]),t._v(" "),r("h3",{attrs:{id:"_2-parent-child"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-parent-child"}},[t._v("#")]),t._v(" 2）  parent > child")]),t._v(" "),r("ul",[r("li",[t._v("子代选择器")]),t._v(" "),r("li",[r("strong",[t._v("用法: $(”form > input”)")])]),t._v(" "),r("li",[t._v("说明: 在指定父元素下匹配所有子元素。\n"),r("ul",[r("li",[t._v("注意：要区分好后代元素与子元素")])])])]),t._v(" "),r("h3",{attrs:{id:"_3-prev-next"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-prev-next"}},[t._v("#")]),t._v(" 3）  prev + next")]),t._v(" "),r("ul",[r("li",[t._v("相邻（紧邻）选择器（后面邻居）")]),t._v(" "),r("li",[r("strong",[t._v("用法: $(”label + input”)")])]),t._v(" "),r("li",[t._v("说明: 匹配所有紧接在prev元素后的next元素。\n"),r("ul",[r("li",[t._v("注意：从平级元素中找，而不要去子元素中查找。")])])])]),t._v(" "),r("h3",{attrs:{id:"_4-prev-siblings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-prev-siblings"}},[t._v("#")]),t._v(" 4）  prev ~ siblings")]),t._v(" "),r("ul",[r("li",[t._v("兄弟（同辈）选择器（后面兄弟）")]),t._v(" "),r("li",[r("strong",[t._v("用法: $(”form ~ input”)")])]),t._v(" "),r("li",[t._v("说明: 匹配prev元素之后的所有 siblings元素，不包含该元素在内，并且siblings匹配的是和prev同辈的元素，"),r("strong",[t._v("其后辈子元素不被匹配。")])])]),t._v(" "),r("h2",{attrs:{id:"_4-3-过滤选择器-基本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-过滤选择器-基本"}},[t._v("#")]),t._v(" 4.3 过滤选择器：基本")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("过滤选择器主要是通过特定的过滤规则来筛选出所需的DOM元素, 该选择器都"),r("strong",[t._v("以 “:” 开头")])])]),t._v(" "),r("li",[r("p",[t._v("按照不同的过滤规则，过滤选择器可以分为基本过滤，内容过滤，可见性过滤，属性过滤，子元素过滤，表单过滤和表单对象属性过滤选择器。")])])]),t._v(" "),r("h3",{attrs:{id:"_1-first"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-first"}},[t._v("#")]),t._v(" 1）   :first")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:first”) ;")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配找到的第一个元素。")])])]),t._v(" "),r("h3",{attrs:{id:"_2-last"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-last"}},[t._v("#")]),t._v(" 2）   :last")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:last”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配找到的最后一个元素。与 :first 相对应。")])])]),t._v(" "),r("h3",{attrs:{id:"_3-not-selector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-not-selector"}},[t._v("#")]),t._v(" 3）   :not(selector)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”input:not(:checked)”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 去除所有与给定选择器匹配的元素。有点类似于”非”，意思是没有被选中的input(当input的type=”checkbox”)。")])])]),t._v(" "),r("h3",{attrs:{id:"_4-even"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-even"}},[t._v("#")]),t._v(" 4）   :even")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:even”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有索引值为偶数的元素，从0开始计数。js的数组都是从0开始计数的。")])])]),t._v(" "),r("h3",{attrs:{id:"_5-odd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-odd"}},[t._v("#")]),t._v(" 5）   :odd")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:odd”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有索引值为奇数的元素，和:even对应，从 0 开始计数。")])])]),t._v(" "),r("h3",{attrs:{id:"_6-eq-index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-eq-index"}},[t._v("#")]),t._v(" 6）  :eq(index)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:eq(0)”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配一个给定索引值的元素。eq(0)就是获取第一个tr元素。括号里面的是索引值，不是元素排列数。")])])]),t._v(" "),r("h3",{attrs:{id:"_7-gt-index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-gt-index"}},[t._v("#")]),t._v(" 7） :gt(index)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:gt(0)”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有大于给定索引值的元素。")])])]),t._v(" "),r("h3",{attrs:{id:"_9-lt-index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-lt-index"}},[t._v("#")]),t._v(" 9）  :lt(index)")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”tr:lt(2)”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有小于给定索引值的元素。")])]),t._v(" "),r("h3",{attrs:{id:"_10-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-header"}},[t._v("#")]),t._v(" 10） :header")]),t._v(" "),r("ul",[r("li",[t._v('用法: $(":header")')]),t._v(" "),r("li",[t._v("说明: 匹配所有标题元素节点（h1,h2,...h6）")])]),t._v(" "),r("h3",{attrs:{id:"_11-animated"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-animated"}},[t._v("#")]),t._v(" 11)   :animated")]),t._v(" "),r("ul",[r("li",[t._v('用法: $(":animated")')]),t._v(" "),r("li",[t._v("说明: 匹配所有正在执行动画的元素节点")])]),t._v(" "),r("h3",{attrs:{id:"_12-focus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_12-focus"}},[t._v("#")]),t._v(" 12)   :focus")]),t._v(" "),r("ul",[r("li",[t._v('用法: $(":focus")')]),t._v(" "),r("li",[t._v("说明: 匹配所有获取焦点的元素节点")])]),t._v(" "),r("h2",{attrs:{id:"_4-4-过滤选择器-内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-过滤选择器-内容"}},[t._v("#")]),t._v(" 4.4 过滤选择器：内容")]),t._v(" "),r("ul",[r("li",[t._v("内容过滤选择器的过滤规则主要体现在它所包含的子元素和文本内容上")])]),t._v(" "),r("h3",{attrs:{id:"_1-contains-text"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-contains-text"}},[t._v("#")]),t._v(" 1）   :contains(text)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”div:contains(’John’)”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配包含给定文本的元素。这个选择器比较有用，当我们要选择的不是dom标签元素时，它就派上了用场了。它的作用是查找被标签”围”起来的文本内容是否符合指定的内容的。")])])]),t._v(" "),r("h3",{attrs:{id:"_2-has-selector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-has-selector"}},[t._v("#")]),t._v(" 2）   :has(selector)")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”div:has(p)”).addClass(”test”)")]),t._v(" "),r("li",[t._v("说明: 匹配含有选择器所匹配的元素的元素。这个解释需要好好琢磨，但是一旦看了使用的例子就完全清楚了:给所有包含p元素的div标签加上class=”test”。")])]),t._v(" "),r("h3",{attrs:{id:"_3-empty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-empty"}},[t._v("#")]),t._v(" 3）   :empty")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”td:empty”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配空元素（不包含子元素及文本）")])])]),t._v(" "),r("h3",{attrs:{id:"_4-parent"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-parent"}},[t._v("#")]),t._v(" 4）  :parent")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”td:parent”)")]),t._v(" "),r("li",[t._v("说明: 匹配含有子元素或者文本的元素。注意:这里是”:parent”可不是”.parent”！感觉与上面讲的”:empty”形成反义词。")])]),t._v(" "),r("h2",{attrs:{id:"_4-5-过滤选择器-可见性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-过滤选择器-可见性"}},[t._v("#")]),t._v(" 4.5 过滤选择器：可见性")]),t._v(" "),r("ul",[r("li",[t._v("根据元素的可见和不可见状态来选择相应的元素")])]),t._v(" "),r("h3",{attrs:{id:"_1-hidden"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-hidden"}},[t._v("#")]),t._v(" 1）   :hidden")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:hidden”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有的不可见元素，input 元素的 type 属性为 “hidden” 的话也会被匹配到。意思是css中display:none和input type=”hidden”的都会被匹配到。同样，要在脑海中彻底分清楚冒号”:”，点号”.”和逗号”,”的区别。")])])]),t._v(" "),r("h3",{attrs:{id:"_2-visible"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-visible"}},[t._v("#")]),t._v(" 2）  :visible")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”tr:visible”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有的可见元素。")])])]),t._v(" "),r("h2",{attrs:{id:"_4-6-过滤选择器-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-过滤选择器-属性"}},[t._v("#")]),t._v(" 4.6 过滤选择器：属性")]),t._v(" "),r("ul",[r("li",[t._v("属性过滤选择器的过滤规则是通过元素的属性来获取相应的元素。")])]),t._v(" "),r("h3",{attrs:{id:"_1-attribute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-attribute"}},[t._v("#")]),t._v(" 1）  [attribute]")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”div[id]“)")]),t._v(" "),r("li",[t._v("说明: 匹配包含给定属性的元素。例子中是选取了所有带id属性的div标签。")])]),t._v(" "),r("h3",{attrs:{id:"_2-attribute-value"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-attribute-value"}},[t._v("#")]),t._v(" 2）  [attribute=value]")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”input[name='newsletter']“).attr(”checked”, true)")]),t._v(" "),r("li",[t._v("说明: 匹配给定的属性是某个特定值的元素。例子中选取了所有name属性是newsletter的 input 元素。")])]),t._v(" "),r("h3",{attrs:{id:"_3-attribute-value"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-attribute-value"}},[t._v("#")]),t._v(" 3）  [attribute!=value]")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”input[name!='newsletter']“).attr(”checked”, true)。")]),t._v(" "),r("li",[t._v("说明：匹配所有不含有指定的属性，或者属性不等于特定值的元素。此选择器等价于:not([attr=value])，要匹配含有特定属性但不等于特定值的元素，请使用[attr]:not([attr=value])。之前看到的 :not 派上了用场。")])]),t._v(" "),r("h3",{attrs:{id:"_4-attribute-value"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-attribute-value"}},[t._v("#")]),t._v(" 4）  [attribute^=value]")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”input[name^=‘news’]“)")]),t._v(" "),r("li",[t._v("说明: 匹配给定的属性是以某些值开始的元素。我们又见到了这几个类似于正则匹配的符号。现在想忘都忘不掉了吧？！")])]),t._v(" "),r("h3",{attrs:{id:"_5-attribute-value"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-attribute-value"}},[t._v("#")]),t._v(" 5 ）  [attribute$=value]")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”input[name$=‘letter’]“)")]),t._v(" "),r("li",[t._v("说明: 匹配给定的属性是以某些值结尾的元素。")])]),t._v(" "),r("h3",{attrs:{id:"_6-attribute-value"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-attribute-value"}},[t._v("#")]),t._v(" 6）   [attribute*=value]")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”input[name*=‘man’]“)")]),t._v(" "),r("li",[t._v("说明: 匹配给定的属性是以包含某些值的元素。")])]),t._v(" "),r("h3",{attrs:{id:"_7-selector1-selector2-selectorn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-selector1-selector2-selectorn"}},[t._v("#")]),t._v(" 7） [][][][][selector1] [selector2] [selectorN]")]),t._v(" "),r("ul",[r("li",[t._v("用法：$(\"input[id] [name$='man']]\")")]),t._v(" "),r("li",[t._v("说明：复合属性选择器，需要同时满足多个条件时使用。")])]),t._v(" "),r("h2",{attrs:{id:"_4-7-过滤选择器-子元素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-过滤选择器-子元素"}},[t._v("#")]),t._v(" 4.7 过滤选择器：子元素")]),t._v(" "),r("h3",{attrs:{id:"_1-nth-child-index-even-odd-equation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-nth-child-index-even-odd-equation"}},[t._v("#")]),t._v(" 1）   :nth-child(index/even/odd/equation)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”ul li:nth-child(2)”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配其父元素下的第N个子或奇偶元素.这个选择器和之前说的基础过滤(Basic Filters)中的 eq() 有些类似，不同的地方就是前者是从0开始,后者是从1开始。")])])]),t._v(" "),r("h3",{attrs:{id:"_2-first-child"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-first-child"}},[t._v("#")]),t._v(" 2）   :first-child")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”ul li:first-child”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配第一个子元素。**’:first’ 只匹配一个元素，而此选择符将为每个父元素匹配一个子元素。**这里需要特别的记忆一下区别。二者的调用者都是针对要操作的元素来讲的。")])])]),t._v(" "),r("h3",{attrs:{id:"_3-last-child"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-last-child"}},[t._v("#")]),t._v(" 3）   :last-child")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”ul li:last-child”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配最后一个子元素。’:last’只匹配一个元素，而此选择符将为每个父元素匹配一个子元素。")])])]),t._v(" "),r("h3",{attrs:{id:"_4-only-child"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-only-child"}},[t._v("#")]),t._v(" 4）   : only-child")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”ul li:only-child”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 如果某个元素是父元素中唯一的子元素，那将会被匹配。如果父元素中含有其他元素，那将不会被匹配。意思就是：只有一个子元素的才会被匹配！")])])]),t._v(" "),r("h2",{attrs:{id:"_4-8-过滤选择器-表单"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-过滤选择器-表单"}},[t._v("#")]),t._v(" 4.8 过滤选择器：表单")]),t._v(" "),r("h3",{attrs:{id:"_1-input"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-input"}},[t._v("#")]),t._v(" 1）   :input")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:input”)")]),t._v(" "),r("li",[t._v("说明:匹配所有 text, textarea, select 和 button 元素 。")])]),t._v(" "),r("h3",{attrs:{id:"_2-text"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-text"}},[t._v("#")]),t._v(" 2）   :text")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:text”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有的单行文本框。")])]),t._v(" "),r("h3",{attrs:{id:"_3-password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-password"}},[t._v("#")]),t._v(" 3）   :password")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:password”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有密码框。")])]),t._v(" "),r("h3",{attrs:{id:"_4-radio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-radio"}},[t._v("#")]),t._v(" 4）  :radio")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:radio”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有单选按钮。")])]),t._v(" "),r("h3",{attrs:{id:"_5-checkbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-checkbox"}},[t._v("#")]),t._v(" 5）   :checkbox")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:checkbox”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有复选框。")])]),t._v(" "),r("h3",{attrs:{id:"_6-submit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-submit"}},[t._v("#")]),t._v(" 6）   :submit")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:submit”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有提交按钮。")])]),t._v(" "),r("h3",{attrs:{id:"_7-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-image"}},[t._v("#")]),t._v(" 7）  :image")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”:image”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有图像域。")])]),t._v(" "),r("h3",{attrs:{id:"_8-reset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-reset"}},[t._v("#")]),t._v(" 8）  :reset")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”:reset”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有重置按钮。")])])]),t._v(" "),r("h3",{attrs:{id:"_9-button"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-button"}},[t._v("#")]),t._v(" 9）  :button")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”:button”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有按钮.这个包括直接写的元素button。")])])]),t._v(" "),r("h3",{attrs:{id:"_10-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-file"}},[t._v("#")]),t._v(" 10）  :file")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”:file”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有文件域。")])])]),t._v(" "),r("h3",{attrs:{id:"_11-hidden"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-hidden"}},[t._v("#")]),t._v(" 11）  :hidden")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”input:hidden”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有不可见元素，或者type为hidden的元素.这个选择器就不仅限于表单了,除了匹配input中的hidden外,那些style为hidden的也会被匹配。")])])]),t._v(" "),r("h2",{attrs:{id:"_4-9-过滤选择器-表单对象属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-过滤选择器-表单对象属性"}},[t._v("#")]),t._v(" 4.9 过滤选择器：表单对象属性")]),t._v(" "),r("ul",[r("li",[t._v("此选择器主要对所选择的表单元素进行过滤")])]),t._v(" "),r("h3",{attrs:{id:"_1-enabled"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-enabled"}},[t._v("#")]),t._v(" 1）   :enabled")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”input:enabled”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有可用元素.意思是查找所有input中不带有disabled=”disabled”的input.不为disabled,当然就为enabled啦。")])])]),t._v(" "),r("h3",{attrs:{id:"_2-disabled"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-disabled"}},[t._v("#")]),t._v(" 2）   :disabled")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”input:disabled”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有不可用元素.与上面的那个是相对应的。")])])]),t._v(" "),r("h3",{attrs:{id:"_3-checked"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-checked"}},[t._v("#")]),t._v(" 3）   :checked")]),t._v(" "),r("ul",[r("li",[t._v("用法: $(”input:checked”)")]),t._v(" "),r("li",[t._v("说明: 匹配所有被选中的元素(复选框、单选框等，不包括下拉列表select中的option)。\n"),r("ul",[r("li",[t._v("注意：官方文档说明是不包括select中的option，但测试中是包含的。只是不建议大家这样用。")])])])]),t._v(" "),r("h3",{attrs:{id:"_4-selected"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-selected"}},[t._v("#")]),t._v(" 4）   :selected")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("用法: $(”select option:selected”)")])]),t._v(" "),r("li",[r("p",[t._v("说明: 匹配所有选中的option元素。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);