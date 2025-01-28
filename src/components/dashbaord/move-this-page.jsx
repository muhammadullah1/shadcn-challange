import { Users, CreditCard, Activity, ArrowUpRight } from 'lucide-react'

import { AnalyticsCard } from '@/components/dashbaord/analytics-card'
import { ChartArea } from '@/components/dashbaord/chart-area'
import { ChartBar } from '@/components/dashbaord/chart-bar'
import { ChartLine } from '@/components/dashbaord/chart-line'
import { ChartPie } from '@/components/dashbaord/chart-pie'

export function DashboardPage() {
  const analyticsData = [
    {
      title: 'User Analytics',
      value: '10,482',
      icon: <Users className='h-4 w-4 text-muted-foreground' />,
      description: '+20.1% from last month',
    },
    {
      title: 'Revenue',
      value: '$45,231.89',
      icon: <CreditCard className='h-4 w-4 text-muted-foreground' />,
      description: '+15.3% from last month',
    },
    {
      title: 'Active Now',
      value: '573',
      icon: <Activity className='h-4 w-4 text-muted-foreground' />,
      description: '+201 since last hour',
    },
    {
      title: 'Bounce Rate',
      value: '32.1%',
      icon: <ArrowUpRight className='h-4 w-4 text-red-600' />,
      description: '+2.3% from last week',
    },
  ]

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6'>Analytics Dashboard</h1>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8'>
        {analyticsData.map((data, index) => (
          <AnalyticsCard key={index} {...data} />
        ))}
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8'>
        <div className='lg:col-span-4'>
          <ChartBar />
        </div>
        <div className='lg:col-span-3'>
          <ChartLine />
        </div>
      </div>

      {/* <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <div className='lg:col-span-4'>
          <ChartArea />
        </div>
        <div className='lg:col-span-3'>
          <ChartPie />
        </div>
      </div> */}
    </div>
  )
}
