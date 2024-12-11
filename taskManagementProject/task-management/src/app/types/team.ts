export interface Team {
    _ownerId: string;
    title: string;
    owner: string;
    description: string;
    teamKey: string;
    _createdOn: number;
    _id: string;
}

export interface TeamChanges {
    title: string;
    owner: string;
    description: string;
}