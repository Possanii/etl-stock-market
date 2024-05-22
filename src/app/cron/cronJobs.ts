import cron from "node-cron";
import { makeGetDailyUsersConstroller } from "../../factories/controller/makeGetDailyUsersConstroller";

export function getSaveDailyUsersCronJob() {
  const getDailyUsersConstroller = makeGetDailyUsersConstroller();

  return cron.schedule("0 3 * * *", async () => {
    await getDailyUsersConstroller.execute();
  });
}
