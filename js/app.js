document.addEventListener('DOMContentLoaded', () => {
    let keyses = document.querySelectorAll('.keys-item');
    if (keyses.length > 0) {
        let showAllKeyses = document.querySelector('.keys-all-text')
        if (keyses.length > 2) {
            keyses[0].classList.add('active')
            keyses[1].classList.add('active')
            showAllKeyses.onclick = () => {
                for (let i = 0; keyses.length > i; i++) {
                    keyses[i].classList.add('active')
                    showAllKeyses.classList.remove('active')
                }
                showAllKeyses.classList.remove('active')

            }
        } else {
            for (let i = 0; keyses.length > i; i++) {
                keyses[i].classList.add('active')
                showAllKeyses.classList.remove('active')
            }
        }
    }

    const rewSlider = new Swiper('.rew-slider', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 2,
        navigation: {
            nextEl: '.rew-arrow-next',
            prevEl: '.rew-arrow-prev'
        }
    });

    const rewBtns = document.querySelectorAll('.rew-slide-original');
    const rewPopupImg = document.querySelector('.rew-popup-img')
    const rewPopup = document.querySelector('.rew-popup')
    if (rewBtns.length > 0) {
        for (let i = 0; rewBtns.length > i; i++) {
            rewBtns[i].onclick = () => {
                let dataImg = rewBtns[i].getAttribute('data-href');
                rewPopupImg.setAttribute('src', dataImg);
                rewPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }

    const closePopupsBtns = document.querySelectorAll('.closePopupsBtn')

    if (closePopupsBtns.length > 0) {
        for (let i = 0; closePopupsBtns.length > i; i++) {
            closePopupsBtns[i].onclick = () => {
                const popups = document.querySelectorAll('.popup')
                for (let j = 0; popups.length > j; j++) {
                    popups[j].classList.remove('active')
                }
                for (let j = 0; closePopupsBtns.length > j; j++) {
                    closePopupsBtns[j].classList.remove('active')
                }
            }
        }
    }

    const mashinTextBlock = document.querySelector('#pechatMashin');

    if (mashinTextBlock) {
        var typed = new Typed('#pechatMashin', {
            strings: ['ЕЖЕМЕСЯЧНАЯ', 'КОМПЛЕКСНАЯ', 'АБОНЕНТСКАЯ'],
            typeSpeed: 100,
            loop: true,
            backSpeed: 20,
        });
    }

    const formBtns = document.querySelectorAll('.form-btn')

    if (formBtns.length > 0) {
        const formPopup = document.querySelector('.form-popup')
        for (let i = 0; formBtns.length > i; i++) {
            formBtns[i].onclick = () => {
                formPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }
    const mapBtns = document.querySelectorAll('.map-popup-btn')

    if (mapBtns.length > 0) {
        const mapPopup = document.querySelector('.finde-us-popup')
        for (let i = 0; mapBtns.length > i; i++) {
            mapBtns[i].onclick = () => {
                mapPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }
    const bigForm = document.querySelectorAll('.big-form-popup-btn')

    if (bigForm.length > 0) {
        const BigFormPopup = document.querySelector('.big-form-popup')
        for (let i = 0; bigForm.length > i; i++) {
            bigForm[i].onclick = () => {
                BigFormPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }



    let sections = document.querySelector('section');

    if (sections.classList.contains('whiteHead')) {
        document.querySelector('header').classList.add('white')
    }


    document.querySelectorAll('.blog__tabcontent').forEach(tabContent => {
        let blogItems = tabContent.querySelectorAll('.blog__item');
        if (blogItems.length > 0) {
            let showAllBlog = tabContent.querySelector('.blog__more-btn');
            if (blogItems.length > 4) {
                for (let i = 0; i < 4; i++) {
                    blogItems[i].classList.add('active');
                }
                showAllBlog.addEventListener('click', () => {
                    let allActive = true;
                    blogItems.forEach(item => {
                        if (!item.classList.contains('active')) {
                            allActive = false;
                        }
                    });
                    if (allActive) {
                        for (let i = 4; i < blogItems.length; i++) {
                            blogItems[i].classList.remove('active');
                        }
                        showAllBlog.querySelector('p').textContent = 'Показать еще';
                    } else {
                        blogItems.forEach(item => item.classList.add('active'));
                        showAllBlog.querySelector('p').textContent = 'Скрыть';
                    }
                });
            } else {
                blogItems.forEach(item => item.classList.add('active'));
                showAllBlog.classList.remove('active');
            }
        }
    });

})

function openCity(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("blog__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("blog__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";

    var indicator = document.querySelector('.indicator');
    indicator.style.left = evt.currentTarget.offsetLeft + 'px';
    indicator.style.width = evt.currentTarget.offsetWidth + 'px';
}

window.onload = function () {
    var activeButton = document.querySelector('.blog__tablinks.active');
    if (activeButton) {
        var indicator = document.querySelector('.indicator');
        indicator.style.left = activeButton.offsetLeft + 'px';
        indicator.style.width = activeButton.offsetWidth + 'px';
    }
};