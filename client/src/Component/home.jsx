import Circle from "./Circle";

function Home({ data }) {
  return (
    <div className="py-10">
      <h1 className="font-bold text-2xl">
        Documents Required for Study Abroad Loan
      </h1>

      <div>
        <div className="border-4 relative border-dashed flex justify-center items-center rounded-[50%]  w-[1200px] h-[1200px] mx-auto my-[100px]">
          <Circle
            heading={"Guarantor Form"}
            size="200px"
            style="absolute top-[30%] right-[-6%]"
            iconSize={"12px"}
            about={data["Guarantor Form"]}
          />
          <div className="border-4 relative border-dashed flex justify-center items-center rounded-[50%]  w-[850px] h-[850px]">
            <Circle
              heading={"Identity Proof"}
              size="200px"
              style="absolute top-[-0%] right-[0%]"
              about={data["Identity Proof"]}
            />
            <Circle
              heading={"Application Form"}
              size="200px"
              style="absolute top-[-0%] left-[0%]"
              iconSize={"12px"}
              about={data["Application Form"]}
            />
            <Circle
              heading={"Residence Proof"}
              size="200px"
              style="absolute bottom-[-0%] left-[0%]"
              iconSize={"12px"}
              about={data["Residence Proof"]}
            />
            <Circle
              heading={"Residence Proof"}
              size="200px"
              style="absolute bottom-[-0%] left-[0%]"
              iconSize={"12px"}
              about={data["Residence Proof"]}
            />
            <Circle
              heading={"Additional Documents"}
              size="200px"
              style="absolute bottom-[-0%] right-[0%]"
              iconSize={"12px"}
              about={data["Additional Documents"]}
            />
            <div className=" w-[500px] h-[500px] flex items-center justify-center  rounded-[50%] relative border-4 border-dashed">
              <Circle
                heading={"Income Proof"}
                size="250px"
                about={data["Income Proof"]}
              />
              <Circle
                heading={"Photographs"}
                size="200px"
                style="absolute top-[-25%]"
                about={data["Photographs"]}
              />
              <Circle
                heading={"Property Documents"}
                size="200px"
                style="absolute right-[-25%]"
                about={data["Property Documents"]}
              />
              <Circle
                heading={"Academic Records"}
                size="200px"
                style="absolute left-[-25%]"
                about={data["Academic Records"]}
              />
              <Circle
                heading={"Academic Records"}
                size="200px"
                iconSize="12px"
                style="absolute left-[-25%]"
                about={data["Academic Records"]}
              />
              <Circle
                heading={"Bank Statements"}
                size="200px"
                iconSize="12px"
                style="absolute bottom-[-25%]"
                about={data["Bank Statements"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
