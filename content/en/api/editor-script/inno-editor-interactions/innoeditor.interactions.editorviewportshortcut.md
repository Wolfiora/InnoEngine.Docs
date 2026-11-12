---
title: "EditorViewportShortcut"
description: "Reference for EditorViewportShortcut in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.07b715216a4f932b
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorViewportShortcut`

This reference describes `EditorViewportShortcut` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEditor.Interactions.EditorViewportShortcut>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1f0ffaa3419fdd4b) | Method |
| [`Equals`](#api-62a2c628ada8e1e9) | Method |
| [`Equals`](#api-c4debb4142464653) | Method |
| [`GetHashCode`](#api-9c02c9d03fe57f35) | Method |
| [`op_Equality`](#api-afea060a001b4274) | Method |
| [`op_Inequality`](#api-32a662dd90ed7e17) | Method |
| [`ToString`](#api-eed926cbaba4bda1) | Method |
| [`key`](#api-4ed4db57819d9ef1) | Property |
| [`modifiers`](#api-9e082d3415a1468d) | Property |
| [`repeat`](#api-796b09658be5eada) | Property |

## Type declaration

<a id="api-07b715216a4f932b"></a>
<!-- api: T:InnoEditor.Interactions.EditorViewportShortcut c779ae048450ff90ce3b9cfa6bb73390b8483fcb380b142838d222394c7bfe7c -->

```csharp
public readonly struct InnoEditor.Interactions.EditorViewportShortcut : System.IEquatable<InnoEditor.Interactions.EditorViewportShortcut>
```

Contains one presentation-independent shortcut sample for a focused viewport tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `#ctor`

<a id="api-1f0ffaa3419fdd4b"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.#ctor(InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.Boolean) 5ba8cac632b2cd41b237d71445d088832242e97eefa27d388ea43b1a591385c7 -->

```csharp
public InnoEditor.Interactions.EditorViewportShortcut.EditorViewportShortcut(InnoEngine.Input.KeyCode key, InnoEngine.Input.KeyModifier modifiers = InnoEngine.Input.KeyModifier.None, bool repeat = false)
```

Creates one viewport shortcut sample.

**Parameter `key`:** Pressed key.

**Parameter `modifiers`:** Active keyboard modifiers.

**Parameter `repeat`:** Whether the platform generated an auto-repeat press.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L82).

## `Equals`

<a id="api-62a2c628ada8e1e9"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.Equals(InnoEditor.Interactions.EditorViewportShortcut) 3b53a8994d328d51085e24af1785ccfb75a5048a1c02406f63a768907e815b25 -->

```csharp
public bool InnoEditor.Interactions.EditorViewportShortcut.Equals(InnoEditor.Interactions.EditorViewportShortcut other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `Equals`

<a id="api-c4debb4142464653"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.Equals(System.Object) 53a0309f06607bf43860be78b9e6f7c1e7b39267ce7507d6b4aba22538516fb1 -->

```csharp
public override bool InnoEditor.Interactions.EditorViewportShortcut.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `GetHashCode`

<a id="api-9c02c9d03fe57f35"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.GetHashCode 08188de7dc186175d0e03e61e5506e358ef8101b7695319c3a46ce0e8db2dee9 -->

```csharp
public override int InnoEditor.Interactions.EditorViewportShortcut.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `op_Equality`

<a id="api-afea060a001b4274"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.op_Equality(InnoEditor.Interactions.EditorViewportShortcut,InnoEditor.Interactions.EditorViewportShortcut) 36b7722920949210e81b51de2cc727956daa96b9bdc3002407f2091757b11ad9 -->

```csharp
public static bool InnoEditor.Interactions.EditorViewportShortcut.operator ==(InnoEditor.Interactions.EditorViewportShortcut left, InnoEditor.Interactions.EditorViewportShortcut right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `op_Inequality`

<a id="api-32a662dd90ed7e17"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.op_Inequality(InnoEditor.Interactions.EditorViewportShortcut,InnoEditor.Interactions.EditorViewportShortcut) 380b71a9f9114d93d820a5dd5d152ce42545f71ffdd1399abd9217f53b83ab07 -->

```csharp
public static bool InnoEditor.Interactions.EditorViewportShortcut.operator !=(InnoEditor.Interactions.EditorViewportShortcut left, InnoEditor.Interactions.EditorViewportShortcut right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `ToString`

<a id="api-eed926cbaba4bda1"></a>
<!-- api: M:InnoEditor.Interactions.EditorViewportShortcut.ToString bebb0511fcc84b67492c481ba9be32aec2c3413ff19b33691de4d02d558e568b -->

```csharp
public override string InnoEditor.Interactions.EditorViewportShortcut.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `key`

<a id="api-4ed4db57819d9ef1"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportShortcut.key b40ad1e6acf439732c7615ff467c7d3b8a72d2ed568ec404c2b08f91c41371eb -->

```csharp
public InnoEngine.Input.KeyCode InnoEditor.Interactions.EditorViewportShortcut.key { get; }
```

Gets the pressed key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L95).

## `modifiers`

<a id="api-9e082d3415a1468d"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportShortcut.modifiers b57705353baaa9d28ca661c05eafb87ef17b91bc5a6b7cfb42446fb74a6c6b12 -->

```csharp
public InnoEngine.Input.KeyModifier InnoEditor.Interactions.EditorViewportShortcut.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L100).

## `repeat`

<a id="api-796b09658be5eada"></a>
<!-- api: P:InnoEditor.Interactions.EditorViewportShortcut.repeat 444ec0b693d7ebcaa3d52a31b7ef7c27507c4d48871e8258bf626b8ff1e51784 -->

```csharp
public bool InnoEditor.Interactions.EditorViewportShortcut.repeat { get; }
```

Gets whether the shortcut is an auto-repeat press.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L105).
