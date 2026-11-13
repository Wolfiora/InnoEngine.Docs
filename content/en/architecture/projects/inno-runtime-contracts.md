---
title: Inno.Runtime.Contracts
description: "Neutral subsystem lifecycle, finite frame phases and owned retirement protocols."
uid: project.inno-runtime-contracts
kind: project
owners: [Inno.Runtime.Contracts]
exampleMode: host
exampleProjects: [Inno.Runtime.Contracts]
---
# Inno.Runtime.Contracts

Neutral subsystem lifecycle, finite frame phases and owned retirement protocols.

Start with [composing a runtime host](../../extending/runtime-host.md) and [runtime lifetime](../runtime-lifetime.md).

## Domain runtime boundary

This assembly defines subsystem lifecycle using Foundation Events, Diagnostics, Execution, Identity and type-catalog contracts. Domain runtime projects depend on it without acquiring Scene, Assets, Rendering, Audio, Editor or backend implementations. `Inno.Runtime` supplies full pipeline ordering and Session composition.

## Extension points

`RuntimeSubsystem` exposes `OnStart`/`OnStop` for domain resources and finite frame hooks: BeginFrame, FixedUpdate, Update, LateUpdate, PrepareOutput, ProduceOutput, CompleteOutput and EndFrame. `OwnFrameScope` records facade bindings that must leave their scope. The subsystem's `lifetime` tracks its own resources, cancellation and work.

Repeated attachment, a wrong thread or a phase without BeginFrame fails. If frame entry fails, close the scopes already entered. AudioRuntime composes an audio device; inheriting a device just to reuse handle encoding would confuse ownership. Core Layer/LayerStack continues to own local application/UI ordering independently of subsystem scheduling.

## Startup and resource contract

The Host owns the Pipeline/Session before invoking factories or Attach. Each factory receives a separate `context.resources` lifetime; an optional subsystem failure cannot dispose a sibling's resources. Register resources and Tasks not yet transferred to the returned instance in that lifetime. The engine cannot recover work secretly retained in a user static field.

Attach failure leaves full draining to the outer owner rather than attempting a partial self-disposal. Dependency ordering, missing-dependency/cycle checks and reverse phase unwinding belong to RuntimeSubsystemPipeline. Collectible generations retain the existing GenerationCoordinator; a subsystem does not create another GC barrier.

## Pending versus terminal cleanup failure

Dispose first cancels tracked work. If it has not quiesced, report `RetirementPendingException` without calling OnStop. Preserve the owner and its dependencies, then retry after work drains. Do not wrap Pending as an ordinary aggregate and continue destroying dependencies.

OnStop can itself report Pending and be retried. Once OnStop completes, a later lifetime Pending does not cause that completed stop callback to run again. Actual terminal cleanup errors are aggregated. This contract cannot forcibly kill arbitrary plugin threads or authorize releasing owner-thread resources on a worker.

## Capabilities and optional systems

Composition supplies capabilities already checked against the device/services; runtime code does not guess the OS or backend. Missing capabilities or dependencies prevent factory invocation. An unavailable optional dependency makes optional consumers unavailable; required consumers reject the owner.

Duplicate IDs, cycles and lifetime mismatches are always configuration errors, even for optional systems. Frame and retirement exceptions are not optional degradation: they propagate, with no automatic restart or silent skipped frame.

## Host usage

Supply live, explicitly owned dependencies as described above. These examples compile against the host contract; they do not initialize a complete product or verify a device.

```csharp
using Inno.Runtime.Contracts;

public sealed class CounterRuntime : RuntimeSubsystem
{
    public double elapsed { get; private set; }

    protected override void OnUpdate(RuntimeFrame frame)
    {
        elapsed += frame.unscaledDeltaTime;
    }
}
```
```csharp
using Inno.Runtime.Contracts;

var descriptor = new RuntimeSubsystemDescriptor(
    new RuntimeSubsystemId("sample.capture"),
    lifetime: RuntimeSubsystemLifetime.Host,
    requirement: RuntimeSubsystemRequirement.Optional,
    requiredCapabilities: [new RuntimeCapabilityId("sample.frame-capture")]);
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/Inno.Runtime.Contracts.csproj) defines the host declarations. Source API extraction does not establish script visibility, native behavior or completed generation retirement.

## API reference

[Browse exact types and members](../../api/engine/runtime/contracts/index.md).
