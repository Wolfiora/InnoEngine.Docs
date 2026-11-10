---
title: "SDLPenButtonEvent"
description: "Reference for SDLPenButtonEvent in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.1dd19335afc09013
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLPenButtonEvent`

This reference describes `SDLPenButtonEvent` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`Button`](#api-65af3ae80ee80067) | Field |
| [`Down`](#api-fd964df9fd23ff66) | Field |
| [`PenState`](#api-9446d193d825e752) | Field |
| [`Reserved`](#api-ded6e01539de0b63) | Field |
| [`Timestamp`](#api-6da67da20daac4aa) | Field |
| [`Type`](#api-c3d750e5a79f8087) | Field |
| [`Which`](#api-24b2cf7269b1b39c) | Field |
| [`WindowId`](#api-40b5eaa3c91c8a93) | Field |
| [`X`](#api-6460c15952729012) | Field |
| [`Y`](#api-c08415666b7d89f7) | Field |

## Type declaration

<a id="api-1dd19335afc09013"></a>
<!-- api: T:Inno.Native.Sdl3.SDLPenButtonEvent 6536b327ba1de5abc7cb0a8f1c5209913bd9c4dd6c76bac96467a5adcd716a95 -->

```csharp
public struct Inno.Native.Sdl3.SDLPenButtonEvent
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58528).

## `Button`

<a id="api-65af3ae80ee80067"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Button 7b34bbb61202fcb393940a909ca4fbc63dd4e666aa8c7d4e548df2a7253a1a8f -->

```csharp
public byte Inno.Native.Sdl3.SDLPenButtonEvent.Button
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58547).

## `Down`

<a id="api-fd964df9fd23ff66"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Down a7f06232b20b12cf74c54a0fed21e0c72bc1526be59e4d5ccb4dbb4fdde52e40 -->

```csharp
public byte Inno.Native.Sdl3.SDLPenButtonEvent.Down
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58549).

## `PenState`

<a id="api-9446d193d825e752"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.PenState a72f1649c0cf6818f57bc940cf2cc75a7fb850a924176d4350c09d8aa5391275 -->

```csharp
public uint Inno.Native.Sdl3.SDLPenButtonEvent.PenState
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58541).

## `Reserved`

<a id="api-ded6e01539de0b63"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Reserved 4a62de4b4bf697519c55bba4f3f29238221dc5bb25d551b66d53a05784389f00 -->

```csharp
public uint Inno.Native.Sdl3.SDLPenButtonEvent.Reserved
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58533).

## `Timestamp`

<a id="api-6da67da20daac4aa"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Timestamp 2346ce4048f49618ac75a2c0737aae414dff1a0cec8c093790d93123b975055c -->

```csharp
public ulong Inno.Native.Sdl3.SDLPenButtonEvent.Timestamp
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58535).

## `Type`

<a id="api-c3d750e5a79f8087"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Type 5ba8725c56622c7fe186b0630e73d579ed0a1165be2e8616362f7c833f3d0af5 -->

```csharp
public Inno.Native.Sdl3.SDLEventType Inno.Native.Sdl3.SDLPenButtonEvent.Type
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58531).

## `Which`

<a id="api-24b2cf7269b1b39c"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Which ad2eec84368d978efef6919ca2062e49d753602459e4ccd4d7221888713107cd -->

```csharp
public uint Inno.Native.Sdl3.SDLPenButtonEvent.Which
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58539).

## `WindowId`

<a id="api-40b5eaa3c91c8a93"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.WindowId 7e2303510c0ef41b4e57b84849cbf3302ff1a87d20c8b6a82d3a8248b2fe99af -->

```csharp
public uint Inno.Native.Sdl3.SDLPenButtonEvent.WindowId
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58537).

## `X`

<a id="api-6460c15952729012"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.X 9acfc84c57ae9dca64a90dd9e557bf2c296740158a7106e816b1fcac72f9917f -->

```csharp
public float Inno.Native.Sdl3.SDLPenButtonEvent.X
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58543).

## `Y`

<a id="api-c08415666b7d89f7"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPenButtonEvent.Y 70bf65019281de5fbf870752d1895c73a7fc8da6be46d4cd642d45efbf035d71 -->

```csharp
public float Inno.Native.Sdl3.SDLPenButtonEvent.Y
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58545).
