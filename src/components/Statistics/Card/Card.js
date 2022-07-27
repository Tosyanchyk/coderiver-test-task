import s from './Card.module.sass'

export default function Card(props) {
  const {
    title,
    number
  } = props
  return <div className={s.card}>
    <div className={s.inner}>
      <p>{title}</p>
      <span>{number}</span>
    </div>
  </div>
}