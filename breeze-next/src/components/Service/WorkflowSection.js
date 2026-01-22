const WorkflowSection = ({ service }) => {
    const data = service[0]?.workflow?.map((data, index) => ({
        title: data.title,
        content: data.content,
    }))

    return (
        <div className="w-screen min-h-screen pt-32 relative overflow-clip">
            <h1 className="text-5xl text-center">Workflow</h1>
        </div>
    )
}

export default WorkflowSection
