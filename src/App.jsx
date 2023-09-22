import "./App.css";
import { BsFacebook } from "react-icons/bs";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="absolute rounded-md px-8 py-10 flex flex-col w-100 bg-gray-800 bg-opacity-80 text-center items-center">
				<h1 className="text-xl mb-10 mt-6 mx-4 text-white font-extralight  tracking-[.3em] ">
					MR. COOL DEVELOPER
				</h1>
				<hr className=" w-full border-t border-slate-500"></hr>
				<div className="text-wrap mt-10  text-gray-100 px-6">
					<h3 className=" text-[10px]">
						I DEVELOP PIXEL PERFECT WEBSITES <br /> WITH COOL ANIMATION
					</h3>
				</div>

				<div className="mt-10 flex flex-row gap-4">
					<img src="/icons8-facebook-48.png" className="w-8 h-8"></img>
					<img src="/icons8-phone-64.png" className="w-8 h-8"></img>
					<img src="/icons8-circled-envelope-48.png" className="w-8 h-8"></img>
				</div>
			</div>
		</div>
	);
}

export default App;
