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

class H5ComponentPolyline{
    constructor(cfg = {},name){
        let component = new H5ComponentBase(cfg,name)
        let w = cfg.width
        let h = cfg.height
        let canvas = document.createElement("canvas")
        var ctx = canvas.getContext("2d")
        canvas.width = ctx.width =  w
        canvas.height = ctx.height =  h
        let canvas2 = document.createElement("canvas")
        let ctx2 = canvas2.getContext("2d")
        canvas2.width = ctx2.width =  w
        canvas2.height = ctx2.height =  h
        let polylineItems = cfg.data.length
        
        //画图部分 per是一个百分百数
        function draw(per) {
            if(per >=1 ){
                component.find(".text").css("opacity",1)
            }
            if(per <=0 ){
                component.find(".text").css("opacity",0)
            }
            ctx2.clearRect(0,0,w,h)
            let step = 10
            ctx.beginPath()
            ctx.lineWidth = 3
            ctx.strokeStyle = "#aaaaaa"
    
            //横线
            for(let i=0 ; i<=step ; i++){
                let currentY = i*(h/step)
                ctx.moveTo(0,currentY)
                ctx.lineTo(w,currentY)
            }
            //竖线
            for(let i=0 ; i<=polylineItems+1 ; i++){
                let currentX = i*(w/(polylineItems+1))
                ctx.moveTo(currentX,0)
                ctx.lineTo(currentX,h)
        
            }
            
            ctx.stroke();
    
            //折线图
            ctx2.beginPath()
            ctx2.lineWidth = 5
            ctx2.strokeStyle = "#ff8878"
            let x = 0
            let y = 0
            let itemWidth = (w/(polylineItems+1))
            ctx2.font="25px Georgia";
            
            //画圆和数值
            let polylineStrokeTMP = {};
            for(let i=0 ; i<polylineItems ; i++){
                let item = cfg.data[i]
                x = i*itemWidth + 1*itemWidth
                y = h-(item[1] * h *per)
                if(i===0){
                    polylineStrokeTMP.x = x
                    polylineStrokeTMP.y = y
                }
                ctx2.moveTo(x,y)
                ctx2.arc(x,y,5,0,2*Math.PI)
                ctx2.fillStyle = item[2]?item[2]:"#ff8878"
                ctx2.fillText(item[1]*100 + "%",x-18,y-30)
            }
    
            //画折线
            ctx2.moveTo(polylineStrokeTMP.x,polylineStrokeTMP.y)
            for(let i=0; i<polylineItems ; i++){
                let item = cfg.data[i]
                x = i*itemWidth + 1*itemWidth
                y = h-(item[1] * h *per)
                ctx2.lineTo(x,y)
            }
            ctx2.stroke()
    
            ctx2.lineWidth = "1"
            ctx2.lineTo(x,h)
            ctx2.lineTo(polylineStrokeTMP.x,h)
            ctx2.fillStyle = ("rgba(255, 136, 120, 0.37)")
            ctx2.fill()
    
            ctx2.stroke()
        }
    

        for(let i =0 ; i<polylineItems ; i++){
            let text = $(`<div class="text"></div>`)
            let left = (i*(w/(polylineItems+1)) + 1*(w/(polylineItems+1)))/2
            text.text(cfg.data[i][0])
            text.css("bottom","-20px").css("left",left+"px").css("width","80px").css("marginLeft","-40px");
            component.append(text)
        }
    
        ctx.stroke();
    
    
        draw(.0)
        
        //画图结束
        
        component.append(canvas)
        component.append(canvas2)
        
        //生长动画
        let animaPer = 0
        let stop;
        component.on("onLoad",function f() {
            if(animaPer >1){
                return
            }
            animaPer+=0.01
            draw(animaPer)
            stop =  window.requestAnimationFrame(f);
        })
    
        component.on("onLeave",function f() {
            if(animaPer <= 0){
                return
            }
            animaPer-=0.02
            draw(animaPer)
            stop =  window.requestAnimationFrame(f);
        })
        
        
        return component
        
    }
}

export default H5ComponentPolyline;