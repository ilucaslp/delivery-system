'use client'

import { useState, useEffect } from 'react'

interface RelatorioItem {
  motoboyId: string;
  motoboyNome: string;
  totalPedidos: number;
  totalTaxas: number;
}

export default function RelatorioComponent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [relatorio, setRelatorio] = useState<RelatorioItem[]>([])
  const [dataRelatorio, setDataRelatorio] = useState<string>(new Date().toISOString().split('T')[0])

  useEffect(() => {
    const fetchRelatorio = async () => {
      // Aqui você faria a chamada para a API para buscar o relatório
      // Por exemplo:
      // const response = await fetch(`/api/relatorio?data=${dataRelatorio}`)
      // const data = await response.json()
      // setRelatorio(data)
    }

    fetchRelatorio()
  }, [dataRelatorio])

  const handleFinalizarDia = async () => {
    // Aqui você faria a chamada para a API para finalizar o dia
    // Por exemplo:
    // await fetch('/api/finalizar-dia', { method: 'POST' })
    // Depois, atualize o relatório
    // const response = await fetch(`/api/relatorio?data=${dataRelatorio}`)
    // const data = await response.json()
    // setRelatorio(data)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Relatório de Entregas</h2>
      <input
        type="date"
        value={dataRelatorio}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRelatorio(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleFinalizarDia}
        className="mb-4 ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Finalizar Dia
      </button>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Motoboy</th>
            <th className="text-left">Total de Pedidos</th>
            <th className="text-left">Total de Taxas</th>
          </tr>
        </thead>
        <tbody>
          {relatorio.map((item) => (
            <tr key={item.motoboyId}>
              <td>{item.motoboyNome}</td>
              <td>{item.totalPedidos}</td>
              <td>R$ {item.totalTaxas.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}