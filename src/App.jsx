import Cards from './Cards'
import './App.css'

function App() {
  let data = [{
    planName: 'Free',
    price: '$0',
    features: [
      { name: '10 access', enabled: true },
      { name: '2GB of storage', enabled: true },
      { name: 'Email support', enabled: false },
      { name: 'Help center access', enabled: false },
    ],
    buttonFocus: false,
    boxFocus: false,
  },
  {
    planName: 'Pro',
    price: '$15',
    features: [
      { name: 'Unlimited access', enabled: true },
      { name: '5GB storage', enabled: true },
      { name: 'Email support', enabled: true },
      { name: 'Help center access', enabled: false },
    ],
    buttonFocus: true,
    boxFocus: false,
  },
  {
    planName: 'Enterprise',
    price: '$29',
    features: [
      { name: 'Unlimited access', enabled: true },
      { name: '15GB storage', enabled: true },
      { name: 'Email support', enabled: true },
      { name: 'Help center access', enabled: true },
    ],
    buttonFocus: true,
    boxFocus: true,
  },
  ]

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return <Cards key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  )
}

export default App
