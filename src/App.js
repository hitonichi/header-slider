import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        {/* Content */}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam itaque, voluptas provident doloremque modi quibusdam rerum adipisci suscipit aliquid asperiores. Quam esse iste dolorem accusantium, est, et labore consequuntur ex omnis nihil quod doloribus quasi nisi, officiis minima alias qui laborum illum dolore reiciendis eveniet. Dolorem neque unde distinctio molestiae expedita. Deleniti veritatis voluptatibus dignissimos soluta nemo. Velit modi ipsa temporibus recusandae dignissimos illo beatae suscipit sapiente incidunt. Mollitia debitis numquam ut? Praesentium reprehenderit sapiente, quod voluptates voluptatibus numquam? Corporis itaque possimus voluptatum maxime quisquam dolorem necessitatibus, a maiores, temporibus eius autem? Accusamus exercitationem ipsum, odit atque labore tempore officia molestias numquam a est. Odit, enim laboriosam. Possimus nulla qui dolorem officia autem tempore facere aperiam! Natus dolorem consequatur corrupti in placeat cumque ad odit incidunt inventore aperiam impedit, itaque exercitationem, provident saepe possimus accusamus. Inventore consectetur eum ducimus nisi ut praesentium! Quibusdam voluptatibus consequatur, laboriosam atque voluptates, error facilis quaerat doloribus quia repudiandae eum asperiores minus ut animi deleniti unde optio nulla recusandae? Quod quo eaque odio deleniti laboriosam aspernatur quaerat, praesentium atque facilis, delectus, a itaque adipisci harum veritatis mollitia vero ut doloremque. Dolores laboriosam ullam natus, ut commodi eius omnis facilis fugiat modi hic nulla consequatur.
        </div>
      </div>
    </Router>
  );
}

export default App;
