---
title: "SDLContext.RawApi — Method: SetTrayEntryEnabled"
description: "Exact Method: SetTrayEntryEnabled contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.c7c3de10e6930810
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTrayEntryEnabled

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTrayEntryEnabled`

<a id="api-8ab1d847524b230c"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryEnabled(Inno.Native.Sdl3.SDLTrayEntry*,System.Byte) d8b99eddb1f0eb9ad73d774e3f96c3c81c3811d5e86a5ac2dc85d33b61106e2c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryEnabled(Inno.Native.Sdl3.SDLTrayEntry* entry, byte enabled)
```

Sets whether or not an entry is enabled.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_GetTrayEntryEnabled

**Parameter `entry`:** the entry to be updated.

**Parameter `enabled`:** true if the entry should be enabled; false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17003).
