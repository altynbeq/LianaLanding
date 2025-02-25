import React from "react";

const Com3p = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media (max-width: 82em) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#a-1 {\nmin-width: 100% !important;\n}\n}\n",
        }}
      />
      <div className="box-border text-base font-light h-44 leading-6 max-w-screen-2xl mx-auto px-4 w-full bg-white sm:max-w-[40.00rem] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
        <div className="flex-col h-44 justify-start w-[94.13rem] flex">
          <h1
            className="text-3xl font-bold h-16 leading-8 pb-3 pt-8 text-center uppercase w-[94.13rem]"
            style={{
              letterSpacing: "4px",
            }}>
            Find your Flower Subscription
          </h1>
          <div className="h-14 pb-3 px-5 w-[94.13rem]">
            <p className="h-6 mb-5 text-center w-[91.63rem]">
              Enjoy fresh flowers, delivered on repeat, with our curated edit of seasonal and core collection bouquets from £45.
            </p>
          </div>
          <div className="h-16 max-w-full pb-3 text-center w-[94.13rem]">
            <div className="h-11 mb-2 mr-2 max-w-full w-48 inline-block">
              <a
                className="items-center bg-stone-950 text-white cursor-pointer h-11 max-w-full min-w-[12.50rem] py-2 px-4 uppercase w-48 inline-block rounded md:pl-6 md:pr-6"
                href="https://www.flowerbx.com/luxury-flower-subscription"
                id="a-1"
                style={{
                  letterSpacing: "2px",
                }}>
                <span>SUBSCRIBE NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Com3p;
