import { gql } from '@apollo/client'

const query = gql`
  query GetExplore {
    explore {
      data {
        id
        attributes {
          eventTime
          title
          description
          registrationUrl
        }
      }
    }
  }
`

export default query
