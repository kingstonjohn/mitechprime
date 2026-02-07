import { teamImagesData } from "../../data/team";
import Box from "../../layout/box";
import { cn } from "../../utils/cn";

export default function Team(){

    return (
        <Box className="pt-16 pb-10">
            <header className="mb-12">
                <h1 className="text-center text-[24px] lg:text-[32px]">Our Expert Team Members</h1>
            </header>
            <div className="flex justify-center w-full mx-auto max-w-[1020px] gap-4 flex-wrap mb-12">
                {
                    teamImagesData.map((data, index) => (
                        <div key={index} className={cn("h-[180x] w-[180px] rounded-full overflow-hidden", (index == 0 || index == 1 || index == 3 || index == 7 || index == 8 || index == 9) && "border-[6px] border-[#F9354B]")}>
                            <img src={data.image} alt="Team" className="object-cover w-full h-full" />
                        </div>
                    ))
                }
            </div>
        </Box>
    )
}