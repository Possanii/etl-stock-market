import { ManageCronJobs } from "./app/cron";

console.log("ETL is running");

new ManageCronJobs().run();
