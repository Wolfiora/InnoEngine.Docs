---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9ffabec7a9ebd03244bc4056ee45945aba8c22f71e6262be3add13d5c360165f
symbol: engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.TryAcquireChange(System.String,System.IDisposable@)
title: GenerationCoordinator.TryAcquireChange
kind: api
owners:
- Inno.Extensibility.Reload
apiSurface: source-clr
reviewed: 51d3965e05f0baf20787945357c9d4497596ab64a160c2f362f6019e90f1a7c9
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
