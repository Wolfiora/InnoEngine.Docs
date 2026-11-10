---
title: "SDLContext.RawApi — Method: GetTrayEntryParent"
description: "Exact Method: GetTrayEntryParent contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.1f0528d47e686bae
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetTrayEntryParent

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetTrayEntryParent`

<a id="api-2b1dd532caa49a67"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryParent(Inno.Native.Sdl3.SDLTrayEntry*) 186f8c9f916715780ab1f4ca2d58d7405e875e18edde55ff4bf488c28501a0d2 -->

```csharp
public Inno.Native.Sdl3.SDLTrayMenu* Inno.Native.Sdl3.SDLContext.RawApi.GetTrayEntryParent(Inno.Native.Sdl3.SDLTrayEntry* entry)
```

Gets the menu containing a certain tray entry.

**Thread safety:** This function should be called on the thread that created the
tray.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_InsertTrayEntryAt

**Parameter `entry`:** the entry for which to get the parent menu.

**Returns:** the parent menu.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L18703).
