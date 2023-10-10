import { BarChart } from '@tremor/react'
/*import Widget from '../Widget'*/
import useTrend from '../../lib/hooks/use-trend'
import { useMemo } from 'react'
import moment from 'moment'

export default function TrendWidget() {
  const { data, status, warning } = useTrend()
  const chartData = useMemo(
    () =>
      (data?.data ?? []).map(d => ({
        Date: moment(d.t).format('HH:mm'),
        'Number of visits': d.visits,
      })),
    [data]
  )

  return (
    <Widget>
      
    </Widget>
  )
}
