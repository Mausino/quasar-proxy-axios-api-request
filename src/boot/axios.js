// import Vue from 'vue'
// import axios from 'axios'
//
// Vue.prototype.$axios = axios

import axios from 'axios';

export function getDataNode()
{
  return axios
    .get('/api/resources')
    .then( yy => yy.data)
}

export function getDataJsonPlaceholder()
{
  return axios

    .get('/posts')
    .then( xx => xx.data)
}


