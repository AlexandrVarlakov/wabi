const hMenuBtn = document.querySelector('.h-menu-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hMenuBtn.addEventListener('click', function(){
    if ( !this.classList.contains('active') ){
        this.classList.add('active')
        hamburgerMenu.classList.add('active');
        document.body.classList.add('no-scroll');
    } else{
        this.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
})





document.body.addEventListener('click', function(event){
    
    const target  = event.target;

    const hLangRoot = target.closest('.h-lang');
   
    const isRealtyRoomBtn = target.classList.contains('.realty-rooms__btn');

    const isRealtyZoneBtn = target.classList.contains('.realty-zone__btn');


    const isRMSButton = target.classList.contains('.rms-button');


    if ( !isRMSButton ){
        
        let realtyMultiSelect = target.closest('.realty-multi-select');


        if ( !realtyMultiSelect ){
            let activeRMS = document.querySelectorAll('.realty-multi-select.active');

            activeRMS.forEach( sel => {
                sel.classList.remove('active')
            })
        } 
    } 


    if ( !isRealtyRoomBtn ){

        let realtyRoomsParent = target.closest('.realty-rooms');

        if ( !realtyRoomsParent ){
            let act = document.querySelectorAll('.realty-rooms.active');

            act.forEach( activeSelect => {
                activeSelect.classList.remove('active');
            })
        }

    }

    if ( !isRealtyZoneBtn ){

        let realtyZoneParent = target.closest('.realty-zone');

        if ( !realtyZoneParent ){
            let act = document.querySelectorAll('.realty-zone.active');

            act.forEach( activeSelect => {
                activeSelect.classList.remove('active');
            })
        }

    }
    

    if (hLangRoot){
        if ( !hLangRoot.classList.contains('active') ){
            hLangRoot.classList.add('active')
        } else{
            hLangRoot.classList.remove('active')
        }
    } else{
        const hLangActive = document.querySelector('.h-lang.active');
        if ( hLangActive ) hLangActive.classList.remove('active')
    }
})



const phoneMasks = document.querySelectorAll("input[name='phone']");
if (phoneMasks.length){
    phoneMasks.forEach( (input) => {
        IMask(
            input, {
              mask: '+{7}(000)000-00-00'
          });
    })
}




const inputsWithLabel = document.querySelectorAll('.input-with-label');
if ( inputsWithLabel.length ){
    inputsWithLabel.forEach( inp => {

        if ( inp.value.length > 0 ){
            inp.classList.add('filled');
        } else{
            inp.classList.remove('filled');
        }


        inp.addEventListener('input', function(){
            if ( this.value.length > 0 ){
                this.classList.add('filled');
            } else{
                this.classList.remove('filled');
            }
        })
    })
}



const approveCbs = document.querySelectorAll('.custom-cb__cb');

if ( approveCbs.length ){
    approveCbs.forEach( cb => {

        const form = cb.closest('form');

            if (form){
                const sendFormBtn = form.querySelector('.send-form');

            if ( !cb.checked ){
                sendFormBtn.setAttribute('disabled', 'disabled');
            } 

            cb.addEventListener('change', function(){
                if (!this.checked) {
                    sendFormBtn.setAttribute('disabled', 'disabled');
                } else{
                    sendFormBtn.removeAttribute('disabled');
                }
            })
        }

        

    } )
}


let promosSlider = new Swiper(".promos-swiper", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 10,
    
    navigation: {
        nextEl: '.promos-swiper-navs__next',
        prevEl: '.promos-swiper-navs__prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 8
        }
    }
})



let blogPhotos = new Swiper(".blog-photos", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 10,
    
    navigation: {
        nextEl: '.blog-photos-navs__next',
        prevEl: '.blog-photos-navs__prev',
    },
    on: {
        init: function () {

            const activeSlide = document.querySelector('.blog-photos .swiper-slide-active');
            const caption = document.querySelector('.blog-photo-caption');
            if ( caption ){
                caption.innerHTML = activeSlide.getAttribute('data-caption');
            }

            
        },
        slideChangeTransitionStart: function(){
            const activeSlide = document.querySelector('.blog-photos .swiper-slide-active');
            const caption = document.querySelector('.blog-photo-caption');
            if ( caption ){
                caption.innerHTML = activeSlide.getAttribute('data-caption');
            }
        },        
    }
    ,
})

let blogsSlider = new Swiper(".blogs-swiper", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 10,
    
    navigation: {
        nextEl: '.promos-swiper-navs__next',
        prevEl: '.promos-swiper-navs__prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
})



const contactTabs = document.querySelectorAll('.c-tabs__tab');

