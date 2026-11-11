---
title: "ShaderTechniquePass"
description: "Reference for ShaderTechniquePass in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.7eead97cdbd7fbef
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `ShaderTechniquePass`

This reference describes `ShaderTechniquePass` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-331dbf6a0658daca) | Method |
| [`passName`](#api-b7663bacb6910445) | Property |
| [`role`](#api-1aad22c3bc0a8082) | Property |

## Type declaration

<a id="api-7eead97cdbd7fbef"></a>
<!-- api: T:Inno.Rendering.Assets.ShaderTechniquePass 7ee3b44869676f582ded6caa3c56704ede832827b80cfa3240d4cd9136514fa1 -->

```csharp
public struct Inno.Rendering.Assets.ShaderTechniquePass
```

Maps one provider-defined role to one concrete shader pass.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L17).

## `#ctor`

<a id="api-331dbf6a0658daca"></a>
<!-- api: M:Inno.Rendering.Assets.ShaderTechniquePass.#ctor(Inno.Rendering.Assets.ShaderPassRoleId,System.String) 6e065c67fdb35a0b7f0d141f55c0523561a7028a3a81e96ff57f18838ba0ae3a -->

```csharp
public Inno.Rendering.Assets.ShaderTechniquePass.ShaderTechniquePass(Inno.Rendering.Assets.ShaderPassRoleId role, string passName)
```

Creates a technique pass mapping.

**Parameter `role`:** Open role defined by the technique contract.

**Parameter `passName`:** Concrete pass name within the shader.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L28).

## `passName`

<a id="api-b7663bacb6910445"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniquePass.passName c9ab4a298c55971e918ab94bd551f1ecd752f388f71030bc5fe4f495738800e3 -->

```csharp
public string Inno.Rendering.Assets.ShaderTechniquePass.passName { get; set; }
```

Gets or sets the concrete pass name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L47).

## `role`

<a id="api-1aad22c3bc0a8082"></a>
<!-- api: P:Inno.Rendering.Assets.ShaderTechniquePass.role b0a0ae6d028f4bdad43183f01280d5a5c8d47d64e51bd4376e4005925e5e1599 -->

```csharp
public Inno.Rendering.Assets.ShaderPassRoleId Inno.Rendering.Assets.ShaderTechniquePass.role { get; set; }
```

Gets or sets the provider-defined role.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Shaders/ShaderTechniquePass.cs#L42).
