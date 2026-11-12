---
title: "LogSessionId"
description: "Reference for LogSessionId in Inno.Core.Logging."
uid: api.inno.core.logging.runtime-script.d1c5a26cfd127f82
kind: api
owners:
  - Inno.Core.Logging
apiSurface: runtime-script
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
  - manual.scripting.use-script-api
---
# `LogSessionId`

This reference describes `LogSessionId` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Logging.LogSessionId>`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-f8e53c9d9a70e93a) | Method |
| [`Equals`](#api-7202834f594b4393) | Method |
| [`Equals`](#api-57799222469fb110) | Method |
| [`GetHashCode`](#api-cc020b055ca72095) | Method |
| [`op_Equality`](#api-143a6ae5848fab96) | Method |
| [`op_Inequality`](#api-07c0f38274087882) | Method |
| [`ToString`](#api-f89842b6704bc78a) | Method |
| [`isAssigned`](#api-3facfc59a0bd8e00) | Property |
| [`none`](#api-3bf05d48a11a3441) | Property |

## Type declaration

<a id="api-d1c5a26cfd127f82"></a>
<!-- api: T:InnoEngine.Logging.LogSessionId 583b9caa48f87ec9fcde1a03bde8905717b98d52b4b165952d7f04381570328d -->

```csharp
public readonly struct InnoEngine.Logging.LogSessionId : System.IEquatable<InnoEngine.Logging.LogSessionId>
```

Identifies the isolated runtime session that produced a log entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `Create`

<a id="api-f8e53c9d9a70e93a"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.Create df34feb9218e0786c326016f79d73be9d9b2616a2adf1d031f78c9a6fceb02bf -->

```csharp
public static InnoEngine.Logging.LogSessionId InnoEngine.Logging.LogSessionId.Create()
```

Creates a unique identifier for a new isolated runtime session.

**Returns:** A newly allocated non-empty session identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L33).

## `Equals`

<a id="api-7202834f594b4393"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.Equals(InnoEngine.Logging.LogSessionId) 4b5609bbc6d760c78882e86f0f7d0da9fd18cb2ec1f6419431c71fff74d4bcc2 -->

```csharp
public bool InnoEngine.Logging.LogSessionId.Equals(InnoEngine.Logging.LogSessionId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `Equals`

<a id="api-57799222469fb110"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.Equals(System.Object) 46b581ac4e4c93cb1aa067194df30616480aeb5fa8138171783e122c4fa9366a -->

```csharp
public override bool InnoEngine.Logging.LogSessionId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `GetHashCode`

<a id="api-cc020b055ca72095"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.GetHashCode 14832419cdba88eeca3f883b9e251391eb7968d30f0316b83f22e832356b72e8 -->

```csharp
public override int InnoEngine.Logging.LogSessionId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `op_Equality`

<a id="api-143a6ae5848fab96"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.op_Equality(InnoEngine.Logging.LogSessionId,InnoEngine.Logging.LogSessionId) 327d23cf601a73f6d976dc7c53205c837837c75cf76a3d169fdbe38944f1bc4b -->

```csharp
public static bool InnoEngine.Logging.LogSessionId.operator ==(InnoEngine.Logging.LogSessionId left, InnoEngine.Logging.LogSessionId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `op_Inequality`

<a id="api-07c0f38274087882"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.op_Inequality(InnoEngine.Logging.LogSessionId,InnoEngine.Logging.LogSessionId) 21eef342d01ddbc7b8b62ac5c4892ffb70e4a075f01694a748c1b9b313d686ef -->

```csharp
public static bool InnoEngine.Logging.LogSessionId.operator !=(InnoEngine.Logging.LogSessionId left, InnoEngine.Logging.LogSessionId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L8).

## `ToString`

<a id="api-f89842b6704bc78a"></a>
<!-- api: M:InnoEngine.Logging.LogSessionId.ToString 63b10b85f283b5d7216b7a683ac3b8ad74b4af69def10eb59274a18196816b68 -->

```csharp
public override string InnoEngine.Logging.LogSessionId.ToString()
```

Returns the stable textual representation used by diagnostics and persisted logs.

**Returns:** The lowercase hexadecimal identifier, or an empty string for process-level work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L41).

## `isAssigned`

<a id="api-3facfc59a0bd8e00"></a>
<!-- api: P:InnoEngine.Logging.LogSessionId.isAssigned c514e303f25606203e671fa3e57f958829caff9ddd9be2a70698a08293154543 -->

```csharp
public bool InnoEngine.Logging.LogSessionId.isAssigned { get; }
```

Gets whether this identifier names an isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L25).

## `none`

<a id="api-3bf05d48a11a3441"></a>
<!-- api: P:InnoEngine.Logging.LogSessionId.none 9e74521273908d11aa0b4173647488bcc64f897d77428bba9aafef31b92a76f0 -->

```csharp
public static InnoEngine.Logging.LogSessionId InnoEngine.Logging.LogSessionId.none { get; }
```

Gets an identifier that represents process-level work outside an isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/LogSessionId.cs#L20).