if ( contactTabs.length ){

    contactTabs.forEach( ct => {
        
        ct.addEventListener('click', function(){

            if ( !this.classList.contains('active') ){
                const targetClass  = this.getAttribute('data-target-class');
                const targetNode = this.getAttribute('data-target');               
                const activeSheet = document.querySelector(targetClass + '.active');
                const activeTab = document.querySelector('.c-tabs__tab.active');
                activeTab.classList.remove('active');
                if (activeSheet){
                    activeSheet.classList.remove('active')
                }

                this.classList.add('active');
                document.querySelector(targetNode).classList.add('active');
            }

            



        })

    } )

}

const filterSliderBtn = document.querySelectorAll('.filter-btn');
if ( filterSliderBtn.length ){
    filterSliderBtn.forEach( btn => {

        btn.addEventListener('click', function(){

            if ( !this.classList.contains('active') ){
                
                let parentWrap = this.closest('.realty-slider-outer-wrap');

                let currentActiveBtn = parentWrap.querySelector('.filter-btn.active');

                this.classList.add('active');
                currentActiveBtn.classList.remove('active');

                const selectedSlides  = parentWrap.querySelectorAll('.swiper-slide.selected');
                selectedSlides.forEach( ss => {
                    ss.classList.remove('selected');
                } )


                const filterValue = this.getAttribute('data-filter');
                const newSelected = parentWrap.querySelectorAll('.swiper-slide[data-filter=' +filterValue+ ']');
                newSelected.forEach( ns => {
                    ns.classList.add('selected');

                    console.log(popularRealtySlider.slides.length);
                    //console.log(rentRealtySlider.slides.length);
                    //rentRealtySlider.update();
                    //popularRealtySlider.update()
                    if (popularRealtySlider.slides.length) popularRealtySlider.update();
                    if (rentRealtySlider.slides.length) rentRealtySlider.update();
                    if (salesRealtySlider.slides.length) salesRealtySlider.update();
                    
                } )
            }

        })


    } )
}





var popularRealtySlider = new Swiper(".popular-realty", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 6,
    
    navigation: {
        nextEl: '.popular-realty-next',
        prevEl: '.popular-realty-prev',
    },
    
    pagination: {
        el: '.popular-fraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<span class="fraction-delimetr"> — </span>' +
                    '<span class="' + totalClass + '"></span>';
        },
      },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
})

var reviewSlider = new Swiper(".reviews-slider", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 8,
    
    navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev',
    },
    
    pagination: {
        el: '.review-fraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<span class="fraction-delimetr"> — </span>' +
                    '<span class="' + totalClass + '"></span>';
        },
      },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        1023: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        1600: {
            slidesPerView: 1,
            spaceBetween: 96
        }
    }
})

const rdSlider =  new Swiper('.rd-slider', {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 6,

    pagination: {
        el: '.rd-gallery__fraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<span class="fraction-delimetr"> — </span>' +
                    '<span class="' + totalClass + '"></span>';
        },
      },

    navigation: {
        nextEl: '.rd-slider-next',
        prevEl: '.rd-slider-prev',
    },
})

const rpPlansSlider =  new Swiper('.rp-plans-slider', {
    speed: 1000,
    slidesPerView: 1.5,
    spaceBetween: 5,
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        
    },
    navigation: {
        nextEl: '.rp-plans-next',
        prevEl: '.rp-plans-prev',
    },
});



const changeCardTypeBtns = document.querySelectorAll('.card-type-select__btn');
if ( changeCardTypeBtns.length ){
    changeCardTypeBtns.forEach( btn => {

        btn.addEventListener('click', function(){

            if ( !this.classList.contains('active') ){
                document.querySelector('.card-type-select__btn.active').classList.remove('active');
                this.classList.add('active');

                let cardList = document.querySelector('.cards-list');

                if ( this.hasAttribute('data-type') ){
                    
                    cardList.classList.add('list-type');
                } else{
                    cardList.classList.remove('list-type');
                }
            }

        })

    } )
}


const realtyRoooms = document.querySelectorAll('.realty-rooms__variant');

if ( realtyRoooms.length ){

    realtyRoooms.forEach( rr => {

        rr.addEventListener('change', function(){

            const parent = this.closest('.realty-rooms');
            const valueNode = parent.querySelector('.realty-rooms__value');
            const variants  = parent.querySelectorAll('.realty-rooms__variant');
            
            let selectedVariants = 0;
            let results = '';

            variants.forEach( inp => {
                if ( inp.checked ) {
                    selectedVariants++

                    if (selectedVariants > 1){
                        results =  results+','+inp.value;
                    } else{
                        results = inp.value;
                    }
                }

            })

            if ( selectedVariants === 0 ){
                valueNode.innerHTML = 'комнат'
                parent.classList.remove('has-selected');
            } else{
                valueNode.innerHTML = results + ' комн.';
                parent.classList.add('has-selected');
            }

        })

    } )

}

