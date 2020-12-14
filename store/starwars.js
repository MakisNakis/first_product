import ky from 'ky-universal'

const starwars = {
    state: {
        data: {},
    },
    reducers: {
        uploadCharacter(state, payload) {
            return {
                ...state,
                data: payload,
            }
        },
    },
    effects: dispatch => ({
        async uploadCharacterAsync(payload) {
            const api = ky.create({
                prefixUrl: 'https://swapi.dev',
            })

            try {
                const body = await api.get(`api/people/${payload}`).json()
                dispatch.starwars.uploadCharacter(body)
            } catch (error) {
                console.error('Fetch error:', error)
            }
        },
    }),
}

export default starwars
