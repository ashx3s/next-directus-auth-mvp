# README

Goal: Set up directus authentication for login, logout, signup

## Debugging

1. form returning 404 page when using register action

## Notes

- Author role gets CRUD access to articles that they wrote `"author": "$CURRENT_USER"`
- enable ability to create new users via communication over API **aka frontend app makes api requests to make user**
- relies on ` npm install @directus/sdk` for communication
- session management utility validates user

## Resources

- [Fetch Data in Next From Directus](https://directus.io/docs/tutorials/getting-started/fetch-data-from-directus-with-nextjs)
- [Authentication in Next with Directus](https://directus.io/docs/tutorials/getting-started/using-authentication-in-next-js)
- [Directus SDK Documentation](https://directus.io/docs/guides/connect/sdk)
- [NextJS Project Structure Information](https://nextjs.org/docs/app/getting-started/project-structure)
  - lib can be in app or root
  - api routes must be `app/api/directory/route.js`
