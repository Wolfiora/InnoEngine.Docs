---
uid: api.86c1a903e9c0eed4f8e27b92675b1384a9de35f3a9ad4f540a400b22e51e473b
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneElementSerialization.RestoreState(Inno.Scene.EngineObject,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 496c18140f42adaa135dd93ef0d54cc49bfdea34e7e0400799b423f06896b514
title: "RestoreState"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Restores a captured element state into the same logical type, including neutral state on a missing placeholder.

**Parameter `target`:** The attached element receiving the state.

**Parameter `stateData`:** Bytes produced by `M:Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `serialization`:** The owner's current serializer generation.

**Parameter `assets`:** The owner's complete asset resolver.

**Exception `T:System.IO.InvalidDataException`:** The payload is invalid or represents a different logical type.

**Exception `T:System.InvalidOperationException`:** Property or reference restoration is incomplete.
