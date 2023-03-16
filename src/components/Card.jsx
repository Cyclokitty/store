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
            margin='20 auto 20 auto'
            fontFamily='Poppins'
            {...rootProps}
        >
            {avatar ? (
                <Box
                    width={250}
                    overflow="hidden"
                    alignSelf='center'
                    margin='0 auto 0 auto'
                >
                    {avatar}
                </Box>
            ) : null }

            {title ? (
                <Box
                
                fontSize="1.3rem"
                padding="10px 0"
            >
                {title}
            </Box>
            ) : null }

            {children ? <Box>{children}</Box> : null}     
        </Box>
    )
}