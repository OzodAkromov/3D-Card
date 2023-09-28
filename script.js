// card_1
const block = document.querySelector('.container')
const card = document.querySelector('.card')
const title = document.querySelector('h3')
const active_text = document.querySelector('.text-box .active-text h3.active')
const title_none = document.querySelector('.text-box .active-text h3.none')
const text = document.querySelector('p')
const img = document.querySelector('.image-box img.active')
const img_air = document.querySelector('.image-box img.air')
const tab_img = document.querySelector('.image-box img ')
const circle = document.querySelector('.image-box .circle')
const link  = document.querySelector('a')
const btns = document.querySelector('.btn-box')
const none = document.querySelector('.btn-box .none')
const tab_btns = document.querySelector('.btn-box .active')
const content = document.querySelector('.image-box img.active')
const content_none = document.querySelector('.image-box img.air')


// card_2
const card_2 = document.querySelector('.card-2')
const img_2 = document.querySelector('.image-box-2 .img-2')
const circle_2 = document.querySelector('.image-box-2 .circle-2')
const title_2 = document.querySelector('.title_2')
const active_texts = document.querySelector('.container .card-2 .text-box-2 .active-text-2 h3.active')
const title_none_2 = document.querySelector('.container .card-2 .text-box-2 .active-text-2 h3.none')
const text_2 = document.querySelector('.p_2')
const btns_2 = document.querySelector('.btn-box-2')
const link_2  = document.querySelector('.link_2')
const btns_tab = document.querySelector('.btn-box-2')
const none_tab = document.querySelector('.btn-box-2 .none')
const tab_btns_2 = document.querySelector('.btn-box-2 .active')
const content_2 = document.querySelector('.image-box-2 img.active')
const content_none_2 = document.querySelector('.image-box-2 img.puma')

// card_3
const card_3 = document.querySelector('.card-3')
const img_3 = document.querySelector('.image-box-3 .img-3')
const circle_3= document.querySelector('.image-box-3 .circle-3')
const title_3 = document.querySelector('.title_3')
const active_texts_3 = document.querySelector('.container .card-3 .text-box-3 .active-text-3 h3.active')
const title_none_3 = document.querySelector('.container .card-3 .text-box-3 .active-text-3 h3.none')
const text_3 = document.querySelector('.p_3')
const btns_3 = document.querySelector('.btn-box-3')
const link_3  = document.querySelector('.link_3')
const btns_tab_3 = document.querySelector('.btn-box-3')
const none_tab_3 = document.querySelector('.btn-box-3 .none')
const tab_btns_3 = document.querySelector('.btn-box-3 .active')
const content_3 = document.querySelector('.image-box-3 .img-3.active')
const content_none_3 = document.querySelector('.image-box-3 img.puma-3')

card.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX
    let mouseY = event.clientY

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    let x = windowWidth / 2 - mouseX
    let y = windowHeight / 2 - mouseY

    card.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`
    card.style.transition = '0s'

    img.style.transform = `translateZ(70px) rotate(45deg)`
    img_air.style.transform = `translateZ(70px) rotate(45deg)`
    circle.style.transform = 'scale(0.8)'
    title.style.transform = 'translateZ(50px)'
    title_none.style.transform = 'translateZ(30px)'
    text.style.transform = 'translateZ(30px)'
    btns.style.transform = 'translateZ(30px)'
    link.style.transform = 'translateZ(30px)'
})

card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    img.style.transform = `translateZ(0px) rotate(0deg)`
    img_air.style.transform = `translateZ(0px) rotate(0deg)`

    card.style.transition = '0.5s'
    circle.style.transform = 'scale(1)'
    title.style.transform = 'translateZ(0px)'
    title_none.style.transform = 'translateZ(0px)'
    text.style.transform = 'translateZ(0px)'
    btns.style.transform = 'translateZ(0px)'
    link.style.transform = 'translateZ(0px)'
    
})

// card-2

card_2.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX
    let mouseY = event.clientY
    
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    
    let x = windowWidth / 2 - mouseX
    let y = windowHeight / 2 - mouseY
    
    card_2.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`
    card_2.style.transition = '0s'
    
    img_2.style.transform = `translateZ(70px) rotate(45deg)`
    content_none_2.style.transform = `translateZ(70px) rotate(45deg)`
    circle_2.style.transform = 'scale(0.8)'
    title_2.style.transform = 'translateZ(50px)'
    title_none_2.style.transform = 'translateZ(60px)'
    text_2.style.transform = 'translateZ(60px)'
    btns_2.style.transform = 'translateZ(60px)'
    link_2.style.transform = 'translateZ(60px)'
})

