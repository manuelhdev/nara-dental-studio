import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { CasesPage } from "./pages/CasesPage"
import { Clinic } from "./pages/Clinic"
import { FirstVisit } from "./pages/FirstVisit"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Schedule } from "./pages/Schedule"
import { TreatmentDetail } from "./pages/TreatmentDetail"
import { Treatments } from "./pages/Treatments"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Treatments />} />
          <Route path="/tratamientos/:slug" element={<TreatmentDetail />} />
          <Route path="/casos" element={<CasesPage />} />
          <Route path="/clinica" element={<Clinic />} />
          <Route path="/primera-visita" element={<FirstVisit />} />
          <Route path="/agendar" element={<Schedule />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
