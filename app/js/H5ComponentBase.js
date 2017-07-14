/**
 * Created by zhang on 7/9/2017.
 */

class H5ComponentBase {
    constructor(cfg = {}, name) {
        let clsType = " h5_component" + cfg.type;
        let myName = " h5_component_name_" + name;
        let id = ("id_" + Math.random()).replace(".", "_");
        
        let component = $(`<div class="h5_component ${clsType} ${myName}" id="${id}"></div>`)
        
        cfg.text && component.text(cfg.text);
        cfg.width && component.width(cfg.width / 2)
        cfg.height && component.height(cfg.height / 2)
        
        cfg.css && component.css(cfg.css)
        cfg.bg && component.css("backgroundImage", "url(" + cfg.bg + ")")
        cfg.center && component.css({
            left: "50%",
            marginLeft: (cfg.width / 4 * -1) + "px"
        })
        
        if (typeof cfg.onclick === "function") {
            component.click(cfg.onclick)
        }
        
        //触发事件
        component.on("onLeave", function () {
            
            setTimeout(function () {
                component.addClass(clsType + "_leave").removeClass(clsType + "_load");
                cfg.animateOut && component.animate(cfg.animateOut)
            }, cfg.delay || 0)
            return false
        });
        component.on("onLoad", function () {
            setTimeout(function () {
                component.addClass(clsType + "_load").removeClass(clsType + "_leave");
                cfg.animateIn && component.animate(cfg.animateIn)
            }, cfg.delay || 0)
            
            return false
        });
        
        
        return component;
        
    }
}

export default H5ComponentBase;