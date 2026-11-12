---
title: "MaterialPassResolver"
description: "Reference for MaterialPassResolver in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.5e39f4af5367624e
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `MaterialPassResolver`

This reference describes `MaterialPassResolver` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Resolve`](#api-3156fe7bd4b30010) | Method |
| [`Resolve`](#api-0240c38bf9ca0ec6) | Method |

## Type declaration

<a id="api-5e39f4af5367624e"></a>
<!-- api: T:InnoEngine.Rendering.MaterialPassResolver 1ea7d4a4b2a97bbbe9821150d65ac4f24f77c7cc3d758d4f44611749eb227203 -->

```csharp
public static class InnoEngine.Rendering.MaterialPassResolver
```

Resolves materials through open provider-owned shader contracts and roles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolver.cs#L16).

## `Resolve`

<a id="api-3156fe7bd4b30010"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.GraphicsCapabilities) 9b48141d0cfe3286d386f04cf1ab997ae91e1e2929a83d5da8c83bad185e81e1 -->

```csharp
public static InnoEngine.Rendering.MaterialPassResolution? InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.MaterialAsset material, InnoEngine.Rendering.ShaderContractId contractId, InnoEngine.Rendering.ShaderPassRoleId passRoleId, InnoEngine.Rendering.GraphicsCapabilities capabilities)
```

Resolves one capability-compatible pass.

**Parameter `material`:** Material whose shader and technique should be queried.

**Parameter `contractId`:** Rendering-provider contract required by the caller.

**Parameter `passRoleId`:** Provider-defined pass role required by the caller.

**Parameter `capabilities`:** Current device capability snapshot.

**Returns:** The selected technique and pass, or `null` when no compatible mapping exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolver.cs#L36).

## `Resolve`

<a id="api-0240c38bf9ca0ec6"></a>
<!-- api: M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.ShaderDefinition,InnoEngine.Rendering.ShaderTechniqueId,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.GraphicsCapabilities) 59353eef89089380b10d1e9116133fdc1901614e860157c80cbdff046d2e0411 -->

```csharp
public static InnoEngine.Rendering.MaterialPassResolution? InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.ShaderDefinition definition, InnoEngine.Rendering.ShaderTechniqueId techniqueId, InnoEngine.Rendering.ShaderContractId contractId, InnoEngine.Rendering.ShaderPassRoleId passRoleId, InnoEngine.Rendering.GraphicsCapabilities capabilities)
```

Resolves a role against an exact published shader contract rather than a possibly newer authoring asset.

**Parameter `definition`:** The immutable publication's detached material contract.

**Parameter `techniqueId`:** Explicit material technique, or an invalid ID to select the first compatible technique.

**Parameter `contractId`:** Open rendering contract required by the caller.

**Parameter `passRoleId`:** Open pass role required by the caller.

**Parameter `capabilities`:** Current target capability snapshot.

**Returns:** The matching technique and pass, or null when this publication has no compatible mapping.

**Throws `System.ArgumentException`:** A required contract or role identity is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolver.cs#L71).
