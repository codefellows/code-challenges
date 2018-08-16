import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class AdjacencyListGraph<E> implements Graph<E> {
    private Set<Node<E>> nodes;
    private Set<Edge<E>> edges;

    private Map<Node<E>, Set<Node<E>>> nodeToNodes;
    private Map<Node<E>, Set<Edge<E>>> nodeToEdges;
    private Map<Node<E>, Map<Node<E>, Edge<E>>> pointToPointEdges;

    public AdjacencyListGraph() {
        this.nodes = new HashSet<>();
        this.edges = new HashSet<>();

        this.nodeToNodes = new HashMap<>();
        this.nodeToEdges = new HashMap<>();
        this.pointToPointEdges = new HashMap<>();
    }

    public Set<Node<E>> getNodes() {
        return nodes;
    }

    public Set<Edge<E>> getEdges() {
        return edges;
    }

    @Override
    public void addNode(Node<E> node) {
        this.nodes.add(node);
        this.nodeToNodes.put(node, new HashSet<>());
        this.nodeToEdges.put(node, new HashSet<>());
        this.pointToPointEdges.put(node, new HashMap<>());
    }

    @Override
    public void addEdge(Node<E> start, Node<E> end) {
        addTwoWayEdge(start, end, 0);
    }

    @Override
    public void addEdge(Node<E> start, Node<E> end, int cost) {
        checkNodesExists(start, end);

        Edge<E> edge = new Edge<>(start, end, cost);

        edges.add(edge);
        nodeToNodes.get(start).add(end);
        nodeToEdges.get(start).add(edge);

        Map<Node<E>, Edge<E>> edgesFromStart = pointToPointEdges.get(start);
        edgesFromStart.put(end, edge);
    }

    @Override
    public void addTwoWayEdge(Node<E> start, Node<E> end) {
        addTwoWayEdge(start, end, 0);
    }

    @Override
    public void addTwoWayEdge(Node<E> start, Node<E> end, int cost) {
        // don't bother checking to see if nodes exist because addEdge will check
        // use the one-way addEdge method to add edges in both directions
        addEdge(start, end, cost);
        addEdge(end, start, cost);
    }

    @Override
    public Set<Node<E>> getNeighbors(Node<E> node) {
        checkNodesExists(node);

        Set<Node<E>> neighbors = nodeToNodes.get(node);
        return neighbors;
    }

    @Override
    public boolean isConnected(Node<E> start, Node<E> end) {
        checkNodesExists(start, end);
        return pointToPointEdges.get(start).containsKey(end);
    }

    @Override
    public Edge<E> getEdge(Node<E> start, Node<E> end) {
        checkNodesExists(start, end);

        return pointToPointEdges.get(start).get(end);
    }

    private void checkNodesExists(Node<E> node1, Node<E> node2) {
        checkNodesExists(node1);
        checkNodesExists(node2);
    }

    // leverage method overloading and use plural naming even for the single node check
    // because it's way easier to write the same method name everywhere than to remember to
    // write either "node" vs "nodes" in "checkNodeExists" or "checkNodesExists"
    private void checkNodesExists(Node<E> node) {
        if (!nodes.contains(node)) {
            throw new IllegalArgumentException("Node doesn't exist: " + node);
        }
    }
}
