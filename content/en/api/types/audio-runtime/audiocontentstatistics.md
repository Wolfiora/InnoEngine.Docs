---
title: "AudioContentStatistics"
description: "Reference for AudioContentStatistics in Inno.Audio.Runtime."
uid: api.inno.audio.runtime.969c5c3bee093916
kind: api
owners:
  - Inno.Audio.Runtime
apiSurface: source-clr
contracts:
  - project.inno-audio-runtime#composition-and-lifetime-contract
---
# `AudioContentStatistics`

This reference describes `AudioContentStatistics` in `Inno.Audio.Runtime`. Read the [shared contract](../../projects/inno-audio-runtime.md#composition-and-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Audio.Runtime.AudioContentStatistics>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ab87a63427cb06e1) | Method |
| [`Equals`](#api-dcea8e9bd6b51298) | Method |
| [`Equals`](#api-22056d7dbfa3576c) | Method |
| [`GetHashCode`](#api-1a15b40d1163ed1e) | Method |
| [`op_Equality`](#api-784a15d3f1b0782a) | Method |
| [`op_Inequality`](#api-fd1aa9780e42dddb) | Method |
| [`ToString`](#api-470ad72048bbb7a4) | Method |
| [`acceptedSnapshots`](#api-14917d171719f53b) | Property |
| [`capacity`](#api-c3649d021501c35f) | Property |
| [`rejectedProviders`](#api-28478e617ffcf517) | Property |

## Type declaration

<a id="api-969c5c3bee093916"></a>
<!-- api: T:Inno.Audio.Runtime.AudioContentStatistics b826dcfe0a36c856198d3a18c67642b68663a68f84f435d42649f7be92bc18cf -->

```csharp
public readonly record struct Inno.Audio.Runtime.AudioContentStatistics : System.IEquatable<Inno.Audio.Runtime.AudioContentStatistics>
```

Reports immutable content admission pressure from the most recent control-thread collection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `#ctor`

<a id="api-ab87a63427cb06e1"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.#ctor(System.Int32,System.Int32,System.Int32) 47e451a5011169bc786109b31c54d18e567a930a54d6378b5ccf7b1a99b944a1 -->

```csharp
public Inno.Audio.Runtime.AudioContentStatistics.AudioContentStatistics(int capacity, int acceptedSnapshots, int rejectedProviders)
```

Creates a content admission snapshot without retaining providers or host content.

**Parameter `capacity`:** Combined emitter and listener budget available to the update.

**Parameter `acceptedSnapshots`:** Snapshots accepted from fully validated provider contributions.

**Parameter `rejectedProviders`:** Provider contributions discarded because submission, validation, or capacity admission failed.

**Throws `System.ArgumentOutOfRangeException`:** A count is negative or accepted snapshots exceed capacity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L25).

## `Equals`

<a id="api-dcea8e9bd6b51298"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.Equals(Inno.Audio.Runtime.AudioContentStatistics) eaa4f862449b3ab1d7ec8607d5a6b314213f671aa6d13bd392b14f68a4a1afc3 -->

```csharp
public bool Inno.Audio.Runtime.AudioContentStatistics.Equals(Inno.Audio.Runtime.AudioContentStatistics other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `Equals`

<a id="api-22056d7dbfa3576c"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.Equals(System.Object) 3163462d011f83aa2c9b49dfe1c146262928b8fdd09bac4484d9d4e8ce8b6bce -->

```csharp
public override bool Inno.Audio.Runtime.AudioContentStatistics.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `GetHashCode`

<a id="api-1a15b40d1163ed1e"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.GetHashCode de807fcc7ffaa97623063784d758766a165245d76dc8b34e5442c5b97730ce04 -->

```csharp
public override int Inno.Audio.Runtime.AudioContentStatistics.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `op_Equality`

<a id="api-784a15d3f1b0782a"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.op_Equality(Inno.Audio.Runtime.AudioContentStatistics,Inno.Audio.Runtime.AudioContentStatistics) f05f3d21778a95db4cf05c5479c4dd78132306070ac540b54849417fe17054b4 -->

```csharp
public static bool Inno.Audio.Runtime.AudioContentStatistics.operator ==(Inno.Audio.Runtime.AudioContentStatistics left, Inno.Audio.Runtime.AudioContentStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `op_Inequality`

<a id="api-fd1aa9780e42dddb"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.op_Inequality(Inno.Audio.Runtime.AudioContentStatistics,Inno.Audio.Runtime.AudioContentStatistics) fd850ddb044917bd8ad92391a1fa19fb9dc4765e0556bff6feb9a631ef3b8c04 -->

```csharp
public static bool Inno.Audio.Runtime.AudioContentStatistics.operator !=(Inno.Audio.Runtime.AudioContentStatistics left, Inno.Audio.Runtime.AudioContentStatistics right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `ToString`

<a id="api-470ad72048bbb7a4"></a>
<!-- api: M:Inno.Audio.Runtime.AudioContentStatistics.ToString a1968cbb3648abee4a768ce61bfbc091310d14c8bc67ae9736e5be52275258cf -->

```csharp
public override string Inno.Audio.Runtime.AudioContentStatistics.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L8).

## `acceptedSnapshots`

<a id="api-14917d171719f53b"></a>
<!-- api: P:Inno.Audio.Runtime.AudioContentStatistics.acceptedSnapshots 53253e232c653c0751053ea3486e0e5729a8ec465937bdf9769b97e156a1d430 -->

```csharp
public int Inno.Audio.Runtime.AudioContentStatistics.acceptedSnapshots { get; }
```

Gets accepted snapshots, bounded by capacity and excluding every rejected partial contribution.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L47).

## `capacity`

<a id="api-c3649d021501c35f"></a>
<!-- api: P:Inno.Audio.Runtime.AudioContentStatistics.capacity 86f1657419124e16a7dd5625bc7c63df4eb41098980241e54abb214b12cddac1 -->

```csharp
public int Inno.Audio.Runtime.AudioContentStatistics.capacity { get; }
```

Gets the immutable combined snapshot budget assigned to the runtime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L42).

## `rejectedProviders`

<a id="api-28478e617ffcf517"></a>
<!-- api: P:Inno.Audio.Runtime.AudioContentStatistics.rejectedProviders ac3586c30caef6af96efb7a21656bb3d024dd57e64072499308666a181538369 -->

```csharp
public int Inno.Audio.Runtime.AudioContentStatistics.rejectedProviders { get; }
```

Gets rejected contributions in this collection, including overflow and duplicate identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/227f10adee13094e8e8382a57354a9d2b7a72fa4/src/services/audio/Inno.Audio.Runtime/AudioContentStatistics.cs#L52).
