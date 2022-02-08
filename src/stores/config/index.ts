import { atom } from "jotai"
import { Api } from "@services/api"
import { Environment } from "@config/environment"

export const apiConfig = atom<Api>(new Environment().api)
export const isAppReady = atom(false)
