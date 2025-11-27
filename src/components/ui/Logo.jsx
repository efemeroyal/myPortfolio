export default function Logo({ text }) {
  return (
    <div className="uppercase font-bold text-[1.75rem]  bg-gradient-to-bl from-accent to-text bg-clip-text">
      <a href="#home" className="text-transparent font-body font-extrabold">
        <span>{text}</span>
      </a>
    </div>
  );
}
