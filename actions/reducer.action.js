const { projectFileHelper } = require('../helpers');

const createReducer = (props) => (name) => {
	return () => {
		const { env } = props;
		env.run('reducer', {
			name
		});
	};
};

module.exports = (props) => (...args) => {
	projectFileHelper
		.ifProjectFolder()
		.then(createReducer(props)(...args));
};
