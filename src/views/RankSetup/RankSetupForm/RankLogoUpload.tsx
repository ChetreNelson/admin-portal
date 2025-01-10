import { useRankFormContext } from "assets/contexts/FieldControlContext";
import { cn } from "assets/lib/utils";
import { Upload } from "lucide-react";
import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

interface Props {
  handleLogoFile: (files: FileList) => void;
}
const RankLogoUpload = ({ handleLogoFile }: Props) => {
  const [imgError, setImgError] = useState(false);
  const { rankLogo, setRankLogo } = useRankFormContext();

  const handleFileInput = (files: FileList | null) => {
    if (files) {
      const objectUrl = URL.createObjectURL(files[0]);
      const img = new Image();

      img.src = objectUrl;
      setRankLogo(objectUrl);
    //   img.onload = function () {
    //     const width = (this as HTMLImageElement).naturalWidth,
    //       height = (this as HTMLImageElement).naturalHeight;
    //     const targetWidth = 800;
    //     const targetHeight = 400;
    //     const tolerance = 50;
    //     if (
    //       width - targetWidth <= tolerance &&
    //       height - targetHeight <= tolerance
    //     ) {
    //       setImgError(false);
    //     } else {
    //       setImgError(true);
    //     }
    //   };
    }
  };
  const handleDelete = () => {
    setRankLogo("");
  };
  return (
    <>
      <div className="my-4 h-[150px] w-40 ">
        {rankLogo ? (
          <img
            src={rankLogo}
            className="size-full object-contain object-center"
          />
        ) : (
          <label
            className={cn(
              "flex size-full cursor-pointer items-center justify-center rounded-md border ",
              imgError ? "border-red-500" : "border-gray-500"
            )}
          >
            <input
              type="file"
              className="hidden size-full"
              accept=".jpg, .jpeg, .png, .gif, .svg"
              onChange={(event) => {
                handleFileInput(event.target.files);
                if (event.target.files) {
                  handleLogoFile(event.target.files);
                }
              }}
              name=""
              id=""
            />
            <Upload />
          </label>
        )}
      </div>
      {rankLogo ? (
        <button
          type="button"
          className="size-10 gap-2 bg-red-500 p-0 rounded-lg hover:bg-red-500 hover:brightness-105 focus:ring-0"
          onClick={handleDelete}
          //   disabled={isLoading}
        >
          <div className="text-white pl-1">
            <MdDeleteSweep size={30} />
          </div>
        </button>
      ) : (
        <p className="text-xs text-gray-gray4">
          <span className="font-semibold">Click to upload Logo</span> <br />
          SVG, PNG, JPG or GIF (AX. 800x400px) <br />
          {imgError && (
            <span className="font-semibold text-red-500">
              Please upload an image close to 800x400px.
            </span>
          )}
        </p>
      )}
    </>
  );
};

export default RankLogoUpload;
