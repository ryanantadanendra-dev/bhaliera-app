const Loading = () => {
    return (
        <div className="flex md:flex-row flex-col items-start gap-5 h-full w-full px-4 md:px-20 mt-12">
            <div className="skeleton bg-gray-400 animate-pulse lg:w-[37rem] md:w-[30rem] w-96 md:flex-1 h-56"></div>
            <div className="skeleton bg-gray-400 animate-pulse lg:w-[20rem] md:w-[15rem] w-96 h-56"></div>
        </div>
    )
}

export default Loading
