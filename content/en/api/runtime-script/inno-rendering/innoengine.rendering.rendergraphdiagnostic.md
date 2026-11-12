---
title: "RenderGraphDiagnostic"
description: "Reference for RenderGraphDiagnostic in Inno.Rendering."
uid: api.inno.rendering.runtime-script.13e2f336b5619eb7
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderGraphDiagnostic`

This reference describes `RenderGraphDiagnostic` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-279dff293168f285) | Method |
| [`code`](#api-36a6247c53cae5f3) | Property |
| [`message`](#api-c6e016e9ea159bdf) | Property |
| [`passName`](#api-6bacbe920a6ba3d7) | Property |
| [`resourceName`](#api-2d0ab99b3ede4746) | Property |
| [`severity`](#api-6142816f4ac9b993) | Property |

## Type declaration

<a id="api-13e2f336b5619eb7"></a>
<!-- api: T:InnoEngine.Rendering.RenderGraphDiagnostic d595744e56871d5ee057fedf2bdac9db0ee9fbf718802b6cc19969c8d8254dc4 -->

```csharp
public sealed class InnoEngine.Rendering.RenderGraphDiagnostic
```

Reports one structured render-graph compilation problem.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L162).

## `#ctor`

<a id="api-279dff293168f285"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphDiagnostic.#ctor(System.String,System.String,InnoEngine.Diagnostics.DiagnosticSeverity,System.String,System.String) c9761dba47ee93fe73d586b51bf59c4927dfa29cf7097b25b92afdb2a73bc09b -->

```csharp
public InnoEngine.Rendering.RenderGraphDiagnostic.RenderGraphDiagnostic(string code, string message, InnoEngine.Diagnostics.DiagnosticSeverity severity, string? passName = null, string? resourceName = null)
```

Creates a render-graph diagnostic.

**Parameter `code`:** Stable machine-readable code.

**Parameter `message`:** Actionable diagnostic text.

**Parameter `severity`:** Diagnostic impact.

**Parameter `passName`:** Optional related pass name.

**Parameter `resourceName`:** Optional related resource name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L182).

## `code`

<a id="api-36a6247c53cae5f3"></a>
<!-- api: P:InnoEngine.Rendering.RenderGraphDiagnostic.code 166e14a068f17df4a699dfac34d5b253d5b4592631780a110f032c881e6a9767 -->

```csharp
public string InnoEngine.Rendering.RenderGraphDiagnostic.code { get; }
```

Gets the stable machine-readable code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L201).

## `message`

<a id="api-c6e016e9ea159bdf"></a>
<!-- api: P:InnoEngine.Rendering.RenderGraphDiagnostic.message 0ac662fd633fceb87a61014805bb6b19650b1b512c908129d356c07072cbf459 -->

```csharp
public string InnoEngine.Rendering.RenderGraphDiagnostic.message { get; }
```

Gets actionable diagnostic text.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L206).

## `passName`

<a id="api-6bacbe920a6ba3d7"></a>
<!-- api: P:InnoEngine.Rendering.RenderGraphDiagnostic.passName 4d8e2fcf463be19a521bd35e106198899c9a7fc25e45f5fde9af1dd2d139a44c -->

```csharp
public string? InnoEngine.Rendering.RenderGraphDiagnostic.passName { get; }
```

Gets the related pass name, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L216).

## `resourceName`

<a id="api-2d0ab99b3ede4746"></a>
<!-- api: P:InnoEngine.Rendering.RenderGraphDiagnostic.resourceName bf73295e4aeb488ce3841b1aade1e39c12c8ce9ba7f10898d658a8e24b26a3b5 -->

```csharp
public string? InnoEngine.Rendering.RenderGraphDiagnostic.resourceName { get; }
```

Gets the related resource name, if any.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L221).

## `severity`

<a id="api-6142816f4ac9b993"></a>
<!-- api: P:InnoEngine.Rendering.RenderGraphDiagnostic.severity e420f37c83bebee43b29213764675b9cbf1e0f299831bc42f1dad3ffa34b6291 -->

```csharp
public InnoEngine.Diagnostics.DiagnosticSeverity InnoEngine.Rendering.RenderGraphDiagnostic.severity { get; }
```

Gets diagnostic impact.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphTypes.cs#L211).
