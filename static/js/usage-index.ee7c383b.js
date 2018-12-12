(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docz/Usage/index.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./src/material/Accessible.js"),c=t("./src/material/Accessibility.js"),m=t("./src/octicons/ThreeBars.js"),l=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function g(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=d(this,h(n).call(this,e))).layout=null,t}var t,a,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components,t=A(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"usage"}},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The entire icon packs are available via the main import and sub-imports:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import {material, octicons} from 'emotion-icons'\nimport Alert from 'emotion-icons/boxicons/Alert'\nimport * as faBrands from 'emotion-icons/fa-brands'\nimport * as faRegular from 'emotion-icons/fa-regular'\nimport * as faSolid from 'emotion-icons/fa-solid'\nimport * as feather from 'emotion-icons/feather'\nimport * as material from 'emotion-icons/material'\nimport * as octicons from 'emotion-icons/octicons'\nimport * as ionMd from 'emotion-icons/ion-md'\nimport * as ionIos from 'emotion-icons/ion-ios'\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The icons are also available as individual imports - it is recommended that you import icons individually using ES modules along with a module bundler like Webpack or Rollup in order to enable tree-shaking. This means that the module bundler will remove unused icons from the final JavaScript bundle, saving bandwidth and speeding up loading:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react'\nimport {Account, Lock} from 'emotion-icons/material'\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYABBchETgfIPFgJY4IQpDoBeZJ5DdE12hgIgRAGVALViag4EkKJaH6eJ_QFe0pmsLoYBvVwBDgJZoKYoJWPYxxUEgOccONOV8MInsSLI1AKNOGJdAo7iWLYuA6Mg9hUUSWAchE-UAAECKI6hJA0rTVIY9ggylXDRLNJVwVQeSpkPAAvZwCE0-B2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ2CgAWSL2AANki6L1jAECADEfWgRJgv4ZxDkRR1MHYAAFIR-CWQifjgOLESymscpoZwIGcy52AARiSmL5HsxzYLmLz2EjaDyBsKB0HDdh5E5LyxAmmMZHU9zYG4YAXLcjy4Hkbda2AaboDm4IADILvGRJ5koZpTtm-buBe-UwFCByJPadgAH4NjO8NIyWq5HvO1AhprKQZGrd8zFhDVjhgMAwigKYgeW1bIZguYjsTSyCBwXLMhSa8CFx2tGDQ-AkNgdgt1XRMqcQiAPEw9y6fJqR8cJ4nSaOqRsZXD8zG_EBmu2Vw0gAuBqCA3RQIMcDfJrfhUB9JkkHYfggWJKpvAyC1f3JDWYosfhWAyfJqH4K5-BCnB7ZCur1n4cpyH6GYJJtrWQBg9T6Npo3acwclKESPM8gKSctQtHWQX1gRnZVkAojQb3-FUbBpaTs2QBDuhMAciB4G95Xax9gyvc1_gAD1esdnAkpz2t-FkqS4HTkAa4ADhwXqHeb3P9PE4jjM27JO7rhum5AU2W8ELVO96gBWHAfAAH3Xvq0rXwefdsy1rSX1eN633qd6wfh1gh-RRd16oPmoQTpdl7R5f0BhfJAWhfSyG3tbNLQC0B8LSzBmPwW-8goFAA",__position:0,__code:"<Accessible />\n<Accessibility />",__scope:{props:this?this.props:t,Accessible:s.a,Accessibility:c.a,ThreeBars:m.b,ThreeBarsConfig:m.a,styled:l.default}},o.a.createElement(s.a,null),o.a.createElement(c.a,null)),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"props"}},"Props"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Styled Icons accept all the valid props of an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<svg />")," element, in addition to the following custom props:"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"size")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"optional"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string, number"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This is a convenience for setting both ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"width")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"height")," to the same value")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ratio")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"optional"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string, number"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This is a convenience to scale both ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"width")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"height")," and keeping their default ratio")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"title")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"optional"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This sets the icon title and enables the standalone icon accessability mode. See ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"#accessibility"}},"accessibility")," below for additional details")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"css")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"optional"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string, function,Object ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://emotion.sh/docs/api#css"}},"css tagged template")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This prop accepts additional CSS to attach to the icon. It accepts the CSS as a string or as any valid Style Components interpolation")))),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Example")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react'\nimport {Accessible} from 'emotion-icons/material'\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYABBchETgfIPFgJY4IQpDoBeZJ5DdE12hgIgRAGVALViag4EkKJaH6eJ_QFe0pmsLoYBvVwBDgJZoKYoJWPYxxUEgOccONOV8MInsSLI1AKNOGJdAo7iWLYuA6Mg9hUUSWAchE-UAAECKI6hJA0rTVIY9ggylXDRLNJVwVQeSpkPAAvZwCE0-B2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ2CgAWSL2AANki6L1jAECADEfWgRJgv4ZxDkRR1MHYAAFIR-CWQifjgOLESymscpoZwIGcy52AARiSmL5HsxzYLmLz2EjaDyBsKB0HDdh5E5LyxAmmMZHU9zYG4YAXLcjy4Hkbda2AaboDm4IADILvGRJ5koZpTtm-buBe-UwFCByJPadgAH4NjO8NIyWq5HvO1AhprKQZGrd8zFhDVjhgMAwigKYgeW1bIZguYjsTSyCBwXLMhSa8CFx2tGDQ-AkNgdSupgbakoADhwmICC2_gAFVUCgU5dklKgPtEEAekQvhgN58tJ2yVURa3VcpHxwnidJo6pGxlcPzMb8QGa7ZXDSAC4GoIDdFAgxwN8mt-FQH0mSQdh-CBYkqm8DILV_cl7Ziix-FYDJ8mofgrn4EKcDDkK6vWfhynIfoZgk4PHZAGC6b_GEsB9L3EfJShEjzPICml80LWdkE3YEKPrZAKI0CT_hVGwI2q99kBMHmCMHIgeAk6t2tk4MxOHf4AA9XqI5wJKW9rfhZKkuB65AEemZwXrw-n1v9PE4jjM27JF7Hiep5AH2Z8ELVF96gBWHAfAAHzvvq0tvjfk9sy1rUvm_78f3rn6wfg6wIbyB1i7aoHxqCCSNibbQZt9AMF8iAWgvosjBydmaWgFp34WlmDMfgID5CEKAA",__position:1,__code:'<Accessible size={48} title="Unlock account" css="color: red;" />',__scope:{props:this?this.props:t,Accessible:s.a,Accessibility:c.a,ThreeBars:m.b,ThreeBarsConfig:m.a,styled:l.default}},o.a.createElement(s.a,{size:48,title:"Unlock account",css:"color: red;"})),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"icon-config"}},"Icon Config"),o.a.createElement(r.MDXTag,{name:"p",components:n},"All icons have their configuration also exported. This can be used to alter the config and create a your own svg wrapper,\nor if you need to extract some information for example\nsome icons natively have non-square dimensions - original width and height are within the config from the individual icon exports:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import ThreeBars, {ThreeBarsConfig} from 'emotion-icons/octicons/ThreeBars'\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYABBchETgfIPFgJY4IQpDoBeZJ5DdE12hgIgRAGVALViag4EkKJaH6eJ_QFe0pmsLoYBvVwBDgJZoKYoJWPYxxUEgOccONOV8MInsSLI1AKNOGJdAo7iWLYuA6Mg9hUUSWAchE-UAAECKI6hJA0rTVIY9ggylXDRLNJVwVQeSpkPAAvZwCE0-B2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ2CgAWSL2AANki6L1jAECADEfWgRJgv4ZxDkRR1MHYAAFIR-CWQifjgOLESymscpoZwIGcy52AARiSmL5HsxzYLmLz2EjaDyBsKB0HDdh5E5LyxAmmMZHU9zYG4YAXLcjy4Hkbda2AaboDm4IADILvGRJ5koZpTtm-buBe-UwFCByJPadgAH4NjO8NIyWq5HvO1AhprKQZGrd8zFhDVjhgMAwigKYgeW1bIZguYjsTSyCBwXLMhSa8CFx2tGEU3i7C3VdEwHGAxGAAApZxdQAORwVEZ2eMBEkjKnlP4wSlg-zBIBdRZ2AAJk5eRly6cmpHxwnidJo6pGxlcPzMb8QGa7ZXDSAC4GoIDdFAgxwN8mt-FQH0mSQdh-CBYkqm8DILV_clHZiix-FYDJ8mofgrn4EKcAjkK6vWfhynIfoZgk0PnZAGD1Po2AYSwH0fcR8lKESPM8gKSctQtV2QQ9gQY9tkAojQFP-FUbATdr_2QEweYIwciB4BTm3a1Tgzk6d_gAD1eqjnAkvb2t-FkqS4CbkBx4ADhwXrI7njv9PE4jjM27IV8n6fZ5AP358ELUV96gBWHAfAAHyfvq0sfnfU9sy1rVvh_n9fr1d-WB-DrAhvIPWbtqgfGoIJE2ZttAW30AwXyIBaC-iyKHF2ZpaAWm_haWYMx-AQPkKQoAA",__position:2,__code:"<ThreeBars />\n<pre>{JSON.stringify(ThreeBarsConfig, undefined, 2)}</pre>",__scope:{props:this?this.props:t,Accessible:s.a,Accessibility:c.a,ThreeBars:m.b,ThreeBarsConfig:m.a,styled:l.default}},o.a.createElement(m.b,null),o.a.createElement("pre",null,JSON.stringify(m.a,void 0,2))),o.a.createElement(r.MDXTag,{name:"p",components:n},"Dimension exports are not available on the icon pack or index exports:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import * as octicons from 'emotion-icons/octicons'\nimport {octicons} from 'emotion-icons'\n\n// octicons contains only icon exports\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"emotion-components"}},"Emotion Components"),o.a.createElement(r.MDXTag,{name:"p",components:n},"All icons are exported as ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://emotion.sh/"}},"Styled Components"),", which means it is possible to utilize Emotions API:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import styled from 'react-emotion'\nimport {Accessible} from 'emotion-icons/material'\n\nexport const RedAccessible = styled(Accessible)`\n  color: red;\n\n  font-weight: ${props => (props.important ? 'bold' : 'normal')};\n`\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYABBchETgfIPFgJY4IQpDoBeZJ5DdE12hgIgRAGVALViag4EkKJaH6eJ_QFe0pmsLoYBvVwBDgJZoKYoJWPYxxUEgOccONOV8MInsSLI1AKNOGJdAo7iWLYuA6Mg9hUUSWAchE-UAAECKI6hJA0rTVIY9ggylXDRLNJVwVQeSpkPAAvZwCE0-B2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ2CgAWSL2AANki6L1jAECADEfWgRJgv4ZxDkRR1MHYAAFIR-CWQifjgOLESymscpoZwIGcy52AARiSmL5HsxzYLmLz2EjaDyBsKB0HDdh5E5LyxAmmMZHU9zYG4YAXLcjy4Hkbda2AaboDm4IADILvGRJ5koZpTtm-buBe-UwFCByJPadgAH4NjO8NIyWq5HvO1AhprKQZGrd8zFhDVjhgMAwigKYgeW1bIZguYjosYB0e4FbfJrWsi2kzV0DQ-AkNgcaTOySMqcQiBkJgTlIxmDHJtXUmqCgYUrhmHAMiEI4_vaex-iIOBqG-4LtScNIBBvKBGVa0mLEW98NcnMc-nMaMSY12NZB543xUp-DqZZ2mtzrC2mZp7oReFdgtzNndobN7Xa3kCGd2xlcPzMb8QGa7ZXDSACZdQIDdFAgxwOJix-FQH0mSQdh-CBYkqm8DILV_ckM5ilOQFYDJ8mofgrn4EKcHrkK6vWfhynIfoZgkmus5AGD1Po2mi9pzByUoRI8zyApdfNC0c5BfOBGbmt-CiNBu_4VRsGjpey5HuhMAciB4G75Pa34Ayu8z_gAD1esbnAkp3s-QFkqS4HXkBr4ADhwXqG6fsu-lxLEWMptbIH9b730fiAUuz9bKiCviAXqABWHAPgAA-6C-ppTQQAnu8CrSRA_igtB7BMHYNwSAdYEN5Ch1ztUD41BBLR2oHHEC-gGC-RALQX0WQa7ZzNLQC0BDZgzH4LQv28ggA",__position:3,__code:"() => {\n  const RedAccessible = styled(Accessible)(p => ({\n    color: p.error ? 'Crimson' : 'DodgerBlue',\n  }))\n  return (\n    <div>\n      <RedAccessible /> <RedAccessible error />\n    </div>\n  )\n}",__scope:{props:this?this.props:t,Accessible:s.a,Accessibility:c.a,ThreeBars:m.b,ThreeBarsConfig:m.a,styled:l.default}},function(){var e=Object(l.default)(s.a)(function(e){return{color:e.error?"Crimson":"DodgerBlue"}});return o.a.createElement("div",null,o.a.createElement(e,null)," ",o.a.createElement(e,{error:!0}))}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"accessibility"}},"Accessibility"),o.a.createElement(r.MDXTag,{name:"p",components:n},'Styled Icons have two different built-in "modes" for accessibility purposes. By default, icons are considered decorative, meaning the icon is just visual sugar and the surrounding content is sufficient for conveying meaning. This will set the ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"aria-hidden")," attribute on the resulting HTML to hide the icon from screen readers."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// this icon\n<Accessible />\n\n// will result in\n<svg aria-hidden="true">...</svg>\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Alternatively the icon could be used in standalone mode, meaning the icon itself should convey meaning. This mode is enabled by setting a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"title")," prop - this is the text that will be read by a screen reader. This results in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"role")," being set to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"img")," and the addition of a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<title>")," element."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// this icon\n<Accessible title="Lock account" />\n\n// will result in\n<svg role="img"><title>Lock account</title> ...</svg>\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Since Style Icons accept all ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<svg>")," element attributes as props, you are free to override these ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"aria-*")," attributes if you have a more complex use-case."),o.a.createElement(r.MDXTag,{name:"p",components:n},"As this library provides direct access to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<svg>")," element, you may wish to further wrap the icon for additional semantic meaning. For example, for a loading spinner:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import styled from \'emotion-components\'\nimport {Spinner} from \'emotion-icons/fa-solid/Spinner\'\n\nconst VisuallyHidden = styled.span`\n  border: 0 !important;\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  padding-top: 0 !important;\n  padding-right: 0 !important;\n  padding-bottom: 0 !important;\n  padding-left: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 1px !important;\n`\n\n<span title="Loading posts..." role="alert" aria-live="assertive">\n  <Spinner />\n  <VisuallyHidden>Loading posts...</VisuallyHidden>\n</span>\n')),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"tree-shaking"}},"Tree Shaking"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"NOTE:")," tree shaking should work without modification using ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/facebook/create-react-app"}},"Create React App"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Tree shaking has been tested with Create React App, Rollup, and Webpack. If your bundler is unable to import the icons, additional CommonJS bundles are available as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".cjs"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React, {Fragment} from 'react'\n\n// This will result in all Material icons being bundled\nimport {Accessibility} from 'emotion-icons/material.cjs'\n\n// This will only include the Lock icon\nimport {Accessible} from 'emotion-icons/material/Accessible.cjs'\n\nconst App = () => (\n  <Fragment>\n    <Accessibility />\n    <Accessible />\n  </Fragment>\n)\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Be aware though that importing from the CommonJS icon pack bundles will likely result in significantly larger bundle sizes, because unused icons will be included in the final bundle. If you are unable to configure your bundler to process the ES module bundles, you should import icons individually to avoid large bundles."))}}])&&g(t.prototype,a),p&&g(t,p),n}()},"./src/createIcon.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),i=t("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){m(e,n,t[n])})}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("number"!==typeof n)return e;if("number"===typeof e)return e*n;var t=parseFloat(e);return t*n+e.replace("".concat(t),"")}var p=function(e,n){var t=n.size,a=n.ratio,o=s(n,["size","ratio"])[e],r=t?a?l(t,a):t:o?a?l(o,a):o:null;return r?m({},e,r):{}};n.a=function(e){var n=e.body.map(function(e){return o.a.createElement(e.type,c({},e.props))}),t=Object(r.default)("svg",{shouldForwardProp:function(e){return!["width","size","height","css","color"].includes(e)&&Object(i.a)(e)}})(function(n){var t=n.size,a=n.ratio,o=n.height,r=void 0===o?e.height:o,i=n.width,s=void 0===i?e.width:i,m=n.css,l=n.color,A=void 0===l?e.color:l;return c({},e.css,p("height",{size:t,ratio:a,height:r,width:s}),p("width",{size:t,ratio:a,height:r,width:s}),A?{color:A}:{},m)}),a=function(a){var r=a.title,i=s(a,["title"]),m=c({viewBox:e.viewBox,"aria-hidden":r?null:"true","aria-labelledby":r&&e.labelledby,focusable:"false",role:r?void 0:"img"},e.attrs,i);return o.a.createElement(t,m,r&&o.a.createElement("title",{key:e.titleKey},r),n)};return a.displayName=e.displayName,a.defaultProps=e.defaultProps,a}},"./src/material/Accessibility.js":function(e,n,t){"use strict";var a=t("./src/createIcon.js");n.a=Object(a.a)({displayName:"Accessibility",attrs:{fill:"currentColor"},css:{display:"inline-block",verticalAlign:"middle",overflow:"hidden",maxHeight:"100%",maxWidth:"100%",margin:"auto"},width:24,height:24,titleKey:"Accessibility-title",viewBox:"0 0 24 24",labelledby:"icon-title-Accessibility",body:[{type:"path",props:{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z",key:"k0"}}]})},"./src/material/Accessible.js":function(e,n,t){"use strict";var a=t("./src/createIcon.js");n.a=Object(a.a)({displayName:"Accessible",attrs:{fill:"currentColor"},css:{display:"inline-block",verticalAlign:"middle",overflow:"hidden",maxHeight:"100%",maxWidth:"100%",margin:"auto"},width:24,height:24,titleKey:"Accessible-title",viewBox:"0 0 24 24",labelledby:"icon-title-Accessible",body:[{type:"circle",props:{cx:12,cy:4,r:2,key:"k0"}},{type:"path",props:{d:"M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07z",key:"k1"}}]})},"./src/octicons/ThreeBars.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var a=t("./src/createIcon.js"),o={displayName:"ThreeBars",attrs:{fill:"currentColor"},css:{display:"inline-block",verticalAlign:"middle",overflow:"hidden",maxHeight:"100%",maxWidth:"100%",margin:"auto"},width:12,height:16,titleKey:"ThreeBars-title",viewBox:"0 0 12 16",labelledby:"icon-title-ThreeBars",body:[{type:"path",props:{fillRule:"evenodd",d:"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z",key:"k0"}}]};n.b=Object(a.a)(o)}}]);
//# sourceMappingURL=usage-index.257b6029c71e557b4c7b.js.map