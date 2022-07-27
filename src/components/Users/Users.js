import User from './User/User'

import s from './Users.module.sass'

import sort from './img/sort.svg'
import leanneGraham from './img/leanneGraham.svg'
import { useEffect } from 'react'

export default function Users(data) {

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     console.log(res.json())
  //   })
  // }, [])
  // fetch

  return <section className={s.section}>

    <div className={s.inner}>

      <div className={s.header}>
        <h4>All users</h4>
        <div className={s.right}>
          <img
            src={sort}
            alt=""
          />
          <span>Sort</span>
        </div>
      </div>

      <div className={s.content}>
        <div className={s.title}>
          <span>User details</span>
          <span>Company name</span>
          <span>Email</span>
          <span>Distance</span>
        </div>

        <div className={s.users}>
          <div className={s.userInner}>

            <div className={s.userDetails}>
              <img
                src={leanneGraham}
                alt=""
              />
              <div>
                <p>Leanne Graham</p>
                <span>Gwenborough</span>
              </div>
            </div>

            <div className={s.companyName}>
              <p>Microsoft</p>
              <span>harness real-time e-markets</span>
            </div>

            <div className={s.email}>
              <p>asd@asd.asd</p>
              <span>hildegard.org</span>
            </div>

            <div className={s.distance}>
              High
            </div>

          </div>
        </div>
      </div>

    </div>

  </section>

}