interface Profile {
    name: string;
    age: number;
    email: string;
}

type Updates = Partial <Profile>

const updateProfile = (myProfile: Profile, update: Updates) => {
    return{ ...myProfile, ...update}
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));