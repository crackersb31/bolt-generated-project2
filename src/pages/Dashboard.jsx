import { useEffect, useState } from 'react'
    import { supabase } from '../lib/supabaseClient'
    import ProjectCard from '../components/ProjectCard'
    import { Link } from 'react-router-dom'

    export default function Dashboard() {
      const [projects, setProjects] = useState([])
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchProjects = async () => {
          const { data, error } = await supabase
            .from('projets')
            .select('*')
            .order('date_creation', { ascending: false })
          
          if (!error) {
            setProjects(data)
          }
          setLoading(false)
        }

        fetchProjects()
      }, [])

      return (
        <div className="dashboard">
          <h1>Tableau de bord</h1>
          <div className="actions">
            <Link to="/new-project" className="btn">Créer un nouveau projet</Link>
          </div>
          
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      )
    }
