import{r as c,p as O,s as x,j as i,n as f,S as R,q as k,y as T,v as W,f as E,x as A,F as G,i as z}from"./chunk-01d4ed3e.js";function V(t){const e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function U(t,e){if(t!=null){if(typeof t=="function"){t(e);return}try{t.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${t}'`)}}}function $(...t){return e=>{t.forEach(n=>{U(n,e)})}}function q(...t){return c.useMemo(()=>$(...t),t)}function J(t){return c.Children.toArray(t).filter(e=>c.isValidElement(e))}var[ce,K]=O({strict:!1,name:"ButtonGroupContext"});function Q(t){const[e,n]=c.useState(!t);return{ref:c.useCallback(a=>{a&&n(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}function I(t){const{children:e,className:n,...s}=t,r=c.isValidElement(e)?c.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=x("chakra-button__icon",n);return i(f.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:a,children:r})}I.displayName="ButtonIcon";function j(t){const{label:e,placement:n,spacing:s="0.5rem",children:r=i(R,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l,...h}=t,d=x("chakra-button__spinner",a),o=n==="start"?"marginEnd":"marginStart",u=c.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[o]:e?s:0,fontSize:"1em",lineHeight:"normal",...l}),[l,e,o,s]);return i(f.div,{className:d,...h,__css:u,children:r})}j.displayName="ButtonSpinner";var X=k((t,e)=>{const n=K(),s=T("Button",{...n,...t}),{isDisabled:r=n==null?void 0:n.isDisabled,isLoading:a,isActive:l,children:h,leftIcon:d,rightIcon:o,loadingText:u,iconSpacing:m="0.5rem",type:S,spinner:g,spinnerPlacement:b="start",className:y,as:_,...C}=W(t),w=c.useMemo(()=>{const B={...s==null?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!n&&{_focus:B}}},[s,n]),{ref:v,type:p}=Q(_),N={rightIcon:o,leftIcon:d,iconSpacing:m,children:h};return E(f.button,{ref:q(e,v),as:_,type:S??p,"data-active":A(l),"data-loading":A(a),__css:w,className:x("chakra-button",y),...C,disabled:r||a,children:[a&&b==="start"&&i(j,{className:"chakra-button__spinner--start",label:u,placement:"start",spacing:m,children:g}),a?u||i(f.span,{opacity:0,children:i(F,{...N})}):i(F,{...N}),a&&b==="end"&&i(j,{className:"chakra-button__spinner--end",label:u,placement:"end",spacing:m,children:g})]})});X.displayName="Button";function F(t){const{leftIcon:e,rightIcon:n,children:s,iconSpacing:r}=t;return E(G,{children:[e&&i(I,{marginEnd:r,children:e}),s,n&&i(I,{marginStart:r,children:n})]})}var Y=Object.freeze(["base","sm","md","lg","xl","2xl"]);function Z(t,e){return Array.isArray(t)?t.map(n=>n===null?null:e(n)):z(t)?Object.keys(t).reduce((n,s)=>(n[s]=e(t[s]),n),{}):t!=null?e(t):null}function oe(t,e=Y){const n={};return t.forEach((s,r)=>{const a=e[r];s!=null&&(n[a]=s)}),n}var ee=k(function(e,n){const s=T("Text",e),{className:r,align:a,decoration:l,casing:h,...d}=W(e),o=V({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i(f.p,{ref:n,className:x("chakra-text",e.className),...o,...d,__css:s})});ee.displayName="Text";var P=t=>i(f.div,{className:"chakra-stack__item",...t,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...t.__css}});P.displayName="StackItem";function te(t){const{spacing:e,direction:n}=t,s={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Z(n,r=>s[r])}}var ne=k((t,e)=>{const{isInline:n,direction:s,align:r,justify:a,spacing:l="0.5rem",wrap:h,children:d,divider:o,className:u,shouldWrapChildren:m,...S}=t,g=n?"row":s??"column",b=c.useMemo(()=>te({spacing:l,direction:g}),[l,g]),y=!!o,_=!m&&!y,C=c.useMemo(()=>{const v=J(d);return _?v:v.map((p,N)=>{const B=typeof p.key<"u"?p.key:N,H=N+1===v.length,D=m?i(P,{children:p},B):p;if(!y)return D;const L=c.cloneElement(o,{__css:b}),M=H?null:L;return E(c.Fragment,{children:[D,M]},B)})},[o,b,y,_,m,d]),w=x("chakra-stack",u);return i(f.div,{ref:e,display:"flex",alignItems:r,justifyContent:a,flexDirection:g,flexWrap:h,gap:y?void 0:l,className:w,...S,children:C})});ne.displayName="Stack";var se=k(function(e,n){const s=T("Heading",e),{className:r,...a}=W(e);return i(f.h2,{ref:n,className:x("chakra-heading",e.className),...a,__css:s})});se.displayName="Heading";var ae=k(function(e,n){const{direction:s,align:r,justify:a,wrap:l,basis:h,grow:d,shrink:o,...u}=e,m={display:"flex",flexDirection:s,alignItems:r,justifyContent:a,flexWrap:l,flexBasis:h,flexGrow:d,flexShrink:o};return i(f.div,{ref:n,__css:m,...u})});ae.displayName="Flex";export{X as B,ae as F,se as H,ne as S,ee as T,ce as a,Y as b,oe as c,J as g,$ as m};