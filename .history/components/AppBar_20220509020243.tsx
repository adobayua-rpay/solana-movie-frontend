import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import img from './sol2.png'
import img2 from './delrey.png'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src={img} height={50} width={200} />
            <span>  <Image src={img2} height={50} width={200} /> </span>
            <WalletMultiButton />
        </div>
    )
}