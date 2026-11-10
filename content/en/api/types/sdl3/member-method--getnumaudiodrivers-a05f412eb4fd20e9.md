---
title: "SDLContext — Method: GetNumAudioDrivers"
description: "Exact Method: GetNumAudioDrivers contracts in SDLContext."
uid: api.inno.native.sdl3.a05f412eb4fd20e9
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetNumAudioDrivers

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetNumAudioDrivers`

<a id="api-6c6d566ba39877b8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetNumAudioDrivers bbf869b8a31d283ed52d8cbbb1088575a96ec669782400cf4f15c6ef446df418 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetNumAudioDrivers()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L15118).
