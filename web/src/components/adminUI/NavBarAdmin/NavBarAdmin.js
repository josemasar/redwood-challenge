import { Navigation } from '@shopify/polaris'
import {
  HomeMajor,
  HintMajor,
  ChecklistMajor,
  CirclePlusOutlineMinor,
  AppsMajor,
  AnalyticsMajor,
  SettingsMajor,
} from '@shopify/polaris-icons'

const NavBarAdmin = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/path/to/place',
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            url: '/path/to/place',
            label: 'Ideas',
            icon: HintMajor,
            secondaryAction: {
              url: '/admin/orders/add',
              accessibilityLabel: 'Add an order',
              icon: CirclePlusOutlineMinor,
            },
          },
          {
            url: '/path/to/place',
            label: 'Plans',
            icon: ChecklistMajor,
          },
          {
            url: '/path/to/place',
            label: 'Tasks',
            icon: AppsMajor,
          },
          {
            url: '/path/to/place',
            label: 'Results',
            icon: AnalyticsMajor,
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            url: '/admin/settings',
            label: 'Settings',
            icon: SettingsMajor,
          },
        ]}
        separator
      />
    </Navigation>
  )
}

export default NavBarAdmin
