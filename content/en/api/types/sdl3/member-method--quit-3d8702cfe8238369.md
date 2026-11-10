---
title: "SDL — Method: Quit"
description: "Exact Method: Quit contracts in SDL."
uid: api.inno.native.sdl3.3d8702cfe8238369
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.e67f3d5045477c09#type-declaration
---
# `SDL`: Method: Quit

Read these exact member contracts together with the [containing type](sdl.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Quit`

<a id="api-87291d947d9a3f98"></a>
<!-- api: M:Inno.Native.Sdl3.SDL.Quit f6f53d4f8555dab735faa052f6303cf75dc58d64d51a1db6fd578fbe3886d5e2 -->

```csharp
public static void Inno.Native.Sdl3.SDL.Quit()
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L1876).
