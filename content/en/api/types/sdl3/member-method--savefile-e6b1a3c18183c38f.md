---
title: "SDLContext.RawApi — Method: SaveFile"
description: "Exact Method: SaveFile contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.e6b1a3c18183c38f
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SaveFile

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SaveFile`

<a id="api-e5ec27483b405037"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SaveFile(System.SByte*,System.Void*,System.UInt64) f824b729019411c70b9a2d42b2fdc8732389a053189b68465a1107dc542e4608 -->

```csharp
public byte Inno.Native.Sdl3.SDLContext.RawApi.SaveFile(sbyte* file, void* data, ulong datasize)
```

Save all the data into a file path.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SaveFile_IO

**See also:** SDL_LoadFile

**Parameter `file`:** the path to write all available data into.

**Parameter `data`:** the data to be written. If datasize is 0, may be NULL or a
invalid pointer.

**Parameter `datasize`:** the number of bytes to be written.

**Returns:** true on success or false on failure; call SDL_GetError() for more
information.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18106).
