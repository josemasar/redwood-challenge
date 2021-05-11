import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'


const BarChartIdeas = (props) => {

  console.log(props)

  return (
    <div>
      <BarChart width={250} height={400} data={ props.data }>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="createdAt"/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  )
}

export default BarChartIdeas

