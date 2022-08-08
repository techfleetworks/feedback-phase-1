This is the frontend codebase for Ruminates's Feedback project. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The backend can be found [here](https://github.com/techfleetworks/feedback-be-phase-1). 

### About Ruminate
[Ruminate](https://www.letsruminate.org/) is a nonprofit innovation lab that leverages behavioral science, artistic mediums, and the collective wisdom of the food community to break down complex food system issues and find digestible, evidence-based solutions.

## Getting Started

### How to run the project

To run the project in the development mode, follow the instructions below:

1. Install [Yarn package manager](https://yarnpkg.com/) & request .env files from lead.

2. Download or clone the repository in your computer:
`$ git clone https://github.com/techfleetworks/feedback-be-phase-1.git`

3. In the repository folder: 
- Install project depndencies with
```
yarn install
```

4. Place .env files in the root file directory.

5. Start the development server with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Dependencies & Tools Used 

- [Next.js](https://nextjs.org/) - Next.js is a flexible React framework that gives you building blocks to create fast web applications. hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [GraphQL](https://graphql.org/) - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
- [Apollo Client](https://www.apollographql.com/) - Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

## Dev Dependencies 

- [Tailwind CSS](https://tailwindcss.com/) - Tailwind is a unique CSS framework when it comes to styling web applications, meaning that Tailwind does not have a default theme that you have to use like other CSS frameworks.
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
