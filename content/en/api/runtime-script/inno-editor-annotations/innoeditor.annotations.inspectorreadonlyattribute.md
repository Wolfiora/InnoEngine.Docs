---
title: "InspectorReadOnlyAttribute"
description: "Reference for InspectorReadOnlyAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.126fedef013bb8bd
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `InspectorReadOnlyAttribute`

This reference describes `InspectorReadOnlyAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEditor.Annotations.InspectorPresentationAttribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-b553f814ac48a0f0) | Method |

## Type declaration

<a id="api-126fedef013bb8bd"></a>
<!-- api: T:InnoEditor.Annotations.InspectorReadOnlyAttribute 68d8c45cc5f3cfd9a691163742e92542cc0013b7095906b06a6d7211ab7659c0 -->

```csharp
public sealed class InnoEditor.Annotations.InspectorReadOnlyAttribute : InnoEditor.Annotations.InspectorPresentationAttribute
```

Makes an otherwise writable serialized property read-only in the Inspector.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L196).

## `#ctor`

<a id="api-b553f814ac48a0f0"></a>
<!-- api: M:InnoEditor.Annotations.InspectorReadOnlyAttribute.#ctor 5c936022e6d033ffccf8b3cf0af7002b2ce7382c22fcac1dcc5e640046d5c4a8 -->

```csharp
public InnoEditor.Annotations.InspectorReadOnlyAttribute.InspectorReadOnlyAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L196).
