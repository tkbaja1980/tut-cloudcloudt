import type { Metadata } from 'next';
import React from 'react';

// --- METADATA FOR SEO ---
export const metadata: Metadata = {
  title: 'Tutorial Lengkap Google Cloud | Complete Google Cloud Tutorials',
  description: 'Pelajari Google Cloud dari dasar hingga mahir dengan tutorial interaktif kami. Dioptimalkan untuk pemula dan profesional. | Learn Google Cloud from beginner to advanced with our interactive tutorials. Optimized for beginners and professionals.',
  keywords: [
    'Google Cloud', 'GCP', 'Tutorial', 'Cloud Computing', 'Belajar GCP', 'Panduan Google Cloud',
    'Google Cloud Tutorial', 'GCP Guide', 'Learn GCP', 'Cloud Engineering', 'DevOps',
    'Bahasa Indonesia', 'English'
  ],
  openGraph: {
    title: 'Tutorial Lengkap Google Cloud | Complete Google Cloud Tutorials',
    description: 'Panduan interaktif untuk menguasai platform Google Cloud.',
    url: 'https://example.com', // Replace with actual domain
    siteName: 'Tutorial GCP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1605379399642-870262d3d051', // OG Image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tutorial Lengkap Google Cloud | Complete Google Cloud Tutorials',
    description: 'Pelajari Google Cloud dari dasar hingga mahir dengan tutorial interaktif kami.',
    images: ['https://images.unsplash.com/photo-1605379399642-870262d3d051'], // Twitter Image
  },
};

// --- SVG ICON COMPONENTS (No external libraries) ---

const CpuChipIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);

const CubeTransparentIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l-9-5.25M12 7.5l9 5.25" />
  </svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17.437 14.846a4.5 4.5 0 01-3.09 3.09L11.25 18l2.846.813a4.5 4.5 0 013.09 3.09L18 21.75l.813-2.846a4.5 4.5 0 013.09-3.09L24.75 15l-2.846-.813a4.5 4.5 0 01-3.09-3.09z" />
    </svg>
);

const CircleStackIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
  </svg>
);

const CloudIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
  </svg>
);

const ServerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0h13.5m-16.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0h13.5" />
  </svg>
);

const LanguageIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 7.061 14.285 7.5 15.5 7.5c1.215 0 2.32-.439 3.334-1.136M9 21h.01M15 21h.01M18 21h.01M12 21h.01M9 21h.01M15 21h.01M18 21h.01M12 21h.01M9 3.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75V5.25a.75.75 0 01-.75.75h-3.5a.75.75 0 01-.75-.75V3.75z" />
    </svg>
);


// --- TUTORIAL DATA ---
const tutorialCategories = [
  {
    icon: CpuChipIcon,
    title: 'Compute Engine',
    description_en: 'Scalable, high-performance virtual machines.',
    description_id: 'Virtual machine berperforma tinggi dan skalabel.',
    color: 'text-blue-500',
  },
  {
    icon: CubeTransparentIcon,
    title: 'Kubernetes Engine',
    description_en: 'Managed environment for running containerized apps.',
    description_id: 'Lingkungan terkelola untuk menjalankan aplikasi dalam kontainer.',
    color: 'text-green-500',
  },
  {
    icon: BrainIcon,
    title: 'AI & Machine Learning',
    description_en: 'Add intelligence and efficiency to your business.',
    description_id: 'Tambahkan kecerdasan dan efisiensi pada bisnis Anda.',
    color: 'text-purple-500',
  },
  {
    icon: CircleStackIcon,
    title: 'Cloud SQL',
    description_en: 'Fully managed relational database services.',
    description_id: 'Layanan database relasional yang terkelola sepenuhnya.',
    color: 'text-red-500',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Storage',
    description_en: 'Secure, durable, and scalable object storage.',
    description_id: 'Penyimpanan objek yang aman, tahan lama, dan skalabel.',
    color: 'text-yellow-500',
  },
  {
    icon: ServerIcon,
    title: 'Cloud Functions',
    description_en: 'Event-driven serverless compute platform.',
    description_id: 'Platform komputasi serverless berbasis peristiwa.',
    color: 'text-indigo-500',
  },
];

// --- MAIN PAGE COMPONENT ---
export default function Page() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CloudIcon className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-700">
              GCP<span className="font-light">tutorials</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors">Docs</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <LanguageIcon className="w-5 h-5 mr-1" />
                <span className="text-sm">ID/EN</span>
            </button>
            <a href="#cta" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center text-white">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605379399642-870262d3d051')" }}
          ></div>
          <div className="container mx-auto px-6 relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Kuasai Cloud Computing. Mulai dari Sini.
              <br />
              <span className="opacity-80 font-semibold">Master Cloud Computing. Start Here.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              Panduan lengkap untuk mempelajari setiap layanan Google Cloud, langkah demi langkah.
              <br />
              <span className="opacity-80">Your complete guide to learning every Google Cloud service, step-by-step.</span>
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#features" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all">
                Mulai Belajar / Start Learning
              </a>
              <a href="#docs" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all">
                Lihat Dokumentasi / View Docs
              </a>
            </div>
          </div>
        </section>

        {/* Features/Tutorials Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Jelajahi Berdasarkan Kategori
              </h2>
              <p className="text-lg text-gray-500 mt-2">
                Explore by Category
              </p>
              <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorialCategories.map((category) => (
                <div key={category.title} className="bg-gray-50 rounded-lg p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200/80">
                  <div className="flex items-center mb-4">
                    <category.icon className={`w-10 h-10 ${category.color}`} />
                    <h3 className="text-2xl font-bold text-gray-800 ml-4">{category.title}</h3>
                  </div>
                  <p className="text-gray-600">{category.description_id}</p>
                  <p className="text-gray-500 text-sm mt-1">{category.description_en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="bg-blue-600">
          <div className="container mx-auto px-6 py-20 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Meningkatkan Keahlian Anda?
              <br />
              <span className="font-semibold opacity-80">Ready to Level Up Your Skills?</span>
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-blue-100">
              Akses semua tutorial, proyek praktis, dan bimbingan ahli. Mulai perjalanan cloud Anda hari ini.
              <br />
              <span className="opacity-80">Access all tutorials, hands-on projects, and expert guidance. Start your cloud journey today.</span>
            </p>
            <div className="mt-8">
              <a href="#" className="bg-white text-blue-600 px-10 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
                Mulai Belajar Gratis / Start Learning for Free
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Produk / Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Compute</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Storage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Database</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI/ML</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Sumber Daya / Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Dokumentasi / Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Studi Kasus / Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Komunitas / Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Perusahaan / Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami / About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir / Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak / Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privasi / Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat / Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Wowkeren. All rights reserved.</p>
            <p className="text-sm mt-1">Dibuat dengan ❤️ untuk komunitas cloud. | Made with ❤️ for the cloud community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
