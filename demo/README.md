# Demo for Try-It module for nuxt/content

## Build Setup

Try-It module is created specifically for nuxt/content environment.
Therefore demo contains simply nuxt/content build with one .md file.
To run demo you will required to execute all the usual steps, as shown hereafter

```bash
# install dependencies
$ cd demo
$ yarn install

# serve with hot reload at localhost:4040
$ yarn dev

# check Try-It on production build 
$ yarn build
$ yarn start

# check Try-It on static project
$ yarn generate
```
One-page demo will contain a md-document as a main page, which will contain javascript and html snippets.
The document is self-explanatory and shows all possible variants of Try-It module features.  


For users to familiarize with nuxt and nuxt/content check out the  [nuxt documentation](https://nuxtjs.org) and [nuxt/content documentation](https://content.nuxtjs.org)

## Explore Try It feature



## Special Directories

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
