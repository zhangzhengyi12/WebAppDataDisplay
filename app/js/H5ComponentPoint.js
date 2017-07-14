/**
 * Created by zhang on 7/10/2017.
 */
/**
 * Created by zhang on 7/9/2017.
 */
import H5ComponentBase from "./H5ComponentBase"

class H5ComponentPoint{
    constructor(cfg = {},name){
        let component = new H5ComponentBase(cfg,name);
        let base  = cfg.data[0][1]
        
        // a points add to component
        $.each(cfg.data,(idx,item)=>{
            let point = $(`<div class="point point_${idx}"></div>`)
            let per = (item[1]/base*100) + "%"
            let color = item[2]
            let postionX = item [3]
            let postionY = item [4]
            let name = $(`<div class="name">${item[0]}</div>`)
            let rate = $(`<div class="per">${item[1] * 100+"%"}</div>`)
            
            name.append(rate)
            point.append(name)
            point.width(per).height(per)
            color && point.css({backgroundColor:color})
            if(postionX!==undefined && postionY){
                point.css("left",postionX).css("top",postionY)
            }
            component.append(point)
        })
        
        return component;
        
    }
}

export default H5ComponentPoint;