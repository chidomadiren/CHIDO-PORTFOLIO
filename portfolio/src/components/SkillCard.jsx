function SkillCard({ skill }) {
  return (
    <div className="bg-gray-900 border border-orange-500 rounded-xl p-6 text-center shadow-lg hover:scale-105 hover:bg-orange-500 hover:text-black transition duration-300">
      <h2 className="text-xl font-semibold">{skill}</h2>
    </div>
  );
}

export default SkillCard;