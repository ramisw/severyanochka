'use client'
import styles from './Vacancies.module.scss'
import {useState} from "react";


export default function Vacancies() {

    const [vacancies, setVacancies] = useState([
        {
            id: 1,
            position: 'Seller',
            requirements: 'requirements requirements requirements requirements requirements requirements',
        },
        {
            id: 2,
            position: 'Seller',
            requirements: 'requirements requirements requirements requirements requirements requirements',
        },
        {
            id: 3,
            position: 'Seller',
            requirements: 'requirements requirements requirements requirements requirements requirements',
        },
        {
            id: 4,
            position: 'Seller',
            requirements: 'requirements requirements requirements requirements requirements requirements',
        },
    ])

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Вакансии</h1>
            <div className={styles.row}>
                {vacancies.map(vac => (
                    <div className={styles.card} key={vac.id}>
                        <h3 className={styles.cardTitle}>{vac.position}</h3>
                        <p className={styles.descr}>{vac.requirements}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}