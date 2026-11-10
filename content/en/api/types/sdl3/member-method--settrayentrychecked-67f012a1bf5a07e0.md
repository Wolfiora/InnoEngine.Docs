---
title: "SDLContext.RawApi — Method: SetTrayEntryChecked"
description: "Exact Method: SetTrayEntryChecked contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.67f012a1bf5a07e0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTrayEntryChecked

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTrayEntryChecked`

<a id="api-dd4ee503c0aca70f"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryChecked(Inno.Native.Sdl3.SDLTrayEntry*,System.Byte) de19c5fda848b2fb514c7a84fc5b127fbc699891ca0eacf9715a47dca6c0d557 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryChecked(Inno.Native.Sdl3.SDLTrayEntry* entry, byte @checked)
```

Sets whether or not an entry is checked.
The entry must have been created with the SDL_TRAYENTRY_CHECKBOX flag.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**See also:** SDL_GetTrayEntryChecked

**Parameter `entry`:** the entry to be updated.

**Parameter `checked`:** true if the entry should be checked; false otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18633).
