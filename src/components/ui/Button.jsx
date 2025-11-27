const types = {
  base: "px-5 py-4 cursor-pointer rounded-sm transition font-body font-semibold focus:outline focus:outline-offset-[3px] focus:filter focus:brightness-90 hover:filter hover:brightness-90 flex justify-center items-center gap-2 justify-self-start md:px-7 md:py-[1.3rem]",
  primary: "bg-secondary focus:outline-secondary",
  accent: "bg-accent text-secondary/95 font-bold focus:outline-accent",
};

export default function Button({
  type = "primary",
  href,
  target = "self",
  disabled = false,
  children,
}) {
  if (type === "primary" && target === "self")
    return (
      <a
        href={disabled === true ? null : href}
        className={` ${types["base"]} ${types["primary"]} ${disabled && "bg-neutral-500 text-neutral-700"}`}
        target="_self"
      >
        {children}
      </a>
    );
  if (type === "accent" && target === "self")
    return (
      <a
        href={disabled === true ? null : href}
        className={`${types["base"]} ${types["accent"]} ${disabled && "bg-neutral-500 text-neutral-700"}`}
        target="_self"
      >
        {children}
      </a>
    );

  if (type === "primary" && target === "blank")
    return (
      <a
        href={disabled === true ? null : href}
        className={` ${types["base"]} ${types["primary"]} ${disabled && "bg-neutral-500 text-neutral-700"}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  if (type === "accent" && target === "blank")
    return (
      <a
        href={disabled === true ? null : href}
        className={`${types["base"]} ${types["accent"]} ${disabled && "bg-neutral-500 text-neutral-700"}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  if (type === "form")
    return (
      <button
        type="submit"
        disabled={disabled}
        className={`${types["base"]} ${types["accent"]} ${disabled && "bg-neutral-500 text-neutral-700"} justify-self-stretch`}
      >
        {children}
      </button>
    );
}
