---
title: Inno.Build.BrowserWasm32
description: "Browser SDK, product layout and Support Pack preparation."
uid: project.inno-build-browserwasm32
kind: project
owners: [Inno.Build.BrowserWasm32]
---
# Inno.Build.BrowserWasm32

Browser SDK, product layout and Support Pack preparation.

Start with [the platform task guide](../../platforms/select-target.md).

## Platform ownership

This platform module owns the implemented target, SDK resolver, Support Pack source, validator, layout and publication templates. Backend owners retain component source, native facades and third-party recipes. The module has no program entry point and shared Build does not depend on it.

`BrowserWasm32BuildModule.CreateContribution` returns a completely bound immutable contribution. It selects the explicit target independently of the executing process CPU. Platform packaging factories do not receive authoring services; BGFX content compilers and native/shader profiles belong to the separate integration.

## Frozen preparation and publication

The Support Pack source uses shared preparation with the selected product, templates, layout, SDK provider and precise native plan. Validation checks source, generator, managed/native closure and platform file types before commit. Failure or cancellation preserves the previous complete output. Consumers use the published immutable generation under read protection.

Browser owns Emscripten discovery, static aggregation and static-site layout. The provider evaluates the actual WebAssembly Player publication template using the selected .NET SDK/workload to find clang, sysroot, Node and Python. CMake and Ninja are separate host prerequisites on PATH. Supported execution hosts are Windows x64 and macOS ARM64; the output remains wasm32.

Page templates `index.html` and `main.js` are frozen by content and materialized into the execution copy before use. Emscripten identity includes LLVM binaries, Python runtime/source, SDK tools and sysroot headers. Derived `__pycache__` is excluded; CMake directs bytecode to the selected workspace's `CMake/PythonCache`. Changing SDK inputs selects another workspace.

Aggregation imports selected backend-owned `StaticLibraries.cmake` files. `Components.cmake` passes explicit engine, component and target bridge locations; the SDK-required `wasm_sjlj_shim.c` stays at this toolchain boundary. Native preparation and final .NET linkage consume the same frozen bindings, archives and tools. Required WebGL 2, callback and exception/longjmp semantics remain intact. Interpreted Mono and AOT are separate managed deployments.

The validator consumes the same immutable product-native plan and rejects missing, extra or foreign binaries. Archives retain `Native/<component>/browser-wasm/<archive>` layout. Browser bindings use the SDK static export table; desktop bindings use the deployed library index. Browser has no Editor product or ImGui resource closure.

## Shader and product inputs

`ProductBuild.props` selects BrowserWasm/OpenGLES. The Player passes this selection through `InnoProductBuildProperties`, including SDK-added indirect references. Shared BGFX and ImGui backends do not maintain target-selection branches. These declared compilation options are not proof of device support.

Adding an architecture requires an actual SDK, ABI, runtime and layout implementation with matching validation; it does not justify copying products or shared backends. Packaging and signing are documented only when implemented.



## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Inno.Build.BrowserWasm32.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../types/platform-services/inno-build-browserwasm32/index.md).
