import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GenerateReport } from './pages/GenerateReport'
import { Home } from './pages/Home'
import { PaginaAddItem } from './pages/PaginaAddItem'
import { PaginaAvaliacao } from './pages/PaginaAvaliacao'
import { PaginaChecklist } from './pages/PaginaChecklist'
import React from 'react'

/**
 * Rotas do browser.
 * Para adicionar uma rota use o component Route com o parâmetro exact.
 *
 * @return JSX.Element
 */
export function Routes(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/NovaAvaliacao' component={PaginaAvaliacao} />
        <Route exact path='/NovaAvaliacao/Adicao' component={PaginaAddItem} />
        <Route exact path='/relatorio' component={GenerateReport} />
        <Route exact path='/Checklist' component={PaginaChecklist} />
      </Switch>
    </BrowserRouter>
  )
}
