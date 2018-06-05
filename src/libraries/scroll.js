import { TweenLite, Power1 } from 'gsap/all'

document.addEventListener('DOMContentLoaded', function() {
  let sections = document.querySelectorAll('section')

  sections.forEach(function(section) {
    TweenLite.to(section, 0.5, { y: '100%', scale: 1, visibility: 'hidden', zIndex: 1 })
  })

  let section01 = document.querySelector('.section-01')
  TweenLite.to(section01, 0.5, { y: '0%', scale: 1, visibility: 'visible', zIndex: 10, ease: Power1.easeInOut })

  window.addEventListener('mousewheel', function (e) {
    let section = e.target.closest('section')

    if(e.detail > 0 || e.wheelDelta < 0) {

      if(section.nextElementSibling === null) {
        return false
      }

      // TweenLite.to(window, 0.75, {
      //   scrollTo: `#${section.nextElementSibling.id}`,
      //   ease: Power4.easeInOut
      // })

      TweenLite.to(section.nextElementSibling, 0.5, { y: '0%', scale: 1, visibility: 'visible', zIndex: 10, ease: Power1.easeInOut })
      TweenLite.to(section, 0, { zIndex: 1 })
      TweenLite.to(section, 0.5, { y: '0%', scale: 0.5, ease: Power1.easeInOut })
      TweenLite.to(section, 0.5, { delay: 0.5, y: '100%', scale: 1, visibility: 'hidden', ease: Power1.easeInOut }, '+=0.5')

      section.nextElementSibling.onEnter()
      section.onLeave()
    }
    else {

      if(section.previousElementSibling === null) {
        return false
      }

      // TweenLite.to(window, 0.75, {
      //   scrollTo: `#${section.previousElementSibling.id}`,
      //   ease: Power4.easeInOut
      // })

      TweenLite.to(section.previousElementSibling, 0.5, { y: '0%', scale: 1, visibility: 'visible', zIndex: 10, ease: Power1.easeInOut })
      TweenLite.to(section, 0, { zIndex: 1 })
      TweenLite.to(section, 0.5, { y: '0%', scale: 0.5, ease: Power1.easeInOut })
      TweenLite.to(section, 0.5, { delay: 0.5, y: '100%', scale: 1, visibility: 'hidden', ease: Power1.easeInOut }, '+=0.5')

      section.previousElementSibling.onEnter()
      section.onLeave()
    }

    return false
  })
})
