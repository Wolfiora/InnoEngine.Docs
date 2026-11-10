---
title: "SDLContext.RawApi — Method: SetTrayEntryCallback"
description: "Exact Method: SetTrayEntryCallback contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.d1abbc29b99466d3
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetTrayEntryCallback

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetTrayEntryCallback`

<a id="api-791548ee76a237ab"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryCallback(Inno.Native.Sdl3.SDLTrayEntry*,,System.Void*) 775b152f911ae464da41e26a767a820f9c86bd21afbb9b9c4dd678405de6db03 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetTrayEntryCallback(Inno.Native.Sdl3.SDLTrayEntry* entry, delegate* unmanaged[Cdecl]<void*, Inno.Native.Sdl3.SDLTrayEntry*, void> callback, void* userdata)
```

Sets a callback to be invoked when the entry is selected.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetTrayEntries

**See also:** SDL_InsertTrayEntryAt

**Parameter `entry`:** the entry to be updated.

**Parameter `callback`:** a callback to be invoked when the entry is selected.

**Parameter `userdata`:** an optional pointer to pass extra data to the callback when
it will be invoked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L29543).
