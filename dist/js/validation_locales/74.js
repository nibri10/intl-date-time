webpackJsonp([11],{"o5Z/":function(n,o,e){var a;a=function(){"use strict";var n,o={name:"sk",messages:{after:function(n,o){var e=o[0];return"Položka "+n+" musí byť vačšia "+(o[1]?"alebo rovná ":"")+" ako položka "+e},alpha:function(n){return n+" môže obsahovať len písmená"},alpha_dash:function(n){return n+" môže obsahovať len písmená, číslice, bodky a podčiarknutie"},alpha_num:function(n){return n+" môže obsahovať len písmená a číslice"},alpha_spaces:function(n){return n+" môže obsahovať len písmená, číslice a medzery"},before:function(n,o){var e=o[0];return"Položka "+n+" musí byť menšia "+(o[1]?"alebo rovná ":"")+" ako položka "+e},between:function(n,o){return"Položka "+n+" musí byť medzi "+o[0]+" a "+o[1]},confirmed:function(n){return"Hodnota položky "+n+" nie je rovnaká"},credit_card:function(n){return"Položka "+n+" je neplatná"},date_between:function(n,o){return n+" musí byť medzi "+o[0]+" a "+o[1]},date_format:function(n,o){return n+" musí byť vo formáte "+o[0]},decimal:function(n,o){void 0===o&&(o=[]);var e=o[0];return void 0===e&&(e="*"),"Položka "+n+" musí byť číselná a smie obsahovať"+(e&&"*"!==e?" "+e:"")+" desatinné miesta"},digits:function(n,o){var e=o[0];return"Položka "+n+" musí obsahovať "+e+" "+(e<5?"čísla":"čísiel")},dimensions:function(n,o){return"Položka "+n+" musí mať "+o[0]+" x "+o[1]+" pixlov"},email:function(n){return"Položka "+n+" musí obsahovať správnu emailovú adresu"},excluded:function(n){return"Položka "+n+" má nesprávnu hodnotu"},ext:function(n){return n+" nie je platný súbor"},image:function(n){return n+" nie je obrázok"},included:function(n){return"Položka "+n+" má nesprávnu hodnotu"},ip:function(n){return"Položka "+n+" nie je platná IP adresa"},max:function(n,o){return"Položka "+n+" môže obsahovať najviac "+o[0]+" znakov"},max_value:function(n,o){return"Položka "+n+" musí byť maximálne "+o[0]},mimes:function(n){return"Položka "+n+" obsahuje nesprávny typ súboru"},min:function(n,o){var e=o[0];return"Položka "+n+" musí obsahovať minimálne "+e+" "+(e<4?"znaky":"znakov")},min_value:function(n,o){return"Položka "+n+" musí byť minimálne "+o[0]},numeric:function(n){return"Položka "+n+" môže obsahovať len číslice"},regex:function(n){return"Formát položky "+n+" je nesprávny"},required:function(n){return"Položka "+n+" je povinná"},size:function(n,o){return"Položka "+n+" musí byť menej ako "+function(n){var o=1024,e=0==(n=Number(n)*o)?0:Math.floor(Math.log(n)/Math.log(o));return 1*(n/Math.pow(o,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]}(o[0])},url:function(n){return"Položka "+n+" neobsahuje platnú URL"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[o.name]=o,n)),o},n.exports=a()}});