// import FullPageScroll from "./components/FullPageScroll";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import "./App.css";

function App() {
	return (
		// <FullPageScroll />
		<div>
			<img
				src='https://placehold.co/800x300'
				alt='placeholder'
				className='w-full h-[100vh] object-cover'
			/>
			<ProjectPage />
			<AboutPage />
			<ContactPage />
		</div>
	);
}

export default App;
