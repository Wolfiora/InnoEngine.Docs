---
title: "SDLContext.RawApi — Method: GuidToString"
description: "Exact Method: GuidToString contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.264c3eb3f212c375
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GuidToString

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GuidToString`

<a id="api-fa75827929d06ec7"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GuidToString(Inno.Native.Sdl3.SDLGUID*,System.SByte*,System.Int32) f4861f5951851c352bb9997091e8eb866cbdafc62b3c173cd6668a9c66cd456b -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.GuidToString(Inno.Native.Sdl3.SDLGUID* guid, sbyte* pszGUID, int cbGUID)
```

Get an ASCII string representation for a given SDL_GUID.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_StringToGUID

**Parameter `guid`:** the SDL_GUID you wish to convert to string.

**Parameter `pszGUID`:** buffer in which to write the ASCII string.

**Parameter `cbGUID`:** the size of pszGUID, should be at least 33 bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18656).
