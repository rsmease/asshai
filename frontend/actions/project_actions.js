import { fetchProject,
         fetchAllProjects,
         postProject
} from '../util/project_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT_MODAL_ERRORS = 'RECEIVE_PROJECT_MODAL_ERRORS';
export const REMOVE_MODAL_ERRORS = 'REMOVE_MODAL_ERRORS';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveAllProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveProjectModalErrors = (errors) => ({
  type: RECEIVE_PROJECT_MODAL_ERRORS,
  errors: errors
});

const removeProjectModalErrors = () => ({
  type: REMOVE_MODAL_ERRORS,
});

export const requestProject = (projectId) => (dispatch) =>
  fetchProject(projectId).then(fetchedProject =>
    dispatch(receiveProject(fetchedProject)));

export const requestAllProjects = () => (dispatch) => fetchAllProjects()
  .then(fetchedProjects => dispatch(receiveAllProjects(fetchedProjects)));

export const createNewProject = (formProject) => (dispatch) =>
  postProject(formProject).then(createdProject =>
    dispatch(receiveProject(createdProject)),
    err => (dispatch(receiveProjectModalErrors(err.responseJSON))));

export const removeAllProjectModalErrors = () => (dispatch) =>
  dispatch(removeProjectModalErrors());
