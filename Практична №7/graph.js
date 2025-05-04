const graph = {
    1: {2: 8, 3: 4, 6: 1, 5: 11},
    2: {1: 8, 3: 5, 4: 5},
    3: {1: 4, 2: 5, 6: 4},
    4: {2: 5, 5: 3},
    5: {4: 3, 6: 3, 1: 11},
    6: {1: 1, 3: 4, 5: 3}
  };
  
  function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const previous = {};
  
    for (const node in graph) {
      distances[node] = Infinity;
      previous[node] = null;
    }
    distances[start] = 0;
  
    while (visited.size < Object.keys(graph).length) {
      let currentNode = null;
      for (const node in distances) {
        if (!visited.has(node) && (currentNode === null || distances[node] < distances[currentNode])) {
          currentNode = node;
        }
      }
  
      visited.add(currentNode);
  
      for (const neighbor in graph[currentNode]) {
        const alt = distances[currentNode] + graph[currentNode][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = currentNode;
        }
      }
    }
  
    return { distances, previous };
  }
  
  function getPath(previous, end) {
    const path = [];
    while (end !== null) {
      path.unshift(end);
      end = previous[end];
    }
    return path;
  }
  

  const startNode = "4";
  const result = dijkstra(graph, startNode);
  
  console.log(`Найкоротші шляхи від вершини ${startNode}:`);
  for (const node in graph) {
    if (node !== startNode) {
      const path = getPath(result.previous, node);
      const distance = result.distances[node];
      console.log(`до ${node}: [${path.join(" → ")}], довжина: ${distance}`);
    }
  }
  