function checkRooms(){
    const realtyRooms = document.querySelectorAll('.realty-rooms');

    if ( realtyRooms.length ){
        realtyRooms.forEach( rr => {

            
            const valueNode = rr.querySelector('.realty-rooms__value');
            const variants  = rr.querySelectorAll('.realty-rooms__variant');
            
            let selectedVariants = 0;
            let results = '';

            variants.forEach( inp => {
                if ( inp.checked ) {
                    selectedVariants++

                    if (selectedVariants > 1){
                        results =  results+','+inp.value;
                    } else{
                        results = inp.value;
                    }
                }

            })

            if ( selectedVariants === 0 ){
                valueNode.innerHTML = 'комнат'
                rr.classList.remove('has-selected');
            } else{
                valueNode.innerHTML = results + ' комн.';
                rr.classList.add('has-selected');
            }
        } )
    }
}

const realtyZones = document.querySelectorAll('.realty-zone__variant');

if ( realtyZones.length ){

    realtyZones.forEach( rz => {

        rz.addEventListener('change', function(){

            const parent = this.closest('.realty-zone');
            const valueNode = parent.querySelector('.realty-zone__value');
            const variants  = parent.querySelectorAll('.realty-zone__variant');
            
            let selectedVariants = 0;
            let results = '';

            variants.forEach( inp => {
                if ( inp.checked ) {
                    selectedVariants++

                    results = inp.value;
                }

            })

            if ( selectedVariants === 0 ){
                valueNode.innerHTML = 'Район'
                parent.classList.remove('has-selected');
            } else if ( selectedVariants === 1 ) {
                valueNode.innerHTML = "Район: " + results;
                parent.classList.add('has-selected');
            } else{
                valueNode.innerHTML = "Район: выбрано " + selectedVariants;
                parent.classList.add('has-selected');
            }

        })

    } )

}

function checkZone(){


    let realtyZones = document.querySelectorAll('.realty-zone');

    if ( realtyZones.length ){
        realtyZones.forEach( rz => {
            const valueNode = rz.querySelector('.realty-zone__value');
            const variants  = rz.querySelectorAll('.realty-zone__variant');

            let selectedVariants = 0;
            let results = '';

            variants.forEach( inp => {
                if ( inp.checked ) {
                    selectedVariants++
        
                    results = inp.value;
                }
        
            })

            
            if ( selectedVariants === 0 ){
                valueNode.innerHTML = 'Район'
                rz.classList.remove('has-selected');
            } else if ( selectedVariants === 1 ) {
                valueNode.innerHTML = "Район: " + results;
                rz.classList.add('has-selected');
            } else{
                valueNode.innerHTML = "Район: выбрано " + selectedVariants;
                rz.classList.add('has-selected');
            }
        
        } )


    }

    
    
    
    

    
   
}


const ftpTabs = document.querySelectorAll('.ftp__tab');
const moreFilters = document.querySelector('.i-filters-panel__more-filters');


if ( ftpTabs.length ){
    ftpTabs.forEach( tab => {
        tab.addEventListener('click', function(){
            if ( !this.classList.contains('active') ){
                const activeTab = document.querySelector('.ftp__tab.active');
                const activeTargetName = activeTab.getAttribute('data-target');

                const newTargetName = this.getAttribute('data-target');

                document.querySelector('.ftp__filter-form.active').classList.remove('active');
                document.querySelector('.ftp__filter-form[data-name="' +newTargetName+ '"]').classList.add('active');
                activeTab.classList.remove('active');
                this.classList.add('active');
                moreFilters.setAttribute('data-target', newTargetName);

                const formLink = '#form-' + this.getAttribute('data-target');

                let showOnMapBtns = document.querySelectorAll('.show-on-map');
                
                showOnMapBtns.forEach( btn => {
                    btn.setAttribute('data-map-form', formLink);
                })
            }

        })
    } )

}

