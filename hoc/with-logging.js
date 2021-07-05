import useSession from '../hooks/use-session'

const withLogging = WrappedComponent => props => {
  const { isLogged } = useSession()
  if (!isLogged) return null
  return <WrappedComponent {...props} />
}

// function withLogging(WrappedComponent) {
//   return (props) => {
//     const { isLogged } = useSession()
//     if (!isLogged) return null
//     return <WrappedComponent {...props} />
//   }
// }

export default withLogging
