import { BrowserRouter } from "react-router-dom"
import { RouterApp } from "./router/RouterApp"

export const EcommerceApp = () => {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}