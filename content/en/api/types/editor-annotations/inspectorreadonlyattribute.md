---
title: "InspectorReadOnlyAttribute"
description: "Reference for InspectorReadOnlyAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.cff25400e5241859
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
---
# `InspectorReadOnlyAttribute`

This reference describes `InspectorReadOnlyAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4f433bc367980d5a) | Method |

## Type declaration

<a id="api-cff25400e5241859"></a>
<!-- api: T:Inno.Editor.Annotations.InspectorReadOnlyAttribute ca847b6ccdfc654390c6a3ac435f8474d4e9842aa82bc6f0498f70908b3bf034 -->

```csharp
public sealed class Inno.Editor.Annotations.InspectorReadOnlyAttribute : Inno.Editor.Annotations.InspectorPresentationAttribute
```

Makes an otherwise writable serialized property read-only in the Inspector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L196).

## `#ctor`

<a id="api-4f433bc367980d5a"></a>
<!-- api: M:Inno.Editor.Annotations.InspectorReadOnlyAttribute.#ctor 2e0f07316dc0c1f610479c07d72fc02ce4d37f55e2d2a5b9f7549d991b1a035e -->

```csharp
public Inno.Editor.Annotations.InspectorReadOnlyAttribute.InspectorReadOnlyAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L196).
