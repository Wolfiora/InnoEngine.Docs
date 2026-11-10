---
title: "SDLContext.RawApi — Method: StringToGuid"
description: "Exact Method: StringToGuid contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.a107d42c17f5bd2b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: StringToGuid

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `StringToGuid`

<a id="api-366c0d4bb039b210"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.StringToGuid(System.SByte*,Inno.Native.Sdl3.SDLGUID*) 20d67953fa0497d4ac3fa021a2f3cbb814df203771eaa96dd24c7657e32952b3 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.StringToGuid(sbyte* pchGUID, Inno.Native.Sdl3.SDLGUID* bgcs_result)
```

Convert a GUID string into a SDL_GUID structure.
Performs no error checking. If this function is given a string containing
an invalid GUID, the function will silently succeed, but the GUID generated
will not be useful.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GUIDToString

**Parameter `pchGUID`:** string containing an ASCII representation of a GUID.

**Parameter `bgcs_result`:** Native parameter.

**Constraints:** Native result: a SDL_GUID structure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L28731).
