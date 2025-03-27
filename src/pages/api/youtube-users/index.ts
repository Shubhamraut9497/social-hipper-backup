// import { NextApiRequest, NextApiResponse } from 'next';
// import pool from '../../../utils/db';
// import { YouTubeUser, CreateYouTubeUserDTO } from '../../../types/youtube-user';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     switch (req.method) {
//       case 'GET':
//         const page = Number(req.query.page) || 1;
//         const limit = Number(req.query.limit) || 10;
//         const offset = (page - 1) * limit;

//         const [countResult] = await pool.query(
//           'SELECT COUNT(*) as total FROM youtube_users'
//         );
//         const total = (countResult as any)[0].total;

//         const [rows] = await pool.query<YouTubeUser[]>(
//           'SELECT * FROM youtube_users LIMIT ? OFFSET ?',
//           [limit, offset]
//         );

//         return res.status(200).json({
//           data: rows,
//           meta: {
//             total,
//             page,
//             limit
//           }
//         });

//       case 'POST':
//         const userData: CreateYouTubeUserDTO = req.body;
        
//         const [result] = await pool.query(
//           `INSERT INTO youtube_users (
//             youtube_id, username, categories, title, 
//             influencer_description, description, profile_picture_url,
//             subscribers, views, videos, uploads_playlist_id,
//             details, added_date, last_check_date,
//             last_successful_check_date, is_demo, is_claimed,
//             is_featured, is_image, is_top, average_engagement_rate,
//             country, city, industry, networth, dob, height,
//             price, is_city, is_sitemap
//           ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//           [
//             userData.youtube_id,
//             userData.username,
//             userData.categories,
//             userData.title,
//             userData.influencer_description,
//             userData.description,
//             userData.profile_picture_url,
//             userData.subscribers,
//             userData.views,
//             userData.videos,
//             userData.uploads_playlist_id,
//             userData.details,
//             userData.added_date,
//             userData.last_check_date,
//             userData.last_successful_check_date,
//             userData.is_demo,
//             userData.is_claimed,
//             userData.is_featured,
//             userData.is_image,
//             userData.is_top,
//             userData.average_engagement_rate,
//             userData.country,
//             userData.city,
//             userData.industry,
//             userData.networth,
//             userData.dob,
//             userData.height,
//             userData.price,
//             userData.is_city,
//             userData.is_sitemap
//           ]
//         );

//         const newUser = {
//           id: (result as any).insertId,
//           ...userData
//         };

//         return res.status(201).json({ data: newUser });

//       default:
//         res.setHeader('Allow', ['GET', 'POST']);
//         return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
