export default function LoginPage() {
  return (
    <>
      <h2>Login</h2>
      <form action='/api/auth/login' method='POST'>
        <label>Email</label>
        <input type='email' name='email' required />
        <label>Password</label>
        <input type='password' name='password' required />
        <input type='submit' />
      </form>
    </>
  );
}
