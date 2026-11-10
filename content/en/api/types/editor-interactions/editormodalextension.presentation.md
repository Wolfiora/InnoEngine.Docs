---
title: "EditorModalExtension.Presentation"
description: "Reference for EditorModalExtension.Presentation in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.9f0300123a850e3f
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorModalExtension.Presentation`

This reference describes `EditorModalExtension.Presentation` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Interactions.EditorModalExtension.Presentation>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-94235cdfac09f0ab) | Method |
| [`Equals`](#api-4c4b179f047617b9) | Method |
| [`Equals`](#api-9d85c00ddea5415f) | Method |
| [`GetHashCode`](#api-17dd2a8f242ec547) | Method |
| [`op_Equality`](#api-e08943f78f7c16ae) | Method |
| [`op_Inequality`](#api-ac08bbb566f6f29f) | Method |
| [`ToString`](#api-4eeab27fae56868b) | Method |
| [`allowScrolling`](#api-74060a2c8ad9c083) | Property |
| [`blocksInteraction`](#api-ee01e2f01b8319b5) | Property |
| [`canMove`](#api-e62163d6ac5b274f) | Property |
| [`canResize`](#api-85f689c01e866460) | Property |
| [`initialSize`](#api-44b95ff11bbcea3c) | Property |
| [`isVisible`](#api-467d52dd8be34b87) | Property |
| [`minimumSize`](#api-6eb7d52d4df223a8) | Property |

## Type declaration

<a id="api-9f0300123a850e3f"></a>
<!-- api: T:Inno.Editor.Interactions.EditorModalExtension.Presentation 40412fb3f06c22bb98c23b08a7ea54d5ba98e6ee9eb3f383fc98873654aeb689 -->

```csharp
public readonly record struct Inno.Editor.Interactions.EditorModalExtension.Presentation : System.IEquatable<Inno.Editor.Interactions.EditorModalExtension.Presentation>
```

Stores immutable modal window policy values read from one extension generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `#ctor`

<a id="api-94235cdfac09f0ab"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.#ctor(System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Numerics.Vector2,System.Numerics.Vector2) 4bde8b680593689a821b485e9281c05cc07934a796272324db7425a1fefb61e2 -->

```csharp
public Inno.Editor.Interactions.EditorModalExtension.Presentation.Presentation(bool isVisible, bool blocksInteraction, bool canMove, bool canResize, bool allowScrolling, System.Numerics.Vector2 initialSize, System.Numerics.Vector2 minimumSize)
```

Creates an immutable modal presentation snapshot.

**Parameter `isVisible`:** Whether the modal should currently be visible.

**Parameter `blocksInteraction`:** Whether the modal blocks regular editor interaction.

**Parameter `canMove`:** Whether the modal window can be moved.

**Parameter `canResize`:** Whether the modal window can be resized.

**Parameter `allowScrolling`:** Whether the modal window owns overflow scrolling.

**Parameter `initialSize`:** The initial size in unscaled editor units.

**Parameter `minimumSize`:** The minimum size in unscaled editor units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L197).

## `Equals`

