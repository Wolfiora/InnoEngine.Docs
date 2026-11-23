---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5d014f30c3bb5d9735484c7349be5a376ab68e6d9491a68ab04be3abe218457a
symbol: engine:Inno.Scene:M:Inno.Scene.ScenePropertySerialization.RestoreProperties(Inno.Scene.EngineObject,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver,Inno.Core.Serialization.SerializationPropertyRestoreMode)
title: ScenePropertySerialization.RestoreProperties
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 2fb02f08bc535405df8e71bb301ae629da1120e59e8732f13fd1623e854640aa
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The current object generation receiving the values.

**Parameter `data`:** Bytes produced by `M:Inno.Scene.ScenePropertySerialization.CaptureProperty(Inno.Scene.EngineObject,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)` or `M:Inno.Scene.ScenePropertySerialization.CaptureProperties(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to materialize canonical asset references in restored values.

**Parameter `mode`:** The policy applied to unavailable or mismatched current properties.

## Returns

A summary of restored, ignored, and incompatible properties.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when strict restoration fails or the target is not in a loaded scene.
