const Loading = () => {
    return (
        <div className="flex gap-12 h-full w-screen px-20">
            <div className="skeleton bg-gray-400 animate-pulse lg:w-[37rem] md:w-[30rem] w-96 md:flex-1 h-56"></div>
            <div className="skeleton bg-gray-400 animate-pulse lg:w-[20rem] md:w-[15rem] w-96"></div>
        </div>
    )
}

export default Loading
