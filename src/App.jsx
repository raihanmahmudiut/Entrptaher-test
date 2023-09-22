import "./App.css";
import { BsFacebook } from "react-icons/bs";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="absolute rounded-md px-4 py-6 flex flex-col  bg-gray-800 bg-opacity-70 text-center items-center">
				<h1 className=" text-xl mb-6 mt-10 text-white  tracking-[.27em] ">
					MR. COOL DEVELOPER
				</h1>
				<hr className=" w-[330px] border-t border-slate-500"></hr>
				<div className="text-wrap mt-5 text-gray-200 px-10">
					<h3 className=" text-[10px] tracking-[.3em]">
						I DEVELOP PIXEL PERFECT WEBSITES <br /> WITH COOL ANIMATION
					</h3>
				</div>

				<div className="mt-8 mb-10 flex flex-row gap-4">
					<div className="bg-[#6E93DB]  rounded-full w-8 h-8 text-center items-center justify-center flex text-white text-xl font-bold">
						<img src="/icons8-facebook-48.png" className="w-4 h-4"></img>
					</div>
					<div className=" py-3 flex justify-center text-center items-center bg-[#84ba93] rounded-full w-8 h-8">
						<img src="/icons8-phonecall-48.png" className="w-4 h-4 "></img>
					</div>
					<div className="flex justify-center text-center items-center bg-[#c98fa8] rounded-full w-8 h-8">
						<img
							src="/icons8-email-48.png"
							className="w-4 h-4 rounded-md  "
						></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
