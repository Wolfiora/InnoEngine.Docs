---
title: "IViewContentSource"
description: "Reference for IViewContentSource in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.runtime-script.b93217f4ecc16c24
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: runtime-script
contracts:
  - project.inno-rendering-runtime
  - manual.scripting.use-script-api
---
# `IViewContentSource`

This reference describes `IViewContentSource` in `Inno.Rendering.Runtime`. Read the [shared contract](../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Collect`](#api-41d317815f1c03c1) | Method |

## Type declaration

<a id="api-b93217f4ecc16c24"></a>
<!-- api: T:InnoEngine.Rendering.IViewContentSource 98738dd6f40ac0584fa498f2ee964a28677d290943497896d6816ec52018aa09 -->

```csharp
public interface InnoEngine.Rendering.IViewContentSource : System.IDisposable
```

Contributes model-independent world items to selected views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L367).

## `Collect`

<a id="api-41d317815f1c03c1"></a>
<!-- api: M:InnoEngine.Rendering.IViewContentSource.Collect(InnoEngine.Rendering.ViewContentContext,InnoEngine.Rendering.IViewContentSink) 414997b6a54073e7a7fb143852f71c9be281529b2b795b180e7119b4fef60962 -->

```csharp
void InnoEngine.Rendering.IViewContentSource.Collect(InnoEngine.Rendering.ViewContentContext context, InnoEngine.Rendering.IViewContentSink sink)
```

Collects items for one exact view.

**Parameter `context`:** Frame-scoped host content and view.

**Parameter `sink`:** Collector receiving items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Runtime/Models/ViewContent.cs#L378).
