// import { NextApiRequest, NextApiResponse } from "next";
// import pool from "@/utils/db";
// import { InstagramUser, UpdateInstagramUserDTO } from "@/types/instagram-user";
// import { RowDataPacket, ResultSetHeader } from "mysql2";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<InstagramUser | { error: string } | null>
// ) {
//   const { id } = req.query;

//   if (!id || Array.isArray(id)) {
//     return res.status(400).json({ error: "Invalid ID" });
//   }

//   try {
//     switch (req.method) {
//       case "GET": {
//         const [rows] = await pool.query<RowDataPacket[]>(
//           "SELECT * FROM instagram_users WHERE id = ?",
//           [id]
//         );

//         const users = rows as InstagramUser[];

//         if (users.length === 0) {
//           return res.status(404).json({ error: "User not found" });
//         }

//         return res.status(200).json(users[0]);
//       }

//       case "PUT": {
//         const updateData: UpdateInstagramUserDTO = req.body;

//         // Build dynamic update query
//         const updateFields = Object.entries(updateData)
//           .filter(([_, value]) => value !== undefined)
//           .map(([key]) => `${key} = ?`);

//         const updateValues = Object.entries(updateData)
//           .filter(([_, value]) => value !== undefined)
//           .map(([_, value]) => value);

//         if (!updateFields.length) {
//           return res.status(400).json({ error: "No fields to update" });
//         }

//         await pool.query<ResultSetHeader>(
//           `UPDATE instagram_users SET ${updateFields.join(", ")} WHERE id = ?`,
//           [...updateValues, id]
//         );

//         const [updatedRows] = await pool.query<RowDataPacket[]>(
//           "SELECT * FROM instagram_users WHERE id = ?",
//           [id]
//         );

//         const updatedUsers = updatedRows as InstagramUser[];

//         if (updatedUsers.length === 0) {
//           return res.status(404).json({ error: "User not found after update" });
//         }

//         return res.status(200).json(updatedUsers[0]);
//       }

//       case "DELETE": {
//         const [result] = await pool.query<ResultSetHeader>(
//           "DELETE FROM instagram_users WHERE id = ?",
//           [id]
//         );

//         if (result.affectedRows === 0) {
//           return res.status(404).json({ error: "User not found" });
//         }

//         return res.status(204).end();
//       }

//       default:
//         res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
//         return res
//           .status(405)
//           .json({ error: `Method ${req.method} Not Allowed` });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }
