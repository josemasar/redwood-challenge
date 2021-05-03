import { Link, routes } from '@redwoodjs/router'
import FrameAdmin from 'src/components/adminUI/FrameAdmin'
import { Page, CalloutCard, Layout } from '@shopify/polaris'

const AdminPage = () => {
  return (
    <>
      <FrameAdmin>
        <Page fullWidth title="Dashboard">
          <Layout>
            <Layout.Section>
              <CalloutCard
                title="Got an idea?"
                primaryAction={{
                  content: 'New idea',
                  url: '/ideas',
                }}
              >
                <p>Create a new idea to reduce cost</p>
              </CalloutCard>
            </Layout.Section>
          </Layout>
        </Page>
      </FrameAdmin>
    </>
  )
}

export default AdminPage
