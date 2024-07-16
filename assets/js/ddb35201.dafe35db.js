"use strict";(self.webpackChunktandem=self.webpackChunktandem||[]).push([[1326],{3149:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var i=n(4848),l=n(8453);const c={sidebar_label:"FUP",sidebar_position:1},d="FUP",r={id:"technical/guardian/fup",title:"FUP",description:'Exit - "press F16"',source:"@site/docs/technical/guardian/2-fup.md",sourceDirName:"technical/guardian",slug:"/technical/guardian/fup",permalink:"/nonstop101/docs/technical/guardian/fup",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technical/guardian/2-fup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"FUP",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SAFECOM",permalink:"/nonstop101/docs/technical/guardian/safecom"},next:{title:"Database - Roland",permalink:"/nonstop101/docs/category/database---roland-1"}},t={},o=[{value:"Edit",id:"edit",level:2},{value:"Exit - &quot;press F16&quot;",id:"exit---press-f16",level:2},{value:"Finding Help",id:"finding-help",level:2},{value:"Search For Files",id:"search-for-files",level:2},{value:"Check if memory pressure at a snapshot",id:"check-if-memory-pressure-at-a-snapshot",level:3},{value:"View All:",id:"view-all",level:3},{value:"Disks",id:"disks",level:4},{value:"Processes in CPU 0",id:"processes-in-cpu-0",level:4},{value:"to get into oss",id:"to-get-into-oss",level:2},{value:"Pathcom",id:"pathcom",level:2},{value:"Tmfcom",id:"tmfcom",level:2},{value:"SCF",id:"scf",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"fup",children:"FUP"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"status"})," - checks on the process name"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"fileinfo "})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"tedit [filename], r"})," - open file, read-only"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"fc"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"purge [FILENAME]"})}),"\n",(0,i.jsx)(s.h2,{id:"edit",children:"Edit"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"l"})," - list"]}),"\n",(0,i.jsx)(s.h2,{id:"exit---press-f16",children:'Exit - "press F16"'}),"\n",(0,i.jsx)(s.h2,{id:"finding-help",children:"Finding Help"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Safecom","\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Log into safecom"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"=help"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"search-for-files",children:"Search For Files"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"fileinfo"})," - see all files in the subvolume"]}),"\n",(0,i.jsx)(s.h3,{id:"check-if-memory-pressure-at-a-snapshot",children:"Check if memory pressure at a snapshot"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"peek /cpu [number]/"}),"  - i.e peek /cpu 2/"]}),"\n",(0,i.jsx)(s.h3,{id:"view-all",children:"View All:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.h4,{id:"disks",children:"Disks"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"status *, prog [$DISK.SUBVOL.OBJECTNAME]"})," - status, including system disks"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"dsap *, short"})," - ",(0,i.jsx)(s.strong,{children:"short"})," list of all disks (*) using the disk space analysis program (dsap)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.h4,{id:"processes-in-cpu-0",children:"Processes in CPU 0"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"status 0"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Fileinfo $ * .*.pathmon"}),"\n",(0,i.jsx)(s.p,{children:"status *, prog $system.system.pathmon"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"fup"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"fup dup"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"whoami"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"set prompt both"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:" volume $disk.subvolume"})}),"\n",(0,i.jsx)(s.h2,{id:"to-get-into-oss",children:"to get into oss"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"osh "})}),"\n",(0,i.jsx)(s.h2,{id:"pathcom",children:"Pathcom"}),"\n",(0,i.jsx)(s.h2,{id:"tmfcom",children:"Tmfcom"}),"\n",(0,i.jsx)(s.h2,{id:"scf",children:"SCF"})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>r});var i=n(6540);const l={},c=i.createContext(l);function d(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);