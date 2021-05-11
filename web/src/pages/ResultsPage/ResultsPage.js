import { Link, routes } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const ResultsPage = () => {
  return (
    <>
      <AppLayout>
          <h1>ResultsPage</h1>
          <p>
            Find me in <code>./web/src/pages/ResultsPage/ResultsPage.js</code>
          </p>
          <p>
            My default route is named <code>results</code>, link to me with `
            <Link to={routes.results()}>Results</Link>`
          </p>
      </AppLayout>
    </>
  )
}

export default ResultsPage
