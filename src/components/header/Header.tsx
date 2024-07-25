import Menu from '@/assets/menu.svg'
import LogoSecondary from '@/assets/logo-secondary.svg'
import {Search} from "@/components/search/Search";
import FavoritesIcon from "@/assets/favorites.svg";
import OrdersIcon from "@/assets/orders.svg";
import CartIcon from "@/assets/cart.svg";
import ArrowDownIcon from "@/assets/arrow-down.svg";
import UserIcon from "@/assets/user.svg";
import styles from './Header.module.scss'
import Link from "next/link";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.row}>
                <Link href={'/'}>
                    <LogoSecondary width={152} height={32}/>
                </Link>
                <Link className={styles.btn} href={'/catalog'}>
                    <Menu fill={'white'}/>
                    Каталог
                </Link>
                <Search/>
                <div className={styles.menu}>
                    <Link className={styles.menuItem} href={'/favorites'}>
                        <FavoritesIcon/>
                        <span>Избранное</span>
                    </Link>
                    <Link className={styles.menuItem} href={'/orders'}>
                        <OrdersIcon/>
                        <span>Заказы</span>
                    </Link>
                    <Link className={styles.menuItem} href={'/cart'}>
                        <CartIcon/>
                        <span>Корзина</span>
                    </Link>
                </div>
                <div className={styles.user}>
                    <UserIcon/>
                    <span>Алексей Хренов</span>
                    <ArrowDownIcon/>
                </div>
            </div>
        </header>
    )
}