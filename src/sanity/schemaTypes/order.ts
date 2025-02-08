
export const order =  {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'city',
            title: 'city',
            type: 'string'
        },
        {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
         },
         {
            name: 'phone',
            title: 'Phone Number',
            type: 'string'
         },
         {
            name:'products',
            title:'Products',
            type:'array',
            of:[{  type:'reference', to:[{type:'product'}]}]
         },
         {
           name:'totalAmount',
           title:'Total Amount',
           type:'number' 
         },
         {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' }
                ],
                layout: 'radio' 
            },
            intialValue:'pending'
         }

    ]
}