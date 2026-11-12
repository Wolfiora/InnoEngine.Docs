---
title: "RenderGraphNameScope"
description: "Reference for RenderGraphNameScope in Inno.Rendering."
uid: api.inno.rendering.runtime-script.fa3bce39302b77de
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderGraphNameScope`

This reference describes `RenderGraphNameScope` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-039f5a12da30f782) | Method |
| [`Dispose`](#api-843b20b61470a190) | Method |

## Type declaration

<a id="api-fa3bce39302b77de"></a>
<!-- api: T:InnoEngine.Rendering.RenderGraphNameScope b24d64bad232f5e36de5b6e36895d9730423ef0c9dc28e8b6ae32d213973ff16 -->

```csharp
public sealed class InnoEngine.Rendering.RenderGraphNameScope : System.IDisposable
```

Owns one nested diagnostic-name prefix in a render graph builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphNameScope.cs#L9).

## `#ctor`

<a id="api-039f5a12da30f782"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphNameScope.#ctor 85fa3923e1b3f22db3b41de735f5bdfb68bf5a211017003b937d1f5bb61ed057 -->

```csharp
public InnoEngine.Rendering.RenderGraphNameScope.RenderGraphNameScope()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphNameScope.cs#L9).

## `Dispose`

<a id="api-843b20b61470a190"></a>
<!-- api: M:InnoEngine.Rendering.RenderGraphNameScope.Dispose 8b48b128ef4690e2dd4c9076c2f64a1ab11bf31c317d48fa3b5f608d93cef86e -->

```csharp
public void InnoEngine.Rendering.RenderGraphNameScope.Dispose()
```

Ends the name prefix scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/RenderGraphNameScope.cs#L25).
