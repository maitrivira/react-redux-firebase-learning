import React, { Component } from 'react';

export class CreateProject extends Component {
	state = {
		title: '',
		content: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create New Project</h5>
					<div className="input-filed">
						<label>Title</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>
					<div className="input-filed">
						<label htmlFor="content">Content</label>
						<textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
					</div>
					<div className="input-filed">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateProject;
