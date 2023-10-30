import { IResume } from './model';

export const RAVI_RESUME: IResume = {
  header: {
    name: 'Ravi Upadhyay',
    place: 'Bengaluru - Karnataka',
    email: 'ravi.upadhyay.pi@gmail.com',
    phone: '+91-8967224829',
    resumeHead:
      'Passionate about technology and maths. Love to fiddle with \
          new technologies. Strong technical skills for working in a \
          team and successfully completing projects. I love both backend \
          and frontend. I am always looking for finding innovative solutions \
          to technical problems.',
  },
  experiences: [
    {
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      jobTitle: 'Software Engineer III',
      place: 'Bengaluru, India',
      from: 'August 2021',
      to: 'Current',
      header:
        'Worked as a Full Stack engineer in Flex team. We developed tools to efficiently manage pooled resources. Resources like compute, storage were allocated through our system for services like GMail, Maps, Youtube, GoogleCloud, Spanner, etc.',
      lineItems: [
        {
          breif: 'Tiered Resources',
          description:
            'Worked in the simplification effort for tiered compute resource. Earlier tiered resources were designed in a way that caused inconsistency and and could be accessed only through command line. Contributed in the UX and backend design and implementation. Unblocked team in critical blockers by providing solutions and workarounds.',
        },
        {
          breif: 'Optimizing complex pages',
          description:
            'We showed users some complex data in tables and charts for the metrics on resources. But the pages became slow when showing large data, and it was becoming infeasible to add more to the page. I optimized the views by fixing ~6 different slow code patterns which were being used and making the views laggy. The optimization resulted in UI speedup > 50x.',
        },
        {
          breif: 'Customer Engagement',
          description:
            'Our users were all from the company, i.e., engineers, SRE and resource managers. We used to have frequent conversations on their needs and issues. Sometimes we had users with very strong opinions. I played a role in balancing the user’s individual views so that it would be suitable for everyone and not just the requester.',
        },
        {
          breif: 'Reporting for Resource Requests',
          description:
            'Designed and implemented reporting which had details on the number of requested resources. Used existing systems to make the reporting flexible, so that users could generate reports with any required data, aggregations and filters applied.',
        },
        {
          breif: 'Oncall Setup',
          description:
            'Our team was new and did not have an oncall setup. Implemented the oncall rotations, paging, and alerting.',
        },
        {
          breif: 'UX Contribution',
          description:
            'The top user complaint for our application was that it had lots of white space in the views, and it created a problem when users needed to look at some data intensive views. Our UX team was responding to it slowly and a bit negligently. I stepped in and in a short period made some changes and showcased it to users and UX team. In between the issue had become a high priority issue, and because of my pro-activeness we could mitigate the situation.',
        },
        {
          breif: 'Code Health',
          description:
            'Actively maintained code health that we owned. At many places there were some non-type safe code, dead code, duplicated codes. These issues have crept in because of time-sensitive project deadlines. Whenever I had bandwidth, I proactively fixed these issues.',
        },
        {
          breif: 'Contributing to team',
          description:
            'As mentioned above, often the team had time sensitive project deadlines. I stepped in whenever a teammate required help to complete a project on time and I had bandwidth available.',
        },
      ],
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
      jobTitle: 'Software Engineer II',
      place: 'Bengaluru, India',
      from: 'June 2020',
      to: 'June 2021',
      header:
        'Worked in the retail business in High Consideration Tech Product team. Worked on the Interactive Buying Guide, other projects handled production issues as oncall. Designed and implemented some complex projects. Worked with team mates and guided them.',
      lineItems: [
        {
          breif: 'CI Setup',
          description:
            'Many applications could not be deployed locally and impacted productivity a lot. In a hackathon, created a script and integrated with git hooks to automate build, deployment and tailing log. As a result, developers did not need to leave IDE to do all those steps.',
        },
        {
          breif: 'Interactive Buying Guide',
          description:
            'IBG exists for smartphones, laptops, etc. Worked individually on this project. Added multiple features on the page, improved unit testing, added video widgets, added category determination logic, etc. The widget was successful in India, and then was expanded worldwide.',
        },
        {
          breif: 'Interactive Buying Guide',
          description:
            'IBG exists for smartphones, laptops, etc. Worked individually on this project. Added multiple features on the page, improved unit testing, added video widgets, added category determination logic, etc. The widget was successful in India, and then was expanded worldwide.',
        },
        {
          breif: 'Search Page Widget for Buying Guide',
          description:
            'The link for the Interactive Buying Guide page, comes on the search page. Initially, hard coded keywords were mapped to a buying guide. Implemented a service to map arbitrary search queries to a buying guide. There was strict restriction on latency of the request (< 65ms). Implemented the service to give result with p99 latency = 6ms. This was one of our team’s first projects to use the AWS infrastructure instead of the legacy Amazon Retail Infrastructure.',
        },
        {
          breif: 'Generic Configuration Editor',
          description:
            'Designed a Generic Configuration Editor. The service provided flexibility to manage arbitrary data schema for the configuration. Different configurations could be onboarded by just adding the schema of the data and could be associated with multiple supported storage backend.',
        },
      ],
    },
    {
      logo: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/3609103f-60a8-4be9-98c7-d29135ddc6a9.png',
      jobTitle: 'Development Engineer',
      place: 'Bengaluru, India',
      from: 'October 2018',
      to: 'May 2020',
      header:
        'Moveinsync provides SAAS solution for companies providing cab and shuttle services to their employees. Worked on the B2C offering application, routing logic, improving tooling to support routing and on backend for mobile application.',
      lineItems: [
        {
          breif: 'Deployment System',
          description:
            'There was no deployment system, and it was done manually. Introduced the use of systemd for automating it.',
        },
        {
          breif: 'Consistent git usage',
          description:
            'No standard git branch name usage was being used. This caused issues in looking for live code & CI.',
        },
        {
          breif: 'PostgreSQL read replica',
          description:
            'Made change in the spring-based server to use read replica of PostgreSQL server with minimal code change.',
        },
        {
          breif: 'Route with intermediate stops',
          description: 'Designed to show intermediate pickup or drop points.',
        },
        {
          breif: 'GetToWork',
          description:
            'Worked as lead for the B2C offering for the product. Implemented subscription packages, payment system, wallets, reward, customer engagement systems.',
        },
        {
          breif: 'Routing',
          description:
            'The routing algorithm were created for cars (passengers < 5). This became a limitation when routing needed to be done for vehicles with more capacity. Changed the existing genetic algorithm to dynamically limit the samples to accommodate up to 14 people.',
        },
      ],
    },
    {
      logo: 'https://cdn-images-1.medium.com/max/518/1*RIjA3j-zlg-1vau6SbbTLw@2x.png',
      jobTitle: 'Backend Developer',
      place: 'Bengaluru, India',
      from: 'March 2018',
      to: 'September 2018',
      header:
        'Skillate is a recruitment platform which provides AI services for the initial shortlisting phase of recruitment process and resume parsing. Integrated their systems with popular HR systems like Taleo, SuccessFactors. Made the system CI friendly by developing docker images for the services.',
      lineItems: [
        {
          breif: 'CD',
          description:
            'Upgraded all service components to docker images for easy deployments on any cloud.',
        },
        {
          breif: 'Linked & Naukri',
          description:
            'With this, any candidate application on these platforms was used to create a candidate application in Skillate platform. The resume of the candidate will get parsed and scored for the open job positions.',
        },
        {
          breif: 'Resume Parser',
          description:
            'Designed resume parser service to be flexible to fetch and parse candidate’s data from multiple specified sources (HR systems).',
        },
        {
          breif: 'Report generation optimization',
          description:
            'Earlier the report generation was real time and because of that the report generation either failed or created high load on servers. Changed the process into an async one which was designed to spread the network load over some time.',
        },
        {
          breif: 'Syncing improvements',
          description:
            'Syncing improvement was improved so that sync state was persisted so that server restart would not cause the process to run from scratch again.',
        },
      ],
    },
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
      jobTitle: 'Software Engineer',
      place: 'Bengaluru, India',
      from: 'June 2015',
      to: 'June 2016',
      header:
        'Worked in StorSimple team. StorSimple provides storage device with custom software which can tier its data to cloud and classifies data as hot or cold and keeps hot data locally. Further differentiation happened for deciding on SSD vs HDD storage.',
      lineItems: [
        {
          breif: 'Support Package',
          description:
            'Created minute filters for types of data to be included in the support package. Automated support package creation, so that on indication of malfunction or defect, developers can get the information from devices to debug issues.',
        },
        {
          breif: 'Documentation',
          description:
            'Improved internal documentation for enabling other developers to test locally. Everyone in the team referred to it for development and testing.',
        },
        {
          breif: 'Testing Improvement',
          description:
            'Holistic improvement in test flow and report generation. Added breakdown for the common steps used by tests. Enhanced test report to indicate the step in which test failed; number of test failures that happened at some shared step; historical statistics for test cases; link to the failure logs in the email report for each failing test case to ease debugging.',
        },
        {
          breif: 'DataManager',
          description:
            'Bootstrapping for DataManager, which was a new Azure service. It is a swarm of StorSimple virtual devices that will be used for data transformation and processing.',
        },
      ],
    },
  ],
  skills: [
    // Typescript
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    // Java
    'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png',
    // SQL
    'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    // Angular
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
    // React
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    // Figma
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    // Rust
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png',
    // Spring
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png',
    // IntelliJ
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png',
    // CSS 3
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
    // VS Code
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
    // Web Assembly
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/2048px-WebAssembly_Logo.svg.png',
  ],
  educations: [
    {
      institute: 'Indian Institute of Technology',
      place: 'Kharagpur',
      degree: 'Masters of Science',
      stream: 'Mathematics and Computing',
      startDate: '2010',
      endDate: '2015',
    },
  ],
  pdfLink: 'https://drive.google.com/file/d/16sNCZfdwow1VoOLM1XcTWDSxQITfzJXc/view?usp=sharing',
};
