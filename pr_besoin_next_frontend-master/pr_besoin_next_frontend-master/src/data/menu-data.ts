import { IMenuData } from "@/types/menu-data-type";

let userRole: string = "";

// Check if window object is defined (i.e., if code is running in the browser)
if (typeof window !== "undefined") {
  const role = JSON.parse(localStorage.getItem('role') || "{}");
  userRole = role?.name?.toLowerCase() || "";
}

const determineActiveLink = (role: string): string => {
  if (role === "employer") {
    return "/employer";
  } else if (role === "employee") {
    return "/employee";
  }
  return "/";
};


const menu_data:IMenuData[] = [
  {
    id:1,
    link:'/',
    title:'Home',
    sub_menus:[
      {link:'/',title:'Home 1'},
      {link:'/home-2',title:'Home 2'},
      {link:'/home-3',title:'Home 3'},
      {link:'/home-4',title:'Home 4'},
      {link:'/home-5',title:'Home 5'},
      {link:'/home-6',title:'Home 6'},
      {link:'/home-7',title:'Home 7'},
    ]
  },
  // {
  //   id:2,
  //   link:'/job-list',
  //   title:'Jobs',
  //   sub_menus:[
  //     {link:'/job-list',title:'Job List style -1'},
  //     {link:'/job-list-v2',title:'Job List style -2'},
  //     {link:'/job-list-v3',title:'Job List style -3'},
  //     {link:'/job-grid',title:'Job Grid style -1'},
  //     {link:'/job-grid-v2',title:'Job Grid style -2'},
  //     {link:'/job-grid-v3',title:'Job Grid style -3'},
  //     {link:'/job-details',title:'Job Details v-1'},
  //     {link:'/job-details-v2',title:'Job Details v-2'},
  //     {link:'/job-wishlist',title:'Job Wishlist'},
  //   ]
  // },
  {
    id: 3,
    link: userRole === 'employer' ? '/employee-view' : '/job-list',
    title: userRole === 'employer' ? 'Talent' : 'Jobs',
    mega_menus: [
      {
        id: 1,
        title: userRole === 'employer' ? 'Talent' : 'Jobs',
        sub_menus: userRole === 'employer' ? [
          { title: 'Candidates V-1', link: '/employee' },
          { title: 'Candidates V-2', link: '/candidates-v2' },
          { title: 'Candidates View', link: '/employee-view' },
          { title: 'Candidates V-4', link: '/candidates-v4' },
          { title: 'Candidates Details', link: '/employee-profile' },
          { title: 'Candidates Details v-2', link: '/candidate-profile-v2' },
        ] : [
          { link: '/job-list', title: 'Job List style -1' },
          { link: '/job-list-v2', title: 'Job List style -2' },
          { link: '/job-list-v3', title: 'Job List style -3' },
          { link: '/job-grid', title: 'Job Grid style -1' },
          { link: '/job-grid-v2', title: 'Job Grid style -2' },
          { link: '/job-grid-v3', title: 'Job Grid style -3' },
          { link: '/job-details', title: 'Job Details v-1' },
          { link: '/job-details-v2', title: 'Job Details v-2' },
          { link: '/job-wishlist', title: 'Job Wishlist' },
        ]
      },
      {
        id: 2,
        title: 'Jobs',
        sub_menus: [
          { link: '/job-list', title: 'Job List style -1' },
          { link: '/job-list-v2', title: 'Job List style -2' },
          { link: '/job-list-v3', title: 'Job List style -3' },
          { link: '/job-grid', title: 'Job Grid style -1' },
          { link: '/job-grid-v2', title: 'Job Grid style -2' },
          { link: '/job-grid-v3', title: 'Job Grid style -3' },
          { link: '/job-details', title: 'Job Details v-1' },
          { link: '/job-details-v2', title: 'Job Details v-2' },
          { link: '/job-wishlist', title: 'Job Wishlist' },
        ]
      },
      {
        id: 3,
        title: 'Essential',
        sub_menus: [
          { title: 'About Us', link: '/about-us' },
          { title: 'Pricing', link: '/pricing' },
          { title: 'FAQ', link: '/faq' },
          { title: 'Register', link: '/register' },
        ]
      },
    ]
  },
  {
    id:4,
    link:'/blog',
    title:'Blog',
    sub_menus:[
      {link:'/blog-v1',title:'Blog Standard'},
      {link:'/blog-v2',title:'Blog Grid'},
      {link:'/blog-v3',title:'Full width'},
      {link:'/blog-details',title:'Blog Details'},
    ]
  },
  {
    id:5,
    link:'/contact',
    title:'Contact'
  },
  
]
if (userRole) {
  menu_data.push({
    id: 6,
    link: determineActiveLink(userRole),
    title: "Dashboard",
    sub_menus: [
      { link: "/employee", title: "Employee Dashboard" },
      { link: "/employer", title: "Employer Dashboard" },
    ],
  });
}

export default menu_data;