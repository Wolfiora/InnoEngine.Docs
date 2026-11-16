---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bc1e0bad9b3eaab729d14d2470ca6979cf7bc63c86a201ae70c14534d09d5b9b
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Encode(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,System.Byte[]},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Graphs.GraphDocument)
title: ShaderGraphArtifact.Encode
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
reviewed: 4a00589a1562e4aad12ad6a906867ffa94c72250c495e9e4e2a645c085ffe4d0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `graph`:** Authored graph with original node and port identities.

**Parameter `sources`:** Frozen function bundles keyed by source node identity.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `program`:** Target-expanded explicit stages, or null when the authored graph already contains them.

## Returns

Deterministic authoring artifact bytes without live objects.
