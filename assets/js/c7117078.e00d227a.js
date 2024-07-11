"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[8707],{2268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(4848),i=n(8453);const o={sidebar_label:"Overview",sidebar_position:1},r="What is the NonStop?",a={id:"platform/overview",title:"What is the NonStop?",description:"NonStop is a platform that runs some of the world\u2019s most exciting workloads in our day-to-day life. From producing luxury cars, to making payments in our grocery shops, NonStop is the platform that lets our customers, and their engineers get their sleep, while their mission-critical applications continue in data centres and on private clouds.",source:"@site/docs/platform/1-overview.md",sourceDirName:"platform",slug:"/platform/overview",permalink:"/nonstop101/docs/platform/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/platform/1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NonStop Platform",permalink:"/nonstop101/docs/category/nonstop-platform"},next:{title:"System Architecture",permalink:"/nonstop101/docs/platform/architecture"}},l={},c=[{value:"Many Nodes, One System Administration",id:"many-nodes-one-system-administration",level:2},{value:"Patented Process Pair Technology",id:"patented-process-pair-technology",level:2},{value:"What happens when there is failure?",id:"what-happens-when-there-is-failure",level:3}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"what-is-the-nonstop",children:"What is the NonStop?"}),"\n",(0,s.jsx)(t.p,{children:"NonStop is a platform that runs some of the world\u2019s most exciting workloads in our day-to-day life. From producing luxury cars, to making payments in our grocery shops, NonStop is the platform that lets our customers, and their engineers get their sleep, while their mission-critical applications continue in data centres and on private clouds."}),"\n",(0,s.jsx)(t.h2,{id:"many-nodes-one-system-administration",children:"Many Nodes, One System Administration"}),"\n",(0,s.jsxs)(t.p,{children:["Typically, a system of multiple nodes would require a team of administrators to maintain the cluster and ensure load is balanced when there is failure. ",(0,s.jsx)(t.strong,{children:"The more nodes we have, the more complex the system"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Not for the NonStop."}),"\n",(0,s.jsxs)(t.p,{children:["On this platform, a cluster of multiple nodes (we're talking about up to 1000+ CPUS) is seen as one single system image. We do not worry about version control across the nodes, and any code to handle failures - data and processes are mirrored across the entire system and ",(0,s.jsx)(t.strong,{children:"a NonStop system of many nodes is seen as one"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"patented-process-pair-technology",children:"Patented Process Pair Technology"}),"\n",(0,s.jsx)(t.p,{children:"The NonStop OS runs applications and its processes using the MPP (massively parallel) architecture, which is a shared-nothing architecture, with mirrored paths between instructions etc."}),"\n",(0,s.jsxs)(t.p,{children:["It is ",(0,s.jsx)(t.a,{href:"https://blog.stratus.com/what-exactly-is-high-availability-anyway/#:~:text=Zero%20End%20User%20Impact%20(No%20Downtime%20%E2%80%93%20IDC%20calls%20this%20AL4)&text=This%20means%20that%20there%20is,the%20event%20of%20a%20failure",children:"IDC Availability Level 4"})," and provides continuous, uninterrupted operation in the event of failure."]}),"\n",(0,s.jsx)(t.p,{children:"This means we specialise in applications that require clustering for highest availabilities."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Simplicity is Best",src:n(2645).A+"",width:"1165",height:"493"})}),"\n",(0,s.jsx)(t.p,{children:"The NonStop OS has patented its fault-tolerant and self-healing technology by allowing paired processes to takeover when a primary component fails."}),"\n",(0,s.jsx)(t.h3,{id:"what-happens-when-there-is-failure",children:"What happens when there is failure?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Component fails."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Mirrored component takes over the role of failed component."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The failed component reboots itself, and sets itself as the mirror."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Processes are mirrored once again."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The process can repeat as many times as possible as necessary, and ensures the ",(0,s.jsx)(t.strong,{children:"highest level of availability"})," qualified by IDC."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2645:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/simplicity-30b6e8d2a6351eac91d551fb302d1276.PNG"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);