import React from 'react'

const CompraRealizada = () => {
    return (
        <div>
            <h1>Compra realizada</h1>
            <div className="statusbar">
               <Link to={`/`}>
                  <div className="left">Volver a productos</div>
               </Link>
               <div className="right">&nbsp;</div>
            </div>
      </div>
        </div>
    )
}

export default CompraRealizada
