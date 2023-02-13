function SkillsTags({ skill }) {
  return (
    <div
      className={`font-bold bg-blue-medium px-3 py-[2px] border border-black rounded-md uppercase text-sm `}
      style={{ color: `${skill.color}` }}
    >
      #{skill.title}
    </div>
  );
}

export default SkillsTags;
