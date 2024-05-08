import { ToadScheduler, SimpleIntervalJob, Task } from 'toad-scheduler';

const scheduler = new ToadScheduler();

const task = new Task('simple task', () => {
    // if this task runs long, second one won't be started until this one concludes
	console.log('Task triggered');
});

const job = new SimpleIntervalJob(
	{ seconds: 20 },
	task,
    
);

//create and start jobs
scheduler.addSimpleIntervalJob(job);

// scheduler.stop()

// import cron from 'node-cron';
// // import { CronJob } from 'toad-scheduler';

// var task = cron.schedule('* * * * *', () =>  {
//     console.log('stopped task');
//   }, {
//     scheduled: false
//   });
  
//   task.start();