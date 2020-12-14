import { init } from '@rematch/core'

import products from './products'
import starwars from './starwars'

const models = {
    products,
    starwars
}

const store = init({
    models
})

export default store
