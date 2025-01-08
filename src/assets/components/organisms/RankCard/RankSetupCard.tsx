interface CardProps {
  imageUrl?: string;
  rankName?: string;
  divisions?: string;
  stars?: string;
}

const RankSetupCard = ({ imageUrl, rankName, divisions, stars }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden  w-72">
      <img
        src={
          imageUrl ??
          "https://i.pinimg.com/474x/04/d4/de/04d4de165eb3da7a72673e3f2db82a7e.jpg"
        }
        alt="Rank Image"
        className=" h-40 object-contain w-full"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          {rankName ?? "Legend"}
        </h2>
        <p className="text-gray-600 mb-1">Divisions: {divisions ?? 5}</p>
        <p className="text-gray-600">Stars: {stars ?? 3}</p>
      </div>
    </div>
  );
};

export default RankSetupCard;
