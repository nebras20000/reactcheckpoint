import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <img src={logo} alt="Xcelvations Logo" height="40" />
        <nav>
                    <a href="/ddsq">Home</a>
                    <a href="/mybooks">My Books</a>
                    <a href="/favorites">Favorites</a>
        </nav>
    </header>
      <form id="">
        <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
        
      </form>
    </div>
  );
}

export default App;
