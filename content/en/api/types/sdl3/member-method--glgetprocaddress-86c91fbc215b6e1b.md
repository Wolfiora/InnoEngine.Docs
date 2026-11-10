---
title: "SDLContext.RawApi — Method: GlGetProcAddress"
description: "Exact Method: GlGetProcAddress contracts in SDLContext.RawApi."
uid: api.inno.native.sdl3.86c91fbc215b6e1b
kind: api
owners:
  - Inno.Native.Sdl3
apiSurface: source-clr
contracts:
  - api.projects.inno-native-sdl3#shared-abi-contract
  - api.inno.native.sdl3.b5aea0f7b9cada5e#type-declaration
---
# `SDLContext.RawApi`: Method: GlGetProcAddress

Read these exact member contracts together with the [containing type](sdlcontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-sdl3.md#shared-abi-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GlGetProcAddress`

<a id="api-b75e4015664bb3d1"></a>
<!-- api: M:Inno.Native.Sdl3.SDLContext.RawApi.GlGetProcAddress(System.SByte*) 94aa3e1c9475a13dd883c7a4150d852789d44d224bcd5897e04f7dca1c8e49ef -->

```csharp
public delegate* unmanaged[Cdecl]<void> Inno.Native.Sdl3.SDLContext.RawApi.GlGetProcAddress(sbyte* proc)
```

Get an OpenGL function by name.
If the GL library is loaded at runtime with SDL_GL_LoadLibrary(), then all
GL functions must be retrieved this way. Usually this is used to retrieve
function pointers to OpenGL extensions.
There are some quirks to looking up OpenGL functions that require some
extra care from the application. If you code carefully, you can handle
these quirks without any platform-specific code, though:
- On Windows, function pointers are specific to the current GL context;
this means you need to have created a GL context and made it current
before calling SDL_GL_GetProcAddress(). If you recreate your context or
create a second context, you should assume that any existing function
pointers aren't valid to use with it. This is (currently) a
Windows-specific limitation, and in practice lots of drivers don't suffer
this limitation, but it is still the way the wgl API is documented to
work and you should expect crashes if you don't respect it. Store a copy
of the function pointers that comes and goes with context lifespan.
- On X11, function pointers returned by this function are valid for any
context, and can even be looked up before a context is created at all.
This means that, for at least some common OpenGL implementations, if you
look up a function that doesn't exist, you'll get a non-NULL result that
is _NOT_ safe to call. You must always make sure the function is actually
available for a given GL context before calling it, by checking for the
existence of the appropriate extension with SDL_GL_ExtensionSupported(),
or verifying that the version of OpenGL you're using offers the function
as core functionality.
- Some OpenGL drivers, on all platforms, *will* return NULL if a function
isn't supported, but you can't count on this behavior. Check for
extensions you use, and if you get a NULL anyway, act as if that
extension wasn't available. This is probably a bug in the driver, but you
can code defensively for this scenario anyhow.
- Just because you're on Linux/Unix, don't assume you'll be using X11.
Next-gen display servers are waiting to replace it, and may or may not
make the same promises about function pointers.
- OpenGL function pointers must be declared `APIENTRY` as in the example
code. This will ensure the proper calling convention is followed on
platforms where this matters (Win32) thereby avoiding stack corruption.

**Thread safety:** This function should only be called on the main thread.

**Upstream availability:** This function is available since SDL 3.2.0.

**See also:** SDL_GL_ExtensionSupported

**See also:** SDL_GL_LoadLibrary

**See also:** SDL_GL_UnloadLibrary

**Parameter `proc`:** the name of an OpenGL function.

**Returns:** a pointer to the named OpenGL function. The returned pointer
should be cast to the appropriate function signature.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/backends/Sdl3/native/Inno.Native.Sdl3/Generated/Bindings.cs#L41673).
