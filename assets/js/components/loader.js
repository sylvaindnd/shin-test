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
        this.appendPourcent();
    }

    appendPourcent(){
        if(this.value>=100){
            return;
        }

        this.value += randomInt(1,5);
       
        if(this.value>100){
            this.value = 100;
        }

        this.setCercle();
        this.setPlane();
        this.setPourcent();

        setTimeout(()=>{
            this.appendPourcent();
        },randomInt(50,150));
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
               
        const pourcentHTML = container.innerHTML;

        container.innerHTML = pourcentHTML + `<span>${this.value} %</span>`;

        const spans = this.pourcent.querySelectorAll('.loader_pourcent__text > span:not(:last-child)'); 
        
        
        spans.forEach((span,i)=>{
            span.classList.add('hide');
        });
    }
}

