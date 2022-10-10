import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs

const Home: NextPage = () => {

    function handlePdf () {
        var docDefinition = {
            info: {
                title: 'awesome Document',
                author: 'john doe',
                subject: 'subject of document',
                keywords: 'keywords for document',
            },
            content: 'This is an sample PDF printed with pdfMake'
        }

        pdfMake.createPdf( docDefinition ).open()
    }

    return (
        <div className={ styles.container }>
            <Head>
                <title>PdfMake test</title>
                <meta name="description" content="PdfMake test" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <button onClick={ handlePdf }>Get pdf</button>
        </div>
    )
}

export default Home
