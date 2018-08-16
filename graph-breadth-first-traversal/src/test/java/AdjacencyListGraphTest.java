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
    public void traverseTest() {
        List<Node<String>> traversal = breadthFirstTraversal(washington, ellensberg);

        Set<Node<String>> firstLevel = new HashSet<>();
        firstLevel.add(ellensberg);

        Set<Node<String>> secondLevel = new HashSet<>();
        firstLevel.add(seattle);
        firstLevel.add(spokane);
        firstLevel.add(yakima);

        Set<Node<String>> thirdLevel = new HashSet<>();
        thirdLevel.add(bellingham);
        thirdLevel.add(tacoma);
        thirdLevel.add(richland);

        Set<Node<String>> fourthLevel = new HashSet<>();
        fourthLevel.add(olympia);
        fourthLevel.add(wallaWalla);

        Set<Node<String>> fifthLevel = new HashSet<>();
        fifthLevel.add(vancouver);

        for (int i = 0; i < traversal.size(); i++) {
            Node<String> current = traversal.get(i);
            if (i < firstLevel.size()) {
                assertTrue(firstLevel.contains(current));
            } else if (i < firstLevel.size() + secondLevel.size()) {
                assertTrue(secondLevel.contains(current));
            } else if (i < firstLevel.size() + secondLevel.size() + thirdLevel.size()) {
                assertTrue(thirdLevel.contains(current));
            } else if (i < firstLevel.size() + secondLevel.size() + thirdLevel.size() + fourthLevel.size()) {
                assertTrue(fourthLevel.contains(current));
            } else if (i < firstLevel.size() + secondLevel.size() + thirdLevel.size() + fourthLevel.size() + fifthLevel.size()) {
                assertTrue(fifthLevel.contains(current));
            }
        }
    }

    public List<Node<String>> breadthFirstTraversal(Graph<String> graph, Node<String> start) {
        // use a set for fast lookup, but use an arraylist to maintain order
        Set<Node<String>> isEnqueued = new HashSet<>();
        List<Node<String>> traversal = new ArrayList<>();

        Queue<Node<String>> qq = new LinkedList<>();
        qq.add(start);
        isEnqueued.add(start);

        while (!qq.isEmpty()) {
            Node<String> node = qq.poll();
            traversal.add(node);

            Set<Node<String>> neighbors = washington.getNeighbors(node);
            for (Node<String> neighbor : neighbors) {
                if (!isEnqueued.contains(neighbor)) {
                    qq.add(neighbor);
                    isEnqueued.add(neighbor);
                }
            }
        }

        return traversal;
    }
}
