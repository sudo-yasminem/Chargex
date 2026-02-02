
import { createContext, useContext } from "react"

interface LogoutContext {
  logout: () => void
}

export const LogoutContext = createContext<LogoutContext>({
  logout: () => {},
})

export const useAuth = () => useContext(LogoutContext)
