import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import {resume} from "react-dom/server";
import {resumes} from "../../constants";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumate" },
    { name: "description", content: "Get the Smart Feedback for your dream job !" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>



    <section className="main-section">
      <div className="Page-heading">
        <h1>Track Applications & Resume Ratings</h1>
        <h2>Review your submission and Check AI-powered feedback</h2>
      </div>
    </section>

    {resumes.map(resume => (
        <div>
          <h1>{resume.jobTitle}</h1>
        </div>
    ))}

  </main>
}
