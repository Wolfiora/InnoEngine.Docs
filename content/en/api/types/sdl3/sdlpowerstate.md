---
title: "SDLPowerState"
description: "Reference for SDLPowerState in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.fb01ae7c451fc7a0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLPowerState`

This reference describes `SDLPowerState` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_POWERSTATE_CHARGED`](#api-95d91e30554fbb04) | Field |
| [`SDL_POWERSTATE_CHARGING`](#api-d9e39e4a096b9299) | Field |
| [`SDL_POWERSTATE_ERROR`](#api-b5efe957b6c4fbce) | Field |
| [`SDL_POWERSTATE_NO_BATTERY`](#api-7a62218916558092) | Field |
| [`SDL_POWERSTATE_ON_BATTERY`](#api-158db112de63ec66) | Field |
| [`SDL_POWERSTATE_UNKNOWN`](#api-59e7334a4f45ee28) | Field |

## Type declaration

<a id="api-fb01ae7c451fc7a0"></a>
<!-- api: T:Inno.Native.Sdl3.SDLPowerState f8904c56ed45cb7d3f8a0257ee252db730ad0adee98184007c268c87b7509d60 -->

```csharp
public enum Inno.Native.Sdl3.SDLPowerState : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58891).

## `SDL_POWERSTATE_CHARGED`

<a id="api-95d91e30554fbb04"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_CHARGED 46282e8a94d09219ed9e1c9b2af04e57c9ac3500a6a5265f2a6d0962f450aa85 -->

```csharp
Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_CHARGED = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58898).

## `SDL_POWERSTATE_CHARGING`

<a id="api-d9e39e4a096b9299"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_CHARGING b9a7da95a75b7ca1dbf611b75795943f62105eb48c706d236101001277a3927e -->

```csharp
Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_CHARGING = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58897).

## `SDL_POWERSTATE_ERROR`

<a id="api-b5efe957b6c4fbce"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_ERROR 5faba469ef320649a3a08f8b9a1b529aa63a5ea9e672a1a7edbdb0ce897bebf2 -->

```csharp
Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_ERROR = -1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58893).

## `SDL_POWERSTATE_NO_BATTERY`

<a id="api-7a62218916558092"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_NO_BATTERY 19cde383b5a0b74a94f2f8cb56125301abfa378f876d55f0db8793f6ff0540ac -->

```csharp
Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_NO_BATTERY = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58896).

## `SDL_POWERSTATE_ON_BATTERY`

<a id="api-158db112de63ec66"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_ON_BATTERY bf87d22452cefe34de4d1325999010501062a12a8d065a9a313d824252d4decf -->

```csharp
Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_ON_BATTERY = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58895).

## `SDL_POWERSTATE_UNKNOWN`

<a id="api-59e7334a4f45ee28"></a>
<!-- api: F:Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_UNKNOWN 38c4e481c30a6505fc93df4329e98be41c97902d4d620711c0667786fc3ab098 -->

```csharp
Inno.Native.Sdl3.SDLPowerState.SDL_POWERSTATE_UNKNOWN = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L58894).
