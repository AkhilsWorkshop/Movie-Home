import logo from "../assets/logo.png"

const Home = () => {

    document.title = "Movie Home"

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif'
        }}>
            <a href="/" style={{ marginBottom: '2rem' }}>
                <img src={logo} alt="Movie DB" style={{ height: '4rem' }} />
            </a>
            <div style={{
                textAlign: 'center',
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                boxShadow: '0 8px 8px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxWidth: '600px',
                animation: 'fadeIn 1s ease-in-out'
            }}>
                <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    This app has been upgraded and merged with <a href="https://recoverse.space" style={{
                        color: '#00d4aa',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }} onMouseEnter={(e) => e.target.style.color = '#00f5d4'} onMouseLeave={(e) => e.target.style.color = '#00d4aa'}>Recoverse</a>
                </h1>
                <p style={{
                    fontSize: '1rem',
                    color: '#b0b0b0',
                    lineHeight: '1.6'
                }}>
                    Please visit it to use the new features and improvements.
                </p>
            </div>
           
        </div>
    )
}

export default Home
