import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/components/App'

const data = { icon: null }

it('renders the component', () => {
  const div = document.createElement('div')

  ReactDOM.render(<App data={data} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
