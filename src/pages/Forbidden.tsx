export default function Forbidden() {
  return (
    <>
      <h1
        style={{
          color: 'red',
          fontSize: '2rem',
          textAlign: 'center',
          margin: '20px 0'
        }}
      >
        Unauthorized | 401
      </h1>
      <p style={{ textAlign: 'center' }}>
        Change auth status from <code>/src/utils/PrivateRoute.tsx</code> to
        access.
      </p>
    </>
  )
}
