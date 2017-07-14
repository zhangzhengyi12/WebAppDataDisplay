/**
 * Created by zhang on 7/12/2017.
 */
/**
 * Created by zhang on 7/11/2017.
 */
/**
 * Created by zhang on 7/10/2017.
 */
/**
 * Created by zhang on 7/9/2017.
 */
import H5ComponentBase from "./H5ComponentBase"

class H5ComponentRader {
    constructor(cfg = {}, name) {
        let component = new H5ComponentBase(cfg, name)
        let w = cfg.width
        let h = cfg.height
        let canvas = document.createElement("canvas")
        var ctx = canvas.getContext("2d")
        canvas.width = ctx.width = w
        canvas.height = ctx.height = h
        let canvas2 = document.createElement("canvas")
        let ctx2 = canvas2.getContext("2d")
        canvas2.width = ctx2.width = w
        canvas2.height = ctx2.height = h
        let raderItems = cfg.data.length
        let r = w / 2
        ctx.lineWidth = 0
        ctx.fillStyle = "#f1f9ff"
        
        //基本图形绘制
        let isblue = false
        for (let s = 10; s > 0; s--) {
            ctx.beginPath()
            for (let i = 0; i < raderItems; i++) {
                let rad = (2 * Math.PI / 360) * (360 / raderItems) * i
                let x = r + Math.sin(rad) * r * (s / 10)
                let y = r + Math.cos(rad) * r * (s / 10)
                ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.fillStyle = (isblue = !isblue) ? "#99c0ff" : "#f1f9ff"
            ctx.fill()
        }
        ctx.closePath()
        
        for (let i = 0; i < raderItems; i++) {
            let rad = (2 * Math.PI / 360) * (360 / raderItems) * i
            let x = r + Math.sin(rad) * r
            let y = r + Math.cos(rad) * r
            
            ctx.moveTo(x, y)
            ctx.lineTo(r, r)
            
            let text = $(`<div class='Text'>${cfg.data[i][0]}</div>`)
            if (x > w / 2) {
                text.css("left", x / 2)
            } else {
                text.css("right", (w - x) / 2)
            }
            
            if (y > h / 2) {
                text.css("top", y / 2)
            } else {
                text.css("bottom", (h - y) / 2)
            }
            
            if (cfg.data[i][2]) {
                text.css("color", cfg.data[i][2])
            }
            
            text.css("transition", `all 1s ${i * 0.5}s`)
            
            component.append(text)
            
        }
        ctx.strokeStyle = "#e0e0e0"
        ctx.stroke()
        
        //数据层
        ctx2.strokeStyle = "#f00"
        function draw(per) {
            if (per >= 1) {
                component.find(".Text").css("opacity", 1)
            } else {
                component.find(".Text").css("opacity", 0)
                
            }
            ctx2.clearRect(0, 0, w, h)
            ctx2.beginPath()
            for (let i = 0; i < raderItems; i++) {
                let itemRate = cfg.data[i][1] * per
                let rad = (2 * Math.PI / 360) * (360 / raderItems) * i
                let x = r + Math.sin(rad) * r * itemRate
                let y = r + Math.cos(rad) * r * itemRate
                if (i === 0) {
                    ctx2.moveTo(x, y)
                }
                ctx2.lineTo(x, y)
            }
            
            ctx2.closePath()
            ctx2.stroke()
            
            ctx2.fillStyle = "#f00"
            for (let i = 0; i < raderItems; i++) {
                let itemRate = cfg.data[i][1] * per
                let rad = (2 * Math.PI / 360) * (360 / raderItems) * i
                let x = r + Math.sin(rad) * r * itemRate
                let y = r + Math.cos(rad) * r * itemRate
                ctx2.beginPath()
                ctx2.arc(x, y, 5, 0, 2 * Math.PI)
                ctx2.fill()
                ctx2.closePath()
            }
            
            ctx2.stroke()
        }
        
        
        //ctx.stroke()
        
        
        //画线 中心部分
        //ctx.beginPath()
        //for(let i=0 ;i<raderItems;i++){
        //    let rad = (2*Math.PI/360) * (360 / raderItems) * i
        //    let x = r + Math.sin(rad) * r;
        //    let y = r + Math.cos(rad) * r
        //
        //    ctx.moveTo(x,y)
        //
        //    ctx.lineTo(r,r)
        //    if(i === raderItems-1){
        //        ctx.lineTo(raderLineUpTMP.x,raderLineUpTMP.y)
        //    }
        //}
        //ctx.stroke()
        //画图部分 per是一个百分百数
        
        
        draw(0.5)
        
        //画图结束
        
        component.append(canvas)
        component.append(canvas2)
        
        //生长动画 退场
        let animaPer = 0
        let stop;
        component.on("onLoad", function f() {
            if (animaPer > 1) {
                return
            }
            animaPer += 0.01
            draw(animaPer)
            stop = window.requestAnimationFrame(f);
        })
        
        component.on("onLeave", function f() {
            if (animaPer <= 0) {
                return
            }
            animaPer -= 0.02
            draw(animaPer)
            stop = window.requestAnimationFrame(f);
        })
        
        
        return component
        
    }
}

export default H5ComponentRader;