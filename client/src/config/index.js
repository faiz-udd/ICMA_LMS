export const signUpFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};

export const languageOptions = [
  { id: "english", label: "English" },
  { id: "urdu", label: "Urdu" },
  
];

export const courseLevelOptions = [
  { id: "op-one", label: "Operational Level-1" },
  { id: "op-two", label: "Operational Level-2" },
  { id: "ml-one", label: "Managerial Level-1" },
  { id: "ml-two", label: "Managerial Level-2" },
  { id: "sl-one", label: "Strategic Level-1" },
  { id: "sl-two", label: "Strategic Level-2" },
];

export const courseCategories = [
  { id: "ffa", label: "Fundamentals of Financial Accounting" },
    { id: "be", label: "Business Economics" },
    { id: "bcrw", label: "Business Communication & Report Writing" },
    { id: "fom", label: "Fundamentals of Management" },
    { id: "bmsi", label: "Business Math & Statistical Inferences" },
    { id: "cl", label: "Commercial Laws" },
    { id: "fcma", label: "Fundamentals of CMA" },
    { id: "em", label: "Enterprise Management" },
    { id: "mis", label: "Management Information Systems" },
    { id: "facr", label: "Financial Accounting & Corporate Reporting" },
    { id: "ama", label: "Advanced Management Accounting" },
    { id: "cgble", label: "Corporate Governance, Business Laws & Ethics" },
    { id: "afacr", label: "Advanced Financial Accounting & Corporate Reporting" },
    { id: "aa", label: "Audit & Assurance" },
    { id: "bt", label: "Business Taxation" },
    { id: "sma", label: "Strategic Management Accounting" },
    { id: "sfm", label: "Strategic Financial Management" },
    { id: "sm", label: "Strategic Management" },
];

export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Title",
    componentType: "input",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    componentType: "input",
    type: "text",
    placeholder: "Enter course subtitle",
  },
  {
    name: "description",
    label: "Description",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "pricing",
    label: "Pricing",
    componentType: "input",
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    componentType: "textarea",
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};

export const courseCurriculumInitialFormData = [
  {
    title: "",
    videoUrl: "",
    freePreview: false,
    public_id: "",
  },
];

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const filterOptions = {
  category: courseCategories,
  level: courseLevelOptions,
  primaryLanguage: languageOptions,
};
