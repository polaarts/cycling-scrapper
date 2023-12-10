import getAccesorios from './categorias/accesorios.js'
import getIndumentaria from './categorias/indumentaria.js'

const getAllcincoNorte = async () => {
  await getAccesorios()
  await getIndumentaria()
}

export default getAllcincoNorte
