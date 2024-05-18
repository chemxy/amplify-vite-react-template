import { signInWithRedirect, signOut } from 'aws-amplify/auth';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

function App() {

    async function signInWithGoogle() {
        console.log("open with google");
        await signInWithRedirect();
        // await signInWithRedirect();
        console.log("signed in")
    }

    async function handleSignOut() {
        try {
            await signOut();
            console.log("signed out")
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        // <div className="App">
        //     <div>
        //         <button onClick={signInWithGoogle}>sign in with google</button>
        //     </div>
        //     <div>
        //         <button onClick={handleSignOut}>sign out</button>
        //     </div>
        //     {/*<div>*/}
        //     {/*    <button onClick={handleFetchUserAttributes}>get user</button>*/}
        //     {/*</div>*/}
        // </div>
        <Authenticator socialProviders={['google']}>
            {({signOut, user}) => (
                <div>
                    <h1>{JSON.stringify(user)}</h1>
                    <h1>{user?.signInDetails?.loginId}'s todos</h1>
                    <div>signed in</div>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
}

export default App;
