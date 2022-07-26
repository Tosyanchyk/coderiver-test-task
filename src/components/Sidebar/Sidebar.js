import s from './Sidebar.module.sass'

import dashboard from './img/dashboard.svg'
import overview from './img/overview.svg'
import users from './img/users.svg'
import ideas from './img/ideas.svg'
import contacts from './img/contacts.svg'
import agents from './img/agents.svg'
import articles from './img/articles.svg'
import settings from './img/settings.svg'
import subscription from './img/subscription.svg'

export default function Sidebar() {
  return <section className={s.section}>
    <div className={s.title}>
      <img src={dashboard} alt="" />
      <span>Dashboard</span>
    </div>

    <ul>
      <li>
        <a href="#">
          <img
            src={overview} alt=""
          />
          Overview
        </a>
      </li>
      <li className={s.active}>
        <a href="#">
          <img
            src={users} alt=""
          />
          Users
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src={ideas} alt=""
          />
          Ideas
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src={contacts} alt=""
          />
          Contacts
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src={agents} alt=""
          />
          Agents
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src={articles} alt=""
          />
          Articles
        </a>
      </li>
    </ul>

    <ul className={s.additional}>
      <li>
        <a href="#">
          <img
            src={settings}
            alt=""
          />
          Settings
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src={subscription}
            alt=""
          />
          Subscription
        </a>
      </li>
    </ul>

  </section>
}