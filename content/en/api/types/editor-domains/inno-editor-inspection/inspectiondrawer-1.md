---
title: "InspectionDrawer`1"
description: "Reference for InspectionDrawer`1 in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.44e2432333856a19
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# ``InspectionDrawer`1``

This reference describes ``InspectionDrawer`1`` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Editor.Inspection.IInspectionDrawer`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3c3494468e70c3fe) | Method |
| [`BindName`](#api-38149573ec950dc3) | Method |
| [`CanInspect`](#api-8109811c8eb1218d) | Method |
| [`Draw`](#api-554c579798e1472a) | Method |
| [`DrawHeader`](#api-b839e8728616c277) | Method |
| [`GetIcon`](#api-9f89ebd29db17759) | Method |
| [`icon`](#api-c18ee56fe3963d47) | Property |

## Type declaration

<a id="api-44e2432333856a19"></a>
<!-- api: T:Inno.Editor.Inspection.InspectionDrawer`1 a94ec9faad7c4118bbf06db23f440f8036a3bb6788bd1909f7d18b8b3af633db -->

```csharp
public abstract class Inno.Editor.Inspection.InspectionDrawer<TTarget> where TTarget : class : Inno.Editor.Inspection.IInspectionDrawer
```

Provides the target-specific header presentation and body drawing behavior for an inspected target.

**Type parameter `TTarget`:** The target type inspected by the drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L11).

## `#ctor`

<a id="api-3c3494468e70c3fe"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawer`1.#ctor 4e27e1ec42ee2e675757055f32f961e016947453e8611928c2902b414ad2cd7e -->

```csharp
protected Inno.Editor.Inspection.InspectionDrawer<TTarget>.InspectionDrawer()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L11).

## `BindName`

<a id="api-38149573ec950dc3"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawer`1.BindName(Inno.Editor.Inspection.InspectionDrawContext,`0) 596bd733153cd129d1c93d5c17fc0305a5af18fb3fe590c9368568e456562217 -->

```csharp
protected abstract (string name, System.Action<string>? setter) Inno.Editor.Inspection.InspectionDrawer<TTarget>.BindName(Inno.Editor.Inspection.InspectionDrawContext context, TTarget target)
```

Binds the name displayed in the first row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The current target name and a callback that accepts a requested replacement name, or
`null` for the callback when the name is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L45).

## `CanInspect`

<a id="api-8109811c8eb1218d"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawer`1.CanInspect(`0) 031cd141abdaf74f73f1a7ccd0a87955ce4b32974dd34cc829aea4593eb47ed4 -->

```csharp
protected virtual bool Inno.Editor.Inspection.InspectionDrawer<TTarget>.CanInspect(TTarget target)
```

Determines whether this drawer handles the selected value, in addition to its registered type.

**Parameter `target`:** Current target. The check must not mutate it.

**Returns:** Whether this drawer accepts the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L28).

## `Draw`

<a id="api-554c579798e1472a"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawer`1.Draw(Inno.Editor.Inspection.InspectionDrawContext,`0) c6d8cbc82cb4bb24243af3f7c4d048a5a1c7f349e094646bd81a7a51b8606fd2 -->

```csharp
protected abstract void Inno.Editor.Inspection.InspectionDrawer<TTarget>.Draw(Inno.Editor.Inspection.InspectionDrawContext context, TTarget target)
```

Draws the target-specific Inspector body below the shared target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L95).

## `DrawHeader`

<a id="api-b839e8728616c277"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawer`1.DrawHeader(Inno.Editor.Inspection.InspectionDrawContext,`0) ee3fb714105107840b82f67b52f63cfde4e644593b40374393440556b37a343e -->

```csharp
protected virtual void Inno.Editor.Inspection.InspectionDrawer<TTarget>.DrawHeader(Inno.Editor.Inspection.InspectionDrawContext context, TTarget target)
```

Draws target-specific controls in the second row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Constraints:** The callback is clipped to one header row. Implementations should keep all controls on the
current line and must not begin another window, child, table, or popup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L80).

## `GetIcon`

<a id="api-9f89ebd29db17759"></a>
<!-- api: M:Inno.Editor.Inspection.InspectionDrawer`1.GetIcon(Inno.Editor.Inspection.InspectionDrawContext,`0) 61e519ed468b28e671fe7eba3c981a8c380f91cd831d967826df869b3d4b077d -->

```csharp
protected virtual string Inno.Editor.Inspection.InspectionDrawer<TTarget>.GetIcon(Inno.Editor.Inspection.InspectionDrawContext context, TTarget target)
```

Resolves the icon glyph displayed for the current target.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The target-specific icon glyph. The default implementation returns ``Inno.Editor.Inspection.InspectionDrawer`1.icon``.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L62).

## `icon`

<a id="api-c18ee56fe3963d47"></a>
<!-- api: P:Inno.Editor.Inspection.InspectionDrawer`1.icon 045b901b9d2cd68c6496cfc8207a2f6c37545c989d32d617d8bf9e26765c62c5 -->

```csharp
public abstract string Inno.Editor.Inspection.InspectionDrawer<TTarget>.icon { get; }
```

Gets the icon glyph displayed in the large leading slot of the Inspector target header.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L17).
