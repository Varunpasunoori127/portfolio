import avatar from "../assets/Varun.jpg"; // make sure the file name & case match

export function Hero() {
  return (
    <section className="section pt-20">
      <div className="container-xl grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-slate-500">Varun Pasunoori</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Frontend Developer who loves building fast, accessible, beautiful web apps.
          </p>
        </div>

        <div className="justify-self-center">
          <img
            src={avatar}
            alt="Varun Pasunoori"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover ring-8 ring-slate-200 dark:ring-slate-800"
          />
        </div>
      </div>
    </section>
  );
}
