/**
 * Created by zhang on 7/10/2017.
 */

import H5componentBase from "./H5ComponentBase";

class H5ComponentBar {
    constructor(cfg, name) {
        let component = new H5componentBase(cfg, name)
        
        //遍历所有项目 添加到容器之中
        $.each(cfg.data, (idx, item) => {
            let width = item[1] * 80 + "%"
            let line = $(`<div class="line"></div>`)
            let name = $(`<div class="name"></div>`)
            let rate = $(`<div class="rate"></div>`)
            let peer = $(`<div class="peer"></div>`)
            rate.css("width", width)
            
            let bgStyle;
            if (item[2]) {
                bgStyle = `style="background-color:${item[2]}"`;
            }
            rate.html(`<div class='bg' ${bgStyle}></div>`)
            name.text(item[0])
            peer.text(width)
            line.append(name).append(rate).append(peer)
            component.append(line)
        })
        
        return component;
    }
}

export default H5ComponentBar;