function ftpTabsInit(){
    const activeTab = document.querySelector('.ftp__tab.active');

    if ( activeTab ){        
        const activeTab = document.querySelector('.ftp__tab.active');
        moreFilters.setAttribute('data-target', activeTab.getAttribute('data-target'));

        let showOnMapBtns = document.querySelectorAll('.show-on-map');

        showOnMapBtns.forEach( btn => {

            const formLink = '#form-' + activeTab.getAttribute('data-target');

            btn.setAttribute('data-map-form', formLink);

            btn.addEventListener('click', function(){
                let form = document.querySelector(formLink);
                let action = this.getAttribute('data-action');

                const activeTab = document.querySelector('.ftp__tab.active');

                form.setAttribute('action', action + activeTab.getAttribute('data-target'));
                form.submit();                
            })

        } )

        
    }

}

function multiSelectInit(){
    const rms = document.querySelectorAll('.realty-multi-select');


    



    if ( rms.length ){


        const rmsButtons = document.querySelectorAll('.rms-button');

        rmsButtons.forEach(btn => {
            btn.addEventListener('click', function(){
                const parent = this.closest('.realty-multi-select');

                if ( parent.classList.contains('active') ){
                    parent.classList.remove('active');
                } else{


                    let activeRMS = document.querySelectorAll('.realty-multi-select.active');

                    if ( activeRMS.length ){
                        activeRMS.forEach( sel => {
                            sel.classList.remove('active')
                        })
                    }
                    

                    parent.classList.add('active');
                }
            })
        })


        rms.forEach( select => {

            const checkboxes = select.querySelectorAll('.realty-multi-select__checkbox');
            const checkedCheckboxes = select.querySelectorAll('.realty-multi-select__checkbox:checked');
            const valueNode = select.querySelector('.rms-button__value');
            
            const postfix = select.getAttribute('data-postfix');


            checkboxes.forEach( cb => {

                cb.addEventListener('click', function(){
                    const checkedCb =  select.querySelectorAll('.realty-multi-select__checkbox:checked');

                    if (  (!this.checked) && checkedCb.length === 0){
                        this.checked = true;
                    }

                })


                cb.addEventListener('change', function(){
                    const newCalcCb =  select.querySelectorAll('.realty-multi-select__checkbox:checked');
                    qty = 0
                    newCalcCb.forEach( cb => {

                        if (qty > 0){
                            valueNode.innerHTML = valueNode.innerHTML +','+ cb.value;
                        } else{
                            valueNode.innerHTML = cb.value;
                        }
                        qty++    
                    })
                    if ( postfix ) valueNode.innerHTML = valueNode.innerHTML + ' ' + postfix;
                })
            } )



            if ( !checkedCheckboxes.length  ){
                checkboxes[0].click();
            } else{
                let qty;
                checkedCheckboxes.forEach( cb => {

                    if (qty > 0){
                        valueNode.innerHTML = valueNode.innerHTML +','+ cb.value;
                    } else{
                        valueNode.innerHTML = cb.value;
                    }
                    qty++
                    
                } )
                if ( postfix ) valueNode.innerHTML = valueNode.innerHTML + ' ' + postfix;
            }
            

        } )
    }
}

function selectTMFInit(){

    let select = document.querySelector('.select-tmf');
    let showFiltersMapBtns = document.querySelectorAll('.show-filters-map');
    if ( select ){


        

        showFiltersMapBtns.forEach( btn => {
            btn.setAttribute('data-target', select.value);
        } )

        select.addEventListener('change', function(){
            
            showFiltersMapBtns.forEach( btn => {
                btn.setAttribute('data-target', this.value);
            } )

            document.querySelector('.ftp__filter-form.active').classList.remove('active');
            
            document.querySelector('.ftp__filter-form[data-name="'+select.value+'"]').classList.add('active');

        });


    }

    
    
}

document.addEventListener('DOMContentLoaded', function(){
    checkZone();
    checkRooms();
    ftpTabsInit();
    multiSelectInit();
    selectTMFInit();
});


const realtyRoomsOpenListBtns = document.querySelectorAll('.realty-rooms__btn');

if ( realtyRoomsOpenListBtns.length ){

    realtyRoomsOpenListBtns.forEach( btn => {
        btn.addEventListener('click', function(){
            const parent = this.closest('.realty-rooms');

            if ( !parent.classList.contains('active') ){
                parent.classList.add('active');
            } else{
                parent.classList.remove('active');
            }
        })
    } )
}

const realtyZoneOpenListBtns = document.querySelectorAll('.realty-zone__btn');

if ( realtyZoneOpenListBtns.length ){

    realtyZoneOpenListBtns.forEach( btn => {
        btn.addEventListener('click', function(){
            const parent = this.closest('.realty-zone');

            if ( !parent.classList.contains('active') ){
                parent.classList.add('active');
            } else{
                parent.classList.remove('active');
            }
        })
    } )
}

