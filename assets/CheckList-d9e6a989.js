import{_ as b,m as _,a as v,c as g,d as o,b as e,w as V,F as C,r,o as k,n as d,j as L,v as w}from"./index-28460db4.js";import{c as u}from"./CartStore-65229a2b.js";import{c as y}from"./CartNavbar-ae520ae5.js";import{S as N}from"./Toast-0e28cdc5.js";import{L as F}from"./index-c262e860.js";const S={data(){return{location:"Check",isLoading:!1}},computed:{..._(u,["form","cart_length","orderId"])},components:{cartNavbar:y,Loading:F},methods:{...v(u,["getCart","createOrder"]),isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"需要正確的電話號碼"},Cart(){this.$router.push("/Cart")},pushCheckouts(){this.isLoading=!0,this.createOrder(),this.isLoading=!1},checkCartData(){this.cart_length===0&&N.fire({icon:"error",title:"購物車沒有產品",text:"購物車內沒有產品，需要先將產品加入購物車哦!!"}).then(s=>{(s.isConfirmed||s.isDismissed)&&this.$router.push("/Stand")})}},watch:{cart_length(s){s===0&&this.checkCartData()},orderId(s){s&&this.$router.push(`/Checkouts/${this.orderId}`)}},mounted(){this.getCart(),this.checkCartData()}},U={class:"content"},x={class:"container"},D={class:"row justify-content-center"},$=e("h2",{class:"text-center"},"訂單資料",-1),j={class:"col-10"},q={class:"d-flex justify-content-center"},B={class:"mb-3"},E=e("label",{for:"name",class:"form-label"},"請輸入姓名",-1),I={class:"mb-3"},M=e("label",{for:"tel",class:"form-label"},"請輸入電話",-1),z={class:"mb-3"},O=e("label",{for:"email",class:"form-label"},"請輸入信箱",-1),P={class:"mb-3"},A=e("label",{for:"address",class:"form-label"},"請輸入地址",-1),T={class:"mb-3"},G=e("label",{for:"massage",class:"form-label"},"歡迎留言~",-1),H={class:"d-flex justify-content-around mt-5"},J=e("button",{type:"submit",class:"btn btn-warning text-white mb-5"}," 送出訂單 ",-1);function K(s,t,Q,R,m,c){const f=r("Loading"),h=r("cartNavbar"),n=r("VField"),i=r("ErrorMessage"),p=r("VForm");return k(),g(C,null,[o(f,{active:m.isLoading,"onUpdate:active":t[0]||(t[0]=l=>m.isLoading=l),loader:"dots"},null,8,["active"]),e("div",U,[e("div",x,[o(h,{cartLocation:m.location},null,8,["cartLocation"]),e("div",D,[$,e("div",j,[e("div",q,[o(p,{class:"col-md-6",onSubmit:t[7]||(t[7]=l=>c.pushCheckouts())},{default:V(({errors:l})=>[e("div",B,[E,o(n,{id:"name",name:"姓名",type:"text",rules:"required",class:d(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",modelValue:s.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=a=>s.form.user.name=a)},null,8,["class","modelValue"]),o(i,{name:"姓名",class:"invalid-feedback"})]),e("div",I,[M,o(n,{id:"tel",name:"電話",type:"tel",rules:c.isPhone,class:d(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入電話",modelValue:s.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>s.form.user.tel=a)},null,8,["rules","class","modelValue"]),o(i,{name:"電話",class:"invalid-feedback"})]),e("div",z,[O,o(n,{id:"email",name:"信箱",type:"text",rules:"required|email",class:d(["form-control",{"is-invalid":l.信箱}]),placeholder:"請輸入信箱",modelValue:s.form.user.email,"onUpdate:modelValue":t[3]||(t[3]=a=>s.form.user.email=a)},null,8,["class","modelValue"]),o(i,{name:"信箱",class:"invalid-feedback"})]),e("div",P,[A,o(n,{id:"address",name:"地址",type:"text",rules:"required",class:d(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入地址",modelValue:s.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=a=>s.form.user.address=a)},null,8,["class","modelValue"]),o(i,{name:"地址",class:"invalid-feedback"})]),e("div",T,[G,L(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=a=>s.form.message=a),style:{resize:"none"}},null,512),[[w,s.form.message]])]),e("div",H,[e("button",{type:"button",class:"btn btn-warning text-white mb-5",onClick:t[6]||(t[6]=a=>c.Cart())}," 回購物車 "),J])]),_:1})])])])])])],64)}const se=b(S,[["render",K]]);export{se as default};
