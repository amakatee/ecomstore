const getStore = async () => {
    const res = await fetch("http://localhost:3000/api/5692c373-8d11-407f-9d44-1980eb87a032/products/f5034773-be72-435d-abae-37cfa6190c8e")

    return res.json()
}
export default getStore