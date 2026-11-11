---
title: "ShaderSourceField"
description: "Reference for ShaderSourceField in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.06072236b7d53a52
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceField`

This reference describes `ShaderSourceField` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c571356a4a5cfc2f) | Method |
| [`name`](#api-5d2e50c69d393c2a) | Property |
| [`type`](#api-593e9c9420b4cf22) | Property |

## Type declaration

<a id="api-06072236b7d53a52"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceField d75bb1c1659c5aa898457d5f78c55f1f34876ca4bc19f2293f4c53a1e8582247 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceField
```

Describes one immutable named structure field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L155).

## `#ctor`

<a id="api-c571356a4a5cfc2f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceField.#ctor(System.String,Inno.Rendering.Shaders.ShaderSourceType) 036dd28c931342afb0d1cf6244a5da7b14e21d4318ca19ec576bfccbd5ed06f8 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceField.ShaderSourceField(string name, Inno.Rendering.Shaders.ShaderSourceType type)
```

Creates a structure field.

**Parameter `name`:** Stable field name.

**Parameter `type`:** Complete field type.

**Throws `System.ArgumentException`:** The field has void type or is an opaque storage binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L169).

## `name`

<a id="api-5d2e50c69d393c2a"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceField.name 5081cd329ef09e56b1d3c45859608d7090a722d4f3838d6529423bf6852207e2 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceField.name { get; }
```

Gets the public field name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L182).

## `type`

<a id="api-593e9c9420b4cf22"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceField.type dbcb9a5b974081ac1155823f9d9bf6fea2aa1005c4ac49690944e6803b50b8ba -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceType Inno.Rendering.Shaders.ShaderSourceField.type { get; }
```

Gets the complete field type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L186).
