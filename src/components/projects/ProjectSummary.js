import React from 'react';

const ProjectSummary = ({ project }) => {
	return (
		<div className="project-list section">
			<div className="card z-depth-0 project-summary">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">{project.title}</span>
					<p>Posted by the Maitri Vira</p>
					<p className="grey-text">8th April, 2019</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSummary;
