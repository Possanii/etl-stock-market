import { IUser } from "../interfaces/IUser";
import { ApiDatabase } from "../lib/apiDatabase";

export class GetDailyUsersService {
  async execute(): Promise<{ users: IUser[] }> {
    const sql = "SELECT * FROM Users WHERE date(created_at) = date('now')";
    return new Promise((resolve, reject) => {
      ApiDatabase.all(sql, (err, rows) => {
        if (err || !rows) {
          reject(new Error());
        } else {
          const users: IUser[] = rows.map((row) => row as IUser);
          resolve({ users });
        }
      });
    });
  }
}
