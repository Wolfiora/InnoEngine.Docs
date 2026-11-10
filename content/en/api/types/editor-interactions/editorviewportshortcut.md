---
title: "EditorViewportShortcut"
description: "Reference for EditorViewportShortcut in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.c0c4d985beab9075
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorViewportShortcut`

This reference describes `EditorViewportShortcut` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorViewportShortcut>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a06ae63f8d85205a) | Method |
| [`Equals`](#api-6678c0717f042db0) | Method |
| [`Equals`](#api-713352f63b75dad4) | Method |
| [`GetHashCode`](#api-8e2bd53f4f2f895d) | Method |
| [`op_Equality`](#api-0b4b54d54a118417) | Method |
| [`op_Inequality`](#api-a000863247faf28e) | Method |
| [`ToString`](#api-c1c50633935f97ec) | Method |
| [`key`](#api-e394495fbb36c84b) | Property |
| [`modifiers`](#api-d6b0379d43984a8c) | Property |
| [`repeat`](#api-31645600ab207ad2) | Property |

## Type declaration

<a id="api-c0c4d985beab9075"></a>
<!-- api: T:Inno.Editor.Interactions.EditorViewportShortcut d1a654cdf0997b89aac5f9aae3126853b670c792415cd0428ef80abe53e95d86 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorViewportShortcut : System.IEquatable<Inno.Editor.Interactions.EditorViewportShortcut>
```

Contains one presentation-independent shortcut sample for a focused viewport tool.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `#ctor`

<a id="api-a06ae63f8d85205a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.#ctor(Inno.Core.Input.KeyCode,Inno.Core.Input.KeyModifier,System.Boolean) e38e97faa211bdf6f0404db6ef2aeb71eac693486a2462d57837440b799ff09c -->

```csharp
public Inno.Editor.Interactions.EditorViewportShortcut.EditorViewportShortcut(Inno.Core.Input.KeyCode key, Inno.Core.Input.KeyModifier modifiers = Inno.Core.Input.KeyModifier.None, bool repeat = false)
```

Creates one viewport shortcut sample.

**Parameter `key`:** Pressed key.

**Parameter `modifiers`:** Active keyboard modifiers.

**Parameter `repeat`:** Whether the platform generated an auto-repeat press.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L82).

## `Equals`

<a id="api-6678c0717f042db0"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.Equals(Inno.Editor.Interactions.EditorViewportShortcut) 01b3b4d34f9f76d64890f4d50b1193c0c132e7a61eb5fb99b17d84076cffd467 -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportShortcut.Equals(Inno.Editor.Interactions.EditorViewportShortcut other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `Equals`

<a id="api-713352f63b75dad4"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.Equals(System.Object) 17a8febab2a5974af7c944d473dd088ea8a8035b0ae58edd352c093b870f7988 -->

```csharp
public override bool Inno.Editor.Interactions.EditorViewportShortcut.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `GetHashCode`

<a id="api-8e2bd53f4f2f895d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.GetHashCode 68c064a3e1966ae8b6675a68944516b6a1f8b5bf156334bb8805bc696da335dc -->

```csharp
public override int Inno.Editor.Interactions.EditorViewportShortcut.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `op_Equality`

<a id="api-0b4b54d54a118417"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.op_Equality(Inno.Editor.Interactions.EditorViewportShortcut,Inno.Editor.Interactions.EditorViewportShortcut) 8c1d04c8926adc1c15fb34249385b9b525f7e487ab240408ea0fbb5b307ffa55 -->

```csharp
public static bool Inno.Editor.Interactions.EditorViewportShortcut.operator ==(Inno.Editor.Interactions.EditorViewportShortcut left, Inno.Editor.Interactions.EditorViewportShortcut right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `op_Inequality`

<a id="api-a000863247faf28e"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.op_Inequality(Inno.Editor.Interactions.EditorViewportShortcut,Inno.Editor.Interactions.EditorViewportShortcut) 22406511acf0a18ab17588f4c4b7fac1d1b95820e77d26f1b38348f43fbda41c -->

```csharp
public static bool Inno.Editor.Interactions.EditorViewportShortcut.operator !=(Inno.Editor.Interactions.EditorViewportShortcut left, Inno.Editor.Interactions.EditorViewportShortcut right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `ToString`

<a id="api-c1c50633935f97ec"></a>
<!-- api: M:Inno.Editor.Interactions.EditorViewportShortcut.ToString 4d2709388cb83a5538f588bada515b06007242f11fa836da7617863fd61092fe -->

```csharp
public override string Inno.Editor.Interactions.EditorViewportShortcut.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L68).

## `key`

<a id="api-e394495fbb36c84b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportShortcut.key f1fae4bfafc6a5d2ff2065d507730298e3cfaeb308e59b60c2ccfb0b5fa32bbc -->

```csharp
public Inno.Core.Input.KeyCode Inno.Editor.Interactions.EditorViewportShortcut.key { get; }
```

Gets the pressed key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L95).

## `modifiers`

<a id="api-d6b0379d43984a8c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportShortcut.modifiers 3f86d4617f76bdd296b706b588db8ab624b23c9efa5146976cc11a148050090b -->

```csharp
public Inno.Core.Input.KeyModifier Inno.Editor.Interactions.EditorViewportShortcut.modifiers { get; }
```

Gets active keyboard modifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L100).

## `repeat`

<a id="api-31645600ab207ad2"></a>
<!-- api: P:Inno.Editor.Interactions.EditorViewportShortcut.repeat d27407ebdc661fc6048fbc4265f8711edc81377303c51e3db6dfd3542e5d522f -->

```csharp
public bool Inno.Editor.Interactions.EditorViewportShortcut.repeat { get; }
```

Gets whether the shortcut is an auto-repeat press.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Viewport/EditorViewportTool.cs#L105).
