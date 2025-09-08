export interface Project {
    id: string
    title: string
    description: string
    technologies: string[]
    category: 'web' | 'mobile' | 'desktop' | 'api'
    status: 'completed' | 'in-progress' | 'archived'
    githubUrl?: string
    liveUrl?: string
    imageUrl: string
    screenshots: string[]
    startDate: string
    endDate?: string
    challenges: string[]
    learnings: string[]
}

export interface Skill {
    name: string
    level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
    category: 'frontend' | 'backend' | 'database' | 'tools' | 'others'
    yearsOfExperience: number
}