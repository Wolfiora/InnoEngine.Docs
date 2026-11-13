---
uid: api.86bbaa28fbd403ebe7e0460a1b7b8e170d59acdc442c74f53f3d920592e94b56
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: ddfa2b65a217e3732c1120d83babcd5083e8f9a42936bf4efc850b3fda49f170
title: "CaptureState"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures one element's logical type, neutral properties, asset dependencies and scene-reference aliases.

**Parameter `target`:** The live component or system, including a missing placeholder.

**Parameter `serialization`:** The owner's current serializer generation.

**Parameter `assets`:** The owner's complete asset resolver used during capture.

**Returns:** Neutral element bytes suitable for History and restoration without retaining the current managed type.

**Exception `T:System.ArgumentException`:** The target is not a component or system.

**Exception `T:System.InvalidOperationException`:** The element is not live in a loaded scene.
