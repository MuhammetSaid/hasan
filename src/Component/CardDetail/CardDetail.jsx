import React from 'react'

export default function CardDetail(){
    const [content, setContent] = React.useState('')

    React.useEffect(() => {
        function updateFromHash(){
            const hash = window.location.hash || ''
            const query = hash.split('?')[1] || ''
            const params = new URLSearchParams(query)
            const raw = params.get('content') || ''
            try{
                setContent(decodeURIComponent(raw))
            } catch {
                setContent(raw)
            }
        }
        updateFromHash()
        window.addEventListener('hashchange', updateFromHash)
        return () => window.removeEventListener('hashchange', updateFromHash)
    }, [])

    // share only the main page URL (no hash/content)
    const pageUrl = window.location.origin + window.location.pathname
    const encodedText = encodeURIComponent(content || '')
    const encodedUrl = encodeURIComponent(pageUrl)

    function openShare(url){
        window.open(url, '_blank')
    }

    return (
        <div style={{minHeight: '100vh', background: '#f3f4f6', padding: 24, display: 'flex', flexDirection: 'column'}}>
            <div style={{maxWidth: 1000, margin: '0 auto', flex: '1 0 auto'}}>
                <button onClick={() => { window.location.hash = '' }} style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#0b5',
                    fontSize: 16,
                    cursor: 'pointer',
                    marginBottom: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                }}>⬅︎ Geri</button>

                <div style={{background: 'white', borderRadius: 10, boxShadow: '0 6px 18px rgba(0,0,0,0.08)', padding: 28}}>
                    <h2 style={{marginTop: 0, marginBottom: 12, textAlign: 'left'}}>{content ? 'Detay' : 'İçerik yok'}</h2>
                    <div style={{color: '#333', lineHeight: 1.6, fontSize: 18, whiteSpace: 'pre-wrap', textAlign: 'left'}}>
                        {content || 'Seçili bir kart yok.'}
                    </div>

                    <div style={{marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap'}}>
                        <button onClick={() => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`)} style={shareButtonStyle}>Facebook</button>
                        <button onClick={() => openShare(`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`)} style={shareButtonStyle}>WhatsApp</button>
                        <button onClick={() => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)} style={shareButtonStyle}>LinkedIn</button>
                        <button onClick={() => openShare(`sms:?&body=${encodedText}%20${encodedUrl}`)} style={shareButtonStyle}>SMS</button>
                    </div>
                </div>
            </div>

            <footer style={{background: '#002724', padding: '30px 0', marginTop: 24, flexShrink: 0}}>
                <div style={{maxWidth: "100%", margin: '0 auto', color: 'white', textAlign: 'center'}}>
                    <h3 style={{margin: 0, marginBottom: 12}}>أرحب بتواصلكم معي عبر البريد الإلكتروني ورقم الموبايل</h3>
                    <p style={{margin: 0}}>dr.Ahmed88m@gmail.com   +963945940094</p>
                    <h3 style={{marginTop: 24}}>د.أحمد منصور الأقرع</h3>
                </div>
            </footer>
        </div>
    )
}

const shareButtonStyle = {
    background: '#0077b5',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: 6,
    cursor: 'pointer'
}
