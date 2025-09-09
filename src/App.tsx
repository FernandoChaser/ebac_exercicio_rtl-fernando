import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://i.pinimg.com/1200x/a2/94/91/a29491a2475a44c6f58cc0ec41cbd5d5.jpg">
        Olha só que legal minha miniatura da Skirk.
      </Post>
    </div>
  );
}

export default App;
