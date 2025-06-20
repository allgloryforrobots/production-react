import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"
import { AppRouter } from "./providers/router"
import { Navbar } from 'widgets/Navbar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Sidebar } from 'widgets/Sidebar'

function Component() {
  const { t, i18n } = useTranslation();

  return <h1>{t('Тестовый перевод')}</h1>
}


const App = () => {
    const { theme, toggleTheme} = useTheme()
           
    return <div className={classNames('app', {}, [theme])}>
        <Suspense fallback="">
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div> 
        </Suspense>
    </div>
}

export default App