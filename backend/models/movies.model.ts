import { ObjectId } from "mongodb";

interface Movie extends Document {
    _id: ObjectId;
    title: string;
    image: string; // FIXME: URL specific type?
}

export type { Movie };
