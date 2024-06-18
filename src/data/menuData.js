const menudata = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "Vision, Mission, and Objectives" },
      { link: "/contact", title: "Core Team" },
      { link: "/check-out", title: "Media Coverage" },
      { link: "/faq", title: "Awards and Recognitions" },
    ],
  },
  {
    id: 3,
    title: "Events",
    link: "/instructor",
    has_dropdown: true,
    sub_menus: [
      { link: "/instructor", title: "Registrations" },
      { link: "/instructor-profile", title: "Gallery" },
      { link: "/instructor-profile", title: "Defined Values Trainers Network Summit 2022" },
    ],
  },
  {
    id: 4,
    title: "Products and Services",
    link: "/course-grid",
    has_dropdown: true,
    sub_menus: [
      { link: "/course-grid", title: "Self-Actualized Leadership Development Program (SALDP)" },
      { link: "/course-list", title: "Code of Citizen's Conduct (Book)" },
    ],
  },
  {
    id: 5,
    title: "Downloads",
    link: "/blog",
    has_dropdown: false,
    sub_menus: [
      { link: "/blog", title: "Blog Sidebar" },
      { link: "/blog-grid", title: "Blog Grid" },
      { link: "/blog-masonry", title: "Blog Masonry" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/blog",
    has_dropdown: false,
    sub_menus: [
      { link: "/blog", title: "Blog Sidebar" },
      { link: "/blog-grid", title: "Blog Grid" },
      { link: "/blog-masonry", title: "Blog Masonry" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
];
export default menudata;
