import Card from './Card/Card'

import s from './Statistics.module.sass'

export default function Statistics() {

  return <section className={s.section}>
    <Card title='Active' number='60' />
    <Card title='Online' number='16' />
    <Card title='Filtered' number='43' />
    <Card title='Banned' number='64' />
  </section>
}