(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["13961869"],{"713b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"HHh LpR fFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",[e._v("\n        QCalendar "),n("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),n("q-space"),e.$q.screen.width>500?n("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e(),n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1)],1)],1),n("q-drawer",{attrs:{bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[e._v("Essential Links")])],1),n("essential-links")],1),n("q-drawer",{ref:"drawer",attrs:{side:"right",bordered:"","content-style":"background-color: #f8f8ff"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[n("q-scroll-area",{staticClass:"fit"},[n("q-list",{attrs:{dense:""}},e._l(e.toc,(function(t){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(n){return e.scrollTo(t.id)}}},[t.level>1?n("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),n("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)})),1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},o=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(a),c=n("2f62"),s=n("0831"),l=n("8669"),u=n("f001");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=s["a"].getScrollTarget,b=s["a"].setScrollPosition,m={name:"MainLayout",components:{"essential-links":function(){return n.e("2d0cc070").then(n.bind(null,"4bd0"))}},data:function(){return{version:u["a"],leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},computed:f({},Object(c["b"])({toc:"common/toc"})),mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout((function(){e.scrollTo(t)}),200)}},methods:{scrollTo:function(e){var t=this;this.activeToc=e;var n=document.getElementById(e);n&&setTimeout((function(){t.scrollPage(n),Object(l["b"])(Object(l["c"])(e))}),200)},scrollPage:function(e){var t=p(e),n=e.offsetTop-50;b(t,n,500)}}},w=m,v=n("2877"),h=Object(v["a"])(w,r,o,!1,null,null,null);t["default"]=h.exports},8669:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));n("a481");function r(e){var t=window.location.origin+window.location.pathname+"#"+e,n=document.createElement("textarea");n.className="fixed-top",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function o(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}function a(e){window.location=window.location.origin+window.location.pathname+"#"+e}},f001:function(e){e.exports=JSON.parse('{"a":"0.0.1"}')}}]);