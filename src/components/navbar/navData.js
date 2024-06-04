const commonNavData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/prepositions",
    title: "Prepositions",
  },
  {
    path: "/conjunctions",
    title: "Conjunctions",
  },

  {
    path: "/spoken-rules",
    title: "Spoken Rules",
  },
  {
    path: "/chapter",
    title: "Chapters",
  },
  {
    path: "/subject-verb-agreement",
    title: "Subject & verb agreement",
  },
];

export const afterLoginNavData = [
  ...commonNavData,
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

export const beforeLoginNavData = [
  ...commonNavData,
  {
    path: "/signup",
    title: "Signup",
  },
  {
    path: "/login",
    title: "Login",
  },
];
