import React, {useEffect, useState} from 'react'
import {TextField} from '@mui/material'
import {instanceOfCombinedInput, ICombinedInput, IInput} from '../global/export'

const TextInput: React.FC<IInput> =
    ({onAnswerChange, required, title, id, value, combinedInput}) => {

        const combinedCase = combinedInput && instanceOfCombinedInput(value)

        useEffect(() => {
            if (combinedCase && value.radio !== 'Other') {
                onAnswerChange(id, required, title, {...(value as ICombinedInput), input: ''})
            }
        }, [instanceOfCombinedInput(value) && value.radio])

        return (
            <div>
                <TextField
                    disabled={combinedCase && value.radio !== 'Other'}
                    value={combinedCase ? value.input : value}
                    onChange={(e) => {
                        onAnswerChange(id, required, title, combinedInput
                            ? {...(value as ICombinedInput), input: e.target.value}
                            : e.target.value)
                    }}
                    id={title + ' ' + id}
                    label="Your answer"
                    variant="standard"
                />
            </div>
        )
    }

export default TextInput
