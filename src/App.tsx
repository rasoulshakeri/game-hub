import { Grid, GridItem, Flex, Show, Box } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `" nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={2}>
            <Box marginRight={4}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
