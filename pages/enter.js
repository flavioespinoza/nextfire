import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter() {
  const { user, username } = useContext(UserContext)

  // 1. user is signed-in, does NOT have username <UsernameForm />
  // 2. user is signed-in, has username <SignOutButton />
  // 3. user is signed-out <SignInButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) { 
      alert(error);
    }
  };

  return (
    <button className='btn-google' onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
