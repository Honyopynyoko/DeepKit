import { t, entity } from '@deepkit/type';
import { ObjectId } from "mongodb";

@entity.name('user').collectionName("users")
    export default class User {
        @t.primary id: ObjectId = new ObjectId();

        @t created: Date = new Date;

        constructor(@t public username: string) {
        }
    }
