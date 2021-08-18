export class GraphNode {
    visited: boolean = false;
    children: GraphNode[]
    constructor(public name: string) {}
}

export class Graph {
    public nodes: GraphNode[]

    constructor(nodes?: GraphNode[]) {
        this.nodes = nodes || []
    }
}

const visit = (node: GraphNode) => console.log(node.name);

const depthFirstSearch = (root: GraphNode) => {
    visit(root);
    root.visited = true
    for (const child of root.children) {
        if (!child.visited) depthFirstSearch(child) 
    }
}

const breadthFirstSearch = (root: GraphNode) => {
    root.visited = true
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        visit(current);
        for (const child of current.children) {
            if (!child.visited) {
                child.visited = true
                queue.push(child)
            }
        }
    }
}

