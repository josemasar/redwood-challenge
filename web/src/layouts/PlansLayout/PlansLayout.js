import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { Page, Layout } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const PlansLayout = (props) => {
  return (
    <>
    <AppLayout>
        <Page fullWidth title="Plans">
          <Layout>
            <Layout.Section>
              <div className="rw-scaffold">
                <Toaster />
                <header className="rw-header">
                  <h1 className="rw-heading rw-heading-primary">
                    <Link to={routes.plans()} className="rw-link">
                      Plans
                    </Link>
                  </h1>
                  <Link to={routes.newPlan()} className="rw-button rw-button-green">
                    <div className="rw-button-icon">+</div> New Plan
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

export default PlansLayout



