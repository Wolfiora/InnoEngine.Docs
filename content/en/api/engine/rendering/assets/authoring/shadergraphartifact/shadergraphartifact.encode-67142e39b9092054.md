---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.67142e39b909205432901b123bc4ccf19ca2bb0e0f20857f67df1be51b559cf6
symbol: engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Encode(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeID,System.Byte[]},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Graphs.GraphDocument)
title: ShaderGraphArtifact.Encode
kind: api
owners:
- Inno.Rendering.Assets.Authoring
apiSurface: source-clr
sourceFingerprint: 3f77fb24ab963c0c89019963aadd5db6083801cb0a415abb6d9841e19ca5208c
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
