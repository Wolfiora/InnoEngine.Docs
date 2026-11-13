---
uid: api.4ba14e5e334b16cb38c8a8c12537b53d99486b7663ace2a1ca2da355d1e48b96
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Decode(System.ReadOnlySpan{System.Byte},System.String,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: 065809d93a24630aa58503ec5cf97c2af6c3b43a829bcc4290e05e703b57818c
title: "Decode"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Restores requests whose resolvers can access only the captured files and edges.

**Parameter `bytes`:** Current native authoring artifact.

**Parameter `function`:** Exact exported function selected by the graph node.

**Parameter `serialization`:** Native converter registry.

**Parameter `defines`:** Additional target/variant definitions; conflicting recorded values are rejected.

**Returns:** Detached requests without filesystem access or old-generation provider references.
