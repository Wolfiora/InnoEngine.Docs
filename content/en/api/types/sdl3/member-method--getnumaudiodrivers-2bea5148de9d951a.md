---
title: "SDL — Method: GetNumAudioDrivers"
description: "Exact Method: GetNumAudioDrivers contracts in SDL."
uid: api.inno.native.sdl3.2bea5148de9d951a
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: GetNumAudioDrivers

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumAudioDrivers`

<a id="api-3f3bbf0ab4d87b32"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.GetNumAudioDrivers 2750c661d81445ca525de63c7d0df0b669e11b58d08cd93e87bd22e7ac72b7be -->

```csharp
public static int Inno.Native.Sdl3.SDL.GetNumAudioDrivers()
```

Use this function to get the number of built-in audio drivers.
This function returns a hardcoded number. This never returns a negative
value; if there are no drivers compiled into this build of SDL, this
function returns zero. The presence of a driver in this list does not mean
it will function, it just means SDL is capable of interacting with that
interface. For example, a build of SDL might have esound support, but if
there's no esound server available, SDL's esound driver would fail if used.
By default, SDL tries all drivers, in its preferred order, until one is
found to be usable.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetAudioDriver

**Returns:** the number of built-in audio drivers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L3106).
