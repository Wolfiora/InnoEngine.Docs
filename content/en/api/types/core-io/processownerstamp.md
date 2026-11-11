---
title: "ProcessOwnerStamp"
description: "Reference for ProcessOwnerStamp in Inno.Core.IO."
uid: api.inno.core.io.7f2f8185cdf95dcb
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `ProcessOwnerStamp`

This reference describes `ProcessOwnerStamp` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Core.IO.ProcessOwnerStamp>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a576197e6f4fdf71) | Method |
| [`CaptureCurrent`](#api-01d9211921710308) | Method |
| [`Equals`](#api-fc8e523a89f9c32e) | Method |
| [`Equals`](#api-d1355b2550b12c95) | Method |
| [`GetHashCode`](#api-e8063f74cf8bf03e) | Method |
| [`op_Equality`](#api-f96efba737217cbc) | Method |
| [`op_Inequality`](#api-a08f1f92d3fe367c) | Method |
| [`Query`](#api-55ed7b0446634bc4) | Method |
| [`ToString`](#api-b850d12b46102d03) | Method |
| [`processId`](#api-237d1dc4b9fcc9ad) | Property |
| [`startedUtcTicks`](#api-32d7270ae6ab9208) | Property |

## Type declaration

<a id="api-7f2f8185cdf95dcb"></a>
<!-- api: T:Inno.Core.IO.ProcessOwnerStamp 0977df34360c86333460bdac5d71bbf1d41bc814a9be2bcb449dea602a254878 -->

```csharp
public readonly record struct Inno.Core.IO.ProcessOwnerStamp : System.IEquatable<Inno.Core.IO.ProcessOwnerStamp>
```

Identifies one process lifetime without retaining a process handle or confusing recycled identifiers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `#ctor`

<a id="api-a576197e6f4fdf71"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.#ctor(System.Int32,System.Int64) a2f06260165c37ec0b8b11ce583ee8876e4f12cc55d501b92cd9964a20dba798 -->

```csharp
public Inno.Core.IO.ProcessOwnerStamp.ProcessOwnerStamp(int processId, long startedUtcTicks)
```

Freezes the identifier and UTC start timestamp observed from the same process.

**Parameter `processId`:** The positive operating-system identifier.

**Parameter `startedUtcTicks`:** The positive UTC start timestamp in DateTime ticks.

**Throws `System.ArgumentOutOfRangeException`:** The identifier or timestamp is outside its valid range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L24).

## `CaptureCurrent`

<a id="api-01d9211921710308"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.CaptureCurrent 5291ac1399ce2bbd0c1fd5f0d841beba6f626f2e22249f5609528d611c6361d4 -->

```csharp
public static Inno.Core.IO.ProcessOwnerStamp Inno.Core.IO.ProcessOwnerStamp.CaptureCurrent()
```

Captures the current process lifetime and releases its temporary inspection handle.

**Returns:** The current process identifier and UTC start timestamp.

**Throws `System.ComponentModel.Win32Exception`:** The operating system cannot provide the current process start timestamp.

**Throws `System.PlatformNotSupportedException`:** The execution environment does not expose operating-system process lifetimes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L58).

## `Equals`

<a id="api-fc8e523a89f9c32e"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.Equals(Inno.Core.IO.ProcessOwnerStamp) 1b5398fb5c1e4b4d22c919883da0a813c90b10cab857764cd0caa614c6c73798 -->

```csharp
public bool Inno.Core.IO.ProcessOwnerStamp.Equals(Inno.Core.IO.ProcessOwnerStamp other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `Equals`

<a id="api-d1355b2550b12c95"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.Equals(System.Object) e0dbf5c3e0f7c925713ff655d1fe4f0b55d1519f7974d638864649d0aa2fa72d -->

```csharp
public override bool Inno.Core.IO.ProcessOwnerStamp.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `GetHashCode`

<a id="api-e8063f74cf8bf03e"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.GetHashCode f774573e60af1955c25b3fba2bd7b5c77481700ff7ce05c4f230c809fd0697c9 -->

```csharp
public override int Inno.Core.IO.ProcessOwnerStamp.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `op_Equality`

<a id="api-f96efba737217cbc"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.op_Equality(Inno.Core.IO.ProcessOwnerStamp,Inno.Core.IO.ProcessOwnerStamp) 7a8e4c70cf68b19e444b48ccc46522d6e2a582fdb9282bb3952e00eb11a71175 -->

```csharp
public static bool Inno.Core.IO.ProcessOwnerStamp.operator ==(Inno.Core.IO.ProcessOwnerStamp left, Inno.Core.IO.ProcessOwnerStamp right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `op_Inequality`

<a id="api-a08f1f92d3fe367c"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.op_Inequality(Inno.Core.IO.ProcessOwnerStamp,Inno.Core.IO.ProcessOwnerStamp) 7782b229a1774fa0fa74efab348aced7b5b693492ac62b45987c879973aa9b37 -->

```csharp
public static bool Inno.Core.IO.ProcessOwnerStamp.operator !=(Inno.Core.IO.ProcessOwnerStamp left, Inno.Core.IO.ProcessOwnerStamp right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `Query`

<a id="api-55ed7b0446634bc4"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.Query 9017ed62b3dfb691ebfb91478dcf443a7e906c0cb2d4fbb1a563ba2c90d3a0f8 -->

```csharp
public Inno.Core.IO.ProcessOwnerState Inno.Core.IO.ProcessOwnerStamp.Query()
```

Checks the exact lifetime conservatively without holding an operating-system handle afterwards.

**Returns:** Active for the matching live process, Exited for a missing or recycled process,
or Unknown for uninitialized stamps and inaccessible process information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L71).

## `ToString`

<a id="api-b850d12b46102d03"></a>
<!-- api: M:Inno.Core.IO.ProcessOwnerStamp.ToString d4808c98063fbd9fcc3aa8ba84d730226ef190d0754180d774826e3656d2407b -->

```csharp
public override string Inno.Core.IO.ProcessOwnerStamp.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L10).

## `processId`

<a id="api-237d1dc4b9fcc9ad"></a>
<!-- api: P:Inno.Core.IO.ProcessOwnerStamp.processId 63c33a420485b05bf86608d5ab7814d4e1a6c79aad8dc9dade6e32d00aae05c3 -->

```csharp
public int Inno.Core.IO.ProcessOwnerStamp.processId { get; }
```

Gets the operating-system identifier; zero denotes an uninitialized stamp.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L39).

## `startedUtcTicks`

<a id="api-32d7270ae6ab9208"></a>
<!-- api: P:Inno.Core.IO.ProcessOwnerStamp.startedUtcTicks 14c05ad68e01438544d82298082e1b68420fc3af6ec929ad091ea1b91049d758 -->

```csharp
public long Inno.Core.IO.ProcessOwnerStamp.startedUtcTicks { get; }
```

Gets the UTC start ticks; zero denotes an uninitialized stamp.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerStamp.cs#L44).
