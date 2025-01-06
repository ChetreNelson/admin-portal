import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ranksAndDivisons } from "constants/ratingPage";
import { FaGreaterThan } from "react-icons/fa";

const BoostListCard = () => {
  const [selectedRank, setSelectedRank] = useState("Master");
  console.log("🚀 ~ BoostListCard ~ selectedRank:", selectedRank);
  const handleRankChange = (e: string) => {
    console.log(e);
    setSelectedRank(e);
  };
  const rankList = ranksAndDivisons.find(
    (item) => item.rank.label === selectedRank
  );
  const tobeRankList = ranksAndDivisons?.filter(
    (item) => item.rank.value >= Number(rankList?.rank?.value)
  );
  console.log("🚀 ~ BoostListCard ~ tobeRankList:", tobeRankList);
  console.log("🚀 ~ BoostListCard ~ rankList", rankList);
  return (
    <>
      <div className="flex flex-col   items-center gap-2 border rounded-lg  p-2 w-full">
        <img
          className="size-36 rounded-lg"
          src="https://i.pinimg.com/474x/04/d4/de/04d4de165eb3da7a72673e3f2db82a7e.jpg"
          alt="myrank"
        />
        <h2>My current rank</h2>
        <div className=""></div>
        <div className="">
          <Select onValueChange={(rank) => handleRankChange(rank)}>
            <SelectTrigger className="w-[180px] bg-slate-500">
              <SelectValue placeholder={selectedRank} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {ranksAndDivisons.map((item) => (
                  <SelectItem key={item.rank.value} value={item.rank.label}>
                    {item.rank.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Select>
            <SelectTrigger
              onChange={(e) => e.preventDefault()}
              className="w-[180px] bg-slate-500"
            >
              <SelectValue placeholder={rankList?.divisions[0]} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {rankList?.divisions.map((division) => (
                  <SelectItem key={division} value={division}>
                    {division}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <FaGreaterThan size={40} className="rotate-90 sm:rotate-0" />
      <div className="flex flex-col   items-center gap-2 border rounded-lg  p-2 w-full">
        <img
          className="size-36 rounded-lg"
          src="https://i.pinimg.com/474x/04/d4/de/04d4de165eb3da7a72673e3f2db82a7e.jpg"
          alt="myrank"
        />
        <h2>I want to be</h2>
        <div className=""></div>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px] bg-slate-500">
              <SelectValue placeholder={tobeRankList[0].rank.label} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {tobeRankList.map((item) => (
                  <SelectItem key={item.rank.value} value={item.rank.label}>
                    {item.rank.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Select>
            <SelectTrigger
              onChange={(e) => e.preventDefault()}
              className="w-[180px] bg-slate-500"
            >
              <SelectValue placeholder={rankList?.divisions[0]} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {rankList?.divisions.map((division) => (
                  <SelectItem key={division} value={division}>
                    {division}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default BoostListCard;
