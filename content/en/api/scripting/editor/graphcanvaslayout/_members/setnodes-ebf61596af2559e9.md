---
uid: api.ebf61596af2559e98199715d689419faf27bc6444d7c999f441b028204ecb911
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasNode})"
source: xml
reviewed: c5d142dab6918d131501657b4d26a062bafa22d15e155216c7e7cfe0a04639d5
title: "SetNodes"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Atomically replaces a complete display snapshot, reusing unchanged node geometry by value.

**Parameter `nodes`:** The current neutral node descriptions in draw order.

**Returns:** The number of inserted, changed or removed nodes. Ordering changes do not rebuild geometry.

**Exception `T:System.ArgumentNullException`:** The collection or one of its nodes is null.

**Exception `T:System.ArgumentException`:** A node identity occurs more than once; the previous snapshot remains active.
