(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{127:function(e,t,n){},144:function(e,t,n){},42:function(e,t,n){},463:function(e,t,n){},464:function(e,t,n){"use strict";n.r(t);var s=n(11),c=n.n(s),a=n(136),r=n.n(a),i=(n(144),n(80)),d=n.n(i),l=n(137),o=n(25),j=(n(42),n(1)),u=function(e){var t=e.getWeather,n=e.screenSize,c=Object(s.useState)(""),a=Object(o.a)(c,2),r=a[0],i=a[1],d="inputStyle".concat(n);return Object(j.jsxs)("form",{className:"formStyle",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("input",{className:d,type:"text",placeholder:"Search city...",onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("button",{className:"buttonStyle",onClick:function(){return t(r)},children:"Search"})]})},h=(n(146),n(4)),m=n.n(h),b=function(e){var t=e.name,n=e.temp,s=e.description,c=e.id,a=e.sunrise,r=e.sunset,i=e.timezone,d=e.screenSize,l="",o=parseInt(i/3600),u="iconStyle".concat(d),h="smallMainTextStyle".concat(d),b="largeMainTextStyle".concat(d);return/801/.test(c)&&(l=m()(m.a.utc()).add(parseInt(o/3600),"hours").isBetween(m.a.unix(a),m.a.unix(r))?"few_clouds_d.png":"few_clouds_n.png"),(/802/.test(c)||/803/.test(c)||/804/.test(c))&&(l="clouds.png"),/800/.test(c)&&(l=m()(m.a.utc()).add(parseInt(o/3600),"hours").isBetween(m.a.unix(a),m.a.unix(r))?"clear_d.png":"clear_n.png"),/^7/.test(c)&&(l="fog.png"),/^6/.test(c)&&(l="snow.png"),(/^5/.test(c)||/^3/.test(c))&&(l="rain.png"),/^2/.test(c)&&(l="storm.png"),Object(j.jsxs)("div",{className:"boxMainLeftStyle",children:[Object(j.jsx)("div",{className:"frameStyle",children:Object(j.jsx)("img",{className:u,src:"weatherIcons/".concat(l),alt:"Couldn't load."})}),Object(j.jsxs)("div",{className:"infoStyle",children:[Object(j.jsx)("div",{className:h,children:t}),Object(j.jsxs)("div",{className:b,children:[Math.round(n),"\xb0C"]}),Object(j.jsx)("div",{className:h,children:s})]})]})},x=function(e){var t=e.sunrise,n=e.sunset,s=e.feels,c=e.wind,a=e.humidity,r=e.screenSize,i=m.a.unix(t).format("HH:mm"),d=m.a.unix(n).format("HH:mm"),l="boxDownLeftStyle".concat(r);return Object(j.jsxs)("div",{className:l,children:[Object(j.jsxs)("div",{className:"rowStyle",children:[Object(j.jsx)("div",{children:"Feels like:"}),Object(j.jsxs)("div",{children:[Math.round(s),"\xb0C"]})]}),Object(j.jsx)("hr",{className:"hrStyle"}),Object(j.jsxs)("div",{className:"rowStyle",children:[Object(j.jsx)("div",{children:"Wind:"}),Object(j.jsxs)("div",{children:[c," km/h"]})]}),Object(j.jsx)("hr",{className:"hrStyle"}),Object(j.jsxs)("div",{className:"rowStyle",children:[Object(j.jsx)("div",{children:"Humidity:"}),Object(j.jsxs)("div",{children:[a,"%"]})]}),Object(j.jsx)("hr",{className:"hrStyle"}),Object(j.jsxs)("div",{className:"rowStyle",children:[Object(j.jsx)("div",{children:"Sunrise:"}),Object(j.jsx)("div",{children:i})]}),Object(j.jsx)("hr",{className:"hrStyle"}),Object(j.jsxs)("div",{className:"rowStyle",children:[Object(j.jsx)("div",{children:"Sunset:"}),Object(j.jsx)("div",{children:d})]})]})},f=function(e){var t=e.weather,n=e.getWeather,s=e.screenSize,c="leftContainerStyle".concat(s);return Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)(u,{getWeather:n,screenSize:s}),Object(j.jsx)(b,{name:t.name,temp:t.main.temp,description:t.weather[0].description,id:t.weather[0].id,sunrise:t.sys.sunrise,sunset:t.sys.sunset,timezone:t.timezone,screenSize:s}),Object(j.jsx)(x,{sunrise:t.sys.sunrise,sunset:t.sys.sunset,feels:t.main.feels_like,wind:t.wind.speed,humidity:t.main.humidity,screenSize:s})]})},p=(n(127),function(e){e.key;var t=e.date,n=e.temp,s=e.id,c=e.description,a=e.screenSize,r="",i=m()(t).format("ddd"),d=m()(t).format("DD/MMM"),l="smallForecastStyle".concat(a);return/801/.test(s)&&(r="few_clouds_d.png"),(/802/.test(s)||/803/.test(s)||/804/.test(s))&&(r="clouds.png"),/800/.test(s)&&(r="clear_d.png"),/^7/.test(s)&&(r="fog.png"),/^6/.test(s)&&(r="snow.png"),(/^5/.test(s)||/^3/.test(s))&&(r="rain.png"),/^2/.test(s)&&(r="storm.png"),Object(j.jsxs)("div",{className:"boxRightStyle",children:[Object(j.jsxs)("div",{className:"dateStyle",children:[Object(j.jsx)("div",{className:"forecastTextStyle",children:i}),Object(j.jsx)("div",{className:l,children:d})]}),Object(j.jsxs)("div",{className:"forecastDataStyle",children:[Object(j.jsxs)("div",{className:"forecastInfoStyle",children:[Object(j.jsxs)("div",{className:"forecastTextStyle",children:[" ",Math.round(n),"\xb0C "]}),Object(j.jsxs)("div",{className:l,children:[" ",c," "]})]}),Object(j.jsx)("img",{className:"imgStyle",src:"weatherIcons/".concat(r),alt:"Couldn't load."})]})]})}),O=function(e){var t=e.forecast,n=e.screenSize,s=m()().format("YYYY-MM-DD"),c=new RegExp(s),a="rightContainerStyle".concat(n);return Object(j.jsx)("div",{className:a,children:t.list.map((function(e){return c.test(e.dt_txt)||!/12:00:00$/.test(e.dt_txt)?"":Object(j.jsx)(p,{date:e.dt_txt,temp:e.main.temp,id:e.weather[0].id,description:e.weather[0].description,screenSize:n},e.dt_txt)}))})},v=n(82),S=n.n(v),y=(n(463),n(139)),g=n.n(y),w=function(e){return e<320?"xs":e>=320&&e<720?"sm":e>=720&&e<1100?"md":e>=1100?"lg":void 0},N=function(){var e=Object(s.useState)((function(){return w(window.innerWidth)})),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=g()((function(){c(w(window.innerWidth))}),200);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n};var z=function(){var e=Object(s.useState)({}),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)([]),r=Object(o.a)(a,2),i=r[0],h=r[1],m=N(),b="searchContainer".concat(m),x=function(){var e=Object(l.a)(d.a.mark((function e(t){var s,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="798f24f0a2d52c4d05241da7f603bb1e",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(s),r="https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&appid=").concat(s),e.next=5,S.a.get(a).then((function(e){return c(e.data),n})).catch((function(e){e.request&&alert("There's no such city in the database.")}));case 5:return e.next=7,S.a.get(r).then((function(e){return h(e.data),i}));case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:"undefined"!=typeof n.main&&"200"===i.cod?Object(j.jsxs)("div",{className:"mainStyle",children:[Object(j.jsx)(f,{weather:n,getWeather:x,screenSize:m}),Object(j.jsx)(O,{forecast:i,screenSize:m})]}):Object(j.jsxs)("div",{className:"blankStyle",children:[Object(j.jsx)("p",{className:"welcomeTextStyle",children:"Hello, please search for your city."}),Object(j.jsx)("div",{className:b,children:Object(j.jsx)(u,{getWeather:x,screenSize:m})})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,465)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),_()}},[[464,1,2]]]);
//# sourceMappingURL=main.cbe2d7df.chunk.js.map