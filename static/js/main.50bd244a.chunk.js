(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(6),r=c.n(a),s=(c(12),c(5)),o=c.n(s),p=c(7),u=c(3),l=(c(14),c(2)),j=c.n(l),b=c(0),d=function(e){var t=e.title,c=e.calories,n=e.image,i=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{className:j.a.ingredients,children:i.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsxs)("p",{children:["Calories in this recipe are ",Object(b.jsx)("b",{children:c})]}),Object(b.jsx)("img",{className:j.a.image,src:n,alt:""})]})},h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),r=Object(u.a)(a,2),s=r[0],l=r[1],j=Object(n.useState)("chicken"),h=Object(u.a)(j,2),f=h[0],m=h[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(p.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("223fb688","&app_key=").concat("ed3deca27a7a9f26f2c637da76f0b55d"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),l("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),f()},2:function(e,t,c){e.exports={recipe:"recipe_recipe__BdaUe",image:"recipe_image__BtdIE",ingredients:"recipe_ingredients__2m5_s",calories:"recipe_calories__24PXH"}}},[[16,1,2]]]);
//# sourceMappingURL=main.50bd244a.chunk.js.map