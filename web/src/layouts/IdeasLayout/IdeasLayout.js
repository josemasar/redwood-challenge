import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { Page, Layout } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const IdeasLayout = (props) => {
  return (
    <>
      <AppLayout>
        <Page fullWidth title="Ideas">
          <Layout>
            <Layout.Section>
              <div className="rw-scaffold">
                <Toaster />
                <header className="rw-header">
                  <h1 className="rw-heading rw-heading-primary">
                    <Link to={routes.ideas()} className="rw-link">
                      Ideas
                    </Link>
                  </h1>
                  <Link
                    to={routes.newIdea()}
                    className="rw-button rw-button-green"
                  >
                    <div className="rw-button-icon">+</div> New Idea
                  </Link>
                </header>
                <main className="rw-main">{props.children}</main>
              </div>
            </Layout.Section>
          </Layout>
        </Page>
      </AppLayout>
    </>
  )
}

export default IdeasLayout
