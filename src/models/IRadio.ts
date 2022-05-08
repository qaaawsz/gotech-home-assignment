import {ICombinedInput} from '../global/export'

interface IRadio {
    id: number
    required: boolean
    title: string
    onAnswerChange: Function
    answers: Array<string>
    value: string | ICombinedInput
    combinedInput: boolean
}

export default IRadio
