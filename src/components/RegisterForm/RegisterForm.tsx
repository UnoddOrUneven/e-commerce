import {createNewAccount,getToken} from "../../api/auth.ts";
import {useState} from "react";

export function RegisterForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return  <div>
    <form onSubmit={async e => {
        e.preventDefault();
        await createNewAccount({name, email, password});
        const token = await getToken(email, password);
        localStorage.setItem("token", token);

    }}>
        <input placeholder="Name"
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
        />
        <input placeholder="Email"
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
        />
        <input placeholder="Password"
               type="password"
               onChange={e => {
                   setPassword(e.target.value)
               }}
        />
        <button type="submit">Login</button>
    </form>
    </div>
}