import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const plans = () => {
  return db.plan.findMany()
}

export const plan = ({ id }) => {
  return db.plan.findUnique({
    where: { id },
  })
}

export const createPlan = ({ input }) => {
  return db.plan.create({
    data: input,
  })
}

export const updatePlan = ({ id, input }) => {
  return db.plan.update({
    data: input,
    where: { id },
  })
}

export const deletePlan = ({ id }) => {
  return db.plan.delete({
    where: { id },
  })
}

export const Plan = {
  idea: (_obj, { root }) =>
    db.plan.findUnique({ where: { id: root.id } }).idea(),
  tasks: (_obj, { root }) =>
    db.plan.findUnique({ where: { id: root.id } }).tasks(),
}
