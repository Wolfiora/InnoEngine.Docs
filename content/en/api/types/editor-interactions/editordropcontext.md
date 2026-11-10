---
title: "EditorDropContext"
description: "Reference for EditorDropContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.24a630a13c028a18
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDropContext`

This reference describes `EditorDropContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b64f45a31adc1939) | Method |
| [`area`](#api-3fa68b0261499ea5) | Property |
| [`data`](#api-e8e2fbc98a92a3a4) | Property |
| [`editor`](#api-a5b6f484d14a1430) | Property |
| [`interactions`](#api-a2d5908e96f5224e) | Property |
| [`placement`](#api-21deabfcd5e921ec) | Property |
| [`source`](#api-93e81fb008c9f31e) | Property |
| [`target`](#api-51be0e8b03ad33d3) | Property |

## Type declaration

<a id="api-24a630a13c028a18"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDropContext 3cc44804c831287235e4e87b31e3c01c5b238f6db59f5633cd2331986efd412e -->

```csharp
public sealed class Inno.Editor.Interactions.EditorDropContext
```

Provides contextual state to an editor drop handler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L11).

## `#ctor`

<a id="api-b64f45a31adc1939"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDropContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,Inno.Editor.Interactions.EditorDragData,Inno.Core.Identity.IdentityObject,System.Object,Inno.Editor.Interactions.EditorDropPlacement) a7d2bb7611a28ba9064983a5c1e8976c3bb16152dd3052de30663b4777098264 -->

```csharp
public Inno.Editor.Interactions.EditorDropContext.EditorDropContext(Inno.Editor.Core.EditorContext editor, Inno.Editor.Interactions.EditorInteractions interactions, string area, Inno.Editor.Interactions.EditorDragData data, Inno.Core.Identity.IdentityObject source, object target, Inno.Editor.Interactions.EditorDropPlacement placement = Inno.Editor.Interactions.EditorDropPlacement.None)
```

Creates a managed drop request.

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The target interaction area.

**Parameter `data`:** The active identity-based drag data.

**Parameter `source`:** The live source resolved from `data` for this operation only.

**Parameter `target`:** The managed target object exposed to typed handlers.

**Parameter `placement`:** The requested position relative to the target.

**Throws `System.ArgumentNullException`:** Thrown when `editor`, `interactions`, `data`,
`source`, or `target` is `null`.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L44).

## `area`

<a id="api-3fa68b0261499ea5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.area 9b19eb7ac628290dce1cf97c570570c457b1bf832680781d70ed63a00eb4eccb -->

```csharp
public string Inno.Editor.Interactions.EditorDropContext.area { get; }
```

Gets the target interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L76).

## `data`

<a id="api-e8e2fbc98a92a3a4"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.data 9536d7c540b0f19513d79c88b1185ef639660d5f8f4a3537be5ee0bafe494cfc -->

```csharp
public Inno.Editor.Interactions.EditorDragData Inno.Editor.Interactions.EditorDropContext.data { get; }
```

Gets the active managed drag data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L81).

## `editor`

<a id="api-a5b6f484d14a1430"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.editor 93123ceb162a5f274ab770b80af3aae6126053e7a8a622b9a355fd2f3303e85e -->

```csharp
public Inno.Editor.Core.EditorContext Inno.Editor.Interactions.EditorDropContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L66).

## `interactions`

<a id="api-a2d5908e96f5224e"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.interactions 35196e3ab34f63a42abb2bebac373a8380dc0f04de087bd6738df7db1f549467 -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Interactions.EditorDropContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L71).

## `placement`

<a id="api-21deabfcd5e921ec"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.placement 477914b653ddf9e590a41bf8e765d35d54bb86eb1ba355b0eae8c98607abed32 -->

```csharp
public Inno.Editor.Interactions.EditorDropPlacement Inno.Editor.Interactions.EditorDropContext.placement { get; }
```

Gets the requested placement relative to the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L96).

## `source`

<a id="api-93e81fb008c9f31e"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.source 9bc07087e94a78d2a410d6daa8244bb162543cb90ff893c607e894a2ca527faa -->

```csharp
public Inno.Core.Identity.IdentityObject Inno.Editor.Interactions.EditorDropContext.source { get; }
```

Gets the live source resolved for this query or delivery operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L86).

## `target`

<a id="api-51be0e8b03ad33d3"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDropContext.target 30fb729c4ddf5a63c75aa5627b6496c86dcb0d0c419618c1de95131dff9843ca -->

```csharp
public object Inno.Editor.Interactions.EditorDropContext.target { get; }
```

Gets the managed drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L91).
