---
title: "IViewContentCollector"
description: "Reference for IViewContentCollector in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.e085b7fe52c60ff2
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IViewContentCollector`

This reference describes `IViewContentCollector` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Collect`](#api-c850dc9bce7c0e78) | Method |

## Type declaration

<a id="api-e085b7fe52c60ff2"></a>
<!-- api: T:InnoEngine.Rendering.IViewContentCollector a623cb0f5d88cc5876c9111186dc465debb52430e6de95a4593d2ab69199b559 -->

```csharp
public interface InnoEngine.Rendering.IViewContentCollector
```

Collects all active world-content sources for one exact view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L428).

## `Collect`

<a id="api-c850dc9bce7c0e78"></a>
<!-- api: M:InnoEngine.Rendering.IViewContentCollector.Collect(InnoEngine.Rendering.ViewContentContext) 8df53374273bdb21ae784109a6b4937cf147d8a694e9eba2ac64283e71583a35 -->

```csharp
System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.ViewContentItem> InnoEngine.Rendering.IViewContentCollector.Collect(InnoEngine.Rendering.ViewContentContext context)
```

Collects active source items in deterministic source order.

**Parameter `context`:** Frame-scoped host content and view.

**Returns:** Frame-local items; the caller owns their sort and composition.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L439).
