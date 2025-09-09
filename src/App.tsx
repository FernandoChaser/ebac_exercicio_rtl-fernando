import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/2571/2571273/produto/267276481/img_9804-308knqwool.JPG">
        Olha só que legal minha miniatura de F1 do Max Verstappen.
      </Post>
    </div>
  );
}

export default App;
