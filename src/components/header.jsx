import React from 'react'

function header() {
  return (
      <header id="header" style={{ height: '73px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gainsboro', marginBottom: '44px' }}>
      <input type="text" placeholder="Search type of keywords" style={{ padding: '8px', width: '250px' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'darkgray' }}></div>
        <div>
          <h3 style={{ fontSize: '14px', margin: 0 }}>Laurice</h3>
          <p style={{ fontSize: '12px', color: 'gray', margin: 0 }}>@laurice22</p>
        </div>
      </div>
    </header>
  
  )
}

export default header