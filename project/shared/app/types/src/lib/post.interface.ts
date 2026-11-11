import { PostStatus } from './post-status.enum';
import { PostType } from './post-type.enum';

export interface Post {
  id?: string;
  type: PostType;
  authorId: string;
  status: PostStatus;
  tags?: string[];
  title?: string;
  videoUrl?: string;
  announceText?: string;
  text?: string;
  quoteText?: string;
  quoteAuthor?: string;
  photo?: string;
  linkUrl?: string;
  description?: string;
  createdAt?: Date;
  publishedAt?: Date;
  isRepost?: boolean;
  originalPostId?: string;
  originalAuthorId?: string;
}
