export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  authorAvatar?: string; // URL for author avatar
  readTime: string;
  fileName: string; // The markdown file name in public/posts/
  tags: string[];
  category: 'Tutorials' | 'Projects' | 'Thoughts' | 'Snippets';
  featured?: boolean;
  coverImage?: string; // URL or CSS class for gradient
}