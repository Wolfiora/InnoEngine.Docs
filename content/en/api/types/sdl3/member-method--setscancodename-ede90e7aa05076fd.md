---
title: "SDLContext.RawApi — Method: SetScancodeName"
description: "Exact Method: SetScancodeName contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.ede90e7aa05076fd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetScancodeName

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetScancodeName`

<a id="api-ae1f3c4ac2c5ccad"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetScancodeName(Inno.Native.Sdl3.SDLScancode,System.SByte*) c1839f8f8777f94d5467f9433eb8f12ef0fe56d19ca0fdcd37fe95e2d503c853 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SetScancodeName(Inno.Native.Sdl3.SDLScancode scancode, sbyte* name)
```

Set a human-readable name for a scancode.

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetScancodeName

**Parameter `scancode`:** the desired SDL_Scancode.

**Parameter `name`:** the name to use for the scancode, encoded as UTF-8. The string
is not copied, so the pointer given to this function must stay
valid while SDL is being used.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L22151).
