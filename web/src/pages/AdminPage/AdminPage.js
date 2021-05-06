import { Link, routes } from '@redwoodjs/router'
import { Page, CalloutCard, Layout } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const AdminPage = () => {
  return (
    <>
      <AppLayout>
        <Page fullWidth title="Dashboard">
          <Layout>
            <Layout.Section>
              <CalloutCard
                title="Got an idea?"
                primaryAction={{
                  content: 'New idea',
                  url: '/admin/ideas/new',
                }}
              >
                <p>Create a new idea to reduce cost</p>
              </CalloutCard>
            </Layout.Section>
          </Layout>
        </Page>
      </AppLayout>
    </>
  )
}

export default AdminPage
