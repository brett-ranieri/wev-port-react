import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useEffect } from "react";
import Slider from "./Slider";

const ProjectView = ({ onOpen, modControl }) => {
	const [move, setMove] = useState(150);

	function setSliderMove() {
		let width = window.innerWidth;
		if (width < 540) {
			setMove(width * 0.8);
		} else if (width >= 540 && width < 720) {
			setMove(width * 0.58);
		} else if (width >= 720 && width < 960) {
			setMove(width * 0.47);
		} else if (width >= 960) {
			setMove(width * 0.42);
		}
	}
	// for troubleshooting purposes
	// useEffect(() => {
	// 	console.log("ue ", move);
	// }, [move]);

	window.addEventListener("load", () => {
		setSliderMove();
	});
	window.addEventListener("resize", () => setSliderMove());

	return (
		<div className='project main-view-comp'>
			<h1 className='marker text-dgreen text-3xl sm:text-5xl md:text-6xl px-6 py-3'>
				Highlighted Work
			</h1>
			<p className='raleway text-dgreen text-sm sm:text-base font-medium px-8 pb-3'>
				The slider below displays some of my favorite recent projects. Click on the screenshots of
				any project to learn more.
			</p>
			<Slider
				sliderType={1}
				sliderMove={move}
				onOpen={onOpen}
				modControl={modControl}
			/>
			<div className='flex-container btn-style'>
				<Link
					className='secondary-btn py-3 px-6 mt-3 mb-5'
					to='/projects'
				>
					See all Projects
				</Link>
			</div>
			<div className='bg-dgreen'>
				<h1 className='marker text-tan text-3xl sm:text-5xl md:text-6xl p-3'>Current Project:</h1>
				<p className='px-4 pb-6 ml-6 raleway font-medium text-tan'>
					I am continuing to build features for my Pick'ems App. My current focus is on adding
					calculations and displays to the ScoringView.{" "}
					<a
						href='https://github.com/brett-ranieri/pickems-app/tree/scoring-1'
						className='hover:scale-105 ease-in-out duration-300 underline'
						target='_blank'
						rel='noreferrer'
					>
						Click Here
					</a>{" "}
					to check out the Scoring Feature branch page and see what I'm up to!
				</p>
			</div>
			<div className='bg-tan'>
				<h1 className='marker text-dgreen text-2xl sm:text-3xl md:text-6xl p-3'>
					Familiar Languages/Technologies:
				</h1>
				<ul className='pb-3 mx-6 raleway font-semibold text-dgreen flex flex-row flex-wrap'>
					<li className='p-3'>Node</li>
					<li className='p-3'>JavaScript</li>
					<li className='p-3'>HTML</li>
					<li className='p-3'>CSS</li>
					<li className='p-3'>MongoDB</li>
					<li className='p-3'>SQL</li>
					<li className='p-3'>Express</li>
					<li className='p-3'>React</li>
					<li className='p-3'>React Bootstrap</li>
					<li className='p-3'>SASS</li>
					<li className='p-3'>Angular</li>
					<li className='p-3'>Python</li>
					<li className='p-3'>Next.js</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectView;