<a id="api-4c4b179f047617b9"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.Equals(Inno.Editor.Interactions.EditorModalExtension.Presentation) cdcb8e469595f378d4b18ce8aa531c891a5b4583d08774e96ea1592d4f9d30e1 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Presentation.Equals(Inno.Editor.Interactions.EditorModalExtension.Presentation other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `Equals`

<a id="api-9d85c00ddea5415f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.Equals(System.Object) 2d585c34b0f6f7586a146954572556c0300d37761b070d1a5b3d90648fc526a5 -->

```csharp
public override bool Inno.Editor.Interactions.EditorModalExtension.Presentation.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `GetHashCode`

<a id="api-17dd2a8f242ec547"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.GetHashCode d92081ee0b6082b4b22b3b89f8c28bd9f8f7adafb0df9fdb5d283ea5f2f40e52 -->

```csharp
public override int Inno.Editor.Interactions.EditorModalExtension.Presentation.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `op_Equality`

<a id="api-e08943f78f7c16ae"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.op_Equality(Inno.Editor.Interactions.EditorModalExtension.Presentation,Inno.Editor.Interactions.EditorModalExtension.Presentation) 3ecf16f45dd98b52196d9e8fc7fb1ac4a85bd266fe6495ea375fdf64e9ca1fda -->

```csharp
public static bool Inno.Editor.Interactions.EditorModalExtension.Presentation.operator ==(Inno.Editor.Interactions.EditorModalExtension.Presentation left, Inno.Editor.Interactions.EditorModalExtension.Presentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `op_Inequality`

<a id="api-ac08bbb566f6f29f"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.op_Inequality(Inno.Editor.Interactions.EditorModalExtension.Presentation,Inno.Editor.Interactions.EditorModalExtension.Presentation) 417fc7f2dac023d2b52b7deb3ffa16e991efc2cccfa7f254a9e09812e5e53ee1 -->

```csharp
public static bool Inno.Editor.Interactions.EditorModalExtension.Presentation.operator !=(Inno.Editor.Interactions.EditorModalExtension.Presentation left, Inno.Editor.Interactions.EditorModalExtension.Presentation right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `ToString`

<a id="api-4eeab27fae56868b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorModalExtension.Presentation.ToString 26e84cd02111f15186db75cad2e6ddea8806cfa73e1c5a35ec614100a6a2865b -->

```csharp
public override string Inno.Editor.Interactions.EditorModalExtension.Presentation.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L171).

## `allowScrolling`

<a id="api-74060a2c8ad9c083"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.allowScrolling a1932eee9b06a5d28fbc7d96c3d1e23a058041a3ba032fac2652718c7c51fd12 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Presentation.allowScrolling { get; }
```

Gets whether overflow scrolling belongs to the modal window.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L238).

## `blocksInteraction`

<a id="api-ee01e2f01b8319b5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.blocksInteraction f99469fb734c3eea805e63a76ec51e73ebaf86e0f047152a71a267ba48224d38 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Presentation.blocksInteraction { get; }
```

Gets whether the modal blocks regular editor interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L223).

## `canMove`

<a id="api-e62163d6ac5b274f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.canMove 61751196a98060fa2bd4171acc5390c56ff7d3a874f36b99906fe543132c2582 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Presentation.canMove { get; }
```

Gets whether the modal window can be moved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L228).

## `canResize`

<a id="api-85f689c01e866460"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.canResize f8d30fa1b462fcf7133346e14b6f5c2f5325c8e0abd9fc6c03838f48e88fc664 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Presentation.canResize { get; }
```

Gets whether the modal window can be resized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L233).

## `initialSize`

<a id="api-44b95ff11bbcea3c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.initialSize 1a2e2d6777e7d4717fcd540f37b62b9f0c326b0a1088374aa53de05999e32bfd -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Interactions.EditorModalExtension.Presentation.initialSize { get; }
```

Gets the initial size in unscaled editor units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L243).

## `isVisible`

<a id="api-467d52dd8be34b87"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.isVisible 892e5a383a68da732707ee66e73a8f85de55624c2b5dce3a2d30d542e104f3c0 -->

```csharp
public bool Inno.Editor.Interactions.EditorModalExtension.Presentation.isVisible { get; }
```

Gets whether the modal should currently be visible.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L218).

## `minimumSize`

<a id="api-6eb7d52d4df223a8"></a>
<!-- api: P:Inno.Editor.Interactions.EditorModalExtension.Presentation.minimumSize f2585dc304b539c75016f66c53f0fafbc94afa757cbcbf1861a738520539e0a3 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Interactions.EditorModalExtension.Presentation.minimumSize { get; }
```

Gets the minimum size in unscaled editor units.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Runtime/EditorModalExtension.cs#L248).
