

export default function cardDisplay ({ card }){
//data is pulled from the DOM'
    const loaded = () => {
      const list = card.cardo.map(it => {
        return (
            <div key={it._id}>
              <div className="conta">
                <br/>
                {it.title}
                <br/>
                <div className="i">{it.Image}</div>
                <br/>
                Description:
                <div className="desw"><br/>{it.description}</div>
                <br/>
                Requirement(s):
                <br/>
                <br/>
                {it.requirement}
                <br/>
                <br/>
                Satisfaction level:
                <br/>
                {it.SG}
                <br></br>
                <br/>
                {it.SALARY}
                <br/>
                {it.SV}
                </div>
          </div>
          );
      })
      return (
        <>
          {list}
        </>
      )
    }
      
    //function to return loading JSX
    const loading = () => {
      return <h1>No card to Display</h1>;
    };
    //Ternary operator will determine which functions JSX we will return
    return card ? loaded() : loading();
  };