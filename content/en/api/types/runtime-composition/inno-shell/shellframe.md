---
title: "ShellFrame"
description: "Reference for ShellFrame in Inno.Shell."
uid: api.inno.shell.5090426a4edb698c
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `ShellFrame`

This reference describes `ShellFrame` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Shell.ShellFrame>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-57d720cb127598cc) | Method |
| [`Equals`](#api-5ce09374267ceae4) | Method |
| [`Equals`](#api-fc4c53267116c131) | Method |
| [`GetHashCode`](#api-5b96c55547d963d8) | Method |
| [`op_Equality`](#api-46488cb71d97c62a) | Method |
| [`op_Inequality`](#api-ff3591600afbc5dc) | Method |
| [`ToString`](#api-f8cabff41b58b6ae) | Method |
| [`deltaTime`](#api-575b9c5db31e0c91) | Property |
| [`frameIndex`](#api-54e2bd295e831201) | Property |
| [`totalTime`](#api-68fd9fbaf98e5253) | Property |

## Type declaration

<a id="api-5090426a4edb698c"></a>
<!-- api: T:Inno.Shell.ShellFrame 41c836564babf960c878f7f4f3b0cec0533210bfc03697b38ce9f7de6a65fee6 -->

```csharp
public readonly record struct Inno.Shell.ShellFrame : System.IEquatable<Inno.Shell.ShellFrame>
```

Captures immutable timing and identity for one composition-shell frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `#ctor`

<a id="api-57d720cb127598cc"></a>
<!-- api: M:Inno.Shell.ShellFrame.#ctor(System.Int32,System.Double,System.Single) fb38f5564752690a0cce13ba564803be2663a84398257c5c4b12a689cd7c4e64 -->

```csharp
public Inno.Shell.ShellFrame.ShellFrame(int frameIndex, double totalTime, float deltaTime)
```

Creates one validated shell frame.

**Parameter `frameIndex`:** Zero-based shell frame index.

**Parameter `totalTime`:** Monotonic elapsed host time in seconds.

**Parameter `deltaTime`:** Non-negative elapsed time since the previous frame in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L22).

## `Equals`

<a id="api-5ce09374267ceae4"></a>
<!-- api: M:Inno.Shell.ShellFrame.Equals(Inno.Shell.ShellFrame) 85bbd27d6aa8b166c79ddfe75550e7e9ec8d03ae7b6abe60100d7cdbe3040ace -->

```csharp
public bool Inno.Shell.ShellFrame.Equals(Inno.Shell.ShellFrame other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `Equals`

<a id="api-fc4c53267116c131"></a>
<!-- api: M:Inno.Shell.ShellFrame.Equals(System.Object) 73f04d41ae8c13b9589ee2c91ea967a538b63aa28b569be626867da63a71c080 -->

```csharp
public override bool Inno.Shell.ShellFrame.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `GetHashCode`

<a id="api-5b96c55547d963d8"></a>
<!-- api: M:Inno.Shell.ShellFrame.GetHashCode 31076f0396744004e897611d7d266b63e543b0c47729fe2073dc4dde5c344ec8 -->

```csharp
public override int Inno.Shell.ShellFrame.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `op_Equality`

<a id="api-46488cb71d97c62a"></a>
<!-- api: M:Inno.Shell.ShellFrame.op_Equality(Inno.Shell.ShellFrame,Inno.Shell.ShellFrame) fd8514b53f64623f0eac6b39730ae334ca543325615b74ff7dfb34181bf22775 -->

```csharp
public static bool Inno.Shell.ShellFrame.operator ==(Inno.Shell.ShellFrame left, Inno.Shell.ShellFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `op_Inequality`

<a id="api-ff3591600afbc5dc"></a>
<!-- api: M:Inno.Shell.ShellFrame.op_Inequality(Inno.Shell.ShellFrame,Inno.Shell.ShellFrame) 52a21c98817c1df7c1f12998e81c0c94d51a948bc012d23d147f03f5999f2534 -->

```csharp
public static bool Inno.Shell.ShellFrame.operator !=(Inno.Shell.ShellFrame left, Inno.Shell.ShellFrame right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `ToString`

<a id="api-f8cabff41b58b6ae"></a>
<!-- api: M:Inno.Shell.ShellFrame.ToString ccf65c7e44fa3cf0f7f2cbe3b9b19b6b460f7150b63319d8f490869a568c65d0 -->

```csharp
public override string Inno.Shell.ShellFrame.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L8).

## `deltaTime`

<a id="api-575b9c5db31e0c91"></a>
<!-- api: P:Inno.Shell.ShellFrame.deltaTime b08669275323985c8fa1b85393fb520a6281f920811c3802a9242e91321dfbc8 -->

```csharp
public float Inno.Shell.ShellFrame.deltaTime { get; }
```

Gets non-negative elapsed time since the previous frame in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L48).

## `frameIndex`

<a id="api-54e2bd295e831201"></a>
<!-- api: P:Inno.Shell.ShellFrame.frameIndex c83bc257f2ceafac94eb256cb0394c2e3cc134572ef941c19df14ab77b8f7a87 -->

```csharp
public int Inno.Shell.ShellFrame.frameIndex { get; }
```

Gets the zero-based shell frame index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L38).

## `totalTime`

<a id="api-68fd9fbaf98e5253"></a>
<!-- api: P:Inno.Shell.ShellFrame.totalTime 2afd02881b3dfc19fa3a9aa0725048f3644f9b2a1c014a8ef3c92fa53dd14606 -->

```csharp
public double Inno.Shell.ShellFrame.totalTime { get; }
```

Gets monotonic elapsed host time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellFrame.cs#L43).
