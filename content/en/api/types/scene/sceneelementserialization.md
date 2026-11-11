---
title: "SceneElementSerialization"
description: "Reference for SceneElementSerialization in Inno.Scene."
uid: api.inno.scene.079224a4ad8c5e0a
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneElementSerialization`

This reference describes `SceneElementSerialization` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureState`](#api-1be42e5528e8727f) | Method |
| [`RestoreComponent`](#api-f4815910a8f34f04) | Method |
| [`RestoreState`](#api-ca56d02111c0212a) | Method |
| [`RestoreSystem`](#api-e1478f7868f10728) | Method |

## Type declaration

<a id="api-079224a4ad8c5e0a"></a>
<!-- api: T:Inno.Scene.SceneElementSerialization 8a96c0fd657dce53a122ee7dbd1ec18ce1e9d8393f2e08ebbfb2618babaf5d4b -->

```csharp
public static class Inno.Scene.SceneElementSerialization
```

Recreates individual scene components and systems from stable type and object identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneElementSerialization.cs#L16).

## `CaptureState`

<a id="api-1be42e5528e8727f"></a>
<!-- api: M:Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 220b8f89e616b0a5b8981d931de4c2fa3091686f2f83daead61aa1950d6ace5e -->

```csharp
public static byte[] Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject target, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Captures one element's logical type, neutral properties, asset dependencies and scene-reference aliases.

**Parameter `target`:** The live component or system, including a missing placeholder.

**Parameter `serialization`:** The owner's current serializer generation.

**Parameter `assets`:** The owner's complete asset resolver used during capture.

**Returns:** Neutral element bytes suitable for History and restoration without retaining the current managed type.

**Throws `System.ArgumentException`:** The target is not a component or system.

**Throws `System.InvalidOperationException`:** The element is not live in a loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneElementSerialization.cs#L39).

## `RestoreComponent`

<a id="api-f4815910a8f34f04"></a>
<!-- api: M:Inno.Scene.SceneElementSerialization.RestoreComponent(Inno.Scene.GameObject,Inno.Extensibility.Types.TypeRef,System.Guid,System.Int32,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 74c7813881aaa686fb1fc1b9180d6902a6b1f53e84a813dff9b55600bb1cc00e -->

```csharp
public static Inno.Scene.GameComponent Inno.Scene.SceneElementSerialization.RestoreComponent(Inno.Scene.GameObject owner, Inno.Extensibility.Types.TypeRef type, System.Guid persistentId, int componentIndex, System.ReadOnlySpan<byte> stateData, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Recreates one component without invoking Reset and restores its persistent properties.

**Parameter `owner`:** The live GameObject that will own the component.

**Parameter `type`:** The reload-safe identity of the current component implementation.

**Parameter `persistentId`:** The component instance identity to preserve.

**Parameter `componentIndex`:** The requested attachment index.

**Parameter `stateData`:** Complete neutral element bytes produced by CaptureState, including missing-state metadata.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to materialize canonical asset references in restored properties.

**Returns:** The recreated component, or a preserved missing placeholder when its logical type is unavailable.

**Throws `System.ArgumentNullException`:** Thrown when `owner` is `null`.

**Throws `System.IO.InvalidDataException`:** Thrown when the payload is invalid or the stable type resolves to an incompatible component.

**Throws `System.InvalidOperationException`:** Thrown when the identity or component multiplicity conflicts, property restoration is incomplete,
or a failed restoration cannot remove its partially created component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneElementSerialization.cs#L166).

## `RestoreState`

<a id="api-ca56d02111c0212a"></a>
<!-- api: M:Inno.Scene.SceneElementSerialization.RestoreState(Inno.Scene.EngineObject,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 58b671e7d1fc612c24a71d88a7e0c05c900384935b7fda47c286086ac56485e7 -->

```csharp
public static void Inno.Scene.SceneElementSerialization.RestoreState(Inno.Scene.EngineObject target, System.ReadOnlySpan<byte> stateData, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Restores a captured element state into the same logical type, including neutral state on a missing placeholder.

**Parameter `target`:** The attached element receiving the state.

**Parameter `stateData`:** Bytes produced by `Inno.Scene.SceneElementSerialization.CaptureState(Inno.Scene.EngineObject,Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver)`.

**Parameter `serialization`:** The owner's current serializer generation.

**Parameter `assets`:** The owner's complete asset resolver.

**Throws `System.IO.InvalidDataException`:** The payload is invalid or represents a different logical type.

**Throws `System.InvalidOperationException`:** Property or reference restoration is incomplete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneElementSerialization.cs#L101).

## `RestoreSystem`

<a id="api-e1478f7868f10728"></a>
<!-- api: M:Inno.Scene.SceneElementSerialization.RestoreSystem(Inno.Scene.GameScene,Inno.Extensibility.Types.TypeRef,System.Guid,System.Int32,System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 824c11ade5cd7953aa27c6b7d685c92c60a4d62f65c11833ba380b2f762e9a17 -->

```csharp
public static Inno.Scene.GameSystem Inno.Scene.SceneElementSerialization.RestoreSystem(Inno.Scene.GameScene scene, Inno.Extensibility.Types.TypeRef type, System.Guid persistentId, int systemIndex, System.ReadOnlySpan<byte> stateData, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Recreates one scene system without invoking Reset and restores its persistent properties.

**Parameter `scene`:** The live loaded scene that will own the system.

**Parameter `type`:** The reload-safe identity of the current system implementation.

**Parameter `persistentId`:** The system instance identity to preserve.

**Parameter `systemIndex`:** The requested display and serialization index.

**Parameter `stateData`:** Complete neutral element bytes produced by CaptureState, including missing-state metadata.

**Parameter `serialization`:** The serialization registry that owns the active converter generation.

**Parameter `assets`:** The resolver used to materialize canonical asset references in restored properties.

**Returns:** The recreated system, or a preserved missing placeholder when its logical type is unavailable.

**Throws `System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Throws `System.IO.InvalidDataException`:** Thrown when the payload is invalid or the stable type resolves to an incompatible system.

**Throws `System.InvalidOperationException`:** Thrown when the identity or system multiplicity conflicts, property restoration is incomplete,
or a failed restoration cannot remove its partially created system.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Serialization/SceneElementSerialization.cs#L239).
