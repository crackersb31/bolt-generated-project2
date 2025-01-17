import { useParams } from 'react-router-dom'
    import { useEffect, useState } from 'react'
    import { supabase } from '../lib/supabaseClient'

    export default function ViewProject() {
      const { id } = useParams()
      const [project, setProject] = useState(null)
      const [loading, setLoading] = useState(true)

      useEffect(() => {
        const fetchProject = async () => {
          const { data, error } = await supabase
            .from('projets')
            .select('*')
            .eq('id', id)
            .single()
          
          if (!error) {
            setProject(data)
          }
          setLoading(false)
        }

        fetchProject()
      }, [id])

      if (loading) return <p>Chargement...</p>
      if (!project) return <p>Projet non trouvé</p>

      return (
        <div className="project-details">
          <h1>{project.nom_projet}</h1>
          <div className="project-info">
            <p><strong>GU:</strong> {project.gu}</p>
            <p><strong>GEH:</strong> {project.geh}</p>
            <p><strong>Date de création:</strong> {new Date(project.date_creation).toLocaleDateString()}</p>
          </div>

          <div className="ratings">
            <h2>Notes</h2>
            <ul>
              <li>Impact sur la production: {project.impact_production}</li>
              <li>ROI: {project.roi}</li>
              <li>Complexité: {project.complexite}</li>
              <li>Urgence: {project.urgence}</li>
              <li>Alignement stratégique: {project.alignement_strategique}</li>
              <li>Risques et contraintes: {project.risques_contraintes}</li>
              <li>Disponibilité des ressources: {project.disponibilite_ressources}</li>
              <li>Durée de mise en œuvre: {project.duree_mise_oeuvre}</li>
              <li>Feedback des équipes: {project.feedback_equipes}</li>
            </ul>
            <p><strong>Moyenne générale:</strong> {project.moyenne_generale.toFixed(1)}/10</p>
          </div>

          <div className="comments">
            <h2>Commentaires</h2>
            <p>{project.commentaires}</p>
          </div>
        </div>
      )
    }
