webpackJsonp([32],{"61Dv":function(n,t,r){var e;e=function(){"use strict";var n,t={name:"hi",messages:{_default:function(n){return"यह "+n+" मान मान्य नहीं है"},after:function(n,t){return"यह "+n+" का "+t[0]+" के बाद होना आवश्यक है  "},alpha:function(n){return"यह "+n+" फील्ड में केवल वर्णानुक्रमक वर्ण हो सकते हैं"},alpha_dash:function(n){return"यह "+n+" फील्ड में अल्फ़ान्यूमेरिक वर्ण और साथ ही डैश और अंडरस्कोर हो सकते हैं"},alpha_num:function(n){return"यह "+n+" फील्ड में केवल अल्फा-न्यूमेरिक वर्ण वर्ण शामिल हैं"},alpha_spaces:function(n){return"यह "+n+" फील्ड में केवल अल्फा-न्यूमेरिक वर्ण वर्ण शामिल हैं"},before:function(n,t){return"यह "+n+" का "+t[0]+" के पहले होना आवश्यक है "},between:function(n,t){return"यह "+n+" फील्ड का "+t[0]+" और "+t[1]+" के बीच होना आवश्यक है "},confirmed:function(n){return"यह "+n+" पुष्टि मेल नहीं खाती"},credit_card:function(n){return"यह "+n+" फील्ड अमान्य है"},date_between:function(n,t){return"यह "+n+" का "+t[0]+" और "+t[1]+" के बीच होना आवश्यक है "},date_format:function(n,t){return"यह "+n+" का प्रारूप "+t[0]+" में होना आवश्यक है "},decimal:function(n,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r="*"),"यह "+n+" फ़ील्ड का संख्यात्मक होना आवश्यक है और इसमें "+(r&&"*"!==r?r:"")+" दशमलव बिंदु शामिल हो सकते हैं "},digits:function(n,t){return"यह "+n+" फ़ील्ड का संख्यात्मक होना आवश्यक है और इसे पूरी तरह से "+t[0]+" अंक का होना चाहिए"},dimensions:function(n,t){return"यह "+n+" फ़ील्ड की "+t[0]+" पिक्सेल बाई "+t[1]+" पिक्सेल का होना आवश्यक है"},email:function(n){return"यह  "+n+" फ़ील्ड एक मान्य ईमेल होना चाहिए"},excluded:function(n){return"यह "+n+" फ़ील्ड का एक मान्य मूल्य होना चाहिए"},ext:function(n){return"यह "+n+" फ़ील्ड एक मान्य फ़ाइल होनी चाहिए"},image:function(n){return"यह "+n+" फ़ील्ड एक छवि होनी चाहिए"},included:function(n){return"यह "+n+" फ़ील्ड एक मान्य मूल्य का होना चाहिए"},integer:function(n){return"यह "+n+" फ़ील्ड एक पूर्णांकका होना चाहिए"},ip:function(n){return"यह "+n+" फ़ील्ड  एक मान्य आईपी पते का होना चाहिए"},ip_or_fqdn:function(n){return"यह "+n+" फ़ील्ड एक मान्य आईपी पते या FQDN होना चाहिए"},length:function(n,t){var r=t[0],e=t[1];return e?"यह "+n+"  की लंबाई "+r+" और "+e+" के बीच होनी चाहिए":"यह "+n+"  की लंबाई "+r+" की होनी चाहिए"},max:function(n,t){return"यह "+n+" फ़ील्ड "+t[0]+" वर्णों से अधिक नहीं हो सकती है"},max_value:function(n,t){return"यह "+n+" फ़ील्ड "+t[0]+" या उससे कम का होना चाहिए"},mimes:function(n){return"यह "+n+" फ़ील्ड एक मान्य फ़ाइल प्रकार का होना चाहिए"},min:function(n,t){return"यह "+n+" फ़ील्ड कम से कम "+t[0]+" वर्ण का होना चाहिए"},min_value:function(n,t){return"यह "+n+" फ़ील्ड "+t[0]+" या अधिक का होना चाहिए"},numeric:function(n){return"यह "+n+" फ़ील्ड में केवल संख्यात्मक वर्ण हो सकते हैं"},regex:function(n){return"यह "+n+" फ़ील्ड प्रारूप अमान्य है"},required:function(n){return"यह "+n+" फ़ील्ड की आवश्यकता है"},required_if:function(n,t){return"यह "+n+" फ़ील्ड की आवश्यकता तब होती है जब "+t[0]+" फ़ील्ड का यह मान होता है"},size:function(n,t){return"यह "+n+" फ़ील्ड का आकार "+function(n){var t=1024,r=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(t[0])+" से कम होना चाहिए"},url:function(n){return"यह "+n+"फ़ील्ड एक मान्य URL नहीं है."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t},n.exports=e()}});