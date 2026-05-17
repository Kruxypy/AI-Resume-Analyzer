import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import Resumecard from "~/Components/ResumeCard";
import { resumes } from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumate" },
    { name: "description", content: "Get the Smart Feedback for your dream job !" },
  ];
}

export default function Home() {
  return (
      <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />


        <section className="main-section">
          <div className="Page-heading py-16">  {/* ✅ closing quote fixed */}
            <h1>Track Applications & Resume Ratings</h1>
            <h2>Review your submission and Check AI-powered feedback</h2>
          </div>

          {resumes.length > 0 && (
              <div className="w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                  {resumes.map((resume) => (
                      <Resumecard key={resume.id} resume={resume} />
                  ))}
                </div>
              </div>
          )}
        </section>
      </main>
  );
}