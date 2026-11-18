---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9ffabec7a9ebd03244bc4056ee45945aba8c22f71e6262be3add13d5c360165f
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.TryAcquireChange(System.String,System.IDisposable@)
title: GenerationCoordinator.TryAcquireChange
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
sourceFingerprint: c87b9b70a9232290974a795aaa7b33f030f628ce593a9ee92c1debbf0c0f8d15
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operation`:** The operation name used when a terminal failure rejects admission.

**Parameter `reservation`:** Receives the exclusive reservation, or null when the caller must defer mutation.

## Returns

True only when no reader, generation change or retirement is active.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The generation owner is Faulted and requires a host restart.
