webpackJsonp([207],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){for(var n=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=a||!1,d=i||{addArrow:!1,type:"horizontal",scale:1},l=new PIXI.Container,s=0;s<3;++s){var c=s+1,h=PIXI.Sprite.fromFrame("TAP_1"+c);h.x=-h.width/2,h.y=-h.height/2;var v=new PIXI.Container;v.addChild(h),l.addChild(v)}var p=0;if(d.direction)switch(d.direction){case"top":p=-Math.PI/2;break;case"bottom":p=Math.PI/2;break;case"left":p=Math.PI;break;case"right":p=0;break;default:p=0}l.filters=[o];for(var u=0;u<l.children.length;u++){var b=l.children[u];b.scale.x=b.scale.y=2,u<2&&I(b,.75*u)}if(n.addChild(l),d.addArrow){var f,w;if(d.direction){f=PIXI.Sprite.fromFrame("oneArrow"),w=new PIXI.extras.MovieClip([f]);var x=d.scale?d.scale:1;w.scale.x=w.scale.y=x,w.pivot={x:0,y:w.height/2},w.rotation=p}else{f=PIXI.Sprite.fromFrame("NBarrow"),(w=new PIXI.extras.MovieClip([f])).pivot={x:w.width/2,y:w.height/2};var T=d.scale?d.scale:1;w.scale.x=w.scale.y=T,"horizontal"!==(d.type?d.type:"horizontal")&&(w.rotation=Math.PI/2)}n.addChild(w),n.arrow=w,n.addEventListener("hideArrow",function(){w.alpha=0,w.visible=!1}),n.addEventListener("showArrow",function(){w.alpha=1,w.visible=!0})}l.alpha=.4;var g=new PIXI.Graphics;function I(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return g.beginFill(16776960,0),g.drawRect(-50,-50,100,100),n.addChild(g),n.addEventListener(MouseEvent.MOUSE_OVER,function(){l.alpha=.6}),n.addEventListener(MouseEvent.MOUSE_OUT,function(){l.alpha=.4}),n.addEventListener(TouchEvent.TOUCH_BEGIN,function(){n.emit(n.event.TAP),!r&&n.parent&&n.parent.removeChild(n)}),n.x=e,n.y=t,n.setColor=function(e){var t=e>>16,a=e>>8&255,i=255&e;o._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,i,0,0,0,0,0,255,0],!1),l.filters=[o]},n.setRotation=function(e){n.rotation=e},n.showAllDir=function(){if(d.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),n.addChild(t),t.pivot={x:0,y:w.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),n.addChild(a),a.pivot={x:w.width/2,y:w.height/2},a.rotation=n.rotation+Math.PI/2}},n.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&n.scale.set(.6,.6),n}},384:function(e,t,a){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(a(169));nb.substance0243=extendsClass(ScienceMain,{frame0:function(){var e=this;$("body").css("backgroundColor","rgb(0, 0, 0)");var t=(0,i.default)(2,30,!0),a=(0,i.default)(63,30,!0);e.sm.addChild(t),instance.NBDownTip.showTip("点击活动星图查看具体星象"),e.big.visible=!1,e.big.alpha=0;var n,o=!1,r=new PIXI.Graphics;function d(t){var a=e.toLocal({x:t.data.global.x,y:t.data.global.y});if(a.x>n.x){var i=e.big.bot.rotation,o=(a.x-n.x)/10*Math.PI/180;n.x=a.x,e.big.bot.rotation=i-o}else{var r=e.big.bot.rotation,d=(n.x-a.x)/10*Math.PI/180;n.x=a.x,e.big.bot.rotation=r+d}}e.addChildAt(r,0),NBDrag.addDrag(e.sm),NBDrag.addDrag(e.txt),e.txt.addEventListener(NBDrag.event.START_DRAG,function(){instance.NBDownTip.hideTip(),this.removeChild(a),e.complete=!0}),NBGesture.addGesture(e.sm,NBGesture.gesture.TAP,function(){if(e.sm.removeChild(t),instance.NBDownTip.hideTip(),0==o){var a=e.toLocal({x:0,y:0},instance.stage);r.beginFill(0,0),r.drawRect(a.x,a.y,ScienceMain.W,ScienceMain.H),o=!0,e.big.visible=!0,TweenMax.to(e.big,.5,{alpha:1}),TweenMax.to(e.sm,.5,{alpha:0}),e.complete||instance.NBDownTip.showTip("转动星象图")}}),r.addEventListener(TouchEvent.TAP,function(){r.clear(),o=!1,TweenMax.to(e.big,.5,{alpha:0,onComplete:function(){e.big.visible=!1,e.complete||(e.txt.addChild(a),instance.NBDownTip.showTip("拖动文字标记出白羊座"))}}),TweenMax.to(e.sm,.5,{alpha:1})}),e.big.interactive=!0,e.big.addEventListener(TouchEvent.TOUCH_BEGIN,function(t){var i=e.toLocal({x:t.data.global.x,y:t.data.global.y});NBPoint.distance(i,e.big)>e.big.width/2&&(r.clear(),o=!1,TweenMax.to(e.big,.5,{alpha:0,onComplete:function(){e.big.visible=!1,e.complete||(e.txt.addChild(a),instance.NBDownTip.showTip("拖动文字标记出白羊座"))}}),TweenMax.to(e.sm,.5,{alpha:1}))}),e.big.touch.addEventListener(TouchEvent.TOUCH_BEGIN,function(t){var a=e.toLocal({x:t.data.global.x,y:t.data.global.y});n={x:a.x,y:a.y},this.addEventListener(TouchEvent.TOUCH_MOVE,d)}),e.big.touch.addEventListener(TouchEvent.TOUCH_END,function(){e.big.touch.removeListener(TouchEvent.TOUCH_MOVE,d)}),e.big.touch.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,function(){e.big.touch.removeListener(TouchEvent.TOUCH_MOVE,d)})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"用活动观星图观星。",labName:"用活动观星图观星",title0:"用活动观星图在星空图上找到并标出白羊座（包括名称和几颗星）",CONCLUSION:"用活动观星图可以比较方便的观星、认星。",newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0243}});