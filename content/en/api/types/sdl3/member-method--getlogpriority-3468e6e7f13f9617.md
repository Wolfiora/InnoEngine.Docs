---
title: "SDLContext.RawApi — Method: GetLogPriority"
description: "Exact Method: GetLogPriority contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.3468e6e7f13f9617
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GetLogPriority

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetLogPriority`

<a id="api-705074af2c83d4e8"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GetLogPriority(System.Int32) 31f4a7917fa1ffcfb6cdbcd1cfdbc0302ce020b24561bdf04a476ceae58225d0 -->

```csharp
public Inno.Native.Sdl3.SDLLogPriority Inno.Native.Sdl3.SDLContext.RawApi.GetLogPriority(int category)
```

Get the priority of a particular log category.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriority

**Parameter `category`:** the category to query.

**Returns:** the SDL_LogPriority for the requested category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L20866).
