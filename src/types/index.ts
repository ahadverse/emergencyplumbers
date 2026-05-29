export interface StatItem { num: string; label: string; }
export interface ServiceCard { href: string; imageUrl: string; imageAlt: string; tag: string; title: string; description: string; }
export interface ServiceItem { icon: string; title: string; description: string; ctaText?: string; ctaHref?: string; }
export interface ReviewItem { stars?: number; text: string; author: string; location: string; avatarUrl?: string; }
export interface WhyFeature { icon: string; title: string; description: string; }
export interface WhyCheckItem { title: string; description: string; }
export interface UrgencyItem { icon: string; title: string; description: string; highlight?: string; }
export interface FaqItem { question: string; answer: string; }
export interface StepItem { icon: string; title: string; description: string; }
export interface ProcessStep { num: string; title: string; description: string; }
export interface TeamMember { imageUrl: string; name: string; role: string; }
export interface ProjectItem { imageUrl: string; imageAlt: string; title: string; location: string; }
export interface NavService { href: string; label: string; sub: string; imageUrl: string; }
