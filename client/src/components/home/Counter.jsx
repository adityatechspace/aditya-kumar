import CountUpLib from "react-countup";

// Handle both ESM and CommonJS default export shapes
const CountUp = CountUpLib && CountUpLib.default ? CountUpLib.default : CountUpLib;

function Counter() {
  const stats = [
    {
      number: 47,
      suffix: "+",
      label: "Projects",
    },
    {
      number: 23,
      suffix: "+",
      label: "Technologies",
    },
    {
      number: 15,
      suffix: "+",
      label: "Clients",
    },
    {
      number: 3,
      suffix: "+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h3>

              <p className="text-slate-400">
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