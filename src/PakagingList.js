function Item({name , isPacked}){
    // if(isPacked){
    //     return<li>{name}✔</li>
    // }
    // conditional opoerator using ternary operator
    // return(isPacked? <li><del>{name}✔</del> </li>: <li>{name}</li>)
    let content=name;
    if(isPacked){
        content=content+"✔"
    }


    return<li>{content}</li>
}
export default function PakagingList(){
    return(
        <section>
             <h1>
                Azhar Academy Pakaging List
                <uL>
                    <Item name={"Helmet"} isPacked={true}/>
                    <Item name={"laptop"} isPacked={false}/>
                    <Item name={"Bike"} isPacked={true}/>
                </uL>
                
             </h1>
        </section>
    )
}