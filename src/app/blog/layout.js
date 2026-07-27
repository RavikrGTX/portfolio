import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Blog | Ravi Kumar',
  description: 'Notes on building products, freelancing, and web development.',
}

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        {children}
      </main>
    </>
  )
}
