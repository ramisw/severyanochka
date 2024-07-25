import styles from './Contacts.module.scss'

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <h1 className={styles.title}>Контакты</h1>
            <div className={styles.row}>
                <div>
                    <span>Бухгалтерия, склад</span>
                    <b>+7 82140 92619</b>
                </div>
                <div>
                    <span>Вопросы по системе лояльности</span>
                    <b>+7 908 716 33 97</b>
                </div>
            </div>
        </div>
    )
}