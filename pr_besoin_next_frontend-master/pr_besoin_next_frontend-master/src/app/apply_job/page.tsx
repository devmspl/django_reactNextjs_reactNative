"use client"
import React, { useState } from 'react';
import { Metadata } from 'next';
import Wrapper from '@/layouts/wrapper';
import Header from '@/layouts/headers/header';
import FooterOne from '@/layouts/footers/footer-one';
import JobBreadcrumb from '../components/jobs/breadcrumb/job-breadcrumb';
import JobPortalIntro from '../components/job-portal-intro/job-portal-intro';
import JobListV3Area from '../components/jobs/list/job-list-v3-area';
import ApplyJobBreadcrumb from '../components/Apply-job/Apply_job-breadcrumb';
import Resume from '../components/Apply-job/resume';



// export const metadata: Metadata = {
//   title: "Job List ",
//   description: "Browse a list of available job openings. Find jobs based on title, location, industry, and more.",
//   keywords :"job list, job openings, job search, job listings"
// };


const JobListThreePage = () => {
  const [isOpenSidebar,setIsOpenSidebar] = useState<boolean>(false);

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}

        {/* search breadcrumb start */}
        <ApplyJobBreadcrumb />
        {/* search breadcrumb end */}

        <Resume  setIsOpenSidebar={setIsOpenSidebar}/>
        {/* job list three start */}
        {/* <JobListV3Area itemsPerPage={8} /> */}
        {/* job list three end */}

        {/* job portal intro start */}
        {/* <JobPortalIntro top_border={true} /> */}
        {/* job portal intro end */}

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default JobListThreePage;