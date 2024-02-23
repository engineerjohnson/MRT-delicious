import{_ as z,x as _,C as M,c as s,d as y,J as B,b as t,H as D,F as n,h as b,f as H,s as S,o as e,t as h,e as I,j as L,i as k,p as N,l as O,V as A}from"./index-28460db4.js";import{L as T}from"./index-c262e860.js";import{U,_ as E,L as F}from"./PaginationView-7f8b9f7f.js";import{T as V}from"./Toast-0e28cdc5.js";const l=d=>(N("data-v-adbf00a6"),d=d(),O(),d),P={class:"modal-outside-style"},j={class:"table-responsive-xl"},J=l(()=>t("h5",{class:"mt-4"},"訂單列表",-1)),q={class:"table caption-top"},G=l(()=>t("thead",null,[t("tr",null,[t("th",{style:{width:"10%"}},"狀態"),t("th",{style:{width:"20%"}},"名稱"),t("th",{style:{width:"20%"}},"手機"),t("th",{style:{width:"35%"}},"商品資訊"),t("th",{style:{width:"10%"}})])],-1)),K={key:0,class:"table-group-divider"},Q={class:"vertical-align"},R={key:0,class:"badge bg-success"},W={key:1,class:"badge bg-danger"},X={class:"vertical-align"},Y={class:"vertical-align"},Z=["href"],tt={class:"vertical-align"},et=l(()=>t("br",null,null,-1)),st={class:"vertical-align"},ot=["onClick"],at=l(()=>t("svg",{class:"svg-opacity",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 512 512"},[t("path",{d:"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"})],-1)),it=[at],ct=["onClick"],nt=l(()=>t("svg",{class:"svg-opacity",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"14",viewBox:"0 0 448 512"},[t("path",{d:"M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"})],-1)),lt=[nt],dt={__name:"AdminOrderList",setup(d){const p=_(!1),u=_(!1),{checkLogin:x}=U(),c=_(""),C=_(null);function v(a=1){x(),C.value=a,!(c.value&&(a==0||a>c.value.pagination.total_pages))&&(u.value=!0,S.get(`https://vue3-course-api.hexschool.io/v2/api/deliciousfood/admin/orders?page=${a}`).then(i=>{i.data.success?c.value=i.data:V.fire({title:"無法取得產品資料，請重新整理畫面",icon:"error"})}).catch(i=>{V.fire({title:`${i.message}`,icon:"error"})}).finally(()=>{u.value=!1}))}return M(()=>{v()}),(a,i)=>{const g=A("tooltip");return e(),s(n,null,[y(B(T),{active:p.value,"onUpdate:active":i[0]||(i[0]=o=>p.value=o),loader:"dots"},null,8,["active"]),t("div",P,[u.value?(e(),D(F,{key:0})):(e(),s(n,{key:1},[t("div",j,[J,t("table",q,[G,c.value.orders?(e(),s("tbody",K,[(e(!0),s(n,null,b(c.value.orders,o=>{var m,f,w;return e(),s("tr",{key:o.id},[t("td",Q,[o.is_paid?(e(),s("span",R,"已結帳")):(e(),s("span",W,"未結帳"))]),t("td",X,h(((m=o.user)==null?void 0:m.name)||""),1),t("td",Y,[t("a",{href:`tel:${((f=o.user)==null?void 0:f.tel)||""}`},h(((w=o.user)==null?void 0:w.tel)||""),9,Z)]),t("td",tt,[(e(!0),s(n,null,b(o.products,(r,$)=>(e(),s(n,{key:$},[I(h(r.product.title)+" ("+h(r.total)+")",1),et],64))),128))]),t("td",st,[L((e(),s("button",{class:"p-0 me-2 btn-icon",type:"button",onClick:k(r=>a.openEditModal(o.id),["stop"])},it,8,ot)),[[g,"編輯"]]),L((e(),s("button",{class:"btn-icon p-0",type:"button",onClick:k(r=>a.openDeleteModal(o.id),["stop"])},lt,8,ct)),[[g,"刪除"]])])])}),128))])):H("",!0)])]),y(E,{"on-submit":v,pagination:c.value.pagination},null,8,["pagination"])],64))])],64)}}},pt=z(dt,[["__scopeId","data-v-adbf00a6"]]);export{pt as default};
