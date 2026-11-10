---
title: "InspectorPresentationAttribute"
description: "Reference for InspectorPresentationAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.d97698f91094c2f2
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `InspectorPresentationAttribute`

This reference describes `InspectorPresentationAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-78d092fed6478827) | Method |
| [`order`](#api-668a194089fbada7) | Property |

## Type declaration

<a id="api-d97698f91094c2f2"></a>
<!-- api: T:Inno.Editor.Annotations.InspectorPresentationAttribute 5c01b7ea7bae3a248a014eaff5b195f00a64ee5471f062edc9fc85c1777ab2da -->

```csharp
public abstract class Inno.Editor.Annotations.InspectorPresentationAttribute : System.Attribute
```

Provides editor-only presentation metadata for one serialized field or property.

**Constraints:** Presentation attributes never participate in serialization. Concrete attributes are conditional on
INNO_EDITOR, so their applications are omitted from Player script assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L15).

## `#ctor`

<a id="api-78d092fed6478827"></a>
<!-- api: M:Inno.Editor.Annotations.InspectorPresentationAttribute.#ctor 02c8c3876f9a51c163311ee93dc02825af49760059a485cd25aeedeb85de2480 -->

```csharp
protected Inno.Editor.Annotations.InspectorPresentationAttribute.InspectorPresentationAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L15).

## `order`

<a id="api-668a194089fbada7"></a>
<!-- api: P:Inno.Editor.Annotations.InspectorPresentationAttribute.order 6acdf9810eed910813cc400e8c321ed2c4dad9f446d1ef004a89e07a9184b691 -->

```csharp
public int Inno.Editor.Annotations.InspectorPresentationAttribute.order { get; set; }
```

Gets or sets the relative order among presentation attributes declared on the same member.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L20).
