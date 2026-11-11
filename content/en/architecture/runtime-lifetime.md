---
title: Runtime ownership and retirement
description: Follow host, Session, subsystem and adapter ownership through startup, frames and incomplete shutdown.
uid: architecture.runtime-lifetime
kind: explanation
owners: [Inno.Runtime, Inno.Runtime.Contracts, Inno.Shell, Inno.Player.Runtime]
---
# Runtime ownership and retirement

The runtime separates application resources, shared engine services, per-Session state and domain subsystems. Keeping those owners distinct lets Editor and Player reuse lifecycle mechanisms without sharing mutable gameplay state or destroying another scope's resources.

## Ownership boundaries

| Owner | Responsibility |
| --- | --- |
| Shell | Platform application, primary window, input source, rendering device and frame loop. |
| EngineHost | Explicit metadata sources and application-level services. |
| RuntimeSession | One Edit/Play/Player identity, events, diagnostics and domain execution scope. |
| RuntimeSubsystem | One domain's hooks, resources, tracked work and frame bindings. |
| Player application | Validated deployment metadata, handed-over content store and ordered launch/exit. |

Session borrows its content store and owns sinks created by its log factory. Product composition chooses storage and content locations; shared Session code does not discover deployment directories or create file logs. A script static facade is an access path through an execution scope, not the owner of this state.

## Prepare ownership before callbacks

Host ownership of the Pipeline/Session exists before factories or Attach execute. Each factory gets an independent lifetime for resources and Tasks not yet transferred to its returned subsystem. This lets a failed optional factory drain without releasing sibling resources.

Subsystem dependencies form a checked DAG. Missing required dependencies, duplicate IDs, invalid lifetimes and cycles fail explicitly. Optional requirements permit declared pre-start unavailability, not suppression of runtime frame failures.

Frame bindings entered before a failure unwind in reverse order. Complete the normal output and resource-retirement phases even when presentation is hidden; a nonvisible window is not a separate headless lifecycle.

## Pending is still owned

Disposal first cancels tracked work. While that work can still access dependencies, `RetirementPendingException` means the owner remains live. Preserve it and retry at the owner-thread safe point; do not aggregate the exception as ordinary cleanup and destroy dependencies anyway.

The stop callback runs after tracked work is quiescent. If it reports Pending, it may be retried. Once it completes, a later pending resource lifetime does not repeat the already completed callback. Terminal cleanup failures are reported separately from incomplete retirement.

This protocol cannot forcibly terminate arbitrary plugin threads. Work hidden in a static field is not automatically owned, and an asynchronous continuation is not proof of owner-thread execution.

## Product exit order

For the Player, retire the Session before Settings, Content, Engine and diagnostic owners. Shell then releases rendering, input, the window and platform application. The content-source object is borrowed; the verified store it hands over belongs to the Player.

Shell uses the existing Core retirement barrier and owner-thread retry policy. Its product-shutdown bound does not reset on each retry; timeout remains incomplete retirement and preserves dependencies. It is unrelated to the duration of legitimate SDK or third-party compilation.

Editor quiesces Play before dismantling its modules and layers. Collectible code follows the shared [generation barrier](generation-publication.md); it does not create a second subsystem-specific GC protocol. Faulted generation state blocks new Play, Build and Export until the host is replaced.

## Retain failure meaning

An ordinary cleanup error may be aggregated with other completed cleanup errors. Pending means release is unfinished; Faulted means continued operations are unsafe. Neither is a successful exit. Startup failure unwinds resources already acquired, and simultaneous execution/stopping failures retain both causes.

For concrete extension contracts, see [RuntimeSubsystem](../api/projects/inno-runtime-contracts.md), [Session composition](../api/projects/inno-runtime.md), [Shell](../api/projects/inno-shell.md) and [Player launch](../api/projects/inno-player-runtime.md).
