webpackJsonp([170],{169:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,i,n){for(var a=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=i||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},h=new PIXI.Container,l=0;l<3;++l){var d=l+1,c=PIXI.Sprite.fromFrame("TAP_1"+d);c.x=-c.width/2,c.y=-c.height/2;var p=new PIXI.Container;p.addChild(c),h.addChild(p)}var f=0;if(s.direction)switch(s.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}h.filters=[r];for(var m=0;m<h.children.length;m++){var u=h.children[m];u.scale.x=u.scale.y=2,m<2&&b(u,.75*m)}if(a.addChild(h),s.addArrow){var w,x;if(s.direction){w=PIXI.Sprite.fromFrame("oneArrow"),x=new PIXI.extras.MovieClip([w]);var g=s.scale?s.scale:1;x.scale.x=x.scale.y=g,x.pivot={x:0,y:x.height/2},x.rotation=f}else{w=PIXI.Sprite.fromFrame("NBarrow"),(x=new PIXI.extras.MovieClip([w])).pivot={x:x.width/2,y:x.height/2};var v=s.scale?s.scale:1;x.scale.x=x.scale.y=v,"horizontal"!==(s.type?s.type:"horizontal")&&(x.rotation=Math.PI/2)}a.addChild(x),a.arrow=x,a.addEventListener("hideArrow",function(){x.alpha=0,x.visible=!1}),a.addEventListener("showArrow",function(){x.alpha=1,x.visible=!0})}h.alpha=.4;var T=new PIXI.Graphics;function b(t,e){TweenMax.to(t,1.5,{delay:e,alpha:0,repeat:-1}),TweenMax.to(t.scale,1.5,{x:5,y:5,delay:e,repeat:-1})}return T.beginFill(16776960,0),T.drawRect(-50,-50,100,100),a.addChild(T),a.addEventListener(MouseEvent.MOUSE_OVER,function(){h.alpha=.6}),a.addEventListener(MouseEvent.MOUSE_OUT,function(){h.alpha=.4}),a.addEventListener(TouchEvent.TOUCH_BEGIN,function(){a.emit(a.event.TAP),!o&&a.parent&&a.parent.removeChild(a)}),a.x=t,a.y=e,a.setColor=function(t){var e=t>>16,i=t>>8&255,n=255&t;r._loadMatrix([e,0,0,0,0,0,i,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),h.filters=[r]},a.setRotation=function(t){a.rotation=t},a.showAllDir=function(){if(s.direction)for(var t=0;t<3;t++){var e=new PIXI.Container;e.addChild(PIXI.Sprite.fromFrame("oneArrow")),a.addChild(e),e.pivot={x:0,y:x.height/2},e.rotation=Math.PI/2*(t+1)}else{var i=new PIXI.Container;i.addChild(PIXI.Sprite.fromFrame("NBarrow")),a.addChild(i),i.pivot={x:x.width/2,y:x.height/2},i.rotation=a.rotation+Math.PI/2}},a.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&a.scale.set(.6,.6),a}},286:function(t,e,i){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(i(169));i(554),nb.substance0020=extendsClass(ScienceMain,{frame0:function(){instance.baseFrame.apply(this,[this.info.width])},frame1:function(){instance.baseFrame.apply(this,[this.info.width])},frame2:function(){instance.baseFrame.apply(this,[70])},frame0_v1:function(){instance.clipsFunc.apply(this,[3]);var t=this.onStepComplete;this.onStepComplete=function(){t.apply(this),$("#input1").attr("value",3)}},frame1_v1:function(){instance.clipsFunc.apply(this,[5]);var t=this.onStepComplete;this.onStepComplete=function(){t.apply(this),$("#input2").attr("value",5)}},baseFrame:function(t){var e=this,i=1,a=this,r=new PIXI.Graphics;a.info.addChild(r),NBDrag.addDrag(this.magnet,{x:this.ruller.x+5,y:this.magnet.y,width:this.ruller.width+this.magnet.width,height:0}),NBDrag.addDrag(this.clip,{x:this.ruller.x-this.clip.width-this.magnet.width,y:this.clip.y,width:this.ruller.width+this.clip.width+2*this.magnet.width,height:0});var o=function(){if(a.clip.parent===a){if(void 0===this){if(a.magnet.x>a.magnet.MaxX)return void(a.magnet.x=a.magnet.MaxX);if(a.magnet.x<a.magnet.MinX)return void(a.magnet.x=a.magnet.MinX);a.clip.x<a.clip.MinX&&(a.clip.x=a.clip.MinX),a.clip.x>a.clip.MaxX&&(a.clip.x=a.clip.MaxX)}else{if(this.x>this.MaxX)return void(this.x=this.MaxX);if(this.x<this.MinX)return void(this.x=this.MinX);a.magnet.x<a.magnet.MinX&&(a.magnet.x=a.magnet.MinX),a.magnet.x>a.magnet.MaxX&&(a.magnet.x=a.magnet.MaxX)}a.info.x=a.magnet.x,r.clear();var t=a.clip.x-a.magnet.x,e=-(a.magnet.width+a.clip.width);if(t<0&&t>e)return a.info.t.text="",void(i=0);t>0?(i=1,r.lineStyle($s(2),16777215),r.moveTo(0,$s(20)),r.lineTo(0,$s(-20)),r.moveTo(0,0),r.lineTo(t,0),r.moveTo(t,$s(20)),r.lineTo(t,$s(-20)),a.info.t.text=Math.round(t/a.ruller.ref.width*200)/10+"cm",a.info.t.x=t/2-a.info.t.width/2):(i=-1,r.lineStyle($s(2),16777215),r.moveTo(t+a.clip.width,$s(20)),r.lineTo(t+a.clip.width,$s(-20)),r.moveTo(t+a.clip.width,0),r.lineTo(-a.magnet.width,0),r.moveTo(-a.magnet.width,$s(20)),r.lineTo(-a.magnet.width,$s(-20)),t=-a.magnet.width-(t+a.clip.width),a.info.t.text=Math.round(t/a.ruller.ref.width*200)/10+"cm",a.info.t.x=-t/2-a.magnet.width-a.info.t.width/2)}};function s(){if(1===i)NBPoint.distance(a.magnet,a.clip)<t&&h(!0);else if(-1===i)NBPoint.distance(a.magnet,a.clip)-(a.magnet.width+a.clip.width)<t&&h(!1);else{var e={x:a.magnet.x-a.magnet.width,y:0},n={x:a.magnet.x,y:0},r={x:a.clip.x+a.clip.width/2,y:0};h(!(NBPoint.distance(e,r)<NBPoint.distance(n,r))),o()}}function h(t){t?TweenMax.to(a.clip,.12,{x:-a.clip.width/2,rotation:.15-.3*Math.random()}):TweenMax.to(a.clip,.12,{x:-a.clip.width/2-a.magnet.width,rotation:.15-.3*Math.random()}),a.magnet.addChildWithSamePos(a.clip),a.onStepComplete()}var l=!0;this.magnet.addEventListener(NBDrag.event.START_DRAG,function(){instance.NBDownTip.hideTip(),c&&(0===d?instance.NBDownTipsError.showTip("步骤一已完成"):1===d&&(instance.NBStepsShow(!0,2),instance.NBDownTipsError.showTip("步骤二已完成")))}),this.magnet.addEventListener(NBDrag.event.DRAG_MOVE,function(){a.clip.parent===a&&s(),o()}),this.magnet.addEventListener(NBDrag.event.STOP_DRAG,function(){a.clip.parent===a?l&&instance.NBDownTip.showTip("左右移动磁铁吸引回形针"):l=!1,o()}),this.clip.addEventListener(NBDrag.event.DRAG_MOVE,o),this.clip.addEventListener(NBDrag.event.START_DRAG,function(t){a.addChildWithSamePos(a.clip),TweenMax.killTweensOf(a.clip),TweenMax.to(a.clip,.2,{rotation:0}),t&&(t.data.isPropagationStopped=!0)}),this.clip.MaxX=this.clip.x,this.clip.MinX=this.ruller.x-this.clip.width/1.195,this.magnet.MinX=this.magnet.x,this.magnet.MaxX=this.ruller.x+this.ruller.width+this.magnet.width/1.15,this.clip.addEventListener(NBDrag.event.STOP_DRAG,function(){s(),o()}),this.clip.addEventListener(TouchEvent.TAP,function(){l&&instance.NBDownTip.showTip("左右移动磁铁吸引回形针")});var d=parseInt(this.name.split("frame")[1]),c=!1,p=(0,n.default)(-this.magnet.width/2,this.magnet.height/2);this.magnet.addChild(p),this.magnet.addEventListener(NBDrag.event.START_DRAG,function(){e.magnet.removeChild(p)}),this.magnet.addEventListener(NBDrag.event.STOP_DRAG,function(){l?e.magnet.addChild(p):(c=!0,0===d?instance.NBStepsShow(!0,1):1===d&&instance.NBStepsShow(!0,2))})},clipsFunc:function(t){var e=this;this.tMc.visible=!1,this.clipAry=[];var i=this.topClip;i.index=0;for(var n=$s(300),a=$s(1200),r=$s(800),o=$s(100),s=0;s<30;s++){var h=PIXI.Sprite.fromFrame("Paper_clip.png");h.x=n+r*Math.random(),h.y=a+o*Math.random(),h.anchor.x=.5,h.anchor.y=.5,h.rotation=(20*(.5-Math.random())+90)/180*Math.PI,h.defaultX=h.x,h.defaultY=h.y,h.defaultRota=h.rotation,this.addChild(h),NBDrag.addDrag(h),h.addEventListener(NBDrag.event.START_DRAG,function(){TweenMax.killTweensOf(this),TweenMax.to(this,.25,{rotation:0})}),h.addEventListener(NBDrag.event.STOP_DRAG,function(){if(this.hitTest(i)){var n=i.index;if(0==n)this.x=i.x+$s(140),this.y=i.y+i.height/2-$s(10),this.texture=PIXI.Texture.fromFrame("Paper_one_chage.png"),this.isChangeTexture=!0,e.tMc.visible=!0;else{var r=e.r1.x+(e.r2.x-e.r1.x)*(n-1)/t+$s(25),o=e.r1.y+(e.r2.y-e.r1.y)*(n-1)/t+$s(70);TweenMax.to(this,.3,{x:r,y:o,onComplete:function(){if(i.index==t){for(var n=0;n<e.clipAry.length;n++){var r=new TimelineMax;r.append(TweenMax.to(e.clipAry[n],.5,{y:a+$s(80),alpha:.3,rotation:e.clipAry[n].defaultRota})),r.append(TweenMax.to(e.clipAry[n],.3,{alpha:0,onComplete:function(t){t.x=t.defaultX,t.y=t.defaultY,t.rotation=t.defaultRota,t.isChangeTexture&&(t.texture=PIXI.Texture.fromFrame("Paper_clip.png"))},onCompleteParams:[e.clipAry[n]]})),r.append(TweenMax.to(e.clipAry[n],.3,{alpha:1})),NBDrag.addDrag(e.clipAry[n])}e.clipAry.length=0,i.index=0,e.onStepComplete()}},onCompleteParams:[this]})}e.tMc.txt.text=n+1,i.index++,e.clipAry.push(this),NBDrag.removeDrag(this)}else TweenMax.to(this,.6,{x:this.defaultX,y:this.defaultY,rotation:this.defaultRota})}),this.addChild(this.desk)}},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.showExperimentImport(this.info.experimentImport,function(){instance.nbTable.show()}),this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1"),this.bindScriptToSprite(this.frame2,"frame2")},info:{experimentImport:"磁铁有磁力，如果把多个磁铁相互吸引着重叠在一起，它们的磁力会发生变化吗？",labName:" 磁力大小会变化吗",title0:"观察一个磁铁的的吸力",title1:"观察两个同级磁铁的的吸力",title2:"观察两个异级磁铁的的吸力",CONCLUSION:"两块磁铁同极靠在一起时磁力增强，两块磁铁异极靠在一起时磁力减弱。"},const:{},event:{}}),t.exports=nb.substance0020},554:function(t,e){nb.table=extendsClass(Object,{init:function(t,e){instance.nbTable=this;var i=document.createElement("div");i.id="nbTable",$(i).addClass("nb-table"),i.innerHTML=nb.table_button+t,$("body").append(i);var n=$("#nbTable");n.css("position","absolute"),n.css("left",$(window).width()-11),n.css("top",100),this.hide();var a=!1;$(".side-button").click(function(){(a=!a)?$(".nb-table").animate({left:$(window).width()-n.width()-11},500):$(".nb-table").animate({left:$(window).width()},500)}),$("input[type='radio']").length>0&&($("input").css({width:"auto","vertical-align":"middle",margin:"0 10px"}),$("td").css({width:"auto","padding-left":"8px","text-align":"center"}),$(".sp span").css({width:"80px",display:"block"})),$(window).resize(function(){a?$(".nb-table").css("left",$(window).width()-n.width()-11):$(".nb-table").css("left",$(window).width())}),$("input").focus(function(){$(this).css("border","2px solid #F69A3B")}).blur(function(){$(this).css("border","0")})},show:function(){$("#nbTable").show()},hide:function(){$("#nbTable").hide()},get$:function(){return $("#nbTable")}}),nb.table_button='<div id="search_button" class="side-button" style="width:27px; height:70px; position:absolute; left:-27px; background:url('+nb.config.URI_PREFIX+'./assets/button.png) no-repeat center;"></div>'}});