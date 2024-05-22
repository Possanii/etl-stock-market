import { IUser } from "../interfaces/IUser";
import { EtlDatabase } from "../lib/etlDatabase";

interface IDailyUsersProps {
  users: IUser[];
}

export class SaveDailyUsersService {
  async execute({ users }: IDailyUsersProps): Promise<void> {
    try {
      users.map((user) => {
        const sql =
          "INSERT INTO Daily_Users (id, username, email, created_at) VALUES (?,?,?,?)";
        const params = [user.id, user.username, user.email, user.created_at];
        EtlDatabase.run(sql, params, function (err) {
          if (err) throw new Error();
        });
      });
    } catch (error) {
      throw new Error();
    }
  }
}
