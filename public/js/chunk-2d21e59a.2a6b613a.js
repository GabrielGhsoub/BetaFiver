(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e59a"],{d4d8:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row justify-content-center text-center"},[e("div",{staticClass:"col-12"},[e("h1",[t._v("Loading..")])])])])])}],o=(e("cadf"),e("551c"),e("097d"),e("bc3a")),s=e.n(o),r=e("69d9"),i={name:"PayPal Confirmation",components:{},data:function(){return{calculatePrice:r["d"]}},methods:{confirmPayment:function(){var t=this,a=this.$route.query.naccounts,e=this.$route.query.reports,n=this.$route.query.token;s.a.post("".concat(this.api_path,"/paypal-payment-confirmation"),{token:n,naccounts:a,reports:e}).then(function(){t.$swal({title:"Thank you!",icon:"success",text:"You have now a premium subscription!"}),t.$gtag&&t.$gtag.purchase({transaction_id:n,affiliation:"PayPal",value:t.calculatePrice(a,e,0)}),t.saEvent("paypalsuccess}"),t.$gtag&&t.$gtag.event("payment_success",{event_category:"payment",event_label:"paypal_success"}),t.$router.push("/dashboard")}).catch(function(){t.$swal({title:"Oops...",icon:"error",text:"We can't update your account. Contact us for more information",footer:'<p>You can <a class="text-accent" href="mailto:support@owlstat.com">contact us here</a>.</p>'}),t.$router.push("/")})}},created:function(){this.confirmPayment()}},u=i,l=e("2877"),p=Object(l["a"])(u,n,c,!1,null,"38ba51e4",null);p.options.__file="PayPalPaymentConfirmation.vue";a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21e59a.2a6b613a.js.map