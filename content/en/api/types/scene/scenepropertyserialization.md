---
title: "ScenePropertySerialization"
description: "Reference for ScenePropertySerialization in Inno.Scene."
uid: api.inno.scene.a387628292985037
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `ScenePropertySerialization`

This reference describes `ScenePropertySerialization` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureProperties`](#api-592ddfb216dc523b) | Method |
| [`CaptureProperty`](#api-f31dff3c94bb23f9) | Method |
| [`CapturePropertySnapshots`](#api-f422f1ec31dbc12b) | Method |
| [`RestoreProperties`](#api-621563afc61f3cdb) | Method |

## Type declaration

<a id="api-a387628292985037"></a>
<!-- api: T:Inno.Scene.ScenePropertySerialization ebd629e97fc167bf41afb0dd3b9bae6e1e54c4e09e08b60faa6156f513ac9027 -->

```csharp
public static class Inno.Scene.ScenePropertySerialization
```

Captures and restores individual scene-object properties while preserving scene reference identities.

**Constraints:** Each operation borrows its owning Core identity domain and resolves current references within that scene.
Property access does not enumerate unrelated scene objects. Complete graph and prefab operations keep
their explicit frozen local-identity boundaries. Asset references retain the supplied resolver context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/ScenePropertySerialization.cs#L18).

## `CaptureProperties`

<a id="api-592ddfb216dc523b"></a>
<!-- api: M:Inno.Scene.ScenePropertySerialization.CaptureProperties(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 0dab6e7f3fb02cd0153f060a41d991aa39bb4b4886ebfce8e6cc653ee11182c5 -->

```csharp
public static byte[] Inno.Scene.ScenePropertySerialization.CaptureProperties(Inno.Scene.EngineObject target, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures all persistent properties without serializing the complete scene.

**Parameter `target`:** The live scene object whose state should be captured.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to preserve canonical asset references in captured values.

**Returns:** Neutral bytes containing independently encoded properties.

**Throws `System.ArgumentNullException`:** Thrown when `target` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the target is destroyed or not owned by a loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/ScenePropertySerialization.cs#L86).

## `CaptureProperty`

<a id="api-f31dff3c94bb23f9"></a>
<!-- api: M:Inno.Scene.ScenePropertySerialization.CaptureProperty(Inno.Scene.EngineObject,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 57661b07e4ef0874501162cb6f939ea6f266b046b90ced51a13b83abde65c0b8 -->

```csharp
public static byte[] Inno.Scene.ScenePropertySerialization.CaptureProperty(Inno.Scene.EngineObject target, string propertyName, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures one persistent property without serializing the complete scene.

**Parameter `target`:** The live scene object containing the property.

**Parameter `propertyName`:** The exact serialized member key.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to preserve canonical asset references in captured values.

**Returns:** Neutral bytes that can be restored into the same logical object identity.

**Throws `System.ArgumentNullException`:** Thrown when `target` is `null`.

**Throws `System.ArgumentException`:** Thrown when `propertyName` is empty or unknown.

**Throws `System.InvalidOperationException`:** Thrown when the target is destroyed or not owned by a loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/ScenePropertySerialization.cs#L47).

## `CapturePropertySnapshots`

<a id="api-f422f1ec31dbc12b"></a>
<!-- api: M:Inno.Scene.ScenePropertySerialization.CapturePropertySnapshots(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 52c04cf71b40dc5a9297d8eceae19a0b9f14021211d793c1c177306638005513 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Core.Serialization.SerializationPropertySnapshot> Inno.Scene.ScenePropertySerialization.CapturePropertySnapshots(Inno.Scene.EngineObject target, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures each persistent property independently while preserving scene-reference identities.

**Parameter `target`:** Live scene object whose properties should be captured.

**Parameter `serialization`:** Registry owning the active converter generation.

**Parameter `assets`:** Resolver used to preserve canonical asset references.

**Returns:** Stable ordered property snapshots suitable for compact delta comparison.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/ScenePropertySerialization.cs#L117).

## `RestoreProperties`

<a id="api-621563afc61f3cdb"></a>
<!-- api: M:Inno.Scene.ScenePropertySerialization.RestoreProperties(Inno.Scene.EngineObject,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver,Inno.Core.Serialization.SerializationPropertyRestoreMode) 135a606e48cc820aad19360482794eaeda773c67d79f84ce46d490c4ed89a7ff -->

```csharp
public static Inno.Core.Serialization.SerializationPropertyRestoreResult Inno.Scene.ScenePropertySerialization.RestoreProperties(Inno.Scene.EngineObject target, System.ReadOnlySpan<byte> data, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets, Inno.Core.Serialization.SerializationPropertyRestoreMode mode = Inno.Core.Serialization.SerializationPropertyRestoreMode.Strict)
```

Restores independently captured properties into a live scene object.

**Parameter `target`:** The current object generation receiving the values.

**Parameter `data`:** Bytes produced by `Inno.Scene.ScenePropertySerialization.CaptureProperty(Inno.Scene.EngineObject,System.String,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)` or `Inno.Scene.ScenePropertySerialization.CaptureProperties(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `mode`:** The policy applied to unavailable or mismatched current properties.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to materialize canonical asset references in restored values.

**Returns:** A summary of restored, ignored, and incompatible properties.

**Throws `System.ArgumentNullException`:** Thrown when `target` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when strict restoration fails or the target is not in a loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/ScenePropertySerialization.cs#L160).
