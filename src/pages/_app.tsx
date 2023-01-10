import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AnimatePresence } from 'framer-motion'
// // import { DefaultSeo } from 'next-seo'
import { useMediaQuery } from '@material-ui/core'
import NextNProgress from 'nextjs-progressbar'

import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
// import { nextNProgressStyled } from '../styles/global'

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://media.dev.br${router.route}`

  const isBreakpoint = useMediaQuery('(max-width:768px)')

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <DefaultSeo
        titleTemplate="%s - James Wallis"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description: 'The personal website for James Wallis, developer.',
          site_name: 'James Wallis | wallis.dev',
          images: []
        }}
        canonical={url}
      /> */}
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <NextNProgress color="#e44b42ff" options={{ showSpinner: false }} />
          <Header isBreakpoint={isBreakpoint} />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component
              {...pageProps}
              canonical={url}
              key={url}
              isBreakpoint={isBreakpoint}
            />
          </AnimatePresence>

          <Footer />

          <GlobalStyle />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default MyApp
