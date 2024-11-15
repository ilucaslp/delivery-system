'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function MotoboyForm() {
  const [nome, setNome] = useState<string>('')
  const [telefone, setTelefone] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui você faria a chamada para a API para criar o motoboy
    // Por exemplo:
    // await fetch('/api/motoboys', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ nome, telefone })
    // })
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="telefone" className="block">Telefone</label>
        <input
          type="tel"
          id="telefone"
          value={telefone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Cadastrar Motoboy
      </button>
    </form>
  )
}