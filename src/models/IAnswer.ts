interface IAnswer {
    id: number
    required: boolean
    title: string
    answer: string | Array<string>
}

export default IAnswer
