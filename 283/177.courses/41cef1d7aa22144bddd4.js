webpackJsonp([177,267],{239:function(t,e,a){"use strict";nb.substance0147=extendsClass(ScienceMain,{frame0:function(){instance.viewStack.NBONOFF.visible=!1;var t=this.timeline,e=this.step0,a=this.step1,i=!1;a.alpha=0,t.setAutoPlay(!0,1),t.on("change",function(n){!i&&n.time>=1&&(i=!0,TweenMax.to([t,e],.5,{alpha:0,delay:1,onComplete:function(){TweenMax.to(a,.5,{alpha:1})}}));for(var r=1;r<4;r++)e["container"+r].s.alpha=n.time})},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"铁在什么情况下容易生锈？我们怎么防止、减缓铁生锈呢？",labName:"控制铁生锈的速度",CONCLUSION:"铁钉生锈是水和空气共同作用的结果。",newLayOut:!0,bgColor:"#F3E6CF"},const:{},event:{}}),nb.timelineSprite=function(){var t,e,a=this;if(a.bgMask){var i=a.bgMask.getChildAt(0);a.progressBar.mask=i,i.scale.x=0}for(var n,r=this.a0.x===this.a1.x?"vertical":"horizontal",s=0,o=0;o<int.MAX_VALUE;o++){var d=this["a"+o];if(void 0===d){e="vertical"===r?this["a"+(o-1)].y:this["a"+(o-1)].x,s=o;break}0===o&&(t="vertical"===r?d.y:d.x),d.addEventListener(TouchEvent.TAP,function(){"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y,onUpdate:c,onComplete:g}):TweenMax.to(a.drag,.5,{x:this.x,onUpdate:c,onComplete:g}),a.emit("nodeTap",{index:this.name.substr(1,1)})})}this.setDrag=function(t){t&&NBDrag.addDrag(a.drag,n)},this.updateBound=function(){"vertical"==r?(n={x:this.drag.x,y:this.drag.y,width:0,height:e},n={x:this.drag.x,y:this.drag.y,width:0,height:e}):n={x:this.drag.x,y:this.drag.y,width:e,height:0}},this.updateBound(),a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var i=s-1;if("vertical"===r){var n=Math.round((this.y-t)/(e-t)*i);n<0&&(n=0),TweenMax.to(this,.5,{y:n*(e-t)/i,onUpdate:c,onComplete:g})}else{var o=Math.round((this.x-t)/(e-t)*i);o<0&&(o=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){c()}),a.drag.constY=a.drag.y;var h,c=function(){if("vertical"===r){var i=(a.drag.y-t)/(e-t);a.emit("change",{time:i})}else{a.drag.y=a.drag.constY,a.drag.x>=e&&(a.drag.x=e),a.drag.x<=t&&(a.drag.x=t);var n=(a.drag.x-t)/(e-t);a.emit("change",{time:n}),a.drag.line0&&(a.drag.line0.rotation=1800*n*Math.PI/180,a.drag.line1.rotation=360*n*Math.PI/180),a.bgMask&&(a.bgMask.getChildAt(0).scale.x=n)}},g=function(){a.setMomentsPause(!0,2e3,2);var i=s-1;if("vertical"===r){var n=(a.drag.y-t)/(e-t),o=Math.round(n*i);a.emit("change",{index:o,time:n})}else{var d=(a.drag.x-t)/(e-t),h=Math.round(d*i);a.emit("change",{index:h,time:d})}};this.getNodeCount=function(){return s},this.setNodePos=function(t){var e=this["a"+t];"vertical"===r?a.drag.y=e.y:a.drag.x=e.x},nb.MovieClip.ticker.add(function(){if(a._auto_&&!a.drag.isDragging){var i=e-t;"vertical"===r?(a.drag.y+=a._speed_,a.drag.y>i&&(a.drag.y=i)):(a.drag.x+=a._speed_,a.drag.x>i+a.a0.x&&(a.drag.x=i+a.a0.x)),c()}}),this.setAutoPlay=function(t,e){this._auto_=t,this._speed_=e||.1},this.setAutoAlign=function(t){this._align_=t},this.setMomentsPause=function(t,e,i){clearTimeout(h),t&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(h),a.setAutoPlay(!1),h=setTimeout(function(){a.setAutoPlay(!0,i)},e)):a.setAutoPlay(!1)},this.resetTimeline=function(){this.drag.x=this.bgMask.x}},t.exports=nb.substance0147},386:function(t,e,a){"use strict";a(239),nb.substance0558=extendsClass(ScienceMain,{frame0:function(){var t=this;t.timeline.setAutoPlay(!0,2),t.timeline.on("change",function(e){t.littleWater.alpha=e.time})},start:function(){this.menu.addStepFromObj(this.info),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"水珠形成和冰有关吗？",labName:"水珠形成和冰有关吗",title0:"观察玻璃杯壁的变化",CONCLUSION:"玻璃杯上的小水珠与杯内的冰是有关系的。",isOpenObserve:!0},const:{},event:{}}),t.exports=nb.substance0558}});