import React, { useState } from 'react'
import { 
  Menu, X, Code, Zap, BarChart, Globe, Smartphone, Shield,
  ArrowRight, Check, ChevronDown, Copy, Mail, Phone, MapPin,
  TrendingUp, Layers, Database, Users, Clock, Star,
  Workflow, MessageSquare, Send, ExternalLink
} from 'lucide-react'

// ShoppingCart icon component - defined before use
const ShoppingCart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
)

// Currency data
const currencies = {
  USD: { symbol: '$', name: 'USD - Dólar estadounidense', rates: { Starter: 1200, Growth: 2800, Scale: 6500 } },
  COP: { symbol: '$', name: 'COP - Peso colombiano', rates: { Starter: 2900000, Growth: 6900000, Scale: 15900000 } },
  MXN: { symbol: '$', name: 'MXN - Peso mexicano', rates: { Starter: 18000, Growth: 42000, Scale: 98000 } },
  SOL: { symbol: 'S/', name: 'SOL - Sol peruano', rates: { Starter: 2900, Growth: 6900, Scale: 15900 } },
  ARS: { symbol: '$', name: 'ARS - Peso argentino', rates: { Starter: 950000, Growth: 2200000, Scale: 5200000 } }
}

// Add-ons pricing
const addons = {
  USD: { maintenance: 150, seo: 800, automation: 500 },
  COP: { maintenance: 350000, seo: 1900000, automation: 1200000 },
  MXN: { maintenance: 2500, seo: 13000, automation: 8000 },
  SOL: { maintenance: 550, seo: 2900, automation: 1800 },
  ARS: { maintenance: 120000, seo: 650000, automation: 400000 }
}

// Services data
const services = [
  {
    title: 'Desarrollo Web',
    description: 'Sitios web a medida, rápidos y optimizados para conversión.',
    icon: Globe,
    features: ['Diseño responsive', 'SEO integrado', 'Alta velocidad', 'Panel admin']
  },
  {
    title: 'E-commerce',
    description: 'Tiendas online completas con pasarelas de pago.',
    icon: ShoppingCart,
    features: ['Catálogo productos', 'Pagos seguros', 'Inventario', 'Reportes']
  },
  {
    title: 'Web Apps',
    description: 'Aplicaciones web personalizadas para procesos de negocio.',
    icon: Layers,
    features: ['Dashboards', 'CRUD completo', 'APIs', 'Autenticación']
  },
  {
    title: 'Automatizaciones',
    description: 'Optimiza tu negocio con flujos automatizados.',
    icon: Workflow,
    features: ['Integraciones', 'Notificaciones', 'Reportes auto', 'Zapier/n8n']
  },
  {
    title: 'Mantenimiento',
    description: 'Actualizaciones, seguridad y soporte continuo.',
    icon: Shield,
    features: ['Actualizaciones', 'Backups', 'Seguridad', 'Soporte']
  },
  {
    title: 'Consultoría Tech',
    description: 'Asesoría para transformar digitalmente tu negocio.',
    icon: MessageSquare,
    features: ['Auditoría', 'Roadmap', 'Best practices', 'Capacitación']
  }
]

// Automation flows
const automationFlows = [
  {
    id: 1,
    title: 'Lead Management',
    description: 'Captura, califica y nurturea leads automáticamente',
    code: `// Trigger: New form submission
if (lead.source === 'web') {
  await sendSlackNotification(lead);
  await addToCRM(lead);
  await sendWelcomeEmail(lead);
  await scheduleFollowUp(lead, '3 days');
}`
  },
  {
    id: 2,
    title: 'Invoice Automation',
    description: 'Genera facturas y envía recordatorios de pago',
    code: `// Trigger: Payment due date
if (invoice.status === 'pending') {
  const daysOverdue = daysBetween(today, invoice.dueDate);
  if (daysOverdue === 1) {
    await sendReminder(invoice);
  }
  if (daysOverdue === 7) {
    await sendFinalNotice(invoice);
  }
}`
  },
  {
    id: 3,
    title: 'Data Sync',
    description: 'Sincroniza datos entre plataformas automáticamente',
    code: `// Trigger: Scheduled (hourly)
const updates = await fetchCRMChanges();
for (const record of updates) {
  await updateDatabase(record);
  await syncToAnalytics(record);
  await notifyTeam(record);
}`
  }
]

