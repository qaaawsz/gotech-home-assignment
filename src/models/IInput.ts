import {ICombinedInput} from '../global/export'

interface IInput {
    id: number
    required: boolean
    title: string
    onAnswerChange: Function
    value: string | ICombinedInput
    combinedInput: boolean
}

export default IInput
