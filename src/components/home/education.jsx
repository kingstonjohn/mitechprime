import { educationData } from "../../data/education";
import Box from "../../layout/box";
import { cn } from "../../utils/cn";

export default function Education() {
    return (
        <div className="bg-[#fafafa] py-16 rounded-[16px]">
            <Box className="pt-8 max-w-[1200px]">
                <div className="grid lg:grid-cols-2 gap-10 mb-16">
                    <div>
                        <h1 className="text-center mb-4 text-[24px] lg:text-[32px]">Educational Resources</h1>
                        <p className="text-center">Even the most experienced traders or investors need to keep learning to stay ahead. SpacexElon Investment provides several resources to help you better understand SpacexElon Investment products and services, markets and technology.</p>
                        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 pt-16 w-full">
                            {
                                educationData.map((data, index) => (
                                    <div key={index}>
                                        <div className="mb-4">
                                            <i aria-hidden="true" className={cn("hm text-[30px] text-[#25D366]", data.icon)}></i>
                                        </div>
                                        <div className="flex">
                                            <div className="h-[30px] w-[50px] shrink-0"></div>
                                            <h2 className="text-[20px] font-inter">{data.title}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <figure>
                        <img src="/images/education.jpg" alt="Educational Resources" />
                    </figure>
                </div>
            </Box>
        </div>
    )
}