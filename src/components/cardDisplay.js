export default function cardDisplay ({ card }){
//data is pulled from the DOM
    const loaded = () => {
      return (
        <div key={card.title}>
          <p>{card.title}</p>
          {/* <img src={it.Image} alt=''/> */}
        </div>
  
      );
    }
    //function to return loading JSX
    const loading = () => {
      return <h1>No card to Display</h1>;
    };
    //Ternary operator will determine which functions JSX we will return
    return card ? loaded() : loading();
  };