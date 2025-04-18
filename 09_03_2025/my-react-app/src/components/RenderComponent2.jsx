
export default function RenderItem2({array}){
    return(
        <>
            {
                array.map(
                    (item,index)=>{
                        return( 
                            <li style={{color:'black'}} key={index}> 
                                {item.name}
                                <br />
                                <img height='100px' width='100px' src={item.img} alt="" />
                            </li>
                        )
                    }
                )
            }
        </>
    )
}