import { useCallback } from "react"
import { Api } from "@services/api"
import { apiConfig } from "@stores/config"
import { CharacterApi } from "@services/api/character-api"
import { atom, useAtom } from "jotai"
import { Character } from "./types"

/**
 * Initial state
 */
const _fetching = atom<boolean>(false)
const _data = atom<Character[]>([])
const _error = atom<string>("")

/**
 * Create custom hooks
 */
export const useCharacters = () => {
  const [api] = useAtom<Api>(apiConfig)
  const [fetching, setFetching] = useAtom(_fetching)
  const [data, setData] = useAtom(_data)
  const [error, setError] = useAtom(_error)

  const getCharacters = useCallback(async () => {
    setFetching(true)

    const characterApi = new CharacterApi(api)
    const result = await characterApi.getCharacters()

    if (result.kind === "ok") {
      setData(result.data)
      setFetching(false)
    } else {
      __DEV__ && console.tron.log(result.kind)
      setError(result.kind)
      setFetching(false)
    }
  }, [api, setData, setError, setFetching])

  return {
    fetching,
    data,
    error,
    getCharacters,
  }
}
