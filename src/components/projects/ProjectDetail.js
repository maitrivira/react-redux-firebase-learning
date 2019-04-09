import React from 'react';

const ProjectList = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laboriosam explicabo dicta.
						Dolore repellat ipsam ullam soluta quae nobis ratione? Eum nihil dolores neque sequi, distinctio
						voluptate id odio repellendus.
					</p>
				</div>
				<div className="card-action gret lighten-4 grey-text">
					<div>Posted by Maitri Vira</div>
					<div>8th April, 2019</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
