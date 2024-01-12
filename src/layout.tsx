'use client';
import store from './store'
import { Provider } from 'react-redux'
import styles from './styles/app.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={styles.body}>
        {children}
        </body>
      </html>
    </Provider>

  )
}
