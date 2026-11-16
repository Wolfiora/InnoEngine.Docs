---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.357ce9d0546a0706c2c20f144d63f35ae45bcf302823b6a75c9afe2b8a7d5489
symbol: engine:Inno.Scene:M:Inno.Scene.ScenePropertySerialization.CaptureProperties(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: ScenePropertySerialization.CaptureProperties
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 5cf776a15e155bcffdab5a9a0ef6b2bd9cce9879a7f12983220e8e1e69de35b6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The live scene object whose state should be captured.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to preserve canonical asset references in captured values.

## Returns

Neutral bytes containing independently encoded properties.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `target` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the target is destroyed or not owned by a loaded scene.
