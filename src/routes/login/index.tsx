import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h3>Inicia Sesion</h3>
        </div>
    )
}