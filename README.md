Why is Type Inference Helpful?

1. You write less code.

2. Code is cleaner and easier.

3. You still get error checking.

4. It saves time for beginners and experts.

What are some differences between interfaces and types in TypeScript?

1. interface Person {
    name: string;
    age: number;
    }

    type PersonType = {
    name: string;
    age: number;
    };

2. Unions (Only type can do this)
type Status = "online" | "offline" | "busy";

3. Both has Describe object.

4. types has Union types but interface hasn't.

5. interface has Merge definitions but types hasn't.
