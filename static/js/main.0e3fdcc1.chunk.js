(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),i=(a(14),a(2)),s=a(3),l=a(1),m=a(5),u=a(4);var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:String,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number,n=["celcius","fahreneheit","kelvin"];return"number"===typeof a&&(!(!n.includes(e)||!n.includes(t))&&(e===t?a:("celcius"===e?"fahrenheit"===t?1.8*a+32:a+273.15:"fahrenheit"===e?"celcius"===t?(a-32)/1.8:(a-32)/1.8+273.15:"celcius"===t?a-273.15:1.8*(a-273.15)+32).toFixed(0)))};var h=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:String,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Number,c=["full_date","month_year","weekday","HH","HHMM","HHMMSS","HH:MM","HH:MM:SS","H:MM_APM","H:MM:SS_APM","H_APM"],r=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=new Date(1e3*a),s=n?new Date(i.getTime()+6e4*i.getTimezoneOffset()+1e3*n):i,l=s.getDate(),m=r[s.getMonth()+1],u=s.getFullYear(),d=o[s.getDay()],h=s.getHours()<10?"0"+s.getHours():s.getHours(),y=s.getHours(),f=s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),p=s.getSeconds(),g=y<12?y:y-12,E=y<12?"am":"pm";if(!c.includes(t))return!1;switch(t){case"full_date":e="".concat(l," ").concat(m," ").concat(u);break;case"month_year":e="".concat(m," ").concat(u);break;case"weekday":e="".concat(d);break;case"HH":e="".concat(y);break;case"HHMM":e="".concat(y).concat(f);break;case"HHMMSS":e="".concat(y).concat(f).concat(p);break;case"HH:MM":e="".concat(h,":").concat(f);break;case"HH:MM:SS":e="".concat(h,":").concat(f,":").concat(p);break;case"H:MM_APM":e="".concat(g,":").concat(f).concat(E);break;case"H:MM:SS_APM":e="".concat(g,":").concat(f,":").concat(p).concat(E);break;case"H_APM":e="".concat(g).concat(E)}return e};function y(e){return c.a.createElement("div",{className:"hourlyItem"},c.a.createElement("p",{className:"hourlyItemTime"},e.time),c.a.createElement("i",{className:"hourlyItemIcon ".concat(e.icon)}),c.a.createElement("p",{className:"hourlyItemTemp"},e.temp,c.a.createElement("span",null,"\xb0")))}var f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).displayHourlyItem=function(e){var t=[],a={Clear:"fas fa-sun",Clouds:"fas fa-cloud",Rain:"fas fa-cloud-showers-heavy"};e||n.state.data.forEach((function(e,a){var n=0===a?"Now":e.time;t.push(c.a.createElement(y,{key:"hourlyitem-".concat(a),time:n,icon:"fas fa-cloud-showers-heavy",temp:e.temp}))})),e.forEach((function(e,r){var o=0===r?"Now":h("H_APM",e.dt,n.props.timezone_offset);t.push(c.a.createElement(y,{key:"hourlyItem-".concat(r),time:o,icon:a[e.weather[0].main],temp:d("kelvin","celcius",e.temp)}))})),n.setState({hourlyItem:t})},n.state={data:[{time:"Now",temp:23},{time:"1pm",temp:33},{time:"2pm",temp:30},{time:"3pm",temp:23},{time:"4pm",temp:20},{time:"5pm",temp:16},{time:"6pm",temp:33},{time:"7pm",temp:30},{time:"8pm",temp:23},{time:"9pm",temp:20},{time:"10pm",temp:16},{time:"11pm",temp:33},{time:"12am",temp:30},{time:"1am",temp:23},{time:"2am",temp:20},{time:"3am",temp:16},{time:"4am",temp:33},{time:"5am",temp:30},{time:"6am",temp:23},{time:"7am",temp:20},{time:"8am",temp:16}],hourlyItem:""},n.myRef=c.a.createRef(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.displayHourlyItem(this.props.hourly)}},{key:"render",value:function(){return c.a.createElement("div",{id:"hourly",className:"hourly"},this.state.hourlyItem)}}]),a}(c.a.Component);function p(e){return c.a.createElement("div",{className:"dailyItem"},c.a.createElement("p",{className:"dailyItemWeekday"},e.weekday),c.a.createElement("i",{className:"dailyItemIcon ".concat(e.icon)}),c.a.createElement("div",{className:"dailyItemHighLow"},c.a.createElement("p",{className:"dailyItemLow"},e.low,c.a.createElement("span",null,"\xb0")),c.a.createElement("p",{className:"dailyItemHigh"},e.high,c.a.createElement("span",null,"\xb0"))))}var g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).displayItems=function(e){var t={Clear:"fas fa-sun",Clouds:"fas fa-cloud",Rain:"fas fa-cloud-showers-heavy"},a=[];if(!e)for(var r=0;r<7;r++)a.push(c.a.createElement(p,{key:"dailyitem-".concat(r),weekday:n.state.weekday[r],icon:"fas fa-cloud-showers-heavy"}));e.forEach((function(e,r){r>0&&a.push(c.a.createElement(p,{key:"dailyitem-".concat(r),weekday:h("weekday",e.dt,n.props.timezone_offset),icon:t[e.weather[0].main],low:d("kelvin","celcius",e.temp.min),high:d("kelvin","celcius",e.temp.max)}))})),n.setState({dailyItems:a})},n.state={data:[],weekday:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dailyItems:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.displayItems(this.props.daily)}},{key:"render",value:function(){return c.a.createElement("div",{id:"daily",className:"daily"},this.state.dailyItems)}}]),a}(c.a.Component);function E(e){return c.a.createElement("div",{className:"detailsItem"},c.a.createElement("i",{className:"detailsItemIcon ".concat(e.icon)}),c.a.createElement("p",{className:"detailsItemLabel"},e.label),c.a.createElement("p",{className:"detailsItemData"},e.data))}function v(e){return c.a.createElement("div",{id:"details",className:"details"},c.a.createElement(E,{key:"feelslike",icon:"fas fa-thermometer-half",label:"Feels like",data:"".concat(d("kelvin","celcius",e.item.feels_like),"\xb0")}),c.a.createElement(E,{key:"wind",icon:"fas fa-wind",label:"Wind",data:e.item.wind_speed}),c.a.createElement(E,{key:"humidity",icon:"fas fa-tint",label:"Humidity",data:"".concat(e.item.humidity,"%")}),c.a.createElement(E,{key:"pressure",icon:"fas fa-tachometer-alt",label:"Pressure",data:e.item.pressure}),c.a.createElement(E,{key:"sunrise",icon:"far fa-sun",label:"Sunrise",data:h("HH:MM",e.today.sunrise,e.timezone_offset)}),c.a.createElement(E,{key:"sunset",icon:"far fa-moon",label:"Sunset",data:h("HH:MM",e.today.sunset,e.timezone_offset)}))}function k(e){return c.a.createElement("div",{id:"summary",className:"summary"},c.a.createElement("div",{id:"summaryIcon",className:"summaryIcon"},c.a.createElement("i",{className:"summaryIconIcon ".concat({day:{Atmosphere:"fas fa-smog",Clear:"fas fa-sun",Clouds:"fas fa-cloud",Drizzle:"fas fa-cloud-showers-heavy",Rain:"fas fa-cloud-showers-heavy",Snow:"fas fa-snowflake",Thunderstorm:"fas fa-bolt"},night:{Atmosphere:"fas fa-smog",Clear:"fas fa-moon",Clouds:"fas fa-cloud-moon",Drizzle:"fas fa-cloud-showers-heavy",Rain:"fas fa-cloud-showers-heavy",Snow:"fas fa-snowflake",Thunderstorm:"fas fa-bolt"}}[e.dayNight][e.item.weather[0].main])}),c.a.createElement("p",{className:"summaryIconDescription"},e.item.weather[0].description)),c.a.createElement("div",{id:"summaryTemp",className:"summaryTemp"},c.a.createElement("p",{className:"summaryCurrentTemp"},d("kelvin","celcius",e.item.temp),c.a.createElement("span",null,"\xb0"))),c.a.createElement("div",{id:"summaryHighLow",className:"summaryHighLow"},c.a.createElement("div",{id:"summaryHigh",className:"summaryHighLowItem"},c.a.createElement("i",{className:"fas fa-long-arrow-alt-up"}),c.a.createElement("p",{className:"summaryHighLowTemp"},d("kelvin","celcius",e.today.temp.max),c.a.createElement("span",null,"\xb0"))),c.a.createElement("div",{id:"summaryLow",className:"summaryHighLowItem"},c.a.createElement("i",{className:"fas fa-long-arrow-alt-down"}),c.a.createElement("p",{className:"summaryHighLowTemp"},d("kelvin","celcius",e.today.temp.min),c.a.createElement("span",null,"\xb0")))))}var b=function(e){return c.a.createElement("div",{id:"result",className:"result"},c.a.createElement(k,{key:"summary",item:e.result.current,today:e.result.daily[0],dayNight:e.dayNight}),c.a.createElement(v,{key:"details",item:e.result.current,today:e.result.daily[0],timezone_offset:e.timezone_offset}),c.a.createElement(f,{key:"hourly",hourly:e.result.hourly,timezone_offset:e.timezone_offset}),c.a.createElement(g,{key:"daily",daily:e.result.daily,timezone_offset:e.timezone_offset}))};var w=function(e){e.city;var t,a=t=e.result.current.dt<e.result.current.sunrise||e.result.current.dt>e.result.current.sunset?"night":"day",n=e.result.current.weather[0].main,r=[],o="light rain"===e.result.current.weather[0].description?300:900,i=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};["Rain","Thunderstorm"].includes(e.result.current.weather[0].main)&&function(){for(var e=0;e<o;e++){var a="day"===t?"background-rain-drop":"background-rain-drop-night",n={left:i(0,window.innerWidth),top:i(-1e3,window.innerHeight)};r.push(c.a.createElement("div",{key:"drop-".concat(e),id:"drop-".concat(e),className:a,style:n}))}}(),"night"===t&&"Clear"===e.result.current.weather[0].main&&function(){for(var e=0;e<250;e++){var t=Math.floor(Math.random()*window.innerWidth),a=Math.floor(Math.random()*window.innerHeight),n=10*Math.random(),o=1*Math.random(),i={left:t,top:a,width:1+o,height:1+o,animationDuration:"".concat(n,"s")};r.push(c.a.createElement("div",{key:"star-".concat(e),id:"star-".concat(e),className:"background-night-star",style:i}))}}();var s={day:{Clear:"background-clear-sunny",Clouds:"background-cloud",Rain:"background-rain",Thunderstorm:"background-rain"},night:{Clear:"background-clear-night",Clouds:"background-cloud-night",Rain:"background-rain-night",Thunderstorm:"background-rain-night"}}[a][n];return c.a.createElement("div",{id:"main",className:"main"},c.a.createElement("div",{id:"background",className:"background ".concat(s)},r),c.a.createElement("div",{id:"mainNav",className:"mainNav"},c.a.createElement("div",{id:"mainBtnHome",className:"mainBtnHome",onClick:function(){e.displayPage("home")}},c.a.createElement("i",{className:"fas fa-undo-alt"})),c.a.createElement("div",{id:"mainLocation",className:"mainLocation"},c.a.createElement("h1",null,e.cityname))),c.a.createElement(b,{key:"result",result:e.result,dayNight:t,timezone_offset:e.timezone_offset,collectData:e.collectData}))},N=a(6),C=a.n(N);function S(e){var t;switch(e.type){case"noResult":t="Opps. No result.";break;case"tooMany":t="Opps. There are too many results, please be more specific!";break;case"emptyEntry":t="Opps. You must search something!";break;default:t="Opps!"}return c.a.createElement("div",{id:"homeResultError",className:"homeResultError"},c.a.createElement("div",{id:"homeResultErrorCon",className:"homeResultErrorCon"},c.a.createElement("p",null,t)))}function M(e){return c.a.createElement("div",{className:"cityResult",onClick:function(){return e.collectData("".concat(e.item.city_coord.latitude),"".concat(e.item.city_coord.longitude),"".concat(e.item.city_name))}},c.a.createElement("div",{className:"cityResultInfo"},c.a.createElement("h1",{className:"cityResultInfoH1"},e.item.city_name,", ",c.a.createElement("span",{className:"cityResultCountry"},e.item.city_country)),c.a.createElement("div",{className:"cityResultCoord"},c.a.createElement("p",{className:"cityResultLat"},"latitude: ",e.item.city_coord.latitude),c.a.createElement("p",{className:"cityResultLon"},"longitude: ",e.item.city_coord.longitude))),c.a.createElement("div",{className:"cityResultInspect"},c.a.createElement("i",{className:"fas fa-chevron-right"})))}function H(e){return c.a.createElement("div",{id:"homeResultContainer",className:"homeResultContainer"},e.result)}function O(e){return c.a.createElement("div",{id:"homeResultLoading",className:"homeResultLoading"},c.a.createElement("i",{className:"fas fa-spinner"}))}var I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"homeSelectSearchCity",className:"homeSelectSearchCity"},c.a.createElement("form",{id:"homeSelectSearchCityForm",className:"homeSelectSearchCityForm",onSubmit:function(t){return e.props.showResult(t)}},c.a.createElement("div",{className:"searchCityField","data-method":"cityname"},c.a.createElement("input",{id:"searchCityInput",type:"text",name:"cityname",autoComplete:"off",placeholder:"enter city name"}),c.a.createElement("button",{type:"submit"},c.a.createElement("i",{className:"fas fa-search"})))))}}]),a}(c.a.Component);function _(e){return c.a.createElement("div",{id:"homeSelect",className:"homeSelect"},c.a.createElement("ul",{id:"homeSelectMethod",className:"homeSelectMethod"},c.a.createElement("li",{className:"homeSelectMethodOption",onClick:function(){return e.handleSearchByCurrentLocation()}},"Current Location"),c.a.createElement("li",{className:"homeSelectMethodOption",onClick:function(){return e.openCloseSearchField()}},"Search City")))}function D(){return c.a.createElement("div",{id:"homeLogo",className:"homeLogo"},c.a.createElement("h1",{className:"homeLogoH1"},"G2Weather"))}var R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).openCloseSearchField=function(){n.setState({isOpen:{searchField:!n.state.isOpen.searchField}}),document.querySelector("#searchCityInput").value=""},n.showResult=function(e){e.preventDefault(),n.setState({isOpen:{result:!n.state.isOpen.result},result:c.a.createElement(O,{key:"homeselectsearchcity"})}),"geocoords"===e.target.dataset.method||(n.getCity("cityname",e.target.cityname.value),e.target.cityname.value="")},n.handleSearchByCurrentLocation=function(){n.props.searchMethod("currentLocation"),n.getGeoData(),n.setState({isOpen:{result:!n.state.isOpen.result}})},n.getGeoData=function(){navigator.geolocation.getCurrentPosition(n.getGeoDataSuccess,n.getGeoDataError)},n.getGeoDataSuccess=function(e){n.getCity("geocoords",[e.coords.latitude,e.coords.longitude])},n.getGeoDataError=function(e){console.log("Error: ".concat(e))},n.displayResult=function(e){var t=[];return e.forEach((function(e,a){t.push(c.a.createElement(M,{key:"homeresult-".concat(a),item:e,collectData:n.props.collectData,setCity:n.props.setCity}))})),t},n.getCity=function(e,t){var a,r,o;"geocoords"===e?(a=t[0].toFixed(1),r=t[1].toFixed(1),o="https://gut2weather.herokuapp.com/api/get_cityname_geo/".concat(a,"/").concat(r)):o="https://gut2weather.herokuapp.com/api/get_cityname_get/".concat(t),fetch(o).then((function(e){return 404===e.status?n.setState({result:c.a.createElement(S,{key:"homeresulterror",type:"emptyEntry"})}):e.json()})).then((function(e){var t=e.error?e.error_message?c.a.createElement(S,{key:"homeresulterror",type:"tooMany"}):c.a.createElement(S,{key:"homeresulterror",type:"noResult"}):n.displayResult(e),a=c.a.createElement(H,{key:"homeresultcontainer",result:t});n.setState({result:a})})).catch((function(e){console.log(e)}))},n.state={isOpen:{searchField:!1,result:!1},result:c.a.createElement(O,{key:"homeselectsearchcity"}),paginator:{current:0,results:""}},n.handleSearchByCurrentLocation=n.handleSearchByCurrentLocation.bind(Object(l.a)(n)),n.openCloseSearchField=n.openCloseSearchField.bind(Object(l.a)(n)),n.showResult=n.showResult.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"home",className:"home"},c.a.createElement(D,{key:"homelogo"}),c.a.createElement(_,{key:"homeSelect",searchMethod:this.props.searchMethod,handleSearchByCurrentLocation:this.handleSearchByCurrentLocation,openCloseSearchField:this.openCloseSearchField}),c.a.createElement(n.Fragment,null,c.a.createElement(C.a,{open:this.state.isOpen.searchField},c.a.createElement(I,{key:"homeselectsearchcity",showResult:this.showResult}))),c.a.createElement(n.Fragment,null,c.a.createElement(C.a,{open:this.state.isOpen.result},this.state.result)))}}]),a}(c.a.Component);var L=function(e){return c.a.createElement("h1",null,"LOADING...")},j=(a(18),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getCookie=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t},n.displayPage=function(e){var t;switch(e){case"home":t=c.a.createElement(R,{key:"home",searchMethod:n.searchMethod,getCity:n.getCity,setCity:n.setCity,collectData:n.collectData,result:n.state.result,geodata:n.state.geodata});break;case"loading":t=c.a.createElement(L,{key:"loading"});break;case"main":t=c.a.createElement(w,{key:"main",cityname:n.state.cityname,result:n.state.main.result,timezone_offset:n.state.main.result.timezone_offset,displayPage:n.displayPage,collectData:n.collectData});break;default:t=c.a.createElement(R,{key:"home",searchMethod:n.searchMethod,getCity:n.getCity,setCity:n.setCity,collectData:n.collectData,result:n.state.result,geodata:n.state.geodata})}n.setState({displayPage:t})},n.searchMethod=function(e){"currentLocation"===e&&navigator.geolocation.getCurrentPosition(n.getGeoDataSuccess,n.getGeoDataError),n.setState({geodata:{isLoading:!0}})},n.getGeoDataSuccess=function(e){n.setState({geodata:{latitude:e.coords.latitude,longitude:e.coords.longitude,isLoading:!1}})},n.getGeoDataError=function(e){console.log("Error: ".concat(e))},n.getCity=function(e){n.getCookie("csrftoken");fetch("https://gut2weather.herokuapp.com/api/get_cityname_get/".concat(e)).then((function(e){return e.json()})).then((function(e){n.setState({result:e})})).catch((function(e){console.log(e)})).then(console.log(n.state))},n.setCity=function(e){console.log("setCity: ".concat(e)),n.setState({cityname:e})},n.collectData=function(e,t,a){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=").concat("","&appid=").concat("81292baa61f67339affb10a09e0661d9")).then((function(e){return e.json()})).then((function(e){n.setState({isLoading:!1,cityname:a,main:{cityname:a,results:e,result:e}}),n.displayPage("main")}))},n.state={geodata:{latitude:"",longitude:"",isLoading:!0},result:"",isLoading:!0,displayPage:"",cityname:""},n.displayPage=n.displayPage.bind(Object(l.a)(n)),n.searchMethod=n.searchMethod.bind(Object(l.a)(n)),n.getCity=n.getCity.bind(Object(l.a)(n)),n.collectData=n.collectData.bind(Object(l.a)(n)),n.setCity=n.setCity.bind(Object(l.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.displayPage("home")}},{key:"render",value:function(){return c.a.createElement("div",{id:"App",className:"App"},this.state.displayPage)}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.0e3fdcc1.chunk.js.map