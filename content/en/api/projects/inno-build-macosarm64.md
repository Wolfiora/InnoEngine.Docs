---
title: Inno.Build.MacOSArm64
description: "macOS ARM64 SDK, product layout and Support Pack preparation."
uid: project.inno-build-macosarm64
kind: project
owners: [Inno.Build.MacOSArm64]
---
# Inno.Build.MacOSArm64

macOS ARM64 SDK, product layout and Support Pack preparation.

Start with [the platform task guide](../../platforms/select-target.md).

## Platform ownership

This platform module owns the implemented target, SDK resolver, Support Pack source, validator, layout and publication templates. Backend owners retain component source, native facades and third-party recipes. The module has no program entry point and shared Build does not depend on it.

`MacOSArm64BuildModule.CreateContribution` returns a completely bound immutable contribution. It selects the explicit target independently of the executing process CPU. Platform packaging factories do not receive authoring services; BGFX content compilers and native/shader profiles belong to the separate integration.

## Frozen preparation and publication

The Support Pack source uses shared preparation with the selected product, templates, layout, SDK provider and precise native plan. Validation checks source, generator, managed/native closure and platform file types before commit. Failure or cancellation preserves the previous complete output. Consumers use the published immutable generation under read protection.

The publication template declares an exact `TargetPath` for each native file and combines it with `PublishDir` using MSBuild path normalization. It does not rely on a trailing separator or infer deployment from the source path. The Pack and `PlayerLink` retain matching native inputs for deployment and final linkage. Validation compares counts and hashes in both locations of the generation selected by `current`.

`MacOSEditorBundle.targets` and `MacOSEditor.Info.plist` own the development Editor app-bundle shape. `DevelopmentProduct.props` exposes the selected targets through `InnoDevelopmentEditorTargets`; the generic entry project does not carry macOS-specific inputs.

## Shader and product inputs

`ProductBuild.props` selects MacOSArm64 with Metal, Vulkan and OpenGL. Editor and Player passes this selection through `InnoProductBuildProperties`, including SDK-added indirect references. `EditorProduct.props` adds the Editor ImGui features. Shared BGFX and ImGui backends do not maintain target-selection branches. These declared compilation options are not proof of device support.

Adding an architecture requires an actual SDK, ABI, runtime and layout implementation with matching validation; it does not justify copying products or shared backends. Packaging and signing are documented only when implemented.



## Source and validation boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/Inno.Build.MacOSArm64.csproj) defines this engine-owned surface. Host CLR declarations do not establish game-script exports, native execution or cross-platform certification. Platform, ABI and real-device checks remain separate from compiling the examples.

## API reference

[Browse exact types and members](../types/platform-services/inno-build-macosarm64/index.md).
