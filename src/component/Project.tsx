import manga from "@/assets/manga.jpg";
import admin from "@/assets/admin.jpg";

const Project = () => {
  return (
    <div>
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-8">
          {/* Admin Dashboard */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Admin Dashboard
            </h3>
            <img src={admin} alt="err" />
            <p className="text-gray-300 mb-4">
              Dashboard for managing products, categories, and users with React,
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Arikita3624/dashboard-react"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://dashboard-react-virid-eight.vercel.app"
                className="text-purple-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Manga React */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              MGX
            </h3>
            <img src={manga} alt="err" />
            <p className="text-gray-300 mb-4">
              Web app for reading manga with MangaDex API, built with React
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/nguyenduyhung3624/MGX"
                className="text-purple-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://mgx-cm.vercel.app/"
                className="text-purple-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
