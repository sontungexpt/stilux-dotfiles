/*! For license information please see shopping.js.LICENSE.txt */
  :host {
    background-color: ${Qs};
    color: ${Yl};
  }
`.withBehaviors(Of(Xh`
      :host {
        background-color: ${Rf.Canvas};
        box-shadow: 0 0 0 1px ${Rf.CanvasText};
        color: ${Rf.CanvasText};
      }
    `));function Mf(e){return(t,n)=>{t[n+"Changed"]=function(t,n){null!=n?e.setValueFor(this,n):e.deleteValueFor(this)}}}class Lf extends Fh{constructor(){super(),this.noPaint=!1,_o.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){this.noPaint||void 0===this.fillColor?this.$fastController.removeStyles(_f):this.$fastController.addStyles(_f)}accentBaseColorChanged(e,t){null!=t?Ws.setValueFor(this,ya.create(t)):Ws.deleteValueFor(this)}neutralBaseColorChanged(e,t){null!=t?Vs.setValueFor(this,ya.create(t)):Vs.deleteValueFor(this)}}Yh([Xo({attribute:"no-paint",mode:"boolean"})],Lf.prototype,"noPaint",void 0),Yh([Xo({attribute:"fill-color",converter:Nf}),Mf(Qs)],Lf.prototype,"fillColor",void 0),Yh([Xo({attribute:"accent-base-color",converter:Nf,mode:"fromView"})],Lf.prototype,"accentBaseColor",void 0),Yh([Xo({attribute:"neutral-base-color",converter:Nf,mode:"fromView"})],Lf.prototype,"neutralBaseColor",void 0),Yh([Mo,Mf(Vs)],Lf.prototype,"neutralPalette",void 0),Yh([Mo,Mf(Ws)],Lf.prototype,"accentPalette",void 0),Yh([Xo({converter:Yo}),Mf(Na)],Lf.prototype,"density",void 0),Yh([Xo({attribute:"design-unit",converter:Yo}),Mf(_a)],Lf.prototype,"designUnit",void 0),Yh([Xo({attribute:"direction"}),Mf(Da)],Lf.prototype,"direction",void 0),Yh([Xo({attribute:"base-height-multiplier",converter:Yo}),Mf(wa)],Lf.prototype,"baseHeightMultiplier",void 0),Yh([Xo({attribute:"base-horizontal-spacing-multiplier",converter:Yo}),Mf(Ra)],Lf.prototype,"baseHorizontalSpacingMultiplier",void 0),Yh([Xo({attribute:"control-corner-radius",converter:Yo}),Mf(Ma)],Lf.prototype,"controlCornerRadius",void 0),Yh([Xo({attribute:"stroke-width",converter:Yo}),Mf(Fa)],Lf.prototype,"strokeWidth",void 0),Yh([Xo({attribute:"focus-stroke-width",converter:Yo}),Mf(Ua)],Lf.prototype,"focusStrokeWidth",void 0),Yh([Xo({attribute:"disabled-opacity",converter:Yo}),Mf(Pa)],Lf.prototype,"disabledOpacity",void 0),Yh([Xo({attribute:"type-ramp-minus-2-font-size"}),Mf(za)],Lf.prototype,"typeRampMinus2FontSize",void 0),Yh([Xo({attribute:"type-ramp-minus-2-line-height"}),Mf(Ka)],Lf.prototype,"typeRampMinus2LineHeight",void 0),Yh([Xo({attribute:"type-ramp-minus-1-font-size"}),Mf(Va)],Lf.prototype,"typeRampMinus1FontSize",void 0),Yh([Xo({attribute:"type-ramp-minus-1-line-height"}),Mf(Wa)],Lf.prototype,"typeRampMinus1LineHeight",void 0),Yh([Xo({attribute:"type-ramp-base-font-size"}),Mf(Ba)],Lf.prototype,"typeRampBaseFontSize",void 0),Yh([Xo({attribute:"type-ramp-base-line-height"}),Mf(Ga)],Lf.prototype,"typeRampBaseLineHeight",void 0),Yh([Xo({attribute:"type-ramp-plus-1-font-size"}),Mf($a)],Lf.prototype,"typeRampPlus1FontSize",void 0),Yh([Xo({attribute:"type-ramp-plus-1-line-height"}),Mf(ja)],Lf.prototype,"typeRampPlus1LineHeight",void 0),Yh([Xo({attribute:"type-ramp-plus-2-font-size"}),Mf(Ya)],Lf.prototype,"typeRampPlus2FontSize",void 0),Yh([Xo({attribute:"type-ramp-plus-2-line-height"}),Mf(qa)],Lf.prototype,"typeRampPlus2LineHeight",void 0),Yh([Xo({attribute:"type-ramp-plus-3-font-size"}),Mf(Xa)],Lf.prototype,"typeRampPlus3FontSize",void 0),Yh([Xo({attribute:"type-ramp-plus-3-line-height"}),Mf(Za)],Lf.prototype,"typeRampPlus3LineHeight",void 0),Yh([Xo({attribute:"type-ramp-plus-4-font-size"}),Mf(Ja)],Lf.prototype,"typeRampPlus4FontSize",void 0),Yh([Xo({attribute:"type-ramp-plus-4-line-height"}),Mf(Qa)],Lf.prototype,"typeRampPlus4LineHeight",void 0),Yh([Xo({attribute:"type-ramp-plus-5-font-size"}),Mf(es)],Lf.prototype,"typeRampPlus5FontSize",void 0),Yh([Xo({attribute:"type-ramp-plus-5-line-height"}),Mf(ts)],Lf.prototype,"typeRampPlus5LineHeight",void 0),Yh([Xo({attribute:"type-ramp-plus-6-font-size"}),Mf(ns)],Lf.prototype,"typeRampPlus6FontSize",void 0),Yh([Xo({attribute:"type-ramp-plus-6-line-height"}),Mf(is)],Lf.prototype,"typeRampPlus6LineHeight",void 0),Yh([Xo({attribute:"accent-fill-rest-delta",converter:Yo}),Mf(rs)],Lf.prototype,"accentFillRestDelta",void 0),Yh([Xo({attribute:"accent-fill-hover-delta",converter:Yo}),Mf(as)],Lf.prototype,"accentFillHoverDelta",void 0),Yh([Xo({attribute:"accent-fill-active-delta",converter:Yo}),Mf(ss)],Lf.prototype,"accentFillActiveDelta",void 0),Yh([Xo({attribute:"accent-fill-focus-delta",converter:Yo}),Mf(ls)],Lf.prototype,"accentFillFocusDelta",void 0),Yh([Xo({attribute:"accent-foreground-rest-delta",converter:Yo}),Mf(cs)],Lf.prototype,"accentForegroundRestDelta",void 0),Yh([Xo({attribute:"accent-foreground-hover-delta",converter:Yo}),Mf(us)],Lf.prototype,"accentForegroundHoverDelta",void 0),Yh([Xo({attribute:"accent-foreground-active-delta",converter:Yo}),Mf(ds)],Lf.prototype,"accentForegroundActiveDelta",void 0),Yh([Xo({attribute:"accent-foreground-focus-delta",converter:Yo}),Mf(ps)],Lf.prototype,"accentForegroundFocusDelta",void 0),Yh([Xo({attribute:"neutral-fill-rest-delta",converter:Yo}),Mf(hs)],Lf.prototype,"neutralFillRestDelta",void 0),Yh([Xo({attribute:"neutral-fill-hover-delta",converter:Yo}),Mf(fs)],Lf.prototype,"neutralFillHoverDelta",void 0),Yh([Xo({attribute:"neutral-fill-active-delta",converter:Yo}),Mf(gs)],Lf.prototype,"neutralFillActiveDelta",void 0),Yh([Xo({attribute:"neutral-fill-focus-delta",converter:Yo}),Mf(vs)],Lf.prototype,"neutralFillFocusDelta",void 0),Yh([Xo({attribute:"neutral-fill-input-rest-delta",converter:Yo}),Mf(ms)],Lf.prototype,"neutralFillInputRestDelta",void 0),Yh([Xo({attribute:"neutral-fill-input-hover-delta",converter:Yo}),Mf(ys)],Lf.prototype,"neutralFillInputHoverDelta",void 0),Yh([Xo({attribute:"neutral-fill-input-active-delta",converter:Yo}),Mf(Cs)],Lf.prototype,"neutralFillInputActiveDelta",void 0),Yh([Xo({attribute:"neutral-fill-input-focus-delta",converter:Yo}),Mf(Ss)],Lf.prototype,"neutralFillInputFocusDelta",void 0),Yh([Xo({attribute:"neutral-fill-layer-rest-delta",converter:Yo}),Mf(ks)],Lf.prototype,"neutralFillLayerRestDelta",void 0),Yh([Xo({attribute:"neutral-fill-stealth-rest-delta",converter:Yo}),Mf(As)],Lf.prototype,"neutralFillStealthRestDelta",void 0),Yh([Xo({attribute:"neutral-fill-stealth-hover-delta",converter:Yo}),Mf(Is)],Lf.prototype,"neutralFillStealthHoverDelta",void 0),Yh([Xo({attribute:"neutral-fill-stealth-active-delta",converter:Yo}),Mf(Os)],Lf.prototype,"neutralFillStealthActiveDelta",void 0),Yh([Xo({attribute:"neutral-fill-stealth-focus-delta",converter:Yo}),Mf(Ds)],Lf.prototype,"neutralFillStealthFocusDelta",void 0),Yh([Xo({attribute:"neutral-fill-strong-hover-delta",converter:Yo}),Mf(ws)],Lf.prototype,"neutralFillStrongHoverDelta",void 0),Yh([Xo({attribute:"neutral-fill-strong-active-delta",converter:Yo}),Mf(Rs)],Lf.prototype,"neutralFillStrongActiveDelta",void 0),Yh([Xo({attribute:"neutral-fill-strong-focus-delta",converter:Yo}),Mf(Ns)],Lf.prototype,"neutralFillStrongFocusDelta",void 0),Yh([Xo({attribute:"base-layer-luminance",converter:Yo}),Mf(os)],Lf.prototype,"baseLayerLuminance",void 0),Yh([Xo({attribute:"neutral-stroke-divider-rest-delta",converter:Yo}),Mf(Us)],Lf.prototype,"neutralStrokeDividerRestDelta",void 0),Yh([Xo({attribute:"neutral-stroke-rest-delta",converter:Yo}),Mf(_s)],Lf.prototype,"neutralStrokeRestDelta",void 0),Yh([Xo({attribute:"neutral-stroke-hover-delta",converter:Yo}),Mf(Ms)],Lf.prototype,"neutralStrokeHoverDelta",void 0),Yh([Xo({attribute:"neutral-stroke-active-delta",converter:Yo}),Mf(Ls)],Lf.prototype,"neutralStrokeActiveDelta",void 0),Yh([Xo({attribute:"neutral-stroke-focus-delta",converter:Yo}),Mf(Fs)],Lf.prototype,"neutralStrokeFocusDelta",void 0);const Ff=Lf.compose({baseName:"design-system-provider",template:kf` <slot></slot> `,styles:Xh`
    ${wf("block")}
  `});var Uf;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Uf||(Uf={}));const Hf="ArrowDown",Bf="ArrowLeft",Gf="ArrowRight",Vf="ArrowUp",Wf="Enter",zf="Escape",Kf="Home",$f="End",jf=" ",Yf="Tab",qf={ArrowDown:Hf,ArrowLeft:Bf,ArrowRight:Gf,ArrowUp:Vf};function Xf(e,t,n){return n<e?t:n>t?e:n}function Zf(e,t,n=0){return[t,n]=[t,n].sort(((e,t)=>e-t)),t<=e&&e<n}class Jf{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Qf(e){return new ef("fast-ref",Jf,e)}class eg{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const tg=(e,t)=>kf`
    <span
        part="end"
        ${Qf("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Qf("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ng=(e,t)=>kf`
    <span
        part="start"
        ${Qf("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Qf("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;kf`
    <span part="end" ${Qf("endContainer")}>
        <slot
            name="end"
            ${Qf("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,kf`
    <span part="start" ${Qf("startContainer")}>
        <slot
            name="start"
            ${Qf("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function ig(e,...t){const n=$o.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}));$o.locate(t).forEach((e=>n.push(e)))}))}class og extends Fh{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}Po([Xo({attribute:"heading-level",mode:"fromView",converter:Yo})],og.prototype,"headinglevel",void 0),Po([Xo({mode:"boolean"})],og.prototype,"expanded",void 0),Po([Xo],og.prototype,"id",void 0),ig(og,eg);const rg="single",ag="multi";class sg extends Fh{constructor(){super(...arguments),this.expandmode=ag,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;if(0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof og&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const n=this.accordionIds[t];e.setAttribute("id","string"!=typeof n?`accordion-${t+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())){(null!==(e=this.findExpandedItem())&&void 0!==e?e:this.accordionItems[0]).setAttribute("aria-disabled","true")}},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();const t=e.target;this.activeid=t.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),t.expanded=!0,t.setAttribute("aria-disabled","true"),this.accordionItems.forEach((e=>{e.hasAttribute("disabled")||e.id===this.activeid||e.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case Vf:e.preventDefault(),this.adjust(-1);break;case Hf:e.preventDefault(),this.adjust(1);break;case Kf:this.activeItemIndex=0,this.focusItem();break;case $f:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,n=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==n&&-1!==n&&(this.activeItemIndex=n,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if("true"===this.accordionItems[e].getAttribute("expanded"))return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===rg}adjust(e){this.activeItemIndex=Xf(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof og&&e.expandbutton.focus()}}function lg(e){return e?function(t,n,i){return 1===t.nodeType&&t.matches(e)}:function(e,t,n){return 1===e.nodeType}}Po([Xo({attribute:"expand-mode"})],sg.prototype,"expandmode",void 0),Po([Mo],sg.prototype,"accordionItems",void 0);class cg{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=_o.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(ui),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ug extends cg{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function dg(e){return"string"==typeof e&&(e={property:e}),new ef("fast-slotted",ug,e)}const pg=sg.compose({baseName:"accordion",template:(e,t)=>kf`
    <template>
        <slot ${dg({property:"accordionItems",filter:lg()})}></slot>
        <slot name="item" part="item" ${dg("accordionItems")}></slot>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      font-family: ${Ha};
      font-size: ${Va};
      line-height: ${Wa};
      color: ${Yl};
      border-top: calc(${Fa} * 1px) solid ${Ul};
    }
  `});function hg(...e){return e.every((e=>e instanceof HTMLElement))}let fg;const gg=function(){if("boolean"==typeof fg)return fg;if("undefined"==typeof window||!window.document||!window.document.createElement)return fg=!1,fg;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),fg=!0}catch(e){fg=!1}finally{document.head.removeChild(e)}return fg}()?"focus-visible":"focus",vg=(function(e,...t){const{styles:n,behaviors:i}=qh(e,t);return new Zh(n,i)})`(${wa} + ${Na}) * ${_a}`,mg=og.compose({baseName:"accordion-item",template:(e,t)=>kf`
    <template class="${e=>e.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${Qf("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,t)=>e.clickHandler(t.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${ng(0,t)}
            ${tg(0,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("flex")} :host {
      box-sizing: border-box;
      font-family: ${Ha};
      flex-direction: column;
      font-size: ${Va};
      line-height: ${Wa};
      border-bottom: calc(${Fa} * 1px) solid ${Ul};
    }

    .region {
      display: none;
      padding: calc((6 + (${_a} * 2 * ${Na})) * 1px);
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto calc(${vg} * 1px);
      z-index: 2;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      padding: 0 calc((6 + (${_a} * 2 * ${Na})) * 1px);
      text-align: left;
      height: calc(${vg} * 1px);
      color: ${Yl};
      cursor: pointer;
      font-family: inherit;
    }

    .button:hover,
    .button:active {
      color: ${Yl};
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      cursor: pointer;
    }

    .button:${gg}::before {
      outline: none;
      border: calc(${Fa} * 1px) solid ${zl};
      box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${zl};
    }

    :host(.expanded) .region {
      display: block;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      z-index: 2;
      pointer-events: none;
      fill: ${nl};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${_a} * 1px);
      justify-content: center;
      grid-column: 1;
      z-index: 2;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
      z-index: 2;
    }
  `.withBehaviors(Of(Xh`
        .button:${gg}::before {
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${Rf.Highlight};
        }
        .icon {
          fill: ${Rf.ButtonText};
        }
      `)),collapsedIcon:'\n    <svg\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"\n        />\n    </svg>\n  ',expandedIcon:'\n    <svg\n        width="20"\n        height="20"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"\n        />\n    </svg>\n  '});class yg{}Po([Xo({attribute:"aria-atomic"})],yg.prototype,"ariaAtomic",void 0),Po([Xo({attribute:"aria-busy"})],yg.prototype,"ariaBusy",void 0),Po([Xo({attribute:"aria-controls"})],yg.prototype,"ariaControls",void 0),Po([Xo({attribute:"aria-current"})],yg.prototype,"ariaCurrent",void 0),Po([Xo({attribute:"aria-describedby"})],yg.prototype,"ariaDescribedby",void 0),Po([Xo({attribute:"aria-details"})],yg.prototype,"ariaDetails",void 0),Po([Xo({attribute:"aria-disabled"})],yg.prototype,"ariaDisabled",void 0),Po([Xo({attribute:"aria-errormessage"})],yg.prototype,"ariaErrormessage",void 0),Po([Xo({attribute:"aria-flowto"})],yg.prototype,"ariaFlowto",void 0),Po([Xo({attribute:"aria-haspopup"})],yg.prototype,"ariaHaspopup",void 0),Po([Xo({attribute:"aria-hidden"})],yg.prototype,"ariaHidden",void 0),Po([Xo({attribute:"aria-invalid"})],yg.prototype,"ariaInvalid",void 0),Po([Xo({attribute:"aria-keyshortcuts"})],yg.prototype,"ariaKeyshortcuts",void 0),Po([Xo({attribute:"aria-label"})],yg.prototype,"ariaLabel",void 0),Po([Xo({attribute:"aria-labelledby"})],yg.prototype,"ariaLabelledby",void 0),Po([Xo({attribute:"aria-live"})],yg.prototype,"ariaLive",void 0),Po([Xo({attribute:"aria-owns"})],yg.prototype,"ariaOwns",void 0),Po([Xo({attribute:"aria-relevant"})],yg.prototype,"ariaRelevant",void 0),Po([Xo({attribute:"aria-roledescription"})],yg.prototype,"ariaRoledescription",void 0);class Cg extends Fh{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}Po([Xo],Cg.prototype,"download",void 0),Po([Xo],Cg.prototype,"href",void 0),Po([Xo],Cg.prototype,"hreflang",void 0),Po([Xo],Cg.prototype,"ping",void 0),Po([Xo],Cg.prototype,"referrerpolicy",void 0),Po([Xo],Cg.prototype,"rel",void 0),Po([Xo],Cg.prototype,"target",void 0),Po([Xo],Cg.prototype,"type",void 0),Po([Mo],Cg.prototype,"defaultSlottedContent",void 0);class Sg{}Po([Xo({attribute:"aria-expanded"})],Sg.prototype,"ariaExpanded",void 0),ig(Sg,yg),ig(Cg,eg,Sg);const bg=(e,t)=>Xh`
    ${wf("inline-flex")} :host {
      font-family: ${Ha};
      outline: none;
      font-size: ${Ba};
      line-height: ${Ga};
      height: calc(${vg} * 1px);
      min-width: calc(${vg} * 1px);
      background-color: ${Cl};
      color: ${Yl};
      border-radius: calc(${Ma} * 1px);
      fill: currentcolor;
      cursor: pointer;
    }

    .control {
      background: transparent;
      height: inherit;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${_a} * 2 * ${Na})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      border: calc(${Fa} * 1px) solid transparent;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      cursor: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    :host(:hover) {
      background-color: ${Sl};
    }

    :host(:active) {
      background-color: ${bl};
    }

    .control:${gg} {
      border: calc(${Fa} * 1px) solid ${zl};
      box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${zl};
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    ::slotted(svg) {
      ${""} width: 16px;
      height: 16px;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `.withBehaviors(Of(Xh`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${Rf.ButtonFace};
          border-color: ${Rf.ButtonText};
          color: ${Rf.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${Rf.Highlight};
          color: ${Rf.HighlightText};
        }

        .control:${gg},
        :host([appearance="outline"]) .control:${gg},
        :host([appearance="neutral"]:${gg}) .control {
          forced-color-adjust: none;
          background-color: ${Rf.Highlight};
          border-color: ${Rf.ButtonText};
          box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${Rf.ButtonText};
          color: ${Rf.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${Rf.ButtonText};
        }

        :host([href]) .control {
          border-color: ${Rf.LinkText};
          color: ${Rf.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${gg}{
          forced-color-adjust: none;
          background: ${Rf.ButtonFace};
          border-color: ${Rf.LinkText};
          box-shadow: 0 0 0 1px ${Rf.LinkText} inset;
          color: ${Rf.LinkText};
          fill: currentcolor;
        }
    `)),Tg=Xh`
  :host([appearance='accent']) {
    background: ${nl};
    color: ${ll};
  }

  :host([appearance='accent']:hover) {
    background: ${il};
    color: ${cl};
  }

  :host([appearance='accent']:active) .control:active {
    background: ${ol};
    color: ${ul};
  }

  :host([appearance="accent"]) .control:${gg} {
    box-shadow: 0 0 0 calc(${Ua} * 1px) inset ${$l},
      0 0 0 calc((${Ua} - ${Fa}) * 1px) ${zl};
  }
`.withBehaviors(Of(Xh`
      :host([appearance='accent']) .control {
        forced-color-adjust: none;
        background: ${Rf.Highlight};
        color: ${Rf.HighlightText};
      }

      :host([appearance='accent']) .control:hover,
      :host([appearance='accent']:active) .control:active {
        background: ${Rf.HighlightText};
        border-color: ${Rf.Highlight};
        color: ${Rf.Highlight};
      }

      :host([appearance="accent"]) .control:${gg} {
        border-color: ${Rf.ButtonText};
        box-shadow: 0 0 0 2px ${Rf.HighlightText} inset;
      }

      :host([appearance='accent'][href]) .control {
        background: ${Rf.LinkText};
        color: ${Rf.HighlightText};
      }

      :host([appearance='accent'][href]) .control:hover {
        background: ${Rf.ButtonFace};
        border-color: ${Rf.LinkText};
        box-shadow: none;
        color: ${Rf.LinkText};
        fill: currentcolor;
      }

      :host([appearance="accent"][href]) .control:${gg} {
        border-color: ${Rf.LinkText};
        box-shadow: 0 0 0 2px ${Rf.HighlightText} inset;
      }
    `)),xg=Xh`
  :host([appearance='hypertext']) {
    height: auto;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
    min-width: 0;
  }

  :host([appearance='hypertext']) .control {
    display: inline;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    line-height: 1;
  }
  :host a.control:not(:link) {
    background-color: transparent;
    cursor: default;
  }
  :host([appearance='hypertext']) .control:link,
  :host([appearance='hypertext']) .control:visited {
    background: transparent;
    color: ${gl};
    border-bottom: calc(${Fa} * 1px) solid ${gl};
  }
  :host([appearance='hypertext']) .control:hover {
    border-bottom-color: ${vl};
  }
  :host([appearance='hypertext']) .control:active {
    border-bottom-color: ${ml};
  }
  :host([appearance="hypertext"]) .control:${gg} {
    border-bottom: calc(${Ua} * 1px) solid ${zl};
    margin-bottom: calc(calc(${Fa} - ${Ua}) * 1px);
  }
`.withBehaviors(Of(Xh`
      :host([appearance="hypertext"]) .control:${gg} {
        color: ${Rf.LinkText};
        border-bottom-color: ${Rf.LinkText};
      }
    `)),Eg=Xh`
  :host([appearance='lightweight']) {
    background: transparent;
    color: ${gl};
  }

  :host([appearance='lightweight']) .control {
    padding: 0;
    height: initial;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  :host([appearance='lightweight']:hover) {
    color: ${vl};
  }

  :host([appearance='lightweight']:active) {
    color: ${ml};
  }

  :host([appearance='lightweight']) .content {
    position: relative;
  }

  :host([appearance='lightweight']) .content::before {
    content: '';
    display: block;
    height: calc(${Fa} * 1px);
    position: absolute;
    top: calc(1em + 3px);
    width: 100%;
  }

  :host([appearance='lightweight']:hover) .content::before {
    background: ${vl};
  }

  :host([appearance='lightweight']:active) .content::before {
    background: ${ml};
  }

  :host([appearance="lightweight"]) .control:${gg} .content::before {
    background: ${Yl};
    height: calc(${Ua} * 1px);
  }
`.withBehaviors(Of(Xh`
      :host([appearance='lightweight']) {
        color: ${Rf.ButtonText};
      }
      :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${gg} {
        forced-color-adjust: none;
        background: ${Rf.ButtonFace};
        color: ${Rf.Highlight};
      }
      :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${gg} .content::before {
        background: ${Rf.Highlight};
      }

      :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${gg} {
        background: ${Rf.ButtonFace};
        box-shadow: none;
        color: ${Rf.LinkText};
      }

      :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${gg} .content::before {
        background: ${Rf.LinkText};
      }
    `)),kg=Xh`
  :host([appearance='outline']) {
    background: transparent;
    border-color: ${_l};
  }

  :host([appearance='outline']:hover) {
    border-color: ${Ml};
  }

  :host([appearance='outline']:active) {
    border-color: ${Ll};
  }

  :host([appearance='outline']) .control {
    border-color: inherit;
  }

  :host([appearance="outline"]) .control:${gg} {
    box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${zl};
    border-color: ${zl};
  }
`.withBehaviors(Of(Xh`
      :host([appearance='outline']) {
        border-color: ${Rf.ButtonText};
      }
      :host([appearance='outline'][href]) {
        border-color: ${Rf.LinkText};
      }
    `)),Ag=Xh`
  :host([appearance='stealth']) {
    background: ${Dl};
  }

  :host([appearance='stealth']:hover) {
    background: ${Pl};
  }

  :host([appearance='stealth']:active) {
    background: ${wl};
  }
`.withBehaviors(Of(Xh`
      :host([appearance='stealth']),
      :host([appearance='stealth']) .control {
        forced-color-adjust: none;
        background: ${Rf.ButtonFace};
        border-color: transparent;
        color: ${Rf.ButtonText};
        fill: currentcolor;
      }

      :host([appearance='stealth']:hover) .control {
        background: ${Rf.Highlight};
        border-color: ${Rf.Highlight};
        color: ${Rf.HighlightText};
        fill: currentcolor;
      }

      :host([appearance="stealth"]:${gg}) .control {
        background: ${Rf.Highlight};
        box-shadow: 0 0 0 1px ${Rf.Highlight};
        color: ${Rf.HighlightText};
        fill: currentcolor;
      }

      :host([appearance='stealth'][href]) .control {
        color: ${Rf.LinkText};
      }

      :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${gg}[href]) .control {
        background: ${Rf.LinkText};
        border-color: ${Rf.LinkText};
        color: ${Rf.HighlightText};
        fill: currentcolor;
      }

      :host([appearance="stealth"]:${gg}[href]) .control {
        box-shadow: 0 0 0 1px ${Rf.LinkText};
      }
    `));class Ig{constructor(e,t,n){this.propertyName=e,this.value=t,this.styles=n}bind(e){_o.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){_o.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Og(e,t){return new Ig("appearance",e,t)}class Dg extends Cg{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Yh([Xo],Dg.prototype,"appearance",void 0);const Pg=Dg.compose({baseName:"anchor",baseClass:Cg,template:(e,t)=>kf`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Qf("control")}
    >
        ${ng(0,t)}
        <span class="content" part="content">
            <slot ${dg("defaultSlottedContent")}></slot>
        </span>
        ${tg(0,t)}
    </a>
`,styles:(e,t)=>Xh`
    ${bg()}
  `.withBehaviors(Og("accent",Tg),Og("hypertext",xg),Og("lightweight",Eg),Og("outline",kg),Og("stealth",Ag)),shadowOptions:{delegatesFocus:!0}}),wg="form-associated-proxy",Rg="ElementInternals",Ng=Rg in window&&"setFormValue"in window[Rg].prototype,_g=new WeakMap;function Mg(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ng}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return ui}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),yi.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),yi.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Ng)return null;let e=_g.get(this);return e||(e=this.attachInternals(),_g.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",wg),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",wg)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Wf)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return Xo({mode:"boolean"})(t.prototype,"disabled"),Xo({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),Xo({attribute:"current-value"})(t.prototype,"currentValue"),Xo(t.prototype,"name"),Xo({mode:"boolean"})(t.prototype,"required"),Mo(t.prototype,"value"),t}function Lg(e){class t extends(Mg(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return Xo({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),Xo({attribute:"current-checked",converter:jo})(n.prototype,"currentChecked"),Mo(n.prototype,"defaultChecked"),Mo(n.prototype,"checked"),n}class Fg extends Fh{}class Ug extends(Mg(Fg)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Hg extends Ug{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}Po([Xo({mode:"boolean"})],Hg.prototype,"autofocus",void 0),Po([Xo({attribute:"form"})],Hg.prototype,"formId",void 0),Po([Xo],Hg.prototype,"formaction",void 0),Po([Xo],Hg.prototype,"formenctype",void 0),Po([Xo],Hg.prototype,"formmethod",void 0),Po([Xo({mode:"boolean"})],Hg.prototype,"formnovalidate",void 0),Po([Xo],Hg.prototype,"formtarget",void 0),Po([Xo],Hg.prototype,"type",void 0),Po([Mo],Hg.prototype,"defaultSlottedContent",void 0);class Bg{}Po([Xo({attribute:"aria-expanded"})],Bg.prototype,"ariaExpanded",void 0),Po([Xo({attribute:"aria-pressed"})],Bg.prototype,"ariaPressed",void 0),ig(Bg,yg),ig(Hg,eg,Bg);const Gg="not-allowed";class Vg extends Hg{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Yh([Xo],Vg.prototype,"appearance",void 0);const Wg=Vg.compose({baseName:"button",baseClass:Hg,template:(e,t)=>kf`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Qf("control")}
    >
        ${ng(0,t)}
        <span class="content" part="content">
            <slot ${dg("defaultSlottedContent")}></slot>
        </span>
        ${tg(0,t)}
    </button>
`,styles:(e,t)=>Xh`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
      opacity: ${Pa};
      background-color: ${Cl};
      cursor: ${Gg};
    }

    ${bg()}
  `.withBehaviors(Of(Xh`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active),
        :host([disabled]) .control,
        :host([disabled]) .control:hover,
        :host([appearance='neutral'][disabled]:hover) .control {
          forced-color-adjust: none;
          background-color: ${Rf.ButtonFace};
          border-color: ${Rf.GrayText};
          color: ${Rf.GrayText};
          opacity: 1;
        }
      `),Og("accent",Xh`
        :host([appearance='accent'][disabled]),
        :host([appearance='accent'][disabled]:hover),
        :host([appearance='accent'][disabled]:active) {
          background: ${nl};
        }

        ${Tg}
      `.withBehaviors(Of(Xh`
            :host([appearance='accent'][disabled]) .control,
            :host([appearance='accent'][disabled]) .control:hover {
              background: ${Rf.ButtonFace};
              border-color: ${Rf.GrayText};
              color: ${Rf.GrayText};
            }
          `))),Og("lightweight",Xh`
        :host([appearance='lightweight'][disabled]:hover),
        :host([appearance='lightweight'][disabled]:active) {
          background-color: transparent;
          color: ${gl};
        }

        :host([appearance='lightweight'][disabled]) .content::before,
        :host([appearance='lightweight'][disabled]:hover) .content::before,
        :host([appearance='lightweight'][disabled]:active) .content::before {
          background: transparent;
        }

        ${Eg}
      `.withBehaviors(Of(Xh`
            :host([appearance='lightweight'][disabled]) .control {
              forced-color-adjust: none;
              color: ${Rf.GrayText};
            }

            :host([appearance='lightweight'][disabled]) .control:hover .content::before {
              background: none;
            }
          `))),Og("outline",Xh`
        :host([appearance='outline'][disabled]:hover),
        :host([appearance='outline'][disabled]:active) {
          background: transparent;
          border-color: ${_l};
        }

        ${kg}
      `.withBehaviors(Of(Xh`
            :host([appearance='outline'][disabled]) .control {
              border-color: ${Rf.GrayText};
            }
          `))),Og("stealth",Xh`
        :host([appearance='stealth'][disabled]),
        :host([appearance='stealth'][disabled]:hover),
        :host([appearance='stealth'][disabled]:active) {
          background: ${Dl};
        }

        ${Ag}
      `.withBehaviors(Of(Xh`
            :host([appearance='stealth'][disabled]),
            :host([appearance='stealth'][disabled]:hover) {
              background: ${Rf.ButtonFace};
            }

            :host([appearance='stealth'][disabled]) .control {
              background: ${Rf.ButtonFace};
              border-color: transparent;
              color: ${Rf.GrayText};
            }
          `)))),shadowOptions:{delegatesFocus:!0}});class zg extends Fh{}const Kg="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));";class $g extends zg{cardFillColorChanged(e,t){if(t){const e=ca(t);null!==e&&(this.neutralPaletteSource=t,Qs.setValueFor(this,ha.create(e.r,e.g,e.b)))}}neutralPaletteSourceChanged(e,t){if(t){const e=ca(t),n=ha.create(e.r,e.g,e.b);Vs.setValueFor(this,ya.create(n))}}handleChange(e,t){this.cardFillColor||Qs.setValueFor(this,(t=>Il.getValueFor(t).evaluate(t,Qs.getValueFor(e))))}connectedCallback(){super.connectedCallback();const e=sr(this);if(e){const t=_o.getNotifier(e);t.subscribe(this,"fillColor"),t.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}Yh([Xo({attribute:"card-fill-color",mode:"fromView"})],$g.prototype,"cardFillColor",void 0),Yh([Xo({attribute:"neutral-palette-source",mode:"fromView"})],$g.prototype,"neutralPaletteSource",void 0);const jg=$g.compose({baseName:"card",baseClass:zg,template:(e,t)=>kf`
    <slot></slot>
`,styles:(e,t)=>Xh`
      ${wf("block")} :host {
        --elevation: 4;
        display: block;
        contain: content;
        height: var(--card-height, 100%);
        width: var(--card-width, 100%);
        box-sizing: border-box;
        background: ${Qs};
        color: ${Yl};
        border-radius: calc(${La} * 1px);
        ${Kg}
      }

      :host(:hover) {
        --elevation: 8;
      }

      :host(:focus-within) {
        --elevation: 8;
      }

      :host {
        content-visibility: auto;
      }
    `.withBehaviors(Of(Xh`
          :host {
            forced-color-adjust: none;
            background: ${Rf.Canvas};
            box-shadow: 0 0 0 1px ${Rf.CanvasText};
          }
        `))}),Yg="menuitem",qg="menuitemcheckbox",Xg="menuitemradio",Zg={[Yg]:"menuitem",[qg]:"menuitemcheckbox",[Xg]:"menuitemradio"},Jg=e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?kr.rtl:kr.ltr};class Qg extends Fh{constructor(){super(...arguments),this.role=Yg,this.hasSubmenu=!1,this.currentDirection=kr.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case Wf:case jf:return this.invoke(),!1;case Gf:return this.expandAndFocus(),!1;case Bf:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case qg:this.checked=!this.checked;break;case Yg:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Xg:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((e=>"menu"===e.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(e){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=Jg(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,t){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),yi.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}}Po([Xo({mode:"boolean"})],Qg.prototype,"disabled",void 0),Po([Xo({mode:"boolean"})],Qg.prototype,"expanded",void 0),Po([Mo],Qg.prototype,"startColumnCount",void 0),Po([Xo],Qg.prototype,"role",void 0),Po([Xo({mode:"boolean"})],Qg.prototype,"checked",void 0),Po([Mo],Qg.prototype,"submenuRegion",void 0),Po([Mo],Qg.prototype,"hasSubmenu",void 0),Po([Mo],Qg.prototype,"currentDirection",void 0),Po([Mo],Qg.prototype,"submenu",void 0),ig(Qg,eg);class ev extends Fh{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&hg(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=e=>{const t=e.target;void 0!==this.menuItems&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||null===e.target||void 0===this.menuItems||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();const t=e.target;null===this.expandedItem||t!==this.expandedItem||!1!==t.expanded?t.expanded&&(null!==this.expandedItem&&this.expandedItem!==t&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=t,this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const e=this.domChildren();this.removeItemListeners(),this.menuItems=e;const t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);const n=t.reduce(((e,t)=>{const n=function(e){const t=e.getAttribute("role"),n=e.querySelector("[slot=start]");return t!==Yg&&null===n||t===Yg&&null!==n?1:t!==Yg&&null!==n?2:0}(t);return e>n?e:n}),0);t.forEach(((e,t)=>{e.setAttribute("tabindex",0===t?"0":"-1"),e.addEventListener("expanded-change",this.handleExpandedChanged),e.addEventListener("focus",this.handleItemFocus),e instanceof Qg&&(e.startColumnCount=n)}))},this.changeHandler=e=>{if(void 0===this.menuItems)return;const t=e.target,n=this.menuItems.indexOf(t);if(-1!==n&&"menuitemradio"===t.role&&!0===t.checked){for(let e=n-1;e>=0;--e){const t=this.menuItems[e],n=t.getAttribute("role");if(n===Xg&&(t.checked=!1),"separator"===n)break}const e=this.menuItems.length-1;for(let t=n+1;t<=e;++t){const e=this.menuItems[t],n=e.getAttribute("role");if(n===Xg&&(e.checked=!1),"separator"===n)break}}},this.isMenuItemElement=e=>hg(e)&&ev.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,t){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),yi.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!e.defaultPrevented&&void 0!==this.menuItems)switch(e.key){case Hf:return void this.setFocus(this.focusIndex+1,1);case Vf:return void this.setFocus(this.focusIndex-1,-1);case $f:return void this.setFocus(this.menuItems.length-1,-1);case Kf:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter((e=>!e.hasAttribute("hidden")))}setFocus(e,t){if(void 0!==this.menuItems)for(;e>=0&&e<this.menuItems.length;){const n=this.menuItems[e];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,n.setAttribute("tabindex","0"),n.focus();break}e+=t}}}ev.focusableElementRoles=Zg,Po([Mo],ev.prototype,"items",void 0);const tv=ev.compose({baseName:"menu",template:(e,t)=>kf`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,t)=>e.handleMenuKeyDown(t.event)}"
        @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
    >
        <slot ${dg("items")}></slot>
    </template>
`,styles:(e,t)=>Xh`
      ${wf("block")} :host {
        --elevation: 11;
        background: ${js};
        border: calc(${Fa} * 1px) solid transparent;
        border-radius: ${La};
        ${Kg}
        margin: 0;
        border-radius: calc(${Ma} * 1px);
        padding: calc(${_a} * 1px) 0;
        max-width: 368px;
        min-width: 64px;
      }

      :host([slot='submenu']) {
        width: max-content;
        margin: 0 calc(${_a} * 1px);
      }

      ::slotted(hr) {
        box-sizing: content-box;
        height: 0;
        margin: 0;
        border: none;
        border-top: calc(${Fa} * 1px) solid ${Ul};
      }
    `});function nv(e,t){const n="function"==typeof t?t:()=>t;return(t,i)=>e(t,i)?n(t,i):null}const iv="resize",ov="scroll";class rv extends Fh{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=kr.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(rv.intersectionService.requestPosition(this,this.handleIntersection),rv.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&rv.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,rv.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&rv.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&rv.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{const t=e.find((e=>e.target===this)),n=e.find((e=>e.target===this.anchorElement)),i=e.find((e=>e.target===this.viewportElement));return void 0!==t&&void 0!==i&&void 0!==n&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,i.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect))&&(this.regionRect=t.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(i.boundingClientRect.x+document.documentElement.scrollLeft,i.boundingClientRect.y+document.documentElement.scrollTop,i.boundingClientRect.width,i.boundingClientRect.height):this.viewportRect=i.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,t)=>Math.abs(e.top-t.top)>this.updateThreshold||Math.abs(e.right-t.right)>this.updateThreshold||Math.abs(e.bottom-t.bottom)>this.updateThreshold||Math.abs(e.left-t.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=Jg(this),this.startObservers())},this.updateLayout=()=>{let e,t;if("uncontrolled"!==this.horizontalPositioningMode){const e=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)t="center";else if("unset"!==this.horizontalDefaultPosition){let e=this.horizontalDefaultPosition;if("start"===e||"end"===e){const t=Jg(this);if(t!==this.currentDirection)return this.currentDirection=t,void this.initialize();e=this.currentDirection===kr.ltr?"start"===e?"left":"right":"start"===e?"right":"left"}switch(e){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end"}}const n=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,i=void 0!==this.anchorRect?this.anchorRect.left:0,o=void 0!==this.anchorRect?this.anchorRect.right:0,r=void 0!==this.anchorRect?this.anchorRect.width:0,a=void 0!==this.viewportRect?this.viewportRect.left:0,s=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===t||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(t,i,o,r,a,s)<n)&&(t=this.getAvailableSpace(e[0],i,o,r,a,s)>this.getAvailableSpace(e[1],i,o,r,a,s)?e[0]:e[1])}if("uncontrolled"!==this.verticalPositioningMode){const t=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)e="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end"}const n=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,i=void 0!==this.anchorRect?this.anchorRect.top:0,o=void 0!==this.anchorRect?this.anchorRect.bottom:0,r=void 0!==this.anchorRect?this.anchorRect.height:0,a=void 0!==this.viewportRect?this.viewportRect.top:0,s=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===e||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(e,i,o,r,a,s)<n)&&(e=this.getAvailableSpace(t[0],i,o,r,a,s)>this.getAvailableSpace(t[1],i,o,r,a,s)?t[0]:t[1])}const n=this.getNextRegionDimension(t,e),i=this.horizontalPosition!==t||this.verticalPosition!==e;if(this.setHorizontalPosition(t,n),this.setVerticalPosition(e,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),i&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=this.horizontalViewportLock?this.viewportRect.width:t.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset"}let i=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(i=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+i,this.horizontalViewportLock){const e=this.anchorRect.left+i,t=this.anchorRect.right-i;e<this.viewportRect.left&&!(t>this.viewportRect.right)?this.translateX=this.translateX-(e-this.viewportRect.left):t>this.viewportRect.right&&!(e<this.viewportRect.left)&&(this.translateX=this.translateX-(t-this.viewportRect.right))}}this.horizontalPosition=e},this.setVerticalPosition=(e,t)=>{if(void 0===e||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=this.verticalViewportLock?this.viewportRect.height:t.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset"}let i=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(i=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+i,this.verticalViewportLock){const e=this.anchorRect.top+i,t=this.anchorRect.bottom-i;e<this.viewportRect.top&&!(t>this.viewportRect.bottom)?this.translateY=this.translateY-(e-this.viewportRect.top):t>this.viewportRect.bottom&&!(e<this.viewportRect.top)&&(this.translateY=this.translateY-(t-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,t,n,i,o,r)=>{const a=t-o,s=r-(t+i);switch(e){case"start":return a;case"insetStart":return a+i;case"insetEnd":return s+i;case"end":return s;case"center":return 2*Math.min(a,s)+i}},this.getNextRegionDimension=(e,t)=>{const n={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==e&&"fill"===this.horizontalScaling?n.width=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(n.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==t&&"fill"===this.verticalScaling?n.height=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(n.height=void 0!==this.anchorRect?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener(iv,this.update,{passive:!0}),window.addEventListener(ov,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(iv,this.update),window.removeEventListener(ov,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,t){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===e&&this.stopAutoUpdateEventListeners(),"auto"===t&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),yi.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}rv.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,t)=>{var n;null!==this.intersectionDetector&&(this.observedElements.has(e)?null===(n=this.observedElements.get(e))||void 0===n||n.push(t):(this.observedElements.set(e,[t]),this.intersectionDetector.observe(e)))},this.cancelRequestPosition=(e,t)=>{const n=this.observedElements.get(e);if(void 0!==n){const e=n.indexOf(t);-1!==e&&n.splice(e,1)}},this.initializeIntersectionDetector=()=>{si.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(null===this.intersectionDetector)return;const t=[],n=[];e.forEach((e=>{var i;null===(i=this.intersectionDetector)||void 0===i||i.unobserve(e.target);const o=this.observedElements.get(e.target);void 0!==o&&(o.forEach((i=>{let o=t.indexOf(i);-1===o&&(o=t.length,t.push(i),n.push([])),n[o].push(e)})),this.observedElements.delete(e.target))})),t.forEach(((e,t)=>{e(n[t])}))},this.initializeIntersectionDetector()}},Po([Xo],rv.prototype,"anchor",void 0),Po([Xo],rv.prototype,"viewport",void 0),Po([Xo({attribute:"horizontal-positioning-mode"})],rv.prototype,"horizontalPositioningMode",void 0),Po([Xo({attribute:"horizontal-default-position"})],rv.prototype,"horizontalDefaultPosition",void 0),Po([Xo({attribute:"horizontal-viewport-lock",mode:"boolean"})],rv.prototype,"horizontalViewportLock",void 0),Po([Xo({attribute:"horizontal-inset",mode:"boolean"})],rv.prototype,"horizontalInset",void 0),Po([Xo({attribute:"horizontal-threshold"})],rv.prototype,"horizontalThreshold",void 0),Po([Xo({attribute:"horizontal-scaling"})],rv.prototype,"horizontalScaling",void 0),Po([Xo({attribute:"vertical-positioning-mode"})],rv.prototype,"verticalPositioningMode",void 0),Po([Xo({attribute:"vertical-default-position"})],rv.prototype,"verticalDefaultPosition",void 0),Po([Xo({attribute:"vertical-viewport-lock",mode:"boolean"})],rv.prototype,"verticalViewportLock",void 0),Po([Xo({attribute:"vertical-inset",mode:"boolean"})],rv.prototype,"verticalInset",void 0),Po([Xo({attribute:"vertical-threshold"})],rv.prototype,"verticalThreshold",void 0),Po([Xo({attribute:"vertical-scaling"})],rv.prototype,"verticalScaling",void 0),Po([Xo({attribute:"fixed-placement",mode:"boolean"})],rv.prototype,"fixedPlacement",void 0),Po([Xo({attribute:"auto-update-mode"})],rv.prototype,"autoUpdateMode",void 0),Po([Mo],rv.prototype,"anchorElement",void 0),Po([Mo],rv.prototype,"viewportElement",void 0),Po([Mo],rv.prototype,"initialLayoutComplete",void 0);const av=Qg.compose({baseName:"menu-item",template:(e,t)=>kf`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==Yg?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
        @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
        @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
        @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${nv((e=>e.role===qg),kf`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${nv((e=>e.role===Xg),kf`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${ng(0,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${tg(0,t)}
        ${nv((e=>e.hasSubmenu),kf`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${nv((e=>e.expanded),kf`
                <${e.tagFor(rv)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${Qf("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${e.tagFor(rv)}>
            `)}
    </template>
`,styles:(e,t)=>Xh`
    ${wf("grid")} :host {
      contain: layout;
      overflow: visible;
      font-family: ${Ha};
      outline: none;
      box-sizing: border-box;
      height: calc(${vg} * 1px);
      grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      margin: 0 calc(${_a} * 1px);
      white-space: nowrap;
      color: ${Yl};
      fill: currentcolor;
      cursor: pointer;
      font-size: ${Ba};
      line-height: ${Ga};
      border-radius: calc(${Ma} * 1px);
      border: calc(${Fa} * 1px) solid transparent;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(42px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto) minmax(42px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${gg}) {
      border: calc(${Fa} * 1px) solid ${zl};
      box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${zl};
    }

    :host(:hover) {
      background: ${Pl};
    }

    :host([aria-checked='true']),
    :host(:active),
    :host(.expanded) {
      background: ${wl};
      color: ${Yl};
    }

    :host([disabled]) {
      cursor: ${Gg};
      opacity: ${Pa};
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
      fill: currentcolor;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    ::slotted(svg) {
      ${""} width: 16px;
      height: 16px;
      display: flex;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
      fill: ${Yl};
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(42px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
      margin-inline-end: 10px;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      outline: none;
      margin-inline-start: 10px;
    }

    :host .checkbox {
      border-radius: calc(${Ma} * 1px);
    }

    :host .radio {
      border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    ::slotted([slot='checkbox-indicator']),
    ::slotted([slot='radio-indicator']) {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${Xl};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']) {
      width: 100%;
      height: 100%;
      display: block;
      fill: ${Yl};
      pointer-events: none;
    }

    :host([aria-checked='true']) .radio-indicator {
      display: block;
      pointer-events: none;
    }

    :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
      display: block;
      pointer-events: none;
    }
  `.withBehaviors(Of(Xh`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          color: ${Rf.ButtonText};
          fill: ${Rf.ButtonText};
        }
        :host(:hover) {
          background: ${Rf.Highlight};
          color: ${Rf.HighlightText};
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg) {
          fill: ${Rf.HighlightText};
        }

        :host(.expanded) {
          background: ${Rf.Highlight};
          border-color: ${Rf.Highlight};
          color: ${Rf.HighlightText};
        }

        :host(:${gg}) {
          background: ${Rf.Highlight};
          border-color: ${Rf.ButtonText};
          box-shadow: 0 0 0 calc(${Fa} * 1px) inset ${Rf.HighlightText};
          color: ${Rf.HighlightText};
          fill: currentcolor;
        }

        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg) {
          background: ${Rf.Canvas};
          color: ${Rf.GrayText};
          fill: currentcolor;
          opacity: 1;
        }

        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${Rf.ButtonText};
          background: ${Rf.HighlightText};
        }

        :host([checked='true']) .checkbox,
        :host([checked='true']) .radio {
          background: ${Rf.HighlightText};
          border-color: ${Rf.HighlightText};
        }

        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${gg}) .expanded-toggle,
            :host(:${gg}) .checkbox,
            :host(:${gg}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${gg}) .checkbox,
            :host([checked="true"]:${gg}) .radio {
          border-color: ${Rf.HighlightText};
        }

        :host([aria-checked='true']) {
          background: ${Rf.Highlight};
          color: ${Rf.HighlightText};
        }

        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${Rf.Highlight};
        }

        :host([aria-checked='true']) .radio-indicator {
          background: ${Rf.Highlight};
        }
      `)),checkboxIndicator:'\n    <svg\n        aria-hidden="true"\n        part="checkbox-indicator"\n        class="checkbox-indicator"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n        />\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg\n        viewBox="0 0 16 16"\n        xmlns="http://www.w3.org/2000/svg"\n        class="expand-collapse-glyph"\n        part="expand-collapse-glyph"\n    >\n        <path\n            d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n        />\n    </svg>\n  ',radioIndicator:'\n    <svg\n      aria-hidden="true"\n      part="radio-indicator"\n      class="radio-indicator"\n      viewBox="0 0 20 20"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n          fill-rule="evenodd"\n          clip-rule="evenodd"\n          d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n      />\n    </svg>\n  '});class sv extends Fh{}Po([Xo({mode:"boolean"})],sv.prototype,"disabled",void 0);const lv=sv.compose({baseName:"tab",template:(e,t)=>kf`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Xh`
      ${wf("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${Ha};
        font-size: ${Ba};
        font-weight: 400;
        line-height: ${Ga};
        height: calc(${vg} * 1px);
        padding: 0 calc((6 + (${_a} * 2 * ${Na})) * 1px);
        color: ${Yl};
        border-radius: calc(${Ma} * 1px);
        border: calc(${Fa} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${Yl};
      }

      :host(:${gg}) {
        outline: none;
        border: calc(${Fa} * 1px) solid ${zl};
        box-shadow: 0 0 0 calc((${Ua} - ${Fa}) * 1px) ${zl};
      }

      :host(:focus) {
        outline: none;
      }

      :host(.vertical) {
        justify-content: end;
        grid-column: 2;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${Yl};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(Of(Xh`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${Rf.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: ${Rf.Highlight};
            color: ${Rf.HighlightText};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: ${Rf.HighlightText};
            color: ${Rf.Highlight};
            fill: currentcolor;
          }
          :host(:${gg}) {
            border-color: ${Rf.ButtonText};
            box-shadow: none;
          }
        `))});const cv=class extends Fh{}.compose({baseName:"tab-panel",template:(e,t)=>kf`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Xh`
  ${wf("block")} :host {
    box-sizing: border-box;
    font-family: ${Ha};
    font-size: ${Va};
    font-weight: 400;
    line-height: ${Wa};
    padding: 0 calc((6 + (${_a} * 2 * ${Na})) * 1px);
  }
`}),uv="horizontal";class dv extends Fh{constructor(){super(...arguments),this.orientation=uv,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((i,o)=>{if("tab"===i.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(i);this.activeindicator&&this.isFocusableElement(i)&&(this.showActiveIndicator=!0);const t=this.tabIds[o],n=this.tabpanelIds[o];i.setAttribute("id",t),i.setAttribute("aria-selected",e?"true":"false"),i.setAttribute("aria-controls",n),i.addEventListener("click",this.handleTabClick),i.addEventListener("keydown",this.handleTabKeyDown),i.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=i)}i.style[e]="",i.style[t]="",i.style[n]=`${o+1}`,this.isHorizontal()?i.classList.remove("vertical"):i.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id",i),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Bf:e.preventDefault(),this.adjustBackward(e);break;case Gf:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Vf:e.preventDefault(),this.adjustBackward(e);break;case Hf:e.preventDefault(),this.adjustForward(e)}switch(e.key){case Kf:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case $f:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${Jt()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${Jt()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===uv}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-i;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=Xf(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}Po([Xo],dv.prototype,"orientation",void 0),Po([Xo],dv.prototype,"activeid",void 0),Po([Mo],dv.prototype,"tabs",void 0),Po([Mo],dv.prototype,"tabpanels",void 0),Po([Xo({mode:"boolean"})],dv.prototype,"activeindicator",void 0),Po([Mo],dv.prototype,"activeIndicatorRef",void 0),Po([Mo],dv.prototype,"showActiveIndicator",void 0),ig(dv,eg);const pv=dv.compose({baseName:"tabs",template:(e,t)=>kf`
    <template class="${e=>e.orientation}">
        ${ng(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${dg("tabs")}></slot>

            ${nv((e=>e.showActiveIndicator),kf`
                    <div
                        ${Qf("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${tg(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${dg("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Xh`
      ${wf("grid")} :host {
        box-sizing: border-box;
        font-family: ${Ha};
        font-size: ${Ba};
        line-height: ${Ga};
        color: ${Yl};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${Ma} * 1px);
        justify-self: center;
        background: ${nl};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        border-radius: calc(${Ma} * 1px);
        align-self: center;
        background: ${nl};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(Of(Xh`
          .activeIndicator,
          :host(.vertical) .activeIndicator {
            forced-color-adjust: none;
            background: ${Rf.Highlight};
          }
        `))});class hv extends Fh{}class fv extends(Lg(hv)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class gv extends fv{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Wf:case jf:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}Po([Xo({attribute:"readonly",mode:"boolean"})],gv.prototype,"readOnly",void 0),Po([Mo],gv.prototype,"defaultSlottedNodes",void 0);class vv{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&Da.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new mv(this.ltr,this.rtl,e),n=Da.getValueFor(e);Da.subscribe(t),t.attach(n),this.cache.set(e,t)}}class mv{constructor(e,t,n){this.ltr=e,this.rtl=t,this.source=n,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(e))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const yv=gv.compose({baseName:"switch",template:(e,t)=>kf`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${dg("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:(e,t)=>Xh`
    :host([hidden]) {
      display: none;
    }

    ${wf("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ha};
      margin: calc(${_a} * 1px) 0;
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Pa};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .switch,
    :host(.disabled) .switch {
      cursor: ${Gg};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(((${vg} / 2) + ${_a}) * 2px);
      height: calc(((${vg} / 2) + ${_a}) * 1px);
      background: ${xl};
      border-radius: calc(${vg} * 1px);
      border: calc(${Fa} * 1px) solid ${Bl};
    }

    :host(:enabled) .switch:hover {
      background: ${El};
      border-color: ${Gl};
      cursor: pointer;
    }

    :host(:enabled) .switch:active {
      background: ${kl};
      border-color: ${Vl};
    }

    :host(:${gg}) .switch {
      box-shadow: 0 0 0 2px ${Qs}, 0 0 0 4px ${zl};
      border-color: ${zl};
    }

    .checked-indicator {
      position: absolute;
      height: calc((${vg} - (${_a} * 5.5)) * 1px);
      width: calc((${vg} - (${_a} * 5.5)) * 1px);
      top: calc(${_a} * 1px);
      background: ${Yl};
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${Yl};
      cursor: pointer;
      font-size: ${Ba};
      line-height: ${Ga};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${Yl};
      font-size: ${Ba};
      line-height: ${Ga};
      margin-inline-end: calc(${_a} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted(*) {
      ${""} margin-inline-start: calc(${_a} * 2px + 2px);
    }

    :host([aria-checked='true']) .checked-indicator {
      background: ${ll};
    }

    :host([aria-checked='true']) .switch {
      background: ${nl};
    }

    :host([aria-checked='true']:enabled) .switch:hover {
      background: ${il};
    }

    :host([aria-checked='true']:enabled) .switch:hover .checked-indicator {
      background: ${cl};
    }

    :host([aria-checked='true']:enabled) .switch:active {
      background: ${ol};
    }

    :host([aria-checked='true']:enabled) .switch:active .checked-indicator {
      background: ${ul};
    }

    :host([aria-checked="true"]:${gg}:enabled) .switch {
      box-shadow: 0 0 0 2px ${Qs}, 0 0 0 4px ${zl};
      border-color: transparent;
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host([aria-checked='true']) .unchecked-message {
      display: none;
    }

    :host([aria-checked='true']) .checked-message {
      display: block;
    }
  `.withBehaviors(new vv(Xh`
        .checked-indicator {
          left: calc(${_a} * 1px);
        }

        :host([aria-checked='true']) .checked-indicator {
          left: calc((((${vg} / 2) + ${_a}) + ${_a}) * 1px);
        }
      `,Xh`
        .checked-indicator {
          right: calc(${_a} * 1px);
        }

        :host([aria-checked='true']) .checked-indicator {
          right: calc((((${vg} / 2) + ${_a}) + ${_a}) * 1px);
        }
      `),Of(Xh`
        .checked-indicator,
        :host(:enabled) .switch:active .checked-indicator {
          forced-color-adjust: none;
          background: ${Rf.FieldText};
        }
        .switch {
          forced-color-adjust: none;
          background: ${Rf.Field};
          border-color: ${Rf.FieldText};
        }
        :host(:enabled) .switch:hover {
          background: ${Rf.HighlightText};
          border-color: ${Rf.Highlight};
        }
        :host(.checked) .switch {
          background: ${Rf.Highlight};
          border-color: ${Rf.Highlight};
        }
        :host(.checked:enabled) .switch:hover,
        :host(:enabled) .switch:active {
          background: ${Rf.HighlightText};
          border-color: ${Rf.Highlight};
        }
        :host(.checked) .checked-indicator {
          background: ${Rf.HighlightText};
        }
        :host(.checked:enabled) .switch:hover .checked-indicator {
          background: ${Rf.Highlight};
        }
        :host(:${gg}) .switch {
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 2px ${Rf.Field}, 0 0 0 4px ${Rf.FieldText};
        }
        :host(.checked:${gg}:enabled) .switch {
          box-shadow: 0 0 0 2px ${Rf.Field}, 0 0 0 4px ${Rf.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .checked-indicator {
          background: ${Rf.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Rf.Field};
          border-color: ${Rf.GrayText};
        }
        .status-message,
        .label {
          color: ${Rf.FieldText};
        }
      `)),switch:'\n    <span class="checked-indicator" part="checked-indicator"></span>\n  '});class Cv extends Fh{}class Sv extends(Mg(Cv)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const bv="text";class Tv extends Sv{constructor(){super(...arguments),this.type=bv}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&yi.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}Po([Xo({attribute:"readonly",mode:"boolean"})],Tv.prototype,"readOnly",void 0),Po([Xo({mode:"boolean"})],Tv.prototype,"autofocus",void 0),Po([Xo],Tv.prototype,"placeholder",void 0),Po([Xo],Tv.prototype,"type",void 0),Po([Xo],Tv.prototype,"list",void 0),Po([Xo({converter:Yo})],Tv.prototype,"maxlength",void 0),Po([Xo({converter:Yo})],Tv.prototype,"minlength",void 0),Po([Xo],Tv.prototype,"pattern",void 0),Po([Xo({converter:Yo})],Tv.prototype,"size",void 0),Po([Xo({mode:"boolean"})],Tv.prototype,"spellcheck",void 0),Po([Mo],Tv.prototype,"defaultSlottedNodes",void 0);class xv{}function Ev(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}ig(xv,yg),ig(Tv,eg,xv);const kv=(e,t)=>Xh`
    :host([appearance='filled']) .root {
      background: ${Cl};
      border-color: transparent;
    }

    :host([appearance='filled']:hover:not(.disabled)) .root {
      background: ${Sl};
      border-color: transparent;
    }

    :host([appearance='filled']:focus-within:not(.disabled)) .root {
      border-color: transparent;
      box-shadow: none;
    }
    ${Xh`
  :host([appearance='filled']:not(.disabled):active)::after,
  :host([appearance='filled']:not(.disabled):focus-within:not(:active))::after {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: calc(${Ua} * 1px) solid ${nl};
    border-bottom-left-radius: calc(${Ma} * 1px);
    border-bottom-right-radius: calc(${Ma} * 1px);
    z-index: 2;
    transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
  }

  :host([appearance='filled']:not(.disabled):active)::after {
    left: 50%;
    width: 40%;
    transform: translateX(-50%);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host([appearance='filled']:not(.disabled):focus-within:not(:active))::after {
    left: 0;
    width: 100%;
  }
`}
  `.withBehaviors(Of(Xh`
        :host([appearance='filled']) .root {
          background: ${Rf.Field};
          border-color: ${Rf.FieldText};
        }
        :host([appearance='filled']:hover:not([disabled])) .root,
        :host([appearance='filled']:focus-within:not([disabled])) .root {
          background: ${Rf.Field};
          border-color: ${Rf.FieldText};
        }
        :host([appearance='filled']:active:not([disabled])) .root {
          background: ${Rf.Field};
          border-color: ${Rf.FieldText};
        }
        :host([appearance='filled']:not([disabled]):active)::after,
        :host([appearance='filled']:not([disabled]):focus-within:not(:active))::after {
          border-bottom-color: ${Rf.Highlight};
        }
        :host([appearance='filled'][disabled]) .root {
          border-color: ${Rf.GrayText};
          background: ${Rf.Field};
        }
      `));class Av extends Tv{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Yh([Xo],Av.prototype,"appearance",void 0);const Iv=Av.compose({baseName:"text-field",baseClass:Tv,template:(e,t)=>kf`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${dg({property:"defaultSlottedNodes",filter:Ev})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ng(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Qf("control")}
            />
            ${tg(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("inline-block")} :host {
      font-family: ${Ha};
      outline: none;
      user-select: none;
      position: relative;
    }

    .root {
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: row;
      color: ${Yl};
      background: ${xl};
      border-radius: calc(${Ma} * 1px);
      border: calc(${Fa} * 1px) solid ${_l};
      height: calc(${vg} * 1px);
    }

    .control {
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      width: 100%;
      margin-top: auto;
      margin-bottom: auto;
      border: none;
      padding: 0 calc(${_a} * 2px + 1px);
      color: ${Yl};
      font-family: inherit;
      font-size: ${Ba};
      line-height: ${Ga};
    }

    .control:hover,
    .control:${gg},
    .control:disabled,
    .control:active {
      outline: none;
    }

    .label {
      display: block;
      color: ${Yl};
      cursor: pointer;
      font-size: ${Ba};
      line-height: ${Ga};
      margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
      fill: currentcolor;
    }

    ::slotted(svg) {
      ${""} width: 16px;
      height: 16px;
    }

    .start {
      margin-inline-start: 11px;
    }

    .end {
      margin-inline-end: 11px;
    }

    :host(:hover:not(.disabled)) .root {
      background: ${El};
      border-color: ${Ml};
    }

    :host(:focus-within:not(.disabled)) .root {
      border-color: ${zl};
      box-shadow: 0 0 0 1px ${zl} inset;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Gg};
    }

    :host(.disabled) {
      opacity: ${Pa};
    }
  `.withBehaviors(Og("filled",kv()),Of(Xh`
        .root {
          forced-color-adjust: none;
          background: ${Rf.Field};
          border-color: ${Rf.FieldText};
        }
        :host(:hover:not(.disabled)) .root {
          background: ${Rf.Field};
          border-color: ${Rf.Highlight};
        }
        .start,
        .end {
          fill: ${Rf.ButtonText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .root {
          border-color: ${Rf.GrayText};
          background: ${Rf.Field};
        }
        :host(:focus-within:enabled) .root {
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 1px ${Rf.Highlight} inset;
        }
        .control {
          color: ${Rf.ButtonText};
        }
        ::placeholder,
        ::-webkit-input-placeholder {
          color: ${Rf.FieldText};
        }
        :host(.disabled) ::placeholder,
        :host(.disabled) ::-webkit-input-placeholder,
        :host([disabled]) .label {
          color: ${Rf.GrayText};
        }
      `)),shadowOptions:{delegatesFocus:!0}});class Ov extends Fh{}class Dv extends(Lg(Ov)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Pv extends Dv{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===jf)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}Po([Xo({attribute:"readonly",mode:"boolean"})],Pv.prototype,"readOnly",void 0),Po([Mo],Pv.prototype,"defaultSlottedNodes",void 0),Po([Mo],Pv.prototype,"indeterminate",void 0);const wv=Pv.compose({baseName:"checkbox",template:(e,t)=>kf`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${dg("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("inline-flex")} :host {
      align-items: center;
      outline: none;
      margin: calc(${_a} * 1px) 0;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${vg} / 2 + ${_a}) * 1px);
      height: calc((${vg} / 2 + ${_a}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${Ma} * 1px);
      border: calc(${Fa} * 1px) solid ${Bl};
      background: ${xl};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${Ha};
      color: ${Yl};
      ${""} padding-inline-start: calc(${_a} * 2px + 2px);
      margin-inline-end: calc(${_a} * 2px + 2px);
      cursor: pointer;
      font-size: ${Ba};
      line-height: ${Ga};
    }

    .checked-indicator {
      width: 100%;
      height: 100%;
      display: block;
      fill: ${Yl};
      opacity: 0;
      pointer-events: none;
    }

    .indeterminate-indicator {
      border-radius: calc((${Ma} / 2) * 1px);
      background: ${Yl};
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    :host(:enabled) .control:hover {
      background: ${El};
      border-color: ${Gl};
    }

    :host(:enabled) .control:active {
      background: ${kl};
      border-color: ${Vl};
    }

    :host(:${gg}) .control {
      box-shadow: 0 0 0 2px ${Qs}, 0 0 0 4px ${zl};
      border-color: ${zl};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Gg};
    }

    :host(.checked:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Pa};
    }
  `.withBehaviors(Of(Xh`
        .control {
          forced-color-adjust: none;
          border-color: ${Rf.FieldText};
          background: ${Rf.Field};
        }
        :host(:enabled) .control:hover,
        .control:active {
          border-color: ${Rf.Highlight};
          background: ${Rf.Field};
        }
        .checked-indicator {
          fill: ${Rf.FieldText};
        }
        .indeterminate-indicator {
          background: ${Rf.FieldText};
        }
        :host(:${gg}) .control {
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 2px ${Rf.Field}, 0 0 0 4px ${Rf.FieldText};
        }
        :host(.checked:${gg}:enabled) .control {
          box-shadow: 0 0 0 2px ${Rf.Field}, 0 0 0 4px ${Rf.FieldText};
        }
        :host(.checked) .control {
          background: ${Rf.Highlight};
          border-color: ${Rf.Highlight};
        }
        :host(.checked) .control:hover,
        .control:active {
          background: ${Rf.HighlightText};
        }
        :host(.checked) .checked-indicator {
          fill: ${Rf.HighlightText};
        }
        :host(.checked) .control:hover .checked-indicator {
          fill: ${Rf.Highlight};
        }
        :host(.checked) .indeterminate-indicator {
          background: ${Rf.HighlightText};
        }
        :host(.checked) .control:hover .indeterminate-indicator {
          background: ${Rf.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          forced-color-adjust: none;
          border-color: ${Rf.GrayText};
          background: ${Rf.Field};
        }
        :host(.disabled) .indeterminate-indicator,
        :host(.checked.disabled) .control:hover .indeterminate-indicator {
          forced-color-adjust: none;
          background: ${Rf.GrayText};
        }
        :host(.disabled) .checked-indicator,
        :host(.checked.disabled) .control:hover .checked-indicator {
          forced-color-adjust: none;
          fill: ${Rf.GrayText};
        }
      `)),checkedIndicator:'\n    <svg\n        aria-hidden="true"\n        part="checked-indicator"\n        class="checked-indicator"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            fill-rule="evenodd"\n            clip-rule="evenodd"\n            d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n        />\n    </svg>\n  ',indeterminateIndicator:'\n    <div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n  '});function Rv(e){return hg(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class Nv extends Fh{constructor(e,t,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),_o.notify(this,"value")}get value(){var e;return _o.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}Po([Mo],Nv.prototype,"checked",void 0),Po([Mo],Nv.prototype,"content",void 0),Po([Mo],Nv.prototype,"defaultSelected",void 0),Po([Xo({mode:"boolean"})],Nv.prototype,"disabled",void 0),Po([Xo({attribute:"selected",mode:"boolean"})],Nv.prototype,"selectedAttribute",void 0),Po([Mo],Nv.prototype,"selected",void 0),Po([Xo({attribute:"value",mode:"fromView"})],Nv.prototype,"initialValue",void 0);class _v{}Po([Mo],_v.prototype,"ariaChecked",void 0),Po([Mo],_v.prototype,"ariaPosInSet",void 0),Po([Mo],_v.prototype,"ariaSelected",void 0),Po([Mo],_v.prototype,"ariaSetSize",void 0),ig(_v,yg),ig(Nv,eg,_v);class Mv extends Fh{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return _o.track(this,"options"),this._options}set options(e){this._options=e,_o.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,i=e+n;let o=null;switch(n){case-1:o=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<i?t:e),o);break;case 1:o=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>i?t:e),o)}return this.options.indexOf(o)}handleChange(e,t){if("selected"===t)Mv.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Mv.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case Kf:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case Hf:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case Vf:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case $f:e.preventDefault(),this.selectLastOption();break;case Yf:return this.focusAndScrollOptionIntoView(),!0;case Wf:case zf:return!0;case jf:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),i=n>-1?n:e;return this.selectedIndex=i,void(t===i&&this.selectedIndexChanged(t,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const i=t.filter(Mv.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=_o.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=i.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Rv(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=Jt("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}Mv.slottedOptionFilter=e=>Rv(e)&&!e.hidden,Mv.TYPE_AHEAD_TIMEOUT_MS=1e3,Po([Xo({mode:"boolean"})],Mv.prototype,"disabled",void 0),Po([Mo],Mv.prototype,"selectedIndex",void 0),Po([Mo],Mv.prototype,"selectedOptions",void 0),Po([Mo],Mv.prototype,"slottedOptions",void 0),Po([Mo],Mv.prototype,"typeaheadBuffer",void 0);class Lv{}Po([Mo],Lv.prototype,"ariaActiveDescendant",void 0),Po([Mo],Lv.prototype,"ariaDisabled",void 0),Po([Mo],Lv.prototype,"ariaExpanded",void 0),Po([Mo],Lv.prototype,"ariaMultiSelectable",void 0),ig(Lv,yg),ig(Mv,Lv);class Fv extends Mv{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,i;this.ariaActiveDescendant=null!==(i=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=Zf(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Zf(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=Zf(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=Zf(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case Kf:return void this.checkFirstOption(n);case Hf:return void this.checkNextOption(n);case Vf:return void this.checkPreviousOption(n);case $f:return void this.checkLastOption(n);case Yf:return this.focusAndScrollOptionIntoView(),!0;case zf:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case jf:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const i=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));i!==t&&yi.queueUpdate((()=>{this.size=i}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}Po([Mo],Fv.prototype,"activeIndex",void 0),Po([Xo({mode:"boolean"})],Fv.prototype,"multiple",void 0),Po([Xo({converter:Yo})],Fv.prototype,"size",void 0);const Uv=Mv.compose({baseName:"listbox",template:(e,t)=>kf`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        <slot
            ${dg({filter:Fv.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("inline-flex")} :host {
      background: ${js};
      border: calc(${Fa} * 1px) solid ${_l};
      border-radius: calc(${Ma} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${_a} * 1px) 0;
    }

    :host(:focus-within:not([disabled])) {
      border-color: ${zl};
      box-shadow: 0 0 0 1px ${zl} inset;
    }
  `.withBehaviors(Of(Xh`
        :host(:${gg}) ::slotted([aria-selected="true"][role="option"]) {
          background: ${Rf.Highlight};
          border-color: ${Rf.ButtonText};
          box-shadow: 0 0 0 calc(${Ua} * 1px) inset ${Rf.HighlightText};
          color: ${Rf.HighlightText};
          fill: currentcolor;
        }

        :host(:${gg}) ::slotted([aria-selected="true"][role="option"]) {
          background: ${Rf.Highlight};
          border-color: ${Rf.ButtonText};
          box-shadow: 0 0 0 calc(${Ua} * 1px) inset ${Rf.HighlightText};
          color: ${Rf.HighlightText};
          fill: currentcolor;
        }

        ::slotted([role='option']:not([aria-selected='true']):not([disabled]):hover) {
          forced-color-adjust: none;
          color: ${Rf.ButtonText};
          background: ${Rf.ButtonFace};
          border-color: ${Rf.Highlight};
          box-shadow: none;
        }
      `))}),Hv=Nv.compose({baseName:"option",template:(e,t)=>kf`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ng(0,t)}
        <span class="content" part="content">
            <slot ${dg("content")}></slot>
        </span>
        ${tg(0,t)}
    </template>
`,styles:(e,t)=>Xh`
    ${wf("inline-flex")} :host {
      font-family: ${Ha};
      border-radius: calc(${Ma} * 1px);
      border: calc(${Ua} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${Yl};
      cursor: pointer;
      fill: currentcolor;
      font-size: ${Ba};
      height: calc(${vg} * 1px);
      line-height: ${Ga};
      margin: 0 calc(${_a} * 1px);
      outline: none;
      overflow: hidden;
      align-items: center;
      padding: 0 calc(${_a} * 2.25px);
      user-select: none;
      white-space: nowrap;
    }

    :host(:${gg}) {
      box-shadow: 0 0 0 calc(${Ua} * 1px) inset ${$l};
      border-color: ${zl};
      background: ${rl};
      color: ${dl};
    }

    :host([aria-selected='true']) {
      background: ${nl};
      color: ${ll};
    }

    :host(:hover) {
      background: ${il};
      color: ${cl};
    }

    :host(:active) {
      background: ${ol};
      color: ${ul};
    }

    :host(:not([aria-selected='true']):hover) {
      background: ${Sl};
      color: ${Yl};
    }

    :host(:not([aria-selected='true']):active) {
      background: ${bl};
      color: ${Yl};
    }

    :host([disabled]) {
      cursor: ${Gg};
      opacity: ${Pa};
    }

    :host([disabled]:hover) {
      background-color: inherit;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted(svg) {
      ${""}
      height: calc(${_a} * 4px);
      width: calc(${_a} * 4px);
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(Of(Xh`
        :host {
          border-color: transparent;
          color: ${Rf.ButtonText};
          forced-color-adjust: none;
        }

        :host(:not([aria-selected='true']):hover),
        :host([aria-selected='true']) {
          background: ${Rf.Highlight};
          color: ${Rf.HighlightText};
        }

        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Rf.Canvas};
          color: ${Rf.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
      `))});class Bv extends Fh{}class Gv extends(Lg(Bv)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Vv extends Gv{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==jf)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}Po([Xo({attribute:"readonly",mode:"boolean"})],Vv.prototype,"readOnly",void 0),Po([Mo],Vv.prototype,"name",void 0),Po([Mo],Vv.prototype,"defaultSlottedNodes",void 0);const Wv=Vv.compose({baseName:"radio",template:(e,t)=>kf`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${dg("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("inline-flex")} :host {
      --input-size: calc((${vg} / 2) + ${_a});
      align-items: center;
      outline: none;
      margin: calc(${_a} * 1px) 0;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${Fa} * 1px) solid ${Bl};
      background: ${xl};
      outline: none;
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      font-family: ${Ha};
      color: ${Yl};
      ${""} padding-inline-start: calc(${_a} * 2px + 2px);
      margin-inline-end: calc(${_a} * 2px + 2px);
      cursor: pointer;
      font-size: ${Ba};
      line-height: ${Ga};
    }

    .control,
    .checked-indicator {
      flex-shrink: 0;
    }

    .checked-indicator {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      display: inline-block;
      background: ${Yl};
      fill: ${Yl};
      opacity: 0;
      pointer-events: none;
    }

    :host(:enabled) .control:hover {
      background: ${El};
      border-color: ${Gl};
    }

    :host(:enabled) .control:active {
      background: ${kl};
      border-color: ${Vl};
    }

    :host(:${gg}) .control {
      box-shadow: 0 0 0 2px ${Qs}, 0 0 0 4px ${zl};
      border-color: ${zl};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Gg};
    }

    :host(.checked) .checked-indicator {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Pa};
    }
  `.withBehaviors(Of(Xh`
        .control {
          forced-color-adjust: none;
          border-color: ${Rf.FieldText};
          background: ${Rf.Field};
        }
        :host(:enabled) .control:hover,
        .control:active {
          border-color: ${Rf.Highlight};
          background: ${Rf.Field};
        }
        :host(:${gg}) .control {
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 2px ${Rf.Field}, 0 0 0 4px ${Rf.FieldText};
        }
        :host(.checked:${gg}:enabled) .control {
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 2px ${Rf.Field}, 0 0 0 4px ${Rf.FieldText};
        }
        :host(.checked:enabled) .control:hover,
        .control:active {
          border-color: ${Rf.Highlight};
          background: ${Rf.Highlight};
        }
        :host(.checked) .checked-indicator {
          background: ${Rf.Highlight};
          fill: ${Rf.Highlight};
        }
        :host(.checked) .control:hover .checked-indicator {
          background: ${Rf.HighlightText};
          fill: ${Rf.HighlightText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${Rf.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control:hover,
        .control:active {
          background: ${Rf.Field};
          border-color: ${Rf.GrayText};
        }
        :host(.disabled) .checked-indicator,
        :host(.checked.disabled) .control:hover .checked-indicator {
          fill: ${Rf.GrayText};
          background: ${Rf.GrayText};
        }
      `)),checkedIndicator:'\n    <div part="checked-indicator" class="checked-indicator"></div>\n  '}),zv="horizontal";class Kv extends Fh{constructor(){super(...arguments),this.orientation=zv,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach((e=>{e!==n&&e.setAttribute("tabindex","-1")})):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,i=null!==n?t.indexOf(n):0,o=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===o&&i===o||o===t.length-1&&o===i)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===Gf,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Bf,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key))this.moveRightOffGroup();else for(n===t.length&&(n=0);n<t.length&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;n>=0&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}},this.keydownHandler=e=>{const t=e.key;if(t in qf&&this.isInsideFoundationToolbar)return!0;switch(t){case Wf:this.checkFocusedRadio();break;case Gf:case Hf:this.direction===kr.ltr?this.moveRight(e):this.moveLeft(e);break;case Bf:case Vf:this.direction===kr.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Jg(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!n){const n=e[t-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}Po([Xo({attribute:"readonly",mode:"boolean"})],Kv.prototype,"readOnly",void 0),Po([Xo({attribute:"disabled",mode:"boolean"})],Kv.prototype,"disabled",void 0),Po([Xo],Kv.prototype,"name",void 0),Po([Xo],Kv.prototype,"value",void 0),Po([Xo],Kv.prototype,"orientation",void 0),Po([Mo],Kv.prototype,"childItems",void 0),Po([Mo],Kv.prototype,"slottedRadioButtons",void 0);const $v=Kv.compose({baseName:"radio-group",template:(e,t)=>kf`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===zv?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${dg({property:"slottedRadioButtons",filter:lg("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Xh`
  ${wf("flex")} :host {
    align-items: flex-start;
    margin: calc(${_a} * 1px) 0;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`});class jv extends Fh{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,i=t-e;this.percentComplete=0===i?0:Math.fround((n-e)/i*100)}}Po([Xo({converter:Yo})],jv.prototype,"value",void 0),Po([Xo({converter:Yo})],jv.prototype,"min",void 0),Po([Xo({converter:Yo})],jv.prototype,"max",void 0),Po([Xo({mode:"boolean"})],jv.prototype,"paused",void 0),Po([Mo],jv.prototype,"percentComplete",void 0);class Yv extends jv{}const qv=Yv.compose({baseName:"progress",template:(e,t)=>kf`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${nv((e=>"number"==typeof e.value),kf`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${nv((e=>"number"!=typeof e.value),kf`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:(e,t)=>Xh`
    ${wf("flex")} :host {
      align-items: center;
      outline: none;
      height: calc(${_a} * 1px);
      margin: calc(${_a} * 1px) 0;
    }

    .progress {
      background-color: ${Cl};
      border-radius: calc(${_a} * 1px);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${nl};
      border-radius: calc(${_a} * 1px);
      height: 100%;
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: 100%;
      border-radius: calc(${_a} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${nl};
      border-radius: calc(${_a} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${nl};
      border-radius: calc(${_a} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation-play-state: paused;
      background-color: ${Cl};
    }

    :host(.paused) .determinate {
      background-color: ${Xl};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(Of(Xh`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate {
          forced-color-adjust: none;
          background-color: ${Rf.FieldText};
        }
        .progress {
          background-color: ${Rf.Field};
          border: calc(${Fa} * 1px) solid ${Rf.FieldText};
        }
        :host(.paused) .indeterminate-indicator-1,
        .indeterminate-indicator-2 {
          background-color: ${Rf.Field};
        }
        :host(.paused) .determinate {
          background-color: ${Rf.GrayText};
        }
      `)),indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  '});const Xv=class extends jv{}.compose({baseName:"progress-ring",template:(e,t)=>kf`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${nv((e=>"number"==typeof e.value),kf`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${nv((e=>"number"!=typeof e.value),kf`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Xh`
      ${wf("flex")} :host {
        align-items: center;
        outline: none;
        height: calc(${vg} * 1px);
        width: calc(${vg} * 1px);
        margin: calc(${vg} * 1px) 0;
      }

      .progress {
        height: 100%;
        width: 100%;
      }

      .background {
        stroke: ${Cl};
        fill: none;
        stroke-width: 2px;
      }

      .determinate {
        stroke: ${nl};
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
      }

      .indeterminate-indicator-1 {
        stroke: ${nl};
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
        animation: spin-infinite 2s linear infinite;
      }

      :host(.paused) .indeterminate-indicator-1 {
        animation-play-state: paused;
        stroke: ${Cl};
      }

      :host(.paused) .determinate {
        stroke: ${Xl};
      }

      @keyframes spin-infinite {
        0% {
          stroke-dasharray: 0.01px 43.97px;
          transform: rotate(0deg);
        }
        50% {
          stroke-dasharray: 21.99px 21.99px;
          transform: rotate(450deg);
        }
        100% {
          stroke-dasharray: 0.01px 43.97px;
          transform: rotate(1080deg);
        }
      }
    `.withBehaviors(Of(Xh`
          .indeterminate-indicator-1,
          .determinate {
            stroke: ${Rf.FieldText};
          }
          .background {
            stroke: ${Rf.Field};
          }
          :host(.paused) .indeterminate-indicator-1 {
            stroke: ${Rf.Field};
          }
          :host(.paused) .determinate {
            stroke: ${Rf.GrayText};
          }
        `)),indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),Zv="separator";class Jv extends Fh{constructor(){super(...arguments),this.role=Zv,this.orientation=zv}}Po([Xo],Jv.prototype,"role",void 0),Po([Xo],Jv.prototype,"orientation",void 0);const Qv=Jv.compose({baseName:"divider",template:(e,t)=>kf`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Xh`
    ${wf("block")} :host {
      box-sizing: content-box;
      height: 0;
      margin: calc(${_a} * 1px) 0;
      border: none;
      border-top: calc(${Fa} * 1px) solid ${Ul};
    }
  `});var em=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],tm=em.join(","),nm="undefined"==typeof Element,im=nm?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,om=!nm&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},rm=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},am=function(e){return"INPUT"===e.tagName},sm=function(e){return function(e){return am(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||om(e),i=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name));else try{t=i(e.name)}catch(e){return!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},lm=function(e){var t=e.getBoundingClientRect(),n=t.width,i=t.height;return 0===n&&0===i},cm=function(e,t){return!(t.disabled||function(e){return am(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,i=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=im.call(e,"details>summary:first-of-type")?e.parentElement:e;if(im.call(o,"details:not([open]) *"))return!0;var r=om(e).host,a=(null==r?void 0:r.ownerDocument.contains(r))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return lm(e)}else{if("function"==typeof i){for(var s=e;e;){var l=e.parentElement,c=om(e);if(l&&!l.shadowRoot&&!0===i(l))return lm(e);e=e.assignedSlot?e.assignedSlot:l||c===e.ownerDocument?l:c.host}e=s}if(a)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var i=t.children.item(n);if("LEGEND"===i.tagName)return!!im.call(t,"fieldset[disabled] *")||!i.contains(e)}return!0}t=t.parentElement}return!1}(t))},um=function(e,t){return!(sm(t)||rm(t)<0||!cm(e,t))},dm=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==im.call(e,tm)&&um(t,e)};class pm extends Fh{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case zf:this.dismiss(),e.preventDefault();break;case Yf:this.handleTabKeyDown(e)}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;const t=this.getTabQueueBounds();return 0!==t.length?1===t.length?(t[0].focus(),void e.preventDefault()):void(e.shiftKey&&e.target===t[0]?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||e.target!==t[t.length-1]||(t[0].focus(),e.preventDefault())):void 0},this.getTabQueueBounds=()=>pm.reduceTabbableItems([],this),this.focusFirstElement=()=>{const e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{const t=void 0===e?this.shouldTrapFocus():e;t&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),yi.queueUpdate((()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()}))):!t&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=_o.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,t){if("hidden"===t)this.updateTrapFocus()}static reduceTabbableItems(e,t){return"-1"===t.getAttribute("tabindex")?e:dm(t)||pm.isFocusableFastElement(t)&&pm.hasTabbableShadow(t)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(pm.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var t,n;return!!(null===(n=null===(t=e.$fastController)||void 0===t?void 0:t.definition.shadowOptions)||void 0===n?void 0:n.delegatesFocus)}static hasTabbableShadow(e){var t,n;return Array.from(null!==(n=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelectorAll("*"))&&void 0!==n?n:[]).some((e=>dm(e)))}}Po([Xo({mode:"boolean"})],pm.prototype,"modal",void 0),Po([Xo({mode:"boolean"})],pm.prototype,"hidden",void 0),Po([Xo({attribute:"trap-focus",mode:"boolean"})],pm.prototype,"trapFocus",void 0),Po([Xo({attribute:"aria-describedby"})],pm.prototype,"ariaDescribedby",void 0),Po([Xo({attribute:"aria-labelledby"})],pm.prototype,"ariaLabelledby",void 0),Po([Xo({attribute:"aria-label"})],pm.prototype,"ariaLabel",void 0);const hm=pm.compose({baseName:"dialog",template:(e,t)=>kf`
    <div class="positioning-region" part="positioning-region">
        ${nv((e=>e.modal),kf`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${Qf("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:(e,t)=>Xh`
  :host([hidden]) {
    display: none;
  }

  :host {
    --elevation: 14;
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    ${Kg}
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${La} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${Qs};
    z-index: 1;
    border: calc(${Fa} * 1px) solid transparent;
  }
`});class fm extends Fv{}class gm extends(Mg(fm)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const vm="above",mm="below";class ym extends gm{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Jt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void yi.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return _o.track(this,"value"),this._value}set value(e){var t,n,i,o,r,a,s;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(i=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==i?i:null,c=null!==(r=null===(o=this._options[t])||void 0===o?void 0:o.value)&&void 0!==r?r:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(s=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==s?s:e}l!==e&&(this._value=e,super.valueChanged(l,e),_o.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?vm:mm,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===vm?~~e.top:~~t}get displayValue(){var e,t;return _o.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{_o.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{_o.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const i=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);i&&(i.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(Mv.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case jf:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case Kf:case $f:e.preventDefault();break;case Wf:e.preventDefault(),this.open=!this.open;break;case zf:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case Yf:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Hf||t===Vf)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&_o.notify(this,"displayValue")}}Po([Xo({attribute:"open",mode:"boolean"})],ym.prototype,"open",void 0),Po([Lo],ym.prototype,"collapsible",null),Po([Mo],ym.prototype,"control",void 0),Po([Xo({attribute:"position"})],ym.prototype,"positionAttribute",void 0),Po([Mo],ym.prototype,"position",void 0),Po([Mo],ym.prototype,"maxHeight",void 0);class Cm{}Po([Mo],Cm.prototype,"ariaControls",void 0),ig(Cm,Lv),ig(ym,eg,Cm);class Sm extends ym{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}Yh([Xo({mode:"fromView"})],Sm.prototype,"appearance",void 0);const bm=Sm.compose({baseName:"select",baseClass:ym,template:(e,t)=>kf`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${nv((e=>e.collapsible),kf`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${Qf("control")}
                >
                    ${ng(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${tg(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${Qf("listbox")}
        >
            <slot
                ${dg({filter:Mv.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Xh`
    ${wf("inline-flex")} :host {
      --elevation: 14;
      background: ${xl};
      border-radius: calc(${Ma} * 1px);
      border: calc(${Fa} * 1px) solid ${_l};
      box-sizing: border-box;
      color: ${Yl};
      font-family: ${Ha};
      height: calc(${vg} * 1px);
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      ${Kg}
      background: ${js};
      border-radius: calc(${Ma} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${vg} * 1px));
      padding: calc(${_a} * 1px) 0;
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      font-size: ${Ba};
      font-family: inherit;
      min-height: 100%;
      line-height: ${Ga};
      padding: 0 calc(${_a} * 2.25px);
      width: 100%;
    }

    :host(:not([disabled]):hover) {
      background: ${El};
      border-color: ${Ml};
    }

    :host(:focus) {
      outline: none;
    }

    :host(:${gg}) {
      border-color: ${zl};
      outline: none;
      box-shadow: 0 0 0 1px inset ${zl};
    }

    :host([open]:${gg}) {
      border-color: ${_l};
      outline: none;
      box-shadow: none;
    }

    :host(:${gg}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
      box-shadow: 0 0 0 calc(${Ua} * 1px) inset ${$l};
      border-color: ${zl};
      background: ${rl};
      color: ${dl};
    }

    :host([disabled]) {
      cursor: ${Gg};
      opacity: ${Pa};
    }

    :host([disabled]) .control {
      cursor: ${Gg};
      user-select: none;
    }

    :host([disabled]:hover) {
      background: ${Dl};
      color: ${Yl};
      fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
      background: ${kl};
      border-color: ${Ll};
      border-radius: calc(${Ma} * 1px);
    }

    :host([open][position='above']) .listbox {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host([open][position='below']) .listbox {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    :host([open][position='above']) .listbox {
      border-bottom: 0;
      bottom: calc(${vg} * 1px);
    }

    :host([open][position='below']) .listbox {
      border-top: 0;
      top: calc(${vg} * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
      ${Kg}
    }

    .end {
      margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
      ${""}
      fill: currentcolor;
      height: 1em;
      min-height: calc(${_a} * 4px);
      min-width: calc(${_a} * 4px);
      width: 1em;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `.withBehaviors(Og("filled",Xh`
  :host([appearance='filled']) {
    background: ${Cl};
    border-color: transparent;
  }

  :host([appearance='filled']:hover:not([disabled])) {
    background: ${Sl};
    border-color: transparent;
  }

  :host([appearance="filled"]:${gg}) {
    border-color: ${zl};
  }
`),Of(Xh`
        :host([disabled]) {
          border-color: ${Rf.GrayText};
          background-color: ${Rf.ButtonFace};
          color: ${Rf.GrayText};
          opacity: 1;
          forced-color-adjust: none;
        }

        :host([disabled]:hover) {
          background: ${Rf.ButtonFace};
        }

        :host([disabled]) .control {
          color: ${Rf.GrayText};
          border-color: ${Rf.GrayText};
        }

        :host(:not([disabled]):hover) {
          background: ${Rf.ButtonFace};
          border-color: ${Rf.Highlight};
        }

        :host(:${gg}) {
          forced-color-adjust: none;
          background: ${Rf.ButtonFace};
          border-color: ${Rf.Highlight};
          box-shadow: 0 0 0 1px inset ${Rf.Highlight};
          color: ${Rf.ButtonText};
          fill: currentcolor;
        }

        :host([open]) .listbox {
          background: ${Rf.ButtonFace};
          border: 1px solid ${Rf.ButtonText};
        }

        :host(:${gg}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
          background: ${Rf.Highlight};
          border-color: ${Rf.ButtonText};
          box-shadow: 0 0 0 calc(${Ua} * 1px) inset ${Rf.HighlightText};
          color: ${Rf.HighlightText};
          fill: currentcolor;
        }

        ::slotted([role='option']:not([aria-selected='true']):not([disabled]):hover) {
          forced-color-adjust: none;
          color: ${Rf.ButtonText};
          background: ${Rf.ButtonFace};
          border-color: ${Rf.Highlight};
          box-shadow: none;
        }
      `)),indicator:'\n    <svg\n        class="select-indicator"\n        part="select-indicator"\n        viewBox="0 0 12 7"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path\n            d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n        />\n    </svg>\n  '}),Tm=rv.compose({baseName:"anchored-region",template:(e,t)=>kf`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${nv((e=>e.initialLayoutComplete),kf`
                <slot></slot>
            `)}
    </template>
`,styles:(e,t)=>Xh`
  :host {
    contain: layout;
    display: block;
  }
`}),xm="top",Em="right",km="bottom",Am="left",Im="start",Om="end",Dm="top-left",Pm="top-right",wm="bottom-left",Rm="bottom-right",Nm="top-start",_m="top-end",Mm="bottom-start",Lm="bottom-end";class Fm extends Fh{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=kr.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout((()=>{this.updateTooltipVisibility()}),60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{this.isAnchorHoveredFocused||(this.delay>1?null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout((()=>{this.startHover()}),this.delay)):this.startHover())},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible&&e.key===zf)this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss")},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Jg(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),yi.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!==this.region&&void 0!==this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(null!=e&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),null!==this.anchorElement&&void 0!==this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach((t=>{t.id===e&&this.startShowDelayTimer()}))}null!==this.region&&void 0!==this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!==this.region&&void 0!==this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case xm:case km:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case Em:case Am:case Im:case Om:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case Dm:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case Pm:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case wm:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case Rm:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case Nm:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case _m:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case Mm:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case Lm:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}Po([Xo({mode:"boolean"})],Fm.prototype,"visible",void 0),Po([Xo],Fm.prototype,"anchor",void 0),Po([Xo],Fm.prototype,"delay",void 0),Po([Xo],Fm.prototype,"position",void 0),Po([Xo({attribute:"auto-update-mode"})],Fm.prototype,"autoUpdateMode",void 0),Po([Xo({attribute:"horizontal-viewport-lock"})],Fm.prototype,"horizontalViewportLock",void 0),Po([Xo({attribute:"vertical-viewport-lock"})],Fm.prototype,"verticalViewportLock",void 0),Po([Mo],Fm.prototype,"anchorElement",void 0),Po([Mo],Fm.prototype,"viewportElement",void 0),Po([Mo],Fm.prototype,"verticalPositioningMode",void 0),Po([Mo],Fm.prototype,"horizontalPositioningMode",void 0),Po([Mo],Fm.prototype,"horizontalInset",void 0),Po([Mo],Fm.prototype,"verticalInset",void 0),Po([Mo],Fm.prototype,"horizontalScaling",void 0),Po([Mo],Fm.prototype,"verticalScaling",void 0),Po([Mo],Fm.prototype,"verticalDefaultPosition",void 0),Po([Mo],Fm.prototype,"horizontalDefaultPosition",void 0),Po([Mo],Fm.prototype,"tooltipVisible",void 0),Po([Mo],Fm.prototype,"currentDirection",void 0);const Um=class extends Fm{connectedCallback(){super.connectedCallback();const e=Al.getValueFor(this),t=Qs.getValueFor(this.parentElement);Qs.setValueFor(this,(n=>e.evaluate(n,t).rest))}}.compose({baseName:"tooltip",baseClass:Fm,template:(e,t)=>kf`
        ${nv((e=>e.tooltipVisible),kf`
            <${e.tagFor(rv)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${Qf("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${e.tagFor(rv)}>
        `)}
    `,styles:(e,t)=>Xh`
    :host {
      --elevation: 11;
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${Ma} * 1px);
      border: calc(${Fa} * 1px) solid transparent;
      background: ${Qs};
      color: ${Yl};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      font-family: ${Ha};
      font-size: ${Ba};
      line-height: ${Ga};
      white-space: nowrap;
      ${Kg}
    }

    fluent-anchored-region {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    fluent-anchored-region.right,
    fluent-anchored-region.left {
      flex-direction: column;
    }

    fluent-anchored-region.top .tooltip::after,
    fluent-anchored-region.bottom .tooltip::after,
    fluent-anchored-region.left .tooltip::after,
    fluent-anchored-region.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${Qs};
      border-radius: calc(${Ma} * 1px);
      position: absolute;
    }

    fluent-anchored-region.top .tooltip::after {
      transform: rotate(45deg) translateX(-50%);
      bottom: 4px;
      left: 50%;
    }

    fluent-anchored-region.top .tooltip {
      margin-bottom: 12px;
    }

    fluent-anchored-region.bottom .tooltip::after {
      transform: rotate(45deg) translateX(-50%);
      top: 12px;
      left: 50%;
    }

    fluent-anchored-region.bottom .tooltip {
      margin-top: 12px;
    }

    fluent-anchored-region.left .tooltip::after {
      transform: rotate(45deg) translateY(-50%);
      top: 50%;
      right: 12px;
    }

    fluent-anchored-region.left .tooltip {
      margin-right: 12px;
    }

    fluent-anchored-region.right .tooltip::after {
      transform: rotate(45deg) translateY(-50%);
      top: 50%;
      left: 4px;
    }

    fluent-anchored-region.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(Of(Xh`
        :host([disabled]) {
          opacity: 1;
        }
        fluent-anchored-region.top .tooltip::after,
        fluent-anchored-region.bottom .tooltip::after,
        fluent-anchored-region.left .tooltip::after,
        fluent-anchored-region.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }