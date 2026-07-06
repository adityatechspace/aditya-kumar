import CountUpLib from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaLaptopCode,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

// Handle both ESM and CommonJS export
const CountUp =
  CountUpLib && CountUpLib.default
    ? CountUpLib.default
    : CountUpLib;

function Counter({ stats = {} }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const statItems = [
    {
      number: stats.projects ?? 0,
      suffix: "+",
      label: "Projects Built",
      icon: <FaCode />,
    },
    {
      number: stats.certifications ?? 0,
      suffix: "+",
      label: "Certifications",
      icon: <FaLaptopCode />,
    },
    {
      number: stats.technologies ?? 0,
      suffix: "+",
      label: "Technologies",
      icon: <FaRobot />,
    },
    {
      number: stats.experience ?? 0,
      suffix: "+",
      label: "Years Learning",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

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
                ACHIEVEMENTS
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
            My Journey
            <br />
            in Numbers
        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
            Every project, technology, and AI application
            represents continuous learning, building,
            and solving real-world problems.
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

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {statItems.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden

                rounded-3xl

                border
                border-slate-800

                bg-gradient-to-b
                from-slate-900
                to-slate-950

                p-8

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-2xl
                hover:shadow-blue-500/10
              "
            >

              {/* Hover Glow */}

              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-blue-500/10
                via-purple-500/10
                to-transparent
              " />

              {/* Icon */}

              <div className="relative flex justify-center mb-6">

                <div className="
                  w-16
                  h-16
                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  bg-blue-500/10

                  border
                  border-blue-500/20

                  text-2xl
                  text-blue-400
                ">
                  {item.icon}
                </div>

              </div>

              {/* Number */}

              <h3 className="
                relative
                text-center

                text-5xl
                font-extrabold

                bg-gradient-to-r
                from-blue-400
                via-cyan-400
                to-purple-400

                bg-clip-text
                text-transparent
              ">

                <CountUp
                  start={0}
                  end={inView ? item.number : 0}
                  duration={2.3}
                />

                {item.suffix}

              </h3>

              {/* Label */}

              <p className="
                relative
                mt-4

                text-center

                uppercase
                tracking-[0.15em]

                text-sm
                text-slate-400
              ">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Counter;