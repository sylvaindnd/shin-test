const locationElements = [];

export const locations = () => {
    document.querySelectorAll('.destinations__places article')
    .forEach((article) => {
        const location = new Location(article);
        locationElements.push(location);
    });

    setLocationsDescriptionHeight();

    setTimeout(()=>{
        setLocationsDescriptionHeight();
    },500);

    window.addEventListener('resize', ()=>{
        setLocationsDescriptionHeight();
    });
}

const setLocationsDescriptionHeight = () => {
    let maxHeight = 0;
    locationElements.forEach((article) => {
        const description = article.element.querySelector('.place_informations__description span');
        
        description.classList.remove('dblock');
        
        const heightDescription = description.offsetHeight;
        if(heightDescription>maxHeight){
            maxHeight = heightDescription;
        }

        description.style.height = maxHeight;
        description.classList.add('dblock');
    });
}

class Location{
    constructor(element){
        this.element = element;
        this.addPointerIcon();
        this.addScoreStars();
    }

    addPointerIcon(){
        const locationTitle = this.element.querySelector('.place_informations__location');
        if(!locationTitle){
            return;
        }
        const textHtml = locationTitle.querySelector('span').outerHTML;
        const iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20.001" viewBox="0 0 20 20.001">
                            <defs>
                                <clipPath id="clip-path">
                                <path id="Mask" d="M6.674,19.994h0L.9,10a6.6,6.6,0,0,1,0-6.666A6.6,6.6,0,0,1,6.674,0a6.6,6.6,0,0,1,5.772,3.333,6.6,6.6,0,0,1,0,6.664l-5.771,10Zm0-18.788A5.459,5.459,0,0,0,1.947,9.394l4.727,8.186L11.4,9.394A5.459,5.459,0,0,0,6.674,1.206Zm0,7.676A2.33,2.33,0,1,1,8.69,7.717,2.3,2.3,0,0,1,6.674,8.882Zm0-3.451a1.122,1.122,0,1,0,.972.561A1.1,1.1,0,0,0,6.674,5.431Z" transform="translate(3 -0.001)" fill="#fff"/>
                                </clipPath>
                            </defs>
                            <g id="Icon_Stroke_20_Location" data-name="Icon_Stroke/20_Location" transform="translate(0 0.001)">
                                <g id="Group_1" data-name="Group 1">
                                <path id="Mask-2" data-name="Mask" d="M6.674,19.994h0L.9,10a6.6,6.6,0,0,1,0-6.666A6.6,6.6,0,0,1,6.674,0a6.6,6.6,0,0,1,5.772,3.333,6.6,6.6,0,0,1,0,6.664l-5.771,10Zm0-18.788A5.459,5.459,0,0,0,1.947,9.394l4.727,8.186L11.4,9.394A5.459,5.459,0,0,0,6.674,1.206Zm0,7.676A2.33,2.33,0,1,1,8.69,7.717,2.3,2.3,0,0,1,6.674,8.882Zm0-3.451a1.122,1.122,0,1,0,.972.561A1.1,1.1,0,0,0,6.674,5.431Z" transform="translate(3 -0.001)" fill="#fff"/>
                                </g>
                            </g>
                        </svg>`;
        locationTitle.innerHTML = iconHtml + textHtml;
    }

    addScoreStars(){
        const scoreContainer = this.element.querySelector('.place_informations__score');
        if(!scoreContainer){
            return;
        }
        const nbStars = parseInt(scoreContainer.getAttribute('data-stars'));
        const score = parseInt(scoreContainer.getAttribute('data-score'));      
        let starsHml = '';
        for(let i=0; i < nbStars; i++){
            let visible = true;
            if(i >= score){
                visible = false;
            }
            starsHml += `<svg data-visible="${visible}" xmlns="http://www.w3.org/2000/svg" width="16.168" height="15.377" viewBox="0 0 16.168 15.377">
                            <path id="Star" d="M8.5,12.75l-5,2.627.954-5.563L.416,5.873,6,5.062,8.5,0,11,5.062l5.586.812-4.042,3.94.954,5.563Z" transform="translate(-0.416)" fill="#fff"/>
                        </svg>`;  
        }
        scoreContainer.innerHTML = starsHml;
    }
}