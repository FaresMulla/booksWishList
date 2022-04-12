import { httpService } from './http-service.js'
const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  getGuestUser,  
  query
}
async function query() {
  try{
  return await httpService.get('user' + '/')  
  }
  catch(err){
    console.error('Cannot query users', err);
  }
}

async function login(cred) {
  try{
  return await httpService.post(ENDPOINT + '/login', cred)  
  }
  catch(err){
    console.error('Cannot login user', err);
  }
}

async function signup(cred) {  
  try{
  return await httpService.post(ENDPOINT + '/signup', cred)  
  }
  catch(err){
    console.error('Cannot signup user', err);
  }
}

async function logout() {
  try{
  return await httpService.post(ENDPOINT + '/logout')  
  }
  catch(err){
    console.error('Cannot logout user', err);
  }
}

function getGuestUser() {
  return {
    fullname: 'Guest User',
    username: 'guest',
    password: 'guest',
    imgUrl: '',
    gigs:[],
    orders:[],
    sales:[],
    isAdmin: false,
  }
}



