---
uid: api.bc1e0bad9b3eaab729d14d2470ca6979cf7bc63c86a201ae70c14534d09d5b9b
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Encode(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,System.Byte[]},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Graphs.GraphDocument)"
source: xml
reviewed: 85ed45d96c73590bc2ca77090fff875bb5474fe652ec71afaf8cb6511313fe52
title: "ShaderGraphArtifact.Encode"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Captures one native immutable graph import candidate.

**Parameter `graph`:** Authored graph with original node and port identities.

**Parameter `sources`:** Frozen function bundles keyed by source node identity.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `program`:** Target-expanded explicit stages, or null when the authored graph already contains them.

**Returns:** Deterministic authoring artifact bytes without live objects.
