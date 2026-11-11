---
title: "EditorViewportFocusBounds"
description: "Reference for EditorViewportFocusBounds in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.7db58ea7fe6ccb4b
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportFocusBounds`

This reference describes `EditorViewportFocusBounds` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Editor.Rendering.EditorViewportFocusBounds>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-81e8347a3c94f285) | Method |
| [`Equals`](#api-34b80716b638c225) | Method |
| [`Equals`](#api-b4b1e64b0589dd69) | Method |
| [`GetHashCode`](#api-095705f8800e0b2c) | Method |
| [`op_Equality`](#api-9c9873e01ffa615e) | Method |
| [`op_Inequality`](#api-c02b34a17030c362) | Method |
| [`ToString`](#api-3313e3654713dc0d) | Method |
| [`center`](#api-297a24d9107c8355) | Property |
| [`radius`](#api-f49a6a1c54547701) | Property |

## Type declaration

<a id="api-7db58ea7fe6ccb4b"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportFocusBounds 78ca1b18e6c21249cc4a2457c0e2fe978a1b2e736168eeb99d242b96287b40ee -->

```csharp
public readonly record struct Inno.Editor.Rendering.EditorViewportFocusBounds : System.IEquatable<Inno.Editor.Rendering.EditorViewportFocusBounds>
```

Describes a world-space sphere that can be framed by host navigation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `#ctor`

<a id="api-81e8347a3c94f285"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.#ctor(Inno.Core.Mathematics.Vector3,System.Single) 6a6098f9a9f9a91198525360ecd5c6a583f283aa636d813a96804b34bc0e0a19 -->

```csharp
public Inno.Editor.Rendering.EditorViewportFocusBounds.EditorViewportFocusBounds(Inno.Core.Mathematics.Vector3 center, float radius)
```

Creates a finite focus bound.

**Parameter `center`:** World-space focus center.

**Parameter `radius`:** Non-negative world-space radius.

**Throws `System.ArgumentException`:** Thrown when the center contains a non-finite value.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when the radius is negative or non-finite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L142).

## `Equals`

<a id="api-34b80716b638c225"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.Equals(Inno.Editor.Rendering.EditorViewportFocusBounds) 3ce5f03560e74038b37e4db3951c6f7a2f45d3dbc4e6337ea7b2157d74502bb6 -->

```csharp
public bool Inno.Editor.Rendering.EditorViewportFocusBounds.Equals(Inno.Editor.Rendering.EditorViewportFocusBounds other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `Equals`

<a id="api-b4b1e64b0589dd69"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.Equals(System.Object) 2c4abf532741c855318bbd50a257d7f39022e947ebb944b57d17f5be70390cff -->

```csharp
public override bool Inno.Editor.Rendering.EditorViewportFocusBounds.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `GetHashCode`

<a id="api-095705f8800e0b2c"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.GetHashCode 977bfd2093816805946c0a86dda8409d5dbf3a67f438a7309f1a37590b06ae2b -->

```csharp
public override int Inno.Editor.Rendering.EditorViewportFocusBounds.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `op_Equality`

<a id="api-9c9873e01ffa615e"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.op_Equality(Inno.Editor.Rendering.EditorViewportFocusBounds,Inno.Editor.Rendering.EditorViewportFocusBounds) 26da972210eaddb4d50b644ce79bc5a7c4a861d033c1f2742e06fcddb80a695c -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportFocusBounds.operator ==(Inno.Editor.Rendering.EditorViewportFocusBounds left, Inno.Editor.Rendering.EditorViewportFocusBounds right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `op_Inequality`

<a id="api-c02b34a17030c362"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.op_Inequality(Inno.Editor.Rendering.EditorViewportFocusBounds,Inno.Editor.Rendering.EditorViewportFocusBounds) 67f8100c6b160ca217e38214e16f1dccdb104bb1ae871ad88cc810dcd6fb23fa -->

```csharp
public static bool Inno.Editor.Rendering.EditorViewportFocusBounds.operator !=(Inno.Editor.Rendering.EditorViewportFocusBounds left, Inno.Editor.Rendering.EditorViewportFocusBounds right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `ToString`

<a id="api-3313e3654713dc0d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportFocusBounds.ToString 20604145e8611043b8bf93b7515f7750b671f4b1aefe14056460579cb5b3be57 -->

```csharp
public override string Inno.Editor.Rendering.EditorViewportFocusBounds.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L125).

## `center`

<a id="api-297a24d9107c8355"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportFocusBounds.center c9b91ec4b3a61a9abeb119049627b2cefc4a44cadfcc56530509200642b6845b -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorViewportFocusBounds.center { get; }
```

Gets the world-space focus center.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L157).

## `radius`

<a id="api-f49a6a1c54547701"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportFocusBounds.radius 18d71f63d480fa6b622242ce33efb88508e533bf47255998e982d0bcf5b21eda -->

```csharp
public float Inno.Editor.Rendering.EditorViewportFocusBounds.radius { get; }
```

Gets the non-negative world-space radius.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L162).
