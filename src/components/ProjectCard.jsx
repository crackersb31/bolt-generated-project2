import { Link } from 'react-router-dom'

    export default function ProjectCard({ project }) {
      return (
        <div className="project-card">
          <h2>{project.nom_projet}</h2>
          <p>GU: {project.gu}</p>
          <p>GEH: {project.geh}</p>
          <p>Date: {new Date(project.date_creation).toLocaleDateString()}</p>
          <p>Moyenne: {project.moyenne_generale.toFixed(1)}/10</p>
          <div className="actions">
            <Link to={`/project/${project.id}`}>Voir</Link>
            <Link to={`/edit-project/${project.id}`}>Modifier</Link>
          </div>
        </div>
      )
    }