var salesRealtySlider = new Swiper(".sales-realty", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 6,
    
    navigation: {
        nextEl: '.sales-realty-next',
        prevEl: '.sales-realty-prev',
    },
    
    pagination: {
        el: '.sales-fraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<span class="fraction-delimetr"> — </span>' +
                    '<span class="' + totalClass + '"></span>';
        },
      },
    breakpoints: {
        680: {
            slidesPerView: 1,
            spaceBetween: 6,
            
        },
       
    }
})


var rentRealtySlider = new Swiper(".rent-realty", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 6,
    
    navigation: {
        nextEl: '.rent-realty-next',
        prevEl: '.rent-realty-prev',
    },
    
    pagination: {
        el: '.rent-fraction',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return number;
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                    '<span class="fraction-delimetr"> — </span>' +
                    '<span class="' + totalClass + '"></span>';
        },
      },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
})




let options = {
    zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    displayModalContainer: 'flex', 
    displayModal: 'flex', 

    closeSelectors: ['.modal__close, .modal__thanks-ok'], 
    closeModalOnFogClick: true, 
    showModalAnimation: 'fadeInBottom', 
    closeModalAnimation: 'fadeOutTop',  
    showModalDuration: '300ms',
    closeModalDuration: '500ms',

    showFogAnimation: 'fadeIn',
    closeFogAnimation: 'fadeOut',
    showFogDuration: '300ms',
    closeFogDuration: '500ms',
    documentCanScroll: false, 

    // 'modal-first' - сначала скрывается модальное окно - затем туман
    // 'along' - анимации закрытия тумана и окна происходят параллельно
    closeMode: 'modal-first',
    beforeClose: function(){console.log('before modal close');},
    afterClose: function(){console.log('close modal close');},
    beforeAppendModal: function(){console.log('before append modal');},
    afterShow: function(){console.log('after show modal');}

}
let optionsFilter = {
    zIndex: 1000, 
    //background: 'rgba(12, 130, 121, 0.5)', 
    displayModalContainer: 'flex', 
    displayModal: 'block', 

    closeSelectors: ['.filters-modal__close', '.modal__thanks-ok'], 
    closeModalOnFogClick: true, 
    showModalAnimation: 'fadeInBottom', 
    closeModalAnimation: 'fadeOutTop',  
    showModalDuration: '300ms',
    closeModalDuration: '500ms',

    showFogAnimation: 'fadeIn',
    closeFogAnimation: 'fadeOut',
    showFogDuration: '300ms',
    closeFogDuration: '500ms',
    documentCanScroll: false, 

    // 'modal-first' - сначала скрывается модальное окно - затем туман
    // 'along' - анимации закрытия тумана и окна происходят параллельно
    closeMode: 'modal-first',
    beforeClose: function(){console.log('before modal close');},
    afterClose: function(){console.log('close modal close');},
    beforeAppendModal: function(){console.log('before append modal');},
    afterShow: function(){console.log('after show modal');}

}

//data-role="call-modal" data-modal-name="contact-us"

const callModalBtns = document.querySelectorAll('[data-role="call-modal"]');

if ( callModalBtns.length ){

    callModalBtns.forEach( btn => {
        btn.addEventListener('click', function(){

            const modalLink = '.modal[data-modal-name="' + this.getAttribute('data-modal-name') + '"]';

            new easyModal(modalLink, options);

        })
    } )

}

const callFiltersBtns = document.querySelectorAll('[data-role="call-filter"]');

if ( callFiltersBtns.length ){
    callFiltersBtns.forEach( btn => {
        btn.addEventListener('click', function(){

            const modalLink = '.filters-modal[data-modal-name="' + this.getAttribute('data-modal-name') + '"]';

            
            const  targetTabLink = '.fmt[data-name="' + this.getAttribute('data-target') + '"]';
            const targetTab = document.querySelector(targetTabLink);
            
            targetTab.click();
            

            new easyModal(modalLink, optionsFilter);

        })
    } )
}





const spoilerHeader = document.querySelectorAll('.spoiler-header');


function deploySpoiler(header, content, h){
    anime({
        targets: content,
        height: h,
        duration: 500,
        delay: 0,
        easing: 'easeInOutQuint',
        begin: function(anim) {
            header.classList.add('opened')
        },
        complete: function(anim) {
            header.classList.add('open');
            header.classList.remove('opened');
            content.style.height = 'auto';
        }
    });
}

function rollSpoiler(header, content){
    anime({
        targets: content,
        height: 0,
        duration: 500,
        delay: 0,
        easing: 'easeInOutQuint',
        begin: function(anim) {
            header.classList.add('closed');            
        },
        complete: function(anim) {
            header.classList.remove('open');
            header.classList.remove('closed');
            
        }
    });
}


