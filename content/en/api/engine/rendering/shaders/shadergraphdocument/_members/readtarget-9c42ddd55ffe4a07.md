---
uid: api.9c42ddd55ffe4a075e54dca958674182edbf2f32ec64a1654b414b81f7b05daf
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphDocument.ReadTarget(Inno.Core.Graphs.GraphDocument,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 1694a338b5bff884146c30df90e52504c953c0611114ee94c2c590b3245eb196
title: "ReadTarget"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Reads the stable domain target assignment without resolving extension instances.

**Parameter `graph`:** Authored graph.

**Parameter `serialization`:** Current owner converters.

**Parameter `context`:** Complete owner reference context.

**Returns:** The assigned stable ID, or an empty string for generic explicit stage authoring.
