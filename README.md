# [Déjame te Cuento](https://dejametecuento.vercel.app/)

Déjame te cuento website frontend

### Built With

- Framework: [Next.js](https://nextjs.org)
  - [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support)
  - [Tailwind](https://tailwindcss.com/docs)
  - [TypeScript](https://nextjs.org/docs/basic-features/typescript)
- CMS: [Strapi CMS](https://strapi.io/documentation)

### Design

- [Figma File](https://www.figma.com/community/file/930872073422001170) by [@cfmr](https://www.figma.com/@cfmr)


## Running Locally

You need to set up strapi first to populate the content

### Set up Strapi

Create a folder and clone the [Strapi CMS repository](https://github.com/dejametecuento/dejametecuento-api.git).

Install the dependencies and run it locally

```bash
yarn install
yarn develop
```

The Strapi server will run on [http://localhost:1337](http://localhost:3000).

Go to the [Admin panel](http://localhost:1337/admin), create an account and add some dummy content.

### Set up Next.js

On other window install the Next.js dependencies and run it locally

```bash
yarn install
yarn dev
```

The Next.js server will run on [http://localhost:3000](http://localhost:3000).

## Contribution

To submit a feature, bug fix, or enhancement to the website proceed as follows:

1. Fork this repository
2. Clone from your repository
3. Create a new branch `git checkout -b MY_BRANCH_NAME`
4. Follow the Running locally instructions
5. Open a pull request

We really appreciate any contribution.

## License

[MIT License](https://github.com/dejametecuento/dejametecuento-site/blob/main/LICENSE).
