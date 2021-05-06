import FrameAdmin from 'src/components/adminUI/FrameAdmin'

const AppLayout = ({ children }) => {
  return <>
  <FrameAdmin>
    {children}
  </FrameAdmin>
  </>
}

export default AppLayout
