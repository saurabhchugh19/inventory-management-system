import { Generator } from "battlecry";

export default class DuckGenerator extends Generator {
    config = {
        init: {
            description: "Generate a duck scaffolding for components"
        },
        generate: {
            args: "name",
            description: "Provide a component name"
        }
    };

    generate() {
        let args = this.args.name.split('/');
        this.templates().forEach(file => file.saveAs(`src/components/${this.args.name}/`, args[args.length - 1]));
    }
}
