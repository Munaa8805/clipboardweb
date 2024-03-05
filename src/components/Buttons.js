import React from 'react'

const Buttons = ({}) => {
  const btns = [
    {id:1, name:"Download for iOS"},
    {id:2, name:"Download for Mac"}
]
  return (
    <div className="button-container">
            {
                btns.map((btn)=>{
                    return  <button key={btn.id} className={`p-4 px-8 rounded-full shadow-lg ${btn.id === 1 ? "bg-strongCyan" : "bg-lightBlue"} duration-200 hover:opacity-80`}>{btn.name}</button>
                })
            }
           
        </div>
  )
}

export default Buttons