if ( spoilerHeader.length ){

    

    window.addEventListener('resize', function(){
        let spoilerBodyStyled = document.querySelectorAll('.spoiler-body[style]');

        if ( spoilerBodyStyled.length ){
            const accordion = spoilerBodyStyled[0].closest('.accordion') ;

            if ( accordion.getAttribute('data-place') === 'menu' ){
                spoilerBodyStyled.forEach( sp => {
                    sp.removeAttribute('style');
                });
        
                let openHeaders = document.querySelectorAll('.spoiler-header.open');
                openHeaders.forEach( oh => {
                    oh.classList.remove('open');
                } )
            }
        }
        

        
    });



    spoilerHeader.forEach( tb => {
        tb.addEventListener('click', function(){
            
            const parentContainer = this.closest('.accordion');
            const isMenuAccrodion = ( parentContainer.getAttribute('data-place') === 'menu') ? true : false;     
        
            function openSpoilerBody(clickedHeader){
                const targetLink = clickedHeader.getAttribute('data-target');
                const target = document.querySelector(targetLink);
                

                if ( !clickedHeader.classList.contains('open') ){                    
                    const heightListContainer  = target.querySelector('* > [data-measure]').offsetHeight;
                    deploySpoiler(tb, target, heightListContainer);
                } else{
                    const heightListContainer  = target.querySelector('* > [data-measure]').offsetHeight;
                    target.style.height = target.offsetHeight + 'px';
                    rollSpoiler(tb, target);
                }
            }

            
            if ( isMenuAccrodion ){
                
                if (!this.classList.contains('opened') && !this.classList.contains('closed')){
                    let vw = document.documentElement.clientWidth;
                    const smBreakpoint = Number(getComputedStyle(document.documentElement).getPropertyValue('--bp-sm'));
                    
                    if (vw < smBreakpoint){
                        openSpoilerBody(this)
                    }
                    
                }
                  
            } else{
                if (!this.classList.contains('opened') && !this.classList.contains('closed')){
                    openSpoilerBody(this)
                    
                    
                }
            }


            
            
            

             
    
        })
    } )
}


let showOnMapBtnsMob = document.querySelectorAll('.show-on-map-mob');

showOnMapBtnsMob.forEach( btn => {
    btn.addEventListener('click', function(){
        const formLink = this.getAttribute('data-map-form');
        const form = document.querySelector(formLink);
        const action = this.getAttribute('data-action');
        form.setAttribute('action', action);
        form.submit();                
    })
    
} )


let showOnListBtnsMob = document.querySelectorAll('button[data-list-form]');

showOnListBtnsMob.forEach( btn => {
    btn.addEventListener('click', function(){
        const formLink = this.getAttribute('data-list-form');
        const form = document.querySelector(formLink);
        const action = this.getAttribute('data-action');
        form.setAttribute('action', action);
        form.submit();                
    })
    
} )


const filterModalTabs = document.querySelectorAll('.fmt');

if ( filterModalTabs.length ){
    filterModalTabs.forEach( tab => {
        tab.addEventListener('click', function(){
            if ( !this.classList.contains('active') ){
                let activeTab = document.querySelector('.fmt.active');
                let activeSheet = document.querySelector(activeTab.getAttribute('data-target'));
                activeTab.classList.remove('active')
                activeSheet.classList.remove('active')

                let newActiveSheet = document.querySelector(this.getAttribute('data-target'));
                newActiveSheet.classList.add('active');
                this.classList.add('active');
            }


            
            

        })
    })
}

const realtyList = [
    {
        coordinates: [55.68267782261003,37.48201731640626],
        hint: 'Текст сообщения',
        realty: {
            link: 'realty-page.html',
            promoState: 'Лучшее предложение',
            state: 'Продажа',
            price: '$ 90 000',
            img: 'assets/img/objects/1.jpg',
            name: '2х комнатная вилла',
            area: '140,00',
            date: '21.12.2017',
            pool: 'есть',
            bathroom: 2,
            parking: 3,
            bedroom: 4,
            zone: 'Бодрум',
            toSeaDistance: '5 минут пешком'
        }
        
    },

    {
        coordinates: [55.58267782261003, 37.48201731640626],
        hint: 'Текст сообщения',
        realty: {
            link: 'realty-page.html',
            promoState: 'Лучшее предложение',
            state: 'Продажа',
            price: '$ 100 000',
            img: 'assets/img/objects/2.jpg',
            name: '3х комнатная вилла',
            area: '140,00',
            date: '21.12.2017',
            pool: 'есть',
            bathroom: 2,
            parking: 3,
            bedroom: 4,
            zone: 'Бодрум',
            toSeaDistance: '5 минут пешком'
        }
        
    },

    {
        coordinates: [55.88267782261003,37.58201731640626],
        hint: 'Текст сообщения',
        realty: {
            link: 'realty-page.html',
            promoState: 'Лучшее предложение',
            state: 'Продажа',
            price: '$ 100 000',
            img: 'assets/img/objects/3.jpg',
            name: '4х комнатная вилла',
            area: '140,00',
            date: '21.12.2017',
            pool: 'есть',
            bathroom: 2,
            parking: 3,
            bedroom: 4,
            zone: 'Бодрум',
            toSeaDistance: '5 минут пешком'
        }
        
    }
]

