import { Graph, GraphNode } from './4.0';

const createMockGraph = (): Graph  => {
    const node1 =  new GraphNode('1');
    const node2 =  new GraphNode('2');
    const node3 =  new GraphNode('3');
    const node4 =  new GraphNode('4');
    const node5 =  new GraphNode('5');

    node1.children = [node2, node4]
    node2.children = [node3]
    node3.children = [node2]
    node4.children = [node1, node3]
    node5.children = [node1, node2, node3, node4]

    const graph = new Graph([node1, node2, node3, node4, node5])
    return graph
}

const isAPath1 = (root: GraphNode, target: GraphNode): boolean => {
    let result = false;
    const depthFirstSearch = (root: GraphNode) => {
        if (root === target) result = true
        if (result) return
        root.visited = true
        for (const child of root.children) {
            if (!child.visited) depthFirstSearch(child) 
        }
    }
    depthFirstSearch(root)
    return result
}

const isAPath2 = (root: GraphNode, target: GraphNode): boolean => {
    root.visited = true
    const queue = [root]

    while (queue.length > 0) {
        const current = queue.shift()
        if (current === target) return true
        for (const child of current.children) {
            if (!child.visited) {
                child.visited = true
                queue.push(child)
            }
        }
    }
    return false
}

let graph: Graph;

graph = createMockGraph()
console.log(isAPath1(graph.nodes[0], graph.nodes[2]))
graph = createMockGraph()
console.log(isAPath1(graph.nodes[0], graph.nodes[4]))

graph = createMockGraph()
console.log(isAPath2(graph.nodes[0], graph.nodes[2]))
graph = createMockGraph()
console.log(isAPath2(graph.nodes[0], graph.nodes[4]))
