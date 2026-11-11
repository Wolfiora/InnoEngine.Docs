---
title: "ScriptReloadProgress"
description: "Reference for ScriptReloadProgress in Inno.Scripting.Reload."
uid: api.inno.scripting.reload.4347b096f0fa86c8
kind: api
owners:
  - Inno.Scripting.Reload
apiSurface: source-clr
contracts:
  - project.inno-scripting-reload
---
# `ScriptReloadProgress`

This reference describes `ScriptReloadProgress` in `Inno.Scripting.Reload`. Read the [shared contract](../../../projects/inno-scripting-reload.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Scripting.Reload.ScriptReloadProgress>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-585fd8262b626638) | Method |
| [`Deconstruct`](#api-297274939dec3fbd) | Method |
| [`Equals`](#api-5bf8f5f65609f38d) | Method |
| [`Equals`](#api-3ef22eb3f2a3f6b6) | Method |
| [`GetHashCode`](#api-cd8278770a8e3324) | Method |
| [`op_Equality`](#api-efcc090b8df374d4) | Method |
| [`op_Inequality`](#api-e5988c762746413e) | Method |
| [`ToString`](#api-afcb0f1f117c6ee0) | Method |
| [`canCancel`](#api-0133be96f97d2cf4) | Property |
| [`cancellationRequested`](#api-5200662dae65382a) | Property |
| [`fraction`](#api-20930f23f81e0c30) | Property |
| [`operationId`](#api-ac222d734573bdcb) | Property |
| [`stage`](#api-7be8f0a03e257275) | Property |

## Type declaration

<a id="api-4347b096f0fa86c8"></a>
<!-- api: T:Inno.Scripting.Reload.ScriptReloadProgress 00c88813adc5ad25df4884878d257d072fe54707ff5cd03b7b9788ba43a57c75 -->

```csharp
public sealed record Inno.Scripting.Reload.ScriptReloadProgress : System.IEquatable<Inno.Scripting.Reload.ScriptReloadProgress>
```

Atomically published progress owned by one reload request, containing no runtime or extension objects.

**Parameter `operationId`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `#ctor`

<a id="api-585fd8262b626638"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.#ctor(System.Int64,System.Single,System.String,System.Boolean,System.Boolean) 07fd238ed8bb4e6087f08bb067495221c4ca1a69961890623a0f09ec1a3aef5a -->

```csharp
public Inno.Scripting.Reload.ScriptReloadProgress.ScriptReloadProgress(long operationId, float fraction, string stage, bool cancellationRequested, bool canCancel = false)
```

Atomically published progress owned by one reload request, containing no runtime or extension objects.

**Parameter `operationId`:** The host-local reload request sequence; zero precedes the first request.

**Parameter `fraction`:** The fraction through compilation, activation and verified retirement.

**Parameter `stage`:** The actual stage or terminal diagnostic.

**Parameter `cancellationRequested`:** Whether cancellation has been requested and still requires owned work to drain.

**Parameter `canCancel`:** Whether this exact operation currently admits cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `Deconstruct`

<a id="api-297274939dec3fbd"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.Deconstruct(System.Int64@,System.Single@,System.String@,System.Boolean@,System.Boolean@) 5aad1e7e6d0d0fe9246762150c97764cca8aabf777bfa96cc59da0a112dcaffa -->

```csharp
public void Inno.Scripting.Reload.ScriptReloadProgress.Deconstruct(out long operationId, out float fraction, out string stage, out bool cancellationRequested, out bool canCancel)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `Equals`

<a id="api-5bf8f5f65609f38d"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.Equals(Inno.Scripting.Reload.ScriptReloadProgress) 7e1159bb7df73349fb68fb13a2e821601d5601983afd8c4519dbed76135fbb88 -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadProgress.Equals(Inno.Scripting.Reload.ScriptReloadProgress? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `Equals`

<a id="api-3ef22eb3f2a3f6b6"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.Equals(System.Object) 021e1eb4d7a1b7bf6761ef826c6c8a2aff1592e175e34056a8953528c8195e30 -->

```csharp
public override bool Inno.Scripting.Reload.ScriptReloadProgress.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `GetHashCode`

<a id="api-cd8278770a8e3324"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.GetHashCode be50b529d7d03de34c360af591f2fd9eb006463ba7ff579267460d57079385bb -->

```csharp
public override int Inno.Scripting.Reload.ScriptReloadProgress.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `op_Equality`

<a id="api-efcc090b8df374d4"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.op_Equality(Inno.Scripting.Reload.ScriptReloadProgress,Inno.Scripting.Reload.ScriptReloadProgress) 65a3651c844f7fdbc888be7b362ec100600352d652be06f36bcb2e99e42e7f29 -->

```csharp
public static bool Inno.Scripting.Reload.ScriptReloadProgress.operator ==(Inno.Scripting.Reload.ScriptReloadProgress? left, Inno.Scripting.Reload.ScriptReloadProgress? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `op_Inequality`

<a id="api-e5988c762746413e"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.op_Inequality(Inno.Scripting.Reload.ScriptReloadProgress,Inno.Scripting.Reload.ScriptReloadProgress) 5617c7c8a766ca0af36c747f569b1f0ee40c31809d65efa33e9aa69ccabe8169 -->

```csharp
public static bool Inno.Scripting.Reload.ScriptReloadProgress.operator !=(Inno.Scripting.Reload.ScriptReloadProgress? left, Inno.Scripting.Reload.ScriptReloadProgress? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `ToString`

<a id="api-afcb0f1f117c6ee0"></a>
<!-- api: M:Inno.Scripting.Reload.ScriptReloadProgress.ToString 258f55e185e7ec634903ac5c33ff0297be09641e87dc6bda14de921a2cd5da83 -->

```csharp
public override string Inno.Scripting.Reload.ScriptReloadProgress.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L21).

## `canCancel`

<a id="api-0133be96f97d2cf4"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadProgress.canCancel cdf7a420df6fbc79b3f840890f81844b62f9119a0d23008d1c19d3f95c82842e -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadProgress.canCancel { get; init; }
```

Whether this exact operation currently admits cancellation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L26).

## `cancellationRequested`

<a id="api-5200662dae65382a"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadProgress.cancellationRequested abbde6f49807fa8741f068fa707395ff5c5453f9f399c97ae74eacd62848363b -->

```csharp
public bool Inno.Scripting.Reload.ScriptReloadProgress.cancellationRequested { get; init; }
```

Whether cancellation has been requested and still requires owned work to drain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L25).

## `fraction`

<a id="api-20930f23f81e0c30"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadProgress.fraction e17851d677256cbac661b5aa05e9a149f5bbabff78581991f2c9a195a72ccbb4 -->

```csharp
public float Inno.Scripting.Reload.ScriptReloadProgress.fraction { get; init; }
```

The fraction through compilation, activation and verified retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L23).

## `operationId`

<a id="api-ac222d734573bdcb"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadProgress.operationId db3672029b362e2508adf904c5380c71657fbc030ca8b28a139dfba5e35cb270 -->

```csharp
public long Inno.Scripting.Reload.ScriptReloadProgress.operationId { get; init; }
```

The host-local reload request sequence; zero precedes the first request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L22).

## `stage`

<a id="api-7be8f0a03e257275"></a>
<!-- api: P:Inno.Scripting.Reload.ScriptReloadProgress.stage 717f756f7905169d868c0ca6ccec6b080a7283f3c089da90166e7967b516fe10 -->

```csharp
public string Inno.Scripting.Reload.ScriptReloadProgress.stage { get; init; }
```

The actual stage or terminal diagnostic.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Reload/ScriptReloadProgress.cs#L24).
