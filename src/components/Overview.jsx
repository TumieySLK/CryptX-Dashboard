import React from 'react'

function Overview() {
  return (
  
    <section id="overview" style={{ width: '534px', display: 'grid', gridTemplateColumns: '252px 252px', gap: '32px 30px' }}>
      <div style={{ width: '252px', height: '205px', padding: '24px', boxSizing: 'border-box', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px gainsboro' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'orange' }}></div>
          <p style={{ color: 'limegreen', margin: 0 }}>+0.25%</p>
        </div>
        <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>$40,291</h3>
        <p style={{ color: 'gray', margin: 0 }}>Bitcoin - BTC</p>
      </div>

      <div style={{ width: '252px', height: '205px', padding: '24px', boxSizing: 'border-box', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px gainsboro' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'slateblue' }}></div>
          <p style={{ color: 'limegreen', margin: 0 }}>+0.25%</p>
        </div>
        <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>$18,291</h3>
        <p style={{ color: 'gray', margin: 0 }}>Ethereum - ETH</p>
      </div>

      <div style={{ width: '252px', height: '205px', padding: '24px', boxSizing: 'border-box', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px gainsboro' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'royalblue' }}></div>
          <p style={{ color: 'limegreen', margin: 0 }}>+0.25%</p>
        </div>
        <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>$8,291</h3>
        <p style={{ color: 'gray', margin: 0 }}>Litecoin - ITL</p>
      </div>

      <div style={{ width: '252px', height: '205px', padding: '24px', boxSizing: 'border-box', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px gainsboro' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'mediumseagreen' }}></div>
          <p style={{ color: 'coral', margin: 0 }}>-2.05%</p>
        </div>
        <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>$3,291</h3>
        <p style={{ color: 'gray', margin: 0 }}>Cardano - ADA</p>
      </div>
    </section>
 
  )
}

export default Overview