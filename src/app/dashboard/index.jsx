import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { AnalyticsCard } from '@/components/dashbaord/analytics-card'
// import { AnalytictBarChart } from '@/components/dashbaord/bar-chart'
import { ChartBar } from '@/components/dashbaord/chart-bar'
import { Users, CreditCard, Activity, ArrowUpRight } from 'lucide-react'
import { DashboardPage } from '@/components/dashbaord/move-this-page'

export default function Page() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
          </div>
        </header>
        {/* <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-4'>
            {analyticsData.map((data, index) => (
              <AnalyticsCard key={index} {...data} />
            ))}
          </div>
          <div className='min-h-[100vh] flex-1 '>
            <ChartBar/>
          </div>
        </div> */}
        <DashboardPage/>
      </SidebarInset>
    </SidebarProvider>
  )
}
