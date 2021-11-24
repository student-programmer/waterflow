import React from 'react'
import icon from './../../assets/waterfool.png';
import footer from "./Footer.module.css"
const Footer = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors){
      anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
          behavior:"smooth",
          block:"start"
        })
      })
    }
    return (
        <div className={footer.wrapper}>
          <img src={icon} alt='icon' className={footer.icon} />
          <p className={footer.waterfalls}>waterfalls</p>
          <h1 className={footer.messengers}>Соц.сети</h1>
          <ul className={footer.massangerList}>
            <li className={footer.massangerItems}><a href="https://vk.com/id524420909" target="_blank"><i class="fab fa-vk"></i></a></li>
            <li className={footer.massangerItems}><a href="https://www.instagram.com/roman_podobny/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li className={footer.massangerItems}><a href="https://www.facebook.com/profile.php?id=100025315591591" target="_blank"><i class="fab fa-facebook-square"></i></a> </li>
            <li className={footer.massangerItems}><a href="https://github.com/tazer16179" target="_blank"><i class="fab fa-github-square"></i></a></li>
          </ul>
          <p className={footer.about}>Если вы хотите задать вопрос, или уточнить какую-либо информацию, задавайте свои вопросы у меня в соц.сетях.</p>
        </div>
    )
}

export default Footer
