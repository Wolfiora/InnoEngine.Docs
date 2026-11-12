---
title: "RenderStorageAccess"
description: "Reference for RenderStorageAccess in Inno.Rendering."
uid: api.inno.rendering.runtime-script.4fdba2412ec0b4f0
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderStorageAccess`

This reference describes `RenderStorageAccess` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Read`](#api-18e4cb64876d8d5d) | Field |
| [`ReadWrite`](#api-c820f22a79e7b309) | Field |
| [`Write`](#api-6ab3ae6a8a28372b) | Field |

## Type declaration

<a id="api-4fdba2412ec0b4f0"></a>
<!-- api: T:InnoEngine.Rendering.RenderStorageAccess 1c93d1707ec9a3714fa7fbcebaafe9580e0e3d53f7f6575779802667c09980dc -->

```csharp
public enum InnoEngine.Rendering.RenderStorageAccess : int
```

Selects unordered storage-resource access for one shader binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L52).

## `Read`

<a id="api-18e4cb64876d8d5d"></a>
<!-- api: F:InnoEngine.Rendering.RenderStorageAccess.Read b1e94a6ee964cd438354c3ea9fcbdd426ad92df750bd769cb7578b3372ad06fe -->

```csharp
InnoEngine.Rendering.RenderStorageAccess.Read = 0
```

Shader read-only access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L57).

## `ReadWrite`

<a id="api-c820f22a79e7b309"></a>
<!-- api: F:InnoEngine.Rendering.RenderStorageAccess.ReadWrite f00ed8e098cde6e2785b0e3799ecb5babfd689adcf6d4cb5ba539f55c2b9a449 -->

```csharp
InnoEngine.Rendering.RenderStorageAccess.ReadWrite = 2
```

Shader read and write access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L65).

## `Write`

<a id="api-6ab3ae6a8a28372b"></a>
<!-- api: F:InnoEngine.Rendering.RenderStorageAccess.Write c59c9a5d768c8b13ad6f19726fabb344e8ab942189e1dd2242146457b86ff0e1 -->

```csharp
InnoEngine.Rendering.RenderStorageAccess.Write = 1
```

Shader write-only access.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderShaderBindingDescriptor.cs#L61).
