import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 '>
						<SideBar />
					</div>
					<div className='col-lg-9 app_main-content'>
						<Navbar />
						<Switch>
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
