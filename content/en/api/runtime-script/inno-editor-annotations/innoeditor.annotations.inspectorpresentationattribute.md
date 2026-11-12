---
title: "InspectorPresentationAttribute"
description: "Reference for InspectorPresentationAttribute in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.b99890ca836c8294
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `InspectorPresentationAttribute`

This reference describes `InspectorPresentationAttribute` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a231776c2e23b632) | Method |
| [`order`](#api-8f54bd6edd53760f) | Property |

## Type declaration

<a id="api-b99890ca836c8294"></a>
<!-- api: T:InnoEditor.Annotations.InspectorPresentationAttribute b51b3a29398a8701e03e336273a1f607fafd4fb376b5c0a22fc2e5392e18276d -->

```csharp
public abstract class InnoEditor.Annotations.InspectorPresentationAttribute : System.Attribute
```

Provides editor-only presentation metadata for one serialized field or property.

**Constraints:** Presentation attributes never participate in serialization. Concrete attributes are conditional on
INNO_EDITOR, so their applications are omitted from Player script assemblies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L15).

## `#ctor`

<a id="api-a231776c2e23b632"></a>
<!-- api: M:InnoEditor.Annotations.InspectorPresentationAttribute.#ctor 5315db0d9ae2bd134a12bd7f9a8e1f3b07cfc177b13bbce82d84be7690f94fb6 -->

```csharp
protected InnoEditor.Annotations.InspectorPresentationAttribute.InspectorPresentationAttribute()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L15).

## `order`

<a id="api-8f54bd6edd53760f"></a>
<!-- api: P:InnoEditor.Annotations.InspectorPresentationAttribute.order f2ec089a6e6a58836691aba7c6c8b1f561d9a8c9ad940c23d8c51ac40db43833 -->

```csharp
public int InnoEditor.Annotations.InspectorPresentationAttribute.order { get; set; }
```

Gets or sets the relative order among presentation attributes declared on the same member.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L20).
