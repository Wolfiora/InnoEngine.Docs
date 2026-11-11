---
title: "ShaderSourceModuleAnalysis"
description: "Reference for ShaderSourceModuleAnalysis in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.2fb52372a10297e6
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceModuleAnalysis`

This reference describes `ShaderSourceModuleAnalysis` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`diagnostics`](#api-d9bcf213e17bc87e) | Property |
| [`function`](#api-0a034b9793fe6864) | Property |
| [`implementations`](#api-d1e77ec7be0e348f) | Property |
| [`succeeded`](#api-b252d38e242eb90f) | Property |

## Type declaration

<a id="api-2fb52372a10297e6"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceModuleAnalysis 82ff4e5380f9b798a9b0c7e63d064b21faf80d609d696934a8c47060d3f720f8 -->

```csharp
public sealed class Inno.Rendering.Shaders.ShaderSourceModuleAnalysis
```

Reports whether every supplied implementation and variant has the same callable graph interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L203).

## `diagnostics`

<a id="api-d9bcf213e17bc87e"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.diagnostics 51c8066234ee11bd7bf96a4c8027ab3032c5e294e22919b433a8fe1e021d59af -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceDiagnostic> Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.diagnostics { get; }
```

Gets implementation and cross-implementation diagnostics with original source positions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L223).

## `function`

<a id="api-0a034b9793fe6864"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.function 6992e87dc2b93116d6a50d7abf2a104abfbd85a7112473fbd6e2e8b3ebcf551f -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceFunction? Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.function { get; }
```

Gets the common interface only when all supplied implementations agree and are valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L227).

## `implementations`

<a id="api-d1e77ec7be0e348f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.implementations f3e96ffa34c5793d55b5236b5769d814dbd92aaff4bfe3485ee93257c0056617 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceImplementationAnalysis> Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.implementations { get; }
```

Gets all implementation snapshots, including failed or unavailable implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L219).

## `succeeded`

<a id="api-b252d38e242eb90f"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.succeeded f6869c52261ed50e3e0d477976e3a11273cb745a87ffe60b6dcf54fa00833d57 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceModuleAnalysis.succeeded { get; }
```

Gets whether interface analysis succeeded; native compilation is a separate gate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L231).
