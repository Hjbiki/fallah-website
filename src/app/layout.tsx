import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فله | Fallah - عالم الألعاب التفاعلية',
  description: 'موقع فله - مجموعة من الألعاب التفاعلية العربية بتطوير عناد عسكر',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="fallah-app">
          {/* Clean Cardboard Header */}
          <header className="relative p-0 m-0">
            <div className="cardboard-container cardboard-header">
              <div className="cardboard py-2 px-">
                <div className="container mx-auto flex justify-center items-center relative z-10">
                  {/* Logo - LBP Style with bigger stroke */}
                  <div className="logo-container">
                    <a href="/" className="block transition-transform">
                      <h1 className="lbp-title text-2xl md:text-5xl text-center">
                        فـلّـه
                        <span className="subtitle inline-block mr-1">FALLAH</span>
                      </h1>
                    </a>
                  </div>
                </div>
                
                {/* Cardboard lighting effect */}
                <div className="cardboard-lighting"></div>
              </div>
            </div>
          </header>
          
          <main className="content-wrapper">
            <div className="main-content">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
} 