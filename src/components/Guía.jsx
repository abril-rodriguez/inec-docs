import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/colaboradores',
    name: 'Colaboradores',
    description: 'Aprenda a crear, editar o eliminar colaboradores del sitio.',
  },
  {
    href: '/proyectos',
    name: 'Proyectos',
    description: 'Descubra cómo utilizar el componente clave del sitio.',
  },
  {
    href: '/gastos',
    name: 'Gastos',
    description: 'Aprenda sobre la gestión y registro de gastos en el sitio.',
  },
  {
    href: '/tareas',
    name: 'Tareas',
    description: 'Descubra cómo gestionar y completar tareas en el sitio.',
  },
  {
    href: '/informes',
    name: 'Informes',
    description:
      'Descubra cómo generar y analizar informes de tiempos del sitio.',
  },
  {
    href: '/utilidades',
    name: 'Utilidades',
    description: 'Aprenda a gestionar y optimizar las utilidades del sitio.',
  },
  {
    href: '/equipo',
    name: 'Equipo',
    description: 'Explora cómo gestionar equipos y colaboradores en el sitio.',
  }
]

export function Guía() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guía
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Leer más
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
