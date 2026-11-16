---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.86c1a903e9c0eed4f8e27b92675b1384a9de35f3a9ad4f540a400b22e51e473b
symbol: engine:Inno.Scene:M:Inno.Scene.SceneElementSerialization.RestoreState(Inno.Scene.EngineObject,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneElementSerialization.RestoreState
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 75596190ffbbd21a1fe8b9cacd029c4928ced32e3b1a9367dbf4218c7e6cf32b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The attached element receiving the state.

**Parameter `stateData`:** Bytes produced by `M:Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `serialization`:** The owner's current serializer generation.

**Parameter `assets`:** The owner's complete asset resolver.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The payload is invalid or represents a different logical type.

**Exception `T:System.InvalidOperationException`:** Property or reference restoration is incomplete.
