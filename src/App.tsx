import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

function App() {

  /*OUTRO FORMATO PARA FAZER REQUISIÇÃO NA API*/
  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => console.log(response))
  // }, [])

  interface Lesson {
    id: string;
    title: string;
  }

  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);

  console.log(data)
  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  )
}

export default App
