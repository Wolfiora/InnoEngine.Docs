---
title: BGFX implementation boundary
description: The rendering backend's native implementation and deployment boundary.
uid: api.projects.inno-native-bgfx
kind: project
owners:
  - Inno.Native.Bgfx
contracts:
  - architecture.build-artifacts
---
# BGFX implementation boundary

Inno.Native.Bgfx supplies the native implementation consumed by the engine's BGFX rendering adapter and component tooling. Application and runtime code use engine rendering contracts. A generated BGFX handle or pointer is not an engine-owned resource and must not become part of a neutral public interface.

## Choose the engine boundary

The rendering adapter owns translation between engine resources and BGFX. Offline tool execution belongs to the BGFX build toolchain; the native project does not run shader tools or choose product build policy. Platform products supply the surface integration and explicit target configuration.

Keep resource cleanup inside the owning rendering lifecycle. A copied handle does not extend resource life, and returning from a managed submission is not a GPU completion fence. See [resource ownership](../../architecture/ownership.md) before retaining or releasing resources across frames.

## Deployment contract

The selected product supplies matching bindings, initialization mode and native payloads. Static products do not initialize a dynamic loader. Dynamic initialization resolves explicitly deployed libraries; runtime loading does not search the repository for a convenient cached binary. Missing deployment fails visibly.

[Build artifacts and consumer protection](../../architecture/build-artifacts.md) explains why each consumer retains its own reading protection even when the producer reuses a complete artifact. Binding generation alone does not certify a device, graphics API or target.

## Documentation scope

This page documents the engine integration boundary. Upstream BGFX functions, ABI structures and generated binding members are outside the engine reference. The implementation and its native regression tests remain necessary parts of the selected product.
