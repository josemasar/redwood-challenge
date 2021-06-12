import { Card } from '@shopify/polaris'

const CardDashboard = (props) => {


  const result = props.data[0].total
  console.log(result)
  return (
    <Card title="Total value" sectioned>
      <p>{result}</p>
    </Card>
  )
}

export default CardDashboard
