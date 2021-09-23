    'use strict';
    let tabs = document.querySelectorAll('.tab');
    let links = document.querySelectorAll('.link a');
    for(let link of links){
        link.addEventListener('click',function(event){
            event.preventDefault();
            for(let tab of tabs){
                tab.classList.remove('active')
            }
            this.parentElement.parentElement.classList.add('active');
        })
    }