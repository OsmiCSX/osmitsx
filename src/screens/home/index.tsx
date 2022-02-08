import React, { FC, useEffect } from "react"
import { View, ActivityIndicator } from "react-native"
import { RootStackScreenProps } from "@navigations/stack/types"
import { useCharacters } from "@stores"

import styles from "./style"
import { apply } from "@theme"

const Home: FC<RootStackScreenProps<"Main">> = () => {
  const { fetching, data, getCharacters } = useCharacters()

  useEffect(() => {
    ;(async () => {
      await getCharacters()
    })()
  }, [])

  console.log("data =>", data)

  return (
    <View style={styles.container}>
      {fetching && <ActivityIndicator color={apply("red-500")} />}
    </View>
  )
}

export default Home
