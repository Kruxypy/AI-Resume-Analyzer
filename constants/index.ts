
export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [
                    { type: "good", tip: "Clear job titles and dates" },
                    { type: "improve", tip: "Add more role keywords from the JD" },
                    { type: "improve", tip: "Use standard section headings (Experience, Skills, Education)" },
                ],
            },
            toneAndStyle: {
                score: 90,
                tips: [
                    {
                        type: "good",
                        tip: "Confident, direct language",
                        explanation: "Action verbs and concise bullets make the impact easy to scan.",
                    },
                    {
                        type: "improve",
                        tip: "Reduce long bullets",
                        explanation: "Split multi-part bullets into 1 idea per line for faster readability.",
                    },
                ],
            },
            content: {
                score: 90,
                tips: [
                    {
                        type: "good",
                        tip: "Quantified outcomes",
                        explanation: "Numbers (performance, users, revenue, time saved) strengthen credibility.",
                    },
                    {
                        type: "improve",
                        tip: "Add more project depth",
                        explanation: "Include tech stack + your specific ownership for key projects.",
                    },
                ],
            },
            structure: {
                score: 90,
                tips: [
                    {
                        type: "good",
                        tip: "Easy-to-skim layout",
                        explanation: "Good spacing and consistent formatting help reviewers scan quickly.",
                    },
                    {
                        type: "improve",
                        tip: "Tighten top section",
                        explanation: "Keep summary to 2–3 lines and move details into Experience.",
                    },
                ],
            },
            skills: {
                score: 90,
                tips: [
                    {
                        type: "good",
                        tip: "Relevant frontend stack",
                        explanation: "Showcases the core technologies needed for modern web roles.",
                    },
                    {
                        type: "improve",
                        tip: "Group skills by category",
                        explanation: "Separate Languages, Frameworks, Tools, and Cloud for clarity.",
                    },
                ],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobTitle: "Cloud Engineer",
        imagePath: "/images/resume_02.png",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 60,
                tips: [
                    { type: "improve", tip: "Match more cloud keywords to the role" },
                    { type: "improve", tip: "Add missing certifications if applicable" },
                    { type: "good", tip: "Includes core cloud responsibilities" },
                ],
            },
            toneAndStyle: {
                score: 55,
                tips: [
                    {
                        type: "improve",
                        tip: "Use stronger action verbs",
                        explanation: "Replace passive phrases with delivered/built/migrated/automated.",
                    },
                    {
                        type: "improve",
                        tip: "Reduce jargon",
                        explanation: "Be specific about what you built and the impact instead of buzzwords.",
                    },
                ],
            },
            content: {
                score: 55,
                tips: [
                    {
                        type: "improve",
                        tip: "Add measurable impact",
                        explanation: "Include latency/cost reductions, uptime improvements, scale, or SLOs.",
                    },
                    {
                        type: "improve",
                        tip: "Highlight ownership",
                        explanation: "Call out your role in incident response, design, and delivery.",
                    },
                ],
            },
            structure: {
                score: 60,
                tips: [
                    {
                        type: "good",
                        tip: "Sections are present",
                        explanation: "Experience and skills are clearly separated.",
                    },
                    {
                        type: "improve",
                        tip: "Improve consistency",
                        explanation: "Keep bullet indentation, punctuation, and tense consistent.",
                    },
                ],
            },
            skills: {
                score: 45,
                tips: [
                    {
                        type: "improve",
                        tip: "Add missing tools",
                        explanation: "Include IaC, monitoring, and CI/CD tools commonly required.",
                    },
                    {
                        type: "improve",
                        tip: "Prioritize key skills first",
                        explanation: "Put the most relevant 8–12 skills at the top for quick scanning.",
                    },
                ],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobTitle: "iOS Developer",
        imagePath: "/images/resume_03.png",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 70,
                tips: [
                    { type: "good", tip: "Strong iOS keywords present" },
                    { type: "improve", tip: "Add more app-store impact metrics" },
                    { type: "improve", tip: "Include accessibility and testing keywords" },
                ],
            },
            toneAndStyle: {
                score: 75,
                tips: [
                    {
                        type: "good",
                        tip: "Concise bullet points",
                        explanation: "Keeps each line focused, making scanning easier.",
                    },
                    {
                        type: "improve",
                        tip: "Clarify technical depth",
                        explanation: "Briefly mention architecture choices and tradeoffs (MVVM, DI, etc.).",
                    },
                ],
            },
            content: {
                score: 80,
                tips: [
                    {
                        type: "good",
                        tip: "Project portfolio is visible",
                        explanation: "Shows the types of apps and features you’ve built.",
                    },
                    {
                        type: "improve",
                        tip: "Add more business impact",
                        explanation: "Tie work to user engagement, retention, crash-free rate, or revenue.",
                    },
                ],
            },
            structure: {
                score: 75,
                tips: [
                    {
                        type: "good",
                        tip: "Readable layout",
                        explanation: "Spacing and hierarchy make the resume easy to review.",
                    },
                    {
                        type: "improve",
                        tip: "Tighten spacing",
                        explanation: "Use consistent margins and avoid large blank sections.",
                    },
                ],
            },
            skills: {
                score: 75,
                tips: [
                    {
                        type: "good",
                        tip: "Modern iOS stack",
                        explanation: "Swift and common iOS frameworks are clearly present.",
                    },
                    {
                        type: "improve",
                        tip: "List testing + tooling",
                        explanation: "Add XCTest, CI, and debugging/perf tools to round out the stack.",
                    },
                ],
            },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({
                                        jobTitle,
                                        jobDescription,
                                        AIResponseFormat,
                                    }: {
    jobTitle: string;
    jobDescription: string;
    AIResponseFormat: string;
}) =>
    `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;
