

export default function cardDisplay ({ card }){
//data is pulled from the DOM'
var l = document.getElementById('cardsearch');
    const loaded = () => {
          return (
            <div>
              <p>
                {l}
              </p>
          </div>
          )
    }
      
    //function to return loading JSX
    const loading = () => {
      return <h1>No card to Display</h1>;
    };
    //Ternary operator will determine which functions JSX we will return
    return card ? loaded() : loading();
  };