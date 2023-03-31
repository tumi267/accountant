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
               
                if(parseInt(rs.getPropertyValue('--scroolmenu1width'))<=33){
                r.style.setProperty('--scroolmenu1width','84%')
                r.style.setProperty('--acccontent1','block')
                r.style.setProperty('--acccontent2','none')
                r.style.setProperty('--acccontent3','none')
                r.style.setProperty('--scroolmenu2width','4%')
                r.style.setProperty('--scroolmenu3width','4%')
            }else{
                r.style.setProperty('--scroolmenu1width','33%')
                r.style.setProperty('--acccontent1','none')
                if(rs.getPropertyValue('--scroolmenu2width')=='84%'){
                    r.style.setProperty('--acccontent2','none')
                }
                if(rs.getPropertyValue('--scroolmenu3width')=='84%'){
                    r.style.setProperty('--acccontent3','none')
                }
               
                r.style.setProperty('--scroolpostion1','-10%')
                r.style.setProperty('--scroolmenu2width','33%')
                r.style.setProperty('--scroolmenu3width','33%')
            }
                break;
            case '2':
                if(parseInt(rs.getPropertyValue('--scroolmenu2width'))<=33){
                r.style.setProperty('--scroolmenu1width','4%')
                r.style.setProperty('--scroolmenu2width','84%')
                r.style.setProperty('--acccontent2','block')
                r.style.setProperty('--acccontent1','none')
                r.style.setProperty('--acccontent3','none')
                r.style.setProperty('--scroolmenu3width','4%')
            }else{
                r.style.setProperty('--scroolmenu1width','33%')
                r.style.setProperty('--acccontent2','none')
                r.style.setProperty('--acccontent1','none')
                r.style.setProperty('--acccontent3','none')
                r.style.setProperty('--scroolpostion2','-10%')
                r.style.setProperty('--scroolmenu2width','33%')
                r.style.setProperty('--scroolmenu3width','33%')
            }

            break;
            case '3':
                if(parseInt(rs.getPropertyValue('--scroolmenu3width'))<=33){
                r.style.setProperty('--scroolmenu1width','4%')
                r.style.setProperty('--scroolmenu2width','4%')
                r.style.setProperty('--scroolmenu3width','84%')
                r.style.setProperty('--acccontent3','block')
                r.style.setProperty('--acccontent1','none')
                r.style.setProperty('--acccontent2','none')
            }else{
                r.style.setProperty('--scroolmenu1width','33%')
                r.style.setProperty('--scroolmenu2width','33%')
                r.style.setProperty('--scroolmenu3width','33%')
                r.style.setProperty('--scroolpostion3','-10%')
                r.style.setProperty('--acccontent3','none')
                r.style.setProperty('--acccontent1','none')
                r.style.setProperty('--acccontent2','none')
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
icon.addEventListener('click',()=>{
    if(rs.getPropertyValue('--hovericon')=='none'){
        r.style.setProperty('--hovericon','block')
        r.style.setProperty('--containicon','50%')
    }else{
        r.style.setProperty('--hovericon','none')
        r.style.setProperty('--containicon','0%')
    }   
})

mail.addEventListener('click',()=>{
    if(rs.getPropertyValue('--contact-info-mail')=='none'){
        r.style.setProperty('--contact-info-mail','block')
        r.style.setProperty('--containiconleft','0%')
    }else{
        r.style.setProperty('--contact-info-mail','none')
    }   
})

phone.addEventListener('click',()=>{
    if(rs.getPropertyValue('--contact-info-phone')=='none'){
        r.style.setProperty('--contact-info-phone','block')
    }else{
        r.style.setProperty('--contact-info-phone','none')
    }   
    
})
