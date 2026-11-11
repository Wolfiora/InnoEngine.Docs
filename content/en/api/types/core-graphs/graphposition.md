---
title: "GraphPosition"
description: "Reference for GraphPosition in Inno.Core.Graphs."
uid: api.inno.core.graphs.589486febed2e377
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphPosition`

This reference describes `GraphPosition` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.Graphs.GraphPosition>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d1a10143667809b2) | Method |
| [`Equals`](#api-7ee11082da69ec31) | Method |
| [`Equals`](#api-7d1b2814be826883) | Method |
| [`GetHashCode`](#api-883c9e53b18be1b1) | Method |
| [`op_Equality`](#api-669626e40a873c3e) | Method |
| [`op_Inequality`](#api-345275b71fc77d0b) | Method |
| [`ToString`](#api-dba7a4022aae0d4e) | Method |
| [`x`](#api-85d2b41bca73b859) | Property |
| [`y`](#api-416d3c8f13cf5e98) | Property |

## Type declaration

<a id="api-589486febed2e377"></a>
<!-- api: T:Inno.Core.Graphs.GraphPosition 09193384201578fd1908ca6a08a01b80a4af86d08795dca6b185c42e6355f3c1 -->

```csharp
public readonly record struct Inno.Core.Graphs.GraphPosition : System.IEquatable<Inno.Core.Graphs.GraphPosition>
```

Stores a graph-space position independently from any editor UI framework.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `#ctor`

<a id="api-d1a10143667809b2"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.#ctor(System.Single,System.Single) 2c1ad419a9fdb8e944ae1f6158115d6414df4db6e8907ec52bcecdda9dcfc22f -->

```csharp
public Inno.Core.Graphs.GraphPosition.GraphPosition(float x, float y)
```

Creates a graph-space position.

**Parameter `x`:** Horizontal graph-space coordinate.

**Parameter `y`:** Vertical graph-space coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L121).

## `Equals`

<a id="api-7ee11082da69ec31"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.Equals(Inno.Core.Graphs.GraphPosition) e9996a40777ce13c754fcf82685d96ef0e2cbdc2a9514ea02d81678079e8772a -->

```csharp
public bool Inno.Core.Graphs.GraphPosition.Equals(Inno.Core.Graphs.GraphPosition other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `Equals`

<a id="api-7d1b2814be826883"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.Equals(System.Object) 3758f1ce01fc3a50a164630b4aa1089a75c9eadd7df1eb146d84466cffa40539 -->

```csharp
public override bool Inno.Core.Graphs.GraphPosition.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `GetHashCode`

<a id="api-883c9e53b18be1b1"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.GetHashCode 7355ae030537bdf49bb097a9fa6bb5988d86b149be84679148a92d060b6ca62a -->

```csharp
public override int Inno.Core.Graphs.GraphPosition.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `op_Equality`

<a id="api-669626e40a873c3e"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.op_Equality(Inno.Core.Graphs.GraphPosition,Inno.Core.Graphs.GraphPosition) 8b7c1a7f1d30b53498a61bd64f3d610bb13af594bfd72599e32f8de1c9104a66 -->

```csharp
public static bool Inno.Core.Graphs.GraphPosition.operator ==(Inno.Core.Graphs.GraphPosition left, Inno.Core.Graphs.GraphPosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `op_Inequality`

<a id="api-345275b71fc77d0b"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.op_Inequality(Inno.Core.Graphs.GraphPosition,Inno.Core.Graphs.GraphPosition) 8f9ad02f68270798d9c9bbfc04cc950181bb7033c6015b27b395bb21910d2a15 -->

```csharp
public static bool Inno.Core.Graphs.GraphPosition.operator !=(Inno.Core.Graphs.GraphPosition left, Inno.Core.Graphs.GraphPosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `ToString`

<a id="api-dba7a4022aae0d4e"></a>
<!-- api: M:Inno.Core.Graphs.GraphPosition.ToString dc28bfc9024a49fbe6e68a90c48b794e7a084ff6f71b8b713c6ba077c808e315 -->

```csharp
public override string Inno.Core.Graphs.GraphPosition.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `x`

<a id="api-85d2b41bca73b859"></a>
<!-- api: P:Inno.Core.Graphs.GraphPosition.x eb4a505b0b7def8381ac9006f519cb829639f91d88455df04a8224ec0c19b9ad -->

```csharp
public float Inno.Core.Graphs.GraphPosition.x { get; }
```

Gets the horizontal graph-space coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L132).

## `y`

<a id="api-416d3c8f13cf5e98"></a>
<!-- api: P:Inno.Core.Graphs.GraphPosition.y c2bbbd6aae2700a79ebc1a3688197a625fd4ce1e8939d2aa7545fa65220b06c6 -->

```csharp
public float Inno.Core.Graphs.GraphPosition.y { get; }
```

Gets the vertical graph-space coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L137).
