---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fa9a644eee5c61064b31a471a545729edc593c5de5d30c4666ff1b3b449dbbf6
symbol: engine:Inno.Rendering:M:Inno.Rendering.GraphicsProgramArtifactCodec.Encode(Inno.Rendering.GraphicsPipelineDescriptor)
title: GraphicsProgramArtifactCodec.Encode
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: f46b7cd3b0c8060c977e8238858182a22854df73141338e5fcd0bfa3132ea60c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** The compiled graphics program to distribute without any asset or material metadata.

## Returns

Deterministic binary bytes owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The descriptor is null.

**Exception `T:System.IO.InvalidDataException`:** A stage, binding, or reflected name exceeds the distribution limits.
