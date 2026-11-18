---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.86bbaa28fbd403ebe7e0460a1b7b8e170d59acdc442c74f53f3d920592e94b56
symbol: engine:Inno.Scene:M:Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneElementSerialization.CaptureState
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: e8c295b547f698407e6c08e8663c992a65a1664c86505a60281e153dd038e96a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The live component or system, including a missing placeholder.

**Parameter `serialization`:** The owner's current serializer generation.

**Parameter `assets`:** The owner's complete asset resolver used during capture.

## Returns

Neutral element bytes suitable for History and restoration without retaining the current managed type.

## Exceptions

**Exception `T:System.ArgumentException`:** The target is not a component or system.

**Exception `T:System.InvalidOperationException`:** The element is not live in a loaded scene.
