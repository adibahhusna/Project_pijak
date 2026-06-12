import { useState } from 'react';
import { Search, TrendingUp, MapPin, BarChart3, Sparkles, Users, ChevronRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'tourist' | 'manager'>('tourist');

  // Mock data untuk sentiment chart
  const sentimentData = [
    { name: 'Positif', value: 65, color: '#0A4D68' },
    { name: 'Netral', value: 25, color: '#088395' },
    { name: 'Negatif', value: 10, color: '#05BFDB' },
  ];

  // Mock data destinasi
  const mockDestinations = [
    {
      name: 'Pantai Balekambang',
      location: 'Malang',
      vibes: ['tenang', 'pemandangan indah', 'ramah keluarga'],
      rating: 4.5,
      sentiment: 85
    },
    {
      name: 'Coban Rondo',
      location: 'Batu',
      vibes: ['adem', 'air terjun', 'fotogenik'],
      rating: 4.7,
      sentiment: 90
    },
    {
      name: 'Museum Angkut',
      location: 'Batu',
      vibes: ['edukatif', 'ramah anak', 'instagramable'],
      rating: 4.6,
      sentiment: 88
    },
  ];

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Pencarian Berbasis Vibes',
      description: 'Temukan destinasi dengan kata kunci natural seperti "tempat adem" atau "ramah anak"'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analitik Sentimen',
      description: 'Dashboard komprehensif untuk analisis sentiment ribuan ulasan wisatawan'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Rekomendasi cerdas berbasis machine learning dan TF-IDF'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dual Platform',
      description: 'Solusi lengkap untuk wisatawan dan pengelola destinasi wisata'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FBFF] via-[#E8F4F8] to-[#F8FBFF]">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#088395]/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0A4D68] to-[#088395] rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0A4D68] to-[#088395] bg-clip-text text-transparent">
              destinAI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#0A2540] hover:text-[#088395] transition-colors">Fitur</a>
            <a href="#how-it-works" className="text-[#0A2540] hover:text-[#088395] transition-colors">Cara Kerja</a>
            <a href="#dashboard" className="text-[#0A2540] hover:text-[#088395] transition-colors">Dashboard</a>
            <button className="px-6 py-2 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white rounded-lg hover:shadow-lg transition-all">
              Mulai Sekarang
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-[#E8F4F8] rounded-full text-[#088395] mb-6">
              AI for Smart Tourism Experience
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Temukan Destinasi Wisata Impian dengan
              <span className="bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#05BFDB] bg-clip-text text-transparent"> Kecerdasan Buatan</span>
            </h1>
            <p className="text-xl text-[#5A7C8F] mb-8 leading-relaxed">
              Platform dual-stakeholder yang mengubah ribuan ulasan menjadi rekomendasi destinasi cerdas
              untuk wisatawan dan insight analitik untuk pengelola wisata
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2">
                Mulai Eksplorasi
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-[#088395] rounded-xl border-2 border-[#088395] hover:bg-[#E8F4F8] transition-all">
                Lihat Demo
              </button>
            </div>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4 bg-white rounded-2xl p-2 shadow-lg border border-[#088395]/10">
              <button
                onClick={() => setActiveTab('tourist')}
                className={`flex-1 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'tourist'
                    ? 'bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white shadow-lg'
                    : 'text-[#5A7C8F] hover:bg-[#E8F4F8]'
                }`}
              >
                <Search className="w-5 h-5" />
                Untuk Wisatawan
              </button>
              <button
                onClick={() => setActiveTab('manager')}
                className={`flex-1 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'manager'
                    ? 'bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white shadow-lg'
                    : 'text-[#5A7C8F] hover:bg-[#E8F4F8]'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                Untuk Pengelola
              </button>
            </div>
          </div>

          {/* Tourist Interface */}
          {activeTab === 'tourist' && (
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-[#088395]/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0A4D68] mb-2">Cari Destinasi Berdasarkan Vibes</h3>
                <p className="text-[#5A7C8F]">Ketik kata kunci seperti "tempat adem", "pemandangan laut", atau "ramah anak"</p>
              </div>

              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#088395]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Coba ketik: tempat adem, pemandangan indah, atau ramah keluarga..."
                  className="w-full pl-12 pr-4 py-4 bg-[#F8FBFF] border-2 border-[#088395]/20 rounded-xl focus:border-[#088395] focus:outline-none focus:ring-4 focus:ring-[#088395]/10 transition-all"
                />
              </div>

              {/* Hasil Rekomendasi */}
              <div className="space-y-4">
                <h4 className="font-semibold text-[#0A4D68] mb-4">Rekomendasi Destinasi:</h4>
                {mockDestinations.map((dest, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-r from-[#F8FBFF] to-[#E8F4F8] rounded-xl border border-[#088395]/10 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="text-xl font-bold text-[#0A4D68] mb-1">{dest.name}</h5>
                        <div className="flex items-center gap-2 text-[#5A7C8F]">
                          <MapPin className="w-4 h-4" />
                          <span>{dest.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-[#0A4D68] text-white rounded-lg">
                          ⭐ {dest.rating}
                        </div>
                        <div className="px-3 py-1 bg-[#05BFDB] text-white rounded-lg">
                          {dest.sentiment}% Positif
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dest.vibes.map((vibe, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white text-[#088395] rounded-full text-sm border border-[#088395]/20"
                        >
                          {vibe}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Manager Dashboard */}
          {activeTab === 'manager' && (
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-[#088395]/10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0A4D68] mb-2">Analytics Dashboard</h3>
                <p className="text-[#5A7C8F]">Insight sentimen dan keyword dari ribuan ulasan wisatawan</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Sentiment Pie Chart */}
                <div className="bg-gradient-to-br from-[#F8FBFF] to-[#E8F4F8] rounded-xl p-6">
                  <h4 className="font-semibold text-[#0A4D68] mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Distribusi Sentimen
                  </h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={sentimentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}, ${value}%`}
                      >
                        {sentimentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Top Keywords */}
                <div className="bg-gradient-to-br from-[#F8FBFF] to-[#E8F4F8] rounded-xl p-6">
                  <h4 className="font-semibold text-[#0A4D68] mb-4">Keyword Teratas</h4>
                  <div className="space-y-3">
                    {[
                      { word: 'pemandangan indah', count: 342, sentiment: 'positive' },
                      { word: 'tempat bersih', count: 287, sentiment: 'positive' },
                      { word: 'harga terjangkau', count: 245, sentiment: 'positive' },
                      { word: 'parkir luas', count: 198, sentiment: 'neutral' },
                      { word: 'ramai pengunjung', count: 156, sentiment: 'neutral' },
                    ].map((keyword, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white rounded-lg border border-[#088395]/10 hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            keyword.sentiment === 'positive' ? 'bg-[#0A4D68]' : 'bg-[#088395]'
                          }`} />
                          <span className="text-[#0A2540] font-medium">{keyword.word}</span>
                        </div>
                        <span className="text-[#5A7C8F] text-sm">{keyword.count} ulasan</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-br from-[#0A4D68] to-[#088395] rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-1">1,247</div>
                  <div className="text-white/80">Total Ulasan</div>
                </div>
                <div className="bg-gradient-to-br from-[#088395] to-[#05BFDB] rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-1">4.6</div>
                  <div className="text-white/80">Rating Rata-rata</div>
                </div>
                <div className="bg-gradient-to-br from-[#05BFDB] to-[#7ED7C1] rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-1">85%</div>
                  <div className="text-white/80">Sentiment Positif</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A4D68] mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-[#5A7C8F] max-w-2xl mx-auto">
              Teknologi AI yang mengubah cara Anda menemukan dan mengelola destinasi wisata
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-[#F8FBFF] to-[#E8F4F8] rounded-2xl border border-[#088395]/10 hover:shadow-xl hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A4D68] to-[#088395] rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A4D68] mb-2">{feature.title}</h3>
                <p className="text-[#5A7C8F]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0A4D68] via-[#088395] to-[#05BFDB] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Siap Memulai Perjalanan Cerdas Anda?</h2>
          <p className="text-xl mb-8 text-white/90">
            Bergabunglah dengan ribuan wisatawan dan pengelola yang sudah mempercayai destinAI
          </p>
          <button className="px-8 py-4 bg-white text-[#088395] rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold">
            Daftar Sekarang - Gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#088395] to-[#05BFDB] rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">destinAI</span>
              </div>
              <p className="text-white/70">
                AI for Smart Tourism Experience
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Pencarian Destinasi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tim</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-white/70">
                <li>info@destinai.id</li>
                <li>+62 821 xxxx xxxx</li>
                <li>Malang, Jawa Timur</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/70">
            <p>&copy; 2026 destinAI - PJK-GM051 | Pijak x IBM Skillsbuild Capstone Project</p>
          </div>
        </div>
      </footer>
    </div>
  );
}