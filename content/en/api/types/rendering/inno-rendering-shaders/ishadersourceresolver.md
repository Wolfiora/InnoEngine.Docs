---
title: "IShaderSourceResolver"
description: "Reference for IShaderSourceResolver in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.6187b4034cd4ddd5
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `IShaderSourceResolver`

This reference describes `IShaderSourceResolver` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`ReadInclude`](#api-dee207d9ff3966bf) | Method |

## Type declaration

<a id="api-6187b4034cd4ddd5"></a>
<!-- api: T:Inno.Rendering.Shaders.IShaderSourceResolver 3abc2f5eac8dba26e193c4506788c9d2312be102ad9257e3d47551c341e2ee7a -->

```csharp
public interface Inno.Rendering.Shaders.IShaderSourceResolver
```

Reads dependencies only from the current source candidate and records their import dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L65).

## `ReadInclude`

<a id="api-dee207d9ff3966bf"></a>
<!-- api: M:Inno.Rendering.Shaders.IShaderSourceResolver.ReadInclude(System.String,System.String) 46077455d82c70ccfe32a5e92ec55a7fc1e5b0e83348b839cf68120663f66d87 -->

```csharp
Inno.Rendering.Shaders.ShaderSourceFile Inno.Rendering.Shaders.IShaderSourceResolver.ReadInclude(string includingFile, string include)
```

Resolves and reads an include without bypassing asset mount permissions.

**Parameter `includingFile`:** Resolved path of the including source.

**Parameter `include`:** Source-local include spelling.

**Returns:** A resolved immutable source snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L79).
