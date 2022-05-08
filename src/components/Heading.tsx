import React from 'react'
import {Box, Typography} from '@mui/material'

const Heading: React.FC<{ author: string, quote: string }> = ({author, quote}) => {
    return (
        <Box mt={1} mb={3} textAlign="center" style={{wordBreak: 'break-word'}}>
            <Typography variant="h4">
                {author}
            </Typography>
            <Typography variant="h6" color="text.secondary">
                {quote}
            </Typography>
        </Box>
    )
}

export default Heading
