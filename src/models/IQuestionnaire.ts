import {IQuestion} from '../global/export'

interface IQuestionnaire {
    id: number
    questions: Array<IQuestion>
    author: string
    quote: string
}

export default IQuestionnaire
