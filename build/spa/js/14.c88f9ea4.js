(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"163f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"library-explore"},[a("div",{staticClass:"library-inner-container"},[a("q-table",{staticClass:"library-table full-width full-height",attrs:{grid:"",loading:(!t.loadedAll||t.loadingPosts)&&t.currentPageNumber===t.pagesNumber,"no-data-label":t.$t("credit_no_data"),"loading-label":t.$t("loading"),pagination:t.pagination,data:t.tableData},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"loading",fn:function(){return[a("div",{staticClass:"no-pointer-events library-table__loading"},[t.searchFilteredPosts.length?a("q-linear-progress",{staticClass:"absolute-top",attrs:{indeterminate:"",size:"xs",color:"general","track-color":"transparent"}}):a("div",{staticClass:"q-pa-md rounded-borders bg-page column items-center"},[a("div",{staticClass:"flex"},[a("q-spinner-ios",{attrs:{size:"1.2rem",color:"general"}}),a("div",{staticClass:"q-ml-sm"},[t._v(t._s(t.$t("loading"))+"...")])],1),a("div",{staticClass:"q-mt-sm"},[t._v(t._s(t.$t("lib_from_network")))])])],1)]},proxy:!0},{key:"no-data",fn:function(){return[a("q-icon",{attrs:{name:"error_outline",size:"1.2rem"}}),a("div",{staticClass:"q-ml-sm"},[t._v(t._s(t.$t("credit_no_data")))])]},proxy:!0},{key:"item",fn:function(e){return[a("PostCard",{key:e.row.id,staticStyle:{margin:"4px !important"},attrs:{followable:"",post:e.row,disableFollow:t.loadingNext},on:{preview:t.showPreviewImage,follow:t.follow,"to-channel":t.toChannelPage}})]}},{key:"bottom",fn:function(){return[a("q-separator",{staticClass:"full-width bg-general"}),a("div",{staticClass:"row justify-center items-center full-width",staticStyle:{height:"50px"}},[a("q-pagination",{attrs:{unelevated:"",color:"general","text-color":"general",max:t.pagesNumber,"max-pages":5,ellipses:!1,"boundary-numbers":!1,"direction-links":"","boundary-links":"",size:"md"},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)]},proxy:!0}])})],1),t._e(),a("BackToTop",{attrs:{show:t.scrollIndex>0||t.showBackToTop},on:{click:t.handleBackToTop}}),a("SearchChannel",{attrs:{higher:t.scrollIndex>0||t.showBackToTop}}),t.allPosts.length||t.loadingPosts?t._e():a("div",{staticClass:"no-data"},[a("q-btn",{staticClass:"no-data-btn",attrs:{round:"",color:"primary",icon:"arrow_forward",size:"24px"},on:{click:t.goToFollowing}},[a("q-tooltip",[t._v(t._s(t.$t("no_recommend"))+" "+t._s(t.$t("lib_following")))])],1)],1),a("q-dialog",{model:{value:t.showPreview,callback:function(e){t.showPreview=e},expression:"showPreview"}},[a("q-card",{staticClass:"image-preview-card"},[a("q-card-section",{staticClass:"q-pa-none"},[a("img",{staticClass:"preview-image",attrs:{src:t.previewImage}})]),a("q-card-actions",{staticClass:"q-pa-none",staticStyle:{position:"absolute",bottom:"0",right:"0"},attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",padding:"none",size:"20px",icon:"close",color:"grey"}})],1)],1)],1),a("Loading",{attrs:{value:t.loadingPosts&&!t.filteredPosts.length}})],1)},i=[],o=(a("ddb0"),a("4aad")),n=a("2de9"),l=a("0ebe"),r=a("ab9a"),d=a("6277"),h=a("997a"),c=a("ed08"),g=a("e64e"),p=a("decc"),u=a("3013"),f={name:"LibraryExplore",components:{PostCard:n["a"],BackToTop:l["a"],SearchChannel:d["a"],Loading:r["a"]},mixins:[g["a"],Object(p["a"])("explore"),u["a"]],data(){return{isElectron:Object(c["isElectron"])(),active:!1,showPreview:!1,previewImage:"",loadingPosts:!1,loadTimer:null,allPosts:[],loadingNext:!1,loadedAll:!0,loadedChannels:[],loadedPostIds:[],scrollIndex:0,loadingIntersecting:!1,loadStartTime:Date.now(),lib:o["a"]}},computed:{nonFollowingChannels(){const t=this.lib.followingChannels.map((t=>t.id)),e=this.lib.userData.blockChannels,a=this.lib.userData.blockUsers;return this.lib.channelList.filter((s=>!e.includes(null===s||void 0===s?void 0:s.id)&&(!a.includes(null===s||void 0===s?void 0:s.creator)&&!t.includes(null===s||void 0===s?void 0:s.id)))).filter((t=>t))},filteredPosts(){return this.allPosts.filter((t=>o["a"].isValidRate(t.rate||"G")))},searchFilteredPosts(){const t=this.searchText.toLowerCase(),e=o["a"].search.option.value,a=t=>{switch(e){case"channel":return t.channel.title;case"channelID":return t.channel.id;default:return t.title}},s=s=>{var i,o;if(!s||!s.title)return!1;if(!t)return!0;const n=null===(i=a(s))||void 0===i?void 0:i.toLowerCase();return"channelID"===e&&t===n||(null===(o=s.channel)||void 0===o||!o.hidden)&&n.includes(t)};console.time("filter");const i=this.filteredPosts.filter(s);return console.timeEnd("filter"),i},allPostToFetch(){const t=[];return this.loadedChannels.forEach((({channel:e,ids:a})=>{a.forEach((a=>{this.loadedPostIds.includes(a)||t.push({channel:e,postId:a})}))})),t}},methods:{onScroll(t){this.scrollIndex=t.index},itemsFn(t=0,e=5){return Object(h["a"])("vitem",t,e),this.searchFilteredPosts.slice(t,t+e)},shouldLoading(t){this.loadingIntersecting=t.isIntersecting,t.isIntersecting&&this.loadNext()},async loadNext(){if(!this.active)return!1;if(this.loadingNext)return;this.loadingNext=!0;const t=this.allPostToFetch.slice(0,24).sort(((t,e)=>t.postId&&e.postId?t.postId.localeCompare(e.postId):0));if(Object(h["a"])("Load Next",t),!t.length)return this.loadingNext=!1,this.loadedAll=!0,void setTimeout((()=>{Object(h["a"])("try load more"),this.loadPostList()}),3e3);this.loadedAll=!1;const e=await Promise.all(t.map((async({channel:t,postId:e},a)=>(await new Promise((t=>setTimeout(t,Math.floor(Math.random()*a*500)))),{channel:t,post:await o["a"].getPostById(t.id,e,!0)}))));Object(h["a"])("fetch results",e),e.forEach((({channel:t,post:e})=>{var a;e&&"object"===typeof e&&(t.hidden&&t.creator!==(null===(a=o["a"].user.is)||void 0===a?void 0:a.pub)||(e.channel=t,this.allPosts.push(e)))})),this.loadedPostIds.push(...t.map((t=>t.postId))),this.loadingNext=!1,setTimeout((()=>{Object(h["a"])("should load next",this.loadingIntersecting),this.loadingIntersecting&&this.loadNext()}),200)},loadPostList(){if(!this.active)return;if(this.loadStartTime+15e3<Date.now())return void(this.loadingPosts=!1);if(this.loadingPosts)return;this.loadingPosts=!0,Object(h["a"])("load all",this.nonFollowingChannels);for(let e=0;e<this.loadedChannels.length;e++)this.nonFollowingChannels.some((t=>t.id===this.loadedChannels[e].channel.id))||this.loadedChannels.splice(e--,1);const t=this.nonFollowingChannels.filter((t=>!(!t.title||!t.id)&&!this.loadedChannels.find((e=>e.channel.id===t.id))));Promise.all(t.map((async(t,e)=>(await new Promise((t=>setTimeout(t,e*Math.floor(500*Math.random())))),o["a"].getChannelPostIds(t.id,!0).then((e=>{const a=this.loadedChannels.find((e=>e.channel.id===t.id));if(Object(h["a"])("[Explore] get channel post ids",t.id,e,!a),a?e.forEach((t=>{a.ids.includes(t)||a.ids.push(t)})):this.loadedChannels.push({channel:t,ids:e}),this.active&&!this.allPosts.length){if(this.loadedChannels.length<3&&this.nonFollowingChannels.length>2)return;this.loadNext()}})))))).then((()=>{if(this.allPosts.length)this.loadingPosts=!1;else{if(!this.active)return;setTimeout((()=>{this.loadingPosts=!1,this.allPosts.length||this.loadPostList()}),2e3)}this.active&&this.loadingIntersecting&&this.loadNext()}))},prune(){const t=this.nonFollowingChannels.map((t=>t.id));for(let s=0;s<this.loadedChannels.length;s++)t.includes(this.loadedChannels[s].channel.id)||this.loadedChannels.splice(s--,1);const e=this.loadedChannels.reduce(((t,e)=>(e.ids&&t.push(...e.ids),t)),[]);for(let s=0;s<this.allPosts.length;s++){var a;const i=this.loadedPostIds.findIndex((t=>this.allPosts[s].id===t));t.includes(null===(a=this.allPosts[s].channel)||void 0===a?void 0:a.id)&&e.includes(this.allPosts[s].id)||(this.allPosts.splice(s--,1),-1!==i&&this.loadedPostIds.splice(i,1))}for(let s=0;s<this.loadedPostIds.length;s++)this.allPosts.find((t=>t.id===this.loadedPostIds[s]))||this.loadedPostIds.splice(s--,1)},showPreviewImage(t){this.previewImage=t,this.showPreview=!0},toChannelPage(t){Object(h["a"])("to",t);const e=["id","title"].map((e=>{const a=t[e];return encodeURIComponent(e)+"="+encodeURIComponent(a)})).join("&"),a=`/library/channel?${e}`;this.$root.$emit("navigate-to",a),this.$router.push(a)},follow(t){this.lib.followChannel(t).then((e=>{Object(h["a"])("followed",t,e)}))},goToFollowing(){this.$router.push("/library/following")},setSearch(){this.lib.setSearchOption([{label:this.$t("post_title"),value:"post"},{label:this.$t("channel_title"),value:"channel"},{label:this.$t("channel_id"),value:"channelID"}])}},activated(){this.active=!0,this.prune(),this.$root.$emit("navigate-to"),this.$root.$emit("navigate-to","/library/explore"),this.loadStartTime=Date.now(),this.loadPostList();const t=this;"explore"in window||Object.defineProperty(window,"explore",{get(){return t.loadedChannels}})},deactivated(){this.active=!1},mounted(){this.loadPostList(),this.setSearch()},watch:{nonFollowingChannels(t,e){if(t.length!==e.length){for(let e=0;e<this.loadedChannels.length;e++)t.some((t=>t.id===this.loadedChannels[e].channel.id))||this.loadedChannels.splice(e--,1);this.loadPostList()}},"lib.search.text"(t){this.isActive&&(this.searchText=t)},loadingPosts(t){console.log("change loading",t),t||this.active||this.$router.push("/library/explore")},"searchFilteredPosts.length"(t,e){e||!t||this.active||(console.log("change length"),this.$router.push("/library/explore"))}},beforeRouteEnter(t,e,a){a((t=>{e.path.startsWith("/library")&&t.setSearch()}))},beforeRouteLeave(t,e,a){clearTimeout(this.loadTimer),a()}},m=f,b=(a("a73b"),a("2877")),v=a("eaac"),w=a("6b1d"),P=a("d9b2"),C=a("0016"),x=a("eb85"),I=a("3b16"),y=a("a12b"),T=a("9c40"),_=a("05c0"),$=a("74f7"),k=a("cf57"),q=a("24e8"),S=a("f09f"),F=a("a370"),L=a("4b7e"),j=a("9748"),N=a("7f67"),Q=a("eebe"),O=a.n(Q),E=Object(b["a"])(m,s,i,!1,null,"1036d490",null);e["default"]=E.exports;O()(E,"components",{QTable:v["a"],QLinearProgress:w["a"],QSpinnerIos:P["a"],QIcon:C["a"],QSeparator:x["a"],QPagination:I["a"],QVirtualScroll:y["a"],QBtn:T["a"],QTooltip:_["a"],QInnerLoading:$["a"],QSpinnerGears:k["a"],QDialog:q["a"],QCard:S["a"],QCardSection:F["a"],QCardActions:L["a"]}),O()(E,"directives",{Intersection:j["a"],ClosePopup:N["a"]})},"5f17":function(t,e,a){},a73b:function(t,e,a){"use strict";a("5f17")}}]);