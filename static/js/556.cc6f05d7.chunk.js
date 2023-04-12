"use strict";(self.webpackChunkteam_project_so_yummy_frontend=self.webpackChunkteam_project_so_yummy_frontend||[]).push([[556],{1978:function(n,e,t){t.d(e,{Z:function(){return s}});var i,r=t(168),o=t(1191).default.h2(i||(i=(0,r.Z)(["\n  color: ",";\n  font-weight: 600;\n  font-size: ","px;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  @media (min-width: 768px) {\n    font-size: ","px;\n  }\n\n  @media (min-width: 1440px) {\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.colors.sectionTitle}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.fontSizes.sectXl})),a=t(184),s=function(n){var e=n.text;return(0,a.jsx)(o,{children:e})}},7556:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var i,r,o,a,s,c=t(2791),d=t(1978),u=t(7263),p=t(9985),l=t(9434),x=t(9439),f=t(71),m=t(168),h=t(1191),g=h.default.li(i||(i=(0,m.Z)(["\n  padding-top: 25px;\n  padding-bottom: 23px;\n  border-bottom: 1px solid #e0e0e0;\n  padding-right: 10px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 45px;\n    padding-bottom: 42px;\n    padding-right: 50px;\n  }\n\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n\n  & > div {\n    display: flex;\n    align-items: flex-start;\n  }\n"]))),w=h.default.div(r||(r=(0,m.Z)(["\n  display: flex;\n\n  & p {\n    margin-left: 10px;\n    font-weight: 500;\n    font-size: ","px;\n    line-height: 1.2;\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n      margin-left: 16px;\n      font-size: ","px;\n      line-height: 1.5;\n    }\n  }\n"])),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.fontSizes.sm})),b=h.default.img(o||(o=(0,m.Z)(["\n  padding: 6px;\n  height: auto;\n  width: 60px;\n  background: ",";\n  border-radius: 8px;\n\n  @media screen and (min-width: 768px) {\n    width: 93px;\n  }\n"])),(function(n){return n.theme.colors.shoppingItemImageBg})),j=h.default.div(a||(a=(0,m.Z)(["\n  padding: 4px;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  align-items: center;\n  min-width: 37px;\n  height: auto;\n\n  background: ",";\n  border-radius: 4px;\n\n  font-weight: 600;\n  font-size: ","px;\n  line-height: 1.5;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    min-width: 68px;\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.colors.secondaryTextColor}),(function(n){return n.theme.fontSizes.m})),y=h.default.button(s||(s=(0,m.Z)(["\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  margin-top: -8px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  margin-left: 30px;\n  color: ",";\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 90px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-left: 170px;\n  }\n"])),(function(n){return n.dark?"#FAFAFA":"#333333"}),(function(n){return n.theme.colors.accentColor})),v=t(64),z=t(966),k=t(184),S=function(n){var e=n.item,t=(0,l.I0)(),i=(0,l.v9)((function(n){return n.theme})),r=(0,l.v9)((function(n){return n.shoppings.isDeleting})),o=(0,c.useState)(null),a=(0,x.Z)(o,2),s=a[0],d=a[1];return(0,k.jsxs)(g,{children:[(0,k.jsxs)(w,{children:[(0,k.jsx)(b,{src:e.thb,alt:e.ttl}),(0,k.jsx)("p",{children:e.ttl})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)(j,{children:e.measure.map((function(n){return(0,k.jsx)("span",{children:n},Math.random())}))}),(0,k.jsx)(y,{disabled:r,dark:i.darkMode,onClick:function(){return n=e.productId,d(e.productId),void t((0,v.w)(n));var n},children:r&&s?(0,k.jsx)(z.a,{size:"28"}):(0,k.jsx)(f.bjh,{size:24})})]})]})},Z=t(4834),C=function(){var n=(0,l.v9)((function(n){return n.shoppings})).items;return(0,k.jsx)(Z.x,{as:"ul",children:n.map((function(n){return(0,k.jsx)(S,{item:n},n.ttl)}))})},T=function(){var n=(0,p.G)().screenType,e=(0,l.v9)((function(n){return n.shoppings})),t=e.items,i=e.isLoading,r=(0,l.I0)();(0,c.useEffect)((function(){r((0,v.g)())}),[r]);return(0,k.jsxs)("main",{children:[(0,k.jsx)(d.Z,{text:"Shopping list"}),i&&(0,k.jsx)("div",{style:{margin:"30px 0px",display:"flex",justifyContent:"center"},children:(0,k.jsx)(z.a,{})}),!!t.length&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(u.xD,{children:["Product","Number","Remove"].map((function(e){return(0,k.jsx)(u.lw,{screenType:n,children:e},e)}))}),(0,k.jsx)(C,{})]}),!t.length&&!i&&(0,k.jsx)(u.Mg,{children:"You haven't added any ingredients to your shopping list yet!"})]})}},7263:function(n,e,t){t.d(e,{Mg:function(){return u},lw:function(){return d},xD:function(){return c}});var i,r,o,a=t(168),s=t(1191),c=s.default.div(i||(i=(0,a.Z)(["\n  width: auto;\n  padding: 10px;\n  margin-top: 50px;\n  margin-bottom: 8px;\n  margin-left: -","px;\n  margin-right: -","px;\n  display: flex;\n  flex-direction: row;\n\n  border-radius: 8px;\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 21px 32px;\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 6px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 21px 40px;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accentColor})),d=s.default.p(r||(r=(0,a.Z)(["\n  display: inline-block;\n  font-weight: 600;\n  font-size: ",";\n  line-height: 1.5;\n  color: ",";\n\n  &:first-child {\n    margin-right: auto;\n  }\n\n  &:last-child {\n    margin-left: ",";\n  }\n"])),(function(n){var e=n.theme;switch(n.screenType){case"mobile":return"".concat(e.fontSizes.xs,"px");case"tablet":return"".concat(e.fontSizes.m,"px")}}),(function(n){return n.theme.colors.secondaryTextColor}),(function(n){n.theme;switch(n.screenType){case"mobile":return"24px";case"tablet":return"78px";case"desktop":return"142px"}})),u=s.default.p(o||(o=(0,a.Z)(["\n  margin: 50px auto;\n  text-align: center;\n  font-size: ","px;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    font-size: ","px;\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.recipieDescSecondary}),(function(n){return n.theme.fontSizes.xl}))}}]);
//# sourceMappingURL=556.cc6f05d7.chunk.js.map