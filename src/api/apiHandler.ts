const URL = 'http://localhost:3001'

const fetchQuestionnaire = async () => {
    try {
        const response = await fetch(URL + '/questionnaries/1')
        if (!response.ok) throw new Error(response.statusText)
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export default fetchQuestionnaire
