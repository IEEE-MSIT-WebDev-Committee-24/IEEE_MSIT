import React from "react";
import PAGE_INFO from "../../../Constants/membershipContent";
import MembershipSection from "./MembershipSection";
import Background from "../../../Assets/Bg-Main.png"

const MembershipPage = () => {

    return (
        <div className="flex justify-center w-full pb-4"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundColor: `#6B6060`,
                backgroundBlendMode: `multiply`
            }}
        >
            {/* outer container to center contents */}
            <div className="w-5/6 lg:w-3/4 2xl:w-4/6">

                {/* Hero Section */}
                <div className="flex flex-col gap-2 items-center justify-center my-4 text-white md:h-52">
                    <div className="text-center font-extralight text-2xl md:text-3xl lg:text-4xl my-2">
                        Welcome to the community of technology
                    </div>
                    <a className="rounded-full shadow-2xl py-2 px-5 bg-[#2c4a90] no-underline text-white cursor-pointer join-button">
                        JOIN IEEE NOW
                    </a>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    {PAGE_INFO.map((element) => (
                        <MembershipSection
                            title={element.title}
                            description={element.description}
                            img={element.img}
                            key={element.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MembershipPage;