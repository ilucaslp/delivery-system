'use client'

import { useState, useEffect } from 'react'

interface Pedido {
  id: string;
  numero: string;
  valor: number;
  formaPagamento: string;
  taxaEntrega: number;
  status: string;
  motoboyId: string;
}

interface PedidoListProps {
  motoboyId?: string;
}

export default function PedidoList({ motoboyId }: PedidoListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pedidos, setPedidos] = useState<Pedido[]>([])

  useEffect(() => {
    const fetchPedidos = async () => {
      // Aqui você faria a chamada para a API para buscar os pedidos
      // Por exemplo:
      // const response = await fetch(motoboyId ? `/api/pedidos?motoboyId=${motoboyId}` : '/api/pedidos')
      // const data = await response.json()
      // setPedidos(data)
    }

    fetchPedidos()
  }, [motoboyId])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Pedidos</h2>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id} className="mb-4 p-4 border rounded">
            <p>Número: {pedido.numero}</p>
            <p>Valor: R$ {pedido.valor.toFixed(2)}</p>
            <p>Forma de Pagamento: {pedido.formaPagamento}</p>
            <p>Taxa de Entrega: R$ {pedido.taxaEntrega.toFixed(2)}</p>
            <p>Status: {pedido.status}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}