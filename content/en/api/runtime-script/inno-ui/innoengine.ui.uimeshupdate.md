---
title: "UiMeshUpdate"
description: "Reference for UiMeshUpdate in Inno.UI."
uid: api.inno.ui.runtime-script.80c3f0e22e64782d
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiMeshUpdate`

This reference describes `UiMeshUpdate` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b99a995cbb78b5db) | Method |
| [`indices`](#api-79de375d0fa857f3) | Property |
| [`mesh`](#api-b4e1639d8aa2d8aa) | Property |
| [`revision`](#api-5a13dae88abc03f2) | Property |
| [`vertices`](#api-6ff4401e7f19428b) | Property |

## Type declaration

<a id="api-80c3f0e22e64782d"></a>
<!-- api: T:InnoEngine.UI.UiMeshUpdate ee269371c740ecdb4cbc896049a60626a657a27e6a487c49a5ae71485d072a26 -->

```csharp
public sealed class InnoEngine.UI.UiMeshUpdate
```

Publishes one immutable mesh generation to a rendering plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L58).

## `#ctor`

<a id="api-b99a995cbb78b5db"></a>
<!-- api: M:InnoEngine.UI.UiMeshUpdate.#ctor f49a7ea3b376b2715433a64c738425f492f1290ede413d940d1453d694f9752a -->

```csharp
public InnoEngine.UI.UiMeshUpdate.UiMeshUpdate()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L58).

## `indices`

<a id="api-79de375d0fa857f3"></a>
<!-- api: P:InnoEngine.UI.UiMeshUpdate.indices e733b230591e72cc083cb6dda92ab4d2b22120f616907fdba9b0d7196f1e72b2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<uint> InnoEngine.UI.UiMeshUpdate.indices { get; }
```

Gets immutable triangle indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L90).

## `mesh`

<a id="api-b4e1639d8aa2d8aa"></a>
<!-- api: P:InnoEngine.UI.UiMeshUpdate.mesh c6fe7dfbd50e923b2ff043d65f27cc523911fd56e609b4926425d0f9549a6982 -->

```csharp
public InnoEngine.UI.UiMeshHandle InnoEngine.UI.UiMeshUpdate.mesh { get; }
```

Gets the generation-scoped mesh handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L78).

## `revision`

<a id="api-5a13dae88abc03f2"></a>
<!-- api: P:InnoEngine.UI.UiMeshUpdate.revision c4f2e0081273559e3378b04c3bfca9e4be8d73e38fc5114201130411572fd754 -->

```csharp
public ulong InnoEngine.UI.UiMeshUpdate.revision { get; }
```

Gets the monotonically increasing mesh content revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L82).

## `vertices`

<a id="api-6ff4401e7f19428b"></a>
<!-- api: P:InnoEngine.UI.UiMeshUpdate.vertices a172c857fa039ecfdb46adbfe0270029560e297dada01fc8d55ce453a11bb776 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiVertex> InnoEngine.UI.UiMeshUpdate.vertices { get; }
```

Gets immutable local-space vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L86).