// Process steps
const processSteps = [
  { number: 1, title: 'Descubrimiento', description: 'Analizamos tu negocio, objetivos y requerimientos.', time: '24-48h' },
  { number: 2, title: 'Propuesta', description: 'Te enviamos un plan detallado con alcance y tiempos.', time: '2-3 días' },
  { number: 3, title: 'Desarrollo', description: 'Construimos tu solución con iteraciones semanales.', time: '2-8 semanas' },
  { number: 4, title: 'Lanzamiento', description: 'Desplegamos, capacitamos y darte soporte continuo.', time: '1-2 días' }
]

// FAQ data
const faqs = [
  {
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer: 'Depende del alcance: proyectos Starter takes 2-3 semanas, Growth 1-2 meses, Scale 2-4 meses. Te damos un cronograma detallado al inicio.'
  },
  {
    question: '¿Qué incluye el precio?',
    answer: 'Todo lo necesario: diseño, desarrollo, despliegue, documentación y 30 días de soporte. No hay costos ocultos.'
  },
  {
    question: '¿Puedo modificar el proyecto después?',
    answer: 'Sí, puedes solicitar cambios durante el desarrollo. Después del lanzamiento, oferecemos planes de mantenimiento.'
  },
  {
    question: '¿Qué pasa si no quedo satisfecho?',
    answer: 'Trabajamos con pagos por hito. Solo facturamos cuando apruebas cada etapa. Si no estás conforme, devolvemos el dinero del hito actual.'
  },
  {
    question: '¿Ofrecen soporte post-lanzamiento?',
    answer: 'Sí, temos planes de mantenimiento mensual que incluyen actualizaciones, seguridad y soporte técnico prioritario.'
  }
]

// Cases data
const cases = [
  {
    company: 'TechStore',
    metric: '+180%',
    metricLabel: 'Incremento en ventas',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    testimonial: 'Duplicamos nuestras ventas online en 3 meses. El equipo entendió perfectamente nuestras necesidades.'
  },
  {
    company: 'ConsultoraPro',
    metric: '-60%',
    metricLabel: 'Reducción de tareas manuales',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    testimonial: 'Las automatizaciones nos permitieron enfocarnos en lo que realmente importa: atender clientes.'
  },
  {
    company: 'AgenciaDigital',
    metric: '3x',
    metricLabel: 'Más proyectos delivery',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    testimonial: 'Nuestra productividad se disparó. El desarrollo es rápido y la calidad es consistente.'
  }
]

