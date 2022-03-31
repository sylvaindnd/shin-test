export const addStarsToDestinations = () => {
    document.querySelectorAll('.destinations__places article')
    .forEach((article) => {
        const scoreContainer = article.querySelector('.place_informations__score');
        if(scoreContainer){
            const nbStars = parseInt(scoreContainer.getAttribute('data-stars'));
            const score = parseInt(scoreContainer.getAttribute('data-score'));        
            const destinationStars = new DestinationStars(scoreContainer, nbStars, score);
        }
    });
}

class DestinationStars{
    constructor(parent, nbStars, score){
        this.parent  = parent;
        this.nbStars = nbStars;
        this.score   = score;
        this.addStars();
    }

    addStars(){
        let starsHml = '';
        for(let i=0; i < this.nbStars; i++){
            let visible = true;
            if(i >= this.score){
                visible = false;
            }
            starsHml += `<svg data-visible="${visible}" xmlns="http://www.w3.org/2000/svg" width="16.168" height="15.377" viewBox="0 0 16.168 15.377">
                            <path id="Star" d="M8.5,12.75l-5,2.627.954-5.563L.416,5.873,6,5.062,8.5,0,11,5.062l5.586.812-4.042,3.94.954,5.563Z" transform="translate(-0.416)" fill="#fff"/>
                        </svg>`;  
        }
        this.parent.innerHTML = starsHml;
    }
}