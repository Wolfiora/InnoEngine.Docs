---
uid: api.d730d22fd149164b6c591fc7a0e0986647d9088a07f94cfeb8d21a21cfd2f42b
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneSubtreeSerialization.Capture(Inno.Scene.GameObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)"
source: xml
reviewed: 24a63830c9715d11fb4c33ef6d493d5f6a9d82e5a2501439cdda54663bbae242
title: "SceneSubtreeSerialization.Capture"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Captures one live GameObject and all descendants without serializing unrelated scene objects.

## Parameters

**Parameter `root`:** The live subtree root.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The asset-reference resolver used to encode referenced asset identities.

## Returns

Neutral bytes containing the subtree structure, components, properties, and identity references.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `root` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the root is destroyed or detached.