card_2.addEventListener('mouseleave', () => {
    card_2.style.transform = `rotateX(0deg) rotateY(0deg)`
    img_2.style.transform = `translateZ(0px) rotate(0deg)`
    content_none_2.style.transform = `translateZ(0px) rotate(0deg)`

    card_2.style.transition = '0.5s'
    circle_2.style.transform = 'scale(1)'
    circle_2.style.transition = '0.5s'
    title_2.style.transform = 'translateZ(0px)'
    title_none_2.style.transform = 'translateZ(0px)'
    text_2.style.transform = 'translateZ(0px)'
    btns_2.style.transform = 'translateZ(0px)'
    link_2.style.transform = 'translateZ(0px)'
})

// card-3

card_3.addEventListener('mousemove', (event) => {
    let mouseX = event.clientX
    let mouseY = event.clientY
    
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    
    let x = windowWidth / 2 - mouseX
    let y = windowHeight / 2 - mouseY
    
    card_3.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`
    card_3.style.transition = '0s'
    
    img_3.style.transform = `translateZ(70px) rotate(45deg)`
    content_none_3.style.transform = `translateZ(70px) rotate(45deg)`
    circle_3.style.transform = 'scale(0.8)'
    title_3.style.transform = 'translateZ(50px)'
    title_none_3.style.transform = 'translateZ(30px)'
    text_3.style.transform = 'translateZ(30px)'
    btns_3.style.transform = 'translateZ(30px)'
    link_3.style.transform = 'translateZ(30px)'
})

card_3.addEventListener('mouseleave', () => {
    card_3.style.transform = `rotateX(0deg) rotateY(0deg)`
    img_3.style.transform = `translateZ(0px) rotate(0deg)`
    content_none_3.style.transform = `translateZ(0px) rotate(0deg)`

    card_3.style.transition = '0.5s'
    circle_3.style.transform = 'scale(1)'
    circle_3.style.transition = '0.5s'
    title_3.style.transform = 'translateZ(0px)'
    title_none_3.style.transform = 'translateZ(0px)'
    text_3.style.transform = 'translateZ(0px)'
    btns_3.style.transform = 'translateZ(0px)'
    link_3.style.transform = 'translateZ(0px)'
})

// click

none.addEventListener('click', () => {
    tab_btns.classList.remove('active')
    active_text.classList.remove('active')
    content.classList.remove('active')
    content_none.classList.add('active')
    none.classList.add('active')
    title_none.classList.add('active')
    circle.style.background = 'linear-gradient(to right bottom, white, red)'
})

tab_btns.addEventListener('click', (index) => {
    none.classList.remove('active')
    tab_btns.classList.add('active')
    title_none.classList.remove('active')
    content.classList.add('active')
    content_none.classList.remove('active')
    active_text.classList.add('active')

})

// click-2

none_tab.addEventListener('click', () => {
    tab_btns_2.classList.remove('active')
    active_texts.classList.remove('active')
    content_2.classList.remove('active')
    content_none_2.classList.add('active')
    none_tab.classList.add('active')
    title_none_2.classList.add('active')
    circle_2.style.background = 'linear-gradient(to right bottom, gray, white)'
    circle_2.style.transition = '0s'
})

tab_btns_2.addEventListener('click', (index) => {
    none_tab.classList.remove('active')
    tab_btns_2.classList.add('active')
    title_none_2.classList.remove('active')
    content_2.classList.add('active')
    content_none_2.classList.remove('active')
    active_texts.classList.add('active')
    circle_2.style.background =  'linear-gradient(to right bottom, yellow, aquamarine)'
    circle_2.style.transition = '0s'
})

// click-3

none_tab_3.addEventListener('click', () => {
    tab_btns_3.classList.remove('active')
    active_texts_3.classList.remove('active')
    content_3.classList.remove('active')
    content_none_3.classList.add('active')
    none_tab_3.classList.add('active')
    title_none_3.classList.add('active')

    circle_3.style.margin = '60px 50px 89px 87px'
    circle_3.style.background = 'linear-gradient(to right bottom, white, black)'
    circle_3.style.transition = '0s'

})

tab_btns_3.addEventListener('click', (index) => {
    none_tab_3.classList.remove('active')
    tab_btns_3.classList.add('active')
    title_none_3.classList.remove('active')
    content_3.classList.add('active')
    content_none_3.classList.remove('active')
    active_texts_3.classList.add('active')

    circle_3.style.margin = '19px 10px 89px 87px'
    circle_3.style.background =  'linear-gradient(to right bottom, white, khaki)'
    circle_3.style.transition = '0s'
})