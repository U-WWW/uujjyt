import React, { useEffect, useState } from 'react'
import { ArrowRight, Code, PaintBrush, Rocket } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Home.css'

export default function Home() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(6)

        if (data) setProjects(data)
    }

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section text-center">
                <div className="container animate-fade-in">
                    <h1 className="hero-title">
                        We Craft <span className="text-primary">Digital Experiences</span>
                    </h1>
                    <p className="hero-subtitle text-muted">
                        Transforming ideas into modern, high-performance websites and applications.
                        Specializing in sleek designs with a touch of the future.
                    </p>
                    <div className="hero-actions flex justify-center gap-md">
                        <a href="#projects" className="btn btn-primary">View Our Work</a>
                        <Link to="/contact" className="btn btn-outline">Start a Project</Link>
                    </div>
                </div>
            </section>

            {/* Services/Features */}
            <section className="services-section container">
                <div className="grid-3">
                    <div className="service-card">
                        <PaintBrush size={48} className="text-primary" />
                        <h3>UI/UX Design</h3>
                        <p className="text-muted">Intuitive and aesthetically pleasing interfaces that users love.</p>
                    </div>
                    <div className="service-card">
                        <Code size={48} className="text-primary" />
                        <h3>Web Development</h3>
                        <p className="text-muted">Fast, responsive, and scalable code using the latest tech stacks.</p>
                    </div>
                    <div className="service-card">
                        <Rocket size={48} className="text-primary" />
                        <h3>Digital Strategy</h3>
                        <p className="text-muted">Planning and execution to grow your brand online.</p>
                    </div>
                </div>
            </section>

            {/* Recent Projects Preview */}
            <section id="projects" className="projects-section container">
                <div className="section-header flex justify-between">
                    <h2>Recent Projects</h2>
                    <Link to="/contact" className="text-primary flex gap-sm">
                        Get in touch <ArrowRight />
                    </Link>
                </div>

                {projects.length === 0 ? (
                    <div className="text-center text-muted" style={{ padding: '4rem 0' }}>
                        <p>Loading projects or no projects found...</p>
                        <small>Make sure to add projects in the Admin setup.</small>
                    </div>
                ) : (
                    <div className="projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="project-card">
                                <img src={project.image_url || 'https://via.placeholder.com/400x300/111/fff?text=No+Image'} alt={project.title} />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">Visit Site</a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}
