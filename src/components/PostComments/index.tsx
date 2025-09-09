import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <ul className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
<<<<<<< HEAD
                    <li data-testid='comentario' className={styles['post-comment']} key={id}>
=======
                    <li className={styles['post-comment']} key={id}>
>>>>>>> 522e8cdd7f27aea6548d02678485af0b424c544f
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
<<<<<<< HEAD
                <textarea data-testid="campo-comentar" value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button data-testid="btn-comentar" type="submit" className={styles['post-comments-form-button']}>
=======
                <textarea value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button type="submit" className={styles['post-comments-form-button']}>
>>>>>>> 522e8cdd7f27aea6548d02678485af0b424c544f
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;