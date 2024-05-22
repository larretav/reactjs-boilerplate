import { Stack, Typography } from "@mui/material"

const App = () => {
  return (
    <Stack  justifyContent="center" className="w-screen mt-32" gap={2} >
      <Typography fontWeight={300} className="text-5xl text-gray-600 antialiased text-center">
        Esto es un Boilerplate de ReactJS, MUI y TailwindCSS
      </Typography>

      <Typography fontWeight={300} className="text-2xl text-gray-500 antialiased text-center">
        Para más información leer el archivo README.md
      </Typography>
    </Stack>
  )
}

export default App