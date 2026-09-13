//createjs導入 クリア後まで
window.onload = function(){
  draw();
};
function draw(){
  var mouseX;
	var mouseY;
  let mute="ON";
  let mLock;
  let cLock=true;
  var view = 0;
  var upview = 0;
  var alpha = 0;
	const canvas = document.getElementById("labydom");
  	var canvas3;
	var cx = canvas.getContext("2d");
  var cx1;
  var cx2;
  var cx3;
  var stage = new createjs.Stage("labydom");//Stage
    canvas.width=800;
    canvas.height=600;
    stage.scaleX=1.25;
    stage.scaleY=1.25;
//アップデートする
createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.addEventListener("tick",function(){
  stage.update();
});
if (createjs.Touch.isSupported() == true) {
  createjs.Touch.enable(stage);
};
stage.enableMouseOver();//onmouseイベントに対応
  createjs.Ticker.on("tick",function(){
    updateHover(stage);
    });
  function updateHover(parent){
      for(let i = 0; i < parent.numChildren; i++){
          const child = parent.getChildAt(i);
          // ボタンなら更新
          if(typeof child.updateHover === "function"){
              child.updateHover();
          }
          // Containerならさらに中を見る
          if(child instanceof createjs.Container){
              updateHover(child);
          }
      }
  };
 class Music extends Howl {
    constructor (data, debugStart=0) {
      const params = {
        src: [data.src],
        volume:[data.volume],
        preload: false,
        // オーデイオスプライト設定
        sprite: {
          start: [debugStart, data.loopEnd-debugStart],
          loop: [data.loopStart, data.loopEnd - data.loopStart, true],
        },
      };
      super(params);
      this.load();
    }
    playMusic () {
      const startId = this.play("start");
      this.once("end", (id) => {
        if (id !== startId) return;
        console.log('bgm loop!');
        this.play("loop");
      });
    }
  }
//初期化
var Titleyard = new createjs.Container();//タイトル
var Loadmap = new createjs.Container();
var Wallmap = new createjs.Container();
var Itembar = new createjs.Container();
var Movemap = new createjs.Container();//movebt
var MessageWindow = new createjs.Container();
var Corsormap = new createjs.Container();
stage.addChild(Titleyard);
stage.addChild(Loadmap);
stage.addChild(Wallmap);
stage.addChild(Itembar);
stage.addChild(Movemap);
stage.addChild(MessageWindow);
stage.addChild(Corsormap);
var corsorX=createText(Corsormap,"　",630,2,12,{color:"#ffffff",align:"right"});
var corsorY=createText(Corsormap,"　",630,16,12,{color:"#ffffff",align:"right"});
var Itembartext=createText(Itembar,"　",15,420,22,{font:"Kazesawa",color:"#ffffff"});
var rectL = new createjs.Shape();
rectL.graphics
        .beginFill("rgba(126, 13, 75, 0.7)")
        .drawRect(0, 0, 25, 400);
var rectR = new createjs.Shape();
rectR.graphics
        .beginFill("rgba(126, 13, 75, 0.7)")
        .drawRect(525, 0, 25, 400);
var rectD = new createjs.Shape();
rectD.graphics
        .beginFill("rgba(126, 13, 75, 0.7)")
        .drawRect(0, 375, 550, 25);
var arrowL=createArrow(Movemap,11,-10,11,10,2,'rgba(55, 55, 55, 0.5)','rgb(255,255,255)')
  arrowL.x=9;
  arrowL.y=200;
var arrowR=createArrow(Movemap,-11,-10,-11,10,2,'rgba(55, 55, 55, 0.5)','rgb(255,255,255)')
  arrowR.x=545;
  arrowR.y=200;
var arrowD=createArrow(Movemap,-10,-12,10,-12,2,'rgba(55, 55, 55, 0.5)','rgb(255,255,255)')
  arrowD.x=275;
  arrowD.y=392;
arrowL.alpha=0;
arrowR.alpha=0;
arrowD.alpha=0;
var handC = new createjs.Shape();
  handC.graphics.setStrokeStyle(2);
  handC.graphics.beginStroke("rgba(255, 254, 196, 0.9)");
  handC.graphics.drawRoundRect(0, 0, 40, 40, 2, 2);
  handC.visible=false;
  var itemview=0;
  var Panel = new createjs.Shape();
      Panel.graphics.beginFill("#e76a9e80").drawRect(80, 10,390, 390);
  var img;
  var imgF;
  var closedEye;
  var imgF1;
  var imgF2;
  var poco;
  var pocoF;
  var Table;
  var paper;
  var Book;
  var clip;
  var Note;
  var statue;
  var cake;
  var imgB;
  var Dream;
  var red;
  var blue;
  var purple;
  var akane;
  var green;
  var navy;
  var mirror;
  var hexs={};
  var btngrn;
  var rank;
  var imgFstate = 0;
  var imgF2state =0;
  var bookstate = 0;
  var boxstate = 0;
  var nishastate = 0;
  var paintstate = 0;
  var imgRstate = 0;
  var icestate = 0;
  var imgBstate = 0;
  var pocostate = 0;
  var imgLstate = 0;
  var stingstate = 0;
  var clipstate = 0;
  var tablestate = 0;
  var notestate = 0;
  var refristate = 0;
  var candystate = 0;
  var cakestate = 0;
  var statuestate = 0;
  var redstate =0;
  var bluestate= 0;
  var purplestate = 0;
  var akanestate =0;
  var navystate =0;
  var greenstate =0;
  var mirrorstate =0;
  var labystate = 0;
  var msgstate =0;
  var loadstate =0;
  var punchstate =0;
  var numA = 0;
  var numB = 0;
  var numC = 0;
  var numD = 0;
  var startT = Date.now();
  var clearT = 0;
  var hour = 0;
  var min = 0;
  var sec = 0;
  var datet =0;
  var caketime =0;
  var startTime =0;
  const cakelost =30000;
  var key13=0;//enter
  var key27=0;//esc
  var Hand = "0";
  var pics_src = ["imgF237.png","imgF237.png","imgRp.png","imgB237.png","imgL237.png"];
  var book_src = new Array("book.png","book2.png","book3.png","key.png")
  var ice_src = new Array("icefire.png","icefirepush.png","icefireopen.png","icefin.png","icefireice.png")
  var table_src = new Array("imgL237-1.png","imgL237-2.png","imgL237-3.png","bibi.png")
  var refri_src =new Array("refri1.png","refri2.png","refri3.png","refri4.png");
  var cussion_src =new Array("cussion.png","cussionup.png","cussioncl.png","cussionopm.png","cussionop.png");
  var note_src = new Array("note_li.png","note.png","notei.png","notem1.png","noteP.png","notem2.png");
  var dream_src = new Array("dmao.png","dlaby.png","dbelo.png");
  var ev_src = new Array("nisha1.png","nisha2.png","nisha3.png","nisha4.png","nishadow.png","nishadow2.png","elimg.png","elimg2.png","elimg3.png","elimg4.png")
  var rank_src = new Array("rankss.png","ranks.png","ranka.png","rankb.png","rankc.png");
  var Mirrorkey = new Array(0,0,0,0,0,0,0);
  var Bookey = new Array(0,0,0,0,0,0);
  var bookeyList=[];
  var bookeytextList=[];
  var Treasuremap=[];
  var Boxkey = new Array(0,0,0,0,0,0,0,0,0,0);
 const BoxAns = new Array(2,0,2,0,0,2,3,2,1,1)
  var icebtn = []
 const iceAns = new Array(1,1,1,2,2,2,1,2,2,1,)
  var PocoKey = new Array(16);
  for (var i = 0;  i < 16;  i++  ) {PocoKey[i]=1}
  const PocoAns = new Array(0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1)
  var pocoQ=new createjs.Container();
  //初期化
  var i =0
    pocoQ.removeAllChildren();
    var pocoQmap=[];
      var P = new createjs.Shape();
          P.graphics.beginFill("rgb(31, 7, 19)").drawRect(200,125,150,200);
          pocoQ.addChild(P);
      var P = new createjs.Shape();
          P.graphics.beginFill('rgba(200, 200, 200, 1)').drawRect(250,285,50,30);
          pocoQ.addChild(P);
    for (var q = 0; q<4; ++q){
      for(var p = 0; p<4; ++p){
        var P = new createjs.Shape();
          P.graphics.beginFill("rgb(255, 50, 152)").drawRect(202+37*q,127+37*p,35,35);
          pocoQ.addChild(P);
          pocoQmap.push(P);
          P.visible=false;
          i += 1
    }}
      var P = new createjs.Shape();
          P.graphics.beginFill( 'rgba(100, 100, 100, 1)').drawRect(250,285,50,30);
          pocoQ.addChild(P);
          P.visible=false;
          pocoQmap.push(P);
  var Itemlist=[
  {name:"mirror",chr:"鏡 [イビルトレーサー-オービスドッペルゲンガーミラー]",src:"mirroricon.png"},
  {name:"clip",chr:"クリップ",src:"clip2.png"},
  {name:"imgF1",chr:"丸い鍵",src:"keyicon1.png"},
  {name:"sting",chr:"棒",src:"sting.png"},
  {name:"candy",chr:"アメ",src:"candy.png"},
  {name:"imgF2",chr:"小さな鍵",src:"keyicon2.png"},
  {name:"cake",chr:"ケーキ",src:"cake.png"},
  {name:"statue",chr:"氷像",src:"icestatue.png"},
  {name:"red",chr:"朱色の欠片",src:"orbred2.png"},
  {name:"blue",chr:"青色の欠片",src:"orbblue2.png"},
  {name:"purple",chr:"紫色の欠片",src:"orbpurple2.png"},
  {name:"akane",chr:"茜色の欠片",src:"orbakane2.png"},
  {name:"navy",chr:"紺色の欠片",src:"orbnavy2.png"},
  {name:"green",chr:"緑色の欠片",src:"orbgreen2.png"},
  //Itemlist.push({name:"cake2",chr:"溶けてしまったケーキ",src:"cake2.png",x:553,y:315})
  ]
  var ItemlistA=[];//アイテム
  var ItemlistB=[];//背景のピンク
  var ItemlistC=[];//使用後の黒塗り
  var se1 = new Howl({
    src:"button84.mp3",
    volume: 0.1,
    });
  var se2 = new Howl({
    src:"decision3.mp3",
    volume: 0.25,
    });
  var se3 = new Howl({
    src:"zipper1.mp3",
    volume: 0.2,
    });
  var se4 = new Howl({
    src:"paper-take2.mp3",
    volume: 0.3,
    });
  var se5 = new Howl({
    src:"microwave-open1.mp3",
    volume: 0.4,
    });
  var se6 = new Howl({
    src:"microwave-tin1.mp3",
    volume: 0.4,
    });
  var se7 = new Howl({
    src:"tool-box1.mp3",
    volume: 0.4,
    });
  var se8 = new Howl({
    src:"brick1.mp3",
    volume: 0.1,
    });
  var se9 = new Howl({
    src:"Sensu15.mp3",
    volume: 0.3,
    });
  var se10 = new Howl({
    src:"switch1.mp3",
    volume: 0.4,
    });
  var se11 = new Howl({
    src:"punch-real2.mp3",
    volume: 0.08,
    });
  var se12 = new Howl({
    src:"iainuki1.mp3",
    volume: 0.05,
    });
  var se13 = new Howl({
    src:"hikidashi1.mp3",
    volume: 0.2,
    });
  var se14 = new Howl({
    src:"pico1.mp3",
    volume: 0.1,
    });
  var se15 = new Howl({
    src:"cheers.m4a",
    volume: 0.1,
    });
  var se16 = new Howl({
    src:"saint_magic.mp3",
    volume: 0.1,
    });
  var se17 = new Howl({
    src:"004_se_kira4.mp3",
    volume: 0.1,
    });
  var se18 = new Howl({
    src:"scene2.mp3",
    volume: 0.2,
    });
  const bgm1data ={
    src: "labydom.mp3",
    loopStart: 42950,
    loopEnd: 85780,
    volume: 0.2,
  };
  const bgm2data ={
    src: "VLOG3_kira.mp3",
    loop:true,
    volume: 0.02,
  };
var Bgm=new Music(bgm1data);
var Bgm2=new Howl(bgm2data);
var queue = new createjs.LoadQueue(),
// manifestを定義
manifest = [];
manifest.push(
{src:"imgF237.png"},{src:"imgF237.png"},{src:"imgRp.png"},{src:"imgB237.png"},{src:"imgL237.png"},
{src:"treasure1.png"},{src:"treasure2.png"},{src:"poco2.png"},{src:"imgF237clear.png"},{src:"imgF237open.png"},{src:"imgF237open_li.png"},{src:"imgRclear.png"},{src:"imgRmove.png"},{src:"imgRgaia.png"},{src:"paint.png"},{src:"imgBdoor.png"},{src:"imgBdoor2.png"},{src:"imgBdoor3.png"},
{src:"book.png"},{src:"book2.png"},{src:"book3.png"},
{src:"icefire.png"},{src:"icefirepush.png"},{src:"icefireopen.png"},{src:"icefin.png"},{src:"icefireice.png"},
{src:"imgL237-1.png"},{src:"imgL237-2.png"},{src:"imgL237-3.png"},{src:"bibi.png"},
{src:"refri1.png"},{src:"refri2.png"},{src:"refri3.png"},{src:"refri4.png"},
{src:"cussionup.png"},{src:"cussioncl.png"},{src:"cussionopm.png"},{src:"cussionop.png"},
{src:"note_li.png"},{src:"note.png"},{src:"notei.png"},{src:"notem1.png"},{src:"noteP.png"},{src:"notem2.png"},
{src:"dmao.png"},{src:"dlaby.png"},{src:"dbelo.png"},
{src:"Keyhole.png"},{src:"nisha1.png"},{src:"nisha2.png"},{src:"nisha3.png"},{src:"nisha4.png"},{src:"nishadow.png"},{src:"nishadow2.png"},{src:"elimg.png"},{src:"elimg2.png"},{src:"elimg3.png"},{src:"elimg4.png"},
{src:"rankss.png"},{src:"ranks.png"},{src:"ranka.png"},{src:"rankb.png"},{src:"rankc.png"},
{src:"Esc_enter.png"},
{src:"poco.png"},{src:"zmyu.png"},{src:"dreamup.png"},{src:"sting2.png"},{src:"candy.png"},{src:"cake.png"},{src:"cake2.png"},{src:"icestatue.png"},{src:"sting.png"},{src:"sting2.png"},
{src:"pocoL.png"},{src:"tableinner.png"},{src:"tableinner1.png"},{src:"tableinner3.png"},{src:"nisha.png"},{src:"pocoL.png"},{src:"noteLa.png"},{src:"noteLa_transform.png"},
{src:"clip2.png"},{src:"clip1.png"},{src:"icehint.png"},{src:"papera.png"},{src:"paperb.png"},{src:"imgRlight.png"},{src:"ukky2.png"},{src:"key.png"},{src:"key1.png"},{src:"keyicon1.png"},{src:"keyicon2.png"},
{src:"orbred.png"},{src:"orbred2.png"},{src:"orbblue.png"},{src:"orbblue2.png"},{src:"orbpurple.png"},{src:"orbpurple2.png"},{src:"orbakane2.png"},{src:"orbnavy2.png"},{src:"orbgreen.png"},{src:"orbgreen2.png"},{src:"mirroricon.png"},{src:"orbmirror.png"},{src:"orbmirror2.png"},
{src:"woodup.png"},{src:"btn1.png"},{src:"btn2.png"},
);
queue.setMaxConnections(6);
// 読み込みの進行状況が変化した
queue.addEventListener("progress", handleProgress);
// 1つのファイルを読み込み終わったら
queue.addEventListener(
  "fileload",
  handleFileLoadComplete
);
// 全てのファイルを読み込み終わったら
queue.addEventListener("complete", handleComplete);
// 読み込み開始
queue.loadManifest(manifest);
function handleProgress(event){
  // 読み込み率を0.0~1.0で取得
  var progress = event.progress;
  Loadmap.removeAllChildren();
  var Rate=Math.floor(progress*100);
  var load = createText(Loadmap,"Now loading..."+Rate+"%",5,445,24,{font:'Times New Roman',color:"white"})
  var loadGrp = new createjs.Shape();
    loadGrp.graphics.beginFill("#d98200")
    loadGrp.graphics.drawRect(0, 475,6.4*Rate, 5);
  load.x=5;
  load.y=445;
  Loadmap.addChild(load);
  Loadmap.addChild(loadGrp);
  if(Rate==100){
    load.text="Load completed v2.0"
  }
}
function handleFileLoadComplete(event) {
  // 読み込んだファイル
  var result = event.result;
}
function handleComplete() {
  console.log("LOAD COMPLETE");
  Wallmap.alpha=0;
  view = 1;
  printView();
  createText(Loadmap,"画面をクリックして\nゲームをはじめる",435,350,22,{font:"游明朝",color:"#fff"});
  loadstate=10;
var circle1 = new createjs.Shape();
circle1.graphics.beginFill("#2c4a3f")
.drawCircle(0, 0, 60);
circle1.x=500;
circle1.y=120;
Titleyard.addChild(circle1);
var circle2 = new createjs.Shape()
circle2.graphics.beginFill("#2c4a3f")
.drawCircle(0, 0, 60)
circle2.x=500;
circle2.y=260;
Titleyard.addChild(circle2);
var circle3 = new createjs.Shape();
circle3.graphics.beginFill("#4cb58b")
.drawCircle(0, 0, 60)
circle3.x=500;
circle3.y=120;
circle3.alpha=1;
Titleyard.addChild(circle3);
var circle4 = new createjs.Shape()
circle4.graphics.beginFill("#4cb58b")
.drawCircle(0, 0, 60)
circle4.x=500;
circle4.y=260;
circle4.alpha=1;
Titleyard.addChild(circle4);
if(mute=="OFF"){circle3.alpha=0;}else{circle4.alpha=0;};
var sound1 = new createjs.Bitmap("soL_sound1.png");
sound1.x=450;
sound1.y=70;
sound1.scale=1;
Titleyard.addChild(sound1);
var sound2 = new createjs.Bitmap("soL_sound2.png");
sound2.x=450;
sound2.y=210;
sound2.scale=1;
Titleyard.addChild(sound2);
circle1.addEventListener("mouseover", {card:3,handleEvent:Soundcircle});
circle1.addEventListener("mouseout", {card:4,handleEvent:Soundcircle});
circle2.addEventListener("mouseover", {card:5,handleEvent:Soundcircle});
circle2.addEventListener("mouseout", {card:6,handleEvent:Soundcircle});
circle1.addEventListener("click", {card:1,handleEvent:Soundcircle});
circle2.addEventListener("click", {card:2,handleEvent:Soundcircle});
function Soundcircle(){
  switch(this.card){
    case 3:
      if(mute=="OFF"){
    circle3.alpha=0.6;
      }
      break;
    case 4:
      if(mute=="OFF"){
    circle3.alpha=0;
      }
    break;
    case 5:
      if(mute=="ON"){
    circle4.alpha=0.6;
      }
      break;
    case 6:
      if(mute=="ON"){
    circle4.alpha=0;
      }
    break;
    case 1:
      //soundをonにする
    if(mute=="OFF"){
    Howler.volume(1.0);
    mute="ON";
    circle3.alpha=1;
    circle4.alpha=0;
    se2.play();
    }
    break;
    case 2:
    //soundをoffにする
    if(mute=="ON"){
    Howler.volume(0);
    mute="OFF";
    circle3.alpha=0;
    circle4.alpha=1;
    }
    break;
  } 
};
};
//title＆画面レイアウト
TitleGrh();
function TitleGrh(){
var shape = new createjs.Shape();
shape.graphics.beginFill("rgb(115, 59, 98)");
shape.graphics.drawRect(0, 0, 800, 600); // 長方形を描画
Titleyard.addChild(shape); // 表示リストに追加
if (localStorage.getItem("gameCleared") === "true") {
  var BG = new createjs.Bitmap("labydom_title2.png");
  BG.alpha=0.95;
  BG.scale=0.75;
  BG.x=2;
  Titleyard.addChild(BG);
}else{
  var BG = new createjs.Bitmap("nishadow.png");
  BG.alpha=0.1;
  BG.scale=1;
  BG.x=270;
  Titleyard.addChild(BG);
  var BG = new createjs.Bitmap("labydom_title.png");
  BG.alpha=0.95;
  BG.scale=0.75;
  BG.x=2;
  Titleyard.addChild(BG);
}
BG.alpha=0.95;
BG.scale=0.75;
BG.x=2;
Titleyard.addChild(BG);
var obj = new createjs.Shape();
obj.graphics.beginFill("rgba(255, 227, 65, 0.7)");
obj.graphics.moveTo(0, 0);
obj.graphics.lineTo(0, 60);
obj.graphics.lineTo(600, 0);
Titleyard.addChild(obj);
var obj = new createjs.Shape();
obj.graphics.beginFill("rgba(255, 227, 65, 0.7)");
obj.graphics.moveTo(0, 0);
obj.graphics.lineTo(0, 90);
obj.graphics.lineTo(240, 0);
Titleyard.addChild(obj);
var Rect = new createjs.Shape();
Rect.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(0, 0,640, 480);
Titleyard.addChild(Rect);
Rect.addEventListener("click",{handleEvent:gamestart});
createText(Titleyard,"Labydom",5,5,36,{font:"游明朝",color:"#fff"});
createText(Titleyard,"幻想の部屋で過ごしていたある時、声が聞こえた。",640,435,16,{font:"游明朝",color:"#fff",align:"end"});
createText(Titleyard,"外の世界で待つ「彼女」に会いにいこう。",640,455,16,{font:"游明朝",color:"#fff",align:"end"});
};

//キー入力受付
window.addEventListener("keyup", keyupHandler, false);
  function keyupHandler(e) {
  if(e.keyCode==13){
    key13=0;//enter
  }
  if(e.keyCode==27){
    key27=0;//esc
  }
  }
  window.addEventListener("keydown", keyDownHandler, false);
	function keyDownHandler(e) {
    if(e.keyCode==13 && key13==0){
      key13=1;//enter
      if(view==5 || view==6){
        msgHandler2();
      }
      }
    if(e.keyCode==27 && key27==0){
      key27=1;//esc
      if(view==6 && !mLock){
       se2.play();
       msgstate=Text_pre.length-1;
       msgHandler2();
      }else if(view==5 && msgstate> 4 && msgstate<36){
       se2.play();
       msgstate=36;
       msgHandler2();
      }
    }
    };
//移動
canvas.addEventListener("click", clickHandler, false);
function clickHandler(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX =  Math.floor((e.clientX - rect.left)/1.25);
    mouseY =  Math.floor((e.clientY - rect.top)/1.25);
        console.log('clicked!',mouseX,mouseY,cLock)
    if(!cLock){return false};
    switch(view){
      case 1:
  if(upview ==0){
          if(mouseX > 30 && mouseX < 80){
              if(mouseY > 215 && mouseY < 375){//木F
        Table = drawBitmap(Wallmap,queue.getResult("woodup.png"),0,0,550,400);
        Upviewbt(1);
        Itembartext.text="「ELESIS=050979」\nってカベにラクガキがあるよ！";
        }}
    if(nishastate ==0){
      if(mouseX > 173 && mouseX < 347){
        if(mouseY > 270 && mouseY < 375){
          se14.play();
            Itembartext.text="ふっかふかで～\nふっわふわ～！"
            if(candystate ==1 && Hand=="candy"){
              candystate =2//飴消費
              lostItem("candy");
              Wallmap.removeChild(pocoF);
                imgmove(stage,queue.getResult("nisha.png"));
              Itembartext.text="どこに行くの？"
            }
        }}
      if(mouseX > 140 && mouseX < 250){
        if(mouseY > 110 && mouseY < 200){
              Upviewbt(2);
              if(labystate ==1){labystate =2}else{labystate =0}
              Table = drawBitmap(Wallmap,queue.getResult("poco2.png"),0,0,550,400);
              poco = drawBitmap(Wallmap,queue.getResult("poco.png"),167,70,200,260);
              poco.rotation=0;
              if(redstate==0){
              red = drawBitmap(Wallmap,queue.getResult("orbred.png"),5,-10,550,400);
              }
              Itembartext.text="ポコ";
      }}
    }else if(nishastate ==1){
      if(mouseX > 300 && mouseX < 474){
        if(mouseY > 270 && mouseY < 375){
            se14.play();
            Itembartext.text="ふっかふかで～\nふっわふわ～！"
            if(candystate ==1 && Hand=="candy"){
              candystate =2//飴消費
              lostItem("candy");
              Wallmap.removeChild(pocoF);
                imgmove(stage,queue.getResult("nisha.png"));
              Itembartext.text="どこに行くの？"
            }
        }}
      if(mouseX > 420 && mouseX < 520){
        if(mouseY > 110 && mouseY < 200){//本
          if(bookstate ==0){
              Wallmap.addChild(Panel);
          Table = drawBitmap(Wallmap,queue.getResult(book_src[1]),134,50,280,250);
          Itembartext.text="開かない本"
          bookbtn(-1);
          }else if(bookstate ==1){
          Wallmap.addChild(Panel);
          Table = drawBitmap(Wallmap,queue.getResult(book_src[1]),134,50,280,250);
          Book = drawBitmap(Wallmap,queue.getResult(book_src[0]),144,50,280,230);
          Itembartext.text="本の形をした小物入れだったんだね！"
          };
          Upviewbt(4);
          }};
      if(mouseX > 160 && mouseX < 280){
        if(mouseY > 80 && mouseY < 180){//ラスト
        if(labystate ==7){
          //gameover
          //getItem("cake");
              se1.play();
              view =5;//タイマーストップ
              Bgm2.play();
              Movemap.visible=false;
              Itembartext.visible=false;
              var P = new createjs.Shape();
                  P.graphics.beginFill("rgb(255,255,255)").drawRect(0, 0,640, 480);
                  P.alpha=0;
                  stage.addChild(P);
                  createjs.Tween.get(P)
                  .to({alpha:1},1000,createjs.Ease.sineInOut)
                  .call(()=>{
                    Wallmap.removeAllChildren();
                    Loadmap.removeAllChildren();
                    MessageWindow.visible=false;
                    Itembar.visible=false;
                    img = drawBitmap(Loadmap,queue.getResult(ev_src[6]),0,0,640,480);
                    createjs.Tween.get(P)
                    .wait(1000).to({alpha:0},500,createjs.Ease.sineInOut)
                    .call(()=>{
                      msgstate=0;
                      mLock=false;
                      stage.removeChild(P);
                      var fade = new createjs.Shape();
                      fade.graphics.beginFill("black").drawRect(0, 0,800,600);
                      fade.alpha=0.05;
                      Loadmap.addChild(fade)
                      fade.addEventListener("click", msgHandler2, false);
                      })
                  })
              return false;
        };
        Upviewbt(6);
        img = new createjs.Bitmap(queue.getResult(pics_src[view]));
        img.sourceRect={x:60,y:0,width:400,height:300}
            img.scaleX=550/400
            img.scaleY=400/300
            Wallmap.addChild(img);
        if(mirrorstate ==2){
        Itembartext.text="きっとこれが最後だよ‥";
        mirror = drawBitmap(Wallmap,queue.getResult("orbmirror2.png"),160,40,300,300);
        hexs={};
          hexs.navy=hexmirror(145,150,'rgba(0,51,204,1)');
          hexs.blue=hexmirror(194,125,'rgba(75,100,255,1)');
          hexs.red=hexmirror(96,66,'rgba(255,0,0,1)');
          hexs.green=hexmirror(194,66,'rgba(0,138,83,1)');
          hexs.akane=hexmirror(145,40,'rgba(254,131,50,1)');
          hexs.purple=hexmirror(96,125,'rgba(153,51,255,1)');
          hexs.navy.visible=false;
          hexs.blue.visible=false;
          hexs.red.visible=false;
          hexs.green.visible=false;
          hexs.akane.visible=false;
          hexs.purple.visible=false;
        if(navystate ==2 && Mirrorkey[1] > 0){
        hexs.navy.visible=true;
        }

        if(bluestate ==5 && Mirrorkey[2] > 0){
        hexs.blue.visible=true;
        }

        if(redstate ==5 && Mirrorkey[3] > 0){
        hexs.red.visible=true;
        }

        if(greenstate ==2 && Mirrorkey[4] > 0){
        hexs.green.visible=true;
        }

        if(akanestate ==2 && Mirrorkey[5] > 0){
        hexs.akane.visible=true;
        }

        if(purplestate ==5 && Mirrorkey[6] > 0){
        hexs.purple.visible=true;
        }
      }
  }}
  }
}else if(upview ==2){
  if(mouseX >167 && mouseX < 367){
  if(mouseY > 70 && mouseY < 330){
    Upviewbt(3);
    poco.rotation=-30;
    poco.x-=70;
    if(redstate ==0){
    Wallmap.removeChild(red);
    red = drawBitmap(Wallmap,queue.getResult("orbred2.png"),290,240,80,70);
    }
  }}
}else if(upview ==3){
    if(mouseX >110 && mouseX < 400){
			if(mouseY > 0 && mouseY < 210){
        Upviewbt(2);
        poco.rotation=0;
        poco.x+=70;
        se9.play();
        if(redstate==0){
        Wallmap.removeChild(red);
        red = drawBitmap(Wallmap,queue.getResult("orbred.png"),5,-10,550,400);
        }
    }}
    if(mouseX >290 && mouseX < 370){
      if(mouseY > 240 && mouseY < 310){
        if(redstate ==0){
        Wallmap.removeChild(red);
        redstate =1;
        getItem("red");
      }
    }}
}else if(upview ==4){
  if(bookstate ==0){
    bookbtn();
    }else if(bookstate ==1){
        if(mouseX >145 && mouseX < 400){
          if(mouseY > 70 && mouseY < 280){
    Wallmap.removeChild(Book);
    Wallmap.removeChild(Table);
    se9.play();
    Book = drawBitmap(Wallmap,queue.getResult(book_src[2]),134,50,280,250)
    if(imgF2state ==0){
    imgF2 = drawBitmap(Wallmap,queue.getResult(book_src[3]),134,50,280,250)
    }
    Upviewbt(5);
    }
    }}
}else if(upview ==5){
if(imgF2state ==0){
  if(mouseX >210 && mouseX < 290){
			if(mouseY > 130 && mouseY < 230){//鍵2取得
imgF2state =1
Wallmap.removeChild(imgF2);
getItem("imgF2");
}}}
}else if(upview ==6){
if(labystate ==6 && mirrorstate ==1){
  Itembartext.text="きっとこれが最後だよ‥";
  lostItem("mirror")
  mirrorstate = 2;//アイテム消費
  mirror = drawBitmap(Wallmap,queue.getResult("orbmirror2.png"),160,40,300,300);
  hexs={};
    hexs.navy=hexmirror(145,150,'rgba(0,51,204,1)');
    hexs.blue=hexmirror(194,125,'rgba(75,100,255,1)');
    hexs.red=hexmirror(96,66,'rgba(255,0,0,1)');
    hexs.green=hexmirror(194,66,'rgba(0,138,83,1)');
    hexs.akane=hexmirror(145,40,'rgba(254,131,50,1)');
    hexs.purple=hexmirror(96,125,'rgba(153,51,255,1)');
    hexs.navy.visible=false;
    hexs.blue.visible=false;
    hexs.red.visible=false;
    hexs.green.visible=false;
    hexs.akane.visible=false;
    hexs.purple.visible=false;
}
if(mouseX >270 && mouseX < 340){
  if(mouseY > 240 && mouseY < 290){//紺鏡
if(Hand =="navy" && navystate ==1){
  se8.play();
  navystate = 2;//アイテム消費
  lostItem("navy")
  hexs.navy.visible=true;
  Mirrorkey[0] +=1
  Mirrorkey[1] = Mirrorkey[0]
}else if(navystate ==2 && Mirrorkey[1] > 0){
  navystate =1
  Mirrorkey[0] -=1
  Mirrorkey[1] = 0
  getItem("navy");
  hexs.navy.visible=false;
}

}}
  if(mouseX >320 && mouseX < 370){
			if(mouseY > 215 && mouseY < 265){//青鏡
if(Hand =="blue" && bluestate ==1){
    se8.play();
    bluestate = 5;//アイテム消費
    lostItem("blue")
    hexs.blue.visible=true;
    Mirrorkey[0] +=1
    Mirrorkey[2] = Mirrorkey[0]
}else if(bluestate ==5 && Mirrorkey[2] > 0){
    bluestate =1
    Mirrorkey[0] -=1
    Mirrorkey[2] = 0
    getItem("blue");
    hexs.blue.visible=false;
}

}}
  if(mouseX >215 && mouseX < 270){
			if(mouseY > 160 && mouseY < 210){//赤鏡
if(Hand =="red" && redstate ==1){
    se8.play();
    redstate = 5;//アイテム消費
    lostItem("red")
    hexs.red.visible=true;
    Mirrorkey[0] +=1
    Mirrorkey[3] = Mirrorkey[0]
}else if(redstate ==5 && Mirrorkey[3] > 0){
    redstate =1
    Mirrorkey[0] -=1
    Mirrorkey[3] = 0
    getItem("red");
    hexs.red.visible=false;
}

}}
  if(mouseX >320 && mouseX < 370){
			if(mouseY > 160 && mouseY < 210){//緑鏡
if(Hand =="green" && greenstate ==1){
    se8.play();
    greenstate = 2;//アイテム消費
    lostItem("green")
    hexs.green.visible=true;
    Mirrorkey[0] +=1
    Mirrorkey[4] = Mirrorkey[0]
}else if(greenstate ==2 && Mirrorkey[4] > 0){
    greenstate =1
    Mirrorkey[0] -=1
    Mirrorkey[4] = 0
    getItem("green");
    hexs.green.visible=false;
}

}}
  if(mouseX >270 && mouseX < 320){
			if(mouseY > 130 && mouseY < 180){//茜鏡
if(Hand =="akane" && akanestate ==1){
    se8.play();
    akanestate = 2;//アイテム消費
    lostItem("akane")
    hexs.akane.visible=true;
    Mirrorkey[0] +=1
    Mirrorkey[5] = Mirrorkey[0]
}else if(akanestate ==2 && Mirrorkey[5] > 0){
    akanestate =1
    Mirrorkey[0] -=1
    Mirrorkey[5] = 0
    getItem("akane");
    hexs.akane.visible=false;
}

}}
  if(mouseX >215 && mouseX < 270){
			if(mouseY > 215 && mouseY < 265){//紫鏡
if(Hand =="purple" && purplestate ==1){
    se8.play();
    purplestate = 5;//アイテム消費
    lostItem("purple")
    hexs.purple.visible=true;
    Mirrorkey[0] +=1
    Mirrorkey[6] = Mirrorkey[0]
}else if(purplestate ==5 && Mirrorkey[6] > 0){
    purplestate =1
    Mirrorkey[0] -=1
    Mirrorkey[6] = 0
    getItem("purple");
    hexs.purple.visible=false;
}

}}
if(labystate ==6 && Mirrorkey[1] == 2 && Mirrorkey[2] == 1 && Mirrorkey[3] == 3 && Mirrorkey[4] == 4 && Mirrorkey[5] == 5 && Mirrorkey[6] == 6){
labystate =7;
se16.play();
pics_src[1] = "imgF237clear.png"
Upviewbt(0);
}
}
    break;
      case 2:
    //右
if(upview ==0){
      if(mouseX > 300 && mouseX < 460){
        if(mouseY > 260 && mouseY < 360){
        Upviewbt(1);
        Itembartext.text="加熱器"
        if(icestate ==2 && akanestate ==0){
          Ice = drawBitmap(Wallmap,queue.getResult(ice_src[icestate]),0,0,550,400);
          akane = drawBitmap(Wallmap,queue.getResult("orbakane2.png"),230,87,60,52);
        }else if(icestate ==3 && statuestate ==2){
          Ice = drawBitmap(Wallmap,queue.getResult(ice_src[4]),0,0,550,400);
        }else if(icestate >=4){
          Ice = drawBitmap(Wallmap,queue.getResult(ice_src[3]),0,0,550,400);
            if(mirrorstate ==0){
          mirror = drawBitmap(Wallmap,queue.getResult("orbmirror.png"),100,40,300,300);
        }
        }else{
          Ice = drawBitmap(Wallmap,queue.getResult(ice_src[icestate]),0,0,550,400);
          }
      }}
      if(mouseX > 185 && mouseX < 370){
        if(mouseY > 60 && mouseY < 215){
          Upviewbt(2);
          Itembartext.text="小窓"
          imgR = drawBitmap(Wallmap,queue.getResult("imgRlight.png"),0,0,550,400);
        }}
      if(mouseX > 28 && mouseX < 200){
			if(mouseY > 215 && mouseY < 360){
          if(nishastate ==0 && paintstate ==0){
            Upviewbt(6);
            Itembartext.text="ベタベタしたエキスだー！"
            Table = drawBitmap(Wallmap,queue.getResult("imgRgaia.png"),0,0,550,400);
            Table = drawBitmap(Wallmap,queue.getResult("paint.png"),0,0,550,400);
          }else if(nishastate ==0 && paintstate ==1){
            Upviewbt(6);
            Table = drawBitmap(Wallmap,queue.getResult("imgRgaia.png"),0,0,550,400);
            Itembartext.text="GAIA=64‥？\n文字がかすれて読めないよー！"
          }}}
  }else if(upview ==1){
if (icestate ==0){
Icebtn();
}else if(icestate ==2){
if(akanestate ==0){
  if(mouseX > 224 && mouseX < 299){
			if(mouseY > 80 && mouseY < 134){//akaneを拾う
  akanestate =1;
  Wallmap.removeChild(akane);
  getItem("akane");
}}
}else if(akanestate ==1 && statuestate ==1){
  if(mouseX > 224 && mouseX < 299){
			if(mouseY > 80 && mouseY < 134){//加熱器セット
if(Hand =="statue"){
  statuestate =2;//statue消費
  lostItem("statue")
  Ice = drawBitmap(Wallmap,queue.getResult(ice_src[4]),0,0,550,400);
}}}
}else if(statuestate ==2){
se7.play();
Ice = drawBitmap(Wallmap,queue.getResult(ice_src[1]),0,0,550,400);
cLock=false;
Itembartext.text="何が出るかな？"
var timer2 = null;
    function iceclear() {
        icestate =4
        se6.play();
        cLock=true;
        Itembartext.text="かねつ　しゅうりょう！"
        Ice = drawBitmap(Wallmap,queue.getResult(ice_src[3]),0,0,550,400);
        mirror = drawBitmap(Wallmap,queue.getResult("orbmirror.png"),100,40,300,300);}
    timer2 = setTimeout(iceclear,2800);
  }
}else if(icestate ==4){//mirror取得
  if(mirrorstate ==0){
    mirrorstate =1
    Wallmap.removeChild(mirror);
    getItem("mirror");
  }
}
}else if(upview ==2){//窓に近づいてる
      if(mouseX > 200 && mouseX < 300){
        if(mouseY > 180 && mouseY < 280){
            if((imgRstate==0 && Hand =="imgF1")|| imgRstate==1){
              se5.play();
              if(imgRstate==0 && Hand =="imgF1"){
              lostItem("imgF1")
              imgFstate = 2;//アイテム消費
              }
              imgR = drawBitmap(Wallmap,queue.getResult("ukky2.png"),0,0,550,400);
              imgRstate = 1;
              if (bluestate ==0){
              blue = drawBitmap(Wallmap,queue.getResult("orbblue.png"),95,155,30,65);  
              }
              Itembartext.text="ウッキー"
              Upviewbt(3);
              if(labystate ==3){labystate =4}else{labystate =0}
            }
        }}
}else if(upview ==3){//窓を開けている状態
    if (bluestate ==0){
      if(mouseX > 95 && mouseX < 125){
			if(mouseY > 155 && mouseY < 220){
        bluestate =1;
        Wallmap.removeChild(blue);
        getItem("blue");
      }}
    }
 if(mouseX > 280 && mouseX < 380){
			if(mouseY > 260 && mouseY < 320){//box
          Itembartext.text="これって宝箱？　だよね？"
          if(boxstate ==0){
            Table = drawBitmap(Wallmap,queue.getResult("treasure1.png"),0,0,550,400); 
            Upviewbt(4);
          }else if(boxstate ==1){
            Table = drawBitmap(Wallmap,queue.getResult("treasure2.png"),0,0,550,400); 
            if(navystate==0){
              navy = new createjs.Bitmap(queue.getResult("orbnavy2.png"));
              navy.sourceRect={x:0,y:0,width:116,height:60}
              navy.scaleX=100/116
              navy.scaleY=50/60
              navy.x=200;
              navy.y=120;
              Wallmap.addChild(navy);
            }
            Upviewbt(5);
          }
          Treasuremap=[];
          var x=150;
          var y=230;
          for(var i=0;i<10;i++){
            var t= drawBitmap(Wallmap,queue.getResult("Keyhole.png"),x,y,35,49);
            t.regX = t.image.width / 2;
            t.regY = t.image.height / 2;
            t.rotation=90*Boxkey[i];
            Treasuremap.push(t);
            x+=50;
            if(i==4){
                x=150;
                y=280;
            }
          }
        }}
}else if(upview ==4){
  if(mouseY > 200 && mouseY < 250){
    if(mouseX > 125 && mouseX < 370){
        Treasure(Math.floor((mouseX-125)/49))
    }
  }
  if(mouseY > 250 && mouseY < 300){
    if(mouseX > 125 && mouseX < 370){
        Treasure(5+Math.floor((mouseX-125)/49))
    }
  }
}else if(upview ==5){
if(navystate ==0){
 if(mouseX > 200 && mouseX < 300){
			if(mouseY > 120 && mouseY < 170){//navy取得
navystate =1
Wallmap.removeChild(navy);
getItem("navy")
}}}
}
        break;
      case 3:
//うしろ
if(upview ==0){
  if(mouseX > 100 && mouseX < 177){
    if(mouseY > 240 && mouseY < 311){
    //クッション
    Upviewbt(3);
    Wallmap.addChild(Panel);
    if(imgBstate ==0){
    imgB = drawBitmap(Wallmap,queue.getResult(cussion_src[2]),80,10,390,390)
      }else if(imgBstate ==1){
    imgB = drawBitmap(Wallmap,queue.getResult(cussion_src[1]),80,10,390,390)
    }
    Itembartext.text="ニーシャのクッション\nいい匂いがする！"
    }}
  if(mouseX > 200 && mouseX < 276){
    if(mouseY > 129 && mouseY < 224){
        //ズミュ
      Upviewbt(1);
      if(labystate ==4){labystate =5}else{labystate =0}
      drawBitmap(Wallmap,queue.getResult("zmyu.png"),0,0,550,400)
      Itembartext.text="ズミュ…"
    }}
      if(mouseX > 25 && mouseX < 150){
  if(mouseY > 20 && mouseY < 200){
      //ドリキャ
      Upviewbt(6);
      if(labystate <6){labystate =1}
      drawBitmap(Wallmap,queue.getResult("dreamup.png"),0,0,550,400)
      Itembartext.text="ドリームキャッチャー"
  }}
  if(pocostate ==0){
  if(mouseX > 300 && mouseX < 345){
    if(mouseY > 215 && mouseY < 270){
        Upviewbt(2);
        img = new createjs.Bitmap(queue.getResult(pics_src[view]));
        img.sourceRect={x:252,y:186,width:275,height:200}
            img.scaleX=2
            img.scaleY=2
            Wallmap.addChild(img);
        Itembartext.text="この扉は閉まってて開かないみたい…"
        Wallmap.addChild(pocoQ);
        pocoq(1);
    }}}
else if(pocostate ==1){
if(mouseX > 300 && mouseX < 433){if(mouseY > 115 && mouseY < 380){
  se5.play();
  Table = drawBitmap(Wallmap,queue.getResult("imgBdoor.png"),0,0,550,400);
  if(stingstate ==0){
    sting = drawBitmap(Wallmap,queue.getResult("sting2.png"),200,180,40,210);
  }
  Itembartext.text="小部屋"
  Upviewbt(7)
}}
}
}else if(upview ==2){
  pocoq();
}else if(upview ==3){
  if(imgBstate ==0){
  if(Hand=="clip"){
  if(mouseX > 90 && mouseX < 300){
  if(mouseY > 80 && mouseY < 370){
    lostItem("clip")
    clipstate =2 //アイテム消費
    imgBstate =1;
    Wallmap.removeChild(imgB);
    imgB = drawBitmap(Wallmap,queue.getResult(cussion_src[3]),80,10,390,390)
    se3.play();
    Upviewbt(4)
    }}
  }else if(imgBstate ==1){
    Wallmap.removeChild(imgB);
    imgB = drawBitmap(Wallmap,queue.getResult(cussion_src[4]),80,10,390,390)
    se3.play();
    Upviewbt(5);
  }}
}else if(upview ==4){
    Wallmap.removeChild(imgB);
    imgB = drawBitmap(Wallmap,queue.getResult(cussion_src[4]),80,10,390,390)
    se3.play();
    Upviewbt(5);
    if(purplestate ==0){
    purple = drawBitmap(Wallmap,queue.getResult("orbpurple.png"),80,10,390,390)
    }
}else if(upview ==5){
  if(purplestate ==0){
  if(mouseX > 180 && mouseX < 260){
    if(mouseY > 170 && mouseY < 260){
      Wallmap.removeChild(purple);
      getItem("purple");
      purplestate =1
      //紫のエルティアの欠片を拾った
  }}}
}else if(upview ==6){
  if(tablestate ==0){
      if(mouseX > 100 && mouseX < 180){
        if(mouseY > 270 && mouseY < 350){
      Wallmap.addChild(Panel);
      Dream = drawBitmap(Wallmap,queue.getResult(dream_src[0]),134,150,282,97)   
      tablestate =1
      Itembartext.text="M+A+O=9"
    }}
      if(mouseX > 180 && mouseX < 240){
        if(mouseY > 280 && mouseY < 375){
      Wallmap.addChild(Panel);
      Dream = drawBitmap(Wallmap,queue.getResult(dream_src[1]),134,150,282,97)   
      tablestate =1
      Itembartext.text="L+A+B+Y=18";
    }}
      if(mouseX > 240 && mouseX < 300){
        if(mouseY > 250 && mouseY < 350){
      Wallmap.addChild(Panel);
      Dream = drawBitmap(Wallmap,queue.getResult(dream_src[2]),134,150,282,97)   
      tablestate =1
      Itembartext.text="B+E+L+O=9";
        }}
}else if(tablestate ==1){
  Wallmap.removeChild(Dream);
  Wallmap.removeChild(Panel);
  tablestate =0;
}
}else if (upview ==7){
  if(tablestate ==0){
    if(mouseX > 350 && mouseX < 410){
        if(mouseY > 0 && mouseY < 400){
      Dream = drawBitmap(Wallmap,queue.getResult("imgBdoor3.png"),0,0,550,400) 
      tablestate =1
      }}
  }else if(tablestate ==1){
    if(mouseX > 410 && mouseX < 500){
        if(mouseY > 0 && mouseY < 400){
      Table = drawBitmap(Wallmap,queue.getResult("imgBdoor.png"),0,0,550,400);
      tablestate =0
    }}
  }

  if(stingstate ==0){
    if(mouseX > 200 && mouseX < 240){
        if(mouseY > 180 && mouseY < 370){//sting拾った
                Wallmap.removeChild(sting);
                getItem("sting")
                stingstate =1
  }}}
  if(mouseX > 220 && mouseX < 350){
        if(mouseY > 15 && mouseY < 180){
      Table = drawBitmap(Wallmap,queue.getResult("imgBdoor2.png"),0,0,550,400);
      btngrn = drawBitmap(Wallmap,queue.getResult("btn1.png"),255,150,70,70);
      hexs={};
      hexs.red=hexred(0,0,'rgb(255,0,0)')
      hexs.blue=hexred(80,0,'rgb(0,51,204)');
      hexs.purple=hexred(160,0,'rgb(153,51,255)');
      hexs.blue.visible=false;
      hexs.red.visible=false;
      hexs.purple.visible=false;
      if(redstate ==2){hexs.red.visible=true;}
      if(bluestate ==2){hexs.blue.visible=true;}
      if(purplestate ==2){hexs.purple.visible=true;}

      //if(redstate ==3){hexred(80,0,'rgb(255,0,0)');}
      //if(bluestate ==3){hexred(0,0,'rgb(0,51,204)');}
      //if(purplestate ==3){hexred(0,0,'rgb(153,51,255)');}
      //if(redstate ==4){hexred(160,0,'rgb(255,0,0)');}
      //if(bluestate ==4){hexred(160,0,'rgb(0,51,204)');}
      //if(purplestate ==4){hexred(80,0,'rgb(153,51,255)');}
    Upviewbt(8)
    }}
}else if (upview ==8){
    if(mouseX > 170 && mouseX < 253){
			if(mouseY > 260 && mouseY < 357){//redはめ込み
          if(redstate==1 && Hand=="red"){
              se8.play();
              lostItem("red");
              redstate = 2;//アイテム消費
              hexs.red.visible=true;
            }else if(redstate ==2){
              hexs.red.visible=false;
              redstate =1
              getItem("red")
            }
      }}
    if(mouseX > 253 && mouseX < 333){
			if(mouseY > 260 && mouseY < 357){//blueはめ込み
            if(bluestate==1 && Hand=="blue"){
              se8.play();
              lostItem("blue")
              bluestate = 2;//アイテム消費
              hexs.blue.visible=true;
            }else if(bluestate ==2){
              hexs.blue.visible=false;
              bluestate =1
              getItem("blue")
            }
      }}
    if(mouseX > 333 && mouseX < 415){
			if(mouseY > 260 && mouseY < 357){//purpleはめ込み
              if(purplestate==1 && Hand=="purple"){
              se8.play();
              lostItem("purple")
              purplestate = 2;//アイテム消費
              hexs.purple.visible=true;
            }else if(purplestate ==2){
              hexs.purple.visible=false;
              purplestate =1
              getItem("purple")
            }
      }}
    if(mouseX > 250 && mouseX < 327){
			if(mouseY > 130 && mouseY < 240){//ボタン
    if(redstate ==2 && bluestate ==2 && purplestate ==2){
      se11.play();
      if(nishastate ==0){
      pics_src[1]="imgF237open.png"
      if(labystate ==5 || labystate ==6){
        labystate =6;
        pics_src[1] = "imgF237open_li.png"
      }else if(labystate==7){
        pics_src[1] = "imgF237clear.png"
      }
      pics_src[2]="imgRmove.png"
      Itembartext.text="どっかんパンチ！"
      punchstate +=1
      nishastate =1
      paintstate =1
      }else if(nishastate ==1){
      pics_src[1]="imgF237.png"
      pics_src[2]="imgRclear.png"
      Itembartext.text="ぐるぐるパンチ！"
      nishastate =0;
      }
    }else{
      se10.play();
    };
  var timer2 = null;
  Wallmap.removeChild(btngrn);
  btngrn = drawBitmap(Wallmap,queue.getResult("btn2.png"),255,150,70,70);
    function grnpush() {
    Wallmap.removeChild(btngrn);
    btngrn = drawBitmap(Wallmap,queue.getResult("btn1.png"),255,150,70,70);
        console.log('300milisec spaned!');
    }
timer2 = setTimeout(grnpush,300);
}}
}
        break;
      case 4:
        //左
if(upview ==0){
  if(mouseX > 460 && mouseX < 520){
			if(mouseY > 215 && mouseY < 375){//木L
        Table = drawBitmap(Wallmap,queue.getResult("woodup.png"),0,0,550,400);
        Upviewbt(4);
        Itembartext.text="「ELESIS=050979」\nってカベにラクガキがあるよ！";
    }}
  if(mouseX > 30 && mouseX < 180){
			if(mouseY > 260 && mouseY < 375){
        Upviewbt(1)
        tablestate =5
        Table = drawBitmap(Wallmap,queue.getResult(refri_src[0]),0,0,550,400);
        Itembartext.text="これはレーゾーコ！　だよね？";
            }}
  if(mouseX > 180 && mouseX < 330){
			if(mouseY > 260 && mouseY < 375){
              Upviewbt(2)
              Table = drawBitmap(Wallmap,queue.getResult("tableinner.png"),0,0,550,400);
              Itembartext.text="引き出しの下";
              if(candystate == 2){
                imgF = drawBitmap(Wallmap,queue.getResult("pocoL.png"),350,200,200,190);
                //cx1.drawImage(imgF,0,0,226,240,350, 200, 200, 190);
              }
        }}
  if(mouseX > 25 && mouseX < 330){
			if(mouseY > 200 && mouseY < 260){
              //テーブルに近づいている
              Upviewbt(1)
              Table = drawBitmap(Wallmap,queue.getResult(table_src[0]),0,0,550,400);
              Itembartext.text="机";
              if(clipstate ==0){
              clip = drawBitmap(Wallmap,queue.getResult("clip1.png"),10,10,220,120);
              }
              drawBitmap(Wallmap,queue.getResult("noteLa_transform.png"),280,120,170,60);
        }}
  if(mouseX > 25 && mouseX < 200){
    if(mouseY >100 && mouseY <200){
              Upviewbt(1)
              tablestate = 3;
              Table = drawBitmap(Wallmap,queue.getResult(table_src[tablestate]),0,0,550,400);
              if(labystate ==2){labystate =3}else{labystate =0}
              if(clipstate ==0){
                  clip = drawBitmap(Wallmap,queue.getResult("clip2.png"),150,300,80,64);
              }
              Itembartext.text="ビビ～";
        }}
}else if(upview == 1){
  if(tablestate ==0){
    if(mouseX > 280 && mouseX < 440){
			if(mouseY > 120 && mouseY < 168){
        Wallmap.addChild(Panel);
        paper = drawBitmap(Wallmap,queue.getResult("noteLa.png"),134,100,282,190);
        Upviewbt(4);
        Itembartext.text="ニーシャ……";
      }}
     if(mouseX > 85 && mouseX < 355){
			if(mouseY > 0 && mouseY < 130){
            tablestate = 3;
            Table = drawBitmap(Wallmap,queue.getResult(table_src[tablestate]),0,0,550,400);
            if(labystate ==2){labystate =3}else{labystate =0}
            if(clipstate ==0){
                clip = drawBitmap(Wallmap,queue.getResult("clip2.png"),150,300,80,64);
            }
            Itembartext.text="ビビ～";
          }}
     if(mouseX > 252 && mouseX < 420){
			if(mouseY > 168 && mouseY < 256){
              se13.play();
              tablestate =1
              Table = drawBitmap(Wallmap,queue.getResult(table_src[tablestate]),0,0,550,400);
              if(clipstate ==0){
                clip = drawBitmap(Wallmap,queue.getResult("clip1.png"),10,10,220,120);
              }
              drawBitmap(Wallmap,queue.getResult("noteLa_transform.png"),280,120,170,60);
              Itembartext.text="右の引き出し";
                if(imgFstate == 0 ){
                imgF1 = drawBitmap(Wallmap,queue.getResult("key1.png"),266,233,50,50);
            }
     }}
     if(mouseX > 252 && mouseX < 420){
			if(mouseY > 256 && mouseY < 374){
              Upviewbt(2);
              Table = drawBitmap(Wallmap,queue.getResult("tableinner.png"),0,0,550,400);
              Itembartext.text="引き出しの下";
                if(candystate == 2){
                imgF = drawBitmap(Wallmap,queue.getResult("pocoL.png"),350,200,200,190);
              }
    }}
    if(mouseX >85 && mouseX < 240){
      if(mouseY > 130 && mouseY <200){
        if(imgLstate ==0){
              Itembartext.text="鍵がかかってる";
              Wallmap.addChild(Panel);
              var T=abcdKey();
              Wallmap.addChild(T);
              tablestate =4;
        }else if(imgLstate ==1){
              se13.play();
              tablestate = 2;
              Table = drawBitmap(Wallmap,queue.getResult(table_src[tablestate]),0,0,550,400);
              Itembartext.text="左の引き出し";
              drawBitmap(Wallmap,queue.getResult("note_li.png"),0,0,550,400);
              drawBitmap(Wallmap,queue.getResult("noteLa_transform.png"),280,120,170,60);
    }}}
    if(mouseX >85 && mouseX < 240){
      if(mouseY > 200 && mouseY <375){
        tablestate =5
        Table = drawBitmap(Wallmap,queue.getResult(refri_src[0]),0,0,550,400);
        Itembartext.text="これはレーゾーコ！　だよね？";
    }}
  }else if(tablestate ==1){
    if(imgFstate == 0){
     if(mouseX > 266 && mouseX < 336){
			if(mouseY > 233 && mouseY < 283){
          Wallmap.removeChild(imgF1);
          getItem("imgF1")
          imgFstate = 1;
    }}}
    if(mouseX > 280 && mouseX < 440){
			if(mouseY > 120 && mouseY < 168){
        Wallmap.addChild(Panel);
        paper = drawBitmap(Wallmap,queue.getResult("noteLa.png"),134,100,282,190);
        Upviewbt(4);
        Itembartext.text="ニーシャ……";
      }}
    if(mouseX > 175 && mouseX < 325){
          if(mouseY > 285 && mouseY < 340){
              tablestate = 0;
              Table = drawBitmap(Wallmap,queue.getResult(table_src[0]),0,0,550,400);
              Itembartext.text="机";
              if(clipstate ==0){
                clip = drawBitmap(Wallmap,queue.getResult("clip1.png"),10,10,220,120);
              }
          drawBitmap(Wallmap,queue.getResult("noteLa_transform.png"),280,120,170,60);
            }}
  }else if(tablestate ==2){//鍵つき引き出し開
    if(notestate ==0){
      if(mouseX > 100 && mouseX < 150){
        if(mouseY > 160 && mouseY < 220){
              Itembartext.text="ノート";
              notestate =1
              Wallmap.addChild(Panel);
              Note = drawBitmap(Wallmap,queue.getResult(note_src[notestate]),144,0,262,400);
      }}
    if(mouseX > 10 && mouseX < 150){
			if(mouseY > 220 && mouseY < 270){
              tablestate = 0
              tablestate = 0;
              Table = drawBitmap(Wallmap,queue.getResult(table_src[0]),0,0,550,400);
              Itembartext.text="机";
              drawBitmap(Wallmap,queue.getResult("noteLa_transform.png"),280,120,170,60);
            }}
    }else if(notestate > 0){note();}
}else if(tablestate ==3){
  if(mouseX >150 && mouseX < 230){
    if(mouseY > 300 && mouseY <364){
      if(clipstate ==0){
      clipstate =1;//クリップを拾った
      Wallmap.removeChild(clip);
      getItem("clip")
    }}}
}else if(tablestate ==4){
  //abcdKey();
  if(numA ==6 && numB ==7 && numC ==1 && numD==4){
      imgLstate =1;
      se13.play();
      tablestate = 2;
      Table = drawBitmap(Wallmap,queue.getResult(table_src[tablestate]),0,0,550,400);
      Itembartext.text="左の引き出し";
      drawBitmap(Wallmap,queue.getResult("note_li.png"),0,0,550,400);
      drawBitmap(Wallmap,queue.getResult("noteLa_transform.png"),280,120,170,60);
}
}else if(tablestate ==5){
     if(mouseX > 5 && mouseX < 50){
			if(mouseY > 200 && mouseY <375){
        if(candystate ==0){
          Table = drawBitmap(Wallmap,queue.getResult(refri_src[2]),0,0,550,400);
          }else{
          Table = drawBitmap(Wallmap,queue.getResult(refri_src[3]),0,0,550,400);
          }
          tablestate =6
          Itembartext.text="机の隙間";
      }}
      if(mouseX > 90 && mouseX < 380){
        if(mouseY > 63 && mouseY <363){
          if(refristate==0 && Hand=="imgF2"){
              se5.play();
              lostItem("imgF2");
              imgF2state = 2;//アイテム消費
              refristate =1;
          }
          if(refristate ==1){
              tablestate =7
              Table = drawBitmap(Wallmap,queue.getResult(refri_src[1]),0,0,550,400);
            if(statuestate ==0){
              statue = drawBitmap(Wallmap,queue.getResult("icestatue.png"),130,150,100,100);
            }
            if(cakestate ==0){
              cake = drawBitmap(Wallmap,queue.getResult("cake.png"),220,260,120,100);
            }
          }
      }}
  }else if(tablestate ==6){
      if(mouseX > 130 && mouseX < 180){
        if(mouseY > 290 && mouseY < 380){
            if(Hand=="sting"){
              candystate = 1;//アメ
              getItem("candy");
              lostItem("sting")
              stingstate = 2;//アイテム消費
              Table = drawBitmap(Wallmap,queue.getResult(refri_src[3]),0,0,550,400);
      }else{
             Itembartext.text="何かが光ってるけど届かないなぁ…";     
      }
    }}
  }else if(tablestate ==7){
    if(mouseX > 360 && mouseX < 440){
			if(mouseY > 40 && mouseY < 375){//冷蔵庫を閉める
          se5.play();
          tablestate =5
          Table = drawBitmap(Wallmap,queue.getResult(refri_src[0]),0,0,550,400);
    }}
    if(mouseX > 130 && mouseX < 230){
      if(mouseY > 150 && mouseY < 250){
        if(statuestate ==0){
          Wallmap.removeChild(statue);
          getItem("statue");
          statuestate = 1;//icestatue
    }}}
    if(mouseX > 220 && mouseX < 320){
      if(mouseY > 270 && mouseY < 340){
        if(cakestate ==0){
          Wallmap.removeChild(cake);
          getItem("cake");
          cakestate =1;//cakeカウント開始
    }}}
}
}else if(upview ==2){
  if(mouseX > 0 && mouseX < 460){
			if(mouseY > 0 && mouseY < 55){
    tablestate =0
    Table = drawBitmap(Wallmap,queue.getResult(table_src[tablestate]),0,0,550,400);
    Upviewbt(1);
    Itembartext.text="机";
  }}
  if(mouseX > 0 && mouseX < 100){
			if(mouseY > 55 && mouseY < 365){
    Upviewbt(1);
    tablestate =5
    Table = drawBitmap(Wallmap,queue.getResult(refri_src[0]),20,0,510,400);
    Itembartext.text="冷蔵庫";
  }}
if(mouseX > 420 && mouseX < 550){
			if(mouseY > 200 && mouseY < 380){
if(candystate ==2){
if(greenstate ==0){
      se14.play();
      Itembartext.text="この中に何かあるの？";
}else{
      se14.play();
      Itembartext.text="ふっかふかで～\nふっわふわ～！"
}}
            }}
if(mouseX > 125 && mouseX < 420){
			if(mouseY > 55 && mouseY < 365){
      Table = drawBitmap(Wallmap,queue.getResult("tableinner1.png"),0,0,550,400);
  if(candystate ==2){
    if(greenstate ==0){
        var M = drawBitmap(Wallmap,queue.getResult("tableinner3.png"),0,0,550,400);
      M.alpha=0;
      createjs.Tween.get(M)
      .wait(700).to({alpha:1},1000,createjs.Ease.sineInOut);
      green = drawBitmap(Wallmap,queue.getResult("orbgreen.png"),0,0,550,400);
      green.alpha=0;
      createjs.Tween.get(green)
      .wait(700).to({alpha:1},1000,createjs.Ease.sineInOut);
    }else{
      drawBitmap(Wallmap,queue.getResult("tableinner3.png"),0,0,550,400);
    }
  Itembartext.text="机の中"
  }else{
  Itembartext.text="真っ暗闇"
  }
  Upviewbt(3);
}}
}else if(upview ==3 && greenstate ==0){
  if(mouseX > 340 && mouseX < 400){
    if(mouseY > 224 && mouseY < 290){
        Wallmap.removeChild(green);
        getItem("green")
        greenstate =1;//greenを拾った
      }}}
  break;
default:
  break;
    }
};
  canvas.addEventListener(`pointermove`, function(e){
    const rect = canvas.getBoundingClientRect();
    mouseX =  Math.floor((e.clientX - rect.left)/1.25);
    mouseY =  Math.floor((e.clientY - rect.top)/1.25);
    corsorX.text="X座標："+mouseX+" /Y座標"+mouseY;
  });
  disp();
  function disp(){
    if(view !==5){clearT =Date.now()};
    if(cakestate ==0){startTime = clearT}
    datet = parseInt((clearT - startT )/ 1000);
    hour = parseInt(datet / 3600);
    min = parseInt((datet / 60) % 60);
    sec = datet % 60;
    corsorY.text=hour + ":" + min + ":" + sec;
    //ケーキ判定
    caketime =clearT - startTime;
    if(cakestate==1 && caketime >cakelost){
      var t=Itemlist.findIndex(value=>value.name=="cake");
      ItemlistA[t].visible=false;
      ItemlistA[ItemlistA.length-1].visible=true;//cake2
      cakestate=2;
    }
    if(hour >99){hour =99}
      setTimeout(disp,1000)
  }
	function printView(){
    console.log('printview',view)
    Wallmap.removeAllChildren();
    if((labystate ==5 || labystate ==6) && nishastate ==1){
      labystate =6;
      pics_src[1] = "imgF237open_li.png"
    };
    img = new createjs.Bitmap(queue.getResult(pics_src[view]));
    img.scaleX=550/img.image.width
    img.scaleY=400/img.image.height
    Wallmap.addChild(img);
		if(view == 1){//壁１正面
      pocoF = new createjs.Bitmap(queue.getResult("nisha.png"));
      if(nishastate==0){
        pocoF.x=173;
        pocoF.y=270;
        Wallmap.addChild(pocoF);
        paper = new createjs.Bitmap(queue.getResult("papera.png"));
        paper.x=255;
        paper.y=110;
        Wallmap.addChild(paper);
        icehint = drawBitmap(Wallmap,queue.getResult("icehint.png"),132,30,255,85);
      }else if(nishastate==1){
        pocoF.x=300;
        pocoF.y=270;
        Wallmap.addChild(pocoF);
        paper = new createjs.Bitmap(queue.getResult("paperb.png"));
        paper.x=300;
        paper.y=110;
        Wallmap.addChild(paper);
        icehint = drawBitmap(Wallmap,queue.getResult("icehint.png"),294,30,255,85);
      }
    }else if(view == 4){;//壁４左
        notestate=0;//table
        if(candystate ==2){
        imgF = drawBitmap(Wallmap,queue.getResult("pocoL.png"),305,320,100,80);
        }
		}
  };
function hexmirror(mx,my,color){
  var obj = new createjs.Shape();
  obj.graphics.beginFill(color);
  obj.graphics.moveTo(mx+138, my+96)
		.lineTo(mx+165, my+96)
    .lineTo(mx+176, my+117)
    .lineTo(mx+165, my+138)
    .lineTo(mx+138, my+138)
    .lineTo(mx+127, my+117);
  Wallmap.addChild(obj);
  return obj
}
function bookbtn(p=0){
if(p==-1){
  //初期化
bookeyList=[];
bookeytextList=[];
Bookey =[0,0,0,0,0,0];
var B = new createjs.Bitmap(queue.getResult('book.png'));
B.sourceRect=new createjs.Rectangle(0, 0, 100, 60);
B.x=144;
B.y=50;
Wallmap.addChild(B);
bookeyList.push(B);

var B = new createjs.Bitmap(queue.getResult('book.png'));
B.sourceRect=new createjs.Rectangle(130, 0, 70, 80);
B.x=274;
B.y=50;
Wallmap.addChild(B);
bookeyList.push(B);

var B = new createjs.Bitmap(queue.getResult('book.png'));
B.sourceRect=new createjs.Rectangle(0, 120, 70, 80);
B.x=144;
B.y=170;
Wallmap.addChild(B);
bookeyList.push(B);

var B = new createjs.Bitmap(queue.getResult('book.png'));
B.sourceRect=new createjs.Rectangle(100, 150, 70, 80);
B.x=244;
B.y=200;
Wallmap.addChild(B);
bookeyList.push(B);

var B = createText(Wallmap,Bookey[0],212,80,20,{font:"Times New Roman",color:"rgb(255,0,0)"})
B.rotation=10;
bookeytextList.push(B);
var B = createText(Wallmap,Bookey[0],320,98,22,{font:"Times New Roman",color:"rgb(255,0,0)"})
B.rotation=10;
bookeytextList.push(B);
var B = createText(Wallmap,Bookey[0],160,213,22,{font:"Times New Roman",color:"rgb(255,0,0)"})
B.rotation=10;
bookeytextList.push(B);
var B = createText(Wallmap,Bookey[0],275,230,24,{font:"Times New Roman",color:"rgb(255,0,0)"})
B.rotation=10;
bookeytextList.push(B);
return true;
}
    if(mouseX >170 && mouseX < 240){
			if(mouseY > 50 && mouseY < 130){
        //左上4
      cLock=false;
      se10.play();
      Bookey[0] +=1
      if(Bookey[1] ==0){
        Bookey[1] =1;
        if(Bookey[0] ==4){Bookey[1] =2}
        createjs.Tween.get(bookeyList[0])
        .to({y:55},100)
        .to({y:53},100)
        .call(()=>{
          bookeyList[0].visible=false;
          bookeytextList[0].text=Bookey[0];
          cLock=true;
          Answer();
        });
      }else if(Bookey[1] >0){
        Bookey[1] =0;
        bookeyList[0].visible=true;
        createjs.Tween.get(bookeyList[0])
        .to({y:50},100)
        .call(()=>{
          cLock=true;
          Answer();
        });
      }
    }}
    if(mouseX >270 && mouseX < 350){
			if(mouseY > 70 && mouseY < 130){
        //右上5
      cLock=false;
      se10.play();
      Bookey[0] +=1
      if(Bookey[2] ==0){
        Bookey[2] =1
        if(Bookey[0] ==5){Bookey[2] =2}
      createjs.Tween.get(bookeyList[1])
        .to({y:55},100)
        .to({y:53},100)
        .call(()=>{
        bookeyList[1].visible=false;
        bookeytextList[1].text=Bookey[0];
        cLock=true;
        Answer();
        })
      }else if(Bookey[2] >0){
        Bookey[2] =0;
        bookeyList[1].visible=true;
        createjs.Tween.get(bookeyList[1])
        .to({y:50},100)
        .call(()=>{
          cLock=true;
          Answer();
        });
      }
    }}
    if(mouseX >124 && mouseX < 194){
			if(mouseY > 170 && mouseY < 250){
        //左下1
      cLock=false;
      se10.play();
      Bookey[0] +=1
      if(Bookey[3] ==0){
        Bookey[3] =1;
        if(Bookey[0] ==1){Bookey[5] =1}else if(Bookey[0] >1 && Bookey[0] <6){Bookey[5] =0};
        if(Bookey[5]==1 && Bookey[0]==6){Bookey[3] =2}
        createjs.Tween.get(bookeyList[2])
        .to({y:175},100)
        .to({y:173},100)
        .call(()=>{
        bookeyList[2].visible=false;
        bookeytextList[2].text=Bookey[0];
        if(Bookey[3]==2){bookeytextList[2].text=1};
        cLock=true;
        Answer();
        })
      }else if(Bookey[3] >0){
        Bookey[3] =0;
        bookeyList[2].visible=true;
        createjs.Tween.get(bookeyList[2])
        .to({y:170},100)
        .call(()=>{
          cLock=true;
          Answer();
        });
      }
    }}
    if(mouseX >224 && mouseX < 294){
			if(mouseY > 200 && mouseY < 280){
        //右下3
      cLock=false;
      se10.play();
      Bookey[0] +=1
      if(Bookey[4] ==0){
        Bookey[4] =1;
        if(Bookey[0] ==3){Bookey[4] =2}
        createjs.Tween.get(bookeyList[3])
        .to({y:205},100)
        .to({y:203},100)
        .call(()=>{
          bookeyList[3].visible=false;
          bookeytextList[3].text=Bookey[0];
          cLock=true;
          Answer();
        })
      }else if(Bookey[4] >=1){
        Bookey[4] =0
        bookeyList[3].visible=true;
        createjs.Tween.get(bookeyList[3])
        .to({y:200},100)
        .call(()=>{
          cLock=true;
          Answer();
        });
      }
    }}
    function Answer(){
      if(Bookey[1] ==2 && Bookey[2] ==2 && Bookey[3] ==2 && Bookey[4] ==2){//オープン
        if(bookstate ==0){
        cLock=false;
        bookstate =1;
        Book = drawBitmap(Wallmap,queue.getResult(book_src[0]),144,50,280,230);
        for(var i=0;i<4;i++){
        Wallmap.removeChild(bookeyList[i]);
        Wallmap.removeChild(bookeytextList[i]);  
        }
        createjs.Tween.get(Book)
        .to({y:53},100)
        .to({y:50},100)
        .wait(100).call(()=>{
          Wallmap.removeChild(Book);
          Wallmap.removeChild(Table);
          Book = drawBitmap(Wallmap,queue.getResult(book_src[2]),134,50,280,250)
          if(imgF2state ==0){
          imgF2 = drawBitmap(Wallmap,queue.getResult(book_src[3]),134,50,280,250)
          }
          Itembartext.text="開いた！"
          Upviewbt(5);
          se9.play();
          cLock=true;
          console.log('book open')
        })
        return true;
        }
      }else if(Bookey[1] >0 && Bookey[2] >0 && Bookey[3] >0 && Bookey[4] >0){
      Bookey=[0,0,0,0,0,0];
      bookeyList[0].visible=true;
      bookeyList[1].visible=true;
      bookeyList[2].visible=true;
      bookeyList[3].visible=true;
      }
      Itembartext.text=Bookey[0]+"！"
      if(Bookey[0]>=10){
        Itembartext.text="何回押したか忘れちゃった…。"
      }
    }
};
function imgmove(parent, image) {
    var Nx;
    mistArrow(-1);
    if (nishastate == 0) {
        Nx = 173;
    } else if (nishastate == 1) {
        Nx = 300;
    }
    var bitmap = new createjs.Bitmap(image);
    bitmap.x = Nx;
    bitmap.y = 270;
    bitmap.scaleX = 174 / image.width;
    bitmap.scaleY = 120 / image.height;
    parent.addChild(bitmap);
    var data = {
        angle: 0
    };
    // 1バウンドあたりの移動距離
    var bounceX = 180;
    // 3バウンド
    var totalX = bounceX * 3;
    // 1バウンド 600ms
    var bounceTime = 600;
    // X方向
    createjs.Tween.get(bitmap)
        .to(
            { x: Nx - totalX },
            bounceTime * 3,
            createjs.Ease.linear
        )
        .call(function(){
          mistArrow(1);
        })
    // 上下方向
    createjs.Tween.get(data)
        .to({ angle: Math.PI * 3 },
            bounceTime * 3,
            createjs.Ease.linear
        )
        .on("change", function () {
            bitmap.y = 270 - 80 * Math.abs(Math.sin(data.angle));
            bitmap.scaleX = (174 + 50 * Math.abs(Math.sin(data.angle))) / image.width;
        })
        .call(function () {
            parent.removeChild(bitmap);
        });
}

function Treasure(boxi){//鍵穴
// 90度回転
//console.log('treasure',boxi)
if(upview ==4){
  if(Boxkey[boxi]==3){Boxkey[boxi] =0}else{Boxkey[boxi] +=1}
  se2.play();
  var Angle=90*Boxkey[boxi];
  if(Angle==0){Angle=360};
  createjs.Tween.get(Treasuremap[boxi])
      .to({ rotation:Angle}, 50)
      .call(Arraycheck);
}
function Arraycheck(){
      if(Treasuremap[boxi].rotation==360){Treasuremap[boxi].rotation=0}
      for (var p = 0; p < BoxAns.length; ++p) {
        if (Boxkey[p] !== BoxAns[p]){
          return false}
    }
    se5.play();
    Table = drawBitmap(Wallmap,queue.getResult("treasure2.png"),0,0,550,400);
    navy = new createjs.Bitmap(queue.getResult("orbnavy2.png"));
    navy.sourceRect={x:0,y:0,width:116,height:60}
    navy.scaleX=100/116
    navy.scaleY=50/60
    navy.x=200;
    navy.y=120;
    Wallmap.addChild(navy);
    boxstate =1;
    var x=150;
    var y=230;
    for(var i=0;i<10;i++){
      var t= drawBitmap(Wallmap,queue.getResult("Keyhole.png"),x,y,35,49);
      t.regX = t.image.width / 2;
      t.regY = t.image.height / 2;
      t.rotation=90*Boxkey[i];
      x+=50;
      if(i==4){
          x=150;
          y=280;
      }
    }
    Upviewbt(5)
    };
};

function Icebtn(){
     if(mouseX > 123 && mouseX < 180){
			if(mouseY > 140 && mouseY < 240){
//左
icebtn.push(1);
se10.play();
cLock=false;
var IceP = new createjs.Bitmap(queue.getResult(ice_src[1]));
IceP.sourceRect={x:150,y:140,width:70,height:130};
    IceP.scaleX = 550/640;
    IceP.scaleY = 400/480;
    IceP.x = 150*55/64;
    IceP.y = 140*40/48;
    Wallmap.addChild(IceP);
    var timer2 = null;
    timer2 = setTimeout(firelog,300);
}}
if(mouseX > 330 && mouseX < 385){
  if(mouseY > 140 && mouseY < 240){
//右
icebtn.push(2);
se10.play();
cLock=false;
var IceP = new createjs.Bitmap(queue.getResult(ice_src[1]));
IceP.sourceRect={x:375,y:140,width:90,height:130};
    IceP.scaleX = 550/640;
    IceP.scaleY = 400/480;
    IceP.x = 375*55/64;
    IceP.y = 140*40/48;
    Wallmap.addChild(IceP);
    var timer2 = null;
    timer2 = setTimeout(firelog,300);
}}
function firelog() {
Wallmap.removeChild(IceP);
cLock=true;
};

if(mouseX > 190 && mouseX < 327){
if(mouseY > 80 && mouseY < 130){//答え合わせ
cLock=false;
var IceP = drawBitmap(Wallmap,queue.getResult(ice_src[1]),0,0,550,400);
//console.log(icebtn);
var timer2 = null;
timer2 = setTimeout(firecheck,500);
    function firecheck() {
      cLock=true;
      if(icecheck()){
      Wallmap.removeChild(IceP);
      Ice = drawBitmap(Wallmap,queue.getResult(ice_src[icestate]),0,0,550,400);
      akane = drawBitmap(Wallmap,queue.getResult("orbakane2.png"),230,87,60,52);
      }else{
      Wallmap.removeChild(IceP);
      }
    }
}}
function icecheck(){
      if (icebtn.length !== iceAns.length){
      se10.play();
      icebtn = [];
      console.log("1");
      return false;
      }
      for (var p = 0; p < iceAns.length; ++p) {
      if (icebtn[p] !== iceAns[p]){
      se10.play();
      icebtn = [];
      console.log("2");
      return false;}
      }
      se5.play();
      console.log("開");
      icestate =2;
      return true;
    }
}

function hexred(mx,my,color){
var obj = new createjs.Shape();
  obj.graphics.beginFill(color);
  obj.graphics.moveTo(mx+178, my+294)
    .lineTo(mx+178, my+328)
    .lineTo(mx+215, my+350)
    .lineTo(mx+245, my+329)
    .lineTo(mx+245, my+293)
    .lineTo(mx+210, my+272);
  Wallmap.addChild(obj);
  return obj
}
function pocoq(p=0){
if(p==1){
  Pocodraw();
  return false;
}
if(mouseX >202 && mouseX<237){
if(mouseY>127 && mouseY<162){
  se2.play();
if(PocoKey[0] == 0){PocoKey[0]=1}else{PocoKey[0]=0}
}else if(mouseY>164 && mouseY<199){
  se2.play();
if(PocoKey[1] == 0){PocoKey[1]=1}else{PocoKey[1]=0}
}else if(mouseY>201 && mouseY<236){
  se2.play();
if(PocoKey[2] == 0){PocoKey[2]=1}else{PocoKey[2]=0}
}else if(mouseY>238 && mouseY<273){
  se2.play();
if(PocoKey[3] == 0){PocoKey[3]=1}else{PocoKey[3]=0}
}
}else if(mouseX >239 && mouseX<274){
if(mouseY>127 && mouseY<162){
  se2.play();
if(PocoKey[4] == 0){PocoKey[4]=1}else{PocoKey[4]=0}
}else if(mouseY>164 && mouseY<199){
  se2.play();
  if(PocoKey[5] == 0){PocoKey[5]=1}else{PocoKey[5]=0}
}else if(mouseY>201 && mouseY<236){
  se2.play();
  if(PocoKey[6] == 0){PocoKey[6]=1}else{PocoKey[6]=0}
}else if(mouseY>238 && mouseY<273){
  se2.play();
  if(PocoKey[7] == 0){PocoKey[7]=1}else{PocoKey[7]=0}
}
}else if(mouseX >276 && mouseX <311){
if(mouseY>127 && mouseY<162){
  se2.play();
if(PocoKey[8] == 0){PocoKey[8]=1}else{PocoKey[8]=0}
}else if(mouseY>164 && mouseY<199){
  se2.play();
  if(PocoKey[9] == 0){PocoKey[9]=1}else{PocoKey[9]=0}
}else if(mouseY>201 && mouseY<236){
  se2.play();
  if(PocoKey[10] == 0){PocoKey[10]=1}else{PocoKey[10]=0}
}else if(mouseY>238 && mouseY<273){
  se2.play();
  if(PocoKey[11] == 0){PocoKey[11]=1}else{PocoKey[11]=0}
}
}else if(mouseX >313 && mouseX < 348){
if(mouseY>127 && mouseY<162){
  se2.play();
  if(PocoKey[12] == 0){PocoKey[12]=1}else{PocoKey[12]=0}
}else if(mouseY>164 && mouseY<199){
  se2.play();
  if(PocoKey[13] == 0){PocoKey[13]=1}else{PocoKey[13]=0}
}else if(mouseY>201 && mouseY<236){
  se2.play();
  if(PocoKey[14] == 0){PocoKey[14]=1}else{PocoKey[14]=0}
}else if(mouseY>238 && mouseY<273){
  se2.play();
  if(PocoKey[15] == 0){PocoKey[15]=1}else{PocoKey[15]=0}
}
}
Pocodraw();
if(mouseX > 250 && mouseX < 300){
  if(mouseY > 285 && mouseY < 315){//答え合わせのボタン
se2.play();
var timer2 = null;
    timer2 = setTimeout(Pocodraw,300)
Arraycheck();
function Arraycheck(){
  pocoQmap[16].visible=true;
  for (var p = 0; p < 16; ++p) {
    if (PocoKey[p] !== PocoAns[p]){
  for (var q = 0; q < 16; ++q) {PocoKey[q] = 1;}
  return false}
  }
console.log('鍵が開いた音');
pocostate =1;
}
}}

function Pocodraw(){
  //pocoQ.removeAllChildren();
if(pocostate ==1){
  se5.play();
  Table = drawBitmap(Wallmap,queue.getResult("imgBdoor.png"),0,0,550,400);
  if(stingstate ==0){
    sting = drawBitmap(Wallmap,queue.getResult("sting2.png"),200,180,40,210);
  }
  Itembartext.text="空いた！　空いたよ！"
  Upviewbt(7)
return true;
  }else if(pocostate ==0){
//更新
for (var i=0; i<PocoKey.length; i++){
  if (PocoKey[i] == 0){
    pocoQmap[i].visible=false;
  }else if(PocoKey[i] ==1){
    pocoQmap[i].visible=true;
  };
 };
pocoQmap[16].visible=false;
}
}}
function note(){
     if(mouseX > 180 && mouseX < 390){
			if(mouseY > 53 && mouseY <375){
        if(notestate ==4){notestate=1}else{notestate +=1}
        }else if(mouseY>0 && mouseY<53){
        if(notestate ==1){notestate=1}else{notestate -=1}
        }
        se4.play();
    }else{
      if(mouseX > 0 && mouseX < 550){
        if(mouseY > 0 && mouseY <375){
          notestate =0;
      }}
    }
  Wallmap.removeChild(Note);
  if(Hand =="mirror" && notestate ==3){
    se12.play();
    Note = drawBitmap(Wallmap,queue.getResult(note_src[5]),144,0,262,400);
  }else if(notestate >0){
    Note = drawBitmap(Wallmap,queue.getResult(note_src[notestate]),144,0,262,400);
  }
};
function abcdKey(){
if(tablestate ==0){
  var container = new createjs.Container();
  var s = new createjs.Shape();
  s.graphics.beginFill('rgb(50, 50, 50)').drawRect(195,165,168,100);
  container.addChild(s);
  var s = new createjs.Shape();
  s.graphics.beginFill('rgb(100, 100, 100)').drawRect(200, 170,38, 90);
  container.addChild(s);
  s.addEventListener("click",()=>{
    se2.play();
    if(numA<9){numA += 1}else{numA =0}
    t.text=numA + ' '+numB + ' '+numC + ' '+numD
  })
    var s = new createjs.Shape();
  s.graphics.beginFill('rgb(100, 100, 100)').drawRect(240, 170,38, 90);
  container.addChild(s);
  s.addEventListener("click",()=>{
    se2.play();
    if(numB<9){numB += 1}else{numB =0}
    t.text=numA + ' '+numB + ' '+numC + ' '+numD
  })
    var s = new createjs.Shape();
  s.graphics.beginFill('rgb(100, 100, 100)').drawRect(280, 170,38, 90);
  container.addChild(s);
  s.addEventListener("click",()=>{
    se2.play();
    if(numC<9){numC += 1}else{numC =0}
    t.text=numA + ' '+numB + ' '+numC + ' '+numD
  })
    var s = new createjs.Shape();
  s.graphics.beginFill('rgb(100, 100, 100)').drawRect(320, 170,38, 90);
  container.addChild(s);
  s.addEventListener("click",()=>{
    se2.play();
    if(numD<9){numD += 1}else{numD =0}
    t.text=numA + ' '+numB + ' '+numC + ' '+numD
  })
  var t=createText(Wallmap,numA +' '+numB +' '+numC +' '+numD,280,190,52,{align:"center",font:"Times New Roman",color:"#fff"})
  container.addChild(t);
};
return container;
};

function HandItem(){
  var t=Itemlist.findIndex(value=>value.name==this.card);
  console.log(Hand,this.card);
  if(Hand==this.card){
    handC.visible=false;
    Hand="0";
  }else{
    handC.visible=true;
    handC.x=Itemlist[t].x;
    handC.y=Itemlist[t].y;
    Hand=this.card;
    console.log(Hand,handC.x,handC.y);
  }
  switch(this.card){
    case "red":
      if(paintstate ==0){
      Itembartext.text="赤色の欠片";
      }else if(paintstate ==1){
      Itembartext.text="朱色の欠片";
      }
      break;
    case "cake":
      if(cakestate ==1){
      Itembartext.text="ケーキ";
      }else if(cakestate ==2){
      Itembartext.text="溶けてしまったケーキ";
      }
      break;
    default:
      Itembartext.text=Itemlist[t].chr;
      break;
  }
}
function Upviewbt(p=1){
  if(p>0){
    //▼
    rectL.alpha=0;
    rectR.alpha=0;
    rectD.alpha=0.5;
    arrowL.alpha=0;
    arrowR.alpha=0;
    arrowD.alpha=1;
    upview=p;
  }else{
  rectL.alpha=0.5;
  rectR.alpha=0.5;
  rectD.alpha=0;
  arrowL.alpha=1;
  arrowR.alpha=1;
  arrowD.alpha=0;
    upview=0;
    tablestate = 0;
    printView();
  }
}
function mistArrow(p=0){
  console.log('mistArrow',p)
  if(p==-1){
    cLock=false;
    Movemap.visible=false;
    return false;
  }else if(p==1){
    cLock=true;
    Movemap.visible=true;
    return false;
  }
rectL.alpha=0.5;
rectR.alpha=0.5;
rectD.alpha=0;
    arrowL.alpha=1;
    arrowR.alpha=1;
    arrowD.alpha=0;
rectL.addEventListener("mouseover", {card:10,handleEvent:moveBt});
rectL.addEventListener("mouseout", {card:11,handleEvent:moveBt});
rectL.addEventListener("click", {card:1,handleEvent:moveBt});
rectR.addEventListener("mouseover", {card:20,handleEvent:moveBt});
rectR.addEventListener("mouseout", {card:21,handleEvent:moveBt});
rectR.addEventListener("click", {card:2,handleEvent:moveBt});
rectD.addEventListener("mouseover", {card:30,handleEvent:moveBt});
rectD.addEventListener("mouseout", {card:31,handleEvent:moveBt});
rectD.addEventListener("click", {card:3,handleEvent:moveBt});
  Movemap.addChild(rectL);
  Movemap.addChild(rectR);
  Movemap.addChild(rectD);
    Movemap.addChild(arrowL);
    Movemap.addChild(arrowR);
    Movemap.addChild(arrowD);

function moveBt(){
  //console.log('moveBt',this.card);
  //1-3 クリック時 10- mouseover,out
  if(itemview !== 0){return false}
  if(!cLock){return false}
  switch(this.card){
    case 1:
      if(itemview==0){
        if(view==1){view=4}else{view-=1};
        printView();
      }
      break;
    case 2:
      if(itemview==0){
        if(view==4){view=1}else{view+=1};
        printView();
      }
      break;
    case 3:
      Upviewbt(0);
      break;
    case 10:
      createjs.Tween.get(rectL)
      .to({alpha:1},400)
      break;
    case 11:
      createjs.Tween.get(rectL,{override:true})
      .to({alpha:0.5},400)
      break;
    case 20:
      createjs.Tween.get(rectR)
      .to({alpha:1},400)
      break;
    case 21:
      createjs.Tween.get(rectR,{override:true})
      .to({alpha:0.5},400)
      break;
    case 30:
      if(upview>0){
      createjs.Tween.get(rectD)
      .to({alpha:1},400)
      }
      break;
    case 31:
      if(upview>0){
      createjs.Tween.get(rectD,{override:true})
      .to({alpha:0.5},400)
      };
      break;
    }
  };
};

function gamestart(){
  if(loadstate!==10){return false;}
//se2.play();
Bgm.playMusic();
view=6;
loadstate=0;
Loadmap.removeAllChildren();
var fade = new createjs.Shape();
fade.graphics.beginFill("black").drawRect(0, 0,800,600);
fade.alpha=0.8;
Loadmap.addChild(fade)
fade.addEventListener("click", msgHandler2, false);
createjs.Tween.get(fade, {override: true})
.to({alpha:1}, 400, createjs.Ease.cubicInOut)
.call(()=>{
itemBar();
Titleyard.removeAllChildren();
var Esc = new createjs.Bitmap("Esc_enter.png");
Esc.scale=0.5;
Loadmap.addChild(Esc);
msgHandler2();
});
};
function itemBar(){
var shape = new createjs.Shape();
shape.graphics.beginFill("#77095c");
shape.graphics.drawRect(550, 0, 90, 400); // 長方形を描画
Itembar.addChild(shape); // 表示リストに追加
var shape = new createjs.Shape();
shape.graphics
.beginLinearGradientFill(['#77095c','#44074dfd'],[0.0,1.0],0,300,0,480)
.drawRect(0, 400, 640, 80);
Itembar.addChild(shape);
Itembar.addChild(Itembartext);
var shape = new createjs.Shape();
  shape.graphics.beginStroke("rgba(250,250,250,0.7)");
shape.graphics.drawRoundRect(5, 410, 630, 60, 6, 6);
Itembar.addChild(shape);
var x=553;
var y=45;
for(var i=0;i<Itemlist.length;i++){
  var s = new createjs.Shape();
  s.graphics.beginFill("rgba(255, 93, 174, 0.7)");
  s.graphics.drawRoundRect(x, y, 40, 40, 2, 2);
  Itembar.addChild(s);
  s.visible=false;
  ItemlistB.push(s);
  s.addEventListener("click",{card:Itemlist[i].name,handleEvent:HandItem})
var t=drawBitmap(Itembar,queue.getResult(Itemlist[i].src),x+1,y+1,38,38);
t.visible=false;
ItemlistA.push(t);
Itemlist[i].x=x;
Itemlist[i].y=y;
  var s = new createjs.Shape();
  s.graphics.beginFill("rgba(43, 10, 29, 0.7)");
  s.graphics.drawRoundRect(x, y, 40, 40, 2, 2);
  Itembar.addChild(s);
  s.visible=false;
  ItemlistC.push(s);
y+=45;
if(i==6){
x+=43;
y=45;
}
};
//溶けたケーキの差分
var t=drawBitmap(Itembar,queue.getResult("cake2.png"),553,314,45,45);
t.visible=false;
ItemlistA.push(t);
//カーソル・アイテムを描画しておく
Itembar.addChild(handC);
};
function getItem(name){
se1.play();
var t=Itemlist.findIndex(value=>value.name==name);
ItemlistA[t].visible=true;
ItemlistB[t].visible=true;
ItemlistC[t].visible=false;
}
function lostItem(name){
var t=Itemlist.findIndex(value=>value.name==name);
ItemlistB[t].visible=false;
ItemlistC[t].visible=true;
handC.visible=false;
Hand="0"
}
function gameover(){
//ゲームオーバー
cLock=false;
var fade = new createjs.Shape();
    fade.graphics.beginFill("black").drawRect(0, 0,640,480);
    fade.alpha=0;
    fade.addEventListener('click',(()=>{
      //更新してニューゲーム
      if(cLock){
      location.reload();
      }
    }))
    MessageWindow.addChild(fade);
    createjs.Tween.get(fade)
    .to({alpha:1},1500,createjs.Ease.sineInOut)
    .call(()=>{
      if(cakestate ==1){
        var BG = new createjs.Bitmap("labydom_title2.png");
        BG.alpha=0.5;
        BG.scale=0.75;
        BG.x=2;
        MessageWindow.addChild(BG);
        localStorage.setItem("gameCleared", "true");
      }
      createText(MessageWindow,"Congratulations!!",150,100,22,{font:"Times New Roman",color:"#fff"});
      createText(MessageWindow,"クリアタイム　"+ hour + ":" + min + ":" + sec,300,200,28,{font:"游明朝",color:"#fff"});
      createText(MessageWindow,"どっかんパンチ　"+ punchstate + "回",300,250,28,{font:"游明朝",color:"#fff"});
    if(hour > 0){
      rankAnimation(MessageWindow,queue.getResult("rankc.png"))
      createText(MessageWindow,"すっごく時間がかかっちゃったけど、\nニーシャに会えた！\n（Tips：クリアタイム）",320,375,24,{align:"center",font:"游明朝",color:"#fff"});
    }else if(min>30){
      rankAnimation(MessageWindow,queue.getResult("rankb.png"))
      createText(MessageWindow,"ニーシャを待たせちゃったかな？\n（Tips：クリアタイム）",320,375,24,{align:"center",font:"游明朝",color:"#fff"});
    }else if(cakestate ==1 && punchstate < 3){
      rankAnimation(MessageWindow,queue.getResult("rankss.png"))
      createText(MessageWindow,"ひゃぁあ！？　SSランクだぁ！\nここまで遊んでくれてありがと！",320,375,24,{align:"center",font:"游明朝",color:"#fff"});
    }else if(cakestate ==1){
      rankAnimation(MessageWindow,queue.getResult("ranks.png"))
      createText(MessageWindow,"ニーシャがあんなに喜んでくれて、\nラビィも嬉しい！\n（Tips：控えめなどっかんパンチ）",320,375,24,{align:"center",font:"游明朝",color:"#fff"});
    }else if(cakestate ==2){
      rankAnimation(MessageWindow,queue.getResult("ranka.png"))
      createText(MessageWindow,"あーあ、ケーキが溶けちゃったなんて……。\n（Tips：ケーキは時間が経つと溶けてしまう）",320,375,24,{align:"center",font:"游明朝",color:"#fff"});
    }else{
      rankAnimation(MessageWindow,queue.getResult("rankb.png"))
      createText(MessageWindow,"なにか忘れてるような……なんだっけ？\n（Tips：ニーシャに渡したかったもの）",320,375,24,{align:"center",font:"游明朝",color:"#fff"});
    }
  })
};
function rankAnimation(parent, image) {
        se18.play();
        rank = new createjs.Bitmap(image);
        rank.regX = image.width / 2;
        rank.regY = image.height / 2;
        // 最初は画面外
        rank.x = -150;
        rank.y = 50;
        // 大きめの状態からスタート
        rank.scaleX = 1;
        rank.scaleY = 1;
        parent.addChild(rank);
        var motion = { t: 0};
    createjs.Tween.get(motion)
        .to({ t: 1 }, 800, createjs.Ease.quartOut)
        .call(() => {
            createjs.Ticker.off("tick", tick);
            se17.play();
            createjs.Tween.get(rank)
                .wait(500)
                .call(()=>{
                  cLock=true;
                  createText(MessageWindow,"クリックorベージリロードで再挑戦する",320,460,18,{align:"center",font:"游明朝",color:"#fff"});
                })
        });
    var tick = () => {
        var t = motion.t;
        var u = 1 - t;
        rank.x =
            u*u*u*(-150) +
            3*u*u*t*(100) +
            3*u*t*t*(350) +
            t*t*t*(220);
        rank.y =
            u*u*u*(-100) +
            3*u*u*t*(400) +
            3*u*t*t*(370) +
            t*t*t*(210);

        var scale = 1 - 0.7 * t;
        rank.scaleX = scale;
        rank.scaleY = scale;
        rank.rotation =360*t

        if (t >= 1) {
            createjs.Ticker.off("tick", tick);
        }
    };
    createjs.Ticker.on("tick", tick);
    return rank;

};
let blinkTimer = null;
let blinkCloseTimer = null;
var Text_pre=[
  {chr:"",word:"……"},
  {chr:"ラビィ",word:"「怖いよ……苦しいよ……」"},
  {chr:"",word:"森の外で出会った人たちは、みんなラビィとは違った。\n外の世界は、無垢なラビィに残酷な現実を突きつけた。"},
  {chr:"ラビィ",word:"「もうツラいのは嫌、助けて！」"},
  {chr:"ラビィ",word:"「助けてよニーシャ！」"},
  {chr:"",word:"ニーシャはラビィの友達。"},
  {chr:"",word:"ニーシャはずっとラビィを助けてくれた。"},
  {chr:"",word:"ニーシャはラビィに幸せな幻想を見せてくれた。"},
  {chr:"",word:"ラビィの感情と引き換えに。"},
  {chr:"",word:"……"},
  {chr:"",word:"幻の中をさまよう日々。\n心はもう痛くなかった。"},
  {chr:"",word:"いつもの部屋で過ごす夢。\n胸は虚ろになっていった。"},
  {chr:"",word:"どれぐらい過ごしていただろう。\nラビィは夢と現の区別もつかなくなっていた。"},
  {chr:"",word:"そんな時のことだった。"},
  {chr:"",word:"ニーシャにあげたはずの感情。"},
  {chr:"",word:"埋もれた感情が、\n少しの間だけ戻ってきた。"},
  {chr:"ラビィ",word:"「あああああああああああああ！！」"},
  {chr:"",word:"感情の荒波が無防備なラビィを襲った。"},
  {chr:"",word:"身悶える中、ラビィはニーシャを感じた。"},
  {chr:"ニーシャ",word:"「あの子に会いたいな……」"},
  {chr:"",word:"自分を守ってくれている友達の心の声。"},
  {chr:"",word:"幻聴だったのかもしれない。\nそれでもラビィはその声を確かに聞いた。"},
  {chr:"ラビィ",word:"「そんなの……ムリだよ」"},
  {chr:"ラビィ",word:"「外は……怖い」"},
  {chr:"ラビィ",word:"（それでも……）"},
  {chr:"ラビィ",word:"「ニーシャ」"},
  {chr:"ラビィ",word:"「このままじゃ……、\nニーシャに甘えっぱなしじゃダメだよね」"},
  {chr:"",word:"涙を拭って、ラビィは立ち上がった。"},
  {chr:"",word:"幻の向こうにいるニーシャに、思いを伝えるために。"},
  {chr:"",word:"fade"},
  {chr:"",word:"……"},
  {chr:"",word:"嵐は収まり、再び感情がどこかへ抜けていった。"},
  {chr:"ラビィ",word:"「今、何が起こったんだろ？」"},
  {chr:"ラビィ",word:"「どうしてこんなに袖が濡れてるの？」"},
  {chr:"",word:"理由はもうわからなくなっていたけど、\nとにかくラビィはこの部屋から出ようとしていた。"},
  {chr:"ラビィ",word:"「行こう」"},
  {chr:"",word:"start"}
]
var Text_post=[
  {chr:"",word:"ev8"},
  {chr:"",word:"ev9"},
  {chr:"",word:"ev10"},
  {chr:"",word:"start"},
  {chr:"",word:"やっと思い出した。"},
  {chr:"",word:"私が「外」に出たかった理由。"},
  {chr:"ニーシャ",face:1,word:"「ラビィ、どうしたの？」"},
  {chr:"ニーシャ",word:"「私が全部守るから、\n　ラビィは鏡の中にいればいいんだよ」"},
  {chr:"ラビィ",word:"「あのね、ニーシャ」"},
  {chr:"ラビィ",word:"「私、ニーシャの声が聞こえたの」"},
  {chr:"ラビィ",word:"「『あの子に会いたいな……』って」"},
  {chr:"ニーシャ",face:0,word:"「それは……！」"},
  {chr:"ラビィ",word:"「ニーシャが私を守るって言ってくれてから、\n　痛いのも、辛いのもなくなって、幸せな夢を見ていたよ」"},
  {chr:"ラビィ",face:1,word:"「だけど、ずっと夢を見てるだけじゃ\n　永遠にニーシャに会えない気がして……」"},
  {chr:"ラビィ",word:"「だからね、えぇっと……」"},
  {chr:"ラビィ",word:"「ニーシャにあげた感情を、\n　もう一度ラビィにわけてほしい！」"},
  {chr:"ニーシャ",face:2,word:"「ラビィ……」"},
  {chr:"ニーシャ",face:1,word:"「私、ラビィに謝らないといけない」"},
  {chr:"ニーシャ",word:"「ラビィの本当の気持ちを聞く前に\n　ラビィの感情を奪ってしまった」"},
  {chr:"ニーシャ",word:"「ごめんね。全然ラビィのことを分かってあげられなかったね」"},
  {chr:"ラビィ",word:"「ううん、そんなことないよ」"},
  {chr:"ラビィ",word:"「外の世界が辛くてワガママ言ったのは\n　ラビィの方だもん」"},
  {chr:"ニーシャ",word:"「でも、無理してない？\n　外の世界は悪い敵でいっぱいなんだよ」"},
  {chr:"ラビィ",word:"「う～ん……。\n　怖くないって言ったらウソになるけど……」"},
  {chr:"ラビィ",word:"「夢の中で過ごしてみて気づいたことがあるよ」"},
  {chr:"ラビィ",word:"「かくれんぼしてる宝物を見つけたり、扉を開けたり、\n　宝箱をわくわくしながら開けたり……」"},
  {chr:"ラビィ",word:"「なんて言うんだっけ？　それがね、楽しいの！」"},
  {chr:"ニーシャ",word:"「冒険。冒険だよ」"},
  {chr:"ラビィ",word:"「そう、冒険！」"},
  {chr:"ラビィ",word:"「ニーシャと一緒に、\n　もっともっといっぱい冒険がしたい！」"},
  {chr:"ラビィ",word:"「外の世界は怖いこともあったけど、\n　それができるのも、外の世界でしょ？」"},
  {chr:"ニーシャ",face:2,word:"「……ありがとう、ラビィ。\n　そんな風に言ってくれて」"},
  {chr:"ニーシャ",face:1,word:"「じゃあ、これからは」"},
  {chr:"ニーシャ",word:"「二人で歩いて行こう」"},
  {chr:"ラビィ",word:"「うん！！」"},
  {chr:"ラビィ",word:"「あ！　あとね、あとね！」"},
  {chr:"",word:"select"},
  {chr:"ラビィ",word:"（ニーシャに渡すものがあるかな……？）"},
]
var Text_cakeA=[
  {chr:"ニーシャ",face:0,word:"「こ、これは……ッ！」"},
  {chr:"ラビィ",word:"「一緒に食べよう、ね？　ニーシャ」"},
  {chr:"ニーシャ",face:3,word:"「ラビィ……本当にありがとう！」"},
  {chr:"",word:"gameover"}
]
var Text_cakeB=[
  {chr:"ニーシャ",word:"「こ、これは……ケーキ？」"},
  {chr:"ラビィ",word:"「あれぇ？　溶けちゃってる……」"},
  {chr:"ニーシャ",word:"「大丈夫、とっても嬉しいよ！」"},
  {chr:"",word:"gameover"}
]
var Text_cakeC=[
  {chr:"ラビィ",word:"「ううん、あれ？\n　何言おうとしたか忘れちゃった！」"},
  {chr:"ニーシャ",word:"「……ふふ」"},
  {chr:"ラビィ",word:"（間違えたみたい……）"},
  {chr:"",word:"gameover"}
]
function msgHandler2(){
  console.log('msgHandler2',view,mLock,msgstate)
  if(mLock){
    return false;
  }
  mLock=true;
  MessageWindow.removeAllChildren();
  if(view==6){
    //pre
  switch(Text_pre[msgstate].word){
  case "fade":
    var fade = new createjs.Shape();
    fade.graphics.beginFill("white").drawRect(0, 0,550,400);
    fade.alpha=0.8;
    Loadmap.addChild(fade);
    createjs.Tween.get(fade, {override: true})
    .to({alpha:1}, 300, createjs.Ease.cubicInOut)
    .call(()=>{
      createjs.Tween.get(Wallmap, {override: true})
      .wait(500)
      .to({alpha:1}, 500, createjs.Ease.cubicInOut)
    })
    mLock=false;
    msgstate+=1;
    msgHandler2();
    break;
  case "start":
    Bgm.fade(Bgm.volume(), 0, 600);
    Bgm.once("fade", function() {
        Bgm.stop();
    });
    se15.play();
    startT = Date.now();
    Loadmap.removeAllChildren();
    Wallmap.alpha=1;
    view = 1;
    printView();
    mistArrow();
    break;
  default:
    se2.play()
    if(Text_pre[msgstate].chr){
    var shape = new createjs.Shape();
      shape.graphics.beginStroke("rgba(250,250,250,0.7)");
      shape.graphics.beginFill("#77095c");
      shape.graphics.drawRoundRect(30, 402, 90, 15, 2, 2);
      MessageWindow.addChild(shape);
    createText(MessageWindow,Text_pre[msgstate].chr,70,402,14,{font:"Kazesawa",color:"#fff",align:"center"});
    }
    createText(MessageWindow,Text_pre[msgstate].word,15,420,20,{font:"Kazesawa",color:"#fff"});
    var t=createText(MessageWindow,"▼",610,445,16,{font:"Kazesawa",color:"#fff"});
    t.alpha=0;
    createjs.Tween.get(t)
    .wait(80)
    .to({y:450,alpha:1},120)
    .call(()=>{
      mLock=false;
    })
    msgstate+=1;
  }
}else if(view==5){
  //post
  if(msgstate==38){
    //cake select
    if(Hand =="cake" && cakestate ==1){//真エンド
      lostItem("cake");
      Text_post=Text_post.concat(Text_cakeA)
    }else if(Hand =="cake"){//Nエンド
      lostItem("cake");
      Text_post=Text_post.concat(Text_cakeB)
    }else{
      cakestate =3;
      Text_post=Text_post.concat(Text_cakeC)
    }
  }
  switch(Text_post[msgstate].word){
  case "ev8":
    var imgA = new createjs.Bitmap(queue.getResult(ev_src[8]));
    imgA.sourceRect = new createjs.Rectangle(0, 0, 230, 480);
    imgA.alpha=0;
    imgA.x=0;
    imgA.y=-20;
    Wallmap.addChild(imgA);
    createjs.Tween.get(imgA)
    .to({y:0,alpha:1},900)
    .wait(100)
    .call(()=>{
      mLock=false;
      msgstate+=1;
    })
    break;
  case "ev9":
    var imgA = new createjs.Bitmap(queue.getResult(ev_src[9]));
    imgA.sourceRect = new createjs.Rectangle(370, 0, 270, 480);
    imgA.alpha=0;
    imgA.x=370;
    imgA.y=20;
    Wallmap.addChild(imgA);
    createjs.Tween.get(imgA)
    .to({y:0,alpha:1},900)
    .wait(100)
    .call(()=>{
      mLock=false;
      msgstate+=1;
    })
  break;
  case "ev10":
    var imgA = new createjs.Bitmap(queue.getResult(ev_src[8]));
    imgA.sourceRect = new createjs.Rectangle(370, 0, 270, 480);
    imgA.alpha=0;
    imgA.x=370;
    imgA.y=0;
    Wallmap.addChild(imgA);
    createjs.Tween.get(imgA)
    .to({alpha:1},900)
    .wait(100)
    .call(()=>{
      mLock=false;
      msgstate+=1;
    })
  break;
  case "start":
    //preのstartとはちがうよ
    closedEye = new createjs.Bitmap(queue.getResult(ev_src[2]));
    closedEye.sourceRect = new createjs.Rectangle(435, 145, 70, 60);
    closedEye.x=435*55/64;
    closedEye.y=145*40/48;
    closedEye.scaleX=55/64;
    closedEye.scaleY=40/48;
    closedEye.visible=false;
    //
    function autoBlink() {
    const wait = 2000 + Math.random() * 4000;
    blinkTimer = setTimeout(() => {
        // 閉じる
        closedEye.visible = true;
        blinkCloseTimer = setTimeout(() => {
        closedEye.visible = false;
        // 次の瞬き
        autoBlink();
        }, 80 + Math.random() * 100);
    }, wait);
  };
  function stopBlink() {
    clearTimeout(blinkTimer);
    clearTimeout(blinkCloseTimer);
    blinkTimer = null;
    blinkCloseTimer = null;
    closedEye.visible = false;
  }
  autoBlink();
    //
    var fade = new createjs.Shape();
    fade.graphics.beginFill("white").drawRect(0, 0,640,480);
    fade.alpha=0;
    MessageWindow.addChild(fade);
    createjs.Tween.get(fade)
    .to({alpha:1},500)
    .wait(500)
    .to({alpha:0},700)
    .call(()=>{
      MessageWindow.removeChild(fade);
      mLock=false;
      msgstate+=1;
    })
    var imgA = drawBitmap(Loadmap,queue.getResult(ev_src[7]),0,0,640,480);
    imgA.alpha=0;
    createjs.Tween.get(imgA)
    .to({alpha:1},500)
    .wait(100)
    .call(()=>{
      var fade = new createjs.Shape();
      fade.graphics.beginFill("black").drawRect(0, 0,180,37.5);
      fade.alpha=0.2;
      Loadmap.addChild(fade);
      var Esc = new createjs.Bitmap("Esc_enter.png");
      Esc.scale=0.5;
      Loadmap.addChild(Esc);
      Loadmap.removeChild(img);
      Wallmap.removeAllChildren();
      imgF = drawBitmap(Wallmap,queue.getResult(ev_src[2]),0,0,550,400)
      MessageWindow.visible=true;
      Itembar.visible=true;
    })
    break;
  case "gameover":
    gameover();
    break;
  case "select":
    var fade = new createjs.Shape();
    fade.graphics.beginFill("black").drawRect(0, 0,550,400);
    fade.alpha=0.6;
    MessageWindow.addChild(fade);
    msgstate+=1;
  default:
    se2.play();
    //表情差分
    if (Object.hasOwn(Text_post[msgstate], "face")) {
      Wallmap.removeChild(imgF);
      imgF = drawBitmap(Wallmap,queue.getResult(ev_src[Text_post[msgstate].face]),0,0,550,400);
      Wallmap.removeChild(closedEye);
      Wallmap.addChild(closedEye);
      if(Text_post[msgstate].face==3){stopBlink();}
    }
    if(Text_post[msgstate].chr){
    var shape = new createjs.Shape();
      shape.graphics.beginStroke("rgba(250,250,250,0.7)");
      shape.graphics.beginFill("#77095c");
      shape.graphics.drawRoundRect(30, 402, 90, 15, 2, 2);
      MessageWindow.addChild(shape);
    createText(MessageWindow,Text_post[msgstate].chr,70,402,14,{font:"Kazesawa",color:"#fff",align:"center"});
    }
    createText(MessageWindow,Text_post[msgstate].word,15,420,20,{font:"Kazesawa",color:"#fff"});
    var t=createText(MessageWindow,"▼",610,445,16,{font:"Kazesawa",color:"#fff"});
    t.alpha=0;
    createjs.Tween.get(t)
    .wait(80)
    .to({y:450,alpha:1},120)
    .call(()=>{
      mLock=false;
    })
    msgstate+=1;
    break;
  }
}
}
function createText(parent, text, x, y, size = 24, option = {}) {
      const t = new createjs.Text(
          text,
          (option.bold ? "bold " : "") +
          size + "px " +
          (option.font || "'Century Gothic'"),
          option.color || "#000"
      );
      t.x = x;
      t.y = y;
      t.outline = option.outline || 0;
      t.rotation = option.rotation || 0;
      t.textAlign = option.align || "left";
      t.textBaseline = option.baseline || "top";
      if(option.alpha!=null) t.alpha=option.alpha;
      parent.addChild(t);
      return t;
  };
function createArrow(parent,x1,y1,x2,y2,linelength=2,colorA="#0080ff",colorB="#68ceed"){
    var s=new createjs.Shape();
    s.graphics
        .beginFill(colorA)
        .beginStroke(colorB)
        .setStrokeStyle(linelength)
        .moveTo(0, 0)
        .lineTo(x1, y1)
        .lineTo(x2, y2)
        .lineTo(0, 0)
    parent.addChild(s);
    return s;
}
function drawBitmap(parent, image, x, y, width, height) {
    var bitmap = new createjs.Bitmap(image);
    bitmap.x = x;
    bitmap.y = y;
    bitmap.scaleX = width / image.width;
    bitmap.scaleY = height / image.height;
    parent.addChild(bitmap);
    return bitmap;
}
function createButton(text, width, height, keyColorA="#68ceed", keyColorB="#0080ff", keyColorC="#688bed", keyColorD="#043342"){
  // ボタン要素をグループ化 keycolor A,B：通常時　C,D：活性化時
  let button = new createjs.Container();
  button.mouseChildren=false;
  button.corsor="pointer";
  // 通常時の座布団を作成
  var bgUp = new createjs.Shape();
  bgUp.graphics
  .setStrokeStyle(1.0)
  .beginStroke(keyColorA)
  .beginFill(keyColorB)
  .drawRoundRect(0.5, 0.5, width - 1.0, height - 1.0, 2)
  .beginFill(keyColorA)
  .moveTo(1,1)
  .lineTo(width*3/7-1,1)
  .lineTo(1,height*4/15-1)
  .lineTo(1,height*5/12-1)
  .lineTo(1,1)
  .moveTo(1,1)
  .lineTo(width*5/17-1,1)
  .lineTo(1,height*5/12-1)
  .lineTo(1,1)
  button.addChild(bgUp);
  bgUp.alpha = 1; // 表示する
  // ロールオーバー時の座布団を作成
  var bgOver = new createjs.Shape();
  bgOver.graphics
  .setStrokeStyle(1.0)
  .beginStroke(keyColorC)
  .beginFill(keyColorD)
  .drawRoundRect(0.5, 0.5, width - 1.0, height - 1.0, 2)
  .beginFill(keyColorC)
  .moveTo(1,1)
  .lineTo(width*3/7-1,1)
  .lineTo(1,height*4/15-1)
  .lineTo(1,height*5/12-1)
  .lineTo(1,1)
  .moveTo(1,1)
  .lineTo(width*5/17-1,1)
  .lineTo(1,height*5/12-1)
  .lineTo(1,1)
  bgOver.alpha = 0;
  button.addChild(bgOver);
  // ラベルを作成
  var label = new createjs.Text(text, "18px '游明朝'", "#ffffff");
  label.x = width / 2;
  label.y = height / 2;
  label.textAlign = "center";
  label.textBaseline = "middle";
  button.addChild(label);
  // ロールオーバーイベントを登録
  function handleMouseOver(event) {
    bgUp.alpha = 0;
    bgOver.alpha = 1;
    label.color = "white";
  }
  function handleMouseOut(event) {
    bgUp.alpha = 1;
    bgOver.alpha = 0;
    label.color = "white";
  }
  button._isHover = false;
  button.updateHover = function(){
      const pt = this.globalToLocal(stage.mouseX, stage.mouseY);
      const hit = this.hitTest(pt.x, pt.y);
        if (hit === this._isHover) return;
      this._isHover = hit;
      bgUp.alpha   = hit ? 0 : 1;
      bgOver.alpha = hit ? 1 : 0;
  }
  return button;      
}
};

