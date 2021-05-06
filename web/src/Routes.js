// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin/plans/new" page={NewPlanPage} name="newPlan" />
      <Route path="/admin/plans/{id:Int}/edit" page={EditPlanPage} name="editPlan" />
      <Route path="/admin/plans/{id:Int}" page={PlanPage} name="plan" />
      <Route path="/admin/plans" page={PlansPage} name="plans" />
      <Route path="/admin" page={AdminPage} name="admin" />
      <Route path="/admin/ideas/new" page={NewIdeaPage} name="newIdea" />
      <Route path="/admin/ideas/{id:Int}/edit" page={EditIdeaPage} name="editIdea" />
      <Route path="/admin/ideas/{id:Int}" page={IdeaPage} name="idea" />
      <Route path="/admin/ideas" page={IdeasPage} name="ideas" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
