import React from "react"

function DogTemplate({ pageContext: { dog } }) {
  return (
    <section>
      {dog.name} - {dog.breed}
    </section>
  )
}

export default DogTemplate
