
const employees = [
  {
    "id": 1,
    "firstName": "Arjun",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 5,    
      "pending": 2,   
      "completed": 3 , 
      "failed": 1     
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Q1 Report",
        "taskDesc": "Compile all sales data for the first quarter and generate a summary report.",
        "taskDate": "2025-04-15",
        "category": "Reporting"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting Prep",
        "taskDesc": "Gather all necessary documents and presentations for the upcoming client meeting on Monday.",
        "taskDate": "2025-05-27",
        "category": "Client Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Brainstorm Session",
        "taskDesc": "Participate in the team brainstorming session for new project ideas.",
        "taskDate": "2025-05-20",
        "category": "Collaboration"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Codebase",
        "taskDesc": "Review the latest code commits and provide feedback to the development team.",
        "taskDate": "2025-05-28",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Project Documentation",
        "taskDesc": "Ensure all project documentation is up-to-date with the latest changes.",
        "taskDate": "2025-05-29",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Production Bug",
        "taskDesc": "Investigate and resolve the critical bug reported in the production environment.",
        "taskDate": "2025-05-22",
        "category": "Bug Fixing"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 4,
      "pending": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Onboarding New Hire",
        "taskDesc": "Assist the new hire with their initial setup and introduction to the team.",
        "taskDate": "2025-05-27",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Weekly Sync Meeting",
        "taskDesc": "Attend and contribute to the weekly team synchronization meeting.",
        "taskDate": "2025-05-27",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Data Analysis for Marketing",
        "taskDesc": "Analyze recent marketing campaign data to identify trends and insights.",
        "taskDate": "2025-05-18",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design UI Mockups",
        "taskDesc": "Create new UI mockups for the upcoming feature release.",
        "taskDate": "2025-05-30",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Research Competitor Strategies",
        "taskDesc": "Conduct research on competitor's recent product launches and marketing strategies.",
        "taskDate": "2025-05-29",
        "category": "Research"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 6,
      "pending": 0,
      "completed": 4,
      "failed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support Tickets",
        "taskDesc": "Respond to and resolve customer support tickets from the queue.",
        "taskDate": "2025-05-27",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Training Module Creation",
        "taskDesc": "Develop a new training module for product feature X.",
        "taskDate": "2025-06-05",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDesc": "Perform routine database optimization and cleanup tasks.",
        "taskDate": "2025-05-15",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDesc": "Conduct a security audit of the internal network and systems.",
        "taskDate": "2025-06-01",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Payroll Processing",
        "taskDesc": "Process bi-weekly payroll for all employees.",
        "taskDate": "2025-05-30",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Office Supply Order",
        "taskDesc": "Order new office supplies and manage inventory.",
        "taskDate": "2025-05-20",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Website Content Update",
        "taskDesc": "Update the website with new blog posts and product descriptions.",
        "taskDate": "2025-05-28",
        "category": "Content Management"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Deepak",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "pending": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Network Maintenance",
        "taskDesc": "Perform routine network maintenance and troubleshoot connectivity issues.",
        "taskDate": "2025-05-27",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "New Software Installation",
        "taskDesc": "Install and configure new software for the marketing department.",
        "taskDate": "2025-05-28",
        "category": "IT Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Annual Performance Reviews",
        "taskDesc": "Conduct annual performance reviews for team members.",
        "taskDate": "2025-05-10",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Vendor Management",
        "taskDesc": "Manage relationships with key vendors and review contracts.",
        "taskDate": "2025-05-31",
        "category": "Procurement"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kavya",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 7,
      "pending": 3,
      "completed": 5,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDesc": "Plan and execute the new social media marketing campaign for product launch.",
        "taskDate": "2025-06-01",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Content Strategy Development",
        "taskDesc": "Develop a comprehensive content strategy for the next quarter.",
        "taskDate": "2025-06-10",
        "category": "Content Strategy"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Event Planning",
        "taskDesc": "Organize and coordinate the annual company retreat.",
        "taskDate": "2025-05-25",
        "category": "Event Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Budget Allocation Review",
        "taskDesc": "Review and adjust budget allocations for various departments.",
        "taskDate": "2025-05-29",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Legal Document Review",
        "taskDesc": "Review and approve legal documents and contracts.",
        "taskDate": "2025-05-30",
        "category": "Legal"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "System Migration",
        "taskDesc": "Oversee the migration of legacy systems to the new platform.",
        "taskDate": "2025-05-23",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "User Feedback Analysis",
        "taskDesc": "Analyze user feedback to identify areas for product improvement.",
        "taskDate": "2025-05-28",
        "category": "Product Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Partnership Outreach",
        "taskDesc": "Initiate contact with potential new business partners.",
        "taskDate": "2025-06-03",
        "category": "Business Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research Survey",
        "taskDesc": "Design and distribute a market research survey to target demographics.",
        "taskDate": "2025-06-05",
        "category": "Research"
      }
    ]
  }
];

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};