/**
 * @description Anclas con scrolling para la navegacion
 */
const anchorScrolling = () => {

    let mainNavLinks = document.querySelectorAll('[data-navigation="repository"] a');
    
    window.addEventListener("scroll", e => {
        let fromTop = window.scrollY;
    
        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section) {
                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    link.classList.add("ns-sidebar__link--selected");
                } else {
                    link.classList.remove("ns-sidebar__link--selected");
                }
            }
        });
    });

};