import { GetDailyUsersService } from "../services/GetDailyUsersService";
import { SaveDailyUsersService } from "../services/SaveDailyUsersService";

export class GetDailyUsersConstroller {
  constructor(
    private readonly getDailyUsersService: GetDailyUsersService,
    private readonly saveDailyUsersService: SaveDailyUsersService,
  ) {}

  async execute() {
    try {
      const { users } = await this.getDailyUsersService.execute();

      await this.saveDailyUsersService.execute({ users });

      return { statusCode: 200, message: "Saved Succesfully" };
    } catch (error) {
      throw new Error();
    }
  }
}
