import React from 'react'
import './App.css'
import HobbyList from './components/hobbies/HobbyList'
import Guarantee from './components/Guarantee/'
import Counter from './components/counter/Counter'

const info = [
  {
    img: './chat.png',
    title: 'Online Support 24/7',
    description:
      'We are always with you. Whenever you need assistance you come and check out our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu.',
  },
  {
    img: './coin.png',
    title: '%100 Money back',
    description:
      "If you didn't like what you get, without any reason you can return the good. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu.",
  },
  {
    img: './f-delivery.png',
    title: 'Free Shipping',
    description:
      'If you buy it you will get free of charge. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra tincidunt mattis. Fusce eu finibus sapien. Nunc ornare lobortis finibus. Praesent tristique volutpat finibus. Vestibulum ac nisi iaculis risus posuere sagittis a sed ligula. Suspendisse dolor dolor, gravida et placerat vitae, suscipit non arcu.',
  },
]

function App() {
  return (
    <>
      <HobbyList />
      <div className="customerService">
        {info.map((info) => (
          <Guarantee
            img={info.img}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
      <Counter />
    </>
  )
}

export default App
