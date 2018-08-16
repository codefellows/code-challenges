import org.junit.Before;
import org.junit.Test;

import java.util.*;

import static org.junit.Assert.*;

public class AdjacencyListGraphTest {
    /* Washington State:

    bellingham
        |
     seattle---------------ellensberg---------spokane
        |                       \               /
     tacoma                      \             /
        |                         \           /
     olympia                       \         /
        |                         yakima    /
        |                            \     /
        |                            richland
        |                               \
    vancouver                       walla walla
     */

    private Graph<String> washington;
    private Node<String> bellingham;
    private Node<String> seattle;
    private Node<String> tacoma;
    private Node<String> olympia;
    private Node<String> vancouver;
    private Node<String> ellensberg;
    private Node<String> spokane;
    private Node<String> yakima;
    private Node<String> richland;
    private Node<String> wallaWalla;

    // node used to check for non-existent nodes that haven't been added to graph
    private Node<String> unadded;

    @Before
    public void setUp() throws Exception {
        washington = new AdjacencyListGraph<>();
        bellingham = new Node<>("Bellingham");
        seattle = new Node<>("Seattle");
        tacoma = new Node<>("Tacoma");
        olympia = new Node<>("Olympia");
        vancouver = new Node<>("Vancouver");
        ellensberg = new Node<>("Ellensberg");
        spokane = new Node<>("Spokane");
        yakima = new Node<>("Yakima");
        richland = new Node<>("Richland");
        wallaWalla = new Node<>("Walla Walla");

        unadded = new Node<>("unadded");

        // I-5 north to south
        washington.addNode(bellingham);
        washington.addNode(seattle);
        washington.addNode(tacoma);
        washington.addNode(olympia);
        washington.addNode(vancouver);

        // I-90 west to east
        washington.addNode(ellensberg);

        // north east of ellensberg
        washington.addNode(spokane);

        // south east of ellensberg
        washington.addNode(yakima);
        washington.addNode(richland);
        washington.addNode(wallaWalla);

        washington.addTwoWayEdge(bellingham, seattle, 88);
        washington.addTwoWayEdge(seattle, tacoma, 33);
        washington.addTwoWayEdge(tacoma, olympia, 38);
        washington.addTwoWayEdge(olympia, vancouver, 109);

        // east from seattle to ellensberg
        washington.addTwoWayEdge(seattle, ellensberg, 107);

        // ellensberg splits east to spokane and south to yakima
        washington.addTwoWayEdge(ellensberg, spokane, 172);
        washington.addTwoWayEdge(ellensberg, yakima, 39);

        // yakima goes south east to richland
        // you can split and go to either spokane or walla walla from richland
        washington.addTwoWayEdge(yakima, richland, 77);
        washington.addTwoWayEdge(richland, wallaWalla, 57);
        washington.addTwoWayEdge(richland, spokane, 144);
    }

    @Test
    public void islands() {
        Graph<String> usa = new AdjacencyListGraph<>();

        Node<String> alaska = new Node<>("Alaska");
        Node<String> hawaii = new Node<>("Hawaii");
        Node<String> washington = new Node<>("Washington");
        Node<String> oregon = new Node<>("Oregon");

        usa.addNode(alaska);
        usa.addNode(hawaii);
        usa.addNode(washington);
        usa.addNode(oregon);

        usa.addTwoWayEdge(washington, oregon);

        assertEquals(0, numIslands(this.washington));
        assertEquals(2, numIslands(usa));
    }

    public int numIslands(Graph graph) {
        int islands = 0;
        for (Object each : graph.getNodes()) {
            Node node  = (Node) each;
            if (graph.getNeighbors(node).size() == 0) {
                islands++;
            }
        }
        return islands;
    }
}
