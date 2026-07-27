import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

function getPostFiles() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}

function parsePost(filename) {
  const slug = filename.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    content,
  };
}

export function getAllPosts() {
  return getPostFiles()
    .map(parsePost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs() {
  return getPostFiles().map((file) => file.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    contentHtml: processed.toString(),
  };
}

export function getRelatedPosts(slug, count = 3) {
  const posts = getAllPosts().filter((post) => post.slug !== slug);
  return posts.slice(0, count);
}

export function formatPostDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
