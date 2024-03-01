import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import icon from '../../../public/icon.png'
import icon2 from '../../../public/icon2.png'
import icon3 from '../../../public/icon3.png'
import savat from '../../../public/savat.png'
import book from '../../../public/book.png'
import page from '../../../public/page.png'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Image
                        src={logo}
                        width={28}
                        height={34}
                    />
                    <h1>Pages</h1>
                    <div className={styles.icon}>
                        <Image src={icon} />
                        <Image src={icon2} />
                        <Image src={icon3} />
                    </div>
                    <div className={styles.link}>
                        <Link className={styles.links} href="../home">Home</Link>
                        <Link className={styles.links} href="../page">Pages</Link>
                        <Link className={styles.links} href="../about">About</Link>
                        <Link className={styles.links} href="../services">Services</Link>
                        <Link className={styles.links} href="../contact">Contact</Link>
                    </div>
                    <Image src={savat} />
                    <button className={styles.button}>Order Today</button>
                </nav>

                <div className={styles.medium}>
                    <div className={styles.card}>
                        <h3>-- Welcome to Pages</h3>
                        <h1>Books are uniquely
                            portable magic </h1>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </p>
                        <div className={styles.buttons}>
                            <button className={styles.button}>Order Today</button>
                            <div className={styles.btext}>
                                Read Free Demo
                            </div>
                        </div>
                        <div className={styles.length}>
                            <Image src={page} />
                            <Image src={page} />
                            <Image src={page} />
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image src={book} />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header