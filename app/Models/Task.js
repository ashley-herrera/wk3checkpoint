  import { generateId } from "../Utils/GenerateId.js";

export default class Task {
    constructor({ title, id = generateId(), listId })
    {
        this.title = title
        this.id = id
        this.listId = listId
    }

    get Template() {
        return /* html */`
        <div class="col-12 mt-3">
            <h6><input type="checkbox" id="accept">${this.title}<button type="button" class="text-danger close mt-3"
                    onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button> </h6>
        </div>
        `
    }
}