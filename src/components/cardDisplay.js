export default function cardDisplay ({ card }){
  
    const loaded = () => {
      // card.Search.map => is the thing pulling from the DOM
      const list = card.Search.map(it => {
      return (
        <div key={it.id}>
          <p>{it.title}</p>
          {/* <img src={it.Image} alt=''/> */}
        </div>
  
      );
    })
      return (
        <>
          {list}
        </>
      );
    };
    //function to return loading JSX
    const loading = () => {
      return <h1>No card to Display</h1>;
    };
    //Ternary operator will determine which functions JSX we will return
    return card ? loaded() : loading();
  };
  