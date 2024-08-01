import { atom, useAtom, WritableAtom } from "jotai"

let strAtom: WritableAtom<string, string>
strAtom = atom("light")


export const colorMode = atom(
  (get) => get(strAtom),
  (get, set, newStr: string) => {
    set(strAtom, newStr)
    localStorage.setItem("theme", newStr)
  }
)

export const useColorMode = () => {
  const [mode, setMode] = useAtom(colorMode)
  const toggleMode = () => setMode("light")
  return [mode, toggleMode, setMode] as const
}
