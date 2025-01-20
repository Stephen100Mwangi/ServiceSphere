import Project from '../../models/Project.js';

const fetchPersonalProjects = async (req, res) => {
  const projects = await Project.find ({user: req.params.id}).sort ({
    createdAt: -1,
  });

  if (projects.length === 0) {
    res.status (204).json ({message: 'No projects found'});
    return;
  } else {
    res
      .status (200)
      .json ({message: 'Projects fetched successfully', projects});
    return;
  }
};

export default fetchPersonalProjects;
