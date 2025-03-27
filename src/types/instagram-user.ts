// types/instagram-user.ts
export interface InstagramUser {
  id: number;
  instagram_id: bigint;
  username: string;
  full_name: string;
  description: string;
  website: string;
  followers: number;
  following: number;
  uploads: number;
  added_date: Date;
  last_check_date: Date;
  last_successful_check: Date;
  profile_picture_url: string;
  is_private: boolean;
  is_verified: boolean;
  average_engagement: string;
  details: string;
  is_demo: boolean;
  is_claimed: boolean;
  is_featured: boolean;
  is_image: boolean;
  is_common: boolean;
  country: string;
  city: string;
  industry: string;
  networth: string;
  dob: Date;
  height: string;
}

export type CreateInstagramUserDTO = Omit<InstagramUser, "id">;
export type UpdateInstagramUserDTO = Partial<CreateInstagramUserDTO>;
