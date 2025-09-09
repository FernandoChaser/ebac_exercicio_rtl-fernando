import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Post from '../../Post';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adidionar um comentário.', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('campo-comentar'), {
            target: {
                value: 'Comentário teste'
            }
        })

        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getByTestId('comentario')).toHaveTextContent('Comentário teste')
    })


});