// Benefits data
const benefits = [
  {
    title: 'Equipo Experto',
    description: 'Profesionales con años de experiencia en desarrollo y automatización.',
    icon: Users
  },
  {
    title: 'Entrega Rápida',
    description: 'Metodología ágil para entregar valor en tiempo récord.',
    icon: Clock
  },
  {
    title: 'Resultados Medibles',
    description: 'Te acompañamos post-lanzamiento para optimizar resultados.',
    icon: TrendingUp
  }
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Automatizaciones', href: '#automatizaciones' },
    { label: 'Casos', href: '#casos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-near-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-sky-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-gray-50 font-semibold text-lg">ApreciaMedia</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-sky-400 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Agenda tu llamada
              <ArrowRight size={16} />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-near-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-sky-400 text-white rounded-lg text-sm font-medium"
            >
              Agenda tu llamada
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-near-black">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Glow effects */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-sky-400/20 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-sky-400 animate-pulse" />
              <span className="text-gray-300 text-sm">🚀 Transformamos ideas en realidad</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 leading-tight">
              Nosotros hacemos tus ideas un{' '}
              <span className="gradient-text">hecho</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-400 max-w-xl">
              Desarrollo web profesional y automatizaciones que impulsan tu negocio. 
              Creamos soluciones a medida para Pymes, Agencias y Emprendedores.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-sky-400 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
              >
                Agenda tu llamada gratis (15 min)
                <ArrowRight size={18} />
              </a>
              <a
                href="#precios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-purple-500/50 hover:text-white transition-colors"
              >
                Cotiza en 24-48h
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-sky-400 border-2 border-near-black flex items-center justify-center text-white text-sm font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">+50 proyectos completados</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Equipo de desarrollo trabajando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 to-transparent" />
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 p-4 bg-near-black/90 border border-gray-800 rounded-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-sky-400 flex items-center justify-center">
                  <Code size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-50 font-medium">Código Limpio</p>
                  <p className="text-gray-400 text-sm">Best practices</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 p-4 bg-near-black/90 border border-gray-800 rounded-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-sky-400 flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-50 font-medium">Entrega Rápida</p>
                  <p className="text-gray-400 text-sm">En tiempo récord</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Benefits Section
const Benefits = () => {
  return (
    <section className="py-20 bg-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            ¿Por qué trabajar con nosotros?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinamos experiencia técnica con conocimiento de negocio para entregar resultados reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple transition-col-500/30ors">
              <div className="relative w-14 h-14 mb-4">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-sky-400 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                  <benefit.icon size={28} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-50 mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Section
const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones completas de desarrollo y automatización para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-all hover:-translate-y-1"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-sky-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-sky-400 opacity-20" />
                <div className="relative w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                  <service.icon size={24} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-50 mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Check size={14} className="text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Automatizaciones Section
const Automatizaciones = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(automationFlows[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="automatizaciones" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Automatizaciones que{' '}
            <span className="gradient-text">transforman</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elimina tareas repetitivas y enfócate en hacer crecer tu negocio. 
            Nuestras automatizaciones conectan tus herramientas favorites.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="space-y-4">
            {automationFlows.map((flow, index) => (
              <button
                key={flow.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-sky-400/20 border border-purple-500/30'
                    : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-purple-500 to-sky-400'
                      : 'bg-gray-800'
                  }`}>
                    <Workflow size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-50">{flow.title}</h3>
                    <p className="text-gray-400 text-sm">{flow.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="relative">
            <div className="absolute -top-3 -right-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-lg text-gray-300 text-sm hover:bg-gray-700 transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 font-mono text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-500 text-xs ml-2">automation.js</span>
              </div>
              <pre className="text-gray-300">
                <code>{automationFlows[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Casos Section
const Casos = () => {
  return (
    <section id="casos" className="py-20 bg-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Resultados que{' '}
            <span className="gradient-text">hablan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empresas que confiaron en nosotros ytransformaron su negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-sky-400 text-white text-sm font-medium">
                    {caseStudy.company}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-4xl font-bold gradient-text">{caseStudy.metric}</p>
                  <p className="text-gray-400 text-sm">{caseStudy.metricLabel}</p>
                </div>
                <p className="text-gray-300 italic">"{caseStudy.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Proceso Section
const Proceso = () => {
  return (
    <section id="proceso" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Nuestro Proceso
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Metodología clara y transparente para que siempre sepas en qué etapa estamos.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 opacity-30" />
              )}
              
              <div className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 text-center">
                {/* Step number */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-sky-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-50 mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs">
                  <Clock size={12} />
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Precios Section
const Precios = () => {
  const [currency, setCurrency] = useState('USD')
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfecto para proyectos pequeños',
      popular: false,
      features: [
        'Landing page o sitio básico',
        'Hasta 5 secciones',
        'Diseño responsive',
        'Formulario de contacto',
        'Optimización SEO básica',
        '1 mes de soporte'
      ]
    },
    {
      name: 'Growth',
      description: 'Ideal para crecer tu negocio',
      popular: true,
      features: [
        'Sitio web completo o e-commerce',
        'Hasta 15 páginas',
        'Diseño personalizado',
        'Integraciones (CRM, email, etc.)',
        'Panel de administración',
        'Analítica avanzada',
        '3 meses de soporte'
      ]
    },
    {
      name: 'Scale',
      description: 'Para proyectos grandes',
      popular: false,
      features: [
        'Aplicación web a medida',
        'Páginas ilimitadas',
        'Desarrollo full-stack',
        'APIs personalizadas',
        'Integraciones complejas',
        'Automatizaciones',
        '6 meses de soporte'
      ]
    }
  ]

  const addonList = [
    { name: 'Mantenimiento mensual', icon: Shield },
    { name: 'SEO + Analítica avanzada', icon: BarChart },
    { name: 'Automatizaciones adicionales', icon: Workflow }
  ]

  return (
    <section id="precios" className="py-20 bg-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Planes y Precios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Inversiones claras. Elige el plan que mejor se adapte a tus necesidades.
          </p>

          {/* Currency Selector */}
          <div className="relative inline-block">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-500/50 transition-colors"
            >
              {currencies[currency].symbol} {currency}
              <ChevronDown size={16} className={`transition-transform ${showCurrencyDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showCurrencyDropdown && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 overflow-hidden">
                {Object.entries(currencies).map(([code, data]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setCurrency(code)
                      setShowCurrencyDropdown(false)
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors ${
                      currency === code ? 'bg-purple-500/20 text-white' : 'text-gray-300'
                    }`}
                  >
                    <span className="font-medium">{data.symbol} {code}</span>
                    <span className="text-gray-500 text-sm ml-2">- {data.name.split('- ')[1]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const price = currencies[currency].rates[plan.name]
            const formattedPrice = currency === 'USD' || currency === 'MXN' 
              ? `${currencies[currency].symbol}${price.toLocaleString()}`
              : currency === 'SOL'
              ? `${currencies[currency].symbol}${price.toLocaleString()}`
              : `${currencies[currency].symbol} ${price.toLocaleString()}`

            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  plan.popular
                    ? 'bg-gray-900/80 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-gray-900/50 border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-sky-400 text-white text-sm font-medium">
                      Más popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-50 mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">desde</span>
                  <div className="text-5xl font-bold text-gray-50 mt-1">{formattedPrice}</div>
                  {currency === 'ARS' && (
                    <p className="text-gray-500 text-xs mt-2">* Puede ajustarse según inflación</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <Check size={16} className="text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`block w-full py-3 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-sky-400 text-white hover:opacity-90'
                      : 'border border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-white'
                  }`}
                >
                  Elegir {plan.name}
                </a>
              </div>
            )
          })}
        </div>

        {/* Add-ons */}
        <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
          <h3 className="text-xl font-semibold text-gray-50 mb-6 text-center">Add-ons opcionales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addonList.map((addon, index) => {
              const price = addons[currency][index === 0 ? 'maintenance' : index === 1 ? 'seo' : 'automation']
              const formattedPrice = currency === 'USD' || currency === 'MXN'
                ? `${currencies[currency].symbol}${price.toLocaleString()}`
                : currency === 'SOL'
                ? `${currencies[currency].symbol}${price.toLocaleString()}`
                : `${currencies[currency].symbol} ${price.toLocaleString()}`

              return (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <addon.icon size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-50 font-medium">{addon.name}</p>
                    <p className="text-gray-400 text-sm">{formattedPrice}/mes</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            * Precios orientativos por mercado. Propuesta final según alcance.
          </p>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gray-900/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-400">
            Resolvemos tus dudas sobre nuestros servicios.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl bg-gray-900/50 border border-gray-800 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-gray-50">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle form submission
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.')
  }

  return (
    <section id="contacto" className="py-20 bg-near-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4">
              Hablemos de tu proyecto
            </h2>
            <p className="text-gray-400 mb-8">
              Cuéntanos sobre tu negocio y te enviaremos una propuesta personalizada en 24-48h.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-sky-400/20 flex items-center justify-center">
                  <Mail size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-50 font-medium">Email</p>
                  <a href="mailto:hola@apreciamedia.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    hola@apreciamedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-sky-400/20 flex items-center justify-center">
                  <Phone size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-50 font-medium">WhatsApp</p>
                  <a href="https://wa.me/1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-sky-400/20 flex items-center justify-center">
                  <MapPin size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-50 font-medium">Ubicación</p>
                  <p className="text-gray-400">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="juan@tuempresa.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Empresa</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Tu Empresa"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Servicio</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  >
                    <option value="">Selecciona...</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Web App</option>
                    <option value="automation">Automatizaciones</option>
                    <option value="maintenance">Mantenimiento</option>
                    <option value="consulting">Consultoría</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Mensaje *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-sky-400 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Enviar y agendar
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  const footerLinks = {
    Servicios: ['Desarrollo Web', 'E-commerce', 'Automatizaciones', 'Mantenimiento'],
    Empresa: ['Sobre nosotros', 'Casos de éxito', 'Blog', 'Contacto'],
    Legal: ['Términos', 'Privacidad', 'Cookies']
  }

  return (
    <footer className="py-12 bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-sky-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-gray-50 font-semibold text-lg">ApreciaMedia</span>
            </a>
            <p className="text-gray-400 text-sm">
              Transformamos ideas en soluciones digitales que hacen crecer tu negocio.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-gray-50 font-medium mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-purple-400 text-sm transition-colors relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 group-hover:w-full transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 ApreciaMedia. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-near-black">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Automatizaciones />
        <Casos />
        <Proceso />
        <Precios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
