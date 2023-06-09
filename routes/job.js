const express = require('express');
const router = express.Router();

// Importing the controller
const JobController = require('../controllers/job');

// Creating a new job
router.post('/create', JobController.createJob);

// Getting a job by id
router.get('/', JobController.getJobById)

// updating a job by id
router.put('/update', JobController.updateJob);

// deleting a job by id
router.delete('/delete', JobController.deleteJob);

// get all jobs
router.get('/all', JobController.getJobs);

// get all jobs by company id
router.get('/corporate', JobController.getJobsByCompanyId);

// translate job
router.get('/translate', JobController.translateJob);
module.exports = router;