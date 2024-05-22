import { getSaveDailyUsersCronJob } from "./cronJobs";

export class ManageCronJobs {
  private jobs = [getSaveDailyUsersCronJob];

  public run() {
    this.jobs.forEach((job) => job());
  }
}
