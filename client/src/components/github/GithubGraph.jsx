import GitHubCalendarLib from "react-github-calendar";

// Handle both ESM and CommonJS default export shapes
const GitHubCalendar = GitHubCalendarLib && GitHubCalendarLib.default ? GitHubCalendarLib.default : GitHubCalendarLib;

function GithubGraph() {
  return (
    <section
      id="github"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">
          <p className="text-blue-400 mb-2">
            GITHUB ACTIVITY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Contribution Graph
          </h2>

          <p className="text-slate-400 mt-4">
            My coding activity and open-source contributions.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-x-auto">
          <GitHubCalendar
            username="adityatechspace"
          />
        </div>

      </div>
    </section>
  );
}

export default GithubGraph;