
export interface AuthorProps{
  name: string;
  role: string;
  avatarUrl:string
}

export interface PostProps{
  id ?: number;
  author: AuthorProps;
  publishedAt: Date;
  content: ContentProps[];
}

export interface ContentProps{
  type: 'paragraph' | 'link'
  content: string;
}


