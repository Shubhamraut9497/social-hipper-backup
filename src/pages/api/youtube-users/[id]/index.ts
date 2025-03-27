// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { id } = req.query;

//   if (!id || Array.isArray(id)) {
//     return res.status(400).json({ error: 'Invalid ID' });
//   }

//   try {
//     switch (req.method) {
//       case 'GET':
//         const [users] = await pool.query<YouTubeUser[]>(
//           'SELECT * FROM youtube_users WHERE id = ?',
//           [id]
//         );

//         if (!users.length) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         return res.status(200).json({ data: users[0] });

//       case 'PUT':
//         const updateData: UpdateYouTubeUserDTO = req.body;
        
//         const updateFields = Object.entries(updateData)
//           .filter(([_, value]) => value !== undefined)
//           .map(([key, _]) => `${key} = ?`);
        
//         const updateValues = Object.entries(updateData)
//           .filter(([_, value]) => value !== undefined)
//           .map(([_, value]) => value);

//         if (!updateFields.length) {
//           return res.status(400).json({ error: 'No fields to update' });
//         }

//         await pool.query(
//           `UPDATE youtube_users SET ${updateFields.join(', ')} WHERE id = ?`,
//           [...updateValues, id]
//         );

//         const [updatedUsers] = await pool.query<YouTubeUser[]>(
//           'SELECT * FROM youtube_users WHERE id = ?',
//           [id]
//         );

//         return res.status(200).json({ data: updatedUsers[0] });

//       case 'DELETE':
//         const [result] = await pool.query(
//           'DELETE FROM youtube_users WHERE id = ?',
//           [id]
//         );

//         if ((result as any).affectedRows === 0) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         return res.status(204).end();

//       default:
//         res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//         return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }