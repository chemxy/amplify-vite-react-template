import {useEffect, useState} from "react";
import type {Schema} from "../amplify/data/resource";
import {generateClient} from "aws-amplify/data";
import {signInWithRedirect} from 'aws-amplify/auth';

const client = generateClient<Schema>();

function App() {
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
    }, []);

    function createTodo() {
        client.models.Todo.create({content: window.prompt("Todo content")});
    }

    async function signInWithGoogle() {
        console.log("open with google");
        await signInWithRedirect({
            provider: "Google",
        });
        // await signInWithRedirect();
        console.log("signed in")
    }

    return (
        <div className="App">
            <div>
                <button onClick={signInWithGoogle}>sign in with google</button>
            </div>
            {/*<div>*/}
            {/*    <button onClick={handleSignOut}>sign out</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={handleFetchUserAttributes}>get user</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
