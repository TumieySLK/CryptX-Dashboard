import React from 'react'

function Chart() {
  return (

    <section id="chart" style={{ width: '534px', height: '442px', padding: '32px', boxSizing: 'border-box', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px gainsboro' }}>
      <h2 style={{ fontSize: '20px', margin: 0, marginBottom: '20px' }}>BTC Prices</h2>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '310px' }}>
        <div>
          <div style={{ width: '30px', height: '190px', background: 'lavender' }}></div>
          <p>Jan</p>
        </div>

        <div>
          <div style={{ width: '30px', height: '250px', background: 'lavender' }}></div>
          <p>Mar</p>
        </div>

        <div>
          <p style={{ background: 'slateblue', color: 'white', padding: '4px 8px', fontSize: '12px' }}>$25,240</p>
          <div style={{ width: '30px', height: '200px', background: 'slateblue' }}></div>
          <p>May</p>
        </div>

        <div>
          <div style={{ width: '30px', height: '220px', background: 'lavender' }}></div>
          <p>Jul</p>
        </div>

        <div>
          <div style={{ width: '30px', height: '140px', background: 'lavender' }}></div>
          <p>Sep</p>
        </div>

        <div>
          <div style={{ width: '30px', height: '260px', background: 'lavender' }}></div>
          <p>Nov</p>
        </div>
      </div>
    </section>
  
  )
}

export default Chart