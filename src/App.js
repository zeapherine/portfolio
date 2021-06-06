import React from 'react';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import About from './components/About';

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
						<About />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
