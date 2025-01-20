import createNewProject from '../controllers/projects/createNew.js';
import fetchAllProjects from '../controllers/projects/fetchAllProjects.js';
import fetchPersonalProjects
  from '../controllers/projects/fetchPersonalProjects.js';

import authMiddleware from '../middlewares/authMiddleware.js';
import express from 'express';

const projectRoute = express.Router ();
projectRoute.post ('/projects/new', authMiddleware, createNewProject);
projectRoute.get ('/projects', authMiddleware, fetchAllProjects);
projectRoute.get ('/projects/:id', authMiddleware, fetchPersonalProjects);

export default projectRoute;
