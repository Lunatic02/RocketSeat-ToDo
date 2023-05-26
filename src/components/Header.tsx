import style from './Header.module.css'
import Logo from '../assets/Logo.svg'

export  function Header(){
  return(
    <header className={style.header}>
      <div className={style.container}>
        <div>
          <img className={style.logo} src={Logo} alt="" />
        </div>
      </div>
    </header>
  )
}