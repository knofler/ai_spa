export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
        {/* AI Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-4xl">🤖</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8">
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Next Generation AI
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Chatbot Integration
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Seamlessly connect your business across all messaging platforms with our advanced AI chatbot technology. 
          Increase engagement, automate support, and scale your customer interactions effortlessly.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm">
            ✨ No-Code Setup
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm">
            🔄 Real-time Sync
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm">
            🔒 Enterprise Security
          </span>
          <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm">
            📊 Advanced Analytics
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl">
            🚀 Start Free Trial
          </button>
          <button className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all transform hover:scale-105">
            📅 Book Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-black text-white mb-2">99.9%</div>
            <div className="text-blue-200">Uptime Guarantee</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-black text-white mb-2">50M+</div>
            <div className="text-blue-200">Messages Processed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-3xl font-black text-white mb-2">24/7</div>
            <div className="text-blue-200">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
