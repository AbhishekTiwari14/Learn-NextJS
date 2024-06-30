export default function Product({ params }: { params: { productId: string }}){
    return(
        <h1>My Product: {params.productId}</h1>
    )
    
}