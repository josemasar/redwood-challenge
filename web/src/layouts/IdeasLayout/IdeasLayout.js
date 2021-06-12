import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import AppLayout from 'src/layouts/AppLayout/AppLayout'

const IdeasLayout = (props) => {
  return (
    <AppLayout>
      <div className="rw-scaffold">
        <Toaster />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.ideas()} className="rw-link">
              Ideas
            </Link>
          </h1>
          <Link to={routes.newIdea()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> New Idea
          </Link>
        </header>
        <main className="rw-main">{props.children}</main>
      </div>
    </AppLayout>
  )
}

export default IdeasLayout
