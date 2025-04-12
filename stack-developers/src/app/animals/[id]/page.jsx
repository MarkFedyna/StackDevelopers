export default async function Page ({params}) {
    const pageParams = await params

    return (
        <main>{pageParams.id}</main>
    )
}