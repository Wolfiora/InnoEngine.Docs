---
title: "ShaderTechniquePass"
description: "Reference for ShaderTechniquePass in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.9029b46bce9b6a9d
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `ShaderTechniquePass`

This reference describes `ShaderTechniquePass` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b0d49c5d78604a25) | Method |
| [`passName`](#api-72fdd3f79a8c30e6) | Property |
| [`role`](#api-25aedaab12314a07) | Property |

## Type declaration

<a id="api-9029b46bce9b6a9d"></a>
<!-- api: T:InnoEngine.Rendering.ShaderTechniquePass a8630dfd8a517ca65c68d8c9134a06875de5f19b12977cb7196973de1a25a3f6 -->

```csharp
public struct InnoEngine.Rendering.ShaderTechniquePass
```

Maps one provider-defined role to one concrete shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L17).

## `#ctor`

<a id="api-b0d49c5d78604a25"></a>
<!-- api: M:InnoEngine.Rendering.ShaderTechniquePass.#ctor(InnoEngine.Rendering.ShaderPassRoleId,System.String) 4116806f344918563656eaffe9289a60cfce4b0b67bc6646b5a8a1f22fad1b57 -->

```csharp
public InnoEngine.Rendering.ShaderTechniquePass.ShaderTechniquePass(InnoEngine.Rendering.ShaderPassRoleId role, string passName)
```

Creates a technique pass mapping.

**Parameter `role`:** Open role defined by the technique contract.

**Parameter `passName`:** Concrete pass name within the shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L28).

## `passName`

<a id="api-72fdd3f79a8c30e6"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniquePass.passName 3c0ab12317ded8158c9bd4b69eeb3a93feb4b02b091b831ab2ea0e9dae5895b7 -->

```csharp
public string InnoEngine.Rendering.ShaderTechniquePass.passName { get; set; }
```

Gets or sets the concrete pass name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L47).

## `role`

<a id="api-25aedaab12314a07"></a>
<!-- api: P:InnoEngine.Rendering.ShaderTechniquePass.role eec465580cc63db7744fb115e5be534d3531a81b88c258c6a93459437d259752 -->

```csharp
public InnoEngine.Rendering.ShaderPassRoleId InnoEngine.Rendering.ShaderTechniquePass.role { get; set; }
```

Gets or sets the provider-defined role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L42).
