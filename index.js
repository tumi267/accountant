const scroll=document.getElementsByClassName('scroll')
const r=document.querySelector(':root')
const icon=document.querySelector('.mail-icon')
const mail=document.querySelector('.conatct-mail-icon')
const phone=document.querySelector('.conatct-phone-hover')
var rs = getComputedStyle(r);
Array.from(scroll).forEach((e,i)=> {
 
    e.addEventListener('click',(j)=>{
     
        switch (e.id) {
            case '1':
                if(rs.getPropertyValue('--scroolmenu1width')=='33%'){
                r.style.setProperty('--scroolmenu1width','84%')
                r.style.setProperty('--acccontent1','block')
                r.style.setProperty('--scroolmenu2width','4%')
                r.style.setProperty('--scroolmenu3width','4%')
            }else{
                r.style.setProperty('--scroolmenu1width','33%')
                r.style.setProperty('--acccontent1','none')
                r.style.setProperty('--scroolpostion1','-10%')
                r.style.setProperty('--scroolmenu2width','33%')
                r.style.setProperty('--scroolmenu3width','33%')
            }
                break;
            case '2':
                if(rs.getPropertyValue('--scroolmenu2width')=='33%'){
                r.style.setProperty('--scroolmenu1width','4%')
                r.style.setProperty('--scroolmenu2width','84%')
                r.style.setProperty('--acccontent2','block')
                r.style.setProperty('--scroolmenu3width','4%')
            }else{
                r.style.setProperty('--scroolmenu1width','33%')
                r.style.setProperty('--acccontent2','none')
                r.style.setProperty('--scroolpostion2','-10%')
                r.style.setProperty('--scroolmenu2width','33%')
                r.style.setProperty('--scroolmenu3width','33%')
            }

            break;
            case '3':
                if(rs.getPropertyValue('--scroolmenu3width')=='33%'){
                r.style.setProperty('--scroolmenu1width','4%')
                r.style.setProperty('--scroolmenu2width','4%')
                r.style.setProperty('--scroolmenu3width','84%')
                r.style.setProperty('--acccontent3','block')
            }else{
                r.style.setProperty('--scroolmenu1width','33%')
                r.style.setProperty('--scroolmenu2width','33%')
                r.style.setProperty('--scroolmenu3width','33%')
                r.style.setProperty('--scroolpostion3','-10%')
                r.style.setProperty('--acccontent3','none')
            }
            break;
            default:
                break;
        }
    })
});
Array.from(scroll).forEach((e,i)=> {
    e.addEventListener('wheel',(j)=>{
        switch (e.id) {
            case '1':
                if(rs.getPropertyValue('--scroolmenu1width')=='84%'){
                if(j.wheelDelta>0){
               r.style.setProperty('--scroolpostion1',`${parseInt(rs.getPropertyValue('--scroolpostion1'))-1}%`)
                 }else{
                    if(rs.getPropertyValue('--scroolpostion1')=='-10%'){
                    }else{
                        r.style.setProperty('--scroolpostion1',`${parseInt(rs.getPropertyValue('--scroolpostion1'))+1}%`)
                    }           
                 }
                }
                break;
            case '2':
                if(rs.getPropertyValue('--scroolmenu2width')=='84%'){
                if(j.wheelDelta>0){
                    r.style.setProperty('--scroolpostion2',`${parseInt(rs.getPropertyValue('--scroolpostion2'))-1}%`)
                }else{
                    if(rs.getPropertyValue('--scroolpostion2')=='-10%'){
                    }else{
                        r.style.setProperty('--scroolpostion2',`${parseInt(rs.getPropertyValue('--scroolpostion2'))+1}%`)
                    }
                }
                }
            break;
            case '3':
                if(rs.getPropertyValue('--scroolmenu3width')=='84%'){
                if(j.wheelDelta>0){
                    r.style.setProperty('--scroolpostion3',`${parseInt(rs.getPropertyValue('--scroolpostion3'))-1}%`)
                }else{
                if(rs.getPropertyValue('--scroolpostion3')=='-10%'){
                }else{
                    r.style.setProperty('--scroolpostion3',`${parseInt(rs.getPropertyValue('--scroolpostion3'))+1}%`)
                }
                }
                }
            break;
            default:
                break;
        }
    })
})
icon.addEventListener('mouseover',()=>{
    r.style.setProperty('--hovericon','block')
})
icon.addEventListener('click',()=>{
    r.style.setProperty('--hovericon','none') 
})
mail.addEventListener('mouseover',()=>{
    r.style.setProperty('--contact-info-mail','block')
})
mail.addEventListener('mouseout',()=>{
    r.style.setProperty('--contact-info-mail','none')
})
phone.addEventListener('mouseover',()=>{
    r.style.setProperty('--contact-info-phone','block')
})
phone.addEventListener('mouseout',()=>{
    r.style.setProperty('--contact-info-phone','none')
})
