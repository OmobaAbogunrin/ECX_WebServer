# ECX_WebServer
NodeJS Server
Week 1 Web Server Demo

This project is a simple Node.js web server built as part of Week 1 assignment.  
It demonstrates the basics of how the internet connects us, client–server communication, and backend setup.

Features
- Starts on port 7000 (or from `.env`).
- Shows a console message when running.
- Responds with HTML to all requests.
- Includes my name (Oluwatimilehin Abayomi) in the response.
- Bonus features:
  - Detects mobile vs desktop visitors.
  - Displays current date and time.
  - Adds CSS styling inside the HTML.
  - Changes greeting based on time of day.
  - Shows a random fun emoji each refresh.

Setup Instructions

1. Clone the repository 
   bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>

2. Install Node.js 
   Make sure you have Node.js installed (v14+ recommended).  
   You can check with:
   bash
   node -v

3. Run the server
   bash
   node server.js

4. Visit in browser 
   Open [http://localhost:7000](http://localhost:7000) to see the server response.

---

File Structure
.
├── server.js   # Main server file
└── README.md   # Project documentation
