import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Harshwardhan Pratap",
  lastName: "Singh",
  name: `Harshwardhan Pratap Singh`,
  role: "Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "harshwardhanpsingh21@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/singhhp",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hpsingh21/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@_hp_singh_21",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging engineering precision with analytical storytelling</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4"></strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/SQLProject",
  },
  subline: (
    <>
    I’m Harshwardhan, a data analyst who loves uncovering stories hidden in numbers. When I’m not optimizing dashboards, I’m exploring new ways to make data more human.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
 Harshwardhan is a data analyst dedicated to uncovering patterns, forecasting trends, and translating data into meaningful business intelligence. He thrives on turning raw information into insights that drive strategic growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bussiness Facilitating",
        timeframe: "Oct 2024 - Jan 2025",
        role: "Junior Data Analyst",
        achievements: [
          <>
        Achieved an 8% reduction in overall logistics costs by analyzing FedEx, UPS, and DHL invoice variances using SQL and Python, identifying high-cost zones and optimizing rate structures.
          </>,
          <>
Developed interactive Power BI dashboards that visualized zone-wise cost trends and carrier performance, enabling data-driven negotiations and strategic decision-making.
          </>,
        ],
      },
      {
        company: "NCR Voyix",
        timeframe: "Feb 2024 - Sept 2024",
        role: "IT Analyst Intern",
        achievements: [
          <>
           Utilized Databricks (PySpark SQL) to perform large-scale data validation and reconciliation, improving data accuracy across 1.2M+ financial records by 30%.
          </>,
          <>
          Designed insightful Tableau and Power BI dashboards to track reconciliation KPIs, error trends, and data anomalies — enhancing visibility and supporting faster business decisions.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Birla Institute of Applied Sciences",
        description:[ <>BTech (Hons) in Computer Science Engineering   Score: 8.1/10 CGPA</>,
        ],
        
      },
      {
        name: "Delhi Public School",
        description: <>Senior Secondary School Score:  86.7%</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "SQL",
        description: (
          <>Skilled in writing complex queries, performing variance analysis, and building data
          models that support financial and operational reporting.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "sql",
          },
        ],
      },
      {
        title: "Python for Data Analytics",
        description: (
          <>  Learning to use Python (Pandas, NumPy, matplotlib) for data cleaning, analysis,
          and automation of reporting workflows.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Numpy",
            icon: "numpy",
          },
          {
            name: "MatPlotLib",
            icon: "matplotlib",
          },
           {
            name: "Pandas",
            icon: "pandas",
          },
        ],
      },  
        {
        title: "Power BI & Tableau",
        description: (
          <>Building interactive dashboards and data visualizations that uncover trends,
          monitor KPIs, and support strategic decision-making.</>
        ),
        tags: [
          {
            name: "Power Bi",
            icon: "powerbi",
          },
           {
            name: "Tableau",
            icon: "tableau",
          },
        ],
      },
         {
        title: "Databricks & PySpark",
        description: (
          <> Leveraging Databricks notebooks and PySpark SQL for large-scale data processing,
          validation, and analytical model building.</>
        ),
        tags: [
          {
            name: "Databricks",
            icon: "databricks",
          },
          {
            name: "PySpark",
            icon: "spark",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Data and Stories...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, home, about, blog, work };
