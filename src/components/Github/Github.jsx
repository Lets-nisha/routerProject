import { useLoaderData } from "react-router-dom";

export const Github = () => {
    const data = useLoaderData();

    return (
        <div className="min-h-screen bg-gradient-to-br   px-4 py-5">

            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Banner */}
                <div className="h-20 bg-gradient-to-r from-blue-200 via-blue-800 to-blue-200">
                </div>

                <div className="px-6 md:px-10 pb-10">

                    {/* Profile Image */}
                    <div className="flex justify-center -mt-16">
                        <img
                            src="https://i.pinimg.com/originals/92/32/3b/92323bb410cc82cecf739c87c0d31187.jpg"
                            alt={data.login}
                            className="w-50 h-50 rounded-full border-8 border-white shadow-xl"
                        />
                    </div>

                    {/* Name */}
                    <div className="text-center mt-4">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {data.name || data.login}
                        </h2>

                        <p className="text-gray-500 text-lg">
                            @{data.login}
                        </p>

                        {data.bio && (
                            <p className="max-w-xl mx-auto mt-4 text-gray-600">
                                {data.bio}
                            </p>
                        )}
                    </div>

                    {/* GitHub Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                        <div className="bg-orange-50 rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold text-orange-600">
                                {data.followers}
                            </div>
                            <div className="text-gray-600 mt-1">
                                Followers
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold text-purple-600">
                                {data.following}
                            </div>
                            <div className="text-gray-600 mt-1">
                                Following
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6 text-center">
                            <div className="text-3xl font-bold text-blue-600">
                                {data.public_repos}
                            </div>
                            <div className="text-gray-600 mt-1">
                                Repositories
                            </div>
                        </div>

                    </div>



                    {/* GitHub Link */}
                    <div className="text-center mt-8">
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-900 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition duration-300 shadow-lg"
                        >
                            Visit GitHub Profile →
                        </a>
                    </div>

                </div>
            </div>



        </div>
    );
};

export const githubInfoLoader = async () => {
    const response = await fetch(
        "https://api.github.com/users/lets-nisha"
    );

    if (!response.ok) {
        throw new Error("GitHub profile could not be loaded");
    }

    return response.json();
};
