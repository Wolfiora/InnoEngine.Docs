---
title: Inno.Adapter.Rendering.Bgfx
description: "The engine's managed BGFX device, graph, surface and resource-lifecycle adapter."
uid: project.inno-adapter-rendering-bgfx
kind: project
owners: [Inno.Adapter.Rendering.Bgfx]
---
# Inno.Adapter.Rendering.Bgfx

The engine's managed BGFX device, graph, surface and resource-lifecycle adapter.

Read the linked task or ownership explanation before using the exact API below.

## Begin with the device lifecycle

[Use the BGFX backend](../bgfx.md) describes API-thread setup, capability checks, one-device process ownership, frame boundaries, readback and complete window/device retirement. Window handles are borrowed from an explicit platform integration. Public rendering callers use neutral handles; native bindings remain an implementation detail.

## Product and provider composition

BgfxRenderingBackendProvider constructs registration descriptions without starting native services. Device and composition-program creation return caller-owned services, subject to device/thread/process constraints. Platform ProductBuild.props supplies shader target and graphics API settings through the shared product properties. This adapter consumes embedded verified Composition/OutputTransfer artifacts; it neither maintains a second platform selection table nor compiles source at runtime.

## Resource and failure contracts

Frames reset prior view references, map graph pass order explicitly and defer native destruction until safe submission boundaries. Window retirement completion means submitted commands have released the window, not a universal GPU fence. Failed retirement retains owners. Disposal succeeds only after surface retirement, managed closure, native shutdown and final readback/process-lease release. Wrong-thread use, stale generation handles and invalid frame/encoder ordering fail explicitly. The exact declarations below refine these shared obligations.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/Inno.Adapter.Rendering.Bgfx.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](inno-adapter-rendering-bgfx.md) retain declarations and source XML from the recorded engine capture.
