---
title: Inno.Text.Runtime
description: Session-owned font faces, immutable artifact leases and text execution scopes.
uid: project.inno-text-runtime
kind: project
owners:
  - Inno.Text.Runtime
---
# Inno.Text.Runtime

`TextRuntime` implements the neutral text service for one runtime session. Construction transfers ownership of the supplied backend; artifact lookup remains a borrowed service. The runtime does not own rendering resources or scene objects.

## Font lifetime contract

The runtime requires a live font with imported metadata and a valid collection face index. On first use it acquires `font-data`, reads its immutable bytes, loads a backend face and retains the artifact lease. A rejected load releases the candidate artifact. Its face cache is keyed by persistent font ID, content version and face index; reimported content does not silently reuse an old face.

The session binds `TextExecutionContext` at frame start. An explicit `EnterExecutionScope` is available to a host that already owns the runtime. Dispose scopes in reverse entry order. Calls after runtime stop fail; the face dictionary and backend are not a concurrent service.

Stop attempts each face release and its artifact disposal, clears the cache, then disposes the backend. It collects failures in an `AggregateException`. This current implementation marks itself disposed before cleanup and does not retain failed face releases for a later retry. Do not describe it as retryable deferred retirement.

## Composition and ordering

`TextRuntimeFactory` registers `inno.runtime.text` at order `-800`, before scene simulation. It calls the supplied factory for each session and rejects a null result. UI's session subsystem depends on Text; the factory itself does not choose a native library or discover backend implementations.

Use [the text task](../../manual/text/shape-text.md) for normal runtime calls and [backend selection](inno-adapter-text.md) for composition. [Exact runtime members](../../api/engine/text/runtime/index.md) include the lifecycle overrides and public host entry points.
