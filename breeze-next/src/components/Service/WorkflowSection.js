const WorkflowSection = ({ service }) => {
    const data = service[0]?.workflow?.map((data, index) => ({
        title: data.title,
        content: data.content,
    }))

    return (
        <section className="w-screen h-full pt-32 relative  bg-white">
            <h2 className="text-5xl text-center">Workflow</h2>

            <div className="flex justify-center flex-wrap lg:px-12 gap-12 mt-12 text-white text-center">
                {service[0]?.workflow?.map((data, index) => (
                    <div
                        key={index}
                        className="lg:w-[15rem] w-72 h-[22rem] primary-bg px-5 py-6 lg:px-3 flex flex-col justify-around">
                        <p className="text-6xl">{index + 1}</p>
                        <h3 className="font-bold mt-2">{data.title}</h3>
                        <p className=" text-[0.9rem]">{data.content}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkflowSection
