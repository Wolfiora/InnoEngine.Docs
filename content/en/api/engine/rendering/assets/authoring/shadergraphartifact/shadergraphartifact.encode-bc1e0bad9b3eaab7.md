---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bc1e0bad9b3eaab729d14d2470ca6979cf7bc63c86a201ae70c14534d09d5b9b
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Encode(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,System.Byte[]},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Graphs.GraphDocument)
title: ShaderGraphArtifact.Encode
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
sourceFingerprint: 9036c31c80eb352d62d536cc82b40b1bd22ce8854d08d30e56c0d44d8013deb8
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
