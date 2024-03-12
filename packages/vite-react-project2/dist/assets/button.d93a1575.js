import{x as B,r as c,j as u,_ as Pe,a as Ie,b as we,D as Oe,aa as Re,s as ze,d as Ae,N as fe,c as $e,a8 as Le,K as D,i as de,I as d,a2 as oe,C as We,H as F,S as Be,T as je,h as se,E as De,B as ce,w as Fe}from"./index.b138ffef.js";var Ge=0,N={};function _(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,a=Ge++,e=r;function t(){e-=1,e<=0?(n(),delete N[a]):N[a]=B(t)}return N[a]=B(t),a}_.cancel=function(r){r!==void 0&&(B.cancel(N[r]),delete N[r])};_.ids=N;var A;function le(n){return!n||n.offsetParent===null||n.hidden}function Me(n){return n instanceof Document?n.body:Array.from(n.childNodes).find(function(r){return(r==null?void 0:r.nodeType)===Node.ELEMENT_NODE})}function Ve(n){var r=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return r&&r[1]&&r[2]&&r[3]?!(r[1]===r[2]&&r[2]===r[3]):!0}var ve=function(n){Pe(a,n);var r=Ie(a);function a(){var e;return we(this,a),e=r.apply(this,arguments),e.containerRef=c.exports.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,i){var o,s,l=e.props,h=l.insertExtraNode,m=l.disabled;if(!(m||!t||le(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div");var v=Oe(e),x=v.extraNode,T=e.context.getPrefixCls;x.className="".concat(T(""),"-click-animating-node");var P=e.getAttributeName();if(t.setAttribute(P,"true"),i&&i!=="#ffffff"&&i!=="rgb(255, 255, 255)"&&Ve(i)&&!/rgba\((?:\d*, ){3}0\)/.test(i)&&i!=="transparent"){x.style.borderColor=i;var p=((o=t.getRootNode)===null||o===void 0?void 0:o.call(t))||t.ownerDocument,C=(s=Me(p))!==null&&s!==void 0?s:p;A=Re(`
      [`.concat(T(""),"-click-animating-without-extra-node='true']::after, .").concat(T(""),`-click-animating-node {
        --antd-wave-shadow-color: `).concat(i,`;
      }`),"antd-wave",{csp:e.csp,attachTo:C})}h&&t.appendChild(x),["transition","animation"].forEach(function(E){t.addEventListener("".concat(E,"start"),e.onTransitionStart),t.addEventListener("".concat(E,"end"),e.onTransitionEnd)})}},e.onTransitionStart=function(t){if(!e.destroyed){var i=e.containerRef.current;!t||t.target!==i||e.animationStart||e.resetEffect(i)}},e.onTransitionEnd=function(t){!t||t.animationName!=="fadeEffect"||e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(!(!t||!t.getAttribute||t.getAttribute("disabled")||t.className.indexOf("disabled")>=0)){var i=function(s){if(!(s.target.tagName==="INPUT"||le(s.target))){e.resetEffect(t);var l=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,l)},0),_.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=_(function(){e.animationStart=!1},10)}};return t.addEventListener("click",i,!0),{cancel:function(){t.removeEventListener("click",i,!0)}}}},e.renderWave=function(t){var i=t.csp,o=e.props.children;if(e.csp=i,!c.exports.isValidElement(o))return o;var s=e.containerRef;return ze(o)&&(s=Ae(o.ref,e.containerRef)),fe(o,{ref:s})},e}return $e(a,[{key:"componentDidMount",value:function(){this.destroyed=!1;var t=this.containerRef.current;!t||t.nodeType!==1||(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,i=this.props.insertExtraNode;return i?"".concat(t(""),"-click-animating"):"".concat(t(""),"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var i=this;if(!(!t||t===this.extraNode||!(t instanceof Element))){var o=this.props.insertExtraNode,s=this.getAttributeName();t.setAttribute(s,"false"),A&&(A.innerHTML=""),o&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach(function(l){t.removeEventListener("".concat(l,"start"),i.onTransitionStart),t.removeEventListener("".concat(l,"end"),i.onTransitionEnd)})}}},{key:"render",value:function(){return u(Le,{children:this.renderWave})}}]),a}(c.exports.Component);ve.contextType=D;var Ue=c.exports.forwardRef(function(n,r){return u(ve,{ref:r,...n})});const He=Ue;var Ke=globalThis&&globalThis.__rest||function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},pe=c.exports.createContext(void 0),qe=function(r){var a,e=c.exports.useContext(D),t=e.getPrefixCls,i=e.direction,o=r.prefixCls,s=r.size,l=r.className,h=Ke(r,["prefixCls","size","className"]),m=t("btn-group",o),v="";switch(s){case"large":v="lg";break;case"small":v="sm";break}var x=de(m,(a={},d(a,"".concat(m,"-").concat(v),v),d(a,"".concat(m,"-rtl"),i==="rtl"),a),l);return u(pe.Provider,{value:s,children:u("div",{...h,className:x})})};const Je=qe;var $=function(){return{width:0,opacity:0,transform:"scale(0)"}},L=function(r){return{width:r.scrollWidth,opacity:1,transform:"scale(1)"}},Qe=function(r){var a=r.prefixCls,e=r.loading,t=r.existIcon,i=!!e;return t?u("span",{className:"".concat(a,"-loading-icon"),children:u(oe,{})}):u(We,{visible:i,motionName:"".concat(a,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:$,onAppearActive:L,onEnterStart:$,onEnterActive:L,onLeaveStart:L,onLeaveActive:$,children:function(o,s){var l=o.className,h=o.style;return u("span",{className:"".concat(a,"-loading-icon"),style:h,ref:s,children:u(oe,{className:l})})}})};const Xe=Qe;var Ye=globalThis&&globalThis.__rest||function(n,r){var a={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(a[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(a[e[t]]=n[e[t]]);return a},ue=/^[\u4e00-\u9fa5]{2}$/,j=ue.test.bind(ue);function Ze(n){return typeof n=="string"}function W(n){return n==="text"||n==="link"}function et(n){return c.exports.isValidElement(n)&&n.type===c.exports.Fragment}function tt(n,r){if(n!=null){var a=r?" ":"";return typeof n!="string"&&typeof n!="number"&&Ze(n.type)&&j(n.props.children)?fe(n,{children:n.props.children.split("").join(a)}):typeof n=="string"?j(n)?u("span",{children:n.split("").join(a)}):u("span",{children:n}):et(n)?u("span",{children:n}):n}}function nt(n,r){var a=!1,e=[];return c.exports.Children.forEach(n,function(t){var i=Fe(t),o=i==="string"||i==="number";if(a&&o){var s=e.length-1,l=e[s];e[s]="".concat(l).concat(t)}else e.push(t);a=o}),c.exports.Children.map(e,function(t){return tt(t,r)})}F("default","primary","ghost","dashed","link","text");F("default","circle","round");F("submit","button","reset");var rt=function(r,a){var e,t=r.loading,i=t===void 0?!1:t,o=r.prefixCls,s=r.type,l=s===void 0?"default":s,h=r.danger,m=r.shape,v=m===void 0?"default":m,x=r.size,T=r.disabled,P=r.className,p=r.children,C=r.icon,E=r.ghost,me=E===void 0?!1:E,M=r.block,ge=M===void 0?!1:M,V=r.htmlType,he=V===void 0?"button":V,U=Ye(r,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),xe=c.exports.useContext(Be),Ce=c.exports.useContext(je),I=T||Ce,be=c.exports.useContext(pe),ye=c.exports.useState(!!i),H=se(ye,2),b=H[0],K=H[1],Ne=c.exports.useState(!1),q=se(Ne,2),w=q[0],J=q[1],O=c.exports.useContext(D),Te=O.getPrefixCls,Q=O.autoInsertSpaceInButton,Ee=O.direction,y=a||c.exports.createRef(),X=function(){return c.exports.Children.count(p)===1&&!C&&!W(l)},Se=function(){if(!(!y||!y.current||Q===!1)){var k=y.current.textContent;X()&&j(k)?w||J(!0):w&&J(!1)}},S=typeof i=="boolean"?i:(i==null?void 0:i.delay)||!0;c.exports.useEffect(function(){var g=null;return typeof S=="number"?g=window.setTimeout(function(){g=null,K(S)},S):K(S),function(){g&&(window.clearTimeout(g),g=null)}},[S]),c.exports.useEffect(Se,[y]);var Y=function(k){var z=r.onClick;if(b||I){k.preventDefault();return}z==null||z(k)},f=Te("btn",o),Z=Q!==!1,ke={large:"lg",small:"sm",middle:void 0},ee=be||x||xe,te=ee&&ke[ee]||"",_e=b?"loading":C,R=De(U,["navigate"]),ne=de(f,(e={},d(e,"".concat(f,"-").concat(v),v!=="default"&&v),d(e,"".concat(f,"-").concat(l),l),d(e,"".concat(f,"-").concat(te),te),d(e,"".concat(f,"-icon-only"),!p&&p!==0&&!!_e),d(e,"".concat(f,"-background-ghost"),me&&!W(l)),d(e,"".concat(f,"-loading"),b),d(e,"".concat(f,"-two-chinese-chars"),w&&Z&&!b),d(e,"".concat(f,"-block"),ge),d(e,"".concat(f,"-dangerous"),!!h),d(e,"".concat(f,"-rtl"),Ee==="rtl"),d(e,"".concat(f,"-disabled"),R.href!==void 0&&I),e),P),re=C&&!b?C:u(Xe,{existIcon:!!C,prefixCls:f,loading:!!b}),ae=p||p===0?nt(p,X()&&Z):null;if(R.href!==void 0)return ce("a",{...R,className:ne,onClick:Y,ref:y,children:[re,ae]});var ie=ce("button",{...U,type:he,className:ne,onClick:Y,disabled:I,ref:y,children:[re,ae]});return W(l)?ie:u(He,{disabled:!!b,children:ie})},G=c.exports.forwardRef(rt);G.Group=Je;G.__ANT_BUTTON=!0;const it=G;export{it as B};