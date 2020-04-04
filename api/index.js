import express from 'express'
import axios from 'axios';

const router = express.Router();
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.use(express.json());
router.use((req, res, next) => {
  req.apiClient = axios.create({
    baseURL: 'http://api.gwent.a-baros.ru/',
    timeout: 1000
  });

  if (req.session.api_token) {
    req.apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + req.session.api_token;
  }

  req.apiClient.defaults.headers.post['Content-Type'] = 'application/json';
  req.apiClient.defaults.headers.put['Content-Type'] = 'application/json';
  next();
});

router.get('/user/', async (req, res) => {
  try {
    let resp = await req.apiClient.get('/user/');
    res.json(resp.data);
  } catch (e) {
    res.status(e.response.status).json(e.response.data);
  }
});

router.get('/fraction/', async (req, res) => {
  try {
    let resp = await req.apiClient.get('/fraction/');
    res.json(resp.data);
  } catch (e) {
    res.status(e.response.status).json(e.response.data);
  }
});

router.post('/login/', async (req, res) => {
  try {
    let resp = await req.apiClient.post('/login/', req.body);
    req.session.api_token = resp.data['token'];
    req.session.api_refresh_token = resp.data['refresh_token'];
    res.sendStatus(200);
  } catch (e) {
    res.status(e.response.status).json(e.response.data);
  }
});

router.post('/register/', async (req, res) => {
  try {
    await req.apiClient.post('/register/', req.body);
    let resp = await req.apiClient.post('/login/', {
      login: req.body.login,
      password: req.body.password
    });
    req.session.api_token = resp.data['token'];
    req.session.api_refresh_token = resp.data['refresh_token'];
    res.sendStatus(200);
  } catch (e) {
    res.status(e.response.status).json(e.response.data);
  }
});

router.post('/logout/', async (req, res) => {
  try {
    await req.apiClient.post('/logout/', {});
    delete req.session.api_token;
    delete req.session.api_refresh_token;
    res.sendStatus(200);
  } catch (e) {
    res.status(e.response.status).json(e.response.data);
  }
});

export default router;
