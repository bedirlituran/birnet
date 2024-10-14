"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[47241],{599110:(e,l,o)=>{var t,s,n,i,r;o.r(l),o.d(l,{default:()=>c});let a={fragment:{argumentDefinitions:t=[{defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"FollowersControllerQuery",selections:[{alias:null,args:s=[{kind:"Variable",name:"user",variableName:"userId"}],concreteType:null,kind:"LinkedField",name:"v3GetUserHandlerQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"data",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null}],storageKey:null}],type:"V3GetUserHandler",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:t,kind:"Operation",name:"FollowersControllerQuery",selections:[{alias:null,args:s,concreteType:null,kind:"LinkedField",name:"v3GetUserHandlerQuery",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"data",plural:!1,selections:[i,r,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"V3GetUserHandler",abstractKey:null}],storageKey:null}]},params:{id:"134b0b580aa92245148296845cace9afb35dc06c14786cdd346a49001d84a14b",metadata:{},name:"FollowersControllerQuery",operationKind:"query",text:null}};a.hash="3f98e2610960d7656d4ab516c46bd7af";let c=a;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(a.default||a)},608516:(e,l,o)=>{o.d(l,{Z:()=>t});let t=o(14583).Z},973868:(e,l,o)=>{o.d(l,{Z:()=>p});var t=o(667294),s=o(883119),n=o(515278),i=o(930837),r=o(140017),a=o(340523),c=o(923368),d=o(898233),_=o(785893);let u=new s.Ry(3);function h({anchor:e,children:l,displayOptions:o,onFlyoutDismiss:t}){let n=(0,r.ZP)(),{closeupWithinMasonryEnabled:d}=(0,c.x4)(),{checkExperiment:h}=(0,a.F)(),p=h("sg_dweb_sharesheet_update").anyEnabled?i.b7:void 0;return o?.shownWithinMasonry||o?.shownWithinProfileHeader?(0,_.jsx)(s.mh,{zIndex:o.shownWithinProfileHeader||d&&o?.shownWithinMasonry?u:p,children:(0,_.jsx)(s.xu,{position:o.inModal?"absolute":void 0,top:!!o.inModal||void 0,zIndex:o.inModal?i.b7:void 0,children:(0,_.jsx)(s.J2,{_deprecatedShowCaret:o.showCaret,accessibilityLabel:n.bt("Меню для предоставления общего доступа", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,idealDirection:o.idealDirection??"down",onDismiss:()=>{t()},positionRelativeToAnchor:!1,size:"flexible",children:l})})}):(0,_.jsx)(s.J2,{_deprecatedShowCaret:o?.showCaret,accessibilityLabel:n.bt("Меню для предоставления общего доступа", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,idealDirection:o?.idealDirection??"down",onDismiss:()=>{t()},size:"flexible",children:l})}function p({children:e,flyoutDisplayOptions:l,isFlyoutOpen:o,loggingOptions:i,onClick:r,onFlyoutDismiss:a,onToggleFlyout:u,sendObject:p}){let f=(0,t.useRef)(null),{clientTrackingParams:m}=(0,c.x4)(),w=(0,n.Z)();return(0,_.jsxs)(s.xu,{ref:f,dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},children:[(0,_.jsx)(s.xu,{children:e({handleSendShareFlyoutButtonClick:()=>{if(w){w();return}u()}})}),o&&(0,_.jsx)(h,{anchor:f.current,displayOptions:l,onFlyoutDismiss:a,children:(0,_.jsx)(d.Z,{clientTrackingParams:m,component:i.component,element:i.element,onExternalSend:i.onExternalSend,onHide:()=>{r?.(),a()},sendType:p.type,sharedObject:{...p,type:"user"===p.type?"pinner":p.type},viewParameter:i.viewParameter,viewType:i.viewType})})]})}},396924:(e,l,o)=>{o.d(l,{Z:()=>y});var t=o(667294),s=o(240684),n=o(883119),i=o(214877),r=o(140017),a=o(5859),c=o(629650),d=o(554786),_=o(963191),u=o(207171),h=o(770482),p=o(745330),f=o(785893);let m=(0,s.ZP)({resolved:{},chunkName:()=>"app-www-followersAuthDesktop-FollowersModalContainer",isReady(e){let l=this.resolve(e);return!0===this.resolved[l]&&!!o.m[l]},importAsync:()=>o.e(5910).then(o.bind(o,256767)),requireAsync(e){let l=this.resolve(e);return this.resolved[l]=!1,this.importAsync(e).then(e=>(this.resolved[l]=!0,e))},requireSync(e){return o(this.resolve(e))},resolve:()=>256767}),w=(0,s.ZP)({resolved:{},chunkName:()=>"app-www-ProfileFollowers-ProfileFollowersModalGraphQL",isReady(e){let l=this.resolve(e);return!0===this.resolved[l]&&!!o.m[l]},importAsync:()=>Promise.all([o.e(97270),o.e(98982),o.e(15727)]).then(o.bind(o,823599)),requireAsync(e){let l=this.resolve(e);return this.resolved[l]=!1,this.importAsync(e).then(e=>(this.resolved[l]=!0,e))},requireSync(e){return o(this.resolve(e))},resolve:()=>823599});function y({followersTotalCount:e,followingResource:l,followingTotalCount:o,isAboutDrawerVariant:s,isViewingOwnProfile:y,size:x="300",user:b}){let g=(0,r.ZP)(),v=new URL(window.location.href),j=(()=>{let{isAuthenticated:e}=(0,a.B)(),l=(0,d.HG)();return e&&l})(),{logContextEvent:P}=(0,i.v)(),A=v.pathname.includes("/_followers/")&&j,[Z,z]=(0,t.useState)(A?"followers":null),C=()=>{z(null)},S=e=>{z(e),y&&P({event_type:101,view_type:4,view_parameter:3106,component:13056,element:"followers"===e?42:41})},k=(0,h.Z)(b);return(0,f.jsxs)(t.Fragment,{children:[s?(0,f.jsxs)(n.kC,{direction:"column",gap:{row:0,column:6},children:[!!e&&e>=0&&(0,f.jsx)(u.Z,{accessibilityLabel:g.bt("Значок «Подписчики»", "Followers icon", "profileHeader.followersIcon", undefined, true),icon:"person-add",info:(0,f.jsx)(c.Z,{items:[(0,f.jsx)(_.Z,{count:e,onClick:()=>S("followers"),size:x,variant:"followers"},"followersDisplay"),k?(0,f.jsx)(p.default,{user:b}):null]})}),o>=0&&(0,f.jsx)(u.Z,{accessibilityLabel:g.bt("Значок «Подписки»", "Following icon", "profileHeader.followingIcon", undefined, true),icon:"people",info:(0,f.jsx)(_.Z,{count:o,onClick:()=>S("following"),size:x,variant:"following"})})]}):(0,f.jsx)(c.Z,{items:[e&&e>=0?(0,f.jsx)(_.Z,{count:e,onClick:()=>S("followers"),size:x,variant:"followers"}):null,o>=0?(0,f.jsx)(_.Z,{count:o,onClick:()=>S("following"),size:x,variant:"following"}):null]}),"followers"===Z&&(0,f.jsx)(w,{onDismiss:C,totalFollowersCount:e}),"following"===Z&&(0,f.jsx)(m,{followersResource:l,onDismiss:C,totalFollowersCount:o,user:b,variant:Z})]})}},963191:(e,l,o)=>{o.d(l,{Z:()=>c});var t=o(883119),s=o(388769),n=o(140017),i=o(339001),r=o(149722),a=o(785893);function c({count:e,onClick:l,variant:o,size:c="300"}){let d=(0,n.ZP)(),{isAuth:_}=(0,r.Z)(),u=e<=0,h={followers:(0,i.nk)(d.nbt(["{{count}} подписчик", "{{count}} подписчика", "{{count}} подписчиков"], e, "label for n followers", true),{count:(0,a.jsx)(s.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:e||0},"following-count")}),following:(0,i.nk)(d.nbt(["{{count}} подписка", "{{count}} подписки", "{{count}} подписок"], e, "label for n following users", true),{count:(0,a.jsx)(s.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:e||0},"follower-count")})};return _?(0,a.jsx)(t.xu,{"data-test-id":`profile-${o}-count`,display:"inlineBlock",children:(0,a.jsx)(t.iP,{disabled:u,onTap:()=>l(o),children:(0,a.jsx)(t.xv,{inline:!0,size:c,weight:u?"normal":"bold",children:h[o]})})}):(0,a.jsx)(t.xv,{inline:!0,children:h[o]})}},207171:(e,l,o)=>{o.d(l,{Z:()=>n});var t=o(883119),s=o(785893);function n({accessibilityLabel:e,color:l="darkGray",icon:o,info:n}){return(0,s.jsxs)(t.kC,{gap:{row:7,column:0},children:[(0,s.jsx)(t.JO,{accessibilityLabel:e,color:l,icon:o,size:20}),n]})}},288325:(e,l,o)=>{o.d(l,{Z:()=>c});var t=o(883119),s=o(205841),n=o(140017),i=o(89511),r=o(770482),a=o(785893);function c({onTouch:e,size:l="xl",user:o,viewer:c}){let d=(0,n.ZP)(),{image_xlarge_url:_,username:u}=o??{},h=(0,r.Z)(o),p=(0,i.Z)({viewer:c,user:o})||c.isAuth&&c.isEmployee,f=(0,a.jsx)(s.qE,{name:u||"",outline:h,size:l,src:_??void 0});return p?(0,a.jsx)(t.iP,{accessibilityLabel:d.bt("Нажмите, чтобы открыть пин-код и поделиться профилем", "Click to open pincode and share profile", "AvatarWithPincode.pincodeEnabled.accessibilityLabel", undefined, true),fullWidth:!1,onTap:e,rounding:"circle",children:f}):f}},835332:(e,l,o)=>{o.d(l,{Z:()=>m});var t,s=o(167912),n=o(883119),i=o(481177),r=o(510989),a=o(140017),c=o(757640),d=o(608516),_=o(149722),u=o(396924),h=o(89511),p=o(785893);function f({isAboutDrawerVariant:e=!1,size:l="300",user:n}){let r=(0,_.Z)(),{id:a}=n,d=void 0!==t?t:t=o(599110),f=(0,s.useLazyLoadQuery)(d,{userId:a}),{following_count:m=0,interest_following_count:w=0}=n,y=f.v3GetUserHandlerQuery?.__typename==="V3GetUserHandler"?f.v3GetUserHandlerQuery.data:null,{followerCount:x,username:b}=y||{},g=(0,h.Z)({user:n,viewer:r}),v=(0,c.Z)({name:"UserFollowingResource",options:{exclude_not_explictly_followed:!!g||void 0,page_size:i.Z.MAX_FETCH_NUM_FOLLOWERS_PER_PAGE,explicit_following:g,username:b}});return y?(0,p.jsx)(u.Z,{followersTotalCount:x,followingResource:v,followingTotalCount:m-(w??0),isAboutDrawerVariant:e,isViewingOwnProfile:g,size:l,user:n}):null}function m(e){let l=(0,a.ZP)();return(0,p.jsx)(r.Z,{name:"SafeSuspense_ProfileHeader_FollowersController",children:(0,p.jsx)(d.Z,{fallback:(0,p.jsx)(n.xu,{padding:5,children:(0,p.jsx)(n.$j,{accessibilityLabel:l.bt("Загрузка данных о количестве подписчиков", "Loading follower counts", "profile.header.followerController", undefined, true),show:!0})}),children:(0,p.jsx)(f,{...e})})})}},956581:(e,l,o)=>{o.d(l,{U:()=>w,Z:()=>y});var t=o(667294),s=o(240684),n=o(883119),i=o(214877),r=o(140017),a=o(564855),c=o(149722),d=o(89511),_=o(118923),u=o(832853),h=o(785893);let p=(0,s.ZP)({resolved:{},chunkName:()=>"app-www-profile-ProfileHeader-AboutDrawer",isReady(e){let l=this.resolve(e);return!0===this.resolved[l]&&!!o.m[l]},importAsync:()=>o.e(33071).then(o.bind(o,372944)),requireAsync(e){let l=this.resolve(e);return this.resolved[l]=!1,this.importAsync(e).then(e=>(this.resolved[l]=!0,e))},requireSync(e){return o(this.resolve(e))},resolve:()=>372944}),f=(0,u.Z)(()=>o.e(33071).then(o.bind(o,372944)),void 0,"app-www-profile-ProfileHeader-AboutDrawer"),m=e=>(0,_.b)()?(0,h.jsx)(f,{...e}):(0,h.jsx)(p,{...e}),w=170;function y(e){let{maxLength:l=w,onToggleFollow:o,setShowMessageFlyout:s=()=>{},user:_}=e,u=(0,c.Z)(),p=(0,d.Z)({user:_,viewer:u}),{logContextEvent:f}=(0,i.v)(),y=(0,r.ZP)(),[x,b]=(0,t.useState)(!1),{about:g}=_;return g?(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)(n.xv,{inline:!0,children:(0,a.ZP)(g,l)}),g.length>l&&(0,h.jsx)(n.xu,{display:"inlineBlock",children:(0,h.jsx)(n.iP,{accessibilityLabel:y.bt("Развернуть раздел подробных сведений", "Expand about section", "profile.profileHeader.moreTextAccessibilityLabel", undefined, true),onTap:()=>{f({event_type:101,component:14011,view_type:4,view_parameter:p?3106:3107}),b(!0)},children:(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:y.bt("больше", "more", "profile.profileHeader.moreText", undefined, true)})})}),x&&(0,h.jsx)(m,{isOwnProfile:p,onDismiss:()=>{b(!1)},onToggleFollow:o,setShowMessageFlyout:s,user:_})]}):null}},668142:(e,l,o)=>{o.d(l,{Z:()=>j});var t=o(667294),s=o(510989),n=o(149722),i=o(883119),r=o(214877),a=o(549629),c=o(140017),d=o(339001),_=o(447591),u=o(216167),h=o(190149),p=o(137510),f=o(785893);function m({children:e,flyoutDirection:l,setShowMessageFlyout:o,showMessageFlyout:s,userId:n}){let{logContextEvent:a}=(0,r.v)(),[c,d]=(0,t.useState)(""),_=(0,t.useRef)(),{conversationCreate:m,conversationOpen:w}=(0,h.Z)(),y=async()=>{d(""),o(!1),a({event_type:101,element:103,component:13946,view_type:4,view_parameter:3107});let e=u.Z.create("ConversationsResource",{user_ids:[n],text:c}),l=await e.callCreate(),t=l?.resource_response.data;m(t),w(t.id)};return(0,f.jsxs)(t.Fragment,{children:[(0,f.jsx)(i.xu,{ref:_,children:e({toggleSendMessageFlyout:()=>{o(!s)}})}),s&&(0,f.jsx)(p.Z,{anchor:_.current,idealDirection:l,message:c,onDismiss:()=>o(!1),onMessageChange:d,onMessageSubmit:y})]})}var w=o(875936);let y=()=>o.e(55302).then(o.bind(o,755302));function x({isOwnProfile:e,setShowMessageFlyout:l,size:o="lg",showMessageFlyout:s,user:n}){let{logContextEvent:u}=(0,r.v)(),h=(0,c.ZP)(),p=(0,t.useRef)(null),[x,b]=(0,t.useState)(!1),[g,v]=(0,t.useState)(),j=(0,_.V)(e,n?.partner?.profile_place||{},h.bt("Адрес скопирован", "Address copied", "profileHeader.contactButton.toastText", undefined, true)),P=()=>{b(!1)},{id:A,partner:Z}=n??{},{contact_email:z="",contact_phone:C="",contact_phone_country:S="",enable_profile_address:k,enable_profile_message:F,profile_place:L={}}=Z??{},E=C?g?.(C,{defaultCallingCode:S&&"0"!==S.phone_code?S.phone_code:null}):null;(0,a.Q)({component:13673,element:11953,object_id_str:A,view_type:4,view_parameter:3107});let M=async()=>{if(b(e=>!e),C&&!g){let e=await y();v(()=>e.parsePhoneNumberFromString)}u({event_type:101,component:13673,element:11953,object_id_str:A,view_type:4,view_parameter:3107})},D=e=>{u({event_type:101,component:13674,element:e,object_id_str:A,view_type:48,view_parameter:3107})},H=z||C,T={contact:h.bt("Связаться", "Contact", "profileHeader.contactButton", undefined, true),sectionTitle:h.bt("Контактные данные", "Contact options", "profileHeader.contactButton.contactOptions", undefined, true),message:h.bt("Отправить сообщение", "Message", "profileHeader.contactMenu.message", undefined, true),email:(0,d.nk)(h.bt("Эл. почта: {{ contactEmail }}.", "Email {{ contactEmail }}", "profileHeader.contactMenu.email", undefined, true),{contactEmail:z}),call:h.bt("Позвонить", "Call", "profileHeader.contactMenu.phoneNumber", undefined, true)};if(!H&&!F)return null;let R=(0,_.T)(L||{});return(0,f.jsx)(m,{flyoutDirection:"up",setShowMessageFlyout:l,showMessageFlyout:s,userId:A,children:({toggleSendMessageFlyout:e})=>(0,f.jsxs)(t.Fragment,{children:[(0,f.jsx)(i.xu,{ref:p,children:(0,f.jsx)(i.zx,{onClick:()=>{H?M():e()},selected:x,size:o,text:T.contact})}),x&&(0,f.jsxs)(i.Lt,{anchor:p.current,disableMobileUI:!0,id:"profileHeader_contactMenu",idealDirection:"up",onDismiss:P,zIndex:new i.H3([w.Zu]),children:[(0,f.jsxs)(i.Lt.Section,{label:T.sectionTitle,children:[F&&(0,f.jsx)(i.Lt.Item,{onSelect:()=>{e(),D(11956),P()},option:{label:T.message,value:T.message}}),z&&(0,f.jsx)(i.Lt.Link,{href:`mailto:${z}`,iconEnd:"visit",onClick:()=>{D(11954),P()},option:{label:T.email.join(""),value:T.email.join("")}}),E||C?(0,f.jsx)(i.Lt.Link,{href:`tel:${E?E.getURI():C}`,iconEnd:"visit",onClick:({dangerouslyDisableOnNavigation:e})=>{D(11955),e(),P()},option:{label:T.call,value:T.call}}):null]}),k&&(0,f.jsx)(i.Lt.Section,{label:h.bt("Адрес", "Address", "profileHeader.contactButton.address", undefined, true),children:(0,f.jsx)(i.Lt.Item,{onSelect:j,option:{label:R,value:R}})})]})]})})}var b=o(238007),g=o(89511),v=o(770482);function j(e){let l=(0,n.Z)(),[o,i]=(0,t.useState)(!1),{size:r,user:a}=e,c=(0,v.Z)(a),d=(0,g.Z)({user:a,viewer:l}),{blocked_by_me:_,id:u,partner:h={},should_show_messaging:p}=a,{should_show_messaging:w}=l,{contact_email:y="",contact_phone:j="",enable_profile_message:P}=h||{},A=!_&&!!p&&!!w;return A&&(y||j)?(0,f.jsx)(s.Z,{name:"ContactMenuButton",children:(0,f.jsx)(x,{isOwnProfile:d,setShowMessageFlyout:i,showMessageFlyout:o,size:r,user:a})}):A&&(P||!c)?(0,f.jsx)(m,{flyoutDirection:"up",setShowMessageFlyout:i,showMessageFlyout:o,userId:u,children:({toggleSendMessageFlyout:e})=>(0,f.jsx)(b.Z,{onClick:e,size:r,userId:u})}):null}},745330:(e,l,o)=>{o.r(l),o.d(l,{default:()=>u});var t=o(667294),s=o(883119),n=o(619370),i=o(388769),r=o(140017),a=o(339001),c=o(149722),d=o(89511),_=o(785893);function u({user:e,hideFollowers:l,inline:o=!1,size:u}){let h=(0,r.ZP)(),p=(0,t.useRef)(),f=(0,c.Z)(),m=new s.Ry(2);if(e?.profile_views===-1)return null;let w=e?.profile_views??0,y=w>=1e7?h.bt("более 10 млн", "10m+", "viewerCount.overTenMillion", undefined, true):(0,_.jsx)(i.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:w||0},"pretty_number");return(0,_.jsx)(s.xu,{ref:p,children:(0,_.jsxs)(s.xv,{inline:o,size:u,weight:l?"bold":"normal",children:[(0,a.nk)(h.bt("{{ count }} {{ label }}", "{{ count }} {{ label }}", "viewerCount.templateString", undefined, true),{count:y,label:h.bt("просмотров в месяц", "monthly views", "viewerCount.monthlyViewsLabel", undefined, true)}),(0,d.Z)({user:e,viewer:f})&&(0,_.jsx)(n.default,{anchor:p.current,customWrapper:({children:e})=>(0,_.jsx)(s.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,zIndex:m,children:e}),experienceIds:[502925],flyoutSize:"md",idealDirection:"down",onClickComplete:()=>window.open("https://www.pinterest.com/_/_/help/business/article/review-new-and-updated-reporting-metrics#section-15861","_blank"),placementId:19,showCaret:!0,textAlign:"center"})]})})}},447591:(e,l,o)=>{o.d(l,{T:()=>r,V:()=>a});var t=o(214877),s=o(454514),n=o(13848),i=o(785893);function r(e){let{street:l,extra_street:o,locality:t,region:s,postal_code:n,country:i}=e,r=l||"",a=o||"",c=t||"";return`${r}${a}${(r||a)&&","} ${c}${c&&","} ${s||""} ${n||""} ${i||""}`.trim()}function a(e,l,o){let{logContextEvent:a}=(0,t.v)(),{showToast:c}=(0,n.F9)();return()=>{a({event_type:101,element:12799,view_type:548,view_parameter:e?3106:3107}),navigator.clipboard.writeText(r(l)),c(({hideToast:e})=>(0,i.jsx)(s.ZP,{onHide:e,text:o}))}}},898233:(e,l,o)=>{o.d(l,{Z:()=>d});var t=o(667294),s=o(883119),n=o(510989),i=o(140017),r=o(608516),a=o(785893);let c=(0,t.lazy)(()=>Promise.all([o.e(87348),o.e(79007),o.e(61116)]).then(o.bind(o,797228)));function d(e){let l=(0,i.ZP)();return(0,a.jsx)(n.Z,{name:"SafeSuspense_SendObjectLoader_SendObjectWrapper",children:(0,a.jsx)(r.Z,{fallback:(0,a.jsx)(s.xu,{alignItems:"center",display:"flex",justifyContent:"center",padding:2,width:"100%",children:(0,a.jsx)(s.$j,{accessibilityLabel:l.bt("Делимся…", "Loading sharing", "Accessibility label for loading sharing UI", undefined, true),show:!0})}),children:(0,a.jsx)(c,{...e})})})}},773221:(e,l,o)=>{o.d(l,{Z:()=>h});var t=o(667294),s=o(883119),n=o(587703),i=o(140017),r=o(149722),a=o(400564),c=o(190149),d=o(89511),_=o(973868),u=o(785893);function h({bgColor:e,iconColor:l,useGestaltButton:o,user:h}){let p=(0,i.ZP)(),[f,m]=(0,t.useState)(!1),w=(0,r.Z)(),y=(0,d.Z)({user:h,viewer:w}),x=(0,n.Z)(),b=y&&w.isPrivateProfile,{conversations:{showConversationsDropdown:g},dropdownOpen:v,setObjectAttachment:j}=(0,c.Z)(),P=p.bt("Поделиться профилем", "Send Profile", "Accessible label for button to send this profile", undefined, true);return(0,u.jsx)(_.Z,{flyoutDisplayOptions:{shownWithinProfileHeader:!0},isFlyoutOpen:f,loggingOptions:{component:13675,element:12631,viewType:4},onFlyoutDismiss:()=>m(!1),onToggleFlyout:()=>{x({event_type:101,component:13675,element:1079,object_id_str:h?.id,view_type:4,view_parameter:y?3106:3107}),b?!g&&h?.id&&(j({type:"follow_invite",id:h.id}),v()):m(!f)},sendObject:{type:"user",description:"",name:h?.full_name,imageUrl:h?.image_large_url??"",url:`/${h?.username??""}/`,id:h?.id??""},children:({handleSendShareFlyoutButtonClick:t})=>(0,u.jsx)(s.xu,{"data-test-id":"share-profile-auth",children:o?(0,u.jsx)(s.zx,{accessibilityLabel:P,onClick:()=>t(),selected:f,size:"lg",text:p.bt("Поделиться", "Share", "sendProfileButton.button", undefined, true)}):(0,u.jsx)(a.Z,{accessibilityLabel:P,bgColor:e,icon:"share",iconColor:l,onClick:()=>t(),selected:f})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/47241.ru_RU-f3437298cae454b8.mjs.map