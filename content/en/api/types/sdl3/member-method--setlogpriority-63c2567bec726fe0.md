---
title: "SDLContext.RawApi — Method: SetLogPriority"
description: "Exact Method: SetLogPriority contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.63c2567bec726fe0
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: SetLogPriority

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetLogPriority`

<a id="api-b3bc04a23150f02e"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.SetLogPriority(System.Int32,Inno.Native.Sdl3.SDLLogPriority) 89a37cf2ed67f5bcee9d092be2a61853dff1f10c9130d2e704dd752b01b1119c -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.SetLogPriority(int category, Inno.Native.Sdl3.SDLLogPriority priority)
```

Set the priority of a particular log category.

**Thread safety:** It is safe to call this function from any thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GetLogPriority

**See also:** SDL_ResetLogPriorities

**See also:** SDL_SetLogPriorities

**Parameter `category`:** the category to assign a priority to.

**Parameter `priority`:** the SDL_LogPriority to assign.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41400).
