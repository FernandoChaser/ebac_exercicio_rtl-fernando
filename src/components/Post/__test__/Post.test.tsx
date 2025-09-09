import { render, screen } from '@testing-library/react'
import Post from '..'

describe('Testes para o componente Post', () => {
    test('Teste de renderização.', () => {
        render(<Post imageUrl=''>Teste de Post</Post>)
        expect(screen.getByText('Teste de Post')).toBeInTheDocument()
    })
})