---
title: "SDLContext.RawApi — Method: GetVersion"
description: "Exact Method: GetVersion contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.6900180d308f0271
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetVersion

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetVersion`

<a id="api-8ff85d105c998177"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetVersion b347ef92ce18d382d977b87cd08c9a8e9283d0241a32269637f36e7d180185f8 -->

```csharp
public int Inno.Native.Sdl3.SDLContext.RawApi.GetVersion()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L36703).
