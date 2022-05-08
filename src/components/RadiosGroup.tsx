import React from 'react'
import {FormControl, FormControlLabel, Radio, RadioGroup} from '@mui/material'
import {instanceOfCombinedInput, ICombinedInput, IRadio} from '../global/export'

const RadiosGroup: React.FC<IRadio > =
    ({id, title, onAnswerChange, answers, required, value, combinedInput}) => {

        const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const answer = (event.target as HTMLInputElement).value
            onAnswerChange(id, required, title, combinedInput ? {...(value as ICombinedInput), radio: answer} : answer)
        }

        return (
            <FormControl
                variant="standard">
                <RadioGroup
                    name={title}
                    value={combinedInput && instanceOfCombinedInput(value) ? value.radio : value}
                    onChange={handleRadioChange}
                >
                    {
                        answers.length && answers.map((answer) => (
                            <FormControlLabel
                                key={answer}
                                value={answer}
                                control={<Radio/>}
                                label={answer}
                            />
                        ))}
                </RadioGroup>
            </FormControl>
        )
    }

export default RadiosGroup
