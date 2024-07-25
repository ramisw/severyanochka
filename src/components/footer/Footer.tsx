import PrimaryLogo from '@/assets/logo-primary.svg'
import InstagramIcon from '@/assets/instagram.svg'
import VkIcon from '@/assets/vk.svg'
import FacebookIcon from '@/assets/facebook.svg'
import OkIcon from '@/assets/ok.svg'
import PhoneIcon from '@/assets/phone.svg'
import styles from './Footer.module.scss'
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <Link href={'/'}>
                    <PrimaryLogo width={64} height={44} />
                </Link>
                <div className={styles.menu}>
                    <Link href={'/about'}>О компании</Link>
                    <Link href={'/contacts'}>Контакты</Link>
                    <Link href={'/vacancies'}>Вакансии</Link>
                    <Link href={'/articles'}>Статьи</Link>
                    <Link href={'/privacy'}>Политика обработки персональных данных</Link>
                </div>
                <div className={styles.icons}>
                    <InstagramIcon/>
                    <VkIcon/>
                    <FacebookIcon/>
                    <OkIcon/>
                </div>
                <div className={styles.phone}>
                    <PhoneIcon/>
                    <span>8 800 777 33 33</span>
                </div>
            </div>
        </footer>
    )
}