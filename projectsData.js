/**
 * portfolioData.js
 *
 * Single source of truth for all project information.
 * To add, edit, or remove a project, simply update this file.
 * No changes to index.html are required.
 *
 * Keys must EXACTLY match the `data-skill` attributes on the
 * `.node-wrapper` elements in the Hero section of index.html.
 */
const portfolioData = {

    "A Data Science Analyst": [
        {
            id: "titanic-eda",
            title: "Titanic Dataset EDA",
            icon: "🚢",
            tag: "Data Analysis",
            description: "In-depth exploratory data analysis and feature engineering on the classic Titanic dataset to uncover survival patterns and statistically significant correlations between passenger attributes.",
            tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
            results: "Identified the strongest survival signals and turned the analysis into a reusable feature-engineering notebook.",
            githubLink: "https://github.com/Mahian-Hoq/ml-notebooks-from-scratch/blob/main/Titanic_EDA.ipynb"
        },
        {
            id: "heart-disease-eda",
            title: "Heart Disease Dataset EDA",
            icon: "❤️",
            tag: "EDA",
            description: "Comprehensive analysis of clinical features using pandas, matplotlib, and seaborn to identify key indicators and risk factors for heart disease across a diverse patient population.",
            tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
            results: "Highlighted the most influential clinical indicators and isolated clear high-risk patterns for follow-up modeling.",
            githubLink: "https://github.com/Mahian-Hoq/ml-notebooks-from-scratch/blob/main/HeartDisease_EDA.ipynb"
        },
        {
            id: "numpy-practice",
            title: "NumPy Practice",
            icon: "🔢",
            tag: "Scientific Computing",
            description: "Advanced array manipulations, broadcasting mechanics, linear algebra operations, and high-performance mathematical computations using NumPy, documented as an interactive notebook.",
            tech: ["Python", "NumPy", "Jupyter Notebook"],
            results: "Built a compact set of practice exercises covering broadcasting, matrix ops, and vectorized computation.",
            githubLink: "https://github.com/Mahian-Hoq/ml-notebooks-from-scratch/blob/main/Numpy.ipynb"
        }
    ],

    "A Machine Learning Engineer": [
        {
            id: "ml-from-scratch",
            title: "ML Algorithms from Scratch",
            icon: "🧠",
            tag: "Machine Learning",
            description: "Ground-up implementation of core ML algorithms — including Decision Trees, Support Vector Machines, and K-Nearest Neighbors — built entirely from first principles without high-level libraries.",
            tech: ["Python", "NumPy", "Mathematics", "Jupyter Notebook"],
            results: "Recreated core algorithms from first principles to deepen understanding of model mechanics and training behavior.",
            githubLink: "https://github.com/Mahian-Hoq/ml-notebooks-from-scratch/blob/main/Linear_Regression_with_scikit_learn_%2B_Evaluation_Metrics.ipynb"
        },
        {
            id: "linear-regression-sklearn",
            title: "Linear Regression with Scikit-Learn",
            icon: "📈",
            tag: "Predictive Modeling",
            description: "End-to-end predictive modeling pipeline featuring data preprocessing, polynomial feature engineering, regularization tuning, and comprehensive performance evaluation using Scikit-Learn.",
            tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
            results: "Built a full regression workflow with preprocessing, feature engineering, and evaluation-ready metrics.",
            githubLink: "https://github.com/Mahian-Hoq/ml-notebooks-from-scratch/blob/main/Linear_Regression_from_Scratch_Using_Numpy_(Matrix_Form).ipynb"
        }
    ],

    "A Software Developer": [
        {
            id: "vibeverse-app",
            title: "VibeVerse",
            icon: "🛒",
            tag: "Full-Stack",
            description: "A fully developed full-stack web application featuring secure user management, seamless product browsing, and dynamic media handling. Live at: https://www.vibeverse.studio/",
            tech: ["Supabase", "Cloudinary", "Frontend", "Backend"],
            results: "Engineered a dual-database architecture, separating relational data management (Supabase) from optimized product image storage (Cloudinary) for maximum performance.",
            githubLink: "https://github.com/Mahian-Hoq/vibeverse"
        },
        {
            id: "secure-vault",
            title: "Secure Vault File Encryption",
            icon: "🔐",
            tag: "Security",
            description: "A desktop application for encrypting and decrypting files at rest using AES-256 encryption, featuring a clean GUI, secure key management, and drag-and-drop file handling.",
            tech: ["Java", "AES-256", "Swing", "File I/O"],
            results: "Delivered secure file protection with encryption and decryption flows plus a usable desktop interface.",
            githubLink: "https://github.com/Mahian-Hoq/Secure_Vault"
        },
        {
            id: "DIU-transport",
            title: "DIU Smart Transport System",
            icon: "🚌",
            tag: "Full-Stack",
            description: "A comprehensive transport management and real-time tracking solution for a university environment, built with a relational database backend and an intuitive admin dashboard.",
            tech: ["Java", "MySQL", "SQL", "Swing"],
            results: "Centralized transport operations into a database-backed system for tracking and admin workflows.",
            githubLink: "https://github.com/Mahian-Hoq/diu-smart-transport"
        },
        {
            id: "glass-wallet",
            title: "Glass Wallet Dashboard",
            icon: "💼💵",
            tag: "UI/UX",
            description: "A sleek, glassmorphism-inspired dashboard for visualizing and tracking cryptocurrency wallet portfolios, featuring live chart animations and a fully responsive dark-mode design.",
            tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
            results: "Created a responsive wallet dashboard with a polished glassmorphism UI and clear portfolio visibility.",
            githubLink: "https://github.com/Mahian-Hoq/glass-wallet"
        },
        {
            id: "banking-system",
            title: "Banking System with DB",
            icon: "🏦",
            tag: "Backend",
            description: "A robust banking application featuring secure user authentication, multi-account management, transaction history, and full database integration with ACID-compliant operations.",
            tech: ["Java", "MySQL", "SQL", "OOP"],
            results: "Implemented structured account handling and transaction history with persistent database operations.",
            githubLink: "https://github.com/Mahian-Hoq/Banking-System-with-DB"
        }

    ]

};

