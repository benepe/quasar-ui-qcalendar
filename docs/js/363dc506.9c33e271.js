(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["363dc506"],{"0f1c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"HHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-resize-observer",{on:{resize:e.onTitlebarResized}}),a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-icon",{staticClass:"q-ml-md",attrs:{name:"far fa-calendar-alt",size:"1.5rem"}}),a("q-toolbar-title",[e._v("\n        QCalendar "),a("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]),a("q-btn",{staticClass:"q-mx-md",attrs:{flat:"",dense:"",label:"Today"},on:{click:e.setToday}}),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_arrow_left"},on:{click:e.onPrev}}),a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"keyboard_arrow_right"},on:{click:e.onNext}}),a("span",{staticClass:"q-mr-xl q-toolbar__title nowrap"},[e._v(e._s(e.title))]),a("q-select",{staticStyle:{"min-width":"120px"},attrs:{outlined:"",dense:"",dark:"",options:e.viewOptions,"emit-value":"","map-options":""},model:{value:e.calendarView,callback:function(t){e.calendarView=t},expression:"calendarView"}}),a("q-space"),e.$q.screen.width>500?a("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e()],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"white",width:350},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("div",{staticClass:"row justify-around col-12"},[a("q-date",{staticClass:"fit",attrs:{minimal:"","first-day-of-week":!0===e.firstDayMonday?1:0,options:e.options},model:{value:e.selectedDateForQDate,callback:function(t){e.selectedDateForQDate=t},expression:"selectedDateForQDate"}})],1),a("div",{staticClass:"col-12"},[a("q-expansion-item",{attrs:{"expand-separator":"","default-opened":"",dark:"",group:"somegroup",icon:"fas fa-cogs",label:"Playground",caption:"Play with properties","header-class":"text-white bg-primary"}},[a("playground")],1),a("q-expansion-item",{attrs:{"expand-separator":"",group:"somegroup",icon:"fas fa-link",label:"Essential Links"}},[a("essential-links")],1)],1)]),a("q-page-container",[a("router-view")],1)],1)},r=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("28a5"),a("a481"),a("c47a")),i=a.n(o),l=a("2f62"),s=function(){return navigator.languages&&navigator.languages.length>0?navigator.languages[0]:navigator.userLanguages||navigator.language||navigator.browserLanguages||"en-us"},c=a("5acd"),u=a("384e");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={name:"CalendarLayout",components:{playground:function(){return a.e("2d0b37e1").then(a.bind(null,"2937"))},"essential-links":function(){return a.e("2d0cc070").then(a.bind(null,"4bd0"))}},data:function(){return{version:u["c"],leftDrawerOpen:this.$q.platform.is.desktop,titleFormatter:null,dateFormatter:null,viewOptions:[{label:"View Day",value:"day"},{label:"View 2Day",value:"2day"},{label:"View 3Day",value:"3day"},{label:"View 4Day",value:"4day"},{label:"View 5Day",value:"5day"},{label:"View 6Day",value:"6day"},{label:"View Week",value:"week"},{label:"View Month",value:"month"},{label:"View Month Interval",value:"month-interval"},{label:"View Custom Interval",value:"custom-interval"},{label:"View Scheduler",value:"scheduler"},{label:"View Week Scheduler",value:"week-scheduler"},{label:"View Month Scheduler",value:"month-scheduler"}]}},beforeMount:function(){this.locale=s(),this.updateFormatters()},computed:f({},Object(l["b"])({fiveDayWorkWeek:"calendar/fiveDayWorkWeek",firstDayMonday:"calendar/firstDayMonday"}),{title:function(){if(this.titleFormatter&&this.locale){var e=new Date(this.selectedDate);return this.titleFormatter.format(e)}return""},calendarView:{get:function(){return this.$store.state.calendar.calendarView},set:function(e){this.$store.commit("calendar/calendarView",e)}},selectedDate:{get:function(){return this.$store.state.calendar.selectedDate},set:function(e){this.$store.commit("calendar/selectedDate",e)}},selectedDateForQDate:{get:function(){return this.$store.state.calendar.selectedDate.replace(/-/g,"/")},set:function(e){this.$store.commit("calendar/selectedDate",e.replace(/\//g,"-")),this.selectedView="day"}},locale:{get:function(){return this.$store.state.calendar.locale},set:function(e){this.$store.commit("calendar/locale",e)}},titlebarHeight:{get:function(){return this.$store.state.common.titlebarHeight},set:function(e){this.$store.commit("common/titlebarHeight",e)}},shortMonthLabel:{get:function(){return this.$store.state.calendar.shortMonthLabel},set:function(e){this.$store.commit("calendar/shortMonthLabel",e)}}}),watch:{locale:function(){this.locale.length>2&&this.updateFormatters()},shortMonthLabel:function(){this.updateFormatters()}},methods:{onPrev:function(){this.$root.$emit("calendar:prev")},onNext:function(){this.$root.$emit("calendar:next")},onTitlebarResized:function(e){this.titlebarHeight=e.height},setToday:function(){this.$root.$emit("calendar:today",this.formatDate())},formatDate:function(e){var t=void 0!==e?new Date(e):new Date,a=""+(t.getMonth()+1),n=""+t.getDate(),r=t.getFullYear();return[r,Object(c["a"])(a),Object(c["a"])(n)].join("-")},updateFormatters:function(){try{this.dateFormatter=new Intl.DateTimeFormat(this.locale||void 0,{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"}),this.titleFormatter=new Intl.DateTimeFormat(this.locale||void 0,{month:this.shortMonthLabel?"short":"long",year:"numeric",timeZone:"UTC"})}catch(e){this.dateFormatter=void 0,this.titleFormatter=void 0}},options:function(e){if(this.fiveDayWorkWeek){var t=e.split("/"),a=new Date(t[0],t[1]-1,t[2]);return!!(a.getDay()%6)}return!0}}},m=h,p=(a("4056"),a("2877")),b=Object(p["a"])(m,n,r,!1,null,null,null);t["default"]=b.exports},4056:function(e,t,a){"use strict";var n=a("f22e"),r=a.n(n);r.a},"5acd":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e=Math.floor(e),e<10?"0"+e:e+""}},f22e:function(e,t,a){}}]);