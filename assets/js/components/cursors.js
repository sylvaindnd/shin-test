export const cursors = () => {
    const element = document.getElementById('cursors');
    const component = new Cursors(element);
}

class Cursors{
    constructor(element){
        this.moveEvent = false;
        this.element = element;
        this.position = {x:0,y:0};
        this.events();
    }

    events(){
        window.addEventListener('mousemove', (event)=>{
            this.position = {x: event.clientX, y: event.clientY};
            this.moveEvents();
        });
    }

    moveEvents(){
        if(this.moveEvent || window.innerWidth<=1024){
            return;
        }

        this.moveEvent = true; 

        setTimeout(()=>{
            this.moveEvent = false; 

            this.moveCursors();  
        },50);
    }

    moveCursors(){
        this.element.querySelectorAll('.cursors__cursor')
        .forEach((cursor)=>{
            const size = cursor.offsetWidth;
            const x = this.position.x - size/2;
            const y = this.position.y - size/2;            
            cursor.style.transform = `translate(${x}px,${y}px)`;
        });
    }
}