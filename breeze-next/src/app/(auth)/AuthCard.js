const AuthCard = ({ logo, children }) => (
    <div
        className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 "
        style={{ backgroundColor: 'var(--color-primary)' }}>
        <div>{logo}</div>

        <div className="max-w-[25rem] w-[25rem] md:w-[35rem] md:max-w-[35rem] lg:h-[32rem] md:h[32rem] sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
