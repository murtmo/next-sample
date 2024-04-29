import styles from './loading.module.css';

export default function Loading({ isShow }: {
  isShow: boolean;
}) {
  return(
    <div data-is-show={ String(isShow) } className={styles.loading}>
      <p>Loading</p>
    </div>
  )
}
