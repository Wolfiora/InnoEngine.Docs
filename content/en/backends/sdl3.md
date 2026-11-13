---
title: SDL3 platform backend
description: Understand SDL window ownership, host integration, event routing
  and generated native bindings.
uid: backends.sdl3
kind: explanation
owners:
  - Inno.Adapter.Platform.Sdl3
  - Inno.Build.Toolchains.Sdl3
  - Inno.Native.Sdl3
contracts:
  - architecture.ownership
  - architecture.build-artifacts
---
# SDL3 platform backend

The SDL3 backend implements InnoEngine's neutral application and window contracts. Product code normally consumes `IPlatformApplication` and `IPlatformWindow`; SDL handles, native event unions and generated pointer wrappers stay inside the backend boundary.

The upstream source is [SDL](https://github.com/libsdl-org/SDL). The engine's selected revision comes from its submodule gitlink. An API available in upstream SDL is not automatically an InnoEngine product capability.

## Responsibilities

| Project | Owns |
| --- | --- |
| `Inno.Adapter.Platform.Sdl3` | Application lifecycle, event pumping, window registration and neutral platform adaptation. |
| `Inno.Native.Sdl3` | Generated binding declarations and initialization of the selected native module. |
| `Inno.Build.Toolchains.Sdl3` | The component recipe and preparation using an explicitly selected SDK and target. |

Platform-specific host integration belongs to the platform contribution. Shared SDL code does not select a target from the current operating system or maintain a second platform support table.

## Supply an explicit host integration

`Sdl3PlatformApplication` requires `ISdl3HostIntegration`. There is no implicit current-OS policy. The integration supplies immutable configuration, window creation and native surface interpretation; capabilities explicitly describe multi-window and live-resize behavior.

The provider's construction creates a registration description without initializing native services. Creating an application returns a caller-owned service. This does not relax the application's owner-thread or process ownership requirements.

Application operations run on their owner thread. A continuation running on another thread cannot safely operate on the application merely because it originated from the UI. Coordinate work through the host's actual execution and retirement protocol.

## Distinguish owned and adopted windows

Windows created by the application are owned by it. `AdoptWindow` registers a borrowed external window. If wrapping a newly created window fails, the newly owned native window is destroyed; failure to wrap an adopted window does not destroy the external owner's resource.

Release invalidates the registered wrapper before the original owner destroys a borrowed window. `GetWindows` returns this application's windows, not a process-wide window directory.

Shared window creation uses SDL properties and always releases the temporary properties object. Ownership of a successfully created native handle transfers to the application.

## Borrow native surfaces only within the window lifetime

`Sdl3PlatformWindow` implements the adapter SPI `INativeWindowSurface`. A graphics adapter uses open ABI identities and borrowed handles through `PlatformNativeHandles`. Public platform services and ordinary product hosts do not depend on SDL enums or these native values.

The Browser integration reports a `BrowserCanvas` surface rather than attempting Win32 or Cocoa pointer access. Its window handle identifies a UTF-8 canvas selector held by the SDL window properties. The graphics backend may use that selector only while the window remains alive.

Windows and macOS integrations do not require OpenGL for shared window creation. The Browser integration does require its OpenGL setup and waits for a real focus event before establishing initial focus. Surface interpretation and SDK configuration remain integration responsibilities.

## Route events through the existing contracts

SDL background/foreground notifications become Core Events `ApplicationSuspensionChangedEvent` values. Hide/show and minimize/restore notifications become `WindowVisibilityChangedEvent` values.

Each window tracks hidden and minimized reasons independently. Receiving a show event must not erase an unrelated minimized reason. Browser document visibility also enters through the SDL event source; domain consumers do not need a separate browser event model.

`ISdl3ApplicationExtension` is the narrow lifecycle boundary for actual SDL adapter extensions. A native event span is borrowed for the callback. Do not retain it, create another global event bus or use this interface to expose raw SDL events to a neutral domain.

## Select a folder during Editor startup

`Sdl3FolderDialog.SelectFolder` borrows a live application, pumps its events on the owner thread and keeps the native callback owner alive until completion.

- A successful selection returns the selected directory.
- User cancellation returns `null`.
- An SDL error raises `InvalidOperationException`.

The dialog selects a location; it does not create a game project. The platform Editor can use a short-lived application for this startup interaction before entering its normal host. The callback must finish before that temporary application is released.

## Understand the generated binding boundary

BGCS generates the function, structure, flags, delegate and pointer declarations from SDL headers and the component configuration. The handwritten `SDL` facade loads the module and initializes the generated function table; it does not provide parallel handwritten ABI types.

Only the SDL adapter, SDL tooling and native tests directly consume this binding assembly. The selected dynamic function table requires all selected symbols to exist in the deployed module. Native initialization and calls validate the real deployment closure; source declarations alone cannot prove it is usable.

The common binding roots omit `SDL_assert.h`, because the engine does not consume SDL's assertion API or bind compiler built-ins declared by that header. This is a component boundary shared across targets, not a platform-specific list of excluded built-in symbols.

## Prepare the selected product

The component maintains one common binding configuration. Windows and macOS integrations provide their profiles; Browser integration supplies its explicit wasm32 ABI, managed runtime and static-library name. Static products use `INNO_STATIC_NATIVE` and do not initialize a dynamic loader.

Host-source generation owns the component's generated managed source and native support source. Target generation owns matching managed/native outputs together under the selected generation fingerprint. Do not combine bindings from one generation with a library from another.

The SDL toolchain accepts a frozen context and ordered options. Recipe creation describes inputs without starting tools, creating staging output or reading generated output. Normal product preparation composes the required dependencies and retains their reading protection through compilation and linking.

Keep the returned native product alive until deployment or linking finishes. Cancellation and missing or invalid deployment files remain failures. The existence of a previously installed directory does not certify a successful current preparation.

## Troubleshooting boundaries

For an owner-thread exception, inspect the actual executing thread and host dispatch path. For a missing export, inspect the selected binding generation and exact deployed native module. For shutdown problems, inspect outstanding callbacks, adopted-window ownership and active consumers before releasing the application.

Retain the first failure and its source/target identities. Do not patch generated declarations, replace a DLL manually, destroy an externally owned window or delete a lease to bypass the problem.

This page describes implemented contracts. It does not assert that every target, physical device, focus sequence or live-resize scenario has completed acceptance for the current candidate.

## Related reading

- [Platforms and products](../platforms/index.md) explains selection and composition.
- [Build artifacts and consumer protection](../architecture/build-artifacts.md) explains generation reuse and safe deployment.
- [Ownership and lifetime](../architecture/ownership.md) explains borrowing and retirement across the engine.

- [Managed platform adapter reference](projects/inno-adapter-platform-sdl3.md) supplies exact host contracts.
- [SDL build integration reference](projects/inno-build-toolchains-sdl3.md) supplies recipe and preparation contracts.
