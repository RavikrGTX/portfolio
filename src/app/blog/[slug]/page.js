import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  formatPostDate,
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/blog'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | Ravi Kumar`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const related = getRelatedPosts(slug, 3)

  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
      <article className="max-w-2xl">
        <Link
          href="/blog"
          className="text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Blog
        </Link>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-50 leading-tight">
          {post.title}
        </h1>

        {post.date && (
          <time
            dateTime={post.date}
            className="mt-3 block text-sm text-gray-400 dark:text-zinc-500"
          >
            {formatPostDate(post.date)}
          </time>
        )}

        <div
          className="blog-prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {related.length > 0 && (
        <section className="max-w-2xl mt-20 pt-12 border-t border-gray-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100 mb-8">
            Related
          </h2>
          <div className="flex flex-col gap-8">
            {related.map((item) => (
              <article key={item.slug}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="text-lg font-semibold text-gray-900 dark:text-zinc-50 hover:opacity-70 transition-opacity"
                >
                  {item.title}
                </Link>
                {item.date && (
                  <time
                    dateTime={item.date}
                    className="block mt-1 text-sm text-gray-400 dark:text-zinc-500"
                  >
                    {formatPostDate(item.date)}
                  </time>
                )}
                <p className="mt-2 text-[15px] text-gray-600 dark:text-zinc-400 leading-relaxed">
                  {item.excerpt}{' '}
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-gray-900 dark:text-zinc-100 underline underline-offset-2 hover:opacity-70"
                  >
                    More
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
