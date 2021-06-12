import { Link, routes } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const SettingsPage = () => {
  return (
    <>
      <AppLayout>
        <h1>SettingsPage</h1>
        <p>
          Find me in <code>./web/src/pages/SettingsPage/SettingsPage.js</code>
        </p>
        <p>
          My default route is named <code>settings</code>, link to me with `
          <Link to={routes.settings()}>Settings</Link>`
        </p>
      </AppLayout>
    </>
  )
}

export default SettingsPage
