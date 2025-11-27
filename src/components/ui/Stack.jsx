import { SiReact, SiRedux, SiSupabase, SiTailwindcss } from "react-icons/si";

export default function Stack() {
  return (
    <article className="grid grid-cols-2 justify-center items-center gap-4 bg-primary w-[65rem] m-auto p-4 shadow-[0-8px_10px] shadow-secondary/40 z-30 h-20 relative top-[-2rem] max-lg:h-max max-lg:w-[90%] md:grid-cols-4 md:gap-4">
      <div
        title="React"
        className="bg-secondary/50 py-3 px-4 flex items-center justify-center rounded-s h-full"
      >
        <SiReact className="text-react w-7 h-7 md:w-8 md:h-8" />
      </div>

      <div
        title="Redux"
        className="bg-secondary/50 py-3 px-4 flex items-center justify-center rounded-s h-full"
      >
        <SiRedux className="text-redux w-7 h-7 md:w-8 md:h-8" />
      </div>
      <div
        title="TailwindCSS"
        className="bg-secondary/50 py-3 px-4 flex items-center justify-center rounded-s h-full"
      >
        <SiTailwindcss className="text-tailwind w-7 h-7 md:w-8 md:h-8" />
      </div>
      <div
        title="Supabase"
        className="bg-secondary/50 py-3 px-4 flex items-center justify-center rounded-s h-full"
      >
        <SiSupabase className="text-supabase w-7 h-7 md:w-8 md:h-8" />
      </div>
    </article>
  );
}
