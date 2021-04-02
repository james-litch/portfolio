import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavBar from '../navigation/navbar'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => (<>
    <Head> <title>{title}</title> </Head>
    <NavBar />
    {children}
</>)

export default Layout
