"use strict";(self.webpackChunk_xpay_wallet_hub=self.webpackChunk_xpay_wallet_hub||[]).push([[668],{13783:(e,t,s)=>{var a=s(34428);window.loadXpayHubI18n=function(e){const t=e=>import(`./json/i18n-hub/${e}/strings.json`,{assert:{type:"json"}}),s=e=>import(`./json/i18n-shared-components/${e}/strings.json`,{assert:{type:"json"}}),n=e=>s(e).catch((()=>s((0,a.Vt)(e)))).catch((()=>{Promise.resolve({})}));return async()=>{const e=(0,a.Kd)();return(0,a.gA)(e)?Promise.resolve():Promise.all([(s=e,t(s).catch((()=>t((0,a.Vt)(s)))).catch((()=>{Promise.resolve({})}))),n(e)]).then((e=>{const t=e[0],s=e[1],{loadTimeData:a}=window;t&&t.default&&a.overrideValues(t.default),s&&s.default&&a.overrideValues(s.default)}));var s}}()},34428:(e,t,s)=>{s.d(t,{Kd:()=>r,Vt:()=>a,gA:()=>n});const a=e=>{const t=e??"";switch(t){case"en-au":case"en-AU":return"en-GB";case"zh-TW":return"zh-Hant";case"zh-CN":return"zh-Hans"}const s=t.split("-")?.[0];switch(s){case"pt":return"pt-PT";case"zh":return"zh-Hans";default:return`${s}`}},n=e=>"en-US"===e||"en-us"===e||"en"===e,r=()=>window.loadTimeData?.data_?.locale||navigator.language}},e=>{e(e.s=13783)}]);