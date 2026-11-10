---
title: "SDLContext.RawApi — Method: DestroyProcess"
description: "Exact Method: DestroyProcess contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.b8b09622bb09348d
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: DestroyProcess

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DestroyProcess`

<a id="api-44a9399cbc7217af"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.DestroyProcess(Inno.Native.Sdl3.SDLProcess*) cc68f69dc25826ddbb08dc98d3793eac6b69cb86ff932c0f0b4638ad9ff894a6 -->

```csharp
public void Inno.Native.Sdl3.SDLContext.RawApi.DestroyProcess(Inno.Native.Sdl3.SDLProcess* process)
```

Destroy a previously created process object.
Note that this does not stop the process, just destroys the SDL object used
to track it. If you want to stop the process you should use
SDL_KillProcess().

**Thread safety:** This function is not thread safe.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_CreateProcess

**See also:** SDL_CreateProcessWithProperties

**See also:** SDL_KillProcess

**Parameter `process`:** The process object to destroy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L17384).
