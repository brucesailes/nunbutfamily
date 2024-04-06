import { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Meta from "./meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
        <Navigation />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
        <Footer />
    </>
  );
}
