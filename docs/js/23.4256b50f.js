(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{c325:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row items-center",staticStyle:{"max-width":"800px",width:"100%",height:"421px"}},[a("div",{staticClass:"col-8 full-height"},[a("div",{staticClass:"row justify-center items-center",staticStyle:{height:"30px"}},[a("q-btn",{attrs:{flat:"",dense:"",label:"Prev"},on:{click:e.calendarPrev}}),a("q-separator",{attrs:{vertical:""}}),a("q-btn",{attrs:{flat:"",dense:"",label:"Next"},on:{click:e.calendarNext}})],1),a("q-separator"),a("div",{staticStyle:{overflow:"hidden",height:"390px"}},[a("q-calendar",{ref:"calendar",attrs:{view:"week-scheduler",locale:"en-us","short-weekday-label":"",resources:e.resources,"resource-key":"name","resource-height":50,"resource-width":120,animated:""},on:{input:e.onModelChanged,"click:date2":e.onClickDate2,"click:day:header2":e.onClickDayHeader2,"click:resource:day2":e.onClickResourceDay2,"click:resource2":e.onClickResource2,"click:resource:header2":e.onClickResourceHeader2,expanded:e.onResourceExpanded},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1),a("q-card",{staticClass:"events col-4 q-pa-xs full-height column justify-start items-start"},[a("q-item-section",{staticClass:"full-width"},[a("q-item-label",[e._v("Events")]),a("q-item-label",{staticClass:"my-text-caption"},[e._v("New data appended to top")])],1),a("q-separator"),a("div",{staticClass:"scroll overflow-auto",staticStyle:{height:"360px",width:"100%"}},e._l(e.events,(function(t,n){return a("div",{key:n,staticClass:"col-12",staticStyle:{"font-size":"10px","line-height":"10px","max-height":"14px","min-height":"14px",padding:"2px 2px","white-space":"nowrap"}},[e._v("\n        "+e._s(t)+"\n      ")])})),0)],1)],1)},c=[],i={data:function(){return{selectedDate:"",events:[],resources:[{name:"John"},{name:"Board Room",expanded:!1,children:[{name:"Room-1"},{name:"Room-2",expanded:!1,children:[{name:"Partition-A"},{name:"Partition-B"},{name:"Partition-C"}]}]},{name:"Mary"},{name:"Susan"},{name:"Olivia"}]}},methods:{calendarNext:function(){this.$refs.calendar.next()},calendarPrev:function(){this.$refs.calendar.prev()},onModelChanged:function(e){this.events.unshift("Model changed: ".concat(e))},onClickDate2:function(e){this.events.unshift("click:date2: ".concat(JSON.stringify(e)))},onClickDayHeader2:function(e){this.events.unshift("click:day:header2: ".concat(JSON.stringify(e)))},onClickResourceDay2:function(e){this.events.unshift("click:resource:day2: ".concat(JSON.stringify(e)))},onClickResource2:function(e){this.events.unshift("click:resource2: ".concat(JSON.stringify(e)))},onClickResourceHeader2:function(e){this.events.unshift("click:resource:header2: ".concat(JSON.stringify(e)))},onResourceExpanded:function(e){this.events.unshift("expanded: ".concat(JSON.stringify(e)))}}},s=i,r=(a("df8b"),a("2877")),o=a("9c40"),l=a("eb85"),d=a("f09f"),u=a("4074"),h=a("0170"),f=a("eebe"),p=a.n(f),v=Object(r["a"])(s,n,c,!1,null,"4edf49ac",null);t["default"]=v.exports;p()(v,"components",{QBtn:o["a"],QSeparator:l["a"],QCard:d["a"],QItemSection:u["a"],QItemLabel:h["a"]})},df8b:function(e,t,a){"use strict";var n=a("e7d1"),c=a.n(n);c.a},e7d1:function(e,t,a){}}]);