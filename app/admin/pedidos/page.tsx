import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import PedidoForm from "@/components/PedidoForm"
import PedidoList from "@/components/PedidoList"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Session } from "next-auth"

async function getMotoboys() {
  // This is a placeholder for the actual API call
  // In a real application, you would fetch this data from your database or API
  return [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
  ]
}

export default async function PedidosPage() {
  const session = (await getServerSession(authOptions)) as Session | null

  if (!session || session.user.role !== 'admin') {
    redirect('/login')
  }

  const motoboys = await getMotoboys()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gerenciar Pedidos</h1>
      <PedidoForm motoboys={motoboys} />
      <PedidoList />
    </div>
  )
}