---
title: "SDLContext — Method: Quit"
description: "Exact Method: Quit contracts in SDLContext."
uid: api.inno.native.sdl3.737fdb9d2d3657c2
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.db7b6541ba3e864c#type-declaration
---
# `SDLContext`: Method: Quit

Read these exact member contracts together with the [containing type](sdlcontext.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Quit`

<a id="api-61d8b9cf45a82886"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.Quit 6b278dda530434c539522f3aedea1f9ba3902c54294cd6ba682fdf956a9ca799 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.Quit()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L13634).
