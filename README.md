# Southern Code Full Stack Node/React Challenge: 3D Product Display Web Application

<details>
  <summary>Details of the challenge </summary>
  
  ## Objective
  Create a single-page web application that displays a list of products (preloaded in the database). Each product is associated with a 3D model rendered using 'React Three Fiber'. Users can select a product to view its details, including:
  - The associated 3D model.
  - "Like" and "Dislike" buttons/counters.
  - Comments section.

  Users can like or dislike the models and create, edit, and delete comments. Data is stored in a PostgreSQL database.

  ## Features
  - Display a list of at least 5 products.
  - Each product includes a 3D model, likes, dislikes, and comments.
  - Users can interact with products through likes/dislikes and comments.
  - Backend API to manage products, likes, and comments.

  ## Important Notes
  - You can use any 3D models you like. Free models can be found at [Sketchfab](https://sketchfab.com/).
  - Upload 3D models to a file bucket service such as [Uploadthing](https://www.uploadthing.com).
  - Suggested product structure: `{ id, name, modelFileName, likes, dislikes, comments }`.
  - User management/login is not in scope.

  ## Tech Stack
  - **Frontend**: React, React Three Fiber, TypeScript
  - **Backend**: Node.js (any framework or strategy is allowed), TypeScript
  - **Database**: PostgreSQL

  ## Bonus Points
  - tRPC for API communication
  - Drizzle ORM for database interactions
  - Material UI for UI components. **(Used Tailwind CSS instead)**
  - At least some tests. **(WIP)**

  ## Functional Requirements
  ### Frontend
  - Use React for the frontend.
  - Use React Three Fiber for rendering 3D models.
  - Display a list of products.
  - Allow users to select a product to view its 3D model.
  - Enable users to like or dislike the 3D models.
  - Allow users to create, edit, and delete comments for each product.

  ### Backend
  - Use Node.js with a framework like Express, Nest.js, or Fastify.
  - Implement API endpoints for managing products, likes, and comments.
  - Use tRPC for type-safe API communication (bonus).
  - Use Drizzle ORM for database interactions (bonus).

  ### Database
  - Use PostgreSQL to store products, likes, and comments data.

  ### Code Quality
  - Write clean, maintainable code.
  - Use TypeScript for type safety.
  - Implement code quality standards (e.g., linting and formatting with ESLint and Prettier).

  ### Testing
  - Write tests to cover critical parts of the application.

  ### Deployment
  - Deploy the application to a hosting platform (Vercel is recommended but not mandatory).
  - Ensure the application is publicly accessible and provide the URL in your submission.

  ## Submission Guidelines
  1. **Code Repository**
    - Create a private GitHub repository for your project.
    - Include a README file with instructions on how to set up and run the project locally.
    - Invite Southern Code's interviewers to the repository.

  2. **Deployment**
    - Provide the URL to the deployed application.

  3. **Documentation**
    - Include documentation on the API endpoints.
    - Describe any architectural decisions or trade-offs made during development.

</details>

## Summary
This single-page web application showcases a preloaded list of products from the database. Each product features a 3D model rendered with 'React Three Fiber.' Users can select a product to view its details, including:

The associated 3D model.
"Like" and "Dislike" buttons/counters.
A comments section.
Users can like or dislike the models, and create, edit, and delete comments. All data is securely stored in a PostgreSQL database. The app provides an engaging and interactive experience for users to explore and interact with various products.

You can view the live demo [here](https://southern-code-challenge-6ywwa1e6w-khanos-projects.vercel.app/).

## Tech Stack
- Next.js
- React
- React Three Fiber
- TypeScript
- Tailwind CSS
- PostgreSQL (Vercel)
- Drizzle ORM
- tRPC for API communication


## Installation Instructions
First, clone the repository:
```bash
$ git clone git@github.com:Khanos/southern-code-challenge.git
```

Then, install the dependencies:
```bash
$ cd southern-code-challenge
$ npm install
```
> Note: Make sure you use the latest LTS version (**^18.19.0**) of Node.js.

## Running the Application locally

To run the app in dev mode:
```bash
$ npm run dev
```

## Database Setup
In order to run this command, you need the credentials for the `.env.local` file. Feel free to ask me for the credentials. The database is hosted on Vercel, and already has the necessary tables and data.

To generate the schemas for the database: 
```bash
$ npm run generate
```

To migrate the database:
```bash
$ npm run migrate
```

To seed the database:
```bash
$ npm run seed
```

## API Endpoints
The API endpoints are managed by tRPC.

### For Products
```bash
$ curl https://southern-code-challenge-6ywwa1e6w-khanos-projects.vercel.app/api/trpc/getProducts

$ curl 'https://southern-code-challenge-6ywwa1e6w-khanos-projects.vercel.app/api/trpc/getProductById?batch=1&input=%7B%220%22%3A1%7D' \
  -H 'Accept: */*' \
  -H 'Accept-Language: es-419,es;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'DNT: 1' \
  -H 'Referer: http://localhost:3000/product/1' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36' \
  -H 'content-type: application/json' \
  -H 'sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"'
```

## Personal Checklist
- [x] Create a private GitHub repository for the project.
- [x] Use pull requests for code reviews, and better maintainability.
- [x] Deploy the application to a hosting platform. I'm using Vercel for this project.
- [x] Ensure the application is publicly accessible and provide the URL in your submission.
- [x] Display a list of at least 5 products.
- [x] Each product includes a thumbnail for the ProductList page.
- [x] Display a detail page for each product.
- [x] Each product includes a 3D model for the ProductDetail page. (Refactor ProductDetail to use React Three Fiber)
- [x] Implement like and dislike buttons/counters.
- [x] Implement a comments section.
- [x] Use [tRPC](https://trpc.io/) for type-safe API communication.
- [x] Use PostgreSQL to store products, likes, and comments data. [vercel/PostgreSQL](https://vercel.com/docs/storage/vercel-postgres)
- [x] Use [Drizzle](https://orm.drizzle.team/) ORM for database interactions.
- [x] Create a schema for the database.
- [x] Configs to Migrate the database using drizzle.
- [x] Configs to Seed the database using drizzle.
- [x] Implement a backend API to manage products.
- [x] Implement a backend API to manage likes. (Refactor Likes component to use the API)
- [x] Implement a backend API to manage comments. (Refactor Comments component to use the API)
- [x] Create a README file with instructions on how to set up and run the project locally.
- [x] Improve the UI with better styling. (Tailwind CSS). * Needs more love *
- [-] Add a custom domain to the Vercel deployment. ([3dproduct.epilef.app](https://epilef.org))
- [-] Add test coverage for critical parts of the application. Probably jest and react-testing-library.
- [-] Send email to Southern Code's interviewers with the repository link.
- [-] Invite Southern Code's interviewers to the repository.


