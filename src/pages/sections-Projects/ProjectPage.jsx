function ProjectPage ({ match }) {
    return (
        <div>
            <h1>{match.params.projectId}</h1>
        </div>
    );
}

export default ProjectPage;
