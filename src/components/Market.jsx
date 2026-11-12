import React from 'react'

function Market() {
  return (
  
    <section id="live-market" style={{ width: '700px' }}>
      <h2 style={{ fontSize: '20px', margin: 0, marginBottom: '12px' }}>Live Market</h2>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Ethereum</h3>
          <p style={{ color: 'gray', margin: 0 }}>ETH / USDT</p>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Change</p>
          <h3 style={{ color: 'limegreen', margin: 0 }}>+14.02%</h3>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Price</p>
          <h3 style={{ margin: 0 }}>39,786 USD</h3>
        </div>
      </div>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Bitcoin</h3>
          <p style={{ color: 'gray', margin: 0 }}>ETH / USDT</p>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Change</p>
          <h3 style={{ color: 'limegreen', margin: 0 }}>+4.02%</h3>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Price</p>
          <h3 style={{ margin: 0 }}>21,786 USD</h3>
        </div>
      </div>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Litecoin</h3>
          <p style={{ color: 'gray', margin: 0 }}>ITC / USDT</p>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Change</p>
          <h3 style={{ color: 'coral', margin: 0 }}>-4.02%</h3>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Price</p>
          <h3 style={{ margin: 0 }}>9,786 USD</h3>
        </div>
      </div>

      <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ margin: 0 }}>Cardano</h3>
          <p style={{ color: 'gray', margin: 0 }}>ADA / USDT</p>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Change</p>
          <h3 style={{ color: 'limegreen', margin: 0 }}>+0.02%</h3>
        </div>
        <div>
          <p style={{ color: 'gray', margin: 0 }}>Price</p>
          <h3 style={{ margin: 0 }}>4,786 USD</h3>
        </div>
      </div>
    </section>

  )
}

export default Market