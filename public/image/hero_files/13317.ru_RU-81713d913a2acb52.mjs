"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[13317],{653286:(e,t,r)=>{r.d(t,{H:()=>o});var s=r(573810);let n="business.referral.referral_code",i="business.referral.offer_status",a="claimed",o={setData:({referralCode:e})=>{(0,s.Nh)(n,e)},getData:()=>(0,s.qn)(n),setSenderOfferClaimed:()=>{(0,s.Nh)(i,a)},resetStatus:()=>{(0,s.L_)(n)},shouldClaimReferral:()=>null!==(0,s.qn)(n)&&(0,s.qn)(i)!==a}},743079:(e,t,r)=>{r.d(t,{DW:()=>i,I:()=>n,oo:()=>s,zI:()=>a});let s=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},n=.18,i=(e,t,r)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(r/255)**2.2,a=e=>{let t=e.replace("#",""),r=parseInt(t.substr(0,2),16);return(299*r+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3<155}},847160:(e,t,r)=>{r.d(t,{Bx:()=>n,N4:()=>a,is:()=>o,lt:()=>s,oM:()=>i});let s=e=>e.bt("Последний шаг! Войдите в Pinterest, чтобы получить доступ ко всем ресурсам.", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),n=e=>e.bt("Войдите, чтобы сохранить пин", "Log in to save this Pin", "limitedLogin.modalHeader.repin", undefined, true),i=e=>e.bt("Войдите, чтобы редактировать пин", "Log in to edit this Pin", "limitedLogin.modalHeader.editPin", undefined, true),a=({i18n:e,toFollow:t})=>t?e.bt("Войдите, чтобы подписаться", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Войдите, чтобы отписаться", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true),o=e=>e.bt("Войдите, чтобы создать пин или доску", "Log in to create a Pin or board", "limitedLogin.modalHeader.create", undefined, true)},515278:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(847160),n=r(140017),i=r(166770);let a=()=>{let{loginForMore:e,viewer:t,limitedLoginModalSubheader:r}=(0,i.H)(),a=(0,n.ZP)();return"AUTH"===t.type?null:t=>{e?.setVisible(!0),r?.setText(t?.loginModalHeader||s.lt(a))}}},200201:(e,t,r)=>{r.d(t,{_:()=>l,a:()=>d});var s=r(667294),n=r(545007),i=r(105737),a=r(25919),o=r(5859);let l=({extraContext:e,id:t,shouldUsePlacedExperience:r=!0})=>{let l=(0,s.useRef)(),d=(0,n.I0)(),{isBot:c}=(0,o.B)(),_=(0,n.v9)(e=>e.experiences[t]);return(0,s.useEffect)(()=>{d((0,a.kd)(t))},[d,_,t]),(0,s.useEffect)(()=>{r||(0,i.ZP)(l.current,e)||(d((0,a.pz)([t],c,e)),l.current=e)},[d,e,c,t,r]),_},d=e=>(l(e),(0,n.v9)(t=>t.experiencesMulti[e.id]))},891162:(e,t,r)=>{r.d(t,{Q6:()=>c,ZP:()=>o,qe:()=>l,yU:()=>d});var s=r(520893);let n=(e,t)=>e.length===t.length&&e.every((e,r)=>e===t[r]),i=e=>e;function a(e,t=n,r=i){return function(s){let n=[];return function(...i){let a=n.find(e=>t(e.args,r(i)));if(a)return a.result;let o=s(...i);return n.push({args:r(i),result:o}),e&&n.length>e&&n.shift(),o}}}let o=a(),l=a(1),d=a(void 0,n,e=>[JSON.stringify(e)]),c=a(0,(e,t)=>e.length===t.length&&e.every((e,r)=>(0,s.Z)(e,t[r])))},251843:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(883119),n=r(785893);function i({accessibilityLabel:e}){return(0,n.jsx)(s.kC,{alignItems:"center",justifyContent:"center",children:(0,n.jsx)(s.$j,{accessibilityLabel:e,show:!0})})}},447479:(e,t,r)=>{r.d(t,{i:()=>s});let s={AC:"ac",AUTOCOMPLETE:"autocomplete",BOARD:"blp",CONTENT_TYPE_FILTER:"content_type_filter",DIRECT_NAVIGATION:"direct_navigation",FILTER:"filter",GUIDED_SEARCH_ENTRY:"guided_search_entry",GUIDED_SEARCH_LANDING:"guided_search_landing",HASHTAG_CLOSEUP:"hashtag_closeup",HASHTAG_PINREP:"hashtag_pinrep",HOMEFEED_BUBBLE:"homefeed_bubble",HUB_PAGE:"hub_page",IDEAS_ROOT:"ideas_root",IMAGE_ONLY_ATTRIBUTION:"image_only_attribution",LANDING_PAGE_STORY:"landing_page_story",NO_RESULTS_SEARCH_STORY:"no_results_search_story",PRODUCT:"product",REMOVE:"remove",RS:"rs",SHOPPING_FILTER:"shopping_filter",SITELINKS_SEARCHBOX:"sitelinks_searchbox",SLP_REC_CURATED:"slp_rec_curated",SLP_REC_TRENDING:"slp_rec_trending",SRS:"srs",STRUCTURED_GUIDE:"structured_guide",TRENDING:"trending",TYPED:"typed",TYPO_AUTO_ORIGINAL:"typo_auto_original",TYPO_SUGGESTION:"typo_suggestion",UNKNOWN:"Unknown",VANILLA_GUIDE:"guide",URECS:"urecs",VIDEO:"video"}},460270:(e,t,r)=>{r.d(t,{Z:()=>s});let s=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},477458:(e,t,r)=>{r.d(t,{Z:()=>a,q:()=>i});var s=r(667294);let n=()=>{let[e,t]=(0,s.useState)(!1),[r,n]=(0,s.useState)(!1),[i,a]=(0,s.useState)(!1);return{active:e,focused:r,hovered:i,onBlur:()=>{n(!1),t(!1)},onFocus:()=>n(!0),onMouseDown:()=>t(!0),onMouseEnter:()=>a(!0),onMouseLeave:()=>{a(!1),t(!1)},onMouseUp:()=>t(!1)}};function i({children:e}){return e(n())}let a=n},762631:(e,t,r)=>{r.d(t,{Z:()=>s});function s({top:e,right:t,bottom:r,left:s,windowHeight:n,windowWidth:i,threshold:a=0}){return e>=0+a&&s>=0+a&&r<=n-a&&t<=i-a}},185791:(e,t,r)=>{r.d(t,{Z:()=>g});var s=r(667294),n=r(545007),i=r(616550),a=r(883119),o=r(207229),l=r(587703),d=r(920434),c=r(140017),_=r(340523),u=r(71328),p=r(149722),h=r(762631),m=r(969300),f=r(785893);let y={__style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},E={HOME:1,BOARD:2,USE_CASE:3};function g({currentTabIndex:e,tabBoards:t,useCaseTabs:r}){let g=(0,s.useRef)(null),x=(0,s.useRef)(!1),{width:b,height:S}=(0,o.Z)()||{width:0,height:0},A=(0,s.useRef)([]),I=(0,i.k6)(),v=(0,c.ZP)(),P=(0,p.Z)(),{checkExperiment:T}=(0,_.F)(),R=T("m10n_measurement_pinterest_tag_us").anyEnabled,O=(0,l.Z)(),w=(0,n.I0)(),C=(e,t)=>w((0,m.r)(e,t)),N="nux_revamp_create_board"===T("ap_bmi_activation_nux_revamp_mweb_v2",{dangerouslySkipActivation:!0}).group,D=t.length+r.length;A.current.length!==D&&(A.current=Array(D).fill(null).map((e,t)=>A.current[t]||(0,s.createRef)()));let j=t.length||r.length?[{href:"/",text:(0,f.jsx)(a.xu,{children:v.bt("Все", "All", "homefeed.moreIdeasTab.homefeedTab", undefined, true)}),tabType:E.HOME},...t.filter(e=>e).map(({id:e,name:t},s)=>({href:`/?boardId=${String(e)}`,text:r.length||N?(0,f.jsx)(a.xu,{overflow:"hidden",children:t}):(0,f.jsx)(a.xu,{dangerouslySetInlineStyle:y,maxWidth:100,overflow:"hidden",children:t}),boardId:e,tabType:E.BOARD,ref:A.current[s]})),...r.filter(e=>e).map(({id:e,display_name:r},s)=>({href:`/?useCaseId=${String(e)}`,text:(0,f.jsx)(a.xu,{overflow:"hidden",children:r}),boardId:e,tabType:E.USE_CASE,ref:A.current[t.length+s]}))]:null,Z=e=>e===E.HOME?11081:11082,U=(0,s.useRef)([]),H=(0,s.useCallback)(()=>{A&&A.current.length&&A.current.forEach((e,s)=>{if(e?.current){let n=!!t[s],{id:i}=n?t[s]||{}:r[s-t.length]||{},a=n?t[s]?.name||{}:r[s-t.length]?.display_name||{},o=e.current.getBoundingClientRect();(0,h.Z)({left:o.left,right:o.right,top:o.top,bottom:o.bottom,windowHeight:S,windowWidth:b})&&i&&!U.current.includes(i)&&(O({event_type:13,view_type:1,view_parameter:92,component:13184,element:n?Z(E.BOARD):15945,object_id_str:i,aux_data:n?{board_id:i,tab_title:a,referrer:19}:{use_case_id:i,tab_title:a,index:s}}),U.current.push(i))}})},[A,O,t,r,S,b]),L=(0,d.Z)(()=>{O({event_type:110,view_type:1,view_parameter:92,component:13184,element:15945})},1e3),M=(0,u.Z)(()=>{H(),r.length&&L()},50);(0,s.useEffect)(()=>{H();let e=g.current;return e&&e.addEventListener("scroll",M),()=>{e?.removeEventListener("scroll",M)}},[H,M]),(0,s.useEffect)(()=>(P.isAuth&&R&&window.pintrk&&window.pintrk("track","pagevisit",{lead_type:"Pinterest mobile homefeed",em:P.email}),()=>{x.current&&(window.cancelAnimationFrame(x.current),x.current=null)}));let F=e=>{let t=j?.[e];if(t){let r=t.tabType===E.USE_CASE,n=r&&(0,s.isValidElement)(t.text)?t.text.props.children:null;C(t.boardId,e),O({event_type:101,view_type:1,view_parameter:92,component:13184,element:r?15945:Z(t.tabType),aux_data:r?{use_case_id:t.boardId,tab_title:n,index:e}:{index:e.toString(),board_id:t.boardId,referrer:19},object_id_str:t.boardId})}},k=e=>j?{pathname:(j[e]||j[0]).href,state:(j[e]||j[0]).locationState||void 0}:{};if(!j)return null;let B=j.map(e=>({href:e.href,text:e.text,ref:e.ref}));return(0,f.jsx)(a.xu,{ref:g,"data-test-id":"more-ideas-tabs",fit:!0,marginBottom:1,marginTop:1,overflow:"scrollX",children:(0,f.jsx)(a.mQ,{activeTabIndex:e,onChange:({activeTabIndex:e})=>{F(e);let{pathname:t,state:r}=k(e);I.push(t,r)},tabs:B})})}},490166:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(883119),n=r(785893);function i({children:e,onMouseEnter:t,onMouseLeave:r,onTouch:i,rounding:a,fullWidth:o=!1,pressState:l="none",accessibilityLabel:d,role:c,dataTestId:_}){let u=(Array.isArray(l)?l:[l]).includes("compress");return(0,n.jsx)(s.iP,{accessibilityLabel:d,dataTestId:_,fullWidth:o,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:r&&(({event:e})=>r(e)),onTap:i&&(({event:e})=>i(e)),role:c,rounding:a,tapStyle:u?"compress":"none",children:e})}},180338:(e,t,r)=>{r.d(t,{H:()=>s,W:()=>n});let{Provider:s,useMaybeHook:n}=(0,r(342513).Z)("PinCreateDeleteContext")},563322:(e,t,r)=>{r.d(t,{ET:()=>o,UQ:()=>l,dv:()=>d,xZ:()=>_,yh:()=>u});var s,n=r(667294),i=r(342513),a=r(785893);let o={NONE:"NONE",GROUP:"GROUP",SECRET:"SECRET",ARCHIVED:"ARCHIVED"},l={NONE:0,ARCHIVED:1,GROUP:2,SECRET:3},d=((s={}).COLORS="COLORS",s.CREATED_BY_ME="CREATED_BY_ME",s.FAVORITED="FAVORITED",s.FAVORITED_AND_CREATED="FAVORITED_AND_CREATED_BY_ME",s.INTERESTS="INTERESTS",s.NONE="",s),{Provider:c,useMaybeHook:_}=(0,i.Z)("ProfileViewContext");function u({children:e}){let[t,r]=(0,n.useState)(),[s,i]=(0,n.useState)(new Map),[o,l]=(0,n.useState)(),[_,u]=(0,n.useState)(),[p,h]=(0,n.useState)(d.NONE),[m,f]=(0,n.useState)(0),[y,E]=(0,n.useState)(),g=(0,n.useCallback)((e,t)=>{i(new Map(s.set(e,t)))},[s]),x=(0,n.useMemo)(()=>({boardPinDensity:t,boardSortOrder:s,profileBoardView:o,profilePinDensity:_,profileFollowingSelectedIndex:m,selfProfilePinFilter:p,setBoardPinDensity:r,setSelfProfilePinFilter:h,updateBoardSortOrder:g,selfProfileBoardFilter:y,setSelfProfileBoardFilter:E,setProfileBoardView:l,setProfilePinDensity:u,setProfileFollowingSelectedIndex:f}),[t,s,o,_,m,p,y,g]);return(0,a.jsx)(c,{value:x,children:e})}},923368:(e,t,r)=>{r.d(t,{Nb:()=>o,Of:()=>l,YO:()=>a,ZP:()=>_,x4:()=>c});var s=r(667294),n=r(891162),i=r(392029);let a=({showProductDetailPage:e,isLargerPane:t,showCloseupContentRight:r})=>e&&t?r?i.Uj:i.zT:1,o=(0,n.qe)(({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:r,showProductDetailPage:s,viewportSize:n,maxWidth:i,descriptionPaneWidth:a,inCommentFooterRedesignExp:o,isCloseupRelatedPinsAboveTheFoldEnabled:l,isCommentAttachmentSelectorOpen:d,isCommentThreadExpanded:c,isMediaViewerOpen:_,isPinNoteExpanded:u,isProductDetailsExpanded:p,isShoppingModuleExpanded:h,setIsCommentAttachmentSelectorOpen:m,setIsCommentThreadExpanded:f,setIsMediaViewerOpen:y,setIsPinNoteExpanded:E,setIsProductDetailsExpanded:g,setIsShoppingModuleExpanded:x,closeupWithinMasonryEnabled:b,peekCloseupEnabled:S,isInRemoveMagnifyingGlassVariant:A,setAbortNoActionPlacementTimeout:I,clientTrackingParams:v,isCloseupMediaViewerOpen:P,setIsCloseupMediaViewerOpen:T})=>({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:r,showProductDetailPage:s,viewportSize:n,maxWidth:i,descriptionPaneWidth:a,isCommentAttachmentSelectorOpen:d,inCommentFooterRedesignExp:o,isCloseupRelatedPinsAboveTheFoldEnabled:l,isCommentThreadExpanded:c,isCloseupMediaViewerOpen:P,isMediaViewerOpen:_,isPinNoteExpanded:u,isProductDetailsExpanded:p,isShoppingModuleExpanded:h,setIsCommentAttachmentSelectorOpen:m,setIsCommentThreadExpanded:f,setIsCloseupMediaViewerOpen:T,setIsMediaViewerOpen:y,setIsPinNoteExpanded:E,setIsProductDetailsExpanded:g,setIsShoppingModuleExpanded:x,closeupWithinMasonryEnabled:b,peekCloseupEnabled:S,isInRemoveMagnifyingGlassVariant:A,setAbortNoActionPlacementTimeout:I,clientTrackingParams:v})),l={showCloseupContentRight:!0,showProductDetailPage:!1,viewportSize:"lg",paneWidth:i.Gg,pdpCarouselSlotToPaneRatio:1,maxWidth:i.u6,descriptionPaneWidth:i.u6-i.Gg,inCommentFooterRedesignExp:!1,isCloseupRelatedPinsAboveTheFoldEnabled:!1,isCommentAttachmentSelectorOpen:!1,isCommentThreadExpanded:!1,isCloseupMediaViewerOpen:!1,isMediaViewerOpen:!1,isPinNoteExpanded:!1,isShoppingModuleExpanded:!1,closeupWithinMasonryEnabled:!1,peekCloseupEnabled:!1,isInRemoveMagnifyingGlassVariant:!1,setAbortNoActionPlacementTimeout:()=>{},setIsCloseupMediaViewerOpen:()=>{},setIsCommentAttachmentSelectorOpen:()=>{},setIsMediaViewerOpen:()=>{},setIsShoppingModuleExpanded:()=>{}},d=(0,s.createContext)(l);function c(){let e=(0,s.useContext)(d);if(!e)throw Error("useCloseupContext must be used within CloseupContextProvider");return e}let _=d},392029:(e,t,r)=>{r.d(t,{$T:()=>E,CI:()=>a,Ch:()=>l,ER:()=>y,Gb:()=>d,Gg:()=>n,Hf:()=>b,Ie:()=>p,KP:()=>h,Kn:()=>o,O5:()=>g,Uj:()=>c,bx:()=>m,d2:()=>u,g9:()=>f,iB:()=>S,rv:()=>x,u6:()=>i,zT:()=>_});var s=r(883119);let n=508,i=1016,a=488,o=992,l=672,d=1176,c=.6,_=.84,u=40,p=72,h=740,m=912,f=32,y=16,E=24,g=2,x=1,b=new s.Ry(5),S={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}},407053:(e,t,r)=>{r.d(t,{AA:()=>i,E9:()=>f,EU:()=>g,IO:()=>E,KH:()=>c,Lg:()=>u,QR:()=>d,Uw:()=>n,ZR:()=>x,dx:()=>p,dy:()=>l,eV:()=>h,fo:()=>m,k7:()=>a,rT:()=>y,tz:()=>_,u9:()=>b,zR:()=>o,zu:()=>s});let s="OPEN_UNAUTH",n="openUnauthType",i="_isAfterLogin",a="_lastVisitedPages",o="_lastVisitedPagesBeforeLogin",l="_lastVisitedBoardPages",d="_lastVisitedPagesBeforeNavPage",c="_lastVisitedSessionPages",_="_unauthVisitedPages",u="_inviteCodeRedemption",p="_inviteCodeRedemptionList",h="_paidTrafficLand",m="_unauthReferrerString",f="unauthTopicsFollowed",y=["US","CA","NZ","AU"],E=new Set(["GB","IE"]),g=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),x=new Set(["BR","MX","AR","CL","CO","PE"]),b="ad_img"},844998:(e,t,r)=>{r.d(t,{E:()=>a,S:()=>o});var s=r(667294),n=r(191313);let i="_loggingInNotHome",a=e=>{e?(0,n.Nh)(i,1):(0,n.L_)(i)},o=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),e&&(0,n.qn)(i)}},932942:(e,t,r)=>{r.r(t),r.d(t,{HomePage:()=>eF,default:()=>ez});var s=r(667294),n=r(545007),i=r(616550),a=r(240684),o=r(883119),l=r(216167),d=r(224796),c=r(324358),_=r(653286),u=r(510989),p=r(401429),h=r(150396),m=r(74916),f=r(73006),y=r(219651),E=r(810961),g=r(82531),x=r(200201),b=r(454514),S=r(140017),A=r(422210),I=r(165706),v=r(179425),P=r(11453),T=r(340523),R=r(297329),O=r(603642),w=r(438555),C=r(5859),N=r(230077),D=r(826267),j=r(757640),Z=r(608516),U=r(251843),H=r(731714),L=r(191313),M=r(573810),F=r(627408),k=r(217058),B=r(13848),z=r(624797),V=r(554786),G=r(149722),W=r(801690),Y=r(237040),q=r(989418),K=r(254292),$=r(982388),J=r(185791),Q=r(407053),X=r(464421),ee=r(844998),et=r(260218),er=r(26353),es=r(170568),en=r(19447),ei=r(137842),ea=r(953565),eo=r(118923),el=r(832853),ed=r(785893);function ec(e,t,r){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let e_=(0,a.ZP)({resolved:{},chunkName:()=>"app-www-pages-duplo-CoreActionsHeader",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(30157).then(r.bind(r,114800)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>114800}),eu=(0,a.ZP)({resolved:{},chunkName:()=>"app-www-stories-FullWidthPinStory",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(63956).then(r.bind(r,953879)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>953879}),ep=(0,a.ZP)({resolved:{},chunkName:()=>"app-www-Homefeed-HomefeedMoreIdeasTabContent",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(26451).then(r.bind(r,770356)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>770356}),eh=(0,a.ZP)({resolved:{},chunkName:()=>"app-www-Homefeed-HomefeedUseCaseTabContent",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(77591).then(r.bind(r,658740)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>658740}),em=(0,a.ZP)({resolved:{},chunkName:()=>"app-www-stories-LandingPageStory-LandingPageStory",isReady(e){let t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>r.e(44985).then(r.bind(r,575800)),requireAsync(e){let t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){return r(this.resolve(e))},resolve:()=>575800}),ef=(0,s.lazy)(()=>r.e(94189).then(r.bind(r,94189))),ey=(0,s.lazy)(()=>Promise.all([r.e(47639),r.e(24698)]).then(r.bind(r,647639))),eE=(0,s.lazy)(()=>r.e(13236).then(r.bind(r,413236))),eg=(0,s.lazy)(()=>r.e(94629).then(r.bind(r,994629))),ex=(0,s.lazy)(()=>r.e(67854).then(r.bind(r,423113))),eb=(0,s.lazy)(()=>r.e(90813).then(r.bind(r,990813))),eS={feedKey:er.xJ,trafficSource:er.WV,resourceName:er.om,feedItemProps:e=>({viewParameter:92,viewType:1,onFeedItemClick:()=>{e.onFeedItemClick&&e.onFeedItemClick()}}),pullToRefresh:!0},eA=()=>({includeBackgroundImages:!0,includeVideos:!0,pins:Object.values((0,en.AF)())}),eI=()=>{let e=(0,n.I0)(),t=(0,n.v9)(({feeds:e})=>e[er.xJ]),r=(0,n.v9)(({session:e})=>e.firstHomeFeedRequestAfterNux);(0,s.useEffect)(()=>{t&&t.length>0&&r&&e((0,es.H5)(!1))},[e,t,r])},ev=()=>{let{isGraphQLEnabledInGeneral:e}=(0,Y.nF)(),{locale:t}=(0,C.B)(),r=(0,en.AF)();return({feedItems:s,prevFeedItems:n,finishedRefresh:i,unauthLandingPinStateForAuthHomefeed:{pinId:a,feedItem:o}})=>{if(!s.length)return null;if(i&&n.length>0){let e=(e,t)=>e.slice(0,t).map(e=>e.id),r=e(n,5),i=e(s,5),a={appType:"mweb",language:t&&t.slice(0,2)||"unknown",locale:t||"unknown"};(0,ea.nP)("home_product.homefeed.refresh",{sampleRate:1,tags:a}),JSON.stringify(r)===JSON.stringify(i)&&(0,ea.nP)("home_product.homefeed.refresh.no_change",{sampleRate:1,tags:a})}if(a&&!e){if(n.length>0&&n[0]!==s[0])return(0,L.L_)(Q.zR),{feedItem:null,pinId:null};if((0===n.length||n[0]===s[0]&&n.length!==s.length||!o)&&r[a]&&!s.slice(0,5).some(({id:e})=>e===a))return{feedItem:{id:a,type:"pin",trackingParams:s[0].trackingParams},pinId:a}}return null}},eP={first_page_size:"25",page_size:"10"},eT=({homefeedResourceRef:e,webMobileHomeFeedTakoverExperience:t})=>{let{feedKey:r,feedItemProps:s,pullToRefresh:a}=eS,l=(0,i.TH)(),d=(0,i.k6)(),c=(0,i.$B)(),_=(0,n.v9)(({session:e})=>e.firstHomeFeedRequestAfterNux),u=(0,et.Z)(),{checkExperiment:p}=(0,T.F)(),h={webMobileHomeFeedTakoverExperience:t,location:l,history:d,match:c},m=(0,n.v9)(({feeds:e})=>e[r]??[]),f=!_,y={...er.HH,...f?{...eP}:{in_nux:_},in_local_navigation:p("hfp_nav_tabs_unity_mweb").anyEnabled},E=(0,j.Z)(u?null:{name:er.om,options:y}),{data:g,isAtEnd:x}=(0,N.Z)(e),b=u?g:E.data,S=u?x:E.isAtEnd,A=!u&&E.isFetching,I=u?e.fetchMore:E.fetchMore,v=u?e.refresh:E.refresh,P=eA();_&&(0,ea.nP)("home_product.homefeed.has_in_nux_flag",{sampleRate:.1,tags:{appType:"mweb"}}),eI();let R=ev(),O=b?.length?b[0]:null;if(t&&t.display_data?.in_checklist_education&&t.display_data?.num_columns_requested===2){let e={type:"fullWidthBreakIn",value:{index:0,content:O?.id&&(0,ed.jsx)(ei.Z,{storyId:O.id,children:e=>(0,ed.jsx)(eu,{slotIndex:0,storyData:e,viewParameter:3833,viewType:604})})}},t=m.slice(1);return(0,ed.jsx)(o.xu,{"data-test-id":"homefeed",children:(0,ed.jsx)(q.Zt,{authHomefeedComponentDidUpdate:R,feedItemProps:s&&s(h),feedItems:t,feedItemsAdjustment:e,feedKey:r,pagination:{hasNext:!S,isLoadingNext:A,loadNext:()=>I(),refetch:()=>v()},pullToRefresh:a,trafficSource:er.WV,visuallyCompleteProfilerOptions:P})})}return u?f&&!t?.display_data?(0,ed.jsx)(o.xu,{"data-test-id":"homefeed-ssr",children:(0,ed.jsx)(q.o3,{authHomefeedComponentDidUpdate:R,feedItemProps:s&&s(h),feedKey:er.xJ,pullToRefresh:a,resourceRef:e,serverRender:!0,trafficSource:er.WV,visuallyCompleteProfilerOptions:P})}):(0,ed.jsx)(o.xu,{"data-test-id":"homefeed",children:(0,ed.jsx)(q.o3,{authHomefeedComponentDidUpdate:R,feedItemProps:s&&s(h),feedKey:r,pullToRefresh:a,resourceRef:e,trafficSource:er.WV,visuallyCompleteProfilerOptions:P})}):f&&!t?.display_data?(0,ed.jsx)(o.xu,{"data-test-id":"homefeed-ssr",children:(0,ed.jsx)(q.iK,{authHomefeedComponentDidUpdate:R,feedItemProps:s&&s(h),feedKey:er.xJ,pullToRefresh:a,resource:E,serverRender:!0,trafficSource:er.WV,visuallyCompleteProfilerOptions:P})}):(0,ed.jsx)(o.xu,{"data-test-id":"homefeed",children:(0,ed.jsx)(q.iK,{authHomefeedComponentDidUpdate:R,feedItemProps:s&&s(h),feedKey:r,pullToRefresh:a,resource:E,trafficSource:er.WV,visuallyCompleteProfilerOptions:P})})},eR=(0,s.lazy)(()=>r.e(23690).then(r.bind(r,223690))),eO=(0,el.Z)(()=>r.e(23690).then(r.bind(r,223690)),{ssr:!1}),ew=(0,s.lazy)(()=>r.e(28652).then(r.bind(r,828652))),eC=(0,el.Z)(()=>r.e(28652).then(r.bind(r,828652)),{ssr:!1}),eN=(0,s.lazy)(()=>r.e(31819).then(r.bind(r,131819))),eD=(0,el.Z)(()=>r.e(31819).then(r.bind(r,131819)),{ssr:!1}),ej=(0,s.lazy)(()=>r.e(94425).then(r.bind(r,994425))),eZ=(0,el.Z)(()=>r.e(94425).then(r.bind(r,994425)),{ssr:!1}),eU=(0,s.lazy)(()=>r.e(99302).then(r.bind(r,799302))),eH=(0,el.Z)(()=>r.e(99302).then(r.bind(r,799302)),{ssr:!1}),eL=(0,s.lazy)(()=>r.e(58838).then(r.bind(r,58838))),eM=(0,el.Z)(()=>r.e(58838).then(r.bind(r,58838)),{ssr:!1});class eF extends s.PureComponent{constructor(...e){super(...e),ec(this,"state",{...(0,X.H)(),currentTabIndex:"number"==typeof this.props.selectedTabIndex?this.props.selectedTabIndex:$.ef,showUnlinkTokenExpiredModal:!1,showDeleteAccountSurveyModal:!1,showYipModal:!1,shouldDismissCoreActionsHeader:!1}),ec(this,"claimReferral",e=>{(0,k.My)("mweb.partner.referral.claim.attempt");let t=_.H.getData();l.Z.create("ReferralClaimResource",{referralCode:t,receiverUserId:e}).callUpdate().then(()=>{_.H.setSenderOfferClaimed(),(0,k.My)("mweb.partner.referral.claim.success"),this.props.showToast(({hideToast:e})=>(0,ed.jsx)(b.ZP,{duration:5e3,href:"/business/install_app",onHide:e,text:this.props.i18n.bt("Вы воспользовались предложением. Для начала запустите объявления.", "You’ve claimed an offer. Launch ads to get started.", "business_hub.offer_toast.success", undefined, true)}))}).catch(()=>{_.H.resetStatus(),(0,k.My)("mweb.partner.referral.claim.error"),this.props.showToast(({hideToast:e})=>(0,ed.jsx)(b.ZP,{duration:5e3,onHide:e,text:this.props.i18n.bt("К сожалению, вы не можете воспользоваться этим предложением.", "Sorry, you don’t qualify for this offer", "business_hub.offer_toast.error", undefined, true),type:"error"}))})}),ec(this,"renderOptInInterestPicker",()=>{let{everythingFeedExperience:e,isLimitedLogin:t,lazyComponentEnabled:r}=this.props,{extraPlpImages:s,extraBlpImages:n}=this.state,i=!t&&e&&504192===e.experience_id,a=i&&e&&e.display_data&&e.display_data.full_screen_modal;return e&&i?(0,ed.jsx)(u.Z,{name:"SafeSuspense_HomePage_OptInInterestPicker",children:a?(0,ed.jsx)(e=>r?(0,ed.jsx)(eM,{...e}):(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(eL,{...e})}),{experience:e,extraImageInfo:s.length>0?s:n,viewParameter:92,viewType:1}):(0,ed.jsx)(e=>r?(0,ed.jsx)(eZ,{...e}):(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(ej,{...e})}),{experience:e,viewParameter:92,viewType:1})}):null})}static getDerivedStateFromProps(e){let{selectedTabIndex:t}=e;return"number"==typeof t?{currentTabIndex:t}:null}componentDidMount(){let{currentUserId:e,dispatchViewedSharedPins:t,isPartner:r,location:s,pwtStaticContext:n,i18n:i,isAuthenticated:a,showToast:o,history:l}=this.props,{sharedPinData:d}=this.state;(0,ee.E)(!1),(0,c.Z)(),d&&Object.keys(d).length>0&&t(d),r&&e&&_.H.shouldClaimReferral()&&this.claimReferral(e),a&&(0,R.S$)({appLoadName:"home_feed_pinteractive",clientNavName:"home_feed_render"},n),s.state?.unlinkTokenInvalid&&this.setState({showUnlinkTokenExpiredModal:!0}),s.state?.isCloseAccountReasonOpen&&this.setState({showDeleteAccountSurveyModal:!0}),s.state?.showError&&o(({hideToast:e})=>(0,ed.jsx)(b.ZP,{duration:5e3,onHide:e,text:i.bt("Не удается найти эту идею. Попробуйте поискать похожие.", "We can’t find that idea! Try searching for one just like it.", " - ", undefined, true),type:"error"})),(0,z.mB)(s.search).show_yip_modal&&(l.replace("/"),this.setState({showYipModal:!0}))}render(){let{checkExperiment:e,currentUserId:t,currentUsername:r,everythingFeedExperience:n,history:i,homefeedResourceRef:a,i18n:l,isAuthenticated:d,isEligibleForCoreActionsHeader:c,isPartner:_,location:x,moreIdeasStory:b,newUserWelcomeStoryExperience:S,webMobileHomeFeedTakoverExperience:A,selectedTabBoardId:P,useCaseTabs:T,tabBoards:R,lazyComponentEnabled:O}=this.props,{currentTabIndex:w,showUnlinkTokenExpiredModal:C,showDeleteAccountSurveyModal:N,showYipModal:D,shouldDismissCoreActionsHeader:j}=this.state,H=(0,z.mB)(x.search),L=H&&H.boardId||P;if(n)switch(n.experience_id){case 40002:case 10105:return(0,ed.jsx)(u.Z,{name:"SafeSuspense_HomePage_Nux",children:(0,ed.jsx)(Z.Z,{fallback:(0,ed.jsx)(U.Z,{accessibilityLabel:this.props.i18n.bt("Загрузка обучающих материалов для нового пользователя", "Loading new user education", "Loading spinner", undefined, true)}),children:_?(0,ed.jsx)(O?eD:eN,{experience:n}):(0,ed.jsx)(O?eC:ew,{experience:n})})});case 500681:return(0,ed.jsx)(u.Z,{name:"SafeSuspense_HomePage_ContactUpdate",children:O?(0,ed.jsx)(eO,{fallback:(0,ed.jsx)(U.Z,{accessibilityLabel:this.props.i18n.bt("Загрузка отзывов", "Loading experience", "loading experience spinner", undefined, true)})}):(0,ed.jsx)(Z.Z,{fallback:(0,ed.jsx)(U.Z,{accessibilityLabel:this.props.i18n.bt("Загрузка отзывов", "Loading experience", "loading experience spinner", undefined, true)}),children:(0,ed.jsx)(eR,{})})})}let M=d&&e("mweb_hf_core_actions_header").anyEnabled&&c;return(0,ed.jsx)(W.Z,{viewParameter:92,viewType:1,children:(0,ed.jsx)(F.Z,{view:1,viewParameter:92,children:(0,ed.jsxs)(v.default,{dataLayoutShiftBoundaryId:"AuthHomePageContainer",hasFixedHeader:!0,children:[(0,ed.jsx)(K.Z,{text:l.bt("Главная", "Home", "HomePage.HiddenAccessibilityHeader", undefined, true)}),(!!R?.length||!!T?.length)&&(0,ed.jsx)(I.FixedHeader,{hideOnScroll:d,noPadding:!0,overrideTop:0,children:(0,ed.jsx)(o.xu,{paddingY:1,children:(0,ed.jsx)(J.Z,{currentTabIndex:w,tabBoards:R||[],useCaseTabs:T||[]})})}),b&&(0,ed.jsx)(o.xu,{marginEnd:-4,marginStart:-4,paddingY:2,children:(0,ed.jsx)(ei.Z,{storyId:b.id||"",children:e=>(0,ed.jsx)(eu,{slotIndex:0,storyData:e,viewParameter:92,viewType:1},b.id)})}),w!==$.ef&&L&&(w<=(R?.length??0)?(0,ed.jsx)(ep,{boardId:L}):(0,ed.jsx)(eh,{index:w,useCaseId:L}))||(0,ed.jsxs)(s.Fragment,{children:[(0,ed.jsx)(f.Z,{experience:n}),(0,ed.jsx)(m.Z,{placementId:40001}),(0,ed.jsx)(y.Z,{experience:n}),(0,ed.jsx)(h.Z,{placementId:n?.placement_id}),(0,ed.jsx)(g.Z,{placementId:1000544}),(0,ed.jsx)(E.Z,{placementId:1000558}),(0,ed.jsx)(p.Z,{eligibleIds:[500726,500866,500735,500833,501182,501275,501385,501358,501908,501909,503291],experience:n,children:(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(eE,{experience:n})})}),n&&(0,ed.jsx)(p.Z,{eligibleIds:[505326],experience:n,children:({complete:e,dismiss:t})=>(0,ed.jsx)(s.Suspense,{children:(0,ed.jsx)(eb,{complete:e,dismiss:t})})}),n&&(0,ed.jsx)(p.Z,{eligibleIds:[505801],experience:n,children:({complete:e})=>(0,ed.jsx)(s.Suspense,{children:(0,ed.jsx)(ex,{complete:e})})}),S?.display_data?.story&&S.display_data.showUpdatedLandingPageStory&&(0,ed.jsx)(em,{isMoreIdeasTabsVisible:!!R?.length,newUserWelcomeStoryExperience:S}),(0,ed.jsxs)(o.xu,{marginTop:R?.length||b?0:2,children:[!j&&M&&(0,ed.jsx)(e_,{onDismiss:()=>{this.setState({shouldDismissCoreActionsHeader:!0})},username:r||""}),(0,ed.jsx)(eT,{homefeedResourceRef:a,webMobileHomeFeedTakoverExperience:A})]})]}),C&&(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(o.xu,{"data-test-id":"unlink-expired-token",children:(0,ed.jsx)(eg,{onDismiss:()=>{i.replace("/"),this.setState({showUnlinkTokenExpiredModal:!1})}})})}),N&&(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(ef,{isPartner:_,onDismiss:()=>{i.replace("/"),this.setState({showDeleteAccountSurveyModal:!1})},userId:t,username:r})}),D&&(0,ed.jsx)(u.Z,{name:"SafeSuspense_LoadingSpinner",children:O?(0,ed.jsx)(eH,{onModalDismiss:()=>{this.setState({showYipModal:!1})}}):(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(eU,{onModalDismiss:()=>{this.setState({showYipModal:!1})}})})}),this.renderOptInInterestPicker()]})})})}}let ek=[];function eB({homefeedResourceRef:e,moreIdeasTabsBoardsResourceRef:t}){let r;let s=(0,S.ZP)(),a=(0,n.I0)(),o=(0,G.Z)(),{showToast:l}=(0,B.F9)(),c=(0,w.Z)(),_=(0,i.k6)(),u=(0,i.TH)(),p=(0,et.Z)(),{checkExperiment:h}=(0,T.F)(),m="true"===(0,M.qn)("completedMiniRenux"),f=(0,x._)({id:40001,extraContext:m?{completed_mini_renux:m}:void 0,shouldUsePlacedExperience:!1}),y=(0,x._)({id:1000115}),E=(0,x._)({id:1000411}),g=(0,n.v9)(({feeds:e})=>e.homefeed),b=(0,n.v9)(({homefeedTabUI:e})=>e.activeTabBoardId),I=(0,n.v9)(({homefeedTabUI:e})=>e.activeTabIndex),{isAuth:v,isLimitedLogin:R}=o,C=o.isAuth?o.id:void 0,D=o.isAuth?o.username:void 0,U=!!o.isAuth&&o.isPartner,L=(0,V.HG)(),F=Array.isArray(g)?g:[],k=!L&&F[0]&&"story"===F[0].type?F[0]:null,z=(0,n.v9)(({stories:e})=>k?e[k.id]:null),W=z&&z.story_type&&z.story_type.startsWith("boards_more_ideas_feed_upsell")?z:null,{data:Y}=(0,j.Z)(h("hfp_nav_tabs_unity_mweb").anyEnabled||p?null:{name:"MoreIdeasTabsBoardsResource",options:{redux_normalize_feed:!0}}),{data:q}=(0,N.Z)(t);r=h("hfp_nav_tabs_unity_mweb").anyEnabled?F.find(({type:e})=>"home_feed_tabs"===e)?.tabs:p?q:Y;let K=H.Z.getItem(d.gM);v&&null!=K&&o.createdAt&&!(0,A.Z)(o.createdAt)&&H.Z.removeItem(d.gM);let $=null!==K&&"enabled"===h("ap_bmi_custom_activation_nux_revamp_mweb_v2").group,J=$&&K?Array.from(new Map(JSON.parse(K)).keys()):null,{data:Q}=(0,j.Z)($&&J?{name:"ApiResource",options:{url:"/v3/usecases/recommendation/",data:{seed_use_cases:J,fields:["nuxusecase.id","nuxusecase.display_name"]}}}:null),{data:X}=(0,j.Z)(v&&h("mweb_hf_core_actions_header",{dangerouslySkipActivation:!0}).anyEnabled?{name:"UserResource",options:{user_id:o.id,field_set_key:"core_actions_header"}}:null),ee=(0,V.ml)(),er=(0,P.jr)(o),en=(0,eo.b)();return(0,ed.jsxs)(O.Z,{measureGridVisuallyComplete:!0,surface:"homefeed",children:[er&&(0,ed.jsx)(Z.Z,{children:(0,ed.jsx)(ey,{})}),(0,ed.jsx)(eF,{checkExperiment:h,currentUserId:C,currentUsername:D,dispatchViewedSharedPins:e=>a((0,es.dz)(e)),everythingFeedExperience:f,history:_,homefeedResourceRef:e,i18n:s,isAuthenticated:v,isEligibleForCoreActionsHeader:X?.is_eligible_for_core_actions_header,isLimitedLogin:R,isMobile:ee,isPartner:U,lazyComponentEnabled:en,location:u,moreIdeasStory:W,newUserWelcomeStoryExperience:E,pwtStaticContext:c,selectedTabBoardId:b,selectedTabIndex:I,showToast:l,tabBoards:r??ek,useCaseTabs:Q??[],webMobileHomeFeedTakoverExperience:y})]})}function ez(){let e=(0,et.Z)(),t=(0,n.v9)(({session:e})=>e.firstHomeFeedRequestAfterNux),{checkExperiment:r}=(0,T.F)(),i={...er.HH,...t?{in_nux:t}:{...eP},in_local_navigation:r("hfp_nav_tabs_unity_mweb").anyEnabled},a=(0,D.Z)(e?{name:er.om,options:i}:null),o=(0,D.Z)(!r("hfp_nav_tabs_unity_mweb").anyEnabled&&e?{name:"MoreIdeasTabsBoardsResource",options:{redux_normalize_feed:!0}}:null);return e?(0,ed.jsx)(s.Suspense,{children:(0,ed.jsx)(eB,{homefeedResourceRef:a,moreIdeasTabsBoardsResourceRef:o})}):(0,ed.jsx)(eB,{homefeedResourceRef:a,moreIdeasTabsBoardsResourceRef:o})}},26353:(e,t,r)=>{r.d(t,{EP:()=>l,HH:()=>o,WV:()=>i,om:()=>a,xJ:()=>n});var s=r(288240);let n="homefeed",i="feed_home",a="UserHomefeedResource",o={field_set_key:"mobile_grid_item",prepend:!1},l=(0,s.Z)(o)},265192:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(227258);function n(e,t){return r=>r((0,s.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}},969300:(e,t,r)=>{r.d(t,{r:()=>s});let s=(e,t)=>({type:"SET_ACTIVE_HOMEFEED_TAB",payload:{boardId:e,index:t}})},170568:(e,t,r)=>{r.d(t,{Cp:()=>d,FK:()=>l,H5:()=>x,MI:()=>m,O0:()=>h,QZ:()=>o,W:()=>E,WF:()=>_,Wz:()=>b,a5:()=>u,dz:()=>y,e0:()=>p,e2:()=>a,iW:()=>g,n1:()=>i,rm:()=>c,xu:()=>f});var s=r(741983),n=r(389638);let i=()=>({type:"DISMISS_UNAUTH_SAVE"}),a=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),o=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),l=()=>({type:"HIDE_NAV_FOOTER"}),d=()=>({type:"SHOW_NAV_FOOTER"}),c=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),_=()=>({type:"SHOW_REPIN_ANIMATION"}),u=()=>({type:"HIDE_REPIN_ANIMATION"}),p=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),h=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),m=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),f=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),y=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),E=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),g=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},x=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),b=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,s.bo)(e)?"today":(0,s.dr)(e)?"ideas":t&&(0,s.dZ)(e,t)?"own_section":t&&(0,s.J)(e,t)?"own_board":(0,s.OJ)(e)?"section":(0,s.am)(e)?"board":(0,s.L6)(e)?"closeup":(0,s.C$)(e)?"home":(0,n.Z)(e)?"profile":(0,s.En)(e)?"search":(0,s.$V)(e)?"topic":"":""})},70982:(e,t,r)=>{r.d(t,{KF:()=>c,ZN:()=>o,fv:()=>d,kE:()=>u,yA:()=>l});var s=r(216167),n=r(372085),i=r(386129);function a(e,t,r,n){return s.Z.create("UserFollowResource",{user_id:e,invite_code:n||void 0,aux_data:t?{pin_id:t}:void 0,client_tracking_params:r})}function o(e,t=null,r,s){return n=>{a(e,t,r,s).callCreate().catch(()=>n((0,i.P_)(e,!1))),n((0,i.P_)(e,!0))}}function l(e,t=null,r,s){return async n=>{n((0,i.P_)(e,!0)),await a(e,t,r,s).callCreate().catch(t=>{throw n((0,i.P_)(e,!1)),t})}}function d(e,t=null,r){return s=>{a(e,t,r).callDelete().catch(()=>s((0,i.P_)(e,!0))),s((0,i.P_)(e,!1))}}function c(e,t=null,r){return async s=>{s((0,i.P_)(e,!1)),await a(e,t,r).callDelete().catch(t=>{throw s((0,i.P_)(e,!0)),t})}}let _=(e,t)=>({type:"USER_BULK_FOLLOW",payload:{ids:e,value:t}}),u=e=>t=>{e.length>0&&((0,n.Z)({url:"/v3/users/follow/",method:"PUT",data:{followee_ids:e.join(",")}}).catch(()=>t(_(e,!1))),t(_(e,!0)))}},386129:(e,t,r)=>{r.d(t,{Ge:()=>d,JS:()=>a,OF:()=>x,P_:()=>o,Q_:()=>u,b8:()=>p,eR:()=>g,h2:()=>c,h6:()=>_});var s=r(216167),n=r(372085),i=r(107905);function a(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let o=(e,t)=>({type:"USER_FOLLOW",payload:{id:e,value:t}}),l=(e,t)=>({type:"USER_BLOCK",payload:{id:e,value:t}}),d=({id:e,orbacSubjectId:t,blockSource:r,blockContext:n,logContextEvent:i})=>async a=>{a(l(e,!0));let o=await s.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:t,block_source:r,block_context:n}).callCreate().catch(()=>a(l(e,!1)));return i({event_type:54,object_id_str:e}),o},c=(e,t)=>async r=>{r(l(e,!1));let n=await s.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>r(l(e,!0)));return t({event_type:55,object_id_str:e}),n};function _(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let u=(e,t)=>()=>s.Z.create("UserStateResource",{state:e,value:t}).callCreate(),p=(e,t,r)=>(s,a)=>{(0,n.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{r({event_type:48,object_id_str:a().session.userId}),e(),(0,i.Z)()},t)},h=e=>e>=200&&e<400,m=(e,t="150x150")=>e&&`https://i.pinimg.com/${t}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"",f=async(e,t,r)=>{let n=await s.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(n.resource_response.data[e]){let{status:s,signature:i}=n.resource_response.data[e];"processing"===s||"registered"===s?setTimeout(async()=>{f(e,t,r)},5e3):"succeeded"===s?t(m(i)):r()}else r()},y=(e,t,r,n,i)=>(new FormData().append("img",e),s.Z.create("VIPResource",{type:t}).callCreate().then(t=>{if(t.resource_response.data){let{upload_id:s,upload_url:a,upload_parameters:o}=t.resource_response.data,l=new XMLHttpRequest;l.open("POST",a,!0),l.onload=()=>{h(l.status)?(r(100),f(s,n,i)):i()},l.upload.onprogress=e=>{r(Math.round(100*e.loaded/e.total))};let d=new FormData;for(let e in o)d.append(e,o[e]);d.append("file",e),l.send(d)}},()=>{i()})),E=e=>new Promise((t,r)=>{y(e,"pinimage",()=>{},e=>{t(e)},e=>{r(e)})}),g=e=>new Promise((t,r)=>{"string"==typeof e?e.startsWith("data")&&E(function(e,t=512){let r=e.split(";"),s=r[0].split(":")[1],n=atob(r[1].split(",")[1]),i=[];for(let e=0;e<n.length;e+=t){let r=n.slice(e,e+t),s=Array(r.length);for(let e=0;e<r.length;e+=1)s[e]=r.charCodeAt(e);let a=new Uint8Array(s);i.push(a)}return new Blob(i,{type:s})}(e)).then(e=>t(e)):r("Invalid Image")}),x=e=>(0,n.Z)({url:"/v3/register/exists/",data:{email:e}})},937310:(e,t,r)=>{r.d(t,{Z:()=>s});let s={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",USE_CASE_TAB:"useCaseFeed",TRIED_IT_FEED:"trieditfeed"}},137842:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(545007);function n({children:e,storyId:t}){let r=(0,s.v9)(({stories:e})=>e[t]);return r&&e(r)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/13317.ru_RU-81713d913a2acb52.mjs.map