(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229833"],{de84:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("props")]),e("Button",{attrs:{type:"primary"},on:{click:t.changeObj}},[t._v("修改obj")]),e("PropsChild",{attrs:{name:"silencetiger",obj:t.obj},on:{clickEvent:t.handleEvent}},[e("h1",[t._v("slot")])])],1)},c=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("props child")]),e("h2",[t._v(t._s(t.name))]),e("h2",[t._v(t._s(t.obj.msg))]),t._t("default"),e("Button",{attrs:{type:"primary"},on:{click:t.changeProp}},[t._v("change props test")]),e("br"),e("Button",{on:{click:t.fireEvent}},[t._v("自定义事件")])],2)},r=[],i={name:"PropsChild",props:{name:{required:!0,type:String},obj:{type:Object}},data:function(){return{}},methods:{changeProp:function(t){this.name="conglu"},fireEvent:function(t){this.$emit("clickEvent",t)}},computed:{}},a=i,l=e("2877"),p=Object(l["a"])(a,s,r,!1,null,"48268188",null),u=p.exports,h={name:"PropsWay",components:{PropsChild:u},data:function(){return{obj:{msg:"123"}}},methods:{changeObj:function(){this.obj.msg="456"},handleEvent:function(t){this.obj.msg="123"}}},d=h,m=Object(l["a"])(d,o,c,!1,null,"4d401cea",null);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d229833.761df77f.js.map