const map = document.querySelector('.map');
var realtyMap;

if ( map ){
    ymaps.ready(initMap);
}

function initMap(){
    realtyMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9
    }, {
        searchControlProvider: 'yandex#search'
    });


    function createPlaceMark(realtyData){
        return new ymaps.Placemark(
        // Координаты метки
        realtyData.coordinates , {
        // Свойства
        // Текст метки
                hintContent: realtyData.hint,
                balloonHeader: '',
                balloonContent: `
                <a href="${realtyData.realty.link}" class="card">
                <span class="close close-card" href="#"></span>
                    <div class="card__img-block">
                        <div class="card__object-label promo">
                            ${realtyData.realty.promoState}
                        </div>
                        <div class="card__object-label state">
                            ${realtyData.realty.state}
                        </div>
                        
                        <img src="${realtyData.realty.img}" alt="" class="card__img">
                    </div>
    
                    <div class="card__text-block">
                        
                            <p class="card__object-name">${realtyData.realty.name}</p>
    
                            <div class="card__price-block">
                                <p class="card__price">${realtyData.realty.price}</p>
                                <img src="assets/img/icons/black-arrow.svg" alt="" class="arrow">
                            </div>
                        
    
                            <div class="card__area"><span class="card__area-value">${realtyData.realty.area} м<sup>2</sup></span>
                                <span class="card__area-label">Жилая площадь</span>
                            </div>
                            <div class="card__public-date">
                                ${realtyData.realty.date}
                            </div>
                            <div class="card__pool-top">
                                <span class="label">Бассейн</span>
                                <span class="value"> ${realtyData.realty.pool}</span>
                            </div>
                                
                            <div class="card__mob-center-options">
                                <div class="card__mob-options-cell">
                                    <span class="label">Ванных комнат</span>
                                    <span class="value">${realtyData.realty.bathroom}</span>
                                </div>
                                <div class="card__mob-options-cell">
                                    <span class="label">Парковочных мест</span>
                                    <span class="value">${realtyData.realty.parking}</span>
                                </div>
                                <div class="card__mob-options-cell">
                                    <span class="label">Спальных мест</span>
                                    <span class="value">${realtyData.realty.bedroom}</span>
                                </div>
                                <div>
                                    <div class="card__pool-mob">
                                        <span class="label">Бассейн</span>
                                        <span class="value">${realtyData.realty.pool}</span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="card__center-options">
                                <div class="card__center-option-cell">
                                    <span class="label">Ванных комнат</span>
                                    <span class="value">${realtyData.realty.bathroom}</span>
                                </div>
                                <div class="card__center-option-cell">
                                    <span class="label">Парковочных мест</span>
                                    <span class="value">${realtyData.realty.parking}</span>
                                </div>
                                <div class="card__center-option-cell">
                                    <span class="label">Спальных конат</span>
                                    <span class="value">${realtyData.realty.bedroom}</span>
                                </div>
                            </div>
    
                            <div class="card__bottom-cell-option">
                                <span class="label">Район:</span>
                                <span class="value">${realtyData.realty.zone}</span>
                            </div>
                            <div class="card__bottom-cell-option">
                                <span class="label">До моря</span>
                                <span class="value">${realtyData.realty.toSeaDistance}</span>
                            </div>
                            
    
                        
                    </div>
                </a>`
         }, {
                iconLayout: 'default#imageWithContent',
// Своё изображение иконки метки.
                iconImageHref: 'assets/img/icons/black-point.svg', // картинка иконки
                iconImageSize: [39, 39], // размеры картинки
                iconImageOffset: [-6, -10], // смещение картинки
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                balloonContentLayout: MyBalloonContentLayout,
                balloonPanelMaxMapArea: 0,
// Не скрываем иконку при открытом балуне.
                hideIconOnBalloonOpen: false,
// И дополнительно смещаем балун, для открытия над иконкой.
                balloonOffset: [-100, -230]
         });
    }


