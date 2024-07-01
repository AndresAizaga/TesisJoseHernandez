"use strict";(self.webpackChunkblack_dashboard_pro_angular=self.webpackChunkblack_dashboard_pro_angular||[]).push([[592],{7625:function(w,M,l){l.d(M,{R:function(){return R}});var A=l(2963),v=l(8814),_=l(1120),t=l(136),h=l(5671),g=l(3144),m=l(1177);function R(u){return function(o){return o.lift(new Z(u))}}var Z=function(){function u(o){(0,h.Z)(this,u),this.notifier=o}return(0,g.Z)(u,[{key:"call",value:function(d,b){var n=new H(d),a=(0,m.ft)(this.notifier,new m.IY(n));return a&&!n.seenValue?(n.add(a),b.subscribe(n)):n}}]),u}(),H=function(u){function o(d){var b;return(0,h.Z)(this,o),b=function O(u,o,d){return o=(0,_.Z)(o),(0,A.Z)(u,(0,v.Z)()?Reflect.construct(o,d||[],(0,_.Z)(u).constructor):o.apply(u,d))}(this,o,[d]),b.seenValue=!1,b}return(0,t.Z)(o,u),(0,g.Z)(o,[{key:"notifyNext",value:function(){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),o}(m.Ds)},1793:function(w,M,l){l.d(M,{AH:function(){return u},P4:function(){return b},wW:function(){return o},y3:function(){return d}});var A=l(4942),v=l(5671),_=l(3144),t=l(540),h=l(9808);function g(n,a){if(1&n){var s=t.EpF();t.TgZ(0,"span",7),t.NdJ("click",function(r){t.CHM(s);var i=t.oxw().$implicit,c=t.oxw();return r.preventDefault(),c.removeTab(i)}),t._uU(1," \u274c"),t.qZA()}}var m=function(a){return["nav-item",a]};function O(n,a){if(1&n){var s=t.EpF();t.TgZ(0,"li",3),t.NdJ("keydown",function(i){var f=t.CHM(s).index;return t.oxw().keyNavActions(i,f)}),t.TgZ(1,"a",4),t.NdJ("click",function(){return t.CHM(s).$implicit.active=!0}),t.TgZ(2,"span",5),t._uU(3),t.qZA(),t.YNc(4,g,2,0,"span",6),t.qZA()()}if(2&n){var e=a.$implicit;t.ekj("active",e.active)("disabled",e.disabled),t.Q6J("ngClass",t.VKq(15,m,e.customClass||"")),t.xp6(1),t.ekj("active",e.active)("disabled",e.disabled),t.uIk("aria-controls",e.id?e.id:"")("aria-selected",!!e.active)("id",e.id?e.id+"-link":""),t.xp6(1),t.Q6J("ngTransclude",e.headingRef),t.xp6(1),t.Oqu(e.heading),t.xp6(1),t.Q6J("ngIf",e.removable)}}var R=["*"],Z=function(){var n=function(){function a(s){(0,v.Z)(this,a),this.viewRef=s}return(0,_.Z)(a,[{key:"ngTransclude",get:function(){return this._ngTransclude},set:function(e){this._ngTransclude=e,e&&this.viewRef.createEmbeddedView(e)}}]),a}();return n.\u0275fac=function(s){return new(s||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","ngTransclude",""]],inputs:{ngTransclude:"ngTransclude"}}),n}(),H=function(){var n=(0,_.Z)(function a(){(0,v.Z)(this,a),this.type="tabs",this.isKeysAllowed=!0,this.ariaLabel="Tabs"});return n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}(),u=function(){var n=function(){function a(s,e,r){(0,v.Z)(this,a),this.renderer=e,this.elementRef=r,this.clazz=!0,this.tabs=[],this.classMap={},this.ariaLabel="Tabs",this.isDestroyed=!1,this._vertical=!1,this._justified=!1,this._type="tabs",this._isKeysAllowed=!0,Object.assign(this,s)}return(0,_.Z)(a,[{key:"vertical",get:function(){return this._vertical},set:function(e){this._vertical=e,this.setClassMap()}},{key:"justified",get:function(){return this._justified},set:function(e){this._justified=e,this.setClassMap()}},{key:"type",get:function(){return this._type},set:function(e){this._type=e,this.setClassMap()}},{key:"isKeysAllowed",get:function(){return this._isKeysAllowed},set:function(e){this._isKeysAllowed=e}},{key:"ngOnDestroy",value:function(){this.isDestroyed=!0}},{key:"addTab",value:function(e){this.tabs.push(e),e.active=1===this.tabs.length&&!e.active}},{key:"removeTab",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{reselect:!0,emit:!0},i=this.tabs.indexOf(e);if(-1!==i&&!this.isDestroyed){if(r.reselect&&e.active&&this.hasAvailableTabs(i)){var c=this.getClosestTabIndex(i);this.tabs[c].active=!0}r.emit&&e.removed.emit(e),this.tabs.splice(i,1),e.elementRef.nativeElement.parentNode&&this.renderer.removeChild(e.elementRef.nativeElement.parentNode,e.elementRef.nativeElement)}}},{key:"keyNavActions",value:function(e,r){if(this.isKeysAllowed){var i=Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return e.preventDefault(),void i[r%i.length].click();if(39===e.keyCode||"RightArrow"===e.key){var f,p=1;do{f=i[(r+p)%i.length],p++}while(f.classList.contains("disabled"));return void f.focus()}if(37===e.keyCode||"LeftArrow"===e.key){var T,y=1,C=r;do{C-y<0?(T=i[C=i.length-1],y=0):T=i[C-y],y++}while(T.classList.contains("disabled"));return void T.focus()}if(36===e.keyCode||"Home"===e.key){e.preventDefault();var P,W=0;do{P=i[W%i.length],W++}while(P.classList.contains("disabled"));return void P.focus()}if(35===e.keyCode||"End"===e.key){e.preventDefault();var k,D=1,E=r;do{E-D<0?(k=i[E=i.length-1],D=0):k=i[E-D],D++}while(k.classList.contains("disabled"));return void k.focus()}if((46===e.keyCode||"Delete"===e.key)&&this.tabs[r].removable){if(this.removeTab(this.tabs[r]),i[r+1])return void i[(r+1)%i.length].focus();i[i.length-1]&&i[0].focus()}}}},{key:"getClosestTabIndex",value:function(e){var r=this.tabs.length;if(!r)return-1;for(var i=1;i<=r;i+=1){var c=e-i,f=e+i;if(this.tabs[c]&&!this.tabs[c].disabled)return c;if(this.tabs[f]&&!this.tabs[f].disabled)return f}return-1}},{key:"hasAvailableTabs",value:function(e){var r=this.tabs.length;if(!r)return!1;for(var i=0;i<r;i+=1)if(!this.tabs[i].disabled&&i!==e)return!0;return!1}},{key:"setClassMap",value:function(){this.classMap=(0,A.Z)({"nav-stacked":this.vertical,"flex-column":this.vertical,"nav-justified":this.justified},"nav-".concat(this.type),!0)}}]),a}();return n.\u0275fac=function(s){return new(s||n)(t.Y36(H),t.Y36(t.Qsj),t.Y36(t.SBq))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tabset"]],hostVars:2,hostBindings:function(s,e){2&s&&t.ekj("tab-container",e.clazz)},inputs:{vertical:"vertical",justified:"justified",type:"type"},ngContentSelectors:R,decls:4,vars:3,consts:[["role","tablist",1,"nav",3,"ngClass","click"],[3,"ngClass","active","disabled","keydown",4,"ngFor","ngForOf"],[1,"tab-content"],[3,"ngClass","keydown"],["href","javascript:void(0);","role","tab",1,"nav-link",3,"click"],[3,"ngTransclude"],["class","bs-remove-tab",3,"click",4,"ngIf"],[1,"bs-remove-tab",3,"click"]],template:function(s,e){1&s&&(t.F$t(),t.TgZ(0,"ul",0),t.NdJ("click",function(i){return i.preventDefault()}),t.YNc(1,O,5,17,"li",1),t.qZA(),t.TgZ(2,"div",2),t.Hsn(3),t.qZA()),2&s&&(t.Q6J("ngClass",e.classMap),t.uIk("aria-label",e.ariaLabel),t.xp6(1),t.Q6J("ngForOf",e.tabs))},directives:[h.mk,h.sg,Z,h.O5],styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]}),n}(),o=function(){var n=function(){function a(s,e,r){(0,v.Z)(this,a),this.elementRef=e,this.renderer=r,this.disabled=!1,this.removable=!1,this.selectTab=new t.vpe,this.deselect=new t.vpe,this.removed=new t.vpe,this.addClass=!0,this.role="tabpanel",this._active=!1,this._customClass="",this.tabset=s,this.tabset.addTab(this)}return(0,_.Z)(a,[{key:"customClass",get:function(){return this._customClass},set:function(e){var r=this;this.customClass&&this.customClass.split(" ").forEach(function(i){r.renderer.removeClass(r.elementRef.nativeElement,i)}),this._customClass=e?e.trim():"",this.customClass&&this.customClass.split(" ").forEach(function(i){r.renderer.addClass(r.elementRef.nativeElement,i)})}},{key:"active",get:function(){return this._active},set:function(e){var r=this;if(this._active!==e){if(this.disabled&&e||!e)return void(this._active&&!e&&(this.deselect.emit(this),this._active=e));this._active=e,this.selectTab.emit(this),this.tabset.tabs.forEach(function(i){i!==r&&(i.active=!1)})}}},{key:"ariaLabelledby",get:function(){return this.id?"".concat(this.id,"-link"):""}},{key:"ngOnInit",value:function(){this.removable=!!this.removable}},{key:"ngOnDestroy",value:function(){this.tabset.removeTab(this,{reselect:!1,emit:!1})}}]),a}();return n.\u0275fac=function(s){return new(s||n)(t.Y36(u),t.Y36(t.SBq),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["tab"],["","tab",""]],hostVars:7,hostBindings:function(s,e){2&s&&(t.uIk("id",e.id)("role",e.role)("aria-labelledby",e.ariaLabelledby),t.ekj("active",e.active)("tab-pane",e.addClass))},inputs:{heading:"heading",id:"id",disabled:"disabled",removable:"removable",customClass:"customClass",active:"active"},outputs:{selectTab:"selectTab",deselect:"deselect",removed:"removed"},exportAs:["tab"]}),n}(),d=function(){var n=(0,_.Z)(function a(s,e){(0,v.Z)(this,a),e.headingRef=s});return n.\u0275fac=function(s){return new(s||n)(t.Y36(t.Rgc),t.Y36(o))},n.\u0275dir=t.lG2({type:n,selectors:[["","tabHeading",""]]}),n}(),b=function(){var n=function(){function a(){(0,v.Z)(this,a)}return(0,_.Z)(a,null,[{key:"forRoot",value:function(){return{ngModule:a,providers:[]}}}]),a}();return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.ez]]}),n}()}}]);