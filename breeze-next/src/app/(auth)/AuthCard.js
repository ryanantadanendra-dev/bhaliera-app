const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 primary-bg">
        <div>{logo}</div>

        <div className="w-full lg:h-[32rem] md:h[32rem] sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
