export default function About() {
    return (
        <div className="py-10 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.pinimg.com/originals/92/32/3b/92323bb410cc82cecf739c87c0d31187.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Doraemon Is A Friendly Robot Cat from the Future
                        </h2>

                        <p className="mt-6 text-gray-600">
                            Doraemon is a robotic cat from the future who comes to help Nobita
                            overcome his everyday problems. With his magical 4D pocket, Doraemon
                            can pull out amazing gadgets that make their adventures exciting and fun.
                        </p>

                        <p className="mt-4 text-gray-600">
                            Doraemon and Nobita share a special friendship filled with funny moments,
                            exciting adventures, and valuable life lessons. Doraemon's futuristic
                            gadgets and caring nature make him a beloved character for people of all ages.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}