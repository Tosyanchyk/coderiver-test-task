import s from './Header.module.sass'

import search from './img/search.svg'
import notification from './img/notification.svg'
import profilePhoto from './img/profilePhoto.svg'

export default function Header() {
  return <section className={s.section}>

    <div className={s.left}>
      <h3>Users</h3>

    </div>

    <div className={s.right}>
      <div className={s.icons}>
        <img
          src={search}
          alt=''
        />
        <img
          src={notification}
          alt=''
        />
      </div>
      <div className={s.userInfo}>
        <span>Jones Ferdinand</span>
        <img
          src={profilePhoto}
          alt=''
        />
      </div>
    </div>

  </section>
}