import React from 'react'
import {Box, Typography} from '@mui/material'

const Status: React.FC<{ status: string }> = ({status}) => {
    return (
        <Box mt={1} mb={3} textAlign="center" style={{wordBreak: 'break-word'}}>
            <Typography variant="h6" color="text.secondary">
                {status}
            </Typography>
        </Box>
    )
}

export default Status
