import {useState} from "react";
import {getToken} from "../../api/auth.ts";

export function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <div>
        Login Page
        <form onSubmit={async e => {
            e.preventDefault();
            const token = await getToken(email, password);
            localStorage.setItem("token", token);
        }}>
            <input placeholder="Email"
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <input placeholder="Password"
                   type="password"
                   onChange={e => {setPassword(e.target.value)}}
                   value={password}
            />
            <button type="submit">Login</button>
        </form>
    </div>;
}