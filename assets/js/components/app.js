export const app = () => {
    const element = document.getElementById('app');
    const component = new App(element);
}

class App{
    constructor(element){
        this.element = element;
        this.content = element.querySelector('.content');
        this.height = this.content.offsetHeight;
        this.scrollEvent = false; 
        this.setHeight();
        this.scrollContent();
        this.events();
    }

    events(){
        window.addEventListener('scroll',()=>{            
            this.scrollEvents();
        });
    }

    scrollEvents(){
        if(this.scrollEvent){
            return;
        }
        
        this.scrollEvent = true;

        setTimeout(()=>{
            this.scrollEvent = false; 

            this.setHeight();   
            this.scrollContent();        
        },50);
    }

    setHeight(){        
        this.height = this.content.offsetHeight;
        this.element.style.height = this.height;
        
    }

    scrollContent(){
        if(window.innerWidth<=1024){
            this.content.style.transform = `translate(0,0)`; 
            return;
        }
        this.content.style.transform = `translate(0,${-window.scrollY}px)`;        
    }
}