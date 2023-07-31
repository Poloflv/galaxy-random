import React from 'react'
import './styles/QuoteBox.css'

const QuoteBox = ({handleChangeQuote, quote, currentBgp}) => {

    
    
  return (
    <section className='quoteBox'>

        <h1 className="title">INFOGALAX</h1>
        <section className='centrar'>
            <article className='phrase'>
                <p>
                    {quote.phrase}
                </p>
            </article>
            <button onClick={handleChangeQuote} className='button'><i className='bx bx-revision'></i></button>
        </section>

        <footer >
            <div>
            <img src={`${currentBgp}`} alt="" />
            <h4>Fuente: {quote.author}</h4>
            </div>
        </footer>
    </section>
  )
}

export default QuoteBox