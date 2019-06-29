import axios from 'axios'
import merge from 'ramda/es/merge'
import { env } from '../config/client'

const { apiUrl, apiKey } = env

const get = async (serviceUrl: string, params?: any, headers?: any) => {

  const customParams = params ? merge({ apikey: apiKey }, params) : { apikey: apiKey }
  const url = `${apiUrl}${serviceUrl}`;

  const response = await axios.get(url, { params: customParams });
  return response;
};

const post = async (serviceUrl: string, params?: any) => {
  const customParams = params ? merge({ apikey: apiKey }, params) : { apikey: apiKey }
  const url = `${apiUrl}${serviceUrl}`;
  const response = await axios.post(url, { params: customParams });
  return response;
};

const put = async (serviceUrl: string, params?: any) => {
  const customParams = params ? merge({ apikey: apiKey }, params) : { apikey: apiKey }
  const url = `${apiUrl}${serviceUrl}`;
  const response = await axios.put(url, { params: customParams });
  return response;
};

const patch = async (serviceUrl: string, params?: any) => {
  const customParams = params ? merge({ apikey: apiKey }, params) : { apikey: apiKey }
  const url = `${apiUrl}${serviceUrl}`;
  const response = await axios.patch(url, { params: customParams });
  return response;
};


export {
  get, post, put, patch
};













