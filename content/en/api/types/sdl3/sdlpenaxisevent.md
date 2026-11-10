---
title: "SDLPenAxisEvent"
description: "Reference for SDLPenAxisEvent in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.7840adc1319d0637
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLPenAxisEvent`

This reference describes `SDLPenAxisEvent` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Axis`](#api-a0a6a0d2403f680e) | Field |
| [`PenState`](#api-eb547e5ea42f7c26) | Field |
| [`Reserved`](#api-21d0272ec85f0e29) | Field |
| [`Timestamp`](#api-436e43414af1c1de) | Field |
| [`Type`](#api-30563d21f2746adc) | Field |
| [`Value`](#api-224e82b171e2f235) | Field |
| [`Which`](#api-e7678f42ea0db8a8) | Field |
| [`WindowId`](#api-d256f67db32bf6b5) | Field |
| [`X`](#api-078a8a470690c0c0) | Field |
| [`Y`](#api-227c7f52ebed2846) | Field |

## Type declaration

<a id="api-7840adc1319d0637"></a>
<!-- api: T:Inno.Native.Sdl3.SDLPenAxisEvent 16968018da93789e0889336e3fb39a411c8c6e23ed51808ec34ee160375d01fc -->

```csharp
public struct Inno.Native.Sdl3.SDLPenAxisEvent
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58489).

## `Axis`

<a id="api-a0a6a0d2403f680e"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Axis 7316dd720151605103634806f1631ccdf113f23f566670945163d70fa059a17e -->

```csharp
public Inno.Native.Sdl3.SDLPenAxis Inno.Native.Sdl3.SDLPenAxisEvent.Axis
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58508).

## `PenState`

<a id="api-eb547e5ea42f7c26"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.PenState 334569d1844b04d5d45f5ef5368c313b407a3eb9bf3f5d9e9d8e1ba0265788c2 -->

```csharp
public uint Inno.Native.Sdl3.SDLPenAxisEvent.PenState
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58502).

## `Reserved`

<a id="api-21d0272ec85f0e29"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Reserved 4c0e1855f92b36e275975ef735760ec949e8e92eacf720270b913129400b1140 -->

```csharp
public uint Inno.Native.Sdl3.SDLPenAxisEvent.Reserved
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58494).

## `Timestamp`

<a id="api-436e43414af1c1de"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Timestamp 51032bde5c216b462b70cec64e9e40bc4e4e905cd1bee0dc2347af2d7b525902 -->

```csharp
public ulong Inno.Native.Sdl3.SDLPenAxisEvent.Timestamp
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58496).

## `Type`

<a id="api-30563d21f2746adc"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Type 180e2b2ce7d4316a930fe6dce5a9edce6f805a8ff6ef552416881f59c2f2afc8 -->

```csharp
public Inno.Native.Sdl3.SDLEventType Inno.Native.Sdl3.SDLPenAxisEvent.Type
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58492).

## `Value`

<a id="api-224e82b171e2f235"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Value 203322bdc323912c60b7e980984b5a91b64dc7154e234211e6183e25bbe93f25 -->

```csharp
public float Inno.Native.Sdl3.SDLPenAxisEvent.Value
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58510).

## `Which`

<a id="api-e7678f42ea0db8a8"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Which 90b298d7223ad4d14e276581d4a29aa55ff17a1f0d8a01c31a70b52d247df982 -->

```csharp
public uint Inno.Native.Sdl3.SDLPenAxisEvent.Which
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58500).

## `WindowId`

<a id="api-d256f67db32bf6b5"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.WindowId dde748740c7fff39681adbcf5cde4ef8ec829eac0c7b4e1b136163ca16efec0a -->

```csharp
public uint Inno.Native.Sdl3.SDLPenAxisEvent.WindowId
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58498).

## `X`

<a id="api-078a8a470690c0c0"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.X d5c7f78a0916a3398e7f6155b4d700f08a0fc15091d0cfee6a5e777770f8113c -->

```csharp
public float Inno.Native.Sdl3.SDLPenAxisEvent.X
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58504).

## `Y`

<a id="api-227c7f52ebed2846"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenAxisEvent.Y 24a04e61962aa5a52f6824d02c1598d89c1995f0bf2be9c1dc90c8160a4bb440 -->

```csharp
public float Inno.Native.Sdl3.SDLPenAxisEvent.Y
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58506).
