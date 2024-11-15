'use client'

import { useState, useEffect } from 'react'

interface Motoboy {
  id: string;
  nome: string;
  telefone: string;
}

export default function MotoboyList() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [motoboys, setMotoboys] = useState<Motoboy[]>([])

  useEffect(() => {
    const fetchMotoboys = async () => {
      // Aqui você faria a chamada para a API para buscar os motoboys
      // Por exemplo:
      // const response = await fetch('/api/motoboys')
      // const data = await response.json()
      // setMotoboys(data)
    }

    fetchMotoboys()
  }, [])

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Motoboys</h2>
      <ul>
        {motoboys.map((motoboy) => (
          <li key={motoboy.id} className="mb-4 p-4 border rounded">
            <p>Nome: {motoboy.nome}</p>
            <p>Telefone: {motoboy.telefone}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}