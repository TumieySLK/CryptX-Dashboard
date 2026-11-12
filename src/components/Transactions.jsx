import React from 'react'

function Transactions() {
  return (
    
    <section id="transactions" style={{ width: '320px', height: '352px' }}>
      <h2 style={{ fontSize: '20px', margin: 0, marginBottom: '12px' }}>Transactions</h2>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Ethereum</h3>
          <p style={{ color: 'limegreen', margin: 0 }}>Received</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0 }}>$24,102</h3>
          <p style={{ color: 'gray', margin: 0 }}>Today, 19:30</p>
        </div>
      </div>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Bitcoin</h3>
          <p style={{ color: 'coral', margin: 0 }}>Buy</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0 }}>$4,157</h3>
          <p style={{ color: 'gray', margin: 0 }}>Today, 14:32</p>
        </div>
      </div>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Bitcoin</h3>
          <p style={{ color: 'coral', margin: 0 }}>Buy</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0 }}>$64,784</h3>
          <p style={{ color: 'gray', margin: 0 }}>Today, 13:50</p>
        </div>
      </div>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Litecoin</h3>
          <p style={{ color: 'coral', margin: 0 }}>Buy</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0 }}>$14,265</h3>
          <p style={{ color: 'gray', margin: 0 }}>Today, 09:38</p>
        </div>
      </div>
    </section>
 
  )
}

export default Transactions