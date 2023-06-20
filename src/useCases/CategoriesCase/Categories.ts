// Esse arquivo contèm as views das categorias
// Aqui vai ser feito o processamento de pegar
// as postagens das categorias e inserrir nas rotas

import {Request, Response} from "express"


const postsSalaried = (req: Request, res: Response) => {
  const posts = req.params.id
  return res.send("vagas carteira assinada" + posts)
}


const postsContract = (req: Request, res: Response) => {
  const posts = req.params.id
  return res.send("vagas com contrato mensal" + posts)
}


const postsDetached = (req: Request, res: Response) => {
  const posts = req.params.id
  return res.send("vagas de trabalhos avulso" + posts)
}

function postsDaily(req: Request, res: Response){
  const posts = req.params.id
  return res.send("vagas de trabalhos na diária" + posts)
}

export { 
  postsSalaried, 
  postsContract, 
  postsDaily, 
  postsDetached 
}

