import { Link, routes } from '@redwoodjs/router'
import { Page, CalloutCard, Layout, MediaCard } from '@shopify/polaris'
import AppLayout from 'src/layouts/AppLayout/AppLayout'
import BarChartIdeasCell from 'src/components/BarChartIdeasCell/BarChartIdeasCell'

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
            <Layout.Section>
              <MediaCard
                title="Total ideas value in your organisation"
                primaryAction={{
                  content: 'Detail',
                  url: '/admin/ideas',
                }}
                description="Everyone can power up cost opmitization"
                popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
              >
                <BarChartIdeasCell />
              </MediaCard>
            </Layout.Section>
          </Layout>
        </Page>
      </AppLayout>
    </>
  )
}

export default AdminPage
