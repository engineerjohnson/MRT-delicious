import{x as d,c as r,d as o,J as b,w as v,F as _,s as f,r as g,o as i,b as n,f as h,e as x}from"./index-28460db4.js";import{F as y}from"./FormGroup-35319183.js";import{T as u}from"./Toast-0e28cdc5.js";import{L as V}from"./index-c262e860.js";const F={class:"text-end mt-5"},N={type:"submit",class:"btn btn-danger me-1"},k={key:0,class:"spinner-border spinner-border-sm me-2",role:"status"},$=n("button",{type:"button",class:"btn btn-secondary"},"取消",-1),w={__name:"AdminAddProduct",setup(q){const e=d(!1);function c(t,s){e.value=!0;const l={data:{...t,price:Number(t.price),origin_price:Number(t.origin_price)}};f.post("https://vue3-course-api.hexschool.io/v2/api/deliciousfood/admin/product",l).then(a=>{e.value=!1,u.fire({title:`${a.data.message}`,icon:"success"}),s.setValues(m)}).catch(a=>{e.value=!1,u.fire({title:`${a.response.data.message?`${a.response.data.message}`:"新增商品失敗"}`,icon:"error"})})}const m={category:"日式",unit:"大慶站"},p=[{label:"標題",name:"title",placeholder:"請輸入產品名稱",rules:"required",as:"input",type:"text"},{label:"餐飲類型",name:"category",as:"select",value:"日式",options:[{label:"日式",value:"日式"},{label:"西餐",value:"西餐"},{label:"中式",value:"中式"},{label:"甜食",value:"甜食"}]},{label:"站別",name:"unit",as:"select",value:"大慶站",options:[{label:"大慶站",value:"大慶站"},{label:"豐樂公園站",value:"豐樂公園站"},{label:"文華高中",value:"文華高中"},{label:"水安宮站",value:"水安宮站"},{label:"文心崇德站",value:"文心崇德站"},{label:"松竹站",value:"松竹站"}]},{label:"銷售價",name:"price",rules:"required|integer",as:"input",type:"number"},{label:"原價",name:"origin_price",rules:"required|integer",as:"input",type:"number"},{label:"商品描述",name:"description",as:"input",type:"text"},{label:"商品內容",name:"content",as:"input",type:"text"},{label:"商品圖片",name:"imageUrl",as:"input",type:"text"},{label:"是否啟用",name:"is_enabled",as:"checkbox",type:"checkbox"}];return(t,s)=>{const l=g("VForm");return i(),r(_,null,[o(b(V),{active:e.value,"onUpdate:active":s[0]||(s[0]=a=>e.value=a),loader:"dots"},null,8,["active"]),o(l,{onSubmit:c,class:"mt-5"},{default:v(()=>[o(y,{"form-schema":p,pageDate:{}}),n("div",F,[n("button",N,[e.value?(i(),r("span",k)):h("",!0),x(" 新增商品 ")]),$])]),_:1})],64)}}};export{w as default};
