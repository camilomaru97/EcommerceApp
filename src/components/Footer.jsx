import { Link } from "react-router-dom"

export const Footer = () => {

    const textLinks = [
        'Configuración de las cookies',
        'Nuestros Datos',
        'Términos y Condiciones',
        'Política de Privacidad',
        'Términos #YESadidas',
        'Seleccionar País',
        'Aviso de Privacidad',
        'SIC'
    ]

  return (
    <main className="footer_container">
        {
            textLinks.map( text => (
                 <Link 
                    key={text}
                    to='/home' 
                > 
                    {text} 
                </Link>
            ))
        }
        <p>2023 BR.F, Colombia Ltda.</p>
    </main>
  )
}