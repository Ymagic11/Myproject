(function(){"use strict";var e={871:function(e,t,a){var l=a(9003);function o(e,t,a,o,n,r){const i=(0,l.up)("router-view");return n.isRouterAlive?((0,l.wg)(),(0,l.j4)(i,{key:0})):(0,l.kq)("",!0)}var n=a(3139),r={provide(){return{reload:this.reload,echarts:n}},data(){return{isRouterAlive:!0}},methods:{reload(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}}},i=a(89);const s=(0,i.Z)(r,[["render",o]]);var u=s,d=a(2483);const m={class:"contain"},c={href:"#"};function f(e,t,a,o,n,r){const i=(0,l.up)("el-input"),s=(0,l.up)("el-form-item"),u=(0,l.up)("el-button"),d=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("div",m,[(0,l._)("div",{class:"title",onClick:t[0]||(t[0]=(...e)=>r.checkform&&r.checkform(...e))},[(0,l._)("a",c,(0,l.zw)(this.usercheck?"Be A Business?":"Be A User?"),1)]),(0,l.Wm)(d,{ref:"ruleFormRef","status-icon":"",rules:n.rule,model:n.form},{default:(0,l.w5)((()=>[this.usercheck?((0,l.wg)(),(0,l.j4)(s,{key:0,label:"Username",prop:"username"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{autocomplete:"off",placeholder:"用户名",modelValue:n.form.username,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.username=e)},null,8,["modelValue"])])),_:1})):(0,l.kq)("",!0),this.usercheck?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(s,{key:1,label:"Business",prop:"bname"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{autocomplete:"off",placeholder:"商家名",modelValue:n.form.bname,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.bname=e)},null,8,["modelValue"])])),_:1})),(0,l.Wm)(s,{label:"Password",prop:"password"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{type:"password",autocomplete:"off",placeholder:"密码",modelValue:n.form.password,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.password=e),"show-password":""},null,8,["modelValue"])])),_:1}),this.usercheck?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(s,{key:2,label:"Code",prop:"code"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{type:"password",autocomplete:"off",placeholder:"商家码(随便写)",modelValue:n.form.code,"onUpdate:modelValue":t[4]||(t[4]=e=>n.form.code=e),"show-password":""},null,8,["modelValue"])])),_:1})),(0,l.Wm)(s,{class:"el-btn"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{type:"primary",onClick:r.login,round:""},{default:(0,l.w5)((()=>[(0,l.Uk)("登录")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["rules","model"])])}a(7658);var p=a(70);const g=async e=>{if(1===e.status)return e.code?(localStorage.removeItem("token"),$message({showClose:!0,message:e.message,type:"error"}),$router.push("/login")):$message({showClose:!0,message:e.message,type:"error"}),Promise.reject(e.message);if(0===e.status)if(e.code)$message({showClose:!0,message:e.message,type:"success"});else{const t=e.token;if(!t)return e.message&&$message({showClose:!0,message:e.message,type:"success"}),e.data;localStorage.setItem("token",t),localStorage.setItem("info",JSON.stringify(e.info)),$message({showClose:!0,message:e.message,type:"success"})}};p.ZP.defaults.baseURL="http://127.0.0.1:3007",p.ZP.defaults.headers={"Content-Type":"application/x-www-form-urlencoded"};const w=function(e){let t=new Promise((t=>{p.ZP.request({method:"post",url:"/api/reguser",data:e}).then((e=>{t(g(e.data))}))}));return t},h=function(e){let t=new Promise((t=>{p.ZP.request({method:"post",url:"/api/login",data:e}).then((e=>{t(g(e.data))}))}));return t},_=function(e){const t=localStorage.getItem("token");let a=new Promise((a=>{p.ZP.request({method:"GET",url:"/my/userinfo",params:e,headers:{Authorization:t}}).then((e=>{a(g(e.data))}))}));return a},b=function(e){let t=new Promise((t=>{p.ZP.request({method:"post",url:"/api/regBuser",data:e}).then((e=>{t(g(e.data))}))}));return t},y=function(e){let t=new Promise((t=>{p.ZP.request({method:"post",url:"/api/buslogin",data:e}).then((e=>{t(g(e.data))}))}));return t},k=function(e){const t=localStorage.getItem("token");let a=new Promise((a=>{p.ZP.request({method:"GET",url:"/my/getBusInfo",params:e,headers:{Authorization:t}}).then((e=>{a(g(e.data))}))}));return a},v=function(e){const t=localStorage.getItem("token");let a=new Promise((a=>{p.ZP.request({method:"POST",url:"/my/update/pic",data:e,headers:{Authorization:t}}).then((e=>{a(g(e.data))}))}));return a},W=function(e){const t=localStorage.getItem("token");let a=new Promise((a=>{p.ZP.request({method:"POST",url:"/goods/addgoods",data:e,headers:{Authorization:t}}).then((e=>{a(g(e.data))}))}));return a},x=function(e){const t=localStorage.getItem("token");let a=new Promise((a=>{p.ZP.request({method:"GET",url:"/goods/getgoods",params:e,headers:{Authorization:t}}).then((e=>{a(g(e.data))}))}));return a},C=function(e){const t=localStorage.getItem("token");let a=new Promise((a=>{p.ZP.request({method:"POST",url:"/goods/updatefood",data:e,headers:{Authorization:t}}).then((e=>{a(g(e.data))}))}));return a},U=function(e){const t=localStorage.getItem("token");let a=new Promise((e=>{p.ZP.request({method:"GET",url:"/my/getdata",headers:{Authorization:t}}).then((t=>{e(g(t.data))}))}));return a},V=function(e){const t=localStorage.getItem("token");let a=new Promise((e=>{p.ZP.request({method:"GET",url:"/my/gettotal",headers:{Authorization:t}}).then((t=>{e(g(t.data))}))}));return a};var D={data(){return{usercheck:!0,form:{username:"",password:"",bname:"",code:""},rule:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:7,message:"用户名长度在3-7",trigger:"blur"}],bname:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:7,message:"用户名长度在3-7",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:12,message:"密码长度在3-12",trigger:"blur"}],code:[{required:!0,message:"请输入商家码",trigger:"blur"},{min:3,max:10,message:"商家码长度在3-10",trigger:"blur"}]}}},methods:{login(){this.$refs.ruleFormRef.validate((async e=>{if(e)if(this.usercheck){const e=this.form;await w(e),await h(e),$router.push("/index")}else{const e=this.form;await b(e),await y(e),this.$router.push("/index")}}))},checkform(){this.usercheck=!this.usercheck,this.$refs.ruleFormRef.resetFields()}}};const P=(0,i.Z)(D,[["render",f],["__scopeId","data-v-6a10e46b"]]);var S=P;const q=e=>((0,l.dD)("data-v-befce37e"),e=e(),(0,l.Cn)(),e),z={class:"common-layout"},$=q((()=>(0,l._)("span",null,"数据管理",-1))),I=q((()=>(0,l._)("span",null,"添加数据",-1))),j=q((()=>(0,l._)("span",null,"图表",-1))),O=q((()=>(0,l._)("span",null,"设置",-1)));function A(e,t,a,o,n,r){const i=(0,l.up)("HomeFilled"),s=(0,l.up)("el-icon"),u=(0,l.up)("el-menu-item"),d=(0,l.up)("router-link"),m=(0,l.up)("Document"),c=(0,l.up)("el-sub-menu"),f=(0,l.up)("Plus"),p=(0,l.up)("Star"),g=(0,l.up)("Setting"),w=(0,l.up)("el-menu"),h=(0,l.up)("el-scrollbar"),_=(0,l.up)("el-aside"),b=(0,l.up)("elheader"),y=(0,l.up)("router-view"),k=(0,l.up)("el-main"),v=(0,l.up)("el-container");return(0,l.wg)(),(0,l.iD)("div",z,[(0,l.Wm)(v,{style:{height:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{width:"250px"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{"text-color":"#fff","background-color":"#545c64","default-active":this.$store.state.defaultactive,"active-text-color":"#ffd04b"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{to:"/index"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"1"},{title:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i)])),_:1}),(0,l.Uk)("首页 ")])),_:1})])),_:1}),(0,l.Wm)(c,{index:"2"},{title:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m)])),_:1}),$])),default:(0,l.w5)((()=>[(0,l.Wm)(d,{to:"/index/dataman"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"2-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("用户列表")])),_:1})])),_:1}),(0,l.Wm)(d,{to:"/index/busman"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"2-2"},{default:(0,l.w5)((()=>[(0,l.Uk)("商家列表")])),_:1})])),_:1}),(0,l.Wm)(d,{to:"/index/foodman"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"2-3"},{default:(0,l.w5)((()=>[(0,l.Uk)("菜品列表")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{index:"3"},{title:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f)])),_:1}),I])),default:(0,l.w5)((()=>[(0,l.Wm)(d,{to:"/index/addGoods"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"3-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("添加商品")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{index:"4"},{title:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p)])),_:1}),j])),default:(0,l.w5)((()=>[(0,l.Wm)(d,{to:"/index/tubiao"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"4-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("用户分布")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{index:"5"},{title:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g)])),_:1}),O])),default:(0,l.w5)((()=>[(0,l.Wm)(d,{to:"/index/setting"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{index:"5-1"},{default:(0,l.w5)((()=>[(0,l.Uk)("头像设置")])),_:1})])),_:1})])),_:1})])),_:1},8,["default-active"])])),_:1})])),_:1}),(0,l.Wm)(v,{class:"is-vertical"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(this.$store.state.fullname),1)])),three:(0,l.w5)((()=>[(0,l.Uk)((0,l.zw)(this.$store.state.basename),1)])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,null,{default:(0,l.w5)((({Component:e})=>[((0,l.wg)(),(0,l.j4)(l.Ob,{include:"dataman,busman,foodman"},[((0,l.wg)(),(0,l.j4)((0,l.LL)(e)))],1024))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}const Z=e=>((0,l.dD)("data-v-79b7034c"),e=e(),(0,l.Cn)(),e),N=Z((()=>(0,l._)("a",{href:"#"},"首页",-1))),R=["src"],E={style:{display:"flex","align-items":"center"}},G=Z((()=>(0,l._)("span",null,"设置",-1))),T={style:{display:"flex","align-items":"center"}},F=Z((()=>(0,l._)("span",null,"退出",-1)));function H(e,t,a,o,n,r){const i=(0,l.up)("el-breadcrumb-item"),s=(0,l.up)("el-breadcrumb"),u=(0,l.up)("UserFilled"),d=(0,l.up)("el-icon"),m=(0,l.up)("el-avatar"),c=(0,l.up)("Setting"),f=(0,l.up)("el-dropdown-item"),p=(0,l.up)("SwitchButton"),g=(0,l.up)("el-dropdown-menu"),w=(0,l.up)("el-dropdown"),h=(0,l.up)("el-page-header");return(0,l.wg)(),(0,l.j4)(h,null,{breadcrumb:(0,l.w5)((()=>[(0,l.Wm)(s,{separator:"/"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{onClick:r.backhome},{default:(0,l.w5)((()=>[N])),_:1},8,["onClick"]),this.$store.state.fullname?((0,l.wg)(),(0,l.j4)(i,{key:0,to:"#"},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default",{},void 0,!0)])),_:3})):(0,l.kq)("",!0),this.$store.state.fullname?((0,l.wg)(),(0,l.j4)(i,{key:1},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"three",{},void 0,!0)])),_:3})):(0,l.kq)("",!0)])),_:3})])),extra:(0,l.w5)((()=>[(0,l.Wm)(w,{trigger:"hover"},{dropdown:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{onClick:r.gosetting},{default:(0,l.w5)((()=>[(0,l._)("div",E,[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c)])),_:1}),G])])),_:1},8,["onClick"]),(0,l.Wm)(f,{onClick:r.out},{default:(0,l.w5)((()=>[(0,l._)("div",T,[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p)])),_:1}),F])])),_:1},8,["onClick"])])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[this.info.user_pic?((0,l.wg)(),(0,l.iD)("img",{key:0,src:this.info.user_pic,class:"avatar"},null,8,R)):((0,l.wg)(),(0,l.j4)(d,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(u)])),_:1}))])),_:1})])),_:1})])),_:3})}var J={name:"elheader",mounted(){this.info=JSON.parse(localStorage.getItem("info")),window.addEventListener("setItem",(e=>{"info"===e.key&&(this.info=JSON.parse(e.newValue))}))},methods:{backhome(){$router.push("/index")},gosetting(){$router.push("/index/setting")},out(){localStorage.clear(),this.$router.push("/login")}},data(){return{info:{}}}};const Y=(0,i.Z)(J,[["render",H],["__scopeId","data-v-79b7034c"]]);var B=Y,L={name:"index",data(){return{}},methods:{},components:{elheader:B}};const M=(0,i.Z)(L,[["render",A],["__scopeId","data-v-befce37e"]]);var K=M;const Q={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},X=(0,l._)("span",{style:{"font-size":"26px","font-weight":"700"}},"数据统计",-1),ee={style:{display:"flex"}},te=(0,l._)("li",{class:"biaoqian"},"总数据:",-1),ae={class:"biaoqian"},le={class:"total"},oe={class:"biaoqian"},ne={class:"total"},re={class:"biaoqian"},ie={class:"total"},se=(0,l._)("div",{id:"echart",style:{width:"1000px",height:"500px",margin:"50px auto 0"}},null,-1);var ue={__name:"DataAna",setup(e){let t=(0,l.f3)("echarts"),a=(0,l.iH)(),o=(0,l.iH)(),n=(0,l.iH)();async function r(){const e=await V();a.value=e[0][0].usertotal,o.value=e[1][0].bustotal,n.value=e[2][0].foodtotal}return(0,l.bv)((async e=>{r();const a=await U();let l=[a.userone,a.usertwo,a.usertree,a.userfour,a.userfive],o=[a.busone,a.bustwo,a.bustree,a.busfour,a.busfive];const n=new Date,i=n.getFullYear(),s=n.getMonth()+1;let u=n.getDate();const d=[];for(var m=0;m<5;m++)d.push(`${i}-${s}-`+(u-m));let c=t.init(document.getElementById("echart"));c.setOption({title:{text:"走势图"},tooltip:{trigger:"axis"},legend:{data:["用户","商家"]},xAxis:{type:"category",boundaryGap:!1,data:d},yAxis:{type:"value"},series:[{name:"用户",data:l,type:"line"},{name:"商家",data:o,type:"line"}]})})),(e,t)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",Q,[X,(0,l._)("div",null,[(0,l._)("ul",ee,[te,(0,l._)("li",ae,[(0,l._)("span",le,(0,l.zw)((0,l.SU)(a)),1),(0,l.Uk)("注册用户")]),(0,l._)("li",oe,[(0,l._)("span",ne,(0,l.zw)((0,l.SU)(o)),1),(0,l.Uk)("注册商家")]),(0,l._)("li",re,[(0,l._)("span",ie,(0,l.zw)((0,l.SU)(n)),1),(0,l.Uk)("菜品")])])])]),se],64))}};const de=ue;var me=de;const ce={style:{display:"flex","align-items":"center"}},fe={style:{"margin-left":"10px"}},pe={style:{display:"flex","align-items":"center"}},ge={style:{"margin-left":"10px"}},we={style:{color:"#333",fontSize:"13px"}};function he(e,t,a,o,n,r){const i=(0,l.up)("el-table-column"),s=(0,l.up)("timer"),u=(0,l.up)("el-icon"),d=(0,l.up)("UserFilled"),m=(0,l.up)("el-table"),c=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(m,{data:n.tableData,height:"500",style:{width:"100%"},"header-cell-style":{background:"#eef1f6",color:"#000000",fontWeight:600},"cell-style":{color:"#000"}},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{label:"#",type:"index","min-width":"50"}),(0,l.Wm)(i,{label:"注册时间","min-width":"100"},{default:(0,l.w5)((e=>[(0,l._)("div",ce,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l._)("span",fe,(0,l.zw)(e.row.date),1)])])),_:1}),(0,l.Wm)(i,{label:"用户姓名","min-width":"100"},{default:(0,l.w5)((e=>[(0,l._)("div",pe,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1}),(0,l._)("span",ge,(0,l.zw)(e.row.username),1)])])),_:1})])),_:1},8,["data"]),(0,l.Wm)(c,{background:"",layout:"slot, prev, pager, next",total:n.total,onCurrentChange:r.currentchange,onPrevClick:r.prev,onNextClick:r.next,"current-page":n.currentpage,"onUpdate:current-page":t[0]||(t[0]=e=>n.currentpage=e)},{default:(0,l.w5)((()=>[(0,l._)("div",we," 共"+(0,l.zw)(n.total)+"条 ",1)])),_:1},8,["total","onCurrentChange","onPrevClick","onNextClick","current-page"])],64)}var _e={name:"dataman",created(){this.getlist()},data(){return{tableData:[],data:{limit:10,offset:0},currentpage:1,total:0}},methods:{async getlist(){const e=await _(this.data);this.tableData=e[0],this.total=e[1][0].total},async prev(){this.data.offset=10*(this.currentpage-1),await this.getlist()},async next(){this.data.offset=10*(this.currentpage-1),await this.getlist()},async currentchange(){this.data.offset=10*(this.currentpage-1),await this.getlist()}}};const be=(0,i.Z)(_e,[["render",he]]);var ye=be;const ke={style:{display:"flex","align-items":"center"}},ve={style:{"margin-left":"10px"}},We={style:{display:"flex","align-items":"center"}},xe={style:{"margin-left":"10px"}},Ce={style:{color:"#333",fontSize:"13px"}};function Ue(e,t,a,o,n,r){const i=(0,l.up)("el-table-column"),s=(0,l.up)("timer"),u=(0,l.up)("el-icon"),d=(0,l.up)("UserFilled"),m=(0,l.up)("el-table"),c=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(m,{data:n.tableData,height:"500",style:{width:"100%"},"header-cell-style":{background:"#eef1f6",color:"#000000",fontWeight:600},"cell-style":{color:"#000"}},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{label:"#",type:"index","min-width":"50"}),(0,l.Wm)(i,{label:"注册时间","min-width":"100"},{default:(0,l.w5)((e=>[(0,l._)("div",ke,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}),(0,l._)("span",ve,(0,l.zw)(e.row.date),1)])])),_:1}),(0,l.Wm)(i,{label:"商家姓名","min-width":"100"},{default:(0,l.w5)((e=>[(0,l._)("div",We,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d)])),_:1}),(0,l._)("span",xe,(0,l.zw)(e.row.bname),1)])])),_:1})])),_:1},8,["data"]),(0,l.Wm)(c,{background:"",layout:"slot, prev, pager, next",total:n.total,onCurrentChange:r.currentchange,onPrevClick:r.prev,onNextClick:r.next,"current-page":n.currentpage,"onUpdate:current-page":t[0]||(t[0]=e=>n.currentpage=e)},{default:(0,l.w5)((()=>[(0,l._)("div",Ce," 共"+(0,l.zw)(n.total)+"条 ",1)])),_:1},8,["total","onCurrentChange","onPrevClick","onNextClick","current-page"])],64)}var Ve={name:"busman",created(){this.getlist()},data(){return{tableData:[],data:{limit:10,offset:0},currentpage:1,total:0}},methods:{async getlist(){const e=await k(this.data);this.tableData=e[0],this.total=e[1][0].total},async prev(){this.data.offset=10*(this.currentpage-1),await this.getlist()},async next(){this.data.offset=10*(this.currentpage-1),await this.getlist()},async currentchange(){this.data.offset=10*(this.currentpage-1),await this.getlist()}}};const De=(0,i.Z)(Ve,[["render",Ue]]);var Pe=De;const Se=e=>((0,l.dD)("data-v-2bd5020a"),e=e(),(0,l.Cn)(),e),qe={class:"common-layout"},ze={class:"title"},$e={class:"contain"},Ie={class:"attribute"},je={class:"ml-2"},Oe={class:"attribute"},Ae={class:"ml-2"},Ze={class:"attribute"},Ne={class:"ml-2"},Re={key:0,class:"attribute"},Ee={class:"ml-2"},Ge={class:"attribute"},Te={class:"ml-2"},Fe={class:"attribute"},He=Se((()=>(0,l._)("span",null,"更新头像:",-1))),Je=["src"];function Ye(e,t,a,o,n,r){const i=(0,l.up)("el-header"),s=(0,l.up)("Plus"),u=(0,l.up)("el-icon"),d=(0,l.up)("el-upload"),m=(0,l.up)("el-main"),c=(0,l.up)("el-container");return(0,l.wg)(),(0,l.iD)("div",qe,[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l._)("div",ze,(0,l.zw)(this.info.code?"商家设置":"用户设置"),1)])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l._)("div",$e,[(0,l._)("div",Ie,[(0,l.Uk)("姓名:"),(0,l._)("span",je,(0,l.zw)(this.info.code?this.info.bname:this.info.username),1)]),(0,l._)("div",Oe,[(0,l.Uk)("注册时间:"),(0,l._)("span",Ae,(0,l.zw)(this.info.date),1)]),(0,l._)("div",Ze,[(0,l.Uk)("权限:"),(0,l._)("span",Ne,(0,l.zw)(this.info.code?"商家":"用户"),1)]),this.info.code?((0,l.wg)(),(0,l.iD)("div",Re,[(0,l.Uk)("商家码:"),(0,l._)("span",Ee,(0,l.zw)(this.info.code),1)])):(0,l.kq)("",!0),(0,l._)("div",Ge,[(0,l.Uk)("ID:"),(0,l._)("span",Te,(0,l.zw)(this.info.id),1)]),(0,l._)("div",Fe,[He,(0,l.Wm)(d,{class:"avatar-uploader","show-file-list":!1,"http-request":r.beforeAvatarUpload},{default:(0,l.w5)((()=>[this.info.user_pic?((0,l.wg)(),(0,l.iD)("img",{key:0,src:this.info.user_pic,class:"avatar"},null,8,Je)):((0,l.wg)(),(0,l.j4)(u,{key:1,class:"avatar-uploader-icon"},{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1}))])),_:1},8,["http-request"])])])])),_:1})])),_:1})])}var Be={name:"setting",mounted(){this.info=JSON.parse(localStorage.getItem("info")),window.addEventListener("setItem",(e=>{"info"===e.key&&(this.info=JSON.parse(e.newValue))}))},data(){return{info:{},img:""}},methods:{beforeAvatarUpload(e){let t=e.file,a=t.name.lastIndexOf("."),l=t.name.substr(a+1);const o=["png","PNG","jpg","JPG"],n=t.size/1024/1024<5;if(!n)return $messagee({showClose:!0,message:"图片太大",grouping:!0,type:"warning"}),!1;if(o.indexOf(l)<0)return $messagee({showClose:!0,message:"图片格式不符",type:"warning",grouping:!0}),!1;{const e=new FileReader;e.onload=async e=>{if(this.info.code){const t=await v({pic:e.target.result,code:this.info.code});let a={...this.info,user_pic:t};$addStorage("info",JSON.stringify(a))}else{const t=await v({pic:e.target.result});let a={...this.info,user_pic:t};$addStorage("info",JSON.stringify(a))}},e.readAsDataURL(t)}}}};const Le=(0,i.Z)(Be,[["render",Ye],["__scopeId","data-v-2bd5020a"]]);var Me=Le;const Ke=e=>((0,l.dD)("data-v-6ae78756"),e=e(),(0,l.Cn)(),e),Qe=Ke((()=>(0,l._)("header",{style:{"text-align":"center","font-size":"18px"}},"添加食品",-1))),Xe=["src"],et={style:{"text-align":"center"}};function tt(e,t,a,o,n,r){const i=(0,l.up)("el-option"),s=(0,l.up)("el-select"),u=(0,l.up)("el-form-item"),d=(0,l.up)("el-input"),m=(0,l.up)("Plus"),c=(0,l.up)("el-icon"),f=(0,l.up)("el-upload"),p=(0,l.up)("el-radio"),g=(0,l.up)("el-radio-group"),w=(0,l.up)("el-input-number"),h=(0,l.up)("el-button"),_=(0,l.up)("el-table-column"),b=(0,l.up)("el-table"),y=(0,l.up)("el-form"),k=(0,l.up)("el-dialog"),v=(0,l.up)("el-col"),W=(0,l.up)("el-row");return(0,l.wg)(),(0,l.j4)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{span:15},{default:(0,l.w5)((()=>[Qe,(0,l.Wm)(y,{ref:"formRef","label-width":"100px",model:n.form,rules:n.rule},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{prop:"foodtype",label:"食品类型","show-message":"",required:""},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:n.form.foodtype,"onUpdate:modelValue":t[0]||(t[0]=e=>n.form.foodtype=e),placeholder:"请选择"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.options,(e=>((0,l.wg)(),(0,l.j4)(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(u,{prop:"foodname","show-message":"",required:"",label:"食品名称"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:n.form.foodname,"onUpdate:modelValue":t[1]||(t[1]=e=>n.form.foodname=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{label:"食品详情"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:n.form.fooddetail,"onUpdate:modelValue":t[2]||(t[2]=e=>n.form.fooddetail=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{label:"上传食品图片"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{class:"avatar-uploader","show-file-list":!1,"http-request":r.beforeAvatarUpload},{default:(0,l.w5)((()=>[this.form.pic?((0,l.wg)(),(0,l.iD)("img",{key:0,src:this.form.pic,class:"avatar"},null,8,Xe)):((0,l.wg)(),(0,l.j4)(c,{key:1,class:"avatar-uploader-icon"},{default:(0,l.w5)((()=>[(0,l.Wm)(m)])),_:1}))])),_:1},8,["http-request"])])),_:1}),(0,l.Wm)(u,{label:"食品特点"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:n.form.foodspecil,"onUpdate:modelValue":t[3]||(t[3]=e=>n.form.foodspecil=e),multiple:"","tag-type":"warning",placeholder:"请选择"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.optionstwo,(e=>((0,l.wg)(),(0,l.j4)(i,{key:e.value,value:e.value},null,8,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(u,{label:"食品规格"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{modelValue:n.radio,"onUpdate:modelValue":t[4]||(t[4]=e=>n.radio=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{label:"1"},{default:(0,l.w5)((()=>[(0,l.Uk)("单规格")])),_:1}),(0,l.Wm)(p,{onClick:r.push,label:"2"},{default:(0,l.w5)((()=>[(0,l.Uk)("多规格")])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1}),"1"==n.radio?((0,l.wg)(),(0,l.j4)(u,{key:0,label:"价格"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:n.baseform.price,"onUpdate:modelValue":t[5]||(t[5]=e=>n.baseform.price=e),min:0,max:30},null,8,["modelValue"])])),_:1})):(0,l.kq)("",!0),"1"==n.radio?((0,l.wg)(),(0,l.j4)(u,{key:1,label:"包装费"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:n.baseform.moreprice,"onUpdate:modelValue":t[6]||(t[6]=e=>n.baseform.moreprice=e),min:0,max:30},null,8,["modelValue"])])),_:1})):(0,l.kq)("",!0),"2"==n.radio?((0,l.wg)(),(0,l.j4)(u,{key:2,"label-width":"0"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{style:{margin:"0 auto 10px"},type:"primary",round:"",onClick:t[7]||(t[7]=e=>n.dialog=!0)},{default:(0,l.w5)((()=>[(0,l.Uk)("添加规格")])),_:1}),(0,l.Wm)(b,{data:n.form.guige,"header-cell-style":{background:"#eef1f6",color:"#333"},"cell-style":{color:"#333"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{label:"规格",prop:"name"}),(0,l.Wm)(_,{label:"包装费",prop:"moreprice"}),(0,l.Wm)(_,{label:"价格",prop:"price"}),(0,l.Wm)(_,{label:"操作"},{default:(0,l.w5)((({$index:e})=>[(0,l.Wm)(h,{type:"danger",icon:"Delete",circle:"",onClick:t=>r.del(e)},null,8,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(k,{modelValue:n.dialog,"onUpdate:modelValue":t[12]||(t[12]=e=>n.dialog=e),title:"添加规格","close-on-press-escape":""},{footer:(0,l.w5)((()=>[(0,l.Wm)(h,{onClick:t[11]||(t[11]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(h,{type:"primary",onClick:r.addCheckArray},{default:(0,l.w5)((()=>[(0,l.Uk)("确定")])),_:1},8,["onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"dialog-form","label-width":"80px",model:n.dialogform},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{required:"",label:"规格"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:n.dialogform.name,"onUpdate:modelValue":t[8]||(t[8]=e=>n.dialogform.name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{label:"包装费"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:n.dialogform.moreprice,"onUpdate:modelValue":t[9]||(t[9]=e=>n.dialogform.moreprice=e),min:0,max:30,"controls-position":"right"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{label:"价格"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{modelValue:n.dialogform.price,"onUpdate:modelValue":t[10]||(t[10]=e=>n.dialogform.price=e),min:0,max:30,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])),_:1},8,["model","rules"]),(0,l._)("footer",et,[(0,l.Wm)(h,{size:"large",type:"primary",onClick:r.submit},{default:(0,l.w5)((()=>[(0,l.Uk)("确认添加食品")])),_:1},8,["onClick"])])])),_:1})])),_:1})}var at={name:"addGoods",mounted(){},data(){return{radio:"1",dialog:!1,baseform:{name:"默认",price:20,moreprice:1},dialogform:{name:"默认",price:20,moreprice:1},options:[{value:"中餐",label:"中餐"},{value:"西餐",label:"西餐"},{value:"狗屎吃不吃",label:"狗屎吃不吃"}],optionstwo:[{value:"经典"},{value:"新品"}],rule:{foodname:[{required:!0,message:"请输入菜品名",trigger:"blur"}],foodtype:[{required:!0,message:"请选择菜品类型",trigger:"blur"}]},form:{foodtype:"",foodname:"",fooddetail:"",foodspecil:"",pic:"",guige:[]}}},methods:{addCheckArray(){let e={name:this.dialogform.name,price:this.dialogform.price,moreprice:this.dialogform.moreprice};this.form.guige.push(e),this.dialog=!1},del(e){this.form.guige.splice(e,1)},push(){this.form.guige.length<1&&this.form.guige.push(this.baseform)},submit(){this.$refs.formRef.validate((async e=>{e&&(this.form.guige.length<1&&this.form.guige.push(this.baseform),await W(this.form),this.form=[])}))},beforeAvatarUpload(e){let t=e.file,a=t.name.lastIndexOf("."),l=t.name.substr(a+1);const o=["png","PNG","jpg","JPG"],n=t.size/1024/1024<5;if(!n)return $messagee({showClose:!0,message:"图片太大",grouping:!0,type:"warning"}),!1;if(o.indexOf(l)<0)return $messagee({showClose:!0,message:"图片格式不符",type:"warning",grouping:!0}),!1;{const e=new FileReader;e.onload=async e=>{this.form.pic=e.target.result},e.readAsDataURL(t)}}}};const lt=(0,i.Z)(at,[["render",tt],["__scopeId","data-v-6ae78756"]]);var ot=lt;const nt={class:"expand"},rt={style:{"margin-left":"5px"}},it={style:{color:"#333",fontSize:"13px"}},st=["src"];function ut(e,t,a,o,n,r){const i=(0,l.up)("el-table-column"),s=(0,l.up)("el-rate"),u=(0,l.up)("el-button"),d=(0,l.up)("el-table"),m=(0,l.up)("el-pagination"),c=(0,l.up)("el-input"),f=(0,l.up)("el-form-item"),p=(0,l.up)("el-option"),g=(0,l.up)("el-select"),w=(0,l.up)("Plus"),h=(0,l.up)("el-icon"),_=(0,l.up)("el-upload"),b=(0,l.up)("el-form"),y=(0,l.up)("el-dialog"),k=(0,l.up)("el-input-number");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d,{data:n.tableData,height:"580",style:{width:"100%"},"header-cell-style":{background:"#eef1f6",color:"#000000",fontWeight:600},"cell-style":{color:"#000"}},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{type:"expand"},{default:(0,l.w5)((e=>[(0,l._)("div",nt,[(0,l._)("div",null,[(0,l._)("p",null,"食品ID: "+(0,l.zw)(e.row.id),1),(0,l._)("p",null,"食品名称: "+(0,l.zw)(e.row.foodname),1),(0,l._)("p",null,[(0,l.Uk)("食品特点: "),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.row.foodspecil,(e=>((0,l.wg)(),(0,l.iD)("span",rt,(0,l.zw)(e),1)))),256))])]),(0,l._)("div",null,[(0,l._)("p",null,"食品详情: "+(0,l.zw)(e.row.fooddetail),1),(0,l._)("p",null,"食品类型: "+(0,l.zw)(e.row.foodtype),1)])])])),_:1}),(0,l.Wm)(i,{label:"食品名称",prop:"foodname",align:"center"}),(0,l.Wm)(i,{label:"食品介绍",prop:"fooddetail",align:"center"}),(0,l.Wm)(i,{label:"评分",align:"center"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{modelValue:e.row.pingfen,"onUpdate:modelValue":t=>e.row.pingfen=t,disabled:"","show-score":"","text-color":"#ff9900"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,l.Wm)(i,{label:"操作",align:"center"},{default:(0,l.w5)((e=>[(0,l.Wm)(u,{size:"small",onClick:t=>r.getIndex(e)},{default:(0,l.w5)((()=>[(0,l.Uk)("编辑")])),_:2},1032,["onClick"]),(0,l.Wm)(u,{size:"small",type:"danger",onClick:r.dele},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["data"]),(0,l.Wm)(m,{background:"",layout:"slot, prev, pager, next",total:n.total,onCurrentChange:r.currentchange,onPrevClick:r.prev,onNextClick:r.next,"current-page":n.currentpage,"onUpdate:current-page":t[0]||(t[0]=e=>n.currentpage=e)},{default:(0,l.w5)((()=>[(0,l._)("div",it," 共"+(0,l.zw)(n.total)+"条 ",1)])),_:1},8,["total","onCurrentChange","onPrevClick","onNextClick","current-page"]),(0,l.Wm)(y,{modelValue:n.dialog,"onUpdate:modelValue":t[6]||(t[6]=e=>n.dialog=e),title:"修改食品信息","close-on-press-escape":""},{footer:(0,l.w5)((()=>[(0,l.Wm)(u,{onClick:t[5]||(t[5]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(u,{type:"primary",onClick:r.submit},{default:(0,l.w5)((()=>[(0,l.Uk)("确定")])),_:1},8,["onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"dialog-form","label-width":"80px",rules:n.rule,ref:"formRef",model:n.fakeDate},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{required:"",label:"食品名称",prop:"foodname"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{modelValue:n.fakeDate.foodname,"onUpdate:modelValue":t[1]||(t[1]=e=>n.fakeDate.foodname=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,{label:"食品详情"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{modelValue:n.fakeDate.fooddetail,"onUpdate:modelValue":t[2]||(t[2]=e=>n.fakeDate.fooddetail=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,{label:"食品分类",prop:"foodtype"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{modelValue:n.fakeDate.foodtype,"onUpdate:modelValue":t[3]||(t[3]=e=>n.fakeDate.foodtype=e),placeholder:n.fakeDate.foodtype},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.options,(e=>((0,l.wg)(),(0,l.j4)(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1}),(0,l.Wm)(f,{label:"食品图片"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"avatar-uploader","show-file-list":!1,"http-request":r.beforeAvatarUpload},{default:(0,l.w5)((()=>[n.fakeDate.foodimg?((0,l.wg)(),(0,l.iD)("img",{key:0,src:n.fakeDate.foodimg,class:"avatar"},null,8,st)):((0,l.wg)(),(0,l.j4)(h,{key:1,class:"avatar-uploader-icon"},{default:(0,l.w5)((()=>[(0,l.Wm)(w)])),_:1}))])),_:1},8,["http-request"])])),_:1}),(0,l.Wm)(f,{"label-width":"0"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{data:n.fakeDate.guige,"header-cell-style":{background:"#eef1f6",color:"#333"},"cell-style":{color:"#333"}},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{label:"规格",prop:"name"}),(0,l.Wm)(i,{label:"包装费",prop:"moreprice"}),(0,l.Wm)(i,{label:"价格",prop:"price"}),(0,l.Wm)(i,{label:"操作"},{default:(0,l.w5)((({$index:e})=>[(0,l.Wm)(u,{type:"danger",icon:"Delete",circle:"",onClick:t=>r.del(e)},null,8,["onClick"])])),_:1})])),_:1},8,["data"]),(0,l.Wm)(u,{style:{margin:"10px auto 0"},type:"primary",round:"",onClick:t[4]||(t[4]=e=>n.dialogtwo=!0)},{default:(0,l.w5)((()=>[(0,l.Uk)("添加规格")])),_:1})])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue"]),(0,l.Wm)(y,{modelValue:n.dialogtwo,"onUpdate:modelValue":t[11]||(t[11]=e=>n.dialogtwo=e),title:"添加规格","close-on-press-escape":""},{footer:(0,l.w5)((()=>[(0,l.Wm)(u,{onClick:t[10]||(t[10]=e=>n.dialogtwo=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)("取消")])),_:1}),(0,l.Wm)(u,{type:"primary",onClick:r.addCheckArray},{default:(0,l.w5)((()=>[(0,l.Uk)("确定")])),_:1},8,["onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"dialog-form","label-width":"80px",model:n.dialogform},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{required:"",label:"规格"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{modelValue:n.dialogform.name,"onUpdate:modelValue":t[7]||(t[7]=e=>n.dialogform.name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,{label:"包装费"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{modelValue:n.dialogform.moreprice,"onUpdate:modelValue":t[8]||(t[8]=e=>n.dialogform.moreprice=e),min:0,max:30,"controls-position":"right"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(f,{label:"价格"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{modelValue:n.dialogform.price,"onUpdate:modelValue":t[9]||(t[9]=e=>n.dialogform.price=e),min:0,max:30,"controls-position":"right"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])],64)}var dt={name:"foodman",inject:["reload"],created(){this.getlist()},watch:{index:{handler(e){this.fakeDate={foodname:this.tableData[e].foodname,foodtype:this.tableData[e].foodtype,fooddetail:this.tableData[e].fooddetail,foodimg:this.tableData[e].foodimg,guige:this.tableData[e].guige,id:this.tableData[e].id}}}},data(){return{tableData:[],fakeDate:{},data:{limit:10,offset:0},dialogtwo:!1,dialog:!1,currentpage:1,total:0,index:null,options:[{value:"中餐",label:"中餐"},{value:"西餐",label:"西餐"},{value:"狗屎吃不吃",label:"狗屎吃不吃"}],dialogform:{name:"默认",price:20,moreprice:1},rule:{foodname:[{required:!0,message:"请输入菜品名",trigger:"blur"}],foodtype:[{required:!0,message:"请选择菜品类型",trigger:"blur"}]}}},methods:{async getlist(){const e=await x(this.data);this.total=e[1][0].total;const t=[];e[0].forEach((e=>{e.guige=JSON.parse(e.guige),e.foodspecil=JSON.parse(e.foodspecil),t.push(e)})),this.tableData=t},async prev(){this.data.offset=10*(this.currentpage-1),await this.getlist()},async next(){this.data.offset=10*(this.currentpage-1),await this.getlist()},async currentchange(){this.data.offset=10*(this.currentpage-1),await this.getlist()},getIndex(e){this.dialog=!0,this.index=e.$index},addCheckArray(){if(null==this.fakeDate.guige){let e=[];e.push(this.dialogform),this.fakeDate.guige=e,this.dialogtwo=!1}else this.fakeDate.guige.push(this.dialogform),this.dialogtwo=!1},del(e){this.fakeDate.guige.splice(e,1)},dele(){$message({showClose:!0,message:"你不够资格",type:"info",grouping:!0})},beforeAvatarUpload(e){let t=e.file,a=t.name.lastIndexOf("."),l=t.name.substr(a+1);const o=["png","PNG","jpg","JPG"],n=t.size/1024/1024<5;if(!n)return $messagee({showClose:!0,message:"图片太大",grouping:!0,type:"warning"}),!1;if(o.indexOf(l)<0)return $messagee({showClose:!0,message:"图片格式不符",type:"warning",grouping:!0}),!1;{const e=new FileReader;e.onload=async e=>{this.fakeDate.foodimg=e.target.result},e.readAsDataURL(t)}},async submit(){this.$refs.formRef.validate((async e=>{e&&(await C(this.fakeDate),this.dialog=!1,this.reload())}))}}};const mt=(0,i.Z)(dt,[["render",ut],["__scopeId","data-v-0f19977e"]]);var ct=mt;function ft(e,t,a,o,n,r){const i=(0,l.up)("el-empty");return(0,l.wg)(),(0,l.j4)(i,{description:"Sorry No Data"})}var pt={name:"tubiao"};const gt=(0,i.Z)(pt,[["render",ft]]);var wt=gt,ht=a(65),_t=a(2415),bt=(0,ht.MT)({state:{defaultactive:"1",fullname:"",basename:""},getters:{},mutations:{setAc(e,t){e.defaultactive=t},setfull(e,t){e.fullname=t},setbase(e,t){e.basename=t}},actions:{},modules:{},plugins:[(0,_t.Z)({storage:window.sessionStorage})]});const yt=[{path:"/",redirect:"/login"},{path:"/login",component:S,name:"login"},{path:"/index",component:K,name:"index",redirect:"/index/dataana",children:[{path:"dataana",component:me,meta:{index:"1",info:"首页"}},{path:"dataman",component:ye,meta:{index:"2-1",info:"用户列表",title:"数据管理"}},{path:"busman",component:Pe,meta:{index:"2-2",info:"商家列表",title:"数据管理"}},{path:"foodman",component:ct,meta:{index:"2-3",info:"菜品列表",title:"数据管理"}},{path:"addGoods",component:ot,meta:{index:"3-1",info:"添加商品",title:"添加数据"}},{path:"tubiao",component:wt,meta:{index:"4-1",info:"用户分布",title:"图表"}},{path:"setting",component:Me,meta:{index:"5-1",info:"头像设置",title:"设置"}}]}],kt=(0,d.r5)(),vt=(0,d.p7)({history:kt,routes:yt});vt.beforeEach(((e,t,a)=>{const l=localStorage.getItem("token");if("/login"===e.path){if(l)return $message({showClose:!0,grouping:!0,message:"检测到您之前已登录,已为您自动登录",type:"success"}),a("/index");a()}else{if(!l)return a("/login");bt.commit("setfull",e.meta.title),bt.commit("setbase",e.meta.info),bt.commit("setAc",e.meta.index),a()}}));var Wt=vt,xt=a(945),Ct=(a(4415),a(2748)),Ut=a(7178);const Vt=(0,l.ri)(u);for(const Dt in Ct)if(Reflect.has(Ct,Dt)){const e=Ct[Dt];Vt.component(Dt,e)}window.$message=Ut.z8,window.$router=Wt,window.$addStorage=function(e,t){var a=document.createEvent("StorageEvent");const l={setItem:function(e,t){localStorage.setItem(e,t),a.initStorageEvent("setItem",!1,!1,e,null,t,null,null),window.dispatchEvent(a)}};return l.setItem(e,t)},Vt.use(bt),Vt.use(Wt),Vt.use(xt.Z),Vt.mount("#app")}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,n){if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],n=e[d][2];for(var i=!0,s=0;s<l.length;s++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,r=l[0],i=l[1],s=l[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var d=s(a)}for(t&&t(l);u<r.length;u++)n=r[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},l=self["webpackChunkele_manage"]=self["webpackChunkele_manage"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(871)}));l=a.O(l)})();
//# sourceMappingURL=app.433b49e2.js.map