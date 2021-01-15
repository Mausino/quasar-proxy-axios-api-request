# Quasar App (q-app-v1)

A Quasar Framework app

Here you'll find example app to connect your quasar app by AXIOS to 2 API Endpoints by PROXY.
You will able to create your first basic Quasar Axios App.

This is for begginers start wit Quasar and Axios . After your fist successful connection... Read the documentation on quasar.dev and extend this basic example as you want.

Important place to get new knowledge :)

quasar.conf.js (section devServer -> Proxy)
src/boot/axios.js
src/pages/Node.vue
src/pages/PlaceHolder.vue




1. Node API -> $ cd base-server-master -> $ yarn install -> $ node index.js (now you're created http://localhost:3001 Api Endpoint)
  - the json you'll find on http:// localhost:3001/api/resources
  
 2. Json Placeholder API endpoint - https://jsonplaceholder.typicode.com  
  - we will fetch API by https://jsonplaceholder.typicode.com/posts


## Install the dependencies
```bash
cd quasar_v1_axios_api_example_requests
yarn install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
