import React, { useEffect, useState } from 'react'
import { Envelope, MapPin, Phone } from 'phosphor-react'
import { supabase } from '../lib/supabase'

export default function Contact() {
    const [settings, setSettings] = useState(null)

    useEffect(() => {
        fetchSettings()
    }, [])

    async function fetchSettings() {
        const { data } = await supabase.from('site_settings').select('*').single()
        if (data) setSettings(data)
    }

    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <h1 className="text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in Touch</h1>
            <p className="text-center text-muted" style={{ marginBottom: '4rem' }}>
                Ready to start your next project? We are here to help.
            </p>

            <div className="flex justify-center flex-col gap-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="card flex gap-md">
                    <Envelope size={32} className="text-primary" />
                    <div>
                        <h3>Email Us</h3>
                        <p className="text-muted">{settings?.email || 'Loading...'}</p>
                    </div>
                </div>

                <div className="card flex gap-md">
                    <Phone size={32} className="text-primary" />
                    <div>
                        <h3>Call Us</h3>
                        <p className="text-muted">{settings?.phone || 'Loading...'}</p>
                    </div>
                </div>

                <div className="card flex gap-md">
                    <MapPin size={32} className="text-primary" />
                    <div>
                        <h3>Visit Us</h3>
                        <p className="text-muted">{settings?.address || 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
