import { Model } from 'mongoose';

export interface TUserTestimonial {
  userImage: string;
  userName: string;
  userDesignation: string;
  userTestimonial: string;
  userRating: number;
  timestamps: boolean;
}

export interface UserTestimonialModel extends Model<TUserTestimonial> {
  isUserExists(id: string): Promise<TUserTestimonial | null>;
}
