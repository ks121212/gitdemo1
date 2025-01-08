import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

function Cards({ item }) {
  return (
    <>
      <div className="col">
        <div className={`card-deck mb-3 text-center ${item.boxFocus ? 'border-primary' : ''}`}>
          <div className="card mb-4 box-shadow ">
            <div className={`card-header ${item.boxFocus ? 'text-bg-primary border-primary' : ''}`}>
              <h4 className="my-0 font-weight-normal">{item.planName}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">{item.price} <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                {item.features.map((feature, index) => {
                  return <li key={index}>
                    {
                      feature.enabled ? <span><TiTick />{feature.name}</span>
                        : <><ImCross size={9} />{"  "}<del>{feature.name}</del></>
                    }</li>

                })}
              </ul>
              <button type="button" className={`btn btn-lg ${item.buttonFocus ? 'btn-primary' : 'btn-outline-primary'} `}>Sign up for free</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards