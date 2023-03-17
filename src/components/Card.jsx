import Box from "./Box";


export default function Card({ avatar, title, children, ...rootProps }) {
    return (
        <Box
            backgroundColor="#333"
            border='4px solid white'
            borderRadius={4}
            color="#eee"
            minHeight={300}
            padding={12}
            width={300}
            margin='20px auto 20px auto'
            fontFamily='Poppins'
            {...rootProps}
        >
            {title ? (
                <Box
                textAlign='center'
                fontSize="1.3rem"
                padding="10px 0"
            >
                {title}
            </Box>
            ) : null }
            {avatar ? (
                <Box
                    width={200}
                    overflow="hidden"
                    alignSelf='center'
                    margin='0 auto 0 auto'
                >
                    {avatar}
                </Box>
            ) : null }

            {children ? <Box>{children}</Box> : null}     
        </Box>
    )
}