---
title: "ShaderSourceModuleAnalysis"
description: "Reference for ShaderSourceModuleAnalysis in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.ee92c35a554b1cb3
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceModuleAnalysis`

This reference describes `ShaderSourceModuleAnalysis` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b1123c2e510269f5) | Method |
| [`diagnostics`](#api-01ae78eb224a5ba0) | Property |
| [`function`](#api-b21b310e6feb3cc2) | Property |
| [`implementations`](#api-54cd783df5192eb8) | Property |
| [`succeeded`](#api-9a66da70270eb2f7) | Property |

## Type declaration

<a id="api-ee92c35a554b1cb3"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis c107eef9fd006f7c666fcb90209855ec04add7ee0e9384d398eeebf267af42d6 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis
```

Reports whether every supplied implementation and variant has the same callable graph interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L203).

## `#ctor`

<a id="api-b1123c2e510269f5"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.#ctor 0900b3d50c73dbd7b65215753cbf190498a319c6fb59a0d99349828d40ffa0f8 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.ShaderSourceModuleAnalysis()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L203).

## `diagnostics`

<a id="api-01ae78eb224a5ba0"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.diagnostics 142e7944203997514369e4863d8ced7221f2f4bf4f032488ea6a1a4aa9f697f7 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceDiagnostic> InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.diagnostics { get; }
```

Gets implementation and cross-implementation diagnostics with original source positions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L223).

## `function`

<a id="api-b21b310e6feb3cc2"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.function 36ae8a98e6f2cb1e914188246c08fc247845a8cfdb5fbae075586067565947f6 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceFunction? InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.function { get; }
```

Gets the common interface only when all supplied implementations agree and are valid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L227).

## `implementations`

<a id="api-54cd783df5192eb8"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.implementations 86f9bdc784e12e02b0689231b16bfd40c1b602c17cb0bed4e4151a3c74cd069e -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis> InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.implementations { get; }
```

Gets all implementation snapshots, including failed or unavailable implementations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L219).

## `succeeded`

<a id="api-9a66da70270eb2f7"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.succeeded 837b28204d5a5469971b94a422f4b96b0e10aff195cfdb58a9c59feae130968c -->

```csharp
public bool InnoEditor.Rendering.Shaders.ShaderSourceModuleAnalysis.succeeded { get; }
```

Gets whether interface analysis succeeded; native compilation is a separate gate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L231).
