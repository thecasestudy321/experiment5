webpackJsonp([88,267],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},l=new PIXI.Container,d=0;d<3;++d){var h=d+1,c=PIXI.Sprite.fromFrame("TAP_1"+h);c.x=-c.width/2,c.y=-c.height/2;var u=new PIXI.Container;u.addChild(c),l.addChild(u)}var p=0;if(s.direction)switch(s.direction){case"top":p=-Math.PI/2;break;case"bottom":p=Math.PI/2;break;case"left":p=Math.PI;break;case"right":p=0;break;default:p=0}l.filters=[o];for(var x=0;x<l.children.length;x++){var f=l.children[x];f.scale.x=f.scale.y=2,x<2&&b(f,.75*x)}if(i.addChild(l),s.addArrow){var v,g;if(s.direction){v=PIXI.Sprite.fromFrame("oneArrow"),g=new PIXI.extras.MovieClip([v]);var m=s.scale?s.scale:1;g.scale.x=g.scale.y=m,g.pivot={x:0,y:g.height/2},g.rotation=p}else{v=PIXI.Sprite.fromFrame("NBarrow"),(g=new PIXI.extras.MovieClip([v])).pivot={x:g.width/2,y:g.height/2};var w=s.scale?s.scale:1;g.scale.x=g.scale.y=w,"horizontal"!==(s.type?s.type:"horizontal")&&(g.rotation=Math.PI/2)}i.addChild(g),i.arrow=g,i.addEventListener("hideArrow",function(){g.alpha=0,g.visible=!1}),i.addEventListener("showArrow",function(){g.alpha=1,g.visible=!0})}l.alpha=.4;var y=new PIXI.Graphics;function b(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return y.beginFill(16776960,0),y.drawRect(-50,-50,100,100),i.addChild(y),i.addEventListener(MouseEvent.MOUSE_OVER,function(){l.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){l.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!r&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;o._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),l.filters=[o]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:g.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:g.width/2,y:g.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},239:function(e,t,a){"use strict";nb.substance0147=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;var e=this.timeline,t=this.step0,a=this.step1,n=!1;a.alpha=0,e.setAutoPlay(!0,1),e.on("change",function(i){!n&&i.time>=1&&(n=!0,TweenMax.to([e,t],.5,{alpha:0,delay:1,onComplete:function(){TweenMax.to(a,.5,{alpha:1})}}));for(var o=1;o<4;o++)t["container"+o].s.alpha=i.time})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"铁在什么情况下容易生锈？我们怎么防止、减缓铁生锈呢？",labName:"控制铁生锈的速度",CONCLUSION:"铁钉生锈是水和空气共同作用的结果。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),nb.timelineSprite=function(){var e,t,a=this;if(a.bgMask){var n=a.bgMask.getChildAt(0);a.progressBar.mask=n,n.scale.x=0}for(var i,o=this.a0.x===this.a1.x?"vertical":"horizontal",r=0,s=0;s<int.MAX_VALUE;s++){var l=this["a"+s];if(void 0===l){t="vertical"===o?this["a"+(s-1)].y:this["a"+(s-1)].x,r=s;break}0===s&&(e="vertical"===o?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){"vertical"===o?TweenMax.to(a.drag,.5,{y:this.y,onUpdate:h,onComplete:c}):TweenMax.to(a.drag,.5,{x:this.x,onUpdate:h,onComplete:c}),a.emit("nodeTap",{index:this.name.substr(1,1)})})}this.setDrag=function(e){e&&NBDrag.addDrag(a.drag,i)},this.updateBound=function(){"vertical"==o?(i={x:this.drag.x,y:this.drag.y,width:0,height:t},i={x:this.drag.x,y:this.drag.y,width:0,height:t}):i={x:this.drag.x,y:this.drag.y,width:t,height:0}},this.updateBound(),a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var n=r-1;if("vertical"===o){var i=Math.round((this.y-e)/(t-e)*n);i<0&&(i=0),TweenMax.to(this,.5,{y:i*(t-e)/n,onUpdate:h,onComplete:c})}else{var s=Math.round((this.x-e)/(t-e)*n);s<0&&(s=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){h()}),a.drag.constY=a.drag.y;var d,h=function(){if("vertical"===o){var n=(a.drag.y-e)/(t-e);a.emit("change",{time:n})}else{a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var i=(a.drag.x-e)/(t-e);a.emit("change",{time:i}),a.drag.line0&&(a.drag.line0.rotation=1800*i*Math.PI/180,a.drag.line1.rotation=360*i*Math.PI/180),a.bgMask&&(a.bgMask.getChildAt(0).scale.x=i)}},c=function(){a.setMomentsPause(!0,2e3,2);var n=r-1;if("vertical"===o){var i=(a.drag.y-e)/(t-e),s=Math.round(i*n);a.emit("change",{index:s,time:i})}else{var l=(a.drag.x-e)/(t-e),d=Math.round(l*n);a.emit("change",{index:d,time:l})}};this.getNodeCount=function(){return r},this.setNodePos=function(e){var t=this["a"+e];"vertical"===o?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){if(a._auto_&&!a.drag.isDragging){var n=t-e;"vertical"===o?(a.drag.y+=a._speed_,a.drag.y>n&&(a.drag.y=n)):(a.drag.x+=a._speed_,a.drag.x>n+a.a0.x&&(a.drag.x=n+a.a0.x)),h()}}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,n){clearTimeout(d),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(d),a.setAutoPlay(!1),d=setTimeout(function(){a.setAutoPlay(!0,n)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){this.drag.x=this.bgMask.x}},e.exports=nb.substance0147},391:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(169));a(239),nb.substance0564=extendsClass(ScienceMain,{frame0:function(){var e=this,t=e.break1,a=e.break0;NBDrag.addDrag(t);var i=t.x,o=t.y,r=(0,n.default)(190,200,!0);t.addChild(r),t.Point=r,instance.NBDownTip.showTip("将冰块倒入空烧杯中");var s=e.break1Copy;function l(){TweenMax.to(e.maojin,.5,{y:"+=20",repeat:10,yoyo:!0,onComplete:function(){TweenMax.to(e.maojin,1,{y:"-=250",alpha:0,onComplete:function(){TweenMax.killTweensOf(t.waterDrop),TweenMax.to(e.timeline,.2,{alpha:1,onComplete:function(){e.timeline.setAutoPlay(!0,2),e.timeline.on("change",function(e){t.waterDrop.alpha=e.time})}})}})}}),TweenMax.to(t.waterDrop,9,{alpha:0})}t.addEventListener(NBDrag.event.START_DRAG,function(){instance.NBDownTip.hideTip(),r&&t.removeChild(r);s.alpha=.3}),t.addEventListener(NBDrag.event.STOP_DRAG,function(){t.waterDrop.hitTest(a)||t.waterDrop.hitTest(s)?(t.removeChild(r),r=null,t.hit=!0,t.interactive=!1,TweenMax.to(t,1,{x:s.x,y:s.y,ease:Sine.easeInOut}),TweenMax.to(t,1,{rotation:s.rotation,ease:Sine.easeInOut,onComplete:function(){s.visible=!1,TweenMax.to(t.block0,.3,{x:40,y:10,ease:Sine.easeInOut}),TweenMax.to(t.block1,.3,{x:60,y:0,ease:Sine.easeInOut}),TweenMax.to(t.block2,.3,{x:40,y:10,ease:Sine.easeInOut}),TweenMax.to(t.block3,.3,{x:100,y:0,ease:Sine.easeInOut,onComplete:function(){TweenMax.to(t.block0,.3,{x:-280,y:-320,ease:Sine.easeInOut}),TweenMax.to(t.block1,.3,{x:-350,y:-160,ease:Sine.easeInOut}),TweenMax.to(t.block2,.3,{x:-320,y:-210,ease:Sine.easeInOut}),TweenMax.to(t.block3,.3,{x:-320,y:-240,ease:Sine.easeInOut,onComplete:function(){e.addChildWithSamePos(t.block0),e.block0=t.block0,e.addChildWithSamePos(t.block1),e.block1=t.block1,e.addChildWithSamePos(t.block2),e.block2=t.block2,e.addChildWithSamePos(t.block3),e.block3=t.block3,t.block0.rotation=e.break1Copy.rotation,t.block1.rotation=e.break1Copy.rotation,t.block2.rotation=e.break1Copy.rotation,t.block3.rotation=e.break1Copy.rotation,TweenMax.to(a,.4,{x:"-= 300",ease:Sine.easeInOut,alpha:0}),TweenMax.to([e.block0,e.block1,e.block2,e.block3],.4,{x:"-= 300",ease:Sine.easeInOut,alpha:0}),TweenMax.to(t,1,{rotation:0,ease:Sine.easeInOut,onComplete:function(){TweenMax.to(e.maojin,.5,{alpha:1,onComplete:function(){e.addChild(e.maojin),TweenMax.to(e.maojin,.5,{x:t.x+40,y:t.y+30,onComplete:l})}})}})}})}})}})):(instance.NBDownTip.showTip("将冰块倒入空烧杯中"),t.addChild(r),s.alpha=0,TweenMax.to(this,.5,{x:i,y:o,ease:Sine.easeInOut}))}),a.addEventListener(TouchEvent.TAP,function(){t.hit||instance.NBDownTip.showTip("将冰块倒入空烧杯中")}),s.alpha=0,e.maojin.alpha=0,e.timeline.alpha=0},start:function(){this.menu.addStepFromObj(this.info),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"把冰块倒掉后的杯子外壁会出现水珠吗？",labName:"水珠会再次出现吗",title0:"观察玻璃杯壁的变化",CONCLUSION:"空气中的水蒸气遇到了冷的玻璃杯壁（低于0°C），从而变成了小水珠。"},const:{},event:{}}),e.exports=nb.substance0564}});