// Создание макета балуна
MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="popover top">' +
    
    '<div class="arrow"> </div>' +
    '<div class="popover-inner">' +
    
    '$[[options.contentLayout observeSize minWidth=235 maxWidth=1200 maxHeight=550]]' +
    '<a class="close" href="#">× </a>' +
    '</div>' +
    '</div>', {
/**
* Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
* @function
* @name build
*/
    build: function () {
       this.constructor.superclass.build.call(this);
       this._$element = $('.popover', this.getParentElement());
       this.applyElementOffset();
       this._$element.find('.close').on('click', $.proxy(this.onCloseClick, this));
    },
/**
* Удаляет содержимое макета из DOM.
* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
* @function
* @name clear
*/
     clear: function () {
       this._$element.find('.close')
          .off('click');
       this.constructor.superclass.clear.call(this);
    },

/**
* Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
* @function
* @name onSublayoutSizeChange
*/

    onSublayoutSizeChange: function () {
       MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
             if(!this._isElement(this._$element)) {
                     return;
             }
             this.applyElementOffset();
             this.events.fire('shapechange');
        },
/**
* Сдвигаем балун, чтобы середина указывала на точку привязки.
* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
* @function
* @name applyElementOffset
*/

                applyElementOffset: function () {
                       this._$element.css({
                              left: -(this._$element[0].offsetWidth / 2),
                              top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                       });
                },


/**
* Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
* @function
* @name onCloseClick
*/

                onCloseClick: function (e) {
                       e.preventDefault();
                       this.events.fire('userclose');
                },


/**
* Используется для автопозиционирования (balloonAutoPan).
* @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
* @function
* @name getClientBounds
* @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
*/

                getShape: function () {
                       if(!this._isElement(this._$element)) {
                              return MyBalloonLayout.superclass.getShape.call(this);
                       }
                       var position = this._$element.position();
                       return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                              [position.left, position.top], [
                                  position.left + this._$element[0].offsetWidth,
                                  position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight]
                       ]));
                },

/**
* Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
* @function
* @private

* @name _isElement
* @param {jQuery} [element] Элемент.
* @returns {Boolean} Флаг наличия.
*/

                _isElement: function (element) {
                       return element && element[0] && element.find('.arrow')[0];
                }
         }),



// Создание вложенного макета содержимого балуна.
         MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="wrap-realty-for-map">$[properties.balloonHeader] ' +
                '$[properties.balloonContent] </div>'
         );


    


        realtyList.forEach( rl => {
            let point = createPlaceMark(rl);   
            realtyMap.geoObjects.add(point);
        } )    

        //let ttt = createPlaceMark(realtyList[0]);
        // Добавление метки на карту
        


   
}



let visibleFilterCheckboxes = document.querySelectorAll('input[data-option]');
let formSubmits = document.querySelectorAll('button[data-form]');
let filterSelects = document.querySelectorAll('select[data-option]');


if ( formSubmits.length ){

    formSubmits.forEach( btn => {
        btn.addEventListener('click', function(){
            let targetForm = document.querySelector(this.getAttribute('data-form'));
            targetForm.submit();
        })
    } )

}

if ( filterSelects.length ) {
    filterSelects.forEach( sel => {
        let target = document.querySelector( sel.getAttribute('data-option') );
        target.value = sel.value;
        sel.addEventListener( 'change', function(){
            target.value = this.value;
        })
    } ) 

}


if ( visibleFilterCheckboxes.length ){
    visibleFilterCheckboxes.forEach( cb => {

    

        let target = document.querySelector( cb.getAttribute('data-option') );        
        
        switch ( this.type ){
            case "checkbox":
                if ( this.checked ) { 
                    target.checked = true;
                } else{
                    target.checked = false;
                }
            break;
            case "text", "tel": 
                target.value = this.value
            break
        }
    




    cb.addEventListener('change', function(){

        let target = document.querySelector( this.getAttribute('data-option') );        
        
        switch ( this.type ){
            case "checkbox":
                if ( this.checked ) { 
                    target.checked = true;
                } else{
                    target.checked = false;
                }
            break;
            case "text", "tel": 
                target.value = this.value
            break
        }
    })
    } )
}

const sortSelects = document.querySelectorAll('.sort-select');

sortSelects.forEach( select => {
    select.addEventListener('change', function(){
        const targetFormLink = this.getAttribute('data-sort-form');
        form = document.querySelector(targetFormLink);
        form.querySelector('input[name="sortBy"]').value = this.value
    })
} )