---
title: "SDLContext.RawApi — Method: Quit"
description: "Exact Method: Quit contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.01d1cded25c39d3e
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: Quit

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Quit`

<a id="api-b3f48bafe4cb36cc"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.Quit 3edcf57542adedb4c23da3fb03e60df6109becb74f78f6c5cf2c86cc0b6724e0 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.Quit()
```

Clean up all initialized subsystems.
You should call this function even if you have already shutdown each
initialized subsystem with SDL_QuitSubSystem(). It is safe to call this
function even in the case of errors in initialization.
You can use this function with atexit() to ensure that it is run when your
application is shutdown, but it is not wise to do this from a library or
other dynamically loaded code.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_Init

**See also:** SDL_QuitSubSystem


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L32398).
