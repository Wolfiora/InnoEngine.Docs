---
title: Inno.Native.UI
description: Explicit native RmlUi module initialization and generated transfer ABI.
uid: project.inno-native-ui
kind: project
owners:
  - Inno.Native.UI
---
# Inno.Native.UI

This project initializes the deployed UI module and exposes generated bindings for InnoEngine's native RmlUi facade. Most hosts should use the [managed backend](inno-adapter-ui-rmlui.md), which owns sessions and completes buffer transfers. Generated declarations are an interop surface, not a second game-script UI API.

## ABI and ownership contract

The native `Runtime` owns isolated contexts and documents and participates in a shared process-wide RmlUi owner. The first session establishes the owner thread; additional live sessions must use that thread. Callers must serialize subsequent operations there as well. Not every native operation independently checks the thread.

Create and destroy opaque objects through their matching generated ABI operations. Never construct an object by copying pointer storage, free it through a different allocator, or retain pointers past owner disposal. UTF-8 source and input pixel buffers are borrowed during calls; the facade copies data that it needs to retain.

The result enum distinguishes success, invalid argument, out-of-memory, invalid handle, backend error, insufficient buffer and missing data. A success-looking output value does not override a failure result. Buffer counts and lengths must be checked before allocation and copy, including terminator space for event target strings. Do not acknowledge a frame until all requested deltas have transferred successfully.

Generated bridge status and the domain `Result` are separate failure channels. Read any per-call bridge error and release it with its matching generated error-release operation, including when handling another failure. Frame update indices are valid for that pending frame; do not carry them across the next `Render`. Event clearing is independent of frame acknowledgment.

Native font memory and retired rendering support stay protected until the final process-host session releases them. A managed asset lease and a native memory owner are separate responsibilities. Context/document IDs are process/session handles, not durable identities.

## Transfer data

Frame metadata identifies mesh updates, texture updates, released handles and commands. Texture outputs are premultiplied RGBA8; registered source textures are straight RGBA8 and are copied/premultiplied by the facade. Event payloads contain an event kind, document handle and UTF-8 target ID rather than third-party event objects.

Generated storage and function-table declarations follow the checked-in generator output and ABI configuration. Do not edit generated bindings or assume another target's layout. A bound declaration manifest does not certify that a library for every platform was built or executed.

## Module selection

The initializer selects generated runtime imports, static binding or explicit dynamic-library loading according to the build configuration. Dynamic products must deploy the exact selected library closure. The loader does not make a missing product dependency optional.

Read [RmlUi integration boundaries](../../backends/rmlui.md) and the [UI toolchain](inno-build-toolchains-ui.md) for preparation and deployment ownership.

## Reference

[Browse types and exact member contracts](../types/native-ui/index.md).
