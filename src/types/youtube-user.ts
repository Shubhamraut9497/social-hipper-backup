export interface YouTubeUser {
    id: number;
    youtube_id: string;
    username: string;
    categories: string;
    title: string;
    influencer_description: string;
    description: string;
    profile_picture_url: string;
    subscribers: bigint;
    views: bigint;
    videos: number;
    uploads_playlist_id: string;
    details: string;
    added_date: Date;
    last_check_date: Date;
    last_successful_check_date: Date;
    is_demo: boolean;
    is_claimed: boolean;
    is_featured: boolean;
    is_image: boolean;
    is_top: boolean;
    average_engagement_rate: string;
    country: string;
    city: string;
    industry: string;
    networth: string;
    dob: Date;
    height: string;
    price: string;
    is_city: boolean;
    is_sitemap: boolean;
  }
  
  export type CreateYouTubeUserDTO = Omit<YouTubeUser, 'id'>;
  export type UpdateYouTubeUserDTO = Partial<CreateYouTubeUserDTO>;