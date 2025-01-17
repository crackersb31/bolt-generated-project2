import { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { supabase } from '../lib/supabaseClient'
    import bcrypt from 'bcryptjs'

    export default function Login() {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const navigate = useNavigate()

      const handleLogin = async (e) => {
        e.preventDefault()
        
        const hashedPassword = await bcrypt.hash('Hso31%', 10)
        const isValid = await bcrypt.compare(password, hashedPassword)
        
        if (username === 'Productible' && isValid) {
          navigate('/dashboard')
        } else {
          setError('Identifiants incorrects')
        }
      }

      return (
        <div className="login-container">
          <h1>Connexion</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Code utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Se connecter</button>
          </form>
        </div>
      )
    }
