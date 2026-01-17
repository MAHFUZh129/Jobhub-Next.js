# JobHub – Job Portal Web Application

## 📝 Project Description
JobHub is a modern, user-friendly job portal designed to connect job seekers with the right career opportunities in a simple and efficient way. The platform allows users to explore a wide range of job listings, view detailed job information, and apply for positions with ease.

Built using Next.js App Router and modern web technologies, JobHub focuses on clean UI, fast performance, and a smooth user experience. Job seekers can browse jobs without creating an account, while certain features—such as adding new job postings—are protected through basic authentication to ensure security and data integrity.

---
### 🛠️ Tech Stack

* **Next.js (App Router):** Used for building the application with modern routing and server-side features.
* **React:** Used to create reusable and interactive UI components.
* **Tailwind CSS:** Used for fast and responsive UI styling.
* **MongoDB:** Used as the database to store and manage job-related data.
* **Next.js Server Actions:** Used for server-side data fetching and mutations.
* **React Icons / Lucide Icons:** Used for consistent and modern UI icons.
* **React Toastify:** Used to display success and error notifications.


### ⚙️ Setup & Installation

Follow the steps to run the project on your local machine:

1.  **Repository Clone koro:**
    ```bash
    git clone (https://github.com/MAHFUZh129/Jobhub-Next.js.git)
    cd project-name
    ```

2.  **Dependencies Install koro:**
    ```bash
    npm install
    ```

3.  **Environment Variables Set koro:**
     Create `.env` file in root folder and follow put the followings:
    ```env
    DBNAME=...
    MONGODB_URI=...
    ```

4.  **Project Start koro:**
    ```bash
    npm run dev
    ```

---

### 🛤️ Route Summary

Main server actions used in this project:

| Action Type | Action Name | Description |
| :--- | :--- | :--- |
| **GET** | `getJobs()` | Fetch all available job listings |
| **POST** | `addJobs(job)` | Add a new job posting |
| **GET** | `getSingleJob(id)` | Fetch details of a specific job |

---

### ✨ Implemented Features

* **Public Job Listings:** Users can browse all available job listings without creating an account.
* **Job Details Page:** Each job has a dedicated details page displaying full job information.
* **Add New Job (Protected):** Only authenticated users can add new job postings.
* **Server Actions:** Next.js Server Actions are used for data fetching and data mutation.
* **Database Integration:** MongoDB is used to store and manage job-related data.
* **Responsive UI:** The application is fully responsive and optimized for mobile, tablet, and desktop devices.

---

### 🔍 Brief Explanation of Features

* **Server-Side Data Handling:**  
  Job data is fetched and managed using Next.js Server Actions, ensuring secure and efficient server-side operations.

* **Fast User Interaction:**  
  Server Actions allow seamless communication between the client and server, providing quick responses and smooth user experience.

* **Protected Functionality:**  
  Certain features, such as adding new job postings, are restricted to authenticated users to prevent unauthorized access.

* **Database Management:**  
  MongoDB is used to store and manage job-related data in a structured and scalable way.

* **Responsive and Clean UI:**  
  The user interface is designed to be responsive and user-friendly across all screen sizes.