/**
 * educationData
 *
 * Chronological education history. Used by renderEducationTimeline()
 * in index.html. To update, add or edit entries here only.
 */
const educationData = [
    {
        id: "ssc",
        year: "2017 – 2019",
        title: "Secondary School Certificate (SSC)",
        institution: "Janata Adarsha Bidyapith, Narsingdi",
        description: "Graduated with top marks in all core science subjects, demonstrating early aptitude in mathematics and the sciences — the spark that ignited a passion for technology.",
        badge: "GPA: 5.00"
    },
    {
        id: "hsc",
        year: "2019 – 2021",
        title: "Higher Secondary Certificate (HSC)",
        institution: "Notre Dame College, Mymensingh",
        description: "Completed HSC with distinction in Physics, Chemistry, and Mathematics, building a strong analytical foundation for university-level engineering studies.",
        badge: "GPA: 5.00"
    },
    {
        id: "bsc",
        year: "2022 – 2026",
        title: "B.Sc. in Computer Science & Engineering",
        institution: "Daffodil International University, Dhaka",
        description: "Major in Data Science. Focused on software engineering, machine learning, and applied data analytics. Built real-world projects spanning security, transport systems, and financial dashboards.",
        badge: "CGPA: Ongoing"
    },
    {
        id: "self-learning",
        year: "Ongoing",
        title: "Self-Directed Learning & Certifications",
        institution: "Google Colab · Kaggle · Fast.ai",
        description: "Continuously advancing skills in deep learning, data engineering, and modern full-stack development through structured online courses and competitive data science challenges.",
        badge: "Lifelong Learner"
    }
];

/**
 * achievementsData
 *
 * Bento-box style achievements. Used by renderAchievements()
 * in index.html. Size translates directly to grid span classes
 * (e.g., 'large', 'wide', 'tall', 'small').
 */
const achievementsData = [
    {
        id: "ach-1",
        title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
        issuer: "Amazon Web Services",
        date: "Aug 2025",
        description: "Mastered the end-to-end machine learning pipeline on AWS infrastructure. Specialized in data engineering, model selection, and deploying scalable AI solutions using Amazon SageMaker, ensuring high-performance inference in cloud-native environments.",
        size: "large",
        image: "./assets/certificates/aws-cloud.jpg",
        link: "https://www.credly.com/go/RoKnAJs0"
    },
    {
        id: "ach-2",
        title: "Python (Basic) Certificate",
        issuer: "HackerRank",
        date: "Aug 2023",
        description: "Certified proficiency in Python fundamentals, including data structures and algorithmic problem-solving. Established a robust foundation for complex data engineering and machine learning workflows through rigorous assessment.",
        size: "wide",
        image: "./assets/certificates/python.png",
        link: "https://www.hackerrank.com/certificates/iframe/8c8d901a002f"
    },
    {
        id: "ach-3",
        title: "Problem Solving (Basic) Certificate",
        issuer: "HackerRank",
        date: "Feb 2025",
        description: "Validated core algorithmic thinking and data structure proficiency. Demonstrated expertise in breaking down complex logic problems into efficient code solutions and optimizing time complexity.",
        size: "wide",
        image: "./assets/certificates/Problem-solving.png",
        link: "https://www.hackerrank.com/certificates/5029B86B72BF"
    },
    {
        id: "ach-4",
        title: "How to Say No And How to Propose",
        issuer: "GoEdu",
        date: "Nov 2024",
        description: "How will I say no and how I propose in Professional Life",
        size: "small",
        image: "./assets/certificates/say-no.png",
        link: "https://goedu.ac/certificates/db56ce5132c1f75659d88cc42d278737/"
    },
    {
        id: "ach-5",
        title: "Introduction to Liberal values",
        issuer: "GoEdu",
        date: "Nov 2024",
        description: "Introduction to Liberal values",
        size: "small",
        image: "./assets/certificates/lib.png",
        link: "https://goedu.ac/certificates/b68ff6b36af7f3defc9698c716b5c086/"
    }
];
