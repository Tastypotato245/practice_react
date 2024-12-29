"use client";

export default function Home() {
	const GITHUB_URL = "https://github.com/Tastypotato245";
	const SOLVED_AC_URL = "https://solved.ac/profile/tastypotato245";

	const handleGithubButton = () => {
		window.open(GITHUB_URL, "_blank");
  	};
  	const handleSolvedButton = () => {
		window.open(SOLVED_AC_URL, "_blank");
	};

	return (
    	<div className="text-center mt-12">
      		<h1 className="text-2xl font-bold">안녕하세요!</h1>
      		<p className="mt-4 text-gray-600">열심히 하겠습니다!!</p>
	  		<div className="mt-4 space-x-4">
      			<button 
        			onClick={handleGithubButton} 
        			className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      			>
        			Github 보러가기
      			</button>
      			<button 
        			onClick={handleSolvedButton} 
        			className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      			>
      				Solved.ac 보러가기
      			</button>
	  		</div>
		</div>
  );
}
