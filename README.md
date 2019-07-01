## Harvard Test To Resuelve

this is a test to resuelve.mx, using the harvard api.


# run

[Yarn](https://github.com/yarnpkg/)

```sh
yarn && yarn start

```

## Soluction

There were more than 1500 elements in the Harvard api, the solution I took was to use reaccion-window to have a very good performance and with react-window-infinite-loader perform the logic to load more images as the scroll.



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
│   │    │      │     └──/component (example estrure for a component)
│   │    │      │         ├──index.tsx
│   │    │      │         └──styles.ts
│   │    │      ├──/interfaces
│   │    │      ├──index.tsx
│   │    │      └──styles.ts
│   │    └──/commons -> is a components shared between several modules
│   └── /utils
├── .env.example
├── .env
└── ...others configuration files
```

# Trade-offs

if I had more time I would make a higher coverage in test and I would make a separation from the grid so that it would be more modular and reusable.

# Author 
Nicolas Restrepo

# License 

MIT