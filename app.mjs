#!/usr/bin/env node

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { MongoClient } from 'mongodb';

import indexRouter from './routes/index.mjs';
import usersRouter from './routes/users.mjs';

const app = express();

const client = new MongoClient('mongodb+srv://ninja:ninja@cluster0.dippymp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect().then(() => {
  console.log('database successfully connected');
}).catch((error) => {
  console.error('connection error:', error);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
