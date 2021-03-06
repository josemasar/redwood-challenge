import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

import '@shopify/polaris/dist/styles.css'
import enTranslations from '@shopify/polaris/locales/en.json'
import { AppProvider } from '@shopify/polaris'
import theme from 'src/components/adminUI/theme'

const App = () => (
  <AppProvider theme={theme} i18n={enTranslations}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </FatalErrorBoundary>
  </AppProvider>
)

export default App
