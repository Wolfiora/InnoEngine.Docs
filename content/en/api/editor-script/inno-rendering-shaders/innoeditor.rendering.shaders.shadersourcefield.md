---
title: "ShaderSourceField"
description: "Reference for ShaderSourceField in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.838a5b2b6f33c72f
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceField`

This reference describes `ShaderSourceField` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-af372202f956eba3) | Method |
| [`name`](#api-275ac724d6a72e9d) | Property |
| [`type`](#api-90f7ecb510252600) | Property |

## Type declaration

<a id="api-838a5b2b6f33c72f"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceField e709c1c3299e1589d518ce4ef7d20311fd78aa60680e1582ac2c1e71eb3058a3 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceField
```

Describes one immutable named structure field.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L155).

## `#ctor`

<a id="api-af372202f956eba3"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceField.#ctor(System.String,InnoEditor.Rendering.Shaders.ShaderSourceType) 65f182cc8d726bbe90cdcd47f033fa8c28c08d8b6a9fda65f2e0b9eb2e4fa963 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceField.ShaderSourceField(string name, InnoEditor.Rendering.Shaders.ShaderSourceType type)
```

Creates a structure field.

**Parameter `name`:** Stable field name.

**Parameter `type`:** Complete field type.

**Throws `System.ArgumentException`:** The field has void type or is an opaque storage binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L169).

## `name`

<a id="api-275ac724d6a72e9d"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceField.name 67ae095e4a4f7569d04336790e62dd11fac83f238b14ff707328e7f10de935c4 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceField.name { get; }
```

Gets the public field name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L182).

## `type`

<a id="api-90f7ecb510252600"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceField.type 83509a6574603a062e5b5be5289e14935bd4e4c8330bcb0dae9c72e6da5f19f8 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceType InnoEditor.Rendering.Shaders.ShaderSourceField.type { get; }
```

Gets the complete field type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceType.cs#L186).
