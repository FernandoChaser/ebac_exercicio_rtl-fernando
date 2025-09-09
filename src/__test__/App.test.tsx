import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Teste para o component App.', () => {
    test('Teste de renderização do componente.', () => {
        render(<App />)
        expect(screen.getByTestId('btn-comentar')).toBeInTheDocument()
    })
})