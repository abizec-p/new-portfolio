const projects = [
  {
    id: 5,
    img: "/projectImg/calculatemate.png",
    title: "Calculatemate - Multimode",
    shortDesc:
      "A responsive calculator app supporting 6 different calculation modes in one interface. Focused on clean state management in React and building a UI that stays intuitive even as functionality scales up.",
    tags: ["Html", "Css", "Reactjs"],
    website: "https://calculatemate.netlify.app/",
  },
  {
    id: 6,
    img: "/projectImg/extract.png",
    title: "Ex-Track - Easy Expense Tracker App",
    shortDesc:
      "A full-stack expense management app that lets users log and categorize income and expenses, with dynamically calculated balances, spending summaries, and category-level insights (like highest spending category) updating in real time. Built the backend with Express.js and MongoDB, and used Framer Motion to make the interface feel responsive and alive rather than static.",
    tags: [
      "Html",
      "Css",
      "Reactjs",
      "Express.js",
      "Node.js",
      "FramerMotion",
      "Mongodb",
    ],
    website: "https://expentrackapp.netlify.app/",
    github: "https://github.com/abizec-p/newexpensetracker",
  },
  {
    id: 7,
    img: "/projectImg/dash-mockup.png",
    title: "Next.Js App Router by Vercel course ",
    shortDesc:
      "Completed via Vercel's official Next.js App Router course, then extended with my own debugging and problem-solving. A full-stack invoice management dashboard with credential-based authentication (NextAuth/Auth.js), PostgreSQL integration, and server actions for CRUD operations — no separate API routes needed. Solved real deployment issues along the way, including missing environment variables on Vercel and middleware configuration for protected routes. Deployed live on Vercel. ",
    tags: ["Next.Js", "Tailwind", "Postgre", "API"],
    website: "https://nextjs-learn-pearl-three.vercel.app/",
    github: "https://github.com/abizec-p/NextjsLearn",
  },
  {
    id: 7,
    img: "/projectImg/foodmkt.png",
    title: "TasteHome - A food Marketplace app",
    shortDesc:
      "A full-stack marketplace for buying and selling homemade and local food, built to solve a real gap: connecting home cooks with neighbors looking for authentic, local meals. Built with Next.js (App Router), TypeScript, and PostgreSQL, with Tailwind CSS v4 for a fully responsive UI. Implemented listing management, location-based search using geocoding, and a component architecture designed around a fixed header and sticky navigation for smooth browsing on mobile and desktop. This was my first project integrating a real backend and database from the ground up — a big step from front-end-only work into full-stack development.",
    tags: ["Next.Js", "Tailwind", "Postgre", "API"],
    website: "https://taste-home.vercel.app/",
    github: "https://github.com/abizec-p/TasteHome",
  },
];
export default projects;
