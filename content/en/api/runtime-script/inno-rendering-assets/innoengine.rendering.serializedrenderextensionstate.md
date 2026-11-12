---
title: "SerializedRenderExtensionState"
description: "Reference for SerializedRenderExtensionState in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.4a9434e5fbb4a67f
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `SerializedRenderExtensionState`

This reference describes `SerializedRenderExtensionState` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e173724f26c2f2cd) | Method |
| [`#ctor`](#api-d13c78e29a1f3142) | Method |
| [`dependencies`](#api-4e48adaf2fc4c9b0) | Property |
| [`propertyData`](#api-06c514fa0e32ec42) | Property |
| [`stableTypeId`](#api-fa515875c9b07f3a) | Property |

## Type declaration

<a id="api-4a9434e5fbb4a67f"></a>
<!-- api: T:InnoEngine.Rendering.SerializedRenderExtensionState b34aebc6d9d7ffafb8d6d4822b58ff08fc1584a1bbfd8c93768b1366d08eea31 -->

```csharp
public struct InnoEngine.Rendering.SerializedRenderExtensionState
```

Stores reload-safe configuration for one pipeline or feature extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L16).

## `#ctor`

<a id="api-e173724f26c2f2cd"></a>
<!-- api: M:InnoEngine.Rendering.SerializedRenderExtensionState.#ctor(InnoEngine.Assets.AssetPropertySnapshot) ed580b01607f88fe48cec41cda7bdf77d3b8c967091c688f4fb35781bef7bc41 -->

```csharp
public InnoEngine.Rendering.SerializedRenderExtensionState.SerializedRenderExtensionState(InnoEngine.Assets.AssetPropertySnapshot properties)
```

Copies an owner-captured property snapshot, preserving its automatic resource dependency declarations.

**Parameter `properties`:** Complete neutral properties produced by the asset authoring services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L51).

## `#ctor`

<a id="api-d13c78e29a1f3142"></a>
<!-- api: M:InnoEngine.Rendering.SerializedRenderExtensionState.#ctor(System.Guid,System.ReadOnlySpan{System.Byte}) f18f054f844d03fc4dcc76d5bc6880adc61184dbf02160934db75df21f2755e2 -->

```csharp
public InnoEngine.Rendering.SerializedRenderExtensionState.SerializedRenderExtensionState(System.Guid stableTypeId, System.ReadOnlySpan<byte> propertyData)
```

Creates immutable extension state from stable identity and property bytes.

**Parameter `stableTypeId`:** Stable type identity, or empty when the extension has no typed settings.

**Parameter `propertyData`:** Neutral native property bytes produced by asset serialization. Use the snapshot constructor when settings reference assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L36).

## `dependencies`

<a id="api-4e48adaf2fc4c9b0"></a>
<!-- api: P:InnoEngine.Rendering.SerializedRenderExtensionState.dependencies b95acfe0c88b21987ff646ca8f07a7b63cf31234e123c585ce1939182d1fe223 -->

```csharp
public InnoEngine.Assets.AssetDependency[] InnoEngine.Rendering.SerializedRenderExtensionState.dependencies { get; set; }
```

Gets or sets asset dependencies captured with the neutral property payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L75).

## `propertyData`

<a id="api-06c514fa0e32ec42"></a>
<!-- api: P:InnoEngine.Rendering.SerializedRenderExtensionState.propertyData 57b75f02e8a2148ec2b087ab95e95067c1e18a0eec5410ccc7aa37ddf9cce97a -->

```csharp
public byte[] InnoEngine.Rendering.SerializedRenderExtensionState.propertyData { get; set; }
```

Gets or sets neutral serialized property bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L69).

## `stableTypeId`

<a id="api-fa515875c9b07f3a"></a>
<!-- api: P:InnoEngine.Rendering.SerializedRenderExtensionState.stableTypeId 917b2d31fb37f514d82169089d40e9d21cb031a48d642d3c4a5b4db77d2aff1f -->

```csharp
public System.Guid InnoEngine.Rendering.SerializedRenderExtensionState.stableTypeId { get; set; }
```

Gets or sets the stable settings type identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/SerializedRenderExtensionState.cs#L63).
