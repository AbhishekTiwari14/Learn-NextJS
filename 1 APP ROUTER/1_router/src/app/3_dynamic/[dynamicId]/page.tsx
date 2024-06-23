export default function Page({ params }: { params: { dynamicId: string } }) {
    return <div>My Post: {params.dynamicId}</div>
  }