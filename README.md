# PRODUCT HUNT APPLICATION

**Purpose**
The Product Hunt Website is a platform where users can explore, share, and engage with the latest tech products, including Web Apps, AI Tools, Software, Games, and Mobile Apps. The website enables users to submit new products, upvote/downvote existing ones, and post reviews. It includes a three-tier user system (Normal Users, Moderators, and Admins) for efficient content management. Additionally, a subscription-based model is integrated, allowing users to unlock premium features.

## 🌐 Live Site URL
[Visit the live site here!](https://product-hunt-website.web.app)

##  Features of the Website
- **Responsive Design:** The website offers an excellent view on mobile, tablet, and desktop devices.
- **User-Friendly Interface:**Enhances the user experience through a simple, elegant, and intuitive      design, making navigation seamless and enjoyable for all users.
- **Tech Stack:** Built with technologies like React.js, JSX, Tailwind CSS, and MongoDB.
- **User Roles:** Includes roles such as Common User, Moderator, and Admin with respective functionalities.
- **Real-time Interaction:** Features like product post submissions, user interactions, and real-time updates.
- **Search Functionality:** Users can easily see their applications by searching by product tags.
- **Social Login**: Google authentication for quick login and registration.
- **Conditionally Function** Shows "Login" and "Register" if the user is not logged in.
- Shows the user’s photo.When photo user click then show dashboard and logout link.

### **External Packages**


## Dependencies

- `@headlessui/react`: Accessible and fully functional UI components.
- `@smastrom/react-rating`: Rating component for products and reviews.
- `@stripe/react-stripe-js`: React components for Stripe integration.
- `@stripe/stripe-js`: Core Stripe library for secure payments.
- `@tanstack/react-query`: For server-state management and caching.
- `axios`: For making HTTP requests.
- `firebase`: Backend and authentication service.
- `flowbite-react`: Tailwind-based UI components.
- `jsonwebtoken`: For managing and verifying JSON web tokens.
- `localforage`: Offline storage for client-side data.
- `match-sorter`: For filtering and sorting data.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: DOM manipulation for React applications.
- `react-icons`: Library of popular icons for React.
- `react-router-dom`: Routing library for React apps.
- `react-tag-input`: For adding and managing tags.
- `react-toastify`: For displaying toast notifications.
- `recharts`: Charting library for React.
- `sort-by`: Utility for sorting arrays.
- `sweetalert2`: For creating beautiful modals and alerts.
- `swiper`: Modern touch sliders for React.

## Dev Dependencies

- `@eslint/js`: JavaScript linting utility.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React support.
- `autoprefixer`: Adds vendor prefixes to CSS rules.
- `daisyui`: Tailwind CSS components library.
- `eslint`: A pluggable JavaScript linter.
- `eslint-plugin-react`: React-specific linting rules for ESLint.
- `eslint-plugin-react-hooks`: Linting rules for React hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Fast Refresh.
- `globals`: Library of global variables.
- `postcss`: Tool for transforming CSS with JavaScript.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Fast and lightweight frontend build tool.

---

# 🛠 How to Run the Project Locally

## 📖 Table of Contents
- [Prerequisites](#prerequisites)
- [Step 1: Clone the Repository](#step-1-clone-the-repository)
- [Step 2: Install Dependencies](#step-2-install-dependencies)
- [Step 3: Set Up Environment Variables](#step-3-set-up-environment-variables)
- [Step 4: Start the Development Server](#step-4-start-the-development-server)
- [Step 5: Run the Backend (if applicable)](#step-5-run-the-backend-if-applicable)
- [Step 6: Test the Project](#step-6-test-the-project)
- [Step 7: Build for Production](#step-7-build-for-production)
- [Step 8: Troubleshooting](#step-8-troubleshooting)

---

## 🔧 Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js (v18+)** - [Download & Install](https://nodejs.org/)
- **Git** - [Download & Install](https://git-scm.com/)
- **MongoDB** - [Download & Install](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **VS Code (or any code editor)** - [Download & Install](https://code.visualstudio.com/)
- **Vite** (optional, included in dependencies)

---

## **Step 1: Clone the Repository**

Open your terminal and run the following command to clone the project from GitHub.

```sh
git clone https://github.com/jahidhasan6676/tech-product-hunt-client.git

cd product-hunt-website
Step 2: Install Dependencies
Run the following command to install all required dependencies:

npm install
This will install all dependencies listed in package.json.

Step 3: Set Up Environment Variables
Create a .env file in the root directory of the project and add the following configuration:

env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_MONGO_URI=your_mongodb_connection_string
REACT_APP_JWT_SECRET=your_jwt_secret
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
Replace your_firebase_api_key, your_mongodb_connection_string, your_jwt_secret, and your_stripe_public_key with your actual credentials.
Make sure your MongoDB instance is running.
Step 4: Start the Development Server
Run the following command to start the Vite development server:

npm run dev
By default, the frontend will be available at:

http://localhost:5173
If this port is already in use, Vite will automatically assign a different one.

Step 5: Run the Backend (if applicable)
If your project has a backend server, follow these steps:

Navigate to the backend folder:

cd server
Install backend dependencies:

npm install
Start the backend server:

npm run start
By default, the backend server will be available at:

http://localhost:5000
Step 6: Test the Project
Open a web browser and go to http://localhost:5173
Register or log in as a user.
Explore features like product submission, voting, and reviews.
Try different user roles (Normal User, Moderator, Admin).
Step 7: Build for Production
When you're ready to deploy, build the project using:

npm run build
This will generate optimized production files inside the dist folder.

Step 8: Troubleshooting
If you run into any issues, try the following:

Check your Node.js version: Run node -v (should be v18+).
Check MongoDB connection: Ensure MongoDB is running locally or your MongoDB Atlas URI is correct.
Clear npm cache (if packages fail to install):
sh
Copy
Edit
npm cache clean --force
Restart the development server after making changes to .env.
✅ You're all set! Your Product Hunt Website should now be running locally. 🚀

---

 