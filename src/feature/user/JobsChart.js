import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';
function JobsChart() {
    const { data } = useSelector((state) => state.pendingJob.employerJobs);
    const total=data?.length
  return (
    <div className="w-3/4 mx-auto mt-12">
       <PieChart
      series={[
        {
          data: [
            { id: 0, value:5, label: 'Pending' },
            { id: 1, value: 10, label: 'Approved' },
            { id: 2, value: 0, label: 'Declined' },
          ],
        },
      ]}
     className='w-full gap-12'
      height={400}
    />
    </div>
  )
}

export default JobsChart
