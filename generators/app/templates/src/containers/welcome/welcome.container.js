import React from 'react';
import { connect } from 'react-redux';
import './welcome.container.scss';

const WelcomeContainer = (props) => (
	<div className="welcome-container">
		<h1>
			This is <b>REATUX</b> App
		</h1>
		<p className="">Start creating your application, feel free to delete or edit this file.</p>
	</div>
);

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
