import React, {useEffect, useState} from 'react'
import {
    fetchQuestionnaire,
    Heading,
    IAnswer, instanceOfCombinedInput,
    IQuestion,
    IQuestionnaire,
    QuestionCard,
    Status
} from './global/export'
import {Button, Container} from '@mui/material'

function App() {
    const [questionnaire, setQuestionnaire] = useState<IQuestionnaire | undefined>(undefined)
    const [userAnswers, setUserAnswers] = useState<IAnswer[]>([])

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>(undefined)
    const [firstLaunch, setFirstLaunch] = useState<boolean>(true)

    const [emptyAnswers, setEmptyAnswers] = useState<number>(0)

    const sendAnswers = () => {
        console.log(userAnswers)
    }

    useEffect(() => {
        (() => {
            setLoading(true)
            setTimeout(async () => {
                const response = await fetchQuestionnaire()
                if (response) {
                    setQuestionnaire(response)
                    response.questions.map(({id, required, title}: IQuestion, i: number) => {
                        setUserAnswers(prevState => {
                            return prevState[i] && prevState[i]?.id !== id
                                ? [...prevState, {id, required, title, answer: ''}]
                                : prevState
                        })
                    })
                } else {
                    setError('Something went wrong. Please reload the page')
                }
                setLoading(false)
                setFirstLaunch(false)
            }, 250)
        })()
    }, [])

    useEffect(() => {

        setEmptyAnswers([userAnswers.filter((a) => a.required)].length + 1)

        userAnswers.forEach(({required, answer}) => {
            required && instanceOfCombinedInput(answer) && (answer?.input?.length || answer?.radio?.length) && setEmptyAnswers(prevState => prevState - 1)
            required && answer.length && setEmptyAnswers(prevState => prevState - 1)
        })

    }, [userAnswers])

    if (loading || firstLaunch) return <Status status="Loading"/>

    if (error) return <Status status="Something went wrong. Please reload the page"/>

    if (!questionnaire) return <Status status="This questionnaire is empty :("/>

    return (
        <Container maxWidth="md">
            <Heading
                author={questionnaire?.author || 'Author'}
                quote={questionnaire?.quote || 'Super motivational quote'}
            />
            {
                questionnaire?.questions.map((q) =>
                    <QuestionCard
                        key={q.id}
                        id={q.id}
                        title={q.title}
                        required={q.required}
                        answers={q?.answers}
                        textResponse={q.textResponse}
                        optional={q.optional}
                        relatedTo={q?.relatedTo}
                        userAnswers={userAnswers}
                        setUserAnswers={setUserAnswers}
                    />
                )
            }
            <Button disabled={!!emptyAnswers} onClick={sendAnswers} variant="outlined">Send Answers</Button>
        </Container>
    )
}

export default App
