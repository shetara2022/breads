const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
  <h3>{bread.name}</h3>
  <p>
    and it
    {/* tenary operator since if/else statements are unavailable in JSX */}
    {
      bread.hasGluten
      ? <span> does </span>
      : <span> does NOT </span>
    }
    have gluten.
  </p>
          <img src={bread.image} alt={bread.name} />
          <p>Baked by {bread.getBakedBy()}</p>
          <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
    <input type='submit' value="DELETE" />
          </form>
         

</Default>
      )
}


  
module.exports = Show
