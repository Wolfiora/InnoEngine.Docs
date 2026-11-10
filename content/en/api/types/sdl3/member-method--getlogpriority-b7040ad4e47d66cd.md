---
title: "SDLContext — Method: GetLogPriority"
description: "Exact Method: GetLogPriority contracts in SDLContext."
uid: api.inno.native.sdl3.b7040ad4e47d66cd
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: GetLogPriority

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetLogPriority`

<a id="api-034ab619a3ebddfc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.GetLogPriority(System.Int32) b5f9db2d6b7bd047d3826bdbcb3064735ca9b7e5b7cfe42baf3566a8ea8ede64 -->

```csharp
public Inno.Native.Sdl3.SDLLogPriority Inno.Native.Sdl3.SDLContext.GetLogPriority(int category)
```

Get the priority of a particular log category.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_SetLogPriority

**Parameter `category`:** the category to query.

**Returns:** the SDL_LogPriority for the requested category.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L12131).
