export const user ={
    name: 'user',
    type:'document',
    title:'user',
    fields: [
     {
        name: 'userId',
        type:'string',
        title:'User ID'
     },
     {
        name: 'name',
        type:'string',
        title:'Name'
     },
     {
        name: 'email',
        type:'string',
        title:'Email'
     },
     {
        name: 'password',
        type:'string',
        title:'Password'
     },
     {
        name: 'userImg',
        type:'url',
        title:'User Image'
     }
    ]
}