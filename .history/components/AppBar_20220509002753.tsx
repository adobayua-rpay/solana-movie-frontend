import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import img from './sol2.png'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src={img} height={50} width={200} />
            <span> DelreyIO </span>
            <WalletMultiButton />
        </div>
    )
}