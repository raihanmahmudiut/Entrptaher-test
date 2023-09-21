import "./App.css";
import { BsFacebook } from "react-icons/bs";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="absolute rounded-md px-8 py-10 flex flex-col w-100 bg-gray-800 bg-opacity-95 text-center items-center">
				<p className="text-xl mb-10 mt-6 text-white font-sans tracking-widest">
					MR. COOL DEVELOPER
				</p>
				<hr className="w-11/12 border-t border-slate-500"></hr>
				<div className="text-wrap mt-10 tracking-widest font-sans font-thin text-gray-300 px-10">
					<p className="text-xs">
						I DEVELOP PIXEL PERFECT WEBSITES <br /> WITH COOL ANIMATION
					</p>
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
