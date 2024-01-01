import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';
function JobsChart() {
    const { employerJobs } = useSelector((state) => state.pendingJob);
    const {approvedJobs } = useSelector((state) => state.pendingJob);

    const pendingJobs = employerJobs?.data?.length;
    const approvedJobsTotal = approvedJobs?.data?.length;
    const declinedJobs = 0;
  
    const pieChartData = [
      { id: 0, value: pendingJobs, label: 'Pending' },
      { id: 1, value: approvedJobsTotal, label: 'Approved' },
      { id: 2, value: declinedJobs, label: 'Declined' },
    ];
  
  return (
    <div className="w-3/4 mx-auto mt-12">
      <PieChart
        series={[
          {
            data: pieChartData,
          },
        ]}
        className='w-full gap-12'
        height={400}
      />
    </div>
  )
}

export default JobsChart
