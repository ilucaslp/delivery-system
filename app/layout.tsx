import { Providers } from "@/components/Providers"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">
                Delivery App
              </Link>
              <div>
                <Link href="/api/auth/signin">Entrar</Link>
              </div>
            </div>
          </nav>
          <main className="container mx-auto mt-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}