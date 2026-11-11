---
title: SDL3 implementation boundary
description: Where SDL3 belongs in the engine and which managed interface to use.
uid: api.projects.inno-native-sdl3
kind: project
owners:
  - Inno.Native.Sdl3
contracts:
  - backends.sdl3
---
# SDL3 implementation boundary

Inno.Native.Sdl3 is the backend implementation used by the engine's SDL3 platform adapter. Application code uses the engine's window, event and input contracts. Start with [SDL3 integration](../../backends/sdl3.md) or [reading input](../../manual/input/read-input.md).

## Shared ABI contract

Product preparation selects matching managed bindings, native payloads and runtime inputs for the target. A generated declaration is not proof that the corresponding deployment is valid. The adapter owns window lifetime, event routing and owner-thread access; raw addresses do not replace those protections.

Keep module access available through resource cleanup. Static and dynamic linkage are explicit product choices, not a fallback search through arbitrary build caches. [Build artifacts and deployment](../../architecture/build-artifacts.md) explains the engine's producer and consumer responsibilities.

## Documentation scope

Third-party SDL functions, structures, enums and generated bindings are not part of this engine documentation. Use the pinned upstream SDL material when working inside the native implementation. The [original SDL license](../../../../public/third-party/sdl/LICENSE.txt) is retained unchanged.
