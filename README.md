## Harvard Test To Resuelve

this is a test to resuelve.mx, using the harvard api.

# run

[Yarn](https://github.com/yarnpkg/)

```sh
yarn && yarn start

```

# Features

* **React Window**  using [react-window](https://github.com/bvaughn/react-window) to perfermance in big list
* **React Window Infinite Loader** [react-window-infinite-loader](https://github.com/bvaughn/react-window)
* **Styled Components** [styled-components](https://github.com/styled-components)
* **Reach Routing** [reach-routing](https://github.com/reach/router) simple routing
# Organization
Modules structure

```
.
├──/src
│   
│   ├──/modules -> a module is a set of views and components, for example the authentication module has submodules (login, forgot Password, and register)
│   │    ├──/module(example organization module)
│   │    │      ├──/__tests__
│   │    │      │ 
│   │    │      ├──components -> these components is only used for the module
│   │    │      │     └──component (example estrure for a component)
│   │    │      │         ├──index.tsx
│   │    │      │         └──styles.ts
│   │    │      ├──/interfaces
│   │    │      ├──index.tsx
│   │    │      └──styles.ts
│   │    └──/common -> is a components shared between several modules
│   └── /utils
├── .env.example
├── .env
└── ...others configuration files
```
# Author 
Nicolas Restrepo (nico) :)

# License 

MIT