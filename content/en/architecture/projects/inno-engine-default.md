---
title: Inno.Engine.Default
description: "Default subsystem composition without a global service locator or duplicated product lists."
uid: project.inno-engine-default
kind: project
owners: [Inno.Engine.Default]
---
# Inno.Engine.Default

Default subsystem composition without a global service locator or duplicated product lists.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Compose domain factories

`EngineSessionComposition` binds the actual Session, adapter catalog/selection, input, artifacts, audio settings and optional audio override. `DefaultEngine.CreateSessionSubsystems` produces the generated Input, Storage, Animation, Audio, Text and UI factory collection. RuntimeSession supplies the Scene simulation bridge.

`DefaultEngine.CreateHostSubsystems` contributes Host-scoped Rendering. Editor and Play do not independently submit two frames for one GPU device. Concrete backend choices remain in the explicitly composed factories, not this shared policy.

The composition files declare one domain each. UI depends on Input and Text. Audio initialization failure is explicitly reported as muted. Animation builds its binding runtime from the TypeCatalog. Reporters and auxiliary registrations transfer to `context.resources` for reverse-order retirement.

## Keep diagnostics scoped to the actual owner

Session reporters need source identities containing their real runtime scope. Animation uses `RuntimeSubsystemContext.identities.domainId`, so concurrent Edit/Play Sessions sharing one DiagnosticHub do not revoke each other's reporters. This runtime identity is not persisted into assets or History.

A newer reporter for the same source still revokes the older generation; stale publication remains an error. Create the reporter before its borrowing binding owner, then release bindings before the reporter. Swallowing errors or disabling generation checks is not a lifetime solution.

## Extend the composition

The incremental generator is an Analyzer with `ReferenceOutputAssembly=false`, not a Player runtime dependency. Add the domain runtime reference and its declaration to the distribution; do not copy a full subsystem list into a new host. An Editor can override the Session audio factory to retain preview/Play management.

Duplicate IDs, invalid owner lifetimes, missing required dependencies and cycles reject startup. This policy does not install or activate arbitrary gameplay plugins, expose concrete adapters through host APIs or create a global service locator.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/default/Inno.Engine.Default/Inno.Engine.Default.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/engine/default/index.md).
