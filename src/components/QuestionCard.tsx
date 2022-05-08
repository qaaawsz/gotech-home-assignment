import React, {useEffect, useState} from 'react'
import {IAnswer, ICombinedInput, IQuestion, RadiosGroup, TextInput} from '../global/export'
import {Box, Typography} from '@mui/material'

const QuestionCard: React.FC<IQuestion & { userAnswers: IAnswer[], setUserAnswers: Function }> =
    ({id, required, title, answers, textResponse, optional, relatedTo, userAnswers, setUserAnswers}) => {
        const [showOptional, setShowOptional] = useState<boolean>(false)
        const combinedInput = !!(textResponse && answers?.length)
        const [value, setValue] = useState<string | ICombinedInput>(combinedInput ? {radio: '', input: ''} : '')

        const onAnswerChange = (id: number, required: boolean, title: string, answer: string | ICombinedInput) => {
            setValue(answer)
            setUserAnswers((prev: IAnswer[]) => [...prev.filter((a) => a.id !== id), {id, required, title, answer}])
        }

        useEffect(() => {
            userAnswers.forEach((a) => a.id === relatedTo && a.answer.length && setShowOptional(true))
        }, [userAnswers])

        if (!showOptional && optional) return <></>

        return (
            <Box my={2} p={1} display="flex" flexDirection="column">
                <Typography variant="body1">{title}
                    {required && <span style={{color: 'red'}}> *</span>}
                    {optional && <span style={{color: 'blue', fontStyle: 'italic'}}><sup> optional</sup></span>}
                </Typography>
                {
                    answers?.length &&
                    <RadiosGroup
                        title={title}
                        id={id}
                        answers={answers}
                        required={required}
                        onAnswerChange={onAnswerChange}
                        value={value}
                        combinedInput={combinedInput}
                    />
                }
                {
                    textResponse && (
                        <TextInput
                            title={title}
                            id={id}
                            onAnswerChange={onAnswerChange}
                            required={required}
                            value={value}
                            combinedInput={combinedInput}
                        />
                    )
                }
            </Box>
        )
    }

export default QuestionCard
