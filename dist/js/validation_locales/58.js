webpackJsonp([19],{CJ37:function(n,t,r){var e;e=function(){"use strict";var n,t={name:"ne",messages:{_default:function(n){return"यो "+n+" फिल्ड मान्य छैन"},after:function(n,t){return n+" "+t[0]+" भन्दा पछि  "+(t[1]?"वा बराबर":"")+" हुनु पर्छ"},alpha:function(n){return n+" फिल्डले वर्णमाला अक्षरहरू मात्र समावेश गर्न सक्छ"},alpha_dash:function(n){return n+" फील्डलमा वर्ण-संख्या अक्षरहरू साथै ड्याश र अन्डरसेर्सहरू समावेश गर्न सक्छ"},alpha_num:function(n){return n+" फील्डमा वर्ण-संख्या अक्षरहरू मात्र समावेश गर्न सक्छ"},alpha_spaces:function(n){return n+" फिल्डमा वर्णमाला अक्षरहरू र स्पेसहरूमा मात्र समावेश गर्न सक्छ"},before:function(n,t){return n+" "+t[0]+" भन्दा अघि  "+(t[1]?"वा बराबर":"")+" हुनु पर्छ"},between:function(n,t){return n+" फिल्ड "+t[0]+" र "+t[1]+" को बीच हुनुपर्दछ"},confirmed:function(n){return n+" पुष्टिकरण मेल खाँदैन"},credit_card:function(n){return n+" फिल्ड मान्य छैन"},date_between:function(n,t){return n+" "+t[0]+" र "+t[1]+" को बीच हुनुपर्दछ"},date_format:function(n,t){return n+" ढाँचा "+t[0]+" मा हुनुपर्दछ"},decimal:function(n,t){void 0===t&&(t=[]);var r=t[0];return void 0===r&&(r="*"),n+" फिल्ड संख्यात्मक हुनुपर्छ र "+(r&&"*"!==r?r:"")+" दशमलव अंक हुन सक्छ"},digits:function(n,t){return n+" फिल्ड संख्यात्मक हुनुपर्छ र "+t[0]+" अङ्क समावेश गर्दछ"},dimensions:function(n,t){return n+" फिल्ड "+t[0]+" पिक्सेलमा "+t[1]+" पिक्सेल हुनु पर्दछ"},email:function(n){return n+" फिल्ड मान्य ईमेल हुनु पर्छ"},excluded:function(n){return n+" फिल्ड मान्य मान हुनुपर्छ"},ext:function(n){return n+" फिल्ड मान्य फाइल हुनु पर्छ"},image:function(n){return n+" फिल्ड मान्य फोटो हुनु पर्छ"},included:function(n){return n+" फिल्ड मान्य परिमाण हुनु पर्छ"},integer:function(n){return n+" फिल्ड मान्य पूर्णांक हुनु पर्छ"},ip:function(n){return n+" फिल्ड मान्य आईपी ठेगाना हुनु पर्छ"},length:function(n,t){var r=t[0],e=t[1];return e?n+" लम्बाई "+r+" र "+e+" बीचमा हुनुपर्दछ":n+" लम्बाई "+r+" हुनुपर्दछ"},max:function(n,t){return n+" फिल्ड "+t[0]+" अक्षरहरू भन्दा ठूलो हुन सक्छ"},max_value:function(n,t){return n+" फिल्ड "+t[0]+" वा कम हुनुपर्दछ"},mimes:function(n){return n+" फिल्ड मान्य फाइल प्रकार हुनु पर्दछ"},min:function(n,t){return n+" फिल्ड कम्तिमा "+t[0]+" अक्षरहरू हुनुपर्दछ"},min_value:function(n,t){return n+" इमेल फिल्ड "+t[0]+" वा बढी हुनुपर्दछ"},numeric:function(n){return n+" फिल्डले संख्यात्मक अक्षरहरूमा मात्र समावेश गर्न सक्छ"},regex:function(n){return n+" फिल्ड ढाँचा अमान्य छ"},required:function(n){return n+" फिल्ड आवश्यक छ"},size:function(n,t){return n+" परिणाम "+function(n){var t=1024,r=0==(n=Number(n)*t)?0:Math.floor(Math.log(n)/Math.log(t));return 1*(n/Math.pow(t,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(t[0])+" भन्दा कम हुनुपर्दछ"},url:function(n){return n+" फिल्ड मान्य यूआरएल होइन"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t},n.exports=e()}});