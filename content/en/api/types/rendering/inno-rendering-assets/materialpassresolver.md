---
title: "MaterialPassResolver"
description: "Reference for MaterialPassResolver in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.cf4aaa51e1b3cada
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `MaterialPassResolver`

This reference describes `MaterialPassResolver` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Resolve`](#api-8f317896cc563bf5) | Method |
| [`Resolve`](#api-df3f2e6378bd20e7) | Method |

## Type declaration

<a id="api-cf4aaa51e1b3cada"></a>
<!-- api: T:Inno.Rendering.Assets.MaterialPassResolver 9dfc972964639be68e9bb7a31992b41d20543d84d21f9d9f14e2d3918722ddc9 -->

```csharp
public static class Inno.Rendering.Assets.MaterialPassResolver
```

Resolves materials through open provider-owned shader contracts and roles.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolver.cs#L16).

## `Resolve`

<a id="api-8f317896cc563bf5"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.GraphicsCapabilities) 211a20a45dbca1172d09d0360cf6d5173b1c5d4087c2c5e5825d3c427b3f62f1 -->

```csharp
public static Inno.Rendering.Assets.MaterialPassResolution? Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.MaterialAsset material, Inno.Rendering.Assets.ShaderContractId contractId, Inno.Rendering.Assets.ShaderPassRoleId passRoleId, Inno.Rendering.GraphicsCapabilities capabilities)
```

Resolves one capability-compatible pass.

**Parameter `material`:** Material whose shader and technique should be queried.

**Parameter `contractId`:** Rendering-provider contract required by the caller.

**Parameter `passRoleId`:** Provider-defined pass role required by the caller.

**Parameter `capabilities`:** Current device capability snapshot.

**Returns:** The selected technique and pass, or `null` when no compatible mapping exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolver.cs#L36).

## `Resolve`

<a id="api-df3f2e6378bd20e7"></a>
<!-- api: M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.Assets.ShaderTechniqueId,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.GraphicsCapabilities) 4e5c2090d5307563d94e90b53359f0395baef7b770171a873d8af6b4b40b4126 -->

```csharp
public static Inno.Rendering.Assets.MaterialPassResolution? Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.ShaderDefinition definition, Inno.Rendering.Assets.ShaderTechniqueId techniqueId, Inno.Rendering.Assets.ShaderContractId contractId, Inno.Rendering.Assets.ShaderPassRoleId passRoleId, Inno.Rendering.GraphicsCapabilities capabilities)
```

Resolves a role against an exact published shader contract rather than a possibly newer authoring asset.

**Parameter `definition`:** The immutable publication's detached material contract.

**Parameter `techniqueId`:** Explicit material technique, or an invalid ID to select the first compatible technique.

**Parameter `contractId`:** Open rendering contract required by the caller.

**Parameter `passRoleId`:** Open pass role required by the caller.

**Parameter `capabilities`:** Current target capability snapshot.

**Returns:** The matching technique and pass, or null when this publication has no compatible mapping.

**Throws `System.ArgumentException`:** A required contract or role identity is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Materials/MaterialPassResolver.cs#L71).
