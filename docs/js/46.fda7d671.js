(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{2092:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"q-gutter-sm q-mb-sm"},[t("q-checkbox",{attrs:{dense:"",label:"No active date"},model:{value:e.noActiveDate,callback:function(a){e.noActiveDate=a},expression:"noActiveDate"}}),t("q-checkbox",{attrs:{dense:"",label:"Disabled weekends"},model:{value:e.disabledDays,callback:function(a){e.disabledDays=a},expression:"disabledDays"}})],1),t("div",{staticClass:"row justify-evenly q-gutter-sm full-width"},[t("div",{staticClass:"col-5"},[t("div",{staticClass:"q-mb-md"},[e._v("Interval Range: ")]),t("q-range",{staticClass:"col",attrs:{label:"","label-always":"",min:0,max:24,step:e.intervalRangeStep,"left-label-value":e.leftLabelRange,"right-label-value":e.rightLabelRange},model:{value:e.intervalRange,callback:function(a){e.intervalRange=a},expression:"intervalRange"}})],1),t("div",{staticClass:"col-5"},[t("div",{staticClass:"q-mb-md"},[e._v("Interval Height: ")]),t("q-slider",{attrs:{min:20,max:100,label:"","label-always":"","label-value":e.intervalHeight+"px"},model:{value:e.intervalHeight,callback:function(a){e.intervalHeight=a},expression:"intervalHeight"}})],1)]),t("div",{staticClass:"col-12 full-width q-px-md q-pb-sm"},[t("span",{staticClass:"text-body2"},[e._v("Interval Step (Section)")]),t("div",{staticClass:"q-gutter-sm"},[t("q-radio",{attrs:{val:1,label:"60 min"},model:{value:e.intervalRangeStep,callback:function(a){e.intervalRangeStep=a},expression:"intervalRangeStep"}}),t("q-radio",{attrs:{val:.5,label:"30 min"},model:{value:e.intervalRangeStep,callback:function(a){e.intervalRangeStep=a},expression:"intervalRangeStep"}}),t("q-radio",{attrs:{val:.25,label:"15 min"},model:{value:e.intervalRangeStep,callback:function(a){e.intervalRangeStep=a},expression:"intervalRangeStep"}})],1)]),t("q-calendar",{staticStyle:{height:"400px"},style:e.styles,attrs:{view:"week",bordered:"","interval-minutes":60*e.intervalRangeStep,"interval-start":e.intervalStart,"interval-count":e.intervalCount,"interval-height":e.intervalHeight,"disabled-weekdays":e.disabledWeekdays,"no-active-date":e.noActiveDate,locale:"en-us"},model:{value:e.selectedDate,callback:function(a){e.selectedDate=a},expression:"selectedDate"}})],1)},l=[],i=(t("a9e3"),t("b680"),{name:"ThemeBuilderWeek",props:{value:String,styles:Object},data:function(){return{selectedDate:"",noActiveDate:!1,disabledDays:!1,intervalRange:{min:0,max:24},intervalRangeStep:1,intervalHeight:20}},beforeMount:function(){this.selectedDate=this.value},computed:{disabledWeekdays:function(){return!0===this.disabledDays?[0,6]:[]},leftLabelRange:function(){var e=Math.floor(this.intervalRange.min),a=Number((this.intervalRange.min%1).toFixed(2)),t=60*a;return e+":"+(t<10?t+"0":t)},rightLabelRange:function(){var e=Math.floor(this.intervalRange.max),a=Number((this.intervalRange.max%1).toFixed(2)),t=60*a;return e+":"+(t<10?t+"0":t)},intervalStart:function(){return this.intervalRange.min*(1/this.intervalRangeStep)},intervalCount:function(){return(this.intervalRange.max-this.intervalRange.min)*(1/this.intervalRangeStep)}},watch:{value:function(e){this.selectedDate=e},intervalRangeStep:function(e){var a=function(a){var t=Number((a%1).toFixed(2)),n=t%e;return n>0?a+n:a},t=function(a){var t=Number((a%1).toFixed(2)),n=t%e;return n>0?a-n:a};this.intervalRange.min=a(this.intervalRange.min),this.intervalRange.max=t(this.intervalRange.max)}}}),s=i,r=t("2877"),v=t("8f8e"),c=t("7bbf"),o=t("c1d0"),d=t("3786"),u=t("eebe"),b=t.n(u),g=Object(r["a"])(s,n,l,!1,null,null,null);a["default"]=g.exports;b()(g,"components",{QCheckbox:v["a"],QRange:c["a"],QSlider:o["a"],QRadio:d["a"]})}}]);