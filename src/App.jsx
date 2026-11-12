import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './components/Overview'
import Chart from './components/Chart'
import Market from './components/Market'
import Transactions from './components/Transactions'

function App() {
  return (
   <div style={{ display: 'flex', width: '1440px', minHeight: '100vh', fontFamily: 'sans-serif', fontSize: '12px'}}>
      <Sidebar />

      <main style={{ flex: 1, padding: '32px 40px', boxSizing: 'border-box' }}>
        <Header />

        <div style={{ display: 'flex', gap: '30px', marginBottom: '32px' }}>
          <Overview />
          <Chart />
        </div>

        <div style={{ display: 'flex', gap: '52px' }}>
          <Market />
          <Transactions />
        </div>
      </main>
    </div>
  
  )
}

export default App