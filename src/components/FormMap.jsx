import React from 'react'

function FormMap() {
  return (
    <div>
        <div className="bg-white py-6 px-10 sm:max-w-md w-full mt-12">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-4">
        Pedido de contacto 
        </div>
        <div className="sm:text-l text-md mb-8">Estamos disponíveis para o ajudar a encontrar o automóvel da sua eleição, esclarecer quaisquer dúvidas que tenha sobre os nossos produtos. Entre em contacto connosco.</div>
        <div>
            <div>
                 <input type="text" className="focus:outline-none border-b w-full my-4  border-sky-400 placeholder-gray-500"  placeholder="Nome "/>
            </div>
            <div>
                 <input type="text" className="focus:outline-none border-b w-full  border-sky-400 placeholder-gray-500"  placeholder="Sobrenome "/>
            </div>
             <div>
                 <input type="email" className="focus:outline-none border-b w-full my-4 border-sky-400 placeholder-gray-500"  placeholder="Email "/>
            </div>
             <div>
            <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-2"  placeholder="Cidade "/>
            </div>
             <div>
            <input type="phone" className="focus:outline-none border-b w-full my-4 border-sky-400 placeholder-gray-500"  placeholder="Telefone "/>
            </div>
            <div>
                <input type="text" className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Sua mensagem " />
            </div>
            <div className="flex">
                <input type="checkbox" className="border-sky-400 " value="" />
                <div className="px-3 text-gray-500">
                Ao submeter este formulário li e aceito a informação relativa aos termos e condições do tratamento de dados pessoais. 
                </div>
            </div>
            <div className="flex justify-center my-6">
                <button className=" rounded-full  p-3 w-full sm:w-56   bg-blue-400 text-black text-lg font-semibold " >
                    Submit
                </button>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default FormMap