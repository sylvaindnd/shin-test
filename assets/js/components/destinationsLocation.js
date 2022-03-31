export const addIconToLocations = () => {
    document.querySelectorAll('.destinations__places article')
    .forEach((article) => {
        const placeContainer = article.querySelector('.place_informations__location');        
        if(placeContainer){    
            const location = new DestionationLocation(placeContainer);
        }
    });
}

class DestionationLocation{
    constructor(parent){
        this.parent = parent;
        this.addIcon();
    }

    addIcon(){
        const textHtml = this.parent.querySelector('span').outerHTML;
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
        console.log(textHtml)
        this.parent.innerHTML = iconHtml + textHtml;
    }
}