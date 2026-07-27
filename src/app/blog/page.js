import Link from 'next/link'
import { formatPostDate, getAllPosts } from '@/lib/blog'

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-50 mb-3">
          Blog
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 mb-14 text-base leading-relaxed">
          Notes on building products, freelancing, and shipping web apps.
        </p>

        <div className="flex flex-col gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-zinc-50 group-hover:opacity-70 transition-opacity leading-snug">
                  {post.title}
                </h2>
              </Link>
              {post.date && (
                <time
                  dateTime={post.date}
                  className="block mt-2 text-sm text-gray-400 dark:text-zinc-500"
                >
                  {formatPostDate(post.date)}
                </time>
              )}
              <p className="mt-3 text-[15px] sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
                {post.excerpt}{' '}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 dark:text-zinc-100 underline underline-offset-2 hover:opacity-70"
                >
                  More
                </Link>
              </p>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="text-gray-500 dark:text-zinc-400">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
