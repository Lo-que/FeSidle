(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{177:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("?> 基础类型/原始类型，引用类型/对象类型   PS：叫法比较多，但是知道定义就不会乱了；")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("hr"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),e("p",[t._v("!> 扫盲区")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("下一节，更多方法区分数组和对象")]),t._v(" "),t._m(16),t._v(" "),e("hr"),t._v(" "),t._m(17),t._v(" "),e("p",[t._v("?> 基础补充：表达式为：A instanceof B，如果A是B的实例，则返回true,否则返回false。 在这里需要特别注意的是：instanceof检测的是原型。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),e("gitalk")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"内置类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 内置类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("JS中有七种内置类型，也是两大类型：基本类型()和对象（Object）。"),s("br"),this._v("\n六种基础类型（原始类型）：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("空值 "),e("code",[t._v("null")])]),t._v(" "),e("li",[t._v("未定义 "),e("code",[t._v("undefined")])]),t._v(" "),e("li",[t._v("布尔值 "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("数字 "),e("code",[t._v("number")])]),t._v(" "),e("li",[t._v("字符串 "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("符号 "),e("code",[t._v("symbol")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一种引用类型（对象类型）： "),s("code",[this._v("object")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中，NaN也属于 "),s("code",[this._v("number")]),this._v(" 类型，并且 "),s("code",[this._v("NaN")]),this._v(" 不等于自身（这个很关键哦！！！）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"typeof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof","aria-hidden":"true"}},[this._v("#")]),this._v(" Typeof")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("typeof 对于基础类型，除了 "),s("code",[this._v("null")]),this._v(" 都能正常判断。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//number  ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'string'  ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'undefined'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'boolean'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'symbol'  ")]),t._v("\ntype name "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'undefined'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("null")]),this._v(" 比较特殊，typeof对它的处理有问题。据说这个bug存在20多年了，而且不回去修复它，因为牵一发而动全身。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("typeof")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("null")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("//'object'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("正确判断"),s("code",[this._v("null")]),this._v("类型的方法")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("m "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" m "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("m")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*..*/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'function'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("(⊙o⊙)？，哪来的function类型呢？function类型实际上是对象类型里面的子类型。即函数是"),s("code",[this._v("可调用对象")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'object'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("What？难道说，数组也是对象？是的，数组也是 "),s("code",[this._v("object")]),this._v(" 的一个子类型，颠覆了没？数组的元素按照顺序索引（对象通过字符串键值）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof","aria-hidden":"true"}},[this._v("#")]),this._v(" Instanceof")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("instanceof")]),this._v(" 可以正确的判断对象类型，原理：通过判断对象的原型链能否找到类型的 "),s("code",[this._v("prototype")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true  ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("?> 需要注意的是 "),s("code",[this._v("instanceof")]),this._v(" 后面一定要是对象类型，区分大小写的哦。")])}],!1,null,null,null);s.default=n.exports}}]);