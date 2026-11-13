---
title: Use the BGFX rendering backend
description: Create, submit and retire an engine rendering device without losing
  its window and resource owners.
uid: backends.bgfx
kind: how-to
owners:
  - Inno.Adapter.Rendering.Bgfx
contracts:
  - project.inno-adapter-rendering-bgfx
---
# Use the BGFX rendering backend

BGFX implements the engine's neutral rendering contracts. Use it through the selected product's rendering provider and `IRenderDevice`; game code does not call native BGFX bindings. Offline shader and texture tools belong to Build and are absent from the runtime adapter and Player closure.

Read [rendering tasks](../manual/rendering/index.md) before extending the backend. This page describes InnoEngine's integration, not the upstream native API.

## Prepare an explicit surface

A windowed device requires `IBgfxSurfaceIntegration`. The platform integration validates its ABI and surface role and supplies borrowed window/display handles. The common adapter does not choose Win32, Cocoa or Canvas by inspecting the host OS. Headless devices need no fictional window integration.

Surface validation happens before acquiring the process device lease. The host must retain the actual window until rendering retirement completes. Initial backbuffer size uses physical drawable pixels, avoiding a first-frame logical-to-physical resize on HiDPI displays.

## Follow the API-thread lifecycle

1. Create the device on its BGFX API thread. One process supports one active BGFX device at a time.
2. Call `BeginFrame` to process pending size/synchronization changes and eligible deferred destruction.
3. Execute compiled RenderGraphs in their declared order. Close every graph and encoder even when submission fails.
4. Call `EndFrame` once after all encoders have ended.
5. Retire surfaces and dispose the device on the same API thread, retaining owners until completion.

A second concurrent device fails before entering native code. After an ordinary device completes shutdown, another ordinary device may be created. Inline/single-threaded BGFX startup consumes process-global state: after that mode shuts down, do not reinitialize BGFX with any threading policy in the same process. Restart the host instead. Process-isolated tests are necessary for those cases.

## Submit supported resources

The adapter maps neutral texture, buffer, program, framebuffer and command handles to BGFX. It supports explicit copy/blit, partial updates, texture containers, draw variants, dispatch and asynchronous readback within the advertised capability snapshot. Unsupported combinations fail at the graph or direct-command boundary; a plugin may choose an explicit alternative based on the same snapshot.

Storage buffers and images are supported by compute programs, not BGFX graphics bindings. Read/write image access requires both format capability bits. Readback reads a complete mip from an eligible transfer texture: copy or blit into that texture first instead of combining multisample, attachment or storage usage. The backend retains the unmanaged readback buffer until its deadline or cancellation can be processed safely on the API thread.

`UpdateTextureRegion` validates mip bounds, layers/faces and exact byte counts before the native call; it does not replace the persistent handle or device generation. `Draw` does not become procedural merely because a vertex buffer is absent: use `DrawProcedural`. Indirect commands submit the selected ranges and still require the relevant capabilities.

## Understand cached and deferred ownership

Framebuffer reuse matches actual attachments, including texture, mip, layer and depth/color role. A changed pass name is not a resource identity. Destroying a native handle does not immediately return BGFX capacity; frame advancement completes retirement.

Compiled pass order becomes explicit BGFX view order. Each `BeginFrame` resets previously used views, removing cross-frame references. A physical alias slot owns one transient texture; persistent textures enter through persistent handles. On successful program creation, the program takes the remaining shader ownership, so pipeline retirement does not maintain a second shader owner.

`SetVerticalSync` is idempotent and combines its reset with the next frame's resize. Noop preserves logical size/policy and advances frames without meaningless backbuffer resets. Submission and allocation counters represent successful work in the current generation; diagnostics are exposed through the common device interface.

## Close windows safely

Surface retirement stops new submissions and completes only after a monotonic managed submission sequence confirms that commands no longer use the window. It is not a general GPU fence, a guessed number of deferred frames or a comparison between wrapping native frame counters.

Final drain uses complete discard frames. The main window remains alive; presentation may advance. A non-presenting flush is not a portable full-frame completion boundary. If retirement fails or times out, retain the device and window owners. Only successful retirement permits closure checks, native shutdown, readback cleanup and release of the process lease.

Wrong-thread access, stale generations, missing frame boundaries, nested encoders/graphs and open encoders at frame end fail explicitly. Finalizers and asset callback threads must not destroy GPU resources. Native `uint` frame values remain protocol/diagnostic values; internal deadlines and retention use monotonic managed sequences to survive wraparound.

## Diagnose failures

Keep native output, host boot logs and process-exit evidence. A shutdown-start message alone does not prove disposal. Inspect managed resource closure, handle destruction ordering, complete native shutdown and actual process exit separately. A third-party retain-count warning alone is insufficient to establish an engine leak; a nonempty engine resource table still fails acceptance. Do not suppress warnings or change third-party code to manufacture a clean log.

Runtime loading consumes the product's declared deployment only. It does not search repository caches, build missing native code or invoke shaderc. See [BGFX shader preparation](bgfx-shaders.md) for the authoring side and the [managed adapter reference](projects/inno-adapter-rendering-bgfx.md) for exact contracts.
