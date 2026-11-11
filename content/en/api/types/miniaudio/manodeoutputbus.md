---
title: "MaNodeOutputBus"
description: "Reference for MaNodeOutputBus in Inno.Native.MiniAudio."
uid: api.inno.native.miniaudio.b3797c85269413ae
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
---
# `MaNodeOutputBus`

This reference describes `MaNodeOutputBus` in `Inno.Native.MiniAudio`. Read the [shared contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Channels`](#api-822eb7178ce3a866) | Field |
| [`Flags`](#api-089d73edb1f1e492) | Field |
| [`InputNodeInputBusIndex`](#api-0f2ad6b32a8156f0) | Field |
| [`IsAttached`](#api-f5ae1a632dd54bf3) | Field |
| [`Lock`](#api-489c513d519698fa) | Field |
| [`OutputBusIndex`](#api-368c71025d5e6294) | Field |
| [`PInputNode`](#api-d8eb29ee578d552c) | Field |
| [`PNext`](#api-8aebb25142946593) | Field |
| [`PNode`](#api-34109d78c717fbe3) | Field |
| [`PPrev`](#api-b54522301a78fe30) | Field |
| [`RefCount`](#api-6dd2b6bc8414835f) | Field |
| [`Volume`](#api-0fbe5a189d219d58) | Field |

## Type declaration

<a id="api-b3797c85269413ae"></a>
<!-- api: T:Inno.Native.MiniAudio.MaNodeOutputBus 52e3c9b55482cc091eb925167a4807428ba9bdd7aa6fa5ae89f347519654268e -->

```csharp
public struct Inno.Native.MiniAudio.MaNodeOutputBus
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22418).

## `Channels`

<a id="api-822eb7178ce3a866"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.Channels 59a1a38b248827d15b8d5b9f26e8eb4129f1cdf1e9b420da470df6eacc3fa010 -->

```csharp
public byte Inno.Native.MiniAudio.MaNodeOutputBus.Channels
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22425).

## `Flags`

<a id="api-089d73edb1f1e492"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.Flags eefb62b84444b0c05575da5b935ebb9914a33acaae1d76fa88cd5f3d7954338e -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeOutputBus.Flags
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22429).

## `InputNodeInputBusIndex`

<a id="api-0f2ad6b32a8156f0"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.InputNodeInputBusIndex 37b68bf4403e111020400e892094d1defcf10e59ce45c8caa32a9bb4196a3a3c -->

```csharp
public byte Inno.Native.MiniAudio.MaNodeOutputBus.InputNodeInputBusIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22427).

## `IsAttached`

<a id="api-f5ae1a632dd54bf3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.IsAttached 4ccefb639059eb9a7c52c619219457a7fce5da906f5349038a4e1cf8a59a0613 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeOutputBus.IsAttached
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22433).

## `Lock`

<a id="api-489c513d519698fa"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.Lock 77bbc9c60bfafbcb1fd3de65f04ddc41098002786421f5e8dfd0e31f7b71d4a3 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeOutputBus.Lock
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22435).

## `OutputBusIndex`

<a id="api-368c71025d5e6294"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.OutputBusIndex 900ce770650fba75b805b7dd0ef65e09cebba436d3012da27a5565f7a13e26e6 -->

```csharp
public byte Inno.Native.MiniAudio.MaNodeOutputBus.OutputBusIndex
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22423).

## `PInputNode`

<a id="api-d8eb29ee578d552c"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.PInputNode 849c4503541360e3c792e1d2a7c52f20deb130feccbbda50d1afde67ec4461e0 -->

```csharp
public void* Inno.Native.MiniAudio.MaNodeOutputBus.PInputNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22443).

## `PNext`

<a id="api-8aebb25142946593"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.PNext 38aecaf7ab1ce4105ca2bcb2da622d514a1a5a25f6a7d78666461456d8be94f0 -->

```csharp
public Inno.Native.MiniAudio.MaNodeOutputBus* Inno.Native.MiniAudio.MaNodeOutputBus.PNext
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22439).

## `PNode`

<a id="api-34109d78c717fbe3"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.PNode 81335ed18c5a2e455549abc00fbab96b886090941d7bf010927cb94651077986 -->

```csharp
public void* Inno.Native.MiniAudio.MaNodeOutputBus.PNode
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22421).

## `PPrev`

<a id="api-b54522301a78fe30"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.PPrev aa96aa9c9927494e64f863046f83f01684a7bae9cf713e7b20f7cc6a0d14cbd9 -->

```csharp
public Inno.Native.MiniAudio.MaNodeOutputBus* Inno.Native.MiniAudio.MaNodeOutputBus.PPrev
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22441).

## `RefCount`

<a id="api-6dd2b6bc8414835f"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.RefCount 71a28bd76653ab7ab32d576d607979ed6359895e4aea0b94ff192e76caabd152 -->

```csharp
public uint Inno.Native.MiniAudio.MaNodeOutputBus.RefCount
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22431).

## `Volume`

<a id="api-0fbe5a189d219d58"></a>
<!-- api: F:Inno.Native.MiniAudio.MaNodeOutputBus.Volume fb4a864f42904eb16bb9ce45e8ec6f9fd312f4fdbb00e2e6c14db3f834df7eca -->

```csharp
public float Inno.Native.MiniAudio.MaNodeOutputBus.Volume
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L22437).
