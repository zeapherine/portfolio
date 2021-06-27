import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
// import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 '>
						<SideBar />
					</div>

					<div className='col-lg-9 app_main-content'>
						<Navbar />
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route exact path='/'>
									<About />
								</Route>
								<Route exact path='/resume'>
									<Resume />
								</Route>
								<Route exact path='/projects'>
									<Projects />
								</Route>
							</Switch>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
