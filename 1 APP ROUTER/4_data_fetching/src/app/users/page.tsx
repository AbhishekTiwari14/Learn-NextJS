type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function UsersPage(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    
    return (
        <div className="grid grid-cols-2 gap-2 p-4 bg-black">
            {users.map((user: User) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-white">
                    <div className="flex flex-col space-y-1">
                        <h2>{user.name}</h2>
                        <p>{user.username}</p>
                    </div>
                    <div className="flex flex-col space-y-1 items-end">
                        <div className="text-md">{user.email}</div>
                        <div className="text-md">{user.phone}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}