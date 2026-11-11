---
title: "IInspectionDrawer"
description: "Reference for IInspectionDrawer in Inno.Editor.Inspection."
uid: api.inno.editor.inspection.ec646fac9cbd98a4
kind: api
owners:
  - Inno.Editor.Inspection
apiSurface: source-clr
contracts:
  - project.inno-editor-inspection
---
# `IInspectionDrawer`

This reference describes `IInspectionDrawer` in `Inno.Editor.Inspection`. Read the [shared contract](../../../projects/inno-editor-inspection.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`BindName`](#api-313ac89b147dc459) | Method |
| [`CanInspect`](#api-dc451e07c269cbf6) | Method |
| [`Draw`](#api-37313934abb73644) | Method |
| [`DrawHeader`](#api-b7f2713ba42da33e) | Method |
| [`GetIcon`](#api-8fd01f4102d28656) | Method |

## Type declaration

<a id="api-ec646fac9cbd98a4"></a>
<!-- api: T:Inno.Editor.Inspection.IInspectionDrawer aae41da311a16b5b343a2f7a33902ec5c645a63bb1f1f64a6d7fc866f378611c -->

```csharp
public interface Inno.Editor.Inspection.IInspectionDrawer
```

Defines the runtime bridge used to render a discovered inspection drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L125).

## `BindName`

<a id="api-313ac89b147dc459"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionDrawer.BindName(Inno.Editor.Inspection.InspectionDrawContext) 48e887e263b956fde7449669bf4f34c26da4b31f4640ec5e49178046888c98fc -->

```csharp
(string name, System.Action<string>? setter) Inno.Editor.Inspection.IInspectionDrawer.BindName(Inno.Editor.Inspection.InspectionDrawContext context)
```

Binds the target name displayed by the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Returns:** The current target name and a callback that accepts a requested replacement name, or
`null` for the callback when the name is read-only.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L159).

## `CanInspect`

<a id="api-dc451e07c269cbf6"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionDrawer.CanInspect(System.Object) 5b59d278fb1100909e8200a4dd7d3895a7bb530011d4163367c3553f7be1bcf0 -->

```csharp
bool Inno.Editor.Inspection.IInspectionDrawer.CanInspect(object target)
```

Determines whether a type-compatible selected value can be inspected by this drawer.

**Parameter `target`:** Selected value, never mutated by this query.

**Returns:** Whether this drawer accepts the value; ordinary type-only drawers accept by default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L136).

## `Draw`

<a id="api-37313934abb73644"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionDrawer.Draw(Inno.Editor.Inspection.InspectionDrawContext) f806d5e907d3fe903c0cbe20b17dbd6a1d9bc1a3d2ae33c11aceefd360663e71 -->

```csharp
void Inno.Editor.Inspection.IInspectionDrawer.Draw(Inno.Editor.Inspection.InspectionDrawContext context)
```

Draws the target-specific Inspector body.

**Parameter `context`:** The active Inspector drawing context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L175).

## `DrawHeader`

<a id="api-b7f2713ba42da33e"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionDrawer.DrawHeader(Inno.Editor.Inspection.InspectionDrawContext) 7487ac96f8ec28a45f5852a30beaefcd27910c7d8b57ba2fa171528ecb5fa9a2 -->

```csharp
void Inno.Editor.Inspection.IInspectionDrawer.DrawHeader(Inno.Editor.Inspection.InspectionDrawContext context)
```

Draws the target-specific second header row.

**Parameter `context`:** The active Inspector drawing context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L167).

## `GetIcon`

<a id="api-8fd01f4102d28656"></a>
<!-- api: M:Inno.Editor.Inspection.IInspectionDrawer.GetIcon(Inno.Editor.Inspection.InspectionDrawContext) 62f346be27e61598fd0864e10a785e4d9694bb338eb7faea715b2c77232a946e -->

```csharp
string Inno.Editor.Inspection.IInspectionDrawer.GetIcon(Inno.Editor.Inspection.InspectionDrawContext context)
```

Gets the icon glyph displayed in the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Returns:** The icon glyph for the current target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/ObjectDrawing/InspectionDrawer.cs#L147).
