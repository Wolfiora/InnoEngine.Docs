---
title: "InspectorCondition"
description: "Reference for InspectorCondition in Inno.Editor.Annotations."
uid: api.inno.editor.annotations.runtime-script.b85e57ee9f035709
kind: api
owners:
  - Inno.Editor.Annotations
apiSurface: runtime-script
contracts:
  - api.projects.inno-editor-annotations#loading-and-script-availability
  - manual.scripting.use-script-api
---
# `InspectorCondition`

This reference describes `InspectorCondition` in `Inno.Editor.Annotations`. Read the [shared contract](../../projects/inno-editor-annotations.md#loading-and-script-availability) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Assigned`](#api-259c35b9b021ba16) | Field |
| [`Equal`](#api-f148a6b464e0110f) | Field |
| [`Falsy`](#api-165a1abffb46107e) | Field |
| [`NotAssigned`](#api-81c8b88303412f9c) | Field |
| [`NotEqual`](#api-faa219d7474d01c4) | Field |
| [`NotNull`](#api-94fb4b8a6bc55e3c) | Field |
| [`Null`](#api-4b410b22c1033029) | Field |
| [`Truthy`](#api-dce4341e1d8406f2) | Field |

## Type declaration

<a id="api-b85e57ee9f035709"></a>
<!-- api: T:InnoEditor.Annotations.InspectorCondition c94a4710d2e30765af45d509386196a0923acb9b9cb661edb57063168865d87d -->

```csharp
public enum InnoEditor.Annotations.InspectorCondition : int
```

Defines the comparison used by conditional Inspector presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L203).

## `Assigned`

<a id="api-259c35b9b021ba16"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.Assigned b5d717ae6200c20733954d6af749ff996cd40b1f487254250fe3ab957cf0cd96 -->

```csharp
InnoEditor.Annotations.InspectorCondition.Assigned = 6
```

Requires a reference-like value to expose an assigned resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L238).

## `Equal`

<a id="api-f148a6b464e0110f"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.Equal fc1c3b2a5fd02bcbbfaf279ac085b66ef173e665071b34e78eb2d6f3beb7424a -->

```csharp
InnoEditor.Annotations.InspectorCondition.Equal = 2
```

Compares the value with the supplied expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L218).

## `Falsy`

<a id="api-165a1abffb46107e"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.Falsy 0aa878bfe27abce2fd2f238f1858fddc71f8c12c2d932ee386dbe5261a946078 -->

```csharp
InnoEditor.Annotations.InspectorCondition.Falsy = 1
```

Shows a value when it evaluates as false, null, or empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L213).

## `NotAssigned`

<a id="api-81c8b88303412f9c"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.NotAssigned c4b40cb33786578f474aeaa2a397674a7f1472cbfaff008b78d11fd59cf322ca -->

```csharp
InnoEditor.Annotations.InspectorCondition.NotAssigned = 7
```

Requires a reference-like value not to expose an assigned resource.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L243).

## `NotEqual`

<a id="api-faa219d7474d01c4"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.NotEqual 1660daf89c448ac9db2ed05269739293c0b7aa2838ed470de40b6a22bc7fc382 -->

```csharp
InnoEditor.Annotations.InspectorCondition.NotEqual = 3
```

Requires the value to differ from the supplied expected constant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L223).

## `NotNull`

<a id="api-94fb4b8a6bc55e3c"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.NotNull 2f24675de48014ac5ee177f74b55fb155e9235c0799480a27c7447d42e3da41d -->

```csharp
InnoEditor.Annotations.InspectorCondition.NotNull = 5
```

Requires a non-null value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L233).

## `Null`

<a id="api-4b410b22c1033029"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.Null 0df68bf4707a20b53dc4148dca064afc94d22d88c5f91d7eb04161b481bb6e5f -->

```csharp
InnoEditor.Annotations.InspectorCondition.Null = 4
```

Requires a null value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L228).

## `Truthy`

<a id="api-dce4341e1d8406f2"></a>
<!-- api: F:InnoEditor.Annotations.InspectorCondition.Truthy 7e6ef6ba6c3c4fda871d9faabdbee19cca6a4c1783350372a8aa159c3cd4f286 -->

```csharp
InnoEditor.Annotations.InspectorCondition.Truthy = 0
```

Shows a value when it evaluates as true or non-empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/contracts/Inno.Editor.Annotations/InspectorPresentationAttributes.cs#L208).
