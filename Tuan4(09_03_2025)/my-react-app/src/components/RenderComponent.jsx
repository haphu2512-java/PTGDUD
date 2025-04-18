export default function RenderItem({array}){
    return(
        <>
            {
                array.map(
                    (item,index)=>{
                        return(
                            <li key={index}><a href=""> {item}</a></li>
                        )
                    }
                )
            }
        </>
    )
}