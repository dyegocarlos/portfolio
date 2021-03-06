import React from 'react';
import PropTypes from 'prop-types';
import { ProjectPage } from '../../templates/project';

const ProjectPagePreview = ({ entry, widgetFor }) => (
	<ProjectPage
		content={widgetFor('body')}
		description={entry.getIn(['data', 'description'])}
		tags={entry.getIn(['data', 'tags'])}
		title={entry.getIn(['data', 'title'])}
	/>
);

ProjectPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func,
	}),
	widgetFor: PropTypes.func,
};

export default ProjectPagePreview;
