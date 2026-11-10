---
title: "SDLEventAction"
description: "Reference for SDLEventAction in Inno.Native.Sdl3."
uid: api.inno.native.sdl3.385625b9d16bb537
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
---
# `SDLEventAction`

This reference describes `SDLEventAction` in `Inno.Native.Sdl3`. Read the [shared contract](../../projects/inno-native-sdl3.md#shared-abi-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`SDL_ADDEVENT`](#api-cfafefe91b4a8d91) | Field |
| [`SDL_GETEVENT`](#api-b6ce67e101edafb3) | Field |
| [`SDL_PEEKEVENT`](#api-14d50dab63968c52) | Field |

## Type declaration

<a id="api-385625b9d16bb537"></a>
<!-- api: T:Inno.Native.Sdl3.SDLEventAction 5f96038ec130656983b617694abbc29ee9e6d9692cb22c32aee8e4e641ad7820 -->

```csharp
public enum Inno.Native.Sdl3.SDLEventAction : int
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54284).

## `SDL_ADDEVENT`

<a id="api-cfafefe91b4a8d91"></a>
<!-- api: F:Inno.Native.Sdl3.SDLEventAction.SDL_ADDEVENT 61aea4d8d398246c6e8f80770c25caf1a5146f64d797893625d246e5fac45b14 -->

```csharp
Inno.Native.Sdl3.SDLEventAction.SDL_ADDEVENT = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54286).

## `SDL_GETEVENT`

<a id="api-b6ce67e101edafb3"></a>
<!-- api: F:Inno.Native.Sdl3.SDLEventAction.SDL_GETEVENT d1076cc91b6cbf6034236cf62e6ead29f755c601fea55d878ac389850a20b561 -->

```csharp
Inno.Native.Sdl3.SDLEventAction.SDL_GETEVENT = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54288).

## `SDL_PEEKEVENT`

<a id="api-14d50dab63968c52"></a>
<!-- api: F:Inno.Native.Sdl3.SDLEventAction.SDL_PEEKEVENT b7979fa2a701db4c8c2f071e5efde5de2a7b8f042b6fc30e53628e32cb3ec95a -->

```csharp
Inno.Native.Sdl3.SDLEventAction.SDL_PEEKEVENT = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L54287).
