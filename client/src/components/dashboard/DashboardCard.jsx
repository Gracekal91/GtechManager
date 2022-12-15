import {GET_PROJECTS} from "../../queries/queries";
import {useQuery} from "@apollo/client";

const DashboardCard = ({newPoject, progress, completed, project}) => {
    const {data, error, loading} = useQuery(GET_PROJECTS);
    let newProjects;
    let inProgressProjects;
    let completedProjects;


    if (!loading && !error) {
        newProjects = data.projects.filter(project => project.status === 'Not started');
        inProgressProjects = data.projects.filter(project => project.status === 'In Progress');
        completedProjects = data.projects.filter(project => project.status === 'Completed');

    }

    return (
        <>
            <div className="dashboard_card_container">
                {newPoject &&
                    <>
                        <p>Icon</p>
                        <h5>{newProjects.length}</h5>
                        <p> new projects</p>
                    </>
                }
                {progress &&
                    <>
                        <p>Icon</p>
                        <h5>{inProgressProjects.length}</h5>
                        <p> project in progress</p>
                    </>
                }
                {completed &&
                    <>
                        <p>Icon</p>
                        <h5>{completedProjects.length} </h5>
                        <p>project completed</p>
                    </>
                }
                {project &&
                    <>
                        <p>Icon</p>
                        <h5>{data.projects.length} </h5>
                        <p>project completed</p>
                    </>
                }
            </div>
        </>
    )
}

export default DashboardCard