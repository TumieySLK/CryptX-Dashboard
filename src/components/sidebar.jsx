import React from 'react'

function sidebar() {
  return (
    <aside id="sidebar" style={{ width: '262px', background: 'whitesmoke', padding: '32px', boxSizing: 'border-box' }}>
      <h1 style={{ fontSize: '22px', margin: 0, marginBottom: '50px' }}>CryptX</h1>

      <p style={{ color: 'slateblue', fontWeight: 'bold', margin: 0, padding: '22px 0' }}>Overview</p>
      <p style={{ color: 'gray', margin: 0, padding: '22px 0' }}>Chart</p>
      <p style={{ color: 'gray', margin: 0, padding: '22px 0' }}>Transactions</p>
      <p style={{ color: 'gray', margin: 0, padding: '22px 0' }}>Wallet</p>
      <p style={{ color: 'gray', margin: 0, padding: '22px 0' }}>Mail Box</p>
      <p style={{ color: 'gray', margin: 0, padding: '22px 0' }}>Setting</p>
      <p style={{ color: 'gray', margin: 0, padding: '22px 0' }}>Logout</p>
    </aside>
  
  )
}

export default sidebar