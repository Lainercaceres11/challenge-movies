import css from "./Loader.module.css"

export const Loader = () => {
  return (
   <div className={css.loader__container}>
     <span className={css.loader}></span>
   </div>
  )
}
