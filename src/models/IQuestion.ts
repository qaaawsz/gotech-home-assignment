interface IQuestion {
    id: number
    required: boolean
    textResponse: boolean
    optional: boolean
    relatedTo?: number
    title: string
    answers?: Array<string>
}

export default IQuestion
