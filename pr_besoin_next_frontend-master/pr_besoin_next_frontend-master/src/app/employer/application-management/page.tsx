'use client'
import React,{useState} from 'react';
import Wrapper from '@/layouts/wrapper';
import EmployAside from '@/app/components/dashboard/employer/aside';
import EmployJobArea from '@/app/components/dashboard/employer/job-area';
import CompanyJobs from "@/app/components/company-details/company-jobs";

const EmployDashboardJobsPage = () => {
  const [isOpenSidebar,setIsOpenSidebar] = useState<boolean>(false);
  return (
    <Wrapper>

    <div className='main-page-wrapper'>
      {/* aside start */}
      <EmployAside isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
      {/* aside end  */}

     
      <CompanyJobs setIsOpenSidebar={setIsOpenSidebar}/>
    
    </div>
    </Wrapper>
  );
};

export default EmployDashboardJobsPage;