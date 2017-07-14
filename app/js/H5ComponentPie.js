/**
 * Created by zhang on 7/13/2017.
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

class H5ComponentPie {
    constructor(cfg = {}, name) {
        let component = new H5ComponentBase(cfg, name)
        let w = cfg.width
        let h = cfg.height
        //底层
        let canvas = document.createElement("canvas")
        var ctx = canvas.getContext("2d")
        canvas.width = ctx.width = w
        canvas.height = ctx.height = h
        //数据层
        let canvas2 = document.createElement("canvas")
        let ctx2 = canvas2.getContext("2d")
        canvas2.width = ctx2.width = w
        canvas2.height = ctx2.height = h
        //遮罩层
        let canvas3 = document.createElement("canvas")
        let ctx3 = canvas3.getContext("2d")
        canvas3.width = ctx3.width = w
        canvas3.height = ctx3.height = h
        
        let pieItems = cfg.data.length
        let r = w / 2
        
        
        //底层
        
        ctx.beginPath()
        ctx.fillStyle = "#eee"
        ctx.strokeStyle = "#eee"
        ctx.lineWidth = 1
        ctx.arc(r, r, r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
        
        //数据层
        
        let colors = ["red", "green", "blue", "orange", "gray"]
        let sAngel = 1.5 * Math.PI
        let eAngel = 0
        let aangel = Math.PI * 2
        
        for (let i = 0; i < pieItems; i++) {
            let item = cfg.data[i]
            
            let color = item[2]
            eAngel = sAngel + aangel * item[1]
            
            ctx2.beginPath()
            ctx2.fillStyle = color
            ctx2.strokeStyle = color
            ctx2.lineWidth = 1
            
            ctx2.moveTo(r, r)
            ctx2.arc(r, r, r, sAngel, eAngel)
            ctx2.fill()
            ctx2.stroke()
            
            sAngel = eAngel
            
            //加入文本
            
            let text = $(`<div class="text">${item[0]}</div>`)
            let per = $(`<div class="per">${item[1] * 100 + "%"}</div>`)
            text.append(per)
            
            let x = r + Math.sin(.6 * Math.PI - sAngel) * r
            let y = r + Math.cos(.6 * Math.PI - sAngel) * r
            
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
            
            if (item[2]) {
                text.css("color", item[2])
            }
            
            text.css("opacity", 0)
            text.css("transition", `all 1s ${i * 0.5}s`)
            
            component.append(text)
        }
        
        //遮罩动画层
        ctx3.fillStyle = "#fff"
        ctx3.strokeStyle = "#fff"
        function draw(per) {
            if (per >= 1) {
                component.find(".text").css("opacity", 1)
            }
            if (per <= 0.01) {
                component.find(".text").css("opacity", 1)
            }
            ctx3.clearRect(0, 0, w, h)
            ctx3.beginPath()
            ctx3.moveTo(r, r)
            if (per <= 0) {
                ctx3.arc(r, r, r + 5, sAngel, sAngel + 2 * Math.PI * per)
                
            } else {
                ctx3.arc(r, r, r + 5, sAngel, sAngel + 2 * Math.PI * per, true)
            }
            
            ctx3.fill()
            
            if (per >= 1) {
                component.find(".text").css("opacity", 1)
            }
            if (per <= 0.01) {
                component.find(".text").css("opacity", 0)
            }
        }
        
        
        draw(1)
        
        //画图结束
        
        component.append(canvas)
        component.append(canvas2)
        component.append(canvas3)
        
        //生长动画
        let animaPer = 0.01
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

export default H5ComponentPie;