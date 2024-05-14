import {signInWithRedirect} from 'aws-amplify/auth';


function App() {

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
