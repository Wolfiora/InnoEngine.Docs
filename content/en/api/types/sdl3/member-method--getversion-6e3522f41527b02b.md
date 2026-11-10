---
title: "SDLContext — Method: GetVersion"
description: "Exact Method: GetVersion contracts in SDLContext."
uid: api.inno.native.sdl3.6e3522f41527b02b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetVersion

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetVersion`

<a id="api-0b083be9282b1f40"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetVersion a97b3df2fd9580da07e332b4e9e427a7f1a21b7b55c9dbd39f2312e23f56fc0c -->

```csharp
public int Inno.Native.Sdl3.SDLContext.GetVersion()
```

Get the version of SDL that is linked against your program.
If you are linking to SDL dynamically, then it is possible that the current
version will be different than the version you compiled against. This
function returns the current version, while SDL_VERSION is the version you
compiled with.
This function may be called safely at any time, even before SDL_Init().

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetRevision

**Returns:** the version of the linked library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L14396).
