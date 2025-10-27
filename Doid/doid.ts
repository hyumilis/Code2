export namespace FudgeAid {

interface Command{
    module: string;
    method: string;
    data: string;
}

interface State{
    abc: number;
}

const dummyCommand: Command = {
    module: "Doid",
    method: "getCommand",
    data: "someData"
};

export function getCommand(_state: State): Command {
    console.log(_state);
    return dummyCommand;
}

}