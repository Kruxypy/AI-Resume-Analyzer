import { Link } from "react-router";
import ScoreCircle from "~/Components/Scorecircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="
                flex flex-col rounded-2xl overflow-hidden shadow-md bg-white
                w-full animate-in fade-in duration-1000
                hover:shadow-xl hover:scale-[1.02] transition-all duration-300
            "
        >
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 lg:p-6">
                <div className="flex flex-col gap-1 min-w-0 pr-3">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black truncate">
                        {companyName}
                    </h2>
                    <h3 className="text-xs sm:text-sm lg:text-base text-gray-500 truncate">
                        {jobTitle}
                    </h3>
                </div>
                <div className="shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>

            {/* Resume Image */}
            <div className="w-full overflow-hidden">
                <img
                    src={imagePath}
                    alt={`${companyName} resume`}
                    className="
                        w-full object-cover object-top
                        h-[200px] sm:h-[260px] lg:h-[320px]
                    "
                />
            </div>
        </Link>
    );
};

export default ResumeCard;