---
title: "EditorDropStatus"
description: "Reference for EditorDropStatus in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.d719cc7a342037f3
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDropStatus`

This reference describes `EditorDropStatus` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorDropStatus>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cb7e35facdca1603) | Method |
| [`Accept`](#api-12b5ff19de727c78) | Method |
| [`Equals`](#api-76441b589ead85c0) | Method |
| [`Equals`](#api-4c1467d31da4aaac) | Method |
| [`GetHashCode`](#api-c001e30b9cca4f36) | Method |
| [`op_Equality`](#api-06fae71859df6c86) | Method |
| [`op_Inequality`](#api-b236fd457bbbf87f) | Method |
| [`ToString`](#api-24f9a325c53075b0) | Method |
| [`canDrop`](#api-b3c9490031d2d00f) | Property |
| [`rejected`](#api-7cde9af7d03f5117) | Property |
| [`visual`](#api-7256befee604269b) | Property |

## Type declaration

<a id="api-d719cc7a342037f3"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropStatus ca37bd9946d08796c9bdbf7244fbdd33069dcfe43fb2d0b922a536e17912b0b0 -->

```csharp
public readonly struct InnoEditor.Interactions.EditorDropStatus : System.IEquatable<InnoEditor.Interactions.EditorDropStatus>
```

Describes whether and how a target accepts the active drag.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `#ctor`

<a id="api-cb7e35facdca1603"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.#ctor(System.Boolean,InnoEditor.Interactions.EditorDropVisual) 8eb56e24dd81f1c8b506f4560ceb8aa758c93cced74134ac6894ea929637ecfc -->

```csharp
public InnoEditor.Interactions.EditorDropStatus.EditorDropStatus(bool canDrop, InnoEditor.Interactions.EditorDropVisual visual)
```

Creates the compatibility and presentation state of a potential drop target.

**Parameter `canDrop`:** Whether the active source may be delivered to the target.

**Parameter `visual`:** The standard visual requested for the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L17).

## `Accept`

<a id="api-12b5ff19de727c78"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.Accept(InnoEditor.Interactions.EditorDropVisual) 2be9b8a43b16414d12aefd9c927a265fb6dae96996aea40d00e4ca184d1fa69c -->

```csharp
public static InnoEditor.Interactions.EditorDropStatus InnoEditor.Interactions.EditorDropStatus.Accept(InnoEditor.Interactions.EditorDropVisual visual = InnoEditor.Interactions.EditorDropVisual.Highlight)
```

Creates an accepted drop status with the requested standard target visual.

**Parameter `visual`:** The standard visual drawn while the compatible source hovers the target.

**Returns:** An accepted drop status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L49).

## `Equals`

<a id="api-76441b589ead85c0"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.Equals(InnoEditor.Interactions.EditorDropStatus) a73d73f87e43eb189d12d3744df333dec4b3c87e0a243c9df29e78059e00b489 -->

```csharp
public bool InnoEditor.Interactions.EditorDropStatus.Equals(InnoEditor.Interactions.EditorDropStatus other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `Equals`

<a id="api-4c1467d31da4aaac"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.Equals(System.Object) cc72881da8d3af31d23a3f2194dd3f9b3edf0d4d38a3d40205b3bd014bdca0f9 -->

```csharp
public override bool InnoEditor.Interactions.EditorDropStatus.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `GetHashCode`

<a id="api-c001e30b9cca4f36"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.GetHashCode 3bb5f0c773e436886995414a36cbc062810c4cfcf0f2faccfaa297148106cba4 -->

```csharp
public override int InnoEditor.Interactions.EditorDropStatus.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `op_Equality`

<a id="api-06fae71859df6c86"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.op_Equality(InnoEditor.Interactions.EditorDropStatus,InnoEditor.Interactions.EditorDropStatus) 3a48fa6c8715c0e7cf06d8751edb11b3dfd79ffd667d98b6c526f3e4de1d266f -->

```csharp
public static bool InnoEditor.Interactions.EditorDropStatus.operator ==(InnoEditor.Interactions.EditorDropStatus left, InnoEditor.Interactions.EditorDropStatus right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `op_Inequality`

<a id="api-b236fd457bbbf87f"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.op_Inequality(InnoEditor.Interactions.EditorDropStatus,InnoEditor.Interactions.EditorDropStatus) 07c6b32524e521b872da7883a8096109f0f2565a64038f19cf4f144eb747ff31 -->

```csharp
public static bool InnoEditor.Interactions.EditorDropStatus.operator !=(InnoEditor.Interactions.EditorDropStatus left, InnoEditor.Interactions.EditorDropStatus right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `ToString`

<a id="api-24f9a325c53075b0"></a>
<!-- api: M:InnoEditor.Interactions.EditorDropStatus.ToString cf9ad03d006e16ada5628cf32cff7db51a1944e74996e4657b6837c5b594401e -->

```csharp
public override string InnoEditor.Interactions.EditorDropStatus.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L6).

## `canDrop`

<a id="api-b3c9490031d2d00f"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropStatus.canDrop dd6737c2aa2551a07e9f5def30efe7de9cacaf9d9396ee2fd9b70a673a34a00e -->

```csharp
public bool InnoEditor.Interactions.EditorDropStatus.canDrop { get; }
```

Gets whether the active source may be dropped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L28).

## `rejected`

<a id="api-7cde9af7d03f5117"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropStatus.rejected 4c21f57a475dbb9138bb816bc9cf3cfda4d6e9e76a5d58c912e39bc80a4f0923 -->

```csharp
public static InnoEditor.Interactions.EditorDropStatus InnoEditor.Interactions.EditorDropStatus.rejected { get; }
```

Gets an incompatible drop status.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L38).

## `visual`

<a id="api-7256befee604269b"></a>
<!-- api: P:InnoEditor.Interactions.EditorDropStatus.visual eafae2682384897b206ac396d494ef66ec74b0ab0e0a9430e432370c65cef1fc -->

```csharp
public InnoEditor.Interactions.EditorDropVisual InnoEditor.Interactions.EditorDropStatus.visual { get; }
```

Gets the standard target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropStatus.cs#L33).
