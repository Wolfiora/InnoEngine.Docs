---
title: Inno.UI.Runtime
description: Session-owned UI service, input capture, imported document loading and retained font artifacts.
uid: project.inno-ui-runtime
kind: project
owners:
  - Inno.UI.Runtime
---
# Inno.UI.Runtime

`UiRuntime` connects the neutral UI contract to one selected backend and an asset artifact lookup. `UiRuntimeFactory` creates a new instance for each runtime session. Product composition supplies the actual backend and its prerequisites.

## Session and font ownership

The runtime takes responsibility for disposing its backend and borrows the artifact lookup. Keep the lookup alive until runtime shutdown finishes. The factory declares an Input dependency and ordering -700; each frame captures the active input snapshot and binds the UI service through an owned execution scope.

Loading an imported document rejects Missing assets, absent runtime payloads, incompatible implementation identities and unsupported languages. Declared font artifacts are acquired before the backend loads the document. Registration identity includes the document content version, font identity, face, family, style and weight; matching registrations share a reference count.

Closing a document or destroying its context releases corresponding font references after the backend operation succeeds. Stop attempts backend disposal and remaining artifact releases, reporting collected failures. Cleanup failures are not proof of complete release, and stop is not an atomic rollback across native and asset owners.

## Input and presentation

The implicit update overload uses captured input without converting whole-window coordinates to an embedded viewport. Use the explicit `UiInputSnapshot` overload when the host must map input. The runtime returns backend-produced events and frames; a separate rendering integration owns GPU submission and retirement.

## Use and extension

Start with [displaying a document](../../manual/ui/use-documents.md). For product composition and shutdown reasoning, read [UI lifetimes](../ui-lifetime.md). Runtime factories are host APIs; ordinary scripts consume the exported UI service instead of constructing a runtime.

## Reference

[Browse types and exact member contracts](../../api/engine/ui/runtime/index.md).
