---
title: "EditorDropContext"
description: "Reference for EditorDropContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.ada6735a60cfcc16
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDropContext`

This reference describes `EditorDropContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dc2354ff896be1a9) | Method |
| [`area`](#api-0ecbe48548d7e431) | Property |
| [`data`](#api-4104d5f7b18b6a81) | Property |
| [`editor`](#api-15e7e9442f078f7a) | Property |
| [`interactions`](#api-ce028176fa29591b) | Property |
| [`placement`](#api-1b7ae802bc9e6354) | Property |
| [`source`](#api-452e97789e72e3ae) | Property |
| [`target`](#api-41638fae24224e85) | Property |

## Type declaration

<a id="api-ada6735a60cfcc16"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropContext fc1b230164da49b5146560ffe9de7f0db6abd96cf98b551cfce71535720ee693 -->

```csharp
public sealed class InnoEditor.Interactions.EditorDropContext
```

Provides contextual state to an editor drop handler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L11).

## `#ctor`

<a id="api-dc2354ff896be1a9"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData,InnoEngine.Core.IdentityObject,System.Object,InnoEditor.Interactions.EditorDropPlacement) 5e9e12ad93b016a03096477e153e65c8c23413efa47aa7d449237b71af108e2e -->

```csharp
public InnoEditor.Interactions.EditorDropContext.EditorDropContext(InnoEditor.Core.EditorContext editor, InnoEditor.Interactions.EditorInteractions interactions, string area, InnoEditor.Interactions.EditorDragData data, InnoEngine.Core.IdentityObject source, object target, InnoEditor.Interactions.EditorDropPlacement placement = InnoEditor.Interactions.EditorDropPlacement.None)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L44).

## `area`

<a id="api-0ecbe48548d7e431"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.area 97b1573f818ca3db31ef5d9278f37fb1f84d95e8468c228a206c7957a87b61ab -->

```csharp
public string InnoEditor.Interactions.EditorDropContext.area { get; }
```

Gets the target interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L76).

## `data`

<a id="api-4104d5f7b18b6a81"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.data 40895c7c117144540435c6018e6a528f407a382eccb245d6795967d253150ce4 -->

```csharp
public InnoEditor.Interactions.EditorDragData InnoEditor.Interactions.EditorDropContext.data { get; }
```

Gets the active managed drag data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L81).

## `editor`

<a id="api-15e7e9442f078f7a"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.editor 58c04a7709eb0714d6831b8398fbfaada7dcd2c4f9213b5b63b797efe8c5c5f3 -->

```csharp
public InnoEditor.Core.EditorContext InnoEditor.Interactions.EditorDropContext.editor { get; }
```

Gets the shared passive editor context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L66).

## `interactions`

<a id="api-ce028176fa29591b"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.interactions d4ef166d690de9759a9dd84499482aafa24b0539f9b358607b607c83afcc34c2 -->

```csharp
public InnoEditor.Interactions.EditorInteractions InnoEditor.Interactions.EditorDropContext.interactions { get; }
```

Gets the active interaction entry point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L71).

## `placement`

<a id="api-1b7ae802bc9e6354"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.placement 7d1db9d03b26be4ff4a0e0dcb342534ab5b3d68537962c43d73ac4fcd9a18bfb -->

```csharp
public InnoEditor.Interactions.EditorDropPlacement InnoEditor.Interactions.EditorDropContext.placement { get; }
```

Gets the requested placement relative to the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L96).

## `source`

<a id="api-452e97789e72e3ae"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.source d61327080dc7bd9bbe814bb1212670eb6b98ed2716416738b39bccfa65bf942f -->

```csharp
public InnoEngine.Core.IdentityObject InnoEditor.Interactions.EditorDropContext.source { get; }
```

Gets the live source resolved for this query or delivery operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L86).

## `target`

<a id="api-41638fae24224e85"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropContext.target 7a5badef68d428860dc088ca3513cbbfab0a1bc59d6c45b3da0dc95608ace860 -->

```csharp
public object InnoEditor.Interactions.EditorDropContext.target { get; }
```

Gets the managed drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropContext.cs#L91).
