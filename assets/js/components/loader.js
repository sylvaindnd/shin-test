export const loader = () => {
    const element = document.getElementById('loader');
    const component = new Loader(element);
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Loader{
    constructor(element){
        this.value = 0;
        this.element = element;
        this.pourcent = element.querySelector('.loader_animation__pourcent');
        this.icon = element.querySelector('.loader_animation__icon');
        this.cercle = element.querySelector('.loader_animation__cercle');
        this.plane = element.querySelector('.loader_animation__plane');             
        this.appearAnimation();
    }

    appearAnimation(){
        setTimeout(()=>{
            this.element.querySelector('.loader_animation').classList.add('visible');
            this.appendPourcent();
        },900);
    }

    completeAnimation(){
        this.element.classList.add('complete');
        document.querySelector('body').style.overflowY = 'auto';
        setTimeout(()=>{
            this.element.style.backgroundColor = 'transparent';
            this.element.querySelectorAll('*').forEach((element)=>{
                element.style.display = 'none';
            });
        },700);
        setTimeout(()=>{
            this.element.style.display = 'none';
        },1400);
    }

    appendPourcent(){
        if(this.value>=100){
            return;
        }

        this.value += randomInt(1,10);
       
        if(this.value>=100){
            this.value = 100;
            setTimeout(()=>{
                this.completeAnimation();
            },250);   
        }

        this.setCercle();
        this.setPlane();
        this.setPourcent();

        setTimeout(()=>{
            this.appendPourcent();
        },randomInt(100,500));
    }

    setCercle(){
        const cercle = this.cercle.querySelector('#loader_animation_cercle__path');
        const angle = this.value * 360 / 100;
        cercle.setAttribute("stroke-dasharray", angle + ", 20000");
    }

    setPlane(){
        const plane = this.plane.querySelector('svg');
        const angle = this.value * 360 / 100;
        const angleRadian = angle * (Math.PI/180)
        const distance = 133;
        const x = distance * Math.cos(angleRadian);
        const y = distance * Math.sin(angleRadian);
        plane.style.transform = `translate(calc(-50% - ${x}px),calc(-50% - ${y}px)) rotate(${angle-90}deg)`;
    }

    setPourcent(){
        const container = this.pourcent.querySelector('.loader_pourcent__text');
        const newPourcent = document.createElement('span');
        newPourcent.innerHTML = `<span>${this.value}</span>`;
        container.append(newPourcent);

        const spans = this.pourcent.querySelectorAll('.loader_pourcent__text > span:not(:last-child)'); 
                
        spans.forEach((span,i)=>{
            span.classList.add('hide');
        });
    }

    
}

