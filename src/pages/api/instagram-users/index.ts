// // pages/api/instagram-users/index.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import pool from "../../../utils/db";
// import {
//   InstagramUser,
//   CreateInstagramUserDTO,
// } from "../../../types/instagram-user";

// type ApiResponse<T> = {
//   data?: T;
//   error?: string;
//   meta?: {
//     total?: number;
//     page?: number;
//     limit?: number;
//   };
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ApiResponse<InstagramUser | InstagramUser[]>>
// ) {
//   try {

//     switch (req.method) {
//       case "GET":
//         const page = Number(req.query.page) || 1;
//         const limit = Number(req.query.limit) || 10;
//         const offset = (page - 1) * limit;

//         // Get total count
//         const [countResult] = await pool.query(
//           "SELECT COUNT(*) as total FROM instagram_users"
//         );
//         const total = (countResult as any)[0].total;

//         // Get paginated results
//         const [rows] = await pool.query<InstagramUser[]>(
//           "SELECT * FROM instagram_users LIMIT ? OFFSET ?",
//           [limit, offset]
//         );

//         return res.status(200).json({
//           data: rows,
//           meta: {
//             total,
//             page,
//             limit,
//           },
//         });

//       case "POST":
//         const userData: CreateInstagramUserDTO = req.body;

//         const [result] = await pool.query<mysql.ResultSetHeader>(
//           `INSERT INTO instagram_users (
//               instagram_id, username, full_name, description, website,
//               followers, following, uploads, added_date, last_check_date,
//               last_successful_check, profile_picture_url, is_private,
//               is_verified, average_engagement, details, is_demo,
//               is_claimed, is_featured, is_image, is_common,
//               country, city, industry, networth, dob, height
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//           [
//             userData.instagram_id,
//             userData.username,
//             userData.full_name,
//             userData.description,
//             userData.website,
//             userData.followers,
//             userData.following,
//             userData.uploads,
//             userData.added_date,
//             userData.last_check_date,
//             userData.last_successful_check,
//             userData.profile_picture_url,
//             userData.is_private,
//             userData.is_verified,
//             userData.average_engagement,
//             userData.details,
//             userData.is_demo,
//             userData.is_claimed,
//             userData.is_featured,
//             userData.is_image,
//             userData.is_common,
//             userData.country,
//             userData.city,
//             userData.industry,
//             userData.networth,
//             userData.dob,
//             userData.height,
//           ]
//         );

//         const newUser: InstagramUser = {
//           id: result.insertId,
//           ...userData,
//         };

//         return res.status(201).json({ data: newUser });

//       default:
//         res.setHeader("Allow", ["GET", "POST"]);
//         return res
//           .status(405)
//           .json({ error: `Method ${req.method} Not Allowed` });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }
