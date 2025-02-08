"use server"

import { client } from '@/sanity/lib/client';
import { auth, currentUser } from '@clerk/nextjs/server';

export async function getUser() {
    const { userId } = await auth();
    const user = await currentUser();
   console.log(user);
   


    const username = `${user?.firstName} ${user?.lastName}`
    const userEmail = user?.emailAddresses[0].emailAddress
    const userImage = user?.imageUrl

    return {
        userId,
        username,
        userEmail,
        userImage
    }

}

export async function sanityUserPost() {
    const user = await getUser()

    const userObject = {
        _type: "user",
        _id: `user-${user.userId}`,
        userId: user.userId,
        name: user.username,
        email: user.userEmail,
        userImg: user.userImage,
       
    }
    const res = client.createOrReplace(userObject)
    return res
}