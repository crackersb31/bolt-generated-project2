import { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { supabase } from '../lib/supabaseClient'
    import RatingSlider from '../components/RatingSlider'

    const criteria = [
      { id: 'impact_production', label: 'Impact sur la production' },
      { id: 'roi', label: 'Retour sur investissement (ROI)' },
      { id: 'complexite', label: 'Complexité' },
      { id: 'urgence', label: 'Urgence' },
      { id: 'alignement_strategique', label: 'Alignement stratégique' },
      { id: 'risques_contraintes', label: 'Risques et contraintes' },
      { id: 'disponibilite_ressources', label: 'Disponibilité des ressources' },
      { id: 'duree_mise_oeuvre', label: 'Durée de mise en œuvre' },
      { id: 'feedback_equipes', label: 'Feedback des équipes' }
    ]

    export default function NewProject() {
      const [projectData, setProjectData] = useState({
        nom_projet: '',
        gu: '',
        geh: '',
        commentaires: '',
        ...Object.fromEntries(criteria.map(c => [c.id, 5]))
      })
      const navigate = useNavigate()

      const handleSubmit = async (e) => {
        e.preventDefault()
        
        const average = criteria.reduce((sum, c) => sum + projectData[c.id], 0) / criteria.length
        
        const { error } = await supabase
          .from('projets')
          .insert([{
            ...projectData,
            date_creation: new Date().toISOString(),
            moyenne_generale: average
          }])
        
        if (!error) {
          navigate('/dashboard')
        }
      }

      return (
        <div className="project-form">
          <h1>Nouveau projet</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom du projet"
              value={projectData.nom_projet}
              onChange={(e) => setProjectData({...projectData, nom_projet: e.target.value})}
            />
            <input
              type="text"
              placeholder="Gestionnaire d'Unité (GU)"
              value={projectData.gu}
              onChange={(e) => setProjectData({...projectData, gu: e.target.value})}
            />
            <input
              type="text"
              placeholder="Gestionnaire d'Équipe Horizontale (GEH)"
              value={projectData.geh}
              onChange={(e) => setProjectData({...projectData, geh: e.target.value})}
            />

            {criteria.map(c => (
              <div key={c.id} className="criterion">
                <label>{c.label}</label>
                <RatingSlider
                  value={projectData[c.id]}
                  onChange={(value) => setProjectData({...projectData, [c.id]: value})}
                />
              </div>
            ))}

            <textarea
              placeholder="Commentaires"
              value={projectData.commentaires}
              onChange={(e) => setProjectData({...projectData, commentaires: e.target.value})}
            />

            <button type="submit">Sauvegarder</button>
          </form>
        </div>
      )
    }
