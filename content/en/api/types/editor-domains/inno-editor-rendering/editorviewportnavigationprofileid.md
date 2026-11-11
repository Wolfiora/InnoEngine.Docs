---
title: "EditorViewportNavigationProfileId"
description: "Reference for EditorViewportNavigationProfileId in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.ef13dcce0b5129f2
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportNavigationProfileId`

This reference describes `EditorViewportNavigationProfileId` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorViewportNavigationProfileId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1c61a53664c2bbfe) | Method |
| [`Equals`](#api-47d614664240da0e) | Method |
| [`Equals`](#api-8f091f83202ea7b7) | Method |
| [`GetHashCode`](#api-b0d81488c862127b) | Method |
| [`op_Equality`](#api-e067b902570abf5d) | Method |
| [`op_Inequality`](#api-d9baa175ae2c7958) | Method |
| [`ToString`](#api-64d6d4d9ee67e611) | Method |
| [`isValid`](#api-5f6ae80ba954d394) | Property |
| [`value`](#api-94be5ed09f1904f7) | Property |

## Type declaration

<a id="api-ef13dcce0b5129f2"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportNavigationProfileId 97df785bb21458c39a722954e7aaca3eda856e87f4a22e1582b9ecb8fb74e6ce -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorViewportNavigationProfileId : System.IEquatable<Inno.Editor.Rendering.EditorViewportNavigationProfileId>
```

Identifies a provider-defined navigation profile across reload generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `#ctor`

<a id="api-1c61a53664c2bbfe"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.#ctor(System.String) 13645e022c389f0bb7c45f443fe8a19071b7c67af2baedbe20fce4d3b99a42af -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationProfileId.EditorViewportNavigationProfileId(string value)
```

Creates a stable profile identifier.

**Parameter `value`:** Globally stable profile identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L97).

## `Equals`

<a id="api-47d614664240da0e"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.Equals(Inno.Editor.Rendering.EditorViewportNavigationProfileId) 173b8bfa2eaefc05ff7ce4bd3e45519495da4f498bda305afef35b084d806aa4 -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportNavigationProfileId.Equals(Inno.Editor.Rendering.EditorViewportNavigationProfileId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `Equals`

<a id="api-8f091f83202ea7b7"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.Equals(System.Object) 0e803298a89ce37f8261bb6c90aed7aea460cd1f48a5892f4635d1ba7a87797c -->

```csharp
public override bool Inno.Editor.Rendering.EditorViewportNavigationProfileId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `GetHashCode`

<a id="api-b0d81488c862127b"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.GetHashCode 2f831451b2d2119a5a6897af4fa37c07ed85c0edf4a49cda2b033c289c7b5b05 -->

```csharp
public override int Inno.Editor.Rendering.EditorViewportNavigationProfileId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `op_Equality`

<a id="api-e067b902570abf5d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.op_Equality(Inno.Editor.Rendering.EditorViewportNavigationProfileId,Inno.Editor.Rendering.EditorViewportNavigationProfileId) edf7f2e6a32fdd7d6062a3238db3b66000eea007845800b1179451e61efe3692 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportNavigationProfileId.operator ==(Inno.Editor.Rendering.EditorViewportNavigationProfileId left, Inno.Editor.Rendering.EditorViewportNavigationProfileId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `op_Inequality`

<a id="api-d9baa175ae2c7958"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.op_Inequality(Inno.Editor.Rendering.EditorViewportNavigationProfileId,Inno.Editor.Rendering.EditorViewportNavigationProfileId) 188499e42ae4d4eb040ce0627796822d20680ba174f377e079ff08bab8bbd1a2 -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportNavigationProfileId.operator !=(Inno.Editor.Rendering.EditorViewportNavigationProfileId left, Inno.Editor.Rendering.EditorViewportNavigationProfileId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L89).

## `ToString`

<a id="api-64d6d4d9ee67e611"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfileId.ToString 8817cedaa05e9e2dd10874a54594ebc6c84b0acbdaedeeef7c9e18d78d1ba718 -->

```csharp
public override string Inno.Editor.Rendering.EditorViewportNavigationProfileId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L119).

## `isValid`

<a id="api-5f6ae80ba954d394"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfileId.isValid 4ab776e243b9693e276536784872390fef35721e623b9ec11bc5ee6ba585225b -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportNavigationProfileId.isValid { get; }
```

Gets whether this identifier contains a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L111).

## `value`

<a id="api-94be5ed09f1904f7"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfileId.value f2d35d6b3548fd30145b5856adb1e805b8f0b4a30e9920d25f7a515e52fcf074 -->

```csharp
public string Inno.Editor.Rendering.EditorViewportNavigationProfileId.value { get; }
```

Gets the stable profile identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L106).
