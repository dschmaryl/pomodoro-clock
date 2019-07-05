(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(44)},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(8),o=t.n(u),i=t(6),s=t(20),c=t(24),l=t.n(c),m=t(4),d=t(25),p=t(1),f={workTime:25,breakTime:5,volume:50,soundPlaying:!1,minutes:25,seconds:0,session:"work",paused:!0},E=Object(i.c)(Object(s.a)({key:"pomodoro-clock",storage:l.a},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;switch((arguments.length>1?arguments[1]:void 0).type){case"DECREASE_WORK_TIME":if(e.paused&&"work"===e.session){var n=Math.max(1,e.workTime-1);return Object(p.a)({},e,{workTime:n,minutes:n,seconds:0})}return Object(p.a)({},e,{workTime:Math.max(1,e.workTime-1)});case"INCREASE_WORK_TIME":if(e.paused&&"work"===e.session){var t=Math.min(e.workTime+1,120);return Object(p.a)({},e,{workTime:t,minutes:t,seconds:0})}return Object(p.a)({},e,{workTime:Math.min(e.workTime+1,120)});case"DECREASE_BREAK_TIME":if(e.paused&&"break"===e.session){var r=Math.max(1,e.breakTime-1);return Object(p.a)({},e,{breakTime:r,minutes:r,seconds:0})}return Object(p.a)({},e,{breakTime:Math.max(1,e.breakTime-1)});case"INCREASE_BREAK_TIME":if(e.paused&&"break"===e.session){var a=Math.min(e.breakTime+1,120);return Object(p.a)({},e,{breakTime:a,minutes:a,seconds:0})}return Object(p.a)({},e,{breakTime:Math.min(e.breakTime+1,120)});case"INCREASE_VOLUME":return Object(p.a)({},e,{volume:Math.min(100,e.volume+5)});case"DECREASE_VOLUME":return Object(p.a)({},e,{volume:Math.max(0,e.volume-5)});case"PLAY_SOUND":return Object(p.a)({},e,{soundPlaying:!0});case"STOP_SOUND":return Object(p.a)({},e,{soundPlaying:!1});case"TOGGLE_SOUND":return Object(p.a)({},e,{soundPlaying:!e.soundPlaying});case"UNPAUSE_TIMER":return e.paused?Object(p.a)({},e,{paused:!1,soundPlaying:!1}):e;case"PAUSE_TIMER":return e.paused?e:Object(p.a)({},e,{paused:!0});case"TOGGLE_PAUSED":return Object(p.a)({},e,{paused:!e.paused});case"NEXT_SESSION":return"work"===e.session?Object(p.a)({},e,{soundPlaying:!1,session:"break",paused:!0,minutes:e.breakTime,seconds:0}):Object(p.a)({},e,{soundPlaying:!1,session:"work",paused:!0,minutes:e.workTime,seconds:0});case"TIMER_TICK":return e.paused?e:0===e.minutes&&1===e.seconds?"work"===e.session?Object(p.a)({},e,{soundPlaying:!0,session:"break",paused:!0,minutes:e.breakTime,seconds:0}):Object(p.a)({},e,{soundPlaying:!0,session:"work",paused:!0,minutes:e.workTime,seconds:0}):0===e.seconds?Object(p.a)({},e,{minutes:e.minutes-1,seconds:59}):Object(p.a)({},e,{seconds:e.seconds-1});default:return e}})),b=Object(s.b)(E),v=t(2),O=t(3);function j(){var e=Object(v.a)(["\n  text-align: center;\n  font-size: 2.2em;\n  padding-top: 6px;\n"]);return j=function(){return e},e}var k=O.a.h1(j()),T=function(){return a.a.createElement(k,null,"Pomodoro clock")};function g(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 30px 0 30px;\n"]);return g=function(){return e},e}var y=O.a.div(g()),S=function(e){var n=e.children;return a.a.createElement(y,null,n)},x=t(7);function h(){var e=Object(v.a)(["\n  font-size: 2em;\n"]);return h=function(){return e},e}function w(){var e=Object(v.a)(["\n  font-size: 1.5em;\n"]);return w=function(){return e},e}function P(){var e=Object(v.a)(["\n  cursor: pointer;\n  border: none;\n  outline: none;\n  padding: 6px 10px 0 10px;\n  text-align: center;\n"]);return P=function(){return e},e}function _(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n"]);return _=function(){return e},e}function I(){var e=Object(v.a)(["\n  width: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return I=function(){return e},e}var M=O.a.div(I()),R=O.a.div(_()),A=O.a.button(P()),C=O.a.div(w()),D=O.a.div(h()),N=function(e){var n=e.label,t=e.value,r=e.onDecrease,u=e.onIncrease;return a.a.createElement(M,null,a.a.createElement(C,null,n),a.a.createElement(R,null,a.a.createElement(A,{onClick:function(){return r()}},a.a.createElement(x.b,{size:"2.2em"})),a.a.createElement(D,null,t),a.a.createElement(A,{onClick:function(){return u()}},a.a.createElement(x.c,{size:"2.2em"}))))},U=Object(m.b)(function(e){return{label:"work",value:e.workTime}},function(e){return{onDecrease:function(){return e({type:"DECREASE_WORK_TIME"})},onIncrease:function(){return e({type:"INCREASE_WORK_TIME"})}}})(N),z=Object(m.b)(function(e){return{label:"break",value:e.breakTime}},function(e){return{onDecrease:function(){return e({type:"DECREASE_BREAK_TIME"})},onIncrease:function(){return e({type:"INCREASE_BREAK_TIME"})}}})(N),V=t(11),K=t(13),L=t(12),G=t(14),B=function(e){function n(){var e,t;Object(V.a)(this,n);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return(t=Object(K.a)(this,(e=Object(L.a)(n)).call.apply(e,[this].concat(u)))).timeout=void 0,t.adjustVolume=function(e){clearTimeout(t.timeout),t.props.soundPlaying||t.props.toggleSound(),t.timeout=setTimeout(t.props.toggleSound,1e3),e()},t.render=function(){var e=t.props,n=e.volume,r=e.decreaseVolume,u=e.increaseVolume;return a.a.createElement(N,{label:"volume",value:n,onDecrease:function(){return t.adjustVolume(r)},onIncrease:function(){return t.adjustVolume(u)}})},t}return Object(G.a)(n,e),n}(a.a.Component),W=Object(m.b)(function(e){return{volume:e.volume,soundPlaying:e.soundPlaying,session:e.session}},function(e){return{decreaseVolume:function(){return e({type:"DECREASE_VOLUME"})},increaseVolume:function(){return e({type:"INCREASE_VOLUME"})},toggleSound:function(){return e({type:"TOGGLE_SOUND"})}}})(B);function J(){var e=Object(v.a)(["\n  display: inline;\n  font-size: 1.5em;\n"]);return J=function(){return e},e}function X(){var e=Object(v.a)(["\n  cursor: pointer;\n  border: none;\n  outline: none;\n  padding: 10px;\n  text-align: center;\n"]);return X=function(){return e},e}function Y(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 8px;\n"]);return Y=function(){return e},e}function F(){var e=Object(v.a)(["\n  width: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return F=function(){return e},e}var q=O.a.div(F()),H=O.a.div(Y()),Q=O.a.button(X()),Z=O.a.div(J()),$=Object(m.b)(function(e){return{paused:e.paused,session:e.session}},function(e){return{togglePaused:function(){return e({type:"TOGGLE_PAUSED"})},nextSession:function(){return e({type:"NEXT_SESSION"})}}})(function(e){var n=e.paused,t=e.togglePaused,r=e.nextSession;return a.a.createElement(q,null,a.a.createElement(Z,null,"session"),a.a.createElement(H,null,a.a.createElement(Q,{onClick:function(){return t()}},n?a.a.createElement(x.e,{size:"2em"}):a.a.createElement(x.d,{size:"2em"})),a.a.createElement(Q,{onClick:function(){return r()}},a.a.createElement(x.a,{size:"2.5em"}))))});function ee(){var e=Object(v.a)(["\n  font-size: 5em;\n  cursor: pointer;\n  color: ",";\n"]);return ee=function(){return e},e}function ne(){var e=Object(v.a)(["\n  font-size: 2em;\n  padding-bottom: 8px;\n"]);return ne=function(){return e},e}function te(){var e=Object(v.a)(["\n  text-align: center;\n  padding-top: 20px;\n"]);return te=function(){return e},e}var re=O.a.div(te()),ae=O.a.div(ne()),ue=O.a.div(ee(),function(e){return"work"===e.session?"green":"red"}),oe=function(e){function n(){var e,t;Object(V.a)(this,n);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return(t=Object(K.a)(this,(e=Object(L.a)(n)).call.apply(e,[this].concat(u)))).state={interval:void 0,paused:!0},t.componentDidMount=function(){return t.checkPaused(t.props.paused)},t.componentWillReceiveProps=function(e){var n=e.paused;return t.checkPaused(n)},t.checkPaused=function(e){e&&!t.state.paused?t.setState({paused:!0,interval:clearInterval(t.state.interval)}):!e&&t.state.paused&&t.setState({paused:!1,interval:setInterval(function(){return t.props.timerTick()},1e3)},function(){return t.props.timerTick()})},t.timerClick=function(){return t.props.paused?t.props.unpauseTimer():t.props.pauseTimer()},t.render=function(){var e=t.props,n=e.minutes,r=e.seconds,u=e.session,o=n<10?"0"+n:n,i=r<10?"0"+r:r,s=u[0].toUpperCase()+u.slice(1);return document.title=s+" ~ "+o+":"+i,a.a.createElement(re,null,a.a.createElement(ae,null,s," time left:"),a.a.createElement(ue,{onClick:t.timerClick,session:t.props.session},o,":",i))},t}return Object(G.a)(n,e),n}(a.a.Component),ie=Object(m.b)(function(e){return{paused:e.paused,session:e.session,minutes:e.minutes,seconds:e.seconds}},function(e){return{pauseTimer:function(){return e({type:"PAUSE_TIMER"})},unpauseTimer:function(){return e({type:"UNPAUSE_TIMER"})},timerTick:function(){return e({type:"TIMER_TICK"})}}})(oe),se=t(15),ce=t.n(se),le=Object(m.b)(function(e){return{volume:e.volume,soundPlaying:e.soundPlaying}})(function(e){var n=e.volume,t=e.soundPlaying;return a.a.createElement(ce.a,{url:"https://dschmaryl.github.io/pomodoro-clock/static/alarm.opus",volume:n,loop:!0,playFromPosition:0,playStatus:t?ce.a.status.PLAYING:ce.a.status.STOPPED})}),me=function(){return a.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.a.createElement("div",{style:{width:"300px",height:"560px",display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.a.createElement(T,null),a.a.createElement(S,null,a.a.createElement(U,null),a.a.createElement(z,null)),a.a.createElement(S,null,a.a.createElement(W,null),a.a.createElement($,null)),a.a.createElement(ie,null),a.a.createElement(le,null)))};t(43);o.a.render(a.a.createElement(function(e){var n=e.children;return a.a.createElement(m.a,{store:E},a.a.createElement(d.a,{loading:null,persistor:b},n))},null,a.a.createElement(me,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6388f0b9.chunk.js.map