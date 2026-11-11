---
title: "BuildProgress"
description: "Reference for BuildProgress in Inno.Build."
uid: api.inno.build.ec371a3dbdfeea61
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildProgress`

This reference describes `BuildProgress` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Build.BuildProgress>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ee31860a37c9022a) | Method |
| [`Equals`](#api-7dc3ef1785ec23f3) | Method |
| [`Equals`](#api-a45adebd1eeddd46) | Method |
| [`GetHashCode`](#api-e90150cae049b392) | Method |
| [`op_Equality`](#api-15fbb5c4fadeb5be) | Method |
| [`op_Inequality`](#api-4ae543d8dae01035) | Method |
| [`ToString`](#api-969f96abc141f16e) | Method |
| [`fraction`](#api-3beb0047b031076f) | Property |
| [`message`](#api-0509a452ff304783) | Property |
| [`stage`](#api-6e882afeaf2f6778) | Property |

## Type declaration

<a id="api-ec371a3dbdfeea61"></a>
<!-- api: T:Inno.Build.BuildProgress c2fd68e75720b7dac89f255f657a27cd15466e478f45b9b88bd5e68bc6151f92 -->

```csharp
public readonly record struct Inno.Build.BuildProgress : System.IEquatable<Inno.Build.BuildProgress>
```

Reports monotonic progress for one asynchronous build operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `#ctor`

<a id="api-ee31860a37c9022a"></a>
<!-- api: M:Inno.Build.BuildProgress.#ctor(System.String,System.Double,System.String) b3bbccf3a66f5917e04b0f671aa68c7ff7388aba0b984eb7f2c3d7647327390f -->

```csharp
public Inno.Build.BuildProgress.BuildProgress(string stage, double fraction, string message)
```

Creates a validated progress update.

**Parameter `stage`:** The stable build stage name.

**Parameter `fraction`:** The completed fraction in the inclusive range from zero to one.

**Parameter `message`:** A concise human-readable status message.

**Throws `System.ArgumentException`:** Thrown when stage or message is empty.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when fraction is outside the supported range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L28).

## `Equals`

<a id="api-7dc3ef1785ec23f3"></a>
<!-- api: M:Inno.Build.BuildProgress.Equals(Inno.Build.BuildProgress) d3b4b25224058353f8266cc05683d05fae7a87b3d6d8eda025cafdf3385ec056 -->

```csharp
public bool Inno.Build.BuildProgress.Equals(Inno.Build.BuildProgress other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `Equals`

<a id="api-a45adebd1eeddd46"></a>
<!-- api: M:Inno.Build.BuildProgress.Equals(System.Object) d7f1c7de4dc6ece136c69bef065d34c336bf8d4ab282c42e3672eece9d8529e7 -->

```csharp
public override bool Inno.Build.BuildProgress.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `GetHashCode`

<a id="api-e90150cae049b392"></a>
<!-- api: M:Inno.Build.BuildProgress.GetHashCode 8237169447dfc241932ed0c583d9537a48745eb2db5b940a9efdd5c71d6ebe9c -->

```csharp
public override int Inno.Build.BuildProgress.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `op_Equality`

<a id="api-15fbb5c4fadeb5be"></a>
<!-- api: M:Inno.Build.BuildProgress.op_Equality(Inno.Build.BuildProgress,Inno.Build.BuildProgress) ded6a7460d166d2f2841423443aad2135b886177a9a08133855ba3b765e1b894 -->

```csharp
public static bool Inno.Build.BuildProgress.operator ==(Inno.Build.BuildProgress left, Inno.Build.BuildProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `op_Inequality`

<a id="api-4ae543d8dae01035"></a>
<!-- api: M:Inno.Build.BuildProgress.op_Inequality(Inno.Build.BuildProgress,Inno.Build.BuildProgress) 8e46a22a15508d2bbfb9e1eb64ca75ff4cb9c74f4ddc32aec8b5eb5d21b9f1bf -->

```csharp
public static bool Inno.Build.BuildProgress.operator !=(Inno.Build.BuildProgress left, Inno.Build.BuildProgress right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `ToString`

<a id="api-969f96abc141f16e"></a>
<!-- api: M:Inno.Build.BuildProgress.ToString 2ef930b4c2bec1864332d337171707b100b0fabc208bc16ec6ddc67d8e76218f -->

```csharp
public override string Inno.Build.BuildProgress.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L8).

## `fraction`

<a id="api-3beb0047b031076f"></a>
<!-- api: P:Inno.Build.BuildProgress.fraction e52db2e2be2e1120a6f8086fb09ac169f75d6ff88e04cfb1fcc18158bd19b893 -->

```csharp
public double Inno.Build.BuildProgress.fraction { get; }
```

Gets the completed fraction in the inclusive range from zero to one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L52).

## `message`

<a id="api-0509a452ff304783"></a>
<!-- api: P:Inno.Build.BuildProgress.message aa2a8a89b1539fdf2c4bf98d34f1985b366ef54ca92cc25ae6e61d74e14aa8c4 -->

```csharp
public string Inno.Build.BuildProgress.message { get; }
```

Gets a concise human-readable status message.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L57).

## `stage`

<a id="api-6e882afeaf2f6778"></a>
<!-- api: P:Inno.Build.BuildProgress.stage bd20cc48f37a9314689a2f9e9bfcc8059f016fb333398d2f498230051c81f0ae -->

```csharp
public string Inno.Build.BuildProgress.stage { get; }
```

Gets the stable build stage name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProgress.cs#L47).
