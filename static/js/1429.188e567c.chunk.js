"use strict";(self.webpackChunkjumbo_6_x=self.webpackChunkjumbo_6_x||[]).push([[1429],{75991:function(e,t,r){r.r(t);var n=r(72791),a=(r(45852),r(86702)),o=r(72426),i=r.n(o),d=r(30753),c=r(57621),l=r(20890),b=r(39504),s=r(15586),u=r(33168),h=r(80184),f=d.K.events,p=(new Date).getFullYear(),m=(0,a.Zt)(i()),g=function(e){var t=e.event;return(0,h.jsxs)("span",{children:[(0,h.jsx)("strong",{children:t.title}),t.desc&&":  "+t.desc]})},w=function(e){var t=e.event;return(0,h.jsxs)("span",{children:[(0,h.jsx)("em",{style:{color:"magenta"},children:t.title}),(0,h.jsx)("p",{children:t.desc})]})};t.default=function(){var e=(0,u.$)().t;return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)(l.Z,{variant:"h1",mb:3,children:e("pages.title.calendarRendering")}),(0,h.jsx)(c.Z,{children:(0,h.jsx)(b.Z,{children:(0,h.jsx)(s.Z,{children:(0,h.jsx)(a.f,{localizer:m,events:f,defaultDate:new Date(p,3,1),style:{height:600},components:{event:g,agenda:{event:w}},defaultView:"agenda"})})})})]})}},15586:function(e,t,r){var n=r(4942),a=r(72791),o=r(12065),i=r(99875),d=r(13967),c=r(25502),l=r(80184);t.Z=function(e){var t=e.children,r=(0,d.Z)();return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(c.Z,{styles:{".rbc-overlay .rbc-event":{backgroundColor:r.palette.primary.main}}}),(0,l.jsx)(i.Z,{sx:{width:"100%",".rbc-toolbar":(0,n.Z)({marginBottom:"16px"},r.breakpoints.down("md"),{flexDirection:"column",alignItems:"flex-start",".rbc-toolbar-label":{margin:"10px 0"}}),".rbc-toolbar button":{cursor:"pointer",borderColor:function(e){return e.palette.divider},fontFamily:"inherit",boxShadow:"none",color:function(e){return e.palette.text.primary},borderRadius:1,"& + button":{mr:0,ml:"-1px"},"&:hover, &:focus, &:active:hover, &:active:focus, &.rbc-active, &.rbc-active:hover, &.rbc-active:focus":{boxShadow:"none",color:"common.white",borderColor:function(e){return e.palette.primary.main},backgroundColor:function(e){return e.palette.primary.main}}},".rbc-event, .rbc-day-slot .rbc-background-event":{backgroundColor:function(e){return e.palette.primary.main},"&:focus":{outline:"none"}},".rbc-event.rbc-selected, .rbc-day-slot .rbc-selected.rbc-background-event":{backgroundColor:function(e){return e.palette.primary.main}},".rbc-slot-selection, .rbc-selected-cell":{backgroundColor:function(e){return(0,o.Fq)(e.palette.primary.main,.5)}},".rbc-off-range-bg":{backgroundColor:function(e){return e.palette.action.hover}},".rbc-header, .rbc-header + .rbc-header, .rbc-day-bg + .rbc-day-bg, .rbc-time-view, .rbc-month-view, .rbc-month-row + .rbc-month-row":{borderColor:function(e){return e.palette.divider}},".rbc-agenda-view table.rbc-agenda-table":{borderColor:function(e){return e.palette.divider},"& thead > tr > th, & tbody > tr + tr, & tbody > tr > td + td":{borderRight:"none",borderLeft:function(e){return"solid 1px ".concat(e.palette.divider)}}},".rbc-timeslot-group, .rbc-time-content":{borderColor:function(e){return e.palette.divider}},".rbc-time-content > * + * > *, .rbc-header + .rbc-header, .rbc-time-header-content":{borderRight:"none",borderLeft:function(e){return"solid 1px ".concat(e.palette.divider)}},".rbc-time-header.rbc-overflowing":{borderLeft:"none",borderRight:function(e){return"solid 1px ".concat(e.palette.divider)}},".rbc-day-slot .rbc-events-container":{mr:"10px",ml:"0"},".rbc-day-slot .rbc-time-slot":{borderColor:function(e){return e.palette.divider}},".rbc-show-more":{bgcolor:"transparent",color:function(e){return e.palette.primary.main}},".rbc-btn-group > button":{borderRadius:1,"&:first-child:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:4,borderBottomLeftRadius:4},"&:last-child:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0,borderTopRightRadius:4,borderBottomRightRadius:4}},".rbc-day-bg":{"& + .rbc-day-bg":{borderRight:"none",borderLeft:function(e){return"solid 1px ".concat(e.palette.divider)}}}},children:t})]})}},30753:function(e,t,r){r.d(t,{G:function(){return o},K:function(){return a}});var n=(new Date).getFullYear(),a={events:[{title:"All Day Event very long title",allDay:!0,start:new Date(n,3,0),end:new Date(n,3,1)},{title:"Long Event",start:new Date(n,3,7),end:new Date(n,3,10)},{title:"DTS STARTS",start:new Date(2016,2,13,0,0,0),end:new Date(2016,2,20,0,0,0)},{title:"DTS ENDS",start:new Date(2016,10,6,0,0,0),end:new Date(2016,10,13,0,0,0)},{title:"Some Event",start:new Date(n,3,9,0,0,0),end:new Date(n,3,9,0,0,0)},{title:"Conference",start:new Date(n,3,11),end:new Date(n,3,13),desc:"Big conference for important people"},{title:"Meeting",start:new Date(n,3,12,10,30,0,0),end:new Date(n,3,12,12,30,0,0),desc:"Pre-meeting meeting, to prepare for the meeting"},{title:"Lunch",start:new Date(n,3,12,12,0,0,0),end:new Date(n,3,12,13,0,0,0),desc:"Power lunch"},{title:"Meeting",start:new Date(n,3,12,14,0,0,0),end:new Date(n,3,12,15,0,0,0)},{title:"Happy Hour",start:new Date(n,3,12,17,0,0,0),end:new Date(n,3,12,17,30,0,0),desc:"Most important meal of the day"},{title:"Dinner",start:new Date(n,3,12,20,0,0,0),end:new Date(n,3,12,21,0,0,0)},{title:"Birthday Party",start:new Date(n,3,13,7,0,0),end:new Date(n,3,13,10,30,0)},{title:"Birthday Party 2",start:new Date(n,3,13,7,0,0),end:new Date(n,3,13,10,30,0)},{title:"Birthday Party 3",start:new Date(n,3,13,7,0,0),end:new Date(n,3,13,10,30,0)},{title:"Late Night Event",start:new Date(n,3,17,19,30,0),end:new Date(n,3,18,2,0,0)},{title:"Multi-day Event",start:new Date(n,3,20,19,30,0),end:new Date(n,3,22,2,0,0)}]},o=[{id:"en",title:"en"},{id:"en-GB",title:"en-GB"},{id:"es",title:"es"},{id:"fr",title:"fr"},{id:"ar-AE",title:"ar-AE"}]}}]);
//# sourceMappingURL=1429.188e567c.chunk.js.map