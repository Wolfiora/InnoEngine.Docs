---
title: Inno.Build.Managed.DotNet
description: "Explicit CoreCLR, Mono WebAssembly and NativeAOT deployment compilation for prepared engine products."
uid: project.inno-build-managed-dotnet
kind: project
owners: [Inno.Build.Managed.DotNet]
---
# Inno.Build.Managed.DotNet

Explicit CoreCLR, Mono WebAssembly and NativeAOT deployment compilation for prepared engine products.

Read the linked task or ownership explanation before using the exact API below.

## Select a compiler through product composition

[Publish a managed deployment](../dotnet-publishing.md) explains strategy selection, SDK resolution, native closure validation, execution aliases, cancellation and diagnostic files. Platform contributions declare supported RIDs; a declared capability is not proof that this host has the required cross-compilation workload.

The library implements the neutral Managed compiler contract using Toolchains SDK/process services. Scene/content orchestration, final packaging, signing and UI remain outside it. Existing prepared-project examples belong to [managed build contracts](../../architecture/projects/inno-build-managed.md).

## Ownership and verification

Compilers borrow the supplied tool host and workspace service, freeze supported identifiers and return a validated compilation result. Internal publishing request/executor classes are implementation details. The caller owns final staging/publication. Successful compilation still needs actual product execution and any applicable device or visual checks.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/DotNet/build/Inno.Build.Managed.DotNet/Inno.Build.Managed.DotNet.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-build-managed-dotnet.md) retain declarations and source XML from the recorded engine capture.
