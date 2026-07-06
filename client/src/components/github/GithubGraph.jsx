import GitHubCalendarLib from "react-github-calendar";

// Handle both ESM and CommonJS default export shapes
const GitHubCalendar = GitHubCalendarLib && GitHubCalendarLib.default ? GitHubCalendarLib.default : GitHubCalendarLib;

function GithubGraph({ githubUrl }) {
  const githubUsername = githubUrl
    ? githubUrl
        .replace(/\/?$/, "")
        .split("/")
        .filter(Boolean)
        .pop()
    : "adityatechspace";

  return (
    <section
      id="github"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

{/* Heading */}

 <div className="relative mb-20">

    <div className="
    absolute
    -left-20
    top-0
    h-56
    w-56
    rounded-full
    bg-blue-500/10
    blur-[110px]
    "></div>

    <div className="relative">

        <div className="inline-flex items-center gap-3">

            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>

            <span className="
            uppercase
            tracking-[0.35em]
            text-xs
            font-semibold
            text-blue-400/80
            ">
         GITHUB ACTIVITY

            </span>

        </div>

        <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-extrabold
        leading-tight

        bg-gradient-to-r
        from-white
        via-slate-100
        to-slate-400

        bg-clip-text
        text-transparent
        ">
Contribution Graph

        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
            My coding activity and open-source contributions.
        </p>

        <div className="
        mt-8
        h-1
        w-28
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-500
        "/>

    </div>

</div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-x-auto">
          <GitHubCalendar
            username={githubUsername}
          />
        </div>

      </div>
    </section>
  );
}

export default GithubGraph;