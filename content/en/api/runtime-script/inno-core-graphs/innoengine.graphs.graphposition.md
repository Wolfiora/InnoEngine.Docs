---
title: "GraphPosition"
description: "Reference for GraphPosition in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.1a661491138f9c8c
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphPosition`

This reference describes `GraphPosition` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Graphs.GraphPosition>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7c794855aba10381) | Method |
| [`Equals`](#api-e76904a2e382f388) | Method |
| [`Equals`](#api-b7836233b7542364) | Method |
| [`GetHashCode`](#api-6f8134a4545327bd) | Method |
| [`op_Equality`](#api-1fe674f17e530dd7) | Method |
| [`op_Inequality`](#api-c410b057b69a8d4e) | Method |
| [`ToString`](#api-0da4af8f02785f22) | Method |
| [`x`](#api-59910bd03fefe2a4) | Property |
| [`y`](#api-6ef866968bdd6550) | Property |

## Type declaration

<a id="api-1a661491138f9c8c"></a>
<!-- api: T:InnoEngine.Graphs.GraphPosition b0c30f50ee1cb34956de4e5a7ebdd289f268bedd114eeb2ed8b6890757948136 -->

```csharp
public readonly struct InnoEngine.Graphs.GraphPosition : System.IEquatable<InnoEngine.Graphs.GraphPosition>
```

Stores a graph-space position independently from any editor UI framework.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `#ctor`

<a id="api-7c794855aba10381"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.#ctor(System.Single,System.Single) 8f2ac4688f362ab32ae5ffdc2f1dead701871ae047dacd30abd05afd2d32047c -->

```csharp
public InnoEngine.Graphs.GraphPosition.GraphPosition(float x, float y)
```

Creates a graph-space position.

**Parameter `x`:** Horizontal graph-space coordinate.

**Parameter `y`:** Vertical graph-space coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L121).

## `Equals`

<a id="api-e76904a2e382f388"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.Equals(InnoEngine.Graphs.GraphPosition) 3676af16d235aa078793b218f9afa447899b21b2b9e8f7cbb6db8d740888ae4a -->

```csharp
public bool InnoEngine.Graphs.GraphPosition.Equals(InnoEngine.Graphs.GraphPosition other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `Equals`

<a id="api-b7836233b7542364"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.Equals(System.Object) 9af7727a0d32b221f8f99c5e8bb934852c75a37fd5b955e398fc4ac6e27f811a -->

```csharp
public override bool InnoEngine.Graphs.GraphPosition.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `GetHashCode`

<a id="api-6f8134a4545327bd"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.GetHashCode ce11eb1e1f4f46969e8118a46bfaaf4538d4bf7b211c6810c3eb6ccb8611e192 -->

```csharp
public override int InnoEngine.Graphs.GraphPosition.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `op_Equality`

<a id="api-1fe674f17e530dd7"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.op_Equality(InnoEngine.Graphs.GraphPosition,InnoEngine.Graphs.GraphPosition) 70d999cd4b0ae0705fd85c18ade97d63ec4f4d5e69e343c07174328a51cccbf3 -->

```csharp
public static bool InnoEngine.Graphs.GraphPosition.operator ==(InnoEngine.Graphs.GraphPosition left, InnoEngine.Graphs.GraphPosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `op_Inequality`

<a id="api-c410b057b69a8d4e"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.op_Inequality(InnoEngine.Graphs.GraphPosition,InnoEngine.Graphs.GraphPosition) 0afb36e22ca03f74ce76e3e5ae9088cdcc94c40fc7c9a2972f81106207e12652 -->

```csharp
public static bool InnoEngine.Graphs.GraphPosition.operator !=(InnoEngine.Graphs.GraphPosition left, InnoEngine.Graphs.GraphPosition right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `ToString`

<a id="api-0da4af8f02785f22"></a>
<!-- api: M:InnoEngine.Graphs.GraphPosition.ToString 0b7da52ca3246e413597532f4db6d824855e3101746ac1feb2168296354a8864 -->

```csharp
public override string InnoEngine.Graphs.GraphPosition.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L110).

## `x`

<a id="api-59910bd03fefe2a4"></a>
<!-- api: P:InnoEngine.Graphs.GraphPosition.x d4c151a14b838a2f8ccc9162ea8078d64958c0403501d25ff7c83604792b97ec -->

```csharp
public float InnoEngine.Graphs.GraphPosition.x { get; }
```

Gets the horizontal graph-space coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L132).

## `y`

<a id="api-6ef866968bdd6550"></a>
<!-- api: P:InnoEngine.Graphs.GraphPosition.y 06175f79e7cd7e886bc36b07f71dd9ce45cf8cba3f5acf3b8658ded4da689632 -->

```csharp
public float InnoEngine.Graphs.GraphPosition.y { get; }
```

Gets the vertical graph-space coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphIds.cs#L137).
