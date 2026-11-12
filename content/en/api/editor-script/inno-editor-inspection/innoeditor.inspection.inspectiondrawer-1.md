---
title: "InspectionDrawer`1"
description: "Reference for InspectionDrawer`1 in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.editor-script.60a8bf9a6fc320f8
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: editor-script
contracts:
  - project.inno-editor-inspection
  - manual.scripting.use-script-api
---
# ``InspectionDrawer`1``

This reference describes ``InspectionDrawer`1`` in `Inno.Editor.Inspection`. Read the [shared contract](../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ef2a8c1040aa3f19) | Method |
| [`BindName`](#api-1bd097e2eedccbc8) | Method |
| [`CanInspect`](#api-f48a7888f577d91e) | Method |
| [`Draw`](#api-504094cc46c29913) | Method |
| [`DrawHeader`](#api-1f6a0d86dac63309) | Method |
| [`GetIcon`](#api-3818047d45d67295) | Method |
| [`icon`](#api-e3f6128faa60739b) | Property |

## Type declaration

<a id="api-60a8bf9a6fc320f8"></a>
<!-- api: T:InnoEditor.Inspection.InspectionDrawer`1 28c88759fc8a321a2ddbca22fb60edf294c4dd65d4178b7c919e4c65af986433 -->

```csharp
public abstract class InnoEditor.Inspection.InspectionDrawer<TTarget> where TTarget : class
```

Provides the target-specific header presentation and body drawing behavior for an inspected target.

**Type parameter `TTarget`:** The target type inspected by the drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L11).

## `#ctor`

<a id="api-ef2a8c1040aa3f19"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawer`1.#ctor 60dd7e8a6eb4b68d7e7bf3a951462242410e34c8769567e3f462c6a465284471 -->

```csharp
protected InnoEditor.Inspection.InspectionDrawer<TTarget>.InspectionDrawer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L11).

## `BindName`

<a id="api-1bd097e2eedccbc8"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawer`1.BindName(InnoEditor.Inspection.InspectionDrawContext,`0) 8a9cb1eb3f579e01c58ace4a165f9534738b34a8225524956da99bd0ca8c7333 -->

```csharp
protected abstract (string, System.Action<string>?) InnoEditor.Inspection.InspectionDrawer<TTarget>.BindName(InnoEditor.Inspection.InspectionDrawContext context, TTarget target)
```

Binds the name displayed in the first row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The current target name and a callback that accepts a requested replacement name, or
`null` for the callback when the name is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L45).

## `CanInspect`

<a id="api-f48a7888f577d91e"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawer`1.CanInspect(`0) 38668a0ec26c8f325cdf9e08494c38a3e04ff1232887a591cd49eb6e4cce209c -->

```csharp
protected virtual bool InnoEditor.Inspection.InspectionDrawer<TTarget>.CanInspect(TTarget target)
```

Determines whether this drawer handles the selected value, in addition to its registered type.

**Parameter `target`:** Current target. The check must not mutate it.

**Returns:** Whether this drawer accepts the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L28).

## `Draw`

<a id="api-504094cc46c29913"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawer`1.Draw(InnoEditor.Inspection.InspectionDrawContext,`0) 0bfc10f1e47f45e1c48151f08cb504a98292c6d8f98506b9b141ce7e58a78ceb -->

```csharp
protected abstract void InnoEditor.Inspection.InspectionDrawer<TTarget>.Draw(InnoEditor.Inspection.InspectionDrawContext context, TTarget target)
```

Draws the target-specific Inspector body below the shared target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L95).

## `DrawHeader`

<a id="api-1f6a0d86dac63309"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawer`1.DrawHeader(InnoEditor.Inspection.InspectionDrawContext,`0) e4b6f986fdc3227c41bc9f35c3d6e868f24fb9b2a17164f1eed0b2b15f15e3a5 -->

```csharp
protected virtual void InnoEditor.Inspection.InspectionDrawer<TTarget>.DrawHeader(InnoEditor.Inspection.InspectionDrawContext context, TTarget target)
```

Draws target-specific controls in the second row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Constraints:** The callback is clipped to one header row. Implementations should keep all controls on the
current line and must not begin another window, child, table, or popup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L80).

## `GetIcon`

<a id="api-3818047d45d67295"></a>
<!-- api: M:InnoEditor.Inspection.InspectionDrawer`1.GetIcon(InnoEditor.Inspection.InspectionDrawContext,`0) fda44ced4095c3b5aaf3e06f9efe9830af1abca06229a050770800ae35c1877b -->

```csharp
protected virtual string InnoEditor.Inspection.InspectionDrawer<TTarget>.GetIcon(InnoEditor.Inspection.InspectionDrawContext context, TTarget target)
```

Resolves the icon glyph displayed for the current target.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The target-specific icon glyph. The default implementation returns ``InnoEditor.Inspection.InspectionDrawer`1.icon``.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L62).

## `icon`

<a id="api-e3f6128faa60739b"></a>
<!-- api: P:InnoEditor.Inspection.InspectionDrawer`1.icon 2bf44a48bd2423ecd78b58251e92bac9647b037e92a6045c0eb30dd0c5d58c37 -->

```csharp
public abstract string InnoEditor.Inspection.InspectionDrawer<TTarget>.icon { get; }
```

Gets the icon glyph displayed in the large leading slot of the Inspector target header.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L17).
