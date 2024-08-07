import React from "react"

function Preview() {
    return(
        <div className="flex bg-dark-gray p-5 text-white justify-center rounded-md">
            <div className="flex flex-col gap-4">
                <div className=" flex gap-10 item-center">
                    <div>
                        <img className="w-28 rounded-full" src="" alt=""/>
                    </div>
                    <div>
                        <h1>Gabby</h1>
                        <h3 className="text-dark-blue">Gabriel</h3>
                        <p>Joined at 23 june 2024</p>
                    </div>
                    <div>
                        <p className="max-w-xs">
                            user description
                        </p>
                    </div>
                    <div className="flex bg-dark-blue p-4 rounded-md justify-evenly">
                        <div>
                            <h3>Repos</h3>
                            <span>40</span>
                        </div>
                        <div>
                            <h3>Following</h3>
                            <span>40</span>
                        </div>
                        <div>
                            <h3>Followers</h3>
                            <span>40</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-evenly">
                            <div className="flex gap-5 items-center">
                                <span>
                                <svg
      viewBox="0 0 500 1000"
      fill="currentColor"
      height="1em"
      width="1em">
      <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
    </svg>
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Preview