import { useState } from 'react';
import './Login.css';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      //קוד לשרת
    };
  
    return (
      <div className="App">
        <h1>tlush bot</h1>
        <h3>כניסה</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">מספר טלפון:</label>
            <input
              type="number"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">סיסמה:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">כניסה</button>
        </form>
        <a href='' onClick={(e) => alert(e.target)}>שכחת סיסמתך לחץ כאן</a>
      </div>
    );
  }
  
 
export default Login;