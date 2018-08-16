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
    public void getNodes() {
        assertEquals(10, washington.getNodes().size());
    }

    @Test
    public void getEdges() {
        assertEquals(20, washington.getEdges().size());
    }

    @Test
    public void getNeighbors() {
        assertEquals(3, washington.getNeighbors(seattle).size());
    }

    @Test
    public void getEdge() {
        assertEquals(172, washington.getEdge(ellensberg, spokane).getCost());
    }

    @Test
    public void addEdgeThrowsExceptions1() {
        boolean isException = false;
        try {
            washington.addEdge(seattle, unadded, 0);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void addEdgeThrowsExceptions2() {
        boolean isException = false;
        try {
           washington.addEdge(unadded, seattle, 0);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void addTwoWayEdgeThrowsExceptions() {
        boolean isException = false;
        try {
            washington.addTwoWayEdge(seattle, unadded, 0);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void getEdgeThrowsExceptions1() {
        boolean isException = false;
        try {
            washington.getEdge(seattle, unadded);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void getEdgeThrowsExceptions2() {
        boolean isException = false;
        try {
            washington.getEdge(unadded, seattle);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void isConnectedThrowsExceptions1() {
        boolean isException = false;
        try {
            washington.isConnected(seattle, unadded);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void isConnectedThrowsExceptions2() {
        boolean isException = false;
        try {
            washington.isConnected(unadded, seattle);
        } catch (IllegalArgumentException e) {
            isException = true;
        }
        assertTrue(isException);
    }

    @Test
    public void connectedness() {
        assertFalse(washington.isConnected(bellingham, tacoma));
        assertFalse(washington.isConnected(vancouver, spokane));
        assertFalse(washington.isConnected(wallaWalla, yakima));
        assertFalse(washington.isConnected(seattle, olympia));

        assertTrue(washington.isConnected(ellensberg, spokane));
        assertTrue(washington.isConnected(ellensberg, yakima));

        assertTrue(washington.isConnected(richland, spokane));
        assertTrue(washington.isConnected(richland, yakima));
    }
}
