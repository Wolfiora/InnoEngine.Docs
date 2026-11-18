---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fa9a644eee5c61064b31a471a545729edc593c5de5d30c4666ff1b3b449dbbf6
symbol: engine:Inno.Rendering:M:Inno.Rendering.GraphicsProgramArtifactCodec.Encode(Inno.Rendering.GraphicsPipelineDescriptor)
title: GraphicsProgramArtifactCodec.Encode
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: f438a6b9d6fcf0915cfdd45254fd7ae54f4db5e3d03e1bb61b93b4d55f8affec
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
