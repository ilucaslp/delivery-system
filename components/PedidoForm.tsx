'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Motoboy {
  id: string;
  nome: string;
}

interface PedidoFormProps {
  motoboys: Motoboy[];
}

export default function PedidoForm({ motoboys }: PedidoFormProps) {
  const [numero, setNumero] = useState<string>('')
  const [valor, setValor] = useState<string>('')
  const [formaPagamento, setFormaPagamento] = useState<string>('')
  const [taxaEntrega, setTaxaEntrega] = useState<string>('')
  const [motoboyId, setMotoboyId] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui você faria a chamada para a API para criar o pedido
    // Por exemplo:
    // await fetch('/api/pedidos', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ numero, valor, formaPagamento, taxaEntrega, motoboyId })
    // })
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="numero" className="block">Número do Pedido</label>
        <input
          type="text"
          id="numero"
          value={numero}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumero(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="valor" className="block">Valor</label>
        <input
          type="number"
          id="valor"
          value={valor}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValor(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="formaPagamento" className="block">Forma de Pagamento</label>
        <select
          id="formaPagamento"
          value={formaPagamento}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormaPagamento(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="">Selecione...</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao">Cartão</option>
          <option value="pix">PIX</option>
        </select>
      </div>
      <div>
        <label htmlFor="taxaEntrega" className="block">Taxa de Entrega</label>
        <input
          type="number"
          id="taxaEntrega"
          value={taxaEntrega}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaxaEntrega(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="motoboyId" className="block">Motoboy</label>
        <select
          id="motoboyId"
          value={motoboyId}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMotoboyId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="">Selecione...</option>
          {motoboys.map((motoboy) => (
            <option key={motoboy.id} value={motoboy.id}>{motoboy.nome}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Criar Pedido
      </button>
    </form>
  )
}