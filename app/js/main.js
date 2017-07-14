/**
 * Created by zhang on 7/8/2017.
 */

import H5 from "./H5";

$(() => {
    
    let h5 = new H5();
    h5.whenAddPage = function () {
        this.addComponent("slide_up", {
            bg: "img/footer.png",
            css: {
                left: 0,
                bottom: -20,
                width: '100vw',
                height: "6vw",
                zIndex: 999
            },
            animateIn: {opacity: 1, bottom: "0px"},
            animateOut: {
                opacity: 0,
                bottom: "-20px"
            }
        })
    }
    
    h5.addPage("face")
        .addComponent("topic", {
            text: "",
            width: 395,
            height: 130,
            bg: "img/face_logo.png",
            css: {
                opacity: 0
            },
            center: true,
            animateIn: {top: 100, opacity: 1},
            animateOut: {top: 0, opacity: 0}
        })
        .addComponent("slogan", {
            center: true,
            width: 365,
            height: 99,
            bg: "img/face_slogan.png",
            css: {opacity: 0, top: 180},
            animateIn: {left: '50%', opacity: 1},
            animateOut: {left: "0%", opacity: 0},
            delay: 700
        })
        .addComponent("face_img_left", {
            width: 370,
            height: 493,
            bg: "img/face_img_left.png",
            css: {opacity: 0, left: -50, bottom: -20},
            animateIn: {opacity: 1, left: 0, bottom: 0},
            animateOut: {
                opacity: 0, left: -50, bottom:0
            },
            delay: 1500
        })
        .addComponent("face_img_right", {
            width: 276,
            height: 449,
            bg: "img/face_img_right.png",
            css: {opacity: 0, right: -50, bottom: -20},
            animateIn: {opacity: 1, right: 0, bottom: 0},
            animateOut: {
                opacity: 0, right: -20, bottom:0
            },
            delay: 2000
        })
        .addPage("")
        .addComponent("caption", {
            text: "语言调查",
        })
        .addComponent("text", {
            width: 500,
            height: 30,
            center: true,
            text: "互联网热门语言调查",
            css: {
                top: 200,
                opacity: 0,
                textAlign: "center",
                color: "red",
                fontSize: "26px"
            },
            animateIn: {
                opacity: 1,
                top: 160
            },
            animateOut: {
                opacity: 0,
                top: 240
            }
        })
        .addComponent("description", {
            center: true,
            width: 481,
            height: 295,
            bg: "img/description_bg.gif",
            text: "TIOBE编程语言社区排行榜是编程语言流行趋势的一个指标，每月更新，这份排行榜排名基于互联网上有经验的程序员、课程和第三方厂商的数量.排名使用著名的搜索引擎（诸如Google、MSN、Yahoo!）进行计算。",
            css: {
                opacity: 0,
                padding: "15px 10px 10px 10px",
                color: "#fff",
                fontSize: "15px",
                lineHeight: "18px",
                textAlign: "justify",
                top: 280
            },
            animateIn: {opacity: 1, top: 220},
            animateOut: {opacity: 0, top: 240},
            delay: 1000
            
        })
        .addComponent("people", {
            center: true,
            width: 515,
            height: 305,
            bg: "img/p1_people.png",
            css: {
                opacity: 0,
                bottom: 60
            },
            animateIn: {opacity: 1, bottom: 120},
            animateOut: {opacity: 0, bottom: 60},
            delay: 500
        })
        .addPage("")
            .addComponent("caption", {
                text: "前端语言方向",
            })
            .addComponent("polyLine",{
                type:"polyline",
                data:[['ES5',.6,"#ff7676"],["HTML",.2],['ES6',.5,"#ff7676"],['CSS3',.3,"#ff7676"]],
                width:530,
                height:300,
                center:true,
                css:{top:200,opacity:0},
                animateIn:{opacity:1,top:250},
                animateOut:{opacity:0,top:100}
           })
        .addComponent("message",{
            text:"ES6的使用率不断增加",
            css:{
                opacity:0,top:140,textAlign:"center",width:"100%",color:"#ff7676"
            },
            animateIn:{opacity:1},
            animateOut:{opacity:0},
            delay:1000,
        })
        .addPage("")
            .addComponent("caption", {
                text: "后端语言分布",
            })
        .addComponent("pie",{
            type:"pie",
            data:[['Ruby',.2,"#ff7676"],["Java",.4,"#5ddbd8"],['Python',.1,"#99c1ff"],['Clojure',.3,"#ffad69"]],
            width:300,
            height:300,
            center:true,
            css:{top:200,opacity:0},
            animateIn:{opacity:1,top:250},
            animateOut:{opacity:0,top:100}
        })
        .addComponent("message",{
            text:"Java具有较大比重",
            css:{
                opacity:0,top:140,textAlign:"center",width:"100%",color:"#ff7676"
            },
            animateIn:{opacity:1},
            animateOut:{opacity:0},
            delay:2000,
        })
        .addPage("")
            .addComponent("caption", {
                text: "前端框架分布",
            })
            .addComponent("bar",{
                type:"bar",
                data:[['Vue',.4,"#ff7676"],["React",.5,"#5ddbd8"],['jQuery',.3,"#99c1ff"],['angularjs',.5,"#ffad69"],["React",.5,"#5ddbd8"],['jQuery',.6,"#99c1ff"]],
                width:700,
                height:600,
                center:true,
                css:{top:200,opacity:0},
                animateIn:{opacity:1,top:250},
                animateOut:{opacity:0,top:100}
            })
            .addComponent("message",{
                text:"jQquey使用率第一",
                css:{
                    opacity:0,top:140,textAlign:"center",width:"100%",color:"#ff7676"
                },
                animateIn:{opacity:1},
                animateOut:{opacity:0},
                delay:2000,
            })
        .addPage("")
        .addComponent("caption", {
            text: "查看你的技能水平",
        })
        .addComponent("rader",{
            type:"rader",
            data:[['Vue',.4,"#ff7676"],["React",.2,"#5ddbd8"],['jQuery',.3,"#99c1ff"],['Canvas',.8,"#ffad69"],["WebGL",.5,"#5ddbd8"],['Liunx',.1,"#99c1ff"]],
            width:500,
            height:600,
            center:true,
            css:{top:200,opacity:0},
            animateIn:{opacity:1,top:250},
            animateOut:{opacity:0,top:100}
        })
        .addComponent("message",{
            text:"继续努力，加油！",
            css:{
                opacity:0,top:140,textAlign:"center",width:"100%",color:"#ff7676"
            },
            animateIn:{opacity:1},
            animateOut:{opacity:0},
            delay:2000,
        })
        .addPage("tail")
        .addComponent("logo", {
            center: true,
            width: 359,
            height: 129,
            bg: "img/tail_logo.png",
            css: {
                opacity: 0,
                top: 210
            },
            animateIn: {opacity: 1, top: 210},
            animateOut: {opacity: 0, top: 240},
            delay: 500
        })
        .addComponent("slogan", {
            center: true,
            width: 314,
            height: 46,
            bg: "img/tail_slogan.png",
            css: {
                opacity: 0,
                top: 280,
                left: "0%"
            },
            animateIn: {opacity: 1, left: "50%"},
            animateOut: {opacity: 0, left: "0%"},
            delay: 500
        })
        .addComponent("share", {
            width: 128,
            height: 120,
            bg: "img/tail_share.png",
            css: {
                opacity: 0,
                top: 110,
                right: 110
            },
            animateIn: {opacity: 1, top: 10, right: 10},
            animateOut: {opacity: 0, top: 110, right: 110},
            delay: 500
        })
        .addComponent("back", {
            width: 52,
            height: 50,
            bg: "img/tail_back.png",
            center: true,
            'onclick': function () {
                $.fn.fullpage.moveTo(1)
            }
        })
        .H5Loader();
    
    window.onload = function () {
        $("#loading").remove();
    }
    
    
    //let H5ComPonetText = new H5ComponnetBase({
    //    "text":"hello",
    //    "type":"Base",
    //    "width":"370",
    //    "height":"493",
    //    "bg":"../img/face_img_left.png",
    //    "css":{
    //        opacity:0
    //    },
    //    'center':true,
    //    'animateIn':{
    //        bottom:80,
    //        opacity:1
    //    },
    //    'animateOut':{
    //        bottom:0,
    //        opacity:0
    //    }
    //},"Text")
    //$(".page3").append(H5ComPonetText);


//TODO:回调全部独立成一个组件 需要有一个分发机制
})
    
