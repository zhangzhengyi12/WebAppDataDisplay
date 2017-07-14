/**
 * Created by zhang on 7/10/2017.
 */
import H5ComponentBase from "./H5ComponentBase"
import H5ComponentPoint from "./H5ComponentPoint";
import H5ComponentBar from "./H5ComponentBar";
import H5ComponentPolyline from "./H5ComponentPolyline";
import H5ComponentRader from "./H5ComponentRader";
import H5ComponentPie from "./H5ComponentPie";

class H5 {
    constructor() {
        
        //创建页面组件的基本形态
        this.id = ("h5_" + Math.random()).replace(".", "_")
        this.el = $(`<div class="h5" id="${this.id}"></div>`).hide();
        $("body").append(this.el);
        this.page = [];
        
    }
    
    addPage(name, text) {
        
        let page = $(`<div class="h5_page section"></div>`)
        name && page.addClass("h5_page_" + name);
        text && page.text(text);
        
        this.page.push(page);
        this.el.append(page);
        
        if (typeof this.whenAddPage === "function") {
            this.whenAddPage()
        }
        return this;
    }
    
    addComponent(name, cfg = {}) {
        let component;
        let targetPage = this.page[this.page.length - 1];
        cfg = $.extend({
            type: "base"
        }, cfg)
        
        
        switch (cfg.type) {
            case "base":
                component = new H5ComponentBase(cfg, name)
                break;
            case "point":
                component = new H5ComponentPoint(cfg, name)
                break;
            case "bar" :
                component = new H5ComponentBar(cfg, name)
                break;
            case "polyline":
                component = new H5ComponentPolyline(cfg, name)
                break;
            case "rader":
                component = new H5ComponentRader(cfg, name)
                break;
            case "pie":
                component = new H5ComponentPie(cfg, name)
                break;
        }
        
        targetPage.append(component);
        return this;
    }
    
    H5Loader(first,load) {
        this.el.fullpage({
            onLeave: (index, nextIndex, direction) => {
                $(this.el).find(".h5_page").eq(index - 1).find(".h5_component").trigger("onLeave")
                
            },
            afterLoad: (nextIndex, index, direction) => {
                $(this.el).find(".h5_page").eq(index - 1).find(".h5_component").trigger("onLoad")
            }
        })
        
        $(this.page)[0].find(".component").trigger("onLoad")
        
        
        this.el.show();
        
    }
}

export default H5;