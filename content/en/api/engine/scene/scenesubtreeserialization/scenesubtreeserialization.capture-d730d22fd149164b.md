---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d730d22fd149164b6c591fc7a0e0986647d9088a07f94cfeb8d21a21cfd2f42b
symbol: engine:Inno.Scene:M:Inno.Scene.SceneSubtreeSerialization.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)
title: SceneSubtreeSerialization.Capture
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 46f29c679a17f26e4d0dd75f4d7830651711b210140570ec82eff6caa4da6d5f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The live subtree root.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The asset-reference resolver used to encode referenced asset identities.

## Returns

Neutral bytes containing the subtree structure, components, properties, and identity references.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `root` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the root is destroyed or detached.
