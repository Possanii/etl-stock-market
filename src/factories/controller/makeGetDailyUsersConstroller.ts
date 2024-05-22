import { GetDailyUsersConstroller } from "../../app/controller/GetDailyUsersConstroller";
import { makeGetDailyUsersService } from "../services/makeGetDailyUsersService";
import { makeSaveDailyUsersService } from "../services/makeSaveDailyUsersService";

export function makeGetDailyUsersConstroller() {
  const getDailyUsersService = makeGetDailyUsersService();
  const saveDailyUsersService = makeSaveDailyUsersService();

  return new GetDailyUsersConstroller(
    getDailyUsersService,
    saveDailyUsersService,
  );
}
