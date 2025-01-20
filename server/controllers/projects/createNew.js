import User from '../../models/User.js';
import Project from '../../models/Project.js';

const createNewProject = async (req, res) => {
  const {title, description, image, price, phone, user} = req.body;
  const phoneReg = /^0[71]\d{8}$/;
  const titleReg = /^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/;

  if (!title || !description || !user || !image || !price || !phone) {
    res.status (400).json ({message: 'All fields are required'});
    return;
  } else {
    const userFound = await User.findById (user);
    if (!userFound) {
      res.status (404).json ({message: 'User not found'});
    }

    if (typeof price !== 'number') {
      res.status (400).json ({message: 'Price must be a number'});
      return;
    }

    if (phoneReg.test (phone) === false) {
      res.status (400).json ({message: 'Phone number must be valid'});
      return;
    }

    if (titleReg.test (title) === false) {
      res.status (400).json ({message: 'Title must be valid'});
      return;
    }

    const newProject = await Project.create ({
      title,
      description,
      user,
      image,
      price,
      phone,
    });

    res
      .status (201)
      .json ({message: 'Project created successfully', newProject});
  }
};

export default createNewProject;
