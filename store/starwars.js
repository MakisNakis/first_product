import api from '../api'

const starwars = {
    state: {
        data: {},
        loading: true,
        error: false
    },
    reducers: {
        uploadCharacter(state, payload) {
            return {
                ...state,
                data: payload,
                loading: false
            }
        },
    },
    effects: dispatch => ({
        async uploadCharacterAsync(payload, state) {


            try {
                const res = await api.get(`people/${payload}`)
                const data = await res.json()

                dispatch.starwars.uploadCharacter(data)

            } catch (error) {
                console.error('Fetch error:', error)
            }
        },
    }),
}

